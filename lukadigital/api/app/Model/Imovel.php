<?php
class Model_Imovel extends Db { //AUTO COMPLETE CEP, VALIDAÇÃO CPF
	protected $collection = 'imovel';

	Public function cria_rotulo($dados){
		$rotulos_model = new Model_Rotulos();
		$dados = explode(' ',$dados);
		$rotulo = implode('-',$dados);
		$quantidade = $rotulos_model->get_count();
		$quantidade++;

		$rotulo.= '-'.$quantidade;

		$query = array();
		$query['rotulo'] = $rotulo;
		$rotulos_model->insertRotulo($query);
		return $rotulo;
	}
	
	Public function insertImovel($dados){
			return $this->insertOne($dados);
	}

	Public function uploadIMGS($data,$rotulo){
		$img = $data;
		$count = 0;
		$urls = array();
		$rotulo = str_replace(' ', "", $rotulo);
		foreach($img as $data){
			list($type, $data) = explode(';', $data);
			list(, $data)      = explode(',', $data);
			$data = base64_decode($data);
			$caminho = 'fotoImoveis/'.$rotulo.$count.'.png';
			file_put_contents($caminho, $data);
			$urls[] = $caminho;
			$count++;
		}
		if($count > 0)
			return $urls;
		else
			return false;
	}

	Public function is_imovel_from_user($idimovel,$iduser){
		$query = array();
		$query['_id'] = new MongoDB\BSON\ObjectID( $idimovel);
		$query['owner_id'] =  $iduser;
		$consulta = $this->selectImovel($query);
		if($consulta)
			return true;
		else
			return false;
	}

	Public function alimenta_lista($pagina,$where = false,$query_aux = false){
		$query = array();
		if($where)
			$query['owner_id'] = $where;
		if($query_aux){
			$filtro = array();
			foreach($query_aux as $key => $data){
				if($key == 'address')
					$aux = str_replace(" ", "", $data->logradouro);
				else
					$aux = str_replace(" ", "",$data);
				if(strlen($aux) > 0){
					if($key == 'address')
						$filtro[]['address.logradouro'] =  new MongoDB\BSON\Regex ( "^".strtolower($data->logradouro) ,"i");
					else if($key == 'type')
						$filtro[][$key] = $data;
					else
						$filtro[][$key] =  new MongoDB\BSON\Regex ( "^".strtolower($data) ,"i");	
				}
			}
			$query['$and'] = $filtro;
		}
		if($pagina->pagina <= 0)
			return false;
		if($pagina->pagina > 1)
			$offset = ($pagina->pagina*$pagina->limite)-$pagina->limite;
		else if($pagina->pagina == 1)
			$offset = 0;
		$options = array();
		$options['limit'] = $pagina->limite;
		$options['skip'] = $offset;

		$result = $this->selectWithPagination($query ,$options);

		$options = array();
		$return_data = array();
		$return_data['results'] = $result;
		$return_data['qtd_pag'] = count($this->selectWithPagination($query,$options) )/ $pagina->limite;
		$return_data['offset'] = $offset;

		return $return_data;
	}

	Public function selectImovel($where,$projection = NULL){
		return $this->fetchRow($where,$projection);
	}

	Public function selection_Imoveis($where,$projection = NULL){
		return $this->fetchAll($where,$projection);
	}

	Public function listaImoveis($where,$projection){
		return $this->fetchAll($where,$projection);
	}

	Public function updateImovel($where,$projection,$label = NULL, $value = NULL){
		return $this->updateByID($where,$projection,$label,$value);
	}

	Public function deleteImovel($where,$projection){
		return $this->deleteByID($where,$projection);
	}

	Public function deleteImovelAdmin($where){
		$query = array();
		$query['_id'] =  new MongoDB\BSON\ObjectID( $where);
		return $this->delete($query);
	}

	Public function selectImovel_ID($ID,$projection = NULL){
		return $this->selectByID($ID,$projection);
	}

	Public function validaImovelUser($ID,$owner_id){
		return $this->validaImovel($ID,$owner_id);
	}
	Public function selectWithPagination($where,$options = NULL){
		return $this->selectWithLimit_Pag($where,$options);
	}
}