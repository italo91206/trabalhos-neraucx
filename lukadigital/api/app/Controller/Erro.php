<?php
class Controller_Erro extends Controller {

	public function _put() {
		$this->setResponse('status',403);
		$this->setResponse('data','Credenciais inválidas');
	}

	public function _delete() {
		$this->setResponse('status',500);
		$this->setResponse('data','Método Inválido');
	}

	public function _get() {
		$this->setResponse('status',500);
		$this->setResponse('data',$this->getData('message'));
	}
}

