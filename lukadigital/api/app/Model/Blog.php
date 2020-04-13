<?php
class Model_Blog extends Db { //AUTO COMPLETE CEP, VALIDAÇÃO CPF

	protected $collection = 'blog';

	Public function uploadImage($data){
		$img = $data;
		$url = '';
		list($type, $data) = explode(';', $data);
		list(, $data)      = explode(',', $data);
		$data = base64_decode($data);
		$caminho = 'fotoBlog/'.time().'.png';
		if(file_put_contents($caminho, $data))
			return $caminho;
		else 
			return false;
	}
	Public function insertPost($query){		
		$this->insertOne($query);
		return true;
	}
	Public function alimenta_lista($pagina,$where = false,$query_aux =false){
		$query = array();
		$user = new Model_User();

		if($query_aux){
			$filtro = array();
			foreach($query_aux as $key => $data){					
				$aux = str_replace(" ", "",$data);
				if(strlen($aux) > 0){
					if($key == 'owner_id'){
						$query_aux = array('name' => new MongoDB\BSON\Regex ( "^".$data ,"i") );
						$consulta_autor = $user->fetchRow($query_aux,array());
						$id = (array) $consulta_autor->_id;
						$filtro[]['owner_id'] = $id['oid'];
					}
					else															
						$filtro[][$key] =  new MongoDB\BSON\Regex ( "^".$data ,"i");
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
		foreach($result as $key => $value){
			$query_aux = array('_id' => new MongoDB\BSON\ObjectID( $result[$key]->owner_id ) );
			$consulta_autor = $user->fetchRow($query_aux,array());
			$result[$key]->autor = $consulta_autor->name;
		}
		$options = array();
		$return_data = array();
		$return_data['results'] = $result;
		$return_data['qtd_pag'] = count($this->selectWithPagination($query,$options) )/ $pagina->limite;
		$return_data['offset'] = $offset;
		return $return_data;
	}

	Public function selectWithPagination($where,$options = NULL){
		return $this->selectWithLimit_Pag($where,$options);
	}
	Public function selectPost_edit($id){
		$query = array('_id' => new MongoDB\BSON\ObjectID( $id ) );
		return $this->fetchRow($query,array());
	}
	Public function updatePost($id,$query){
		$where = array('_id' => new MongoDB\BSON\ObjectID( $id ) );
		$this->update($where,$query,array());
		return true;
	}

	Public function select($id){
		$query = array('_id' => new MongoDB\BSON\ObjectID( $id ) );
		return $this->fetchRow($query,array());		
	}
	Public function deletaPost($id){
		$query = array();
		$query['_id'] =  new MongoDB\BSON\ObjectID( $id);
		return $this->delete($query);
	}
}