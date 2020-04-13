<?php class Controller_Agenda extends Controller { //VALIDAÇÃO CPF, VALIDAÇÃO E-MAIL EXISTE, CPF EXISTE 
	
	public function _post(){
		if($post = (array) $this->getData('body'))
		{
			$imovel = new Model_Imovel();
			$agenda = new Model_Agendamento();
			$login = new Model_User();

			if($post['flag'] == 'listaHora_imovel' || $login->validaUser($post['key'],$post['iduser']))
			{
				if($post['flag'] == 'listaHora_imovel'){
				  	if($post['data'] != ""){
						$procura = array();
						$projection = array();
						/**AQUI SERA O RÓTULO **/
						/**APENAS NA POSICAO SCHEDULE**/
						$projection['schedule'] = 1;
				  		$schedule = $imovel->selectImovel($post['more'],$projection);
				  		$horarios = $agenda->listaHora_imovel(
							$post['data']->semana,
							$schedule['schedule'],
							$post['data']->id,
							$post['data']->data
						);
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$horarios);
				  	}
				}else if($post['flag'] == 'diasSemana'){//PEGA DIAS DA SEMANA
					$dias = array();
					for($i=0; $i < 5; $i++)
						{
		                	$dias[$i]['dia'] = date("d", strtotime("+".$i." days"));
		                	$dias[$i]['semana'] = date("w", strtotime("+".$i." days"));
		                	$dias[$i]['data'] = date("d-m-Y", strtotime("+".$i." days"));
		                	$dias[$i]['nomeSemana'] = Standard::getNomeSemana($dias[$i]['semana']);		                	     
						}
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$dias);
				}else if($post['flag'] == 'enviaAgenda'){
					if($post['data'] != "")
					{
				        $this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$agenda->envia_agendamentos_from_user($post['data']));	
					}
				}else if($post['flag'] == 'recebe_corretor'){
					if($post['data'] != "")
					{
						$consulta = $agenda->recebeURL_corretor($post['data']);
					    $this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$consulta);	
					}					
				}else if($post['flag'] == 'getAgenda'){
					if($post['data'] != "")
					{
						$consulta = $agenda->get_agenda($post['data']);
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$consulta);	
					}							
				}else if($post['flag'] == 'getAgendaAdmin'){
					if($login->validaAdmin($post['iduser']))
					{
						if($post['data'] != "")
						{
							$consulta = $agenda->get_agenda_admin($post['data']);
							$this->setResponse('status',Standard::STATUS200);
							$this->setResponse('data',$consulta);	
						}
					}							
				}else if($post['flag'] == 'cancelaAgenda_visitor'){
					if($post['data'] != "")
					{
						$consulta = $agenda->cancela_agenda_visitor($post['data']);
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$consulta);	
					}						
				}else if($post['flag'] == 'cancelaAgenda_corretor'){
					if($post['data'] != "")
					{
						$consulta = $agenda->cancela_agenda_corretor($post['data']);
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$consulta);	
					}						
				}else if($post['flag'] == 'updateAgendaAdmin'){
					if($post['data'] != "")
					{
						$consulta = $agenda->update_agenda_admin($post['data']);
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$consulta);	
					}						
				}else if($post['flag'] == 'agendaAgora_et1'){
					if($post['data'] != "")
					{
						$post['data']->diaSemana = date('w');
						$post['data']->hora = date('H:i');
						$post['data']->data = date('d-m-Y');
						$consulta = $agenda->agendaAgora_et1($post['data']);
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$consulta);	
					}
				}else if($post['flag'] == 'agendaAgora_et2'){//FAZ O AGENDAMENTO
					if($post['data'] != "")
					{
						$consulta = $agenda->agendaAgora_et2($post['data']);
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$consulta);	
					}
				}else if($post['flag'] == 'excluiAgenda'){
					if($login->validaAdmin($post['iduser']))
					{
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$agenda->delete_agenda($post['data']));	
					}
				}else if($post['flag'] == 'getRota'){
					$this->setResponse('status',Standard::STATUS200);
					$consulta_agenda = $agenda->getRota($post['iduser']);
					$this->setResponse('data',$consulta_agenda);
				}else if($post['flag'] == 'alimenta_lista'){
					$select = $agenda->alimenta_lista($post['data'],$post['where']);
					if($select)
					{
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$select);
					}
					else
					{
						$this->setResponse('status',Standard::STATUS405);
						$this->setResponse('data',false);
					}
				}else if($post['flag'] == 'filtroADMIN'){
					if($login->validaUser($post['key'],$post['iduser']) && $login->validaAdmin($post['iduser']))
					{
						$consulta = $agenda->alimenta_lista($post['configs'],array(),(array)$post['data']);
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$consulta);
					}
					else
					{
						$this->setResponse('data','invalidkey');
					}
				}
			}
			else
			{
				$this->setResponse('status',Standard::STATUS405);
				$this->setResponse('data',Standard::INVALIDKEY);
			}		
		}
	}		
}