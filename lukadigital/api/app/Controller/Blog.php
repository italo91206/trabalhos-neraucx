<?php class Controller_Blog extends Controller { //VALIDAÇÃO CPF, VALIDAÇÃO E-MAIL EXISTE, CPF EXISTE 

	public function _post(){
		if($post = (array) $this->getData('body')){
			$blog = new Model_Blog();
			$user = new Model_User();
			if($post['flag'] == 'alimenta_lista' || $post['flag'] == 'select' || $user->validaUser($post['key'],$post['iduser']) &&  $user->validaAdmin($post['iduser']))
			{
				$this->setResponse('status',Standard::STATUS200);
				if($post['flag'] == 'uploadImage'){// CHECA EXISTÊNCIA DE E-MAIL
					if($caminho = $blog->uploadImage($post['data']))
						$this->setResponse('data', $caminho);
					else
						$this->setResponse('data', false);
				}else if($post['flag'] == 'insertPost'){
					$post['data']->data = date('d/m/Y H:i:s');
					$post['data']->main_img = $blog->uploadImage($post['data']->main_img);
					if($insert_data = $blog->insertPost($post['data']))
						$this->setResponse('data', $insert_data);
					else
						$this->setResponse('data', false);								
				}else if($post['flag'] == 'alimenta_lista'){
					if($consulta = $blog->alimenta_lista($post['data']))
						$this->setResponse('data', $consulta);
					else
						$this->setResponse('data', false);								
				}else if($post['flag'] == 'selectPost_edit'){
					if($consulta = $blog->selectPost_edit($post['data']))
						$this->setResponse('data', $consulta);
					else
						$this->setResponse('data', false);								
				}else if($post['flag'] == 'updatePost'){
					if($post['updateMain'])
						$post['query']->main_img = $blog->uploadImage($post['query']->main_img);
					if($consulta = $blog->updatePost($post['data'],$post['query']))
						$this->setResponse('data', $consulta);
					else
						$this->setResponse('data', false);								
				}else if($post['flag'] == 'deletaPost'){
					if($delete = $blog->deletaPost($post['data']))
						$this->setResponse('data', $delete);
					else
						$this->setResponse('data', false);								
				}else if($post['flag'] == 'select'){
					if($consulta = $blog->select($post['data']))
						$this->setResponse('data', $consulta);
					else
						$this->setResponse('data', false);								
				}else if($post['flag'] == 'filtroADMIN'){
					if($user->validaUser($post['key'],$post['iduser']) && $user->validaAdmin($post['iduser'])){
						$consulta = $blog->alimenta_lista($post['configs'],false,(array)$post['data']);
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$consulta);
					}else{
						$this->setResponse('data','invalidkey');
					}
				}
			}else{
				$this->setResponse('status',Standard::STATUS200);
				$this->setResponse('data', 'invalidkey');
			}
		}
	}	
}