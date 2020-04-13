<?php
class Controller_User extends Controller {

	public function _post(){
		if($post = (array) $this->getData('body')){
			$login = new Model_User();
			$agendamento = new Model_Agendamento();
			if($post['flag'] == 'login'){//EFETUAR LOGIN
				if($select = $login->login((array) $post['where'])){
					$this->setResponse('status',Standard::STATUS200);
					$this->setResponse('data',$select);
				}
				else{
					$this->setResponse('status',Standard::STATUS403);
					$this->setResponse('data', array('login' => 'Crendenciais 	inválidas!', 'status' => false));
				}
			}elseif($post['flag'] == 'cadastroUser'){//CADASTRO DE USUARIOS
				if($post['data'] != ""){
					if(!empty($post['data']->base64imgs)){
						$post['data']->foto = $login->salvaFoto($post['data']->base64imgs,$post['data']->name.hash('md5',$post['data']->email));
					}
					$post['data']->base64imgs = [];
					if(in_array(Standard::CORRETOR,$post['data']->group_id)){
						$post['data']->horarios = $post['data']->schedule;
						$post['data']->schedule = $agendamento->ajustaHora_corretor((array) $post['data']->schedule);
					}
					$insert = $login->insertUser($post['data']);	
					if($insert){
						if($post['login']){//(TRUE OU FALSE) - SE FARÁ LOGIN PÓS CADASTRO OU NÃO
							$post['logar'] = new stdClass;
							$post['logar']->email = $post['data']->email;
							$post['logar']->password = $post['data']->password;	
							$select = $login->login((array) $post['logar']);
							if($select){
								$this->setResponse('status', Standard::STATUS200);			
								$this->setResponse('data',$select);
							}
							else{
								$post['logar']->login = false;
								$this->setResponse('status', Standard::STATUS200);
								$this->setResponse('data',$post['logar']);												
							}
						}
						else{
							$post['logar']->login = false;
							$this->setResponse('status', Standard::STATUS200);			
							$this->setResponse('data',$post['logar']);										
						}
					}
					else{
						$this->setResponse('status', Standard::STATUS405);
						$this->setResponse('data', false);
					}
				}
				else{//SE NÃO EXISTIR DADOS
					$this->setResponse('status', Standard::STATUS405);
					$this->setResponse('data',false);
				}
			}else if($post['flag'] == 'selectUser'){// SELECIONAR DADOS DE UM USER
				if($login->validaUser($post['key'],$post['iduser'])){
					if(!isset($post['projection']))
						$post['projection'] = NULL;
					if($post['where'] != ""){
						$select = $login->selectUser_ID($post['where'],$post['projection']);
						if($select){
							$this->setResponse('status',Standard::STATUS200);
							$this->setResponse('data',$select);
						}else{
							$this->setResponse('status',Standard::STATUS405);
							$this->setResponse('data',false);
						}
					}
				}
				else{
					$this->setResponse('status',Standard::STATUS405);
					$this->setResponse('data',Standard::INVALIDKEY);
				}
			}else if($post['flag'] == 'updateUser'){//ATUALIZAR DADOS DO USER
				if($login->validaUser($post['key'],$post['iduser'])){
					if($post['where'] != "" && $post['projection']){
						if(!empty($post['projection']->base64imgs)){
							$post['projection']->foto = $login->salvaFoto($post['projection']->base64imgs,$post['projection']->name.hash('md5',$post['projection']->email));
						}
						$post['projection']->base64imgs = [];
						$select = $login->updateUser($post['where'], (array)$post['projection']);
						if($select){
							$this->setResponse('status',Standard::STATUS200);
							$this->setResponse('data',true);
						}else{
							$this->setResponse('status',Standard::STATUS405);
							$this->setResponse('data',false);
						}
					}	
				}else{
					$this->setResponse('status',Standard::STATUS405);
					$this->setResponse('data',Standard::INVALIDKEY);
				}				
			}else if($post['flag'] == 'valida'){
				if($valida = $login->validaUser($post['key'],$post['iduser'])){
					$this->setResponse('status',Standard::STATUS200);
					$this->setResponse('data',true);
				}else{
					$this->setResponse('status',Standard::STATUS405);
					$this->setResponse('data',Standard::INVALIDKEY);				
				}	
			}else if($post['flag'] == 'validaADMIN'){
				if($valida = $login->validaUser($post['key'],$post['iduser'])){
					$this->setResponse('status',Standard::STATUS200);
					$this->setResponse('data', $login->validaAdmin($post['iduser']));
				}else{
					$this->setResponse('status',Standard::STATUS200);
					$this->setResponse('data',false);
				}
			}else if($post['flag'] == 'update_dataUser'){
				if($valida = $login->validaUser($post['key'],$post['iduser'])){
					$update_dataUser = $login->update_dataUser($post['iduser'],$post['key']);
					$this->setResponse('status',Standard::STATUS200);
					$this->setResponse('data', $update_dataUser);	
				}else{
					$this->setResponse('status',Standard::STATUS200);
					$this->setResponse('data','invalidkey');
				}
			}else if($post['flag'] == 'filtroADMIN'){
				if($login->validaUser($post['key'],$post['iduser']) && $login->validaAdmin($post['iduser'])){
					$consulta = $login->alimenta_lista($post['configs'],(array)$post['data']);
					$this->setResponse('status',Standard::STATUS200);
					$this->setResponse('data',$consulta);
				}else{
					$this->setResponse('data','invalidkey');
				}
			}
		}
	}

	public function _put(){//FUNCOES DO ADMIN REFERENTE IMOVEIS
		$imovel = new Model_Imovel();
		$login = new Model_User();
		$agendamento = new Model_Agendamento();
		if($post = (array) $this->getData('body')){
			if($login->validaUser($post['key'],$post['iduser']) &&  $login->validaAdmin($post['iduser'])){
				if($post['flag'] == 'listaUsers'){//LISTA TODOS OS USERS
					if($post['where'] != ""){
						if(!isset($post['projection'])  || $post['projection'] == "")
							$post['projection'] = NULL;
						$select = $login->listaUsers((array)$post['where'], (array)$post['projection']);
						if($select){
							$this->setResponse('status',Standard::STATUS200);
							$this->setResponse('data',$select);
						}else{
							$this->setResponse('status',Standard::STATUS405);
							$this->setResponse('data',false);
						}
					}						
				}elseif($post['flag'] == 'selectSingleUser'){//LISTA TODOS OS USERS
					if($post['where'] != ""){
						if(!isset($post['query']))
							$post['projection'] = NULL;
						$select = $login->selectUser_ID($post['where'],$post['projection']);
						if($select){
							$this->setResponse('status',Standard::STATUS200);
							$this->setResponse('data',$select);
						}else{
							$this->setResponse('status',Standard::STATUS405);
							$this->setResponse('data',false);
						}
					}						
				}elseif($post['flag'] == 'updateUser'){//UPDATE USERS
					if(isset($post['where']) && isset($post['projection'])){
						if($post['projection']->schedule != ""){														 	
							$post['projection']->schedule = $agendamento->ajustaHora_corretor((array) $post['projection']->schedule);
						}
						if(!empty($post['projection']->base64imgs)){
							$post['projection']->foto = $login->salvaFoto($post['projection']->base64imgs,$post['projection']->name.hash('md5',$post['projection']->email));
						}
						$post['projection']->base64imgs = [];
						$select = $login->updateUser($post['where'], (array)$post['projection']);
						if($select){
							$this->setResponse('status',Standard::STATUS200);
							$this->setResponse('data',true);
						}else{
							$this->setResponse('status',Standard::STATUS405);
							$this->setResponse('data',false);
						}
					}						
				}else if($post['flag']== 'deletaUser'){
					if($post['data'] != ""){
						$login->deleteUser($post['data']);
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',true);	
					}					
				}else if($post['flag'] == 'alimenta_lista'){
					$select = $login->alimenta_lista($post['data']);
					if($select){
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$select);
					}else{
						$this->setResponse('status',Standard::STATUS405);
						$this->setResponse('data',false);
					}
				}
			}else{
				$this->setResponse('status',Standard::STATUS405);
				$this->setResponse('data',Standard::INVALIDKEY);
			}
		}
	}
}