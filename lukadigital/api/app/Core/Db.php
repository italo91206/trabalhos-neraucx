<?php
class Db {

	protected $_conn 		= NULL;
	protected $_tableName	= NULL;
	protected $_insertId	= NULL;
	protected $_map			= NULL;
	protected $_primaryKey	= NULL;
	protected $collection 	= NULL;

	/*
	** Construtor da Classe
	**/

	protected function getConnection(){
		$client = new MongoDB\Client("mongodb://127.0.0.1:17017/imobjato");
		$companydb = $client->mycoll;
		$collec = $this->collection;
		$empcollection = $companydb->$collec;
		return $empcollection;
	}
	
	Public function fetchRow($where,$projection){
		$collection = $this->getConnection();
		$document = $collection->findOne($where,['projection' => $projection]);

		return $document;
	}

	Public function selectByID($ID,$projection){
		$collection = $this->getConnection();
		$document = $collection->findOne(['_id' => new MongoDB\BSON\ObjectID($ID)],['projection' => $projection]);

		return $document;
	}
	
	Public function getCount(){
		$collection = $this->getConnection();
		$document = $collection->count();

		return $document;		
	}

	Public function fetchAll($where,$projection){
		$collection = $this->getConnection();
		$document = $collection->find($where,['projection' => $projection]);

		$data = array();
		$count = 0;
		foreach($document as $doc){
			$data[$count] = $doc;
			$count++;

		}
		return $data;
	}

	Public function update($where,$projection,$upsert = NULL){
		$collection = $this->getConnection();
		$document = $collection->updateOne($where,['$set'=> $projection],$upsert);

		return $document;

	}

	Public function selectWithLimit_Pag($where,$options){
		$collection = $this->getConnection();
		$document = $collection->find($where,$options);
				$data = array();
		$count = 0;
		foreach($document as $doc){
			$data[$count] = $doc;
			$count++;

		}
		return $data;		
	}

	Public function updateByID($where,$projection, $label = NULL,$value = NULL){
		$collection = $this->getConnection();
		if($label && $value){

			$document = $collection->updateOne(['_id' => new MongoDB\BSON\ObjectID($where), $label => $value],['$set'=> $projection]);
		}else{
			
			$document = $collection->updateOne(['_id' => new MongoDB\BSON\ObjectID($where)],['$set'=> $projection]);
		}

		return $document;

	}
	Public function insertOne($dado){
		$collection = $this->getConnection();
		$document = $collection->insertOne($dado);
		return $document->getInsertedId();
	}

	Public function deleteByID($where,$projection){
		$collection = $this->getConnection();
		$document = $collection->deleteOne(['_id' => new MongoDB\BSON\ObjectID($where), 'owner_id' => $projection]);
		return $document;		
	}

	Public function delete($where){
		$collection = $this->getConnection();
		$document = $collection->deleteOne($where);
		return $document;			
	}

	Public function validaImovel($ID,$owner_id){
		$collection = $this->getConnection();
		$document = $collection->findOne(['_id' => new MongoDB\BSON\ObjectID($ID), 'owner_id' => $owner_id]);

		return $document;		
	}

}