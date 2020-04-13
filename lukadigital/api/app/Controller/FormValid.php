<?php
class Controller_FormValid extends Controller { //VALIDAÇÃO CPF, VALIDAÇÃO E-MAIL EXISTE, CPF EXISTE 



	public function _post(){
		if($post = (array) $this->getData('body')){
			$model = new Model_FormValid();
			$this->setResponse('status',Standard::STATUS200);
			if($post['flag'] == 'email'){// CHECA EXISTÊNCIA DE E-MAIL
					if($model->checaEmail($post['email']))
						$this->setResponse('data', true);
				else
					$this->setResponse('data', false);

			}else if($post['flag'] == 'cpf'){//CHECA EXISTNCIA DE CPF
				if($model->checaCPF($post['cpf']))
					$this->setResponse('data',true);
				else
					$this->setResponse('data',false);

			}else if($post['flag'] == 'getJSON'){
				$this->setResponse('data',Standard::getJSONS());
			}

		}

	}	

}