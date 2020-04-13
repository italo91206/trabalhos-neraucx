<?php class Model_Agendamento extends Db { //AUTO COMPLETE CEP, VALIDAÇÃO CPF
	protected $collection = 'agenda';

 	Public function ajustaHora_corretor($data){
 		$hora_inicio = $data['hora_inicio'];
		$hora_fim = $data['hora_fim'];
		$almoco_inicio =  $data['almoco_inicio'];
		$almoco_fim =  $data['almoco_fim'];
		/**MANIPULACAO DA HORA ***/
		list($horaI, $minI) = explode(":", $almoco_inicio);				
		if($minI == 30)
			$minI = '00';				
		else{
			$minI = 30;
			$horaI--;
		}
		$hora_inicio_FIM = $horaI.":".$minI;
		list($horaF, $minF) = explode(":", $almoco_fim);				
		if($minF == 30){
			$minF = '00';
			$horaF++;
		}
		else
			$minF = 30;
		$hora_fim_INICIO = $horaF.":".$minF;	
		/*FIM MANIPULACAO DA HORA **/
		//$teste = json_decode($post['corretor_data']);
		$diasSemana = $data['diaSemana'];
		$scheduleNovo = array();
		$control = 0;
		foreach($diasSemana as $item){
			$scheduleNovo[$control]['hora_inicio'] = $hora_inicio;
			$scheduleNovo[$control]['hora_fim'] = $hora_inicio_FIM;
			$scheduleNovo[$control]['diaSem'] = $item;
			$control++;
			$scheduleNovo[$control]['hora_inicio'] = $hora_fim_INICIO;
			$scheduleNovo[$control]['hora_fim'] = $hora_fim;
			$scheduleNovo[$control]['diaSem'] = $item;
			$control++;
		}
		$scheduleNovo[$control]['controle'] = 'true';
		$scheduleNovo[$control]['dias_semana'] = $diasSemana;
		return $scheduleNovo;
 	}
			
	Public function listaHora_imovel($diaSemana,$objeto_horarios,$id_imovel,$data){
		$fragmentado = array();
		$horarios = array();
		$horariosAUX = array();

		// Objeto_horarios é a mesma coisa que o dados_imovel.schedule
		foreach($objeto_horarios as $item){
			$fragmentado[] = $item;
		}
		$cont = 0;
		foreach($fragmentado as $frag){
			$h = $frag->hora_inicio;
			$horarios[$cont] = array('hora' => $h, 'status' => true);
			$horariosAUX[$cont] = $h;
			$cont++;
			if($frag->hora_fim == '00:00'){
				$frag->hora_fim = '24:00';
			}
			do{
				list($hr,$m) = explode(':',$h);				
				if($m == '00'){
					$m = '30';
				}
				else{
					$hr++;
					$m = '00';
				}		
				$h = substr("000".$hr,-2).':'.$m;		
				if($h != $frag->hora_fim){
					$horarios[$cont] =  array('hora' => $h, 'status' => true);
					$horariosAUX[$cont] = $h;
					$cont++;
				}
				//	var_dump($horariosAUX);
			}while($h < $frag->hora_fim);
		}
		// sort($horarios);
		// sort($horariosAUX);

		$query = array();
		$query['property_ID'] = $id_imovel;
		$query['scheduled_at'] = $regex;
		$query['status'] = array('$nin' => [Standard::VISITA_CONCLUIDA, Standard::VISITA_CANCELADA, Standard::VISITA_CANCELADA_ADMIN]);
		$agenda_imovel = $this->selection_Agenda($query);			
		$file = fopen('agendamento-dump.txt', 'w');
		// fwrite($file, serialize($agenda_imovel));
		fwrite($file, serialize($agenda_imovel));
		fwrite($file, serialize($id_imovel));
		
		if($agenda_imovel){
			fwrite($file, 'Entrei aqui 1');
			foreach($horarios as $key => $value){
				foreach($agenda_imovel as $agenda){
					fwrite($file, 'Entrei aqui 2');
					if($data.' '.$value['hora'].':00' == $agenda['scheduled_at']){
						$horarios[$key]['status'] = false;
						fwrite($file, 'Entrei aqui 1');
					}
				}
			}
		}

		//$imovel->selectImovel($query);
		return $horarios;
	}

	Public function disponibilidade_corretores($data ,$hora ,$semana){
		$users = new Model_User();

		$query = array();
		$regex = new MongoDB\BSON\Regex ( "^5" ,"i");
		$query['group_id'] = $regex;

		$corretores = $users->listaUsers($query);
		$corretores_aprovados = array();
		foreach($corretores as $corr){
			$fragmentado = array();
			$horarios = array();
			$horariosAUX = array();
			$id_corretor = (array) $corr;
			$id_corretor = (array) $id_corretor['_id'];
			$id_corretor = $id_corretor['oid'];
			foreach($corr['schedule'] as $item){
				if(!isset($item->controle)){;
					if($item->diaSem == $semana){
						$fragmentado[] = $item;
					}
				}
			}
			$cont = 0;
			foreach($fragmentado as $frag){
				$h = $frag->hora_inicio;
				$horarios[$cont] = array('hora' => $h, 'status' => true);
				$horariosAUX[$cont] = $h;
				$cont++;	
				if($frag->hora_fim == '00:00'){
					$frag->hora_fim = '24:00';
				}
				do{
					list($hr,$m) = explode(':',$h);								
					if($m == '00'){
						$m = '30';
					}else{
						$hr++;
						$m = '00';
					}				
					$h = substr("000".$hr,-2).':'.$m;
					if($h != $frag->hora_fim){
						$horarios[$cont] =  array('hora' => $h, 'status' => true);
						$horariosAUX[$cont] = $h;
						$cont++;
					}
				}while($h < $frag->hora_fim);
			}
			if(!in_array($hora,$horariosAUX))
				continue;
			$query = array();
			$query['realtor_ID'] = $id_corretor;
			$query['scheduled_at'] = $data.' '.$hora.':00';
			$query['status']= array('$nin' => [Standard::VISITA_CONCLUIDA, Standard::VISITA_CANCELADA, Standard::VISITA_CANCELADA_ADMIN,Standard::VISITA_PENDENTE]);			
			if(!empty($this->selection_Agenda($query)))
				continue;
			$corretores_aprovados[] = $corr;
		}
		return $corretores_aprovados;
	}

	Public function envia_agendamentos_from_user($data){
		$imovel = new Model_Imovel();
		$query = array();
		$query['property_ID'] = $data->idimovel;
		$query['scheduled_at'] = $data->data.' '.$data->hora.':00';
		$query['status'] = array('$nin' => [Standard::VISITA_CONCLUIDA, Standard::VISITA_CANCELADA, Standard::VISITA_CANCELADA_ADMIN]);
		$consulta = $this->selection_Agenda($query);

		if(empty($consulta)){//REMOVER NEGAÇÃO 
			$corretores_disponiveis = $this->disponibilidade_corretores($data->data,$data->hora,$data->diaSemana);
			if(!empty($corretores_disponiveis)){
				$query['status'] = Standard::VISITA_PENDENTE;
				$query['realtor_ID'] = "";
				$query['visitor_ID'] = $data->iduser;
				$query['random'] = hash('md5', date('s').$query['scheduled_at']);
				$inserta_agenda = $this->insert_agenda($query);
				foreach($corretores_disponiveis as $corretores){
					$idCorretor = (array) $corretores->_id;
					$idCorretor = $idCorretor['oid'];
					$url = 'https://api.lukadigital.desenvolvendo.site/#/UrlAgenda/'.$query['random'].'/'.$data->data.'/'.$idCorretor;
					$this->envia_email($url,$corretores->email);
				}
				return true;
			}
		}
		else	
			return false;
	}

	Public function recebeURL_corretor($data){
		$user = new Model_User();
		$imovel_model = new Model_Imovel();
		$tipos = array(
			'Casa', 'Sobrado', 'Apartamento', 'Comercial' ,'Casa com salão comercial', 'Lazer', 'Terreno', 'Rural', 'Área', 'Salão', 'Sala');
		$query= array();
		$regex = new MongoDB\BSON\Regex ( "^".$data->data ,"i");
		$query['scheduled_at'] = $regex;
		$query['random'] = $data->random;
		$query['status'] = Standard::VISITA_PENDENTE;
		$consulta = $this->selection_Agenda($query);
		$consulta_imovel = $imovel_model->selectImovel_ID($consulta[0]->property_ID);
		$enderecoBonito = $tipos[$consulta_imovel->type-1].', '.$consulta_imovel->address->logradouro.', '.$consulta_imovel->address->numero.' - '.$consulta_imovel->neighbor;
        
        if(!empty($consulta)){
			$query = array();
			$query['random'] = $data->random;
			$query['scheduled_at'] = $regex;

			$insert = array();
			$insert['status'] = Standard::AGENDADO;
			$insert['realtor_ID'] = $data->idcorretor;

			$update = $this->update_agenda($query,$insert,true);//UPDATE AGENDA
			$data_hora = $consulta[0]->scheduled_at;

			$query = array();
			$query['_id'] = new MongoDB\BSON\ObjectID( $data->idcorretor);
			$corretor = $user->selectUser($query);
			$query['_id'] = new MongoDB\BSON\ObjectID( $consulta[0]->visitor_ID);
			$visitante = $user->selectUser($query);

			$string = file_get_contents("app/Model/templateHTML/confirmeCliente.html");
			
			$string = str_replace('VAR_NOME', $visitante->name, $string );
			$string = str_replace('VAR_ENDERECO', $enderecoBonito, $string );
			$string = str_replace('VAR_HORARIO',$data_hora, $string );
			$string = str_replace('VAR_CONTATO',$visitante->telephones->whats, $string );
            $this->envia_email($string, $visitante->email, '[arquivo] Nova visita agendada');
			
			$string = file_get_contents('app/Model/templateHTML/confirmeCorretor.html');
			$string = str_replace('VAR_NOME', $corretor->name, $string);
			$string = str_replace('VAR_ENDERECO', $enderecoBonito, $string );
			$string = str_replace('VAR_HORARIO',$data_hora, $string );
			$string = str_replace('VAR_CONTATO',$corretor->telephones->whats, $string );
            $this->envia_email($string, $corretor->email, '[arquivo] Um corretor confirmou sua visita'); 

			$retorno = array();
			$retorno['data'] = $data_hora;
			$retorno['imovel'] = $consulta[0]->property_ID;
			$retorno['imovel_rotulo'] = $consulta_imovel->rotulo;
			$retorno['tipo'] = $consulta_imovel->type;
			$retorno['nome_visitor'] = $visitante->name;
			$retorno['telefone_visitor'] = $visitante->telephones->whats;
			$retorno['foto_visitor'] = $visitante->foto;
			$retorno['imovel_nome'] = $enderecoBonito;
			return $retorno;
		}
		else
			return false;		
	}

	Public function cancela_agenda_visitor($id_agenda){
		$user = new Model_User();
		$imovel = new Model_Imovel();
		$visitante = new Model_User();
		$corretor = new Model_User();
		$tipos = array(
			'Casa', 'Sobrado', 'Apartamento', 'Comercial' ,'Casa com salão comercial', 'Lazer', 'Terreno', 'Rural', 'Área', 'Salão', 'Sala');

		$where = array();
		$where['_id'] =  new MongoDB\BSON\ObjectID($id_agenda);

		$get_agenda = $this->selectAgenda_one($where);
		$visitante = $user->selectUser_ID($get_agenda['visitor_ID']);
		$imovel = $imovel->selectImovel_ID($get_agenda['property_ID']);
		$enderecoBonito = $tipos[$imovel->type-1].', '.$imovel->address->logradouro.', '.$imovel->address->numero.' - '.$imovel->neighbor;

		$emailDestino = '';
		$assunto = '';
		if($get_agenda['realtor_ID'] == ''){ //Nao tinha nenhum corretor.
			$emailDestino = $visitante->email;
			$assunto = 'Agendamento cancelado';
		}
		else{
			$corretor = $user->selectUser_ID($get_agenda['realtor_ID']);
			$emailDestino = $corretor->email;
			$assunto = 'Seu agendamento foi cancelado pelo visitante!';
		}
		// O HTML PARA SER ENVIADO POSSUI 2 VARIAVEIS
		// VAR_ENDERECO / VAR_HORARIO
		$schedule_at = explode(' ', $get_agenda->scheduled_at);
		
		$data = $schedule_at[0];
		$data = str_replace('-', '/', $data);

		$hora = $schedule_at[1];
		$hora = explode(':', $hora);
		
		$string = file_get_contents('app/Model/templateHTML/cancelamento.html');
		$string = str_replace('VAR_ENDERECO', $enderecoBonito, $string);
		$string = str_replace('VAR_HORARIO', $data.', '.$hora[0].':'.$hora[1], $string);
		$this->envia_email($string, $emailDestino, $assunto);
		
		$query = array();
		$query['status'] = Standard::VISITA_CANCELADA;

		$this->update_agenda($where,$query,true);
		return true;
	}

	Public function cancela_agenda_corretor($id_agenda){
		$user = new Model_User();
		$where = array();
		$where['_id'] =  new MongoDB\BSON\ObjectID( $id_agenda);
		$get_agenda = $this->selectAgenda_one($where);
		$get_visitante = $user->selectUser_ID($get_agenda['visitor_ID']);
		// O HTML PARA SER ENVIADO POSSUI 2 VARIAVEIS
		// VAR_ENDERECO / VAR_HORARIO
		// $string = file_get_contents("app/Model/templateHTML/cancelamento.html");
		// $string = str_replace('VAR_ENDERECO', $var, $string);
		// $string = str_replace('VAR_HORARIO', $var, $string);
		// $assunto = 'Seu agendamento foi cancelado pelo corretor!';
		
		// $this->envia_email($string, $get_visitante['email'], $assunto);

		list($data,$hora) = explode(" ",$get_agenda['scheduled_at']);
		$diaSemana = date('w',strtotime($data));
		$hora = explode(":",$hora);
		$hora = $hora[0].':'.$hora[1];

		$corretores_disponiveis = $this->disponibilidade_corretores($data,$hora,$diaSemana);
		foreach($corretores_disponiveis as $corretores){
			$idCorretor = (array) $corretores->_id;
			$idCorretor = $idCorretor['oid'];
			$url = 'https://api.lukadigital.desenvolvendo.site/#/UrlAgenda/'.$get_agenda['random'].'/'.$data.'/'.$idCorretor;
			$assunto ='....';
			$this->envia_email($url,$corretores->email, $assunto);
		}

		$query  =array();
		$query['status'] = Standard::VISITA_PENDENTE;
		$query['realtor_ID'] = "";

		$this->update_agenda($where,$query,true);
		return true;
	}

	Public function get_agenda($where){
		$consulta = $this->selection_Agenda($where);

		$imovel = new Model_Imovel();
		$user = new Model_User();
		foreach($consulta as $key => $value)
		{
			$visitante = $user->selectUser_ID($value['visitor_ID']);
			$imovel_visita = $imovel->selectImovel_ID($value['property_ID']);
			if($imovel_visita)
				$consulta[$key]['imovel'] = $imovel_visita;
			$consulta[$key]['visitante'] = $visitante['name'];
			if($value['realtor_ID'] != "")
			{
				$corretor = $user->selectUser_ID($value['realtor_ID']);
				$consulta[$key]['corretor'] = $corretor['name'];
				$consulta[$key]['corretor_telefone'] = $corretor['telephones']['whats'];
				$consulta[$key]['corretor_foto'] = $corretor['foto'];
				$consulta[$key]['visitante_telefone'] = $visitante['telephones']['whats'];
				$consulta[$key]['visitante_foto'] = $visitante['foto'];
			}
			else
				$consulta[$key]['corretor'] = 'Pendente';
		}
		return $consulta;
	}

	Public function alimenta_lista($pagina,$where = array(), $query_aux = false){
		$query = array();
		$imovel = new Model_Imovel();
		$user = new Model_User();
		
		// Tratamento da paginação
		if($pagina->pagina <= 0)
			return false;
		if($pagina->pagina > 1)
			$offset = ($pagina->pagina*$pagina->limite)-$pagina->limite;
		else if($pagina->pagina == 1)
			$offset = 0;

		if($query_aux)
		{
			$filtro = array();
			foreach($query_aux as $key => $data)
			{		
				$aux = str_replace(" ", "",$data);
				if(strlen($aux) > 0)
				{
					if($key == 'realtor_ID' || $key == 'visitor_ID')
					{
						$query_aux = array('name' => new MongoDB\BSON\Regex ( "^".$data ,"i") );
						$consulta_autor = $user->fetchRow($query_aux,array());
						$id = (array) $consulta_autor->_id;
						$filtro[][$key] = $id['oid'];
					}
					else if($key == 'property_ID')
					{
						$query_aux = array('rotulo' => new MongoDB\BSON\Regex ( "^".$data ,"i") );
						$consulta_imovel = $imovel->fetchRow($query_aux,array());
						$id = (array) $consulta_imovel->_id;
						$filtro[][$key] = $id['oid'];
					}
					else
						$filtro[][$key] =  new MongoDB\BSON\Regex ( "^".$data ,"i");
				}
			}
			$where['$and'] = $filtro;
		}

		$options = array();
		$options['limit'] = $pagina->limite;
		$options['skip'] = $offset;

		$result = $this->selectWithPagination($where ,$options);

		foreach($result as $key => $value)
		{
			$visitante = $user->selectUser_ID($value['visitor_ID']);
			$imovel_visita = $imovel->selectImovel_ID($value['property_ID']);
			if($imovel_visita)
				$result[$key]['imovel'] = $imovel_visita;								
			$result[$key]['visitante'] = $visitante['name'];
			if($value['realtor_ID'] != "")
			{
				$corretor = $user->selectUser_ID($value['realtor_ID']);
				$result[$key]['corretor'] = $corretor['name'];
				$result[$key]['corretor_telefone'] = $corretor['telephones']['whats'];
				$result[$key]['corretor_foto'] = $corretor['foto'];
				$result[$key]['visitante_telefone'] = $visitante['telephones']['whats'];
				$result[$key]['visitante_foto'] = $visitante['foto'];
			}
			else
				$result[$key]['corretor'] = 'Pendente';
		}

		$options = array();
		$return_data = array();
		$return_data['results'] = $result;
		$return_data['qtd_pag'] = count($this->selectWithPagination($where,$options) )/ $pagina->limite;
		$return_data['offset'] = $offset;

		return $return_data;
	}

	Public function get_agenda_admin($where){
		$query['_id'] =  new MongoDB\BSON\ObjectID( $where);
		$consulta = $this->selectAgenda_one($query);
		$imovel = new Model_Imovel();			
		
		$user = new Model_User();
		$visitante = $user->selectUser_ID($consulta['visitor_ID']);
		$imovel_consulta = $imovel->selectImovel_ID($consulta['property_ID']);
		$proprietario = $user->selectUser_ID($imovel_consulta['owner_id'][0]);
		if(!empty($proprietario)){
			$consulta['proprietario'] = $proprietario['name'];
		}
		if(!empty($imovel_consulta)){
			$consulta['rotulo_imovel'] = $imovel_consulta['rotulo'];
		}
		//return $proprietario;
		$consulta['visitante'] = $visitante['name'];
		if($consulta['realtor_ID'] != ""){
			$corretor = $user->selectUser_ID($consulta['realtor_ID']);
			$consulta['corretor'] = $corretor['name'];
		}else{
			$consulta['corretor'] = 'Pendente';
		}			
		return $consulta;
	}

	Public function update_agenda_admin($data){
		$idimovel = (array) $data;
		$idimovel = (array) $idimovel['_id'];
		$idimovel = $idimovel['$oid'];
		$where = array();
		$where['_id'] =  new MongoDB\BSON\ObjectID( $idimovel);

		$query = array();
		$query['property_ID'] = $data->property_ID;
		$query['realtor_ID'] = $data->realtor_ID;
		$query['random'] = $data->random;
		$query['scheduled_at'] = $data->scheduled_at;
		$query['status'] = (string)$data->status;
		$query['visitor_ID'] = $data->visitor_ID;

		$this->update_agenda($where,$query,true);
		return true;
	}

	Public function agendaAgora_et1($data){ // Vê se tem como agendar para hoje
		$imovel = new Model_Imovel();
		$query = array();
		$query['_id'] =  new MongoDB\BSON\ObjectID( $data->idimovel);
		$schedule = $imovel->selectImovel($query,array('schedule' => 1));

		/*$consulta_horarios = 	$this->listaHora_imovel($data->diaSemana,$schedule['schedule'],$data->idimovel,$data->data);
		list($hora_server,$minuto_server) = explode(':', $data->hora);
		if($minuto_server >= 30)
		 	$minuto_server = '00';
		else
			$minuto_server = '30';;
		$corretores_disponiveis = $this->disponibilidade_corretores($data->data,$hora_server.':'.$minuto_server,$data->diaSemana);
		if(empty($corretores_disponiveis))
			return false;

		foreach($consulta_horarios as $hora){
			list($aux_hora,$aux_minuto)= explode(':',$hora['hora']);
			if($aux_hora < $hora_server)
			 	continue;
			else{
			 	$horario_servidor = $hora_server.':'.$minuto_server;
			 	if($horario_servidor == $hora['hora'] && $hora['status'] == true){	
			 		$data->hora = $hora['hora'];
			 		return $data;
			 	}
			}
		}
		return false;*/
		
		return true;
	}

	Public function agendaAgora_et2($data){ // Realiza agendamento da visita no dia
		$user = new Model_User();
		$users = new Model_User();
		$query = array();
		$query['property_ID'] = $data->idimovel;
		$query['scheduled_at'] = $data->data.' '.$data->hora;
		$query['status'] = Standard::VISITA_PENDENTE;
		$query['realtor_ID'] = "";
		$query['visitor_ID'] = $data->iduser;
		
		// $file = fopen('agendamento.txt', 'a');
		// fwrite($file, serialize($data));

		$user = $user->selectUser_ID($data->iduser);

		$query['random'] = hash('md5', date('s').$query['scheduled_at']);
		$inserta_agenda = $this->insert_agenda($query);
		
		$query_aux = array();
		$regex = new MongoDB\BSON\Regex ( "^5" ,"i");
		$query_aux['group_id'] = $regex;
		$url = 'https://lukadigital.desenvolvendo.site/#/UrlAgenda/';
		$corretores_result = $users->listaUsers($query_aux);

		foreach($corretores_result as $corretores){
			$string = file_get_contents('app/Model/templateHTML/index.html');
			$idCorretor = (array) $corretores->_id;
			$idCorretor = $idCorretor['oid'];
			$assunto = 'Nova visita para '.$data->imovel->logradouro.', '.$data->imovel->numero;
			// para enviar o index.html
			// documento possui 54 variaveis: 
			// VAR_NOME / VAR_ENDERECO / VAR_HORARIO / VAR_HREF / VAR_DATA
			$string = str_replace(' %VAR_NOME% ', $user->name, $string);
			$string = str_replace(' %VAR_ENDERECO% ', 'Rua '.$data->imovel->logradouro.', '.$data->imovel->numero, $string);
			$string = str_replace(' %VAR_DATA% ', $data->data, $string);
			$string = str_replace(' %VAR_HORARIO% ', $data->hora, $string);
			$string = str_replace(' %VAR_HREF% ', $url.$query['random'].'/'.$data->data.'/'.$idCorretor, $string);
			$string = str_replace('%VAR_FOTO%', $user->foto, $string);
			$this->envia_email($string, $corretores->email, $assunto);			
        }
		return true;
	}

	Public function envia_email($mensagem, $email, $assunto){

		// O remetente deve ser um e-mail do seu domínio conforme determina a RFC 822.
		// O return-path deve ser ser o mesmo e-mail do remetente.
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=UTF-8\r\n";
		$headers .= "X-Sender: Luka Digital <contato@lukadigital.desenvolvendo.site>\r\n";
    	$headers .= 'X-Mailer: PHP/'.phpversion()."\r\n";
		$headers .= "From: Luka Digital <contato@lukadigital.desenvolvendo.site>\r\n"; // remetente
		$headers .= "Return-Path: contato@lukadigital.desenvolvendo.site\r\n"; // return-path
		// Fim de declaração dos headers
		$envio = mail($email, $assunto, $mensagem, $headers);
		$envio = mail('italo@av5.com.br', $assunto, $mensagem, $headers);
		
		// debugzera
		// $dataAux = time();
		// $data = date('d-m-Y H:i', $dataAux);
		// $file = fopen('mail-log.txt', 'a');
		// if( $envio )
		// 	fwrite($file, '[ OK ] ');
		// else
		// 	fwrite($file, '[ERRO] ');
		// fwrite($file, serialize($data));
		// fwrite($file, serialize($assunto));
		// fwrite($file, serialize($email));
		// fwrite($file, "\n");
		file_put_contents('emails/'.hash('md5',date('H:m:s:Y:u').$email.$mensagem),var_export($mensagem,true).PHP_EOL.var_export($email,true));
	}

	Public function getRota($iduser){
		$user = new Model_User();
		$pesquisa = new Model_Pesquisa();
		$imovel = new Model_Imovel();
		$id = new MongoDB\BSON\ObjectID( $iduser );
		$query = array('_id' => $id);
		$consulta_user = $user->fetchRow($query,array());
		$consulta_user = (array) $consulta_user->visited_now;
		if(!$consulta_user['now'])
			return false;
		$query = array('_id' => new MongoDB\BSON\ObjectID( $consulta_user['id_schedule'] ));
		$consulta_agenda = $this->fetchRow( $query , array() );
		if($iduser == $consulta_agenda->visitor_ID ){
			$query['_id'] = new MongoDB\BSON\ObjectID( $consulta_agenda->realtor_ID );
			//return 'é visitante';
		}
		else if($iduser == $consulta_agenda->realtor_ID){
			$query['_id'] = new MongoDB\BSON\ObjectID( $consulta_agenda->visitor_ID );
			//	return 'é o corretor';
		}
		$consulta_usuario = $user->fetchRow($query,array());
		$address = $consulta_usuario->addresses;
		$bairro = $consulta_usuario->addresses->bairro;			
		$city = 'Presidente Prudente';
		$prepara_string_latlon = $pesquisa->prepara_lalon($address,$bairro,$city);
		$latlon = $pesquisa->getLalon($prepara_string_latlon);
		$query['_id'] = new MongoDB\BSON\ObjectID( $consulta_agenda->property_ID );
		$consulta_imovel = $imovel->fetchRow( $query, array() );
		$resposta = array();
		$resposta['user'] = $latlon;
		$resposta['imovel'] = $consulta_imovel->latlon;
		return $resposta;
	}

	Public function update_agenda($where,$projection,$upsert = NULL){
		if($upsert){
			$upsert = array();
			$upsert['upsert'] = true;
		}
		$this->update($where,$projection,$upsert);
	}

	Public function selection_Agenda($where,$projection = NULL){
		return $this->fetchAll($where,$projection);
	}

	Public function selectAgenda_one($where,$projection =NULL){
		return $this->fetchRow($where,$projection);
	}

	Public function insert_agenda($where){
		return $this->insertOne($where);
	}

	Public function delete_agenda($where){
		$query = array();
		$query['_id'] =  new MongoDB\BSON\ObjectID($where);
		return $this->delete($query);
	}

	Public function selectWithPagination($where,$options = NULL){
		return $this->selectWithLimit_Pag($where,$options);
	}
}