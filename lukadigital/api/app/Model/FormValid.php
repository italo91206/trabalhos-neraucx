<?php
class Model_FormValid extends Db { //AUTO COMPLETE CEP, VALIDAÇÃO CPF

	protected $collection = 'dados_json';

	Public function checaEmail($dados){//CHECA A EXISTÊNCIA DO E-MAIL
	/*	if(true){
			return true;
		}*/
		$users = new Model_User();
		$query = array();
		$query['email'] = $dados;
		if($users->selectUser($query) )
			return false;
		else
			return true;


	}

	Public function checaCPF($dados){//CHECA A EXISTÊNCIA DO CPF
		$users = new Model_User();
		$query = array();
		$query['documents.cpf'] = $dados;
		if($users->selectUser($query) )
			return false;
		else
			return true;

		return true;
	}



}