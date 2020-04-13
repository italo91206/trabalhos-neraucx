<?php
class Model_Pesquisa extends Db { //AUTO COMPLETE CEP, VALIDAÇÃO CPF
	protected $collection = 'imovel';

	public	function retiraPreposicao($string){
		$string = str_replace(',', '', $string);
		$expressao = strip_tags ($string);
	
		// Retira preposições da expressão. É importante que haja um espaço antes e depois de cada expressão
		$palavrasSemPreposicao = str_ireplace ( array (
		" de ",
		" da ",
		" do ",
		" na ",
		" no ",
		" em ",
		" a ",
		" o ",
		" e ",
		" as ",
		" os "
		), " ", $expressao ); //Se você quiser fazer uma slug, ao invés de " " podes utilizar "-"
		 
		// var_dump($palavrasSemPreposicao);
		 //exit;
		//$palavrasSemPreoposicao terá o seguinte valor: branca neve sete anões
		// $palavrasSemPreposicao = str_replace(' ','', $palavrasSemPreposicao);
		// Explode as palavras em arrays, separando-as pelo espaço&nbsp;
		return explode ( " ", $palavrasSemPreposicao); //Retorna array com palavras sem preposições ou artigos
	}

	public function mascaraAction($palavra){
		$post['pesquisa'] = $palavra;
		$pesquisa = $this->retiraPreposicao($post['pesquisa']);		
 		$regex = new MongoDB\BSON\Regex ( "^".$palavra ,"i");
 		$regex2 =  new MongoDB\BSON\Regex ( "^novo" ,"i");
		
		$where = array();
		foreach($pesquisa as $item){
			/*if(strtolower($item) != 'jardim' && strtolower($item) != 'rua' && strtolower($item) != 'bairro' && strtolower($item) != 'avenida' && strtolower($item) != 'numero' && strtolower($item) != 'vila' && strtolower($item) != 'víla' ){*/
			$regex = new MongoDB\BSON\Regex ( "^".$item ,"i");
			$where[]['address.logradouro'] = $regex;
			$where[]['neighbor'] = $regex;
			$where[]['city'] = $regex;
			//$where[] = 'neighbor LIKE "%'.$item.'%" OR city LIKE "%'.$item.'%" OR address LIKE "%'.$item.'%"';
			/*	}*/
		}
		$query = array();
		$query['$or'] = $where;
		$query['status'] = array('$nin'=>array(Standard::INATIVO,Standard::PENDENTE)); 
		return $this->selectImovel_one($query);
	}

	Public function sugestao($data){
		$get_imoveis = $this->mascaraAction($data);
		$sugestoes = array();
		foreach($get_imoveis as $imoveis){
			if(!in_array($imoveis['address']['logradouro'],$sugestoes))
				$sugestoes[] = $imoveis['address']['logradouro'];
		}
			return $sugestoes;
	}

	Public function defineBusca($data,$pagina){
		$regex = new MongoDB\BSON\Regex ( "^".$data ,"i");
		$query = array();
		$query['$or'] = array(
				array(
					'address.logradouro' => $regex
				),
				array(
					'city' => $regex
				),
				array(
					'neighbor' => $regex,
				)
			);
		if($pagina <= 0)
			return false;
		if($pagina > 1)
			$offset = ($pagina*5)-5;
		else if($pagina == 1)
			$offset = 0;

		$options = array();
		$options['limit'] = 5;
		$options['skip'] = $offset;
		$result = $this->selectWithPagination($query ,$options);
		$options = array();
		$return_data = array();
		$return_data['results'] = $result;
		$return_data['qtd_pag'] = count($this->selectWithPagination($query,$options) )/ 5;
		$return_data['offset'] = $offset;
		return $return_data;
	}

	Public function selectWithPagination($where,$options = NULL){
		return $this->selectWithLimit_Pag($where,$options);
	}
	
	Public function selectImovel_one($where,$projection =NULL){
		return $this->fetchAll($where,$projection);
	}

	Public function getLalon($address){
		// Get cURL resource
		$curl = curl_init();
		// Set some options - we are passing in a useragent too here
		curl_setopt_array($curl, array(
			CURLOPT_RETURNTRANSFER => 1,
			CURLOPT_URL => 'https://geocoder.api.here.com/6.2/geocode.json?app_id=2ewqq8kCm03JX59wqCWf&app_code=EW-swpjb1s-Xy4Ju__foRg&searchtext='.$address,
			CURLOPT_USERAGENT => 'Codular Sample cURL Request'
		));
		// Send the request & save response to $resp
		$resp = curl_exec($curl);
		// Close request to clear up some resources
		curl_close($curl);
		$resp = json_decode($resp);
		if(count($resp->Response->View) == 0)
			return array();

		$aux_lalon = array();
		$aux_lalon[] = $resp->Response->View[0]->Result[0]->Location->NavigationPosition[0]->Latitude;
		$aux_lalon[] = $resp->Response->View[0]->Result[0]->Location->NavigationPosition[0]->Longitude;

		return $aux_lalon;
	}

	Public function prepara_lalon($address,$neighbor,$city){
		/*	$aux = explode(' ',$address->logradouro);
		$aux = implode('+',$aux);*/
		$aux_lalon = $this->limpaString($address->logradouro);
		$aux_lalon .= '+'.$address->numero;											
		/*	$aux = explode(' ', $neighbor);
		$aux = implode('+',$aux);*/
		$aux_lalon .= '+'.$this->limpaString($neighbor);
		/*$aux = explode(' ',$city);
		$aux = implode('+',$aux);*/
		$aux_lalon .= '+'.$this->limpaString($city);
		return $aux_lalon;
	}
	
	Public function limpaString($str) {
		$str = preg_replace('/[áàãâä]/ui', 'a', $str);
		$str = preg_replace('/[éèêë]/ui', 'e', $str);
		$str = preg_replace('/[íìîï]/ui', 'i', $str);
		$str = preg_replace('/[óòõôö]/ui', 'o', $str);
		$str = preg_replace('/[úùûü]/ui', 'u', $str);
		$str = preg_replace('/[ç]/ui', 'c', $str);
		// $str = preg_replace('/[,(),;:|!"#$%&/=?~^><ªº-]/', '_', $str);
		$str = preg_replace('/[^a-z0-9]/i', '_', $str);
		$str = preg_replace('/_+/', '+', $str); // ideia do Bacco :)
		return $str;
	}
}