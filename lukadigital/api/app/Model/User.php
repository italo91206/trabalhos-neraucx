<?php
class Model_User extends Db { //AUTO COMPLETE CEP, VALIDAÇÃO CPF
	protected $collection = 'users';

	Public function login($dados){	//FUNÇÃO DE LOGIN E CRIAR ARQUIVO
		$select = $this->selectUser($dados,NULL);

		if($select){
			$random_key = hash('md5', date('H:m:s').$dados['email']);
			///$iduser = (array) $dados['_id'];
			$iduser = (array) $select;
			$iduser = (array) $iduser['_id'];
			$armazena = new StdClass;
			$armazena->hora = date('H:m:s');
			$armazena->id =  $iduser['oid'];
			file_put_contents('users/'.$random_key,json_encode($armazena));	
			$data['key'] = $random_key;
			$data['dados'] = $select;
			$data['login'] = 'OK';
			return $data;
			/*$random_key = 'XBGE3FEgrgrgrFGIGE';
			return $random_key;		*/						
		}
		return false;
	}

	Public function update_dataUser($iduser, $key_to_delete){
		$query = array();
		$query['_id'] =  new MongoDB\BSON\ObjectID( $iduser );
		$consulta = $this->fetchRow($query,array());

		$query = array();
		$query['logar'] = new stdClass;
		
		$query['logar']->email = $consulta->email;
		$query['logar']->password = $consulta->password;

		$select = $this->login((array) $query['logar']);

		if($select){
			$this->deleteKey($key_to_delete);
			return $select;
		}
		else
			return false;
	}

	Public function validaUser($key,$iduser){
		if(file_exists('users/'.$key)){
			$arquivo = file_get_contents('users/'.$key);
			if($dados = json_decode($arquivo)){
				$hora = $dados->hora;
				list($hora,$minuto,$segundo) = explode(':',$hora);
				$hora_atual = date('H');
				if($dados->id == $iduser)
					return true;
				else
					return false;
			}
		}else
			return false;
	}

	Public function validaAdmin($iduser){
		$query = array();
		$query['_id'] =  new MongoDB\BSON\ObjectID( $iduser);
		$regex = new MongoDB\BSON\Regex ( "^".Standard::ADMIN ,"i");
		$query['group_id'] = $regex;
		$consulta =  $this->selectUser($query);

		if($consulta)
			return true;
		else
			return false;
	}

	Public function salvaFoto($data,$rotulo){
		$img = $data;
		$count = 0;
		$url = '';
		$rotulo = str_replace(' ', "", $rotulo);
		foreach($img as $data){
			if($count > 0)
				break;
			list($type, $data) = explode(';', $data);
			list(, $data)      = explode(',', $data);
			$data = base64_decode($data);
			$caminho = 'fotoUsers/'.$rotulo.$count.'.png';
			file_put_contents($caminho, $data);
			$url = $caminho;
			$count++;
		}
		if($count > 0)
			return $url;
		else
			return false;
	}

	Public function alimenta_lista($pagina,$query_aux = false){
		$query = array();
		if($pagina <= 0)
			return false;
		if($pagina > 1)
			$offset = ($pagina*10)-10;
		else if($pagina == 1)
			$offset = 0;
		$query =array();
		if($query_aux){
			$filtro = array();
			foreach($query_aux as $key => $data){					
				$aux = str_replace(" ", "",$data);
				if(strlen($aux) > 0)										
					$filtro[][$key] =  new MongoDB\BSON\Regex ( "^".$data ,"i");
			}
			$query['$and'] = $filtro;
		}
		$options = array();
		$options['limit'] = 10;
		$options['skip'] = $offset;
		$result = $this->selectWithPagination($query ,$options);
		$options = array();
		$return_data = array();
		$return_data['results'] = $result;
		$return_data['qtd_pag'] = count($this->selectWithPagination($query,$options) )/ 10;
		$return_data['offset'] = $offset;

		return $return_data;
	}

	Public function deleteKey($key){
		unlink('users/'.$key);
	}

	Public function insertUser($dados){
		return $this->insertOne($dados);
	}

	Public function selectUser($where,$projection = NULL){
		return $this->fetchRow($where,$projection);
	}
	Public function selectUser_ID($where,$projection = NULL){
		return $this->selectByID($where,$projection);
	}
	Public function updateUser($where,$projection = NULL){
		return $this->updateByID($where,$projection);
	}

	Public function listaUsers($where,$projection = NULL){
		return $this->fetchAll($where,$projection);
	}

	Public function deleteUser($where){
		$query = array();
		$query['_id'] =  new MongoDB\BSON\ObjectID( $where);
		return $this->delete($query);
	}
	Public function selectWithPagination($where,$options = NULL){
		return $this->selectWithLimit_Pag($where,$options);
	}
}