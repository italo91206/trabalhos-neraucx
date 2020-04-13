<?php
class Model_Rotulos extends Db { //AUTO COMPLETE CEP, VALIDAÇÃO CPF
	protected $collection = 'rotulos';



	Public function get_count(){
		return $this->getCount();
		
	}
	
	Public function selectRotulo($where,$projection = NULL){
		return $this->fetchRow($where,$projection);
	}
	Public function insertRotulo($dados){
			return $this->insertOne($dados);

	}
	Public function listaRotulos($where,$projection){
		return $this->fetchAll($where,$projection);
	}

	Public function updateRotulos($where,$projection,$label = NULL, $value = NULL){
		return $this->updateByID($where,$projection,$label,$value);
	}

	Public function deleteRotulo($where,$projection){
		return $this->deleteByID($where,$projection);
	}


}