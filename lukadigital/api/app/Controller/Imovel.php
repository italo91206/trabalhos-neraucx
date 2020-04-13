<?php
class Controller_Imovel extends Controller {

	public function _post(){
		if($post = (array) $this->getData('body')){
			$imovel = new Model_Imovel();
			$login = new Model_User();
			$pesquisa = new Model_Pesquisa();

			if($post['flag'] == 'cadastroImovel'){//CADASTRO DE IMOVEIS
				if($login->validaUser($post['key'],$post['iduser'])){
					if($post['data'] != ""){
						$aux_rotulo = $post['data']->address->logradouro.' '.$post['data']->address->numero;

						$rotulo = $imovel->cria_rotulo($aux_rotulo);
						$post['data']->rotulo = $rotulo;
						$post['data']->imagens = $imovel->uploadIMGS($post['data']->base64imgs,$rotulo);
						$post['data']->base64imgs = [];

						$aux_lalon = $pesquisa->prepara_lalon($post['data']->address,$post['data']->neighbor, $post['data']->city );
						$post['data']->latlon = $pesquisa->getLalon($aux_lalon);

						$insert = $imovel->insertImovel($post['data']);
						if($insert){
							$this->setResponse('status', Standard::STATUS200);
							$this->setResponse('data',true);
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
				}
				else{
					$this->setResponse('status',Standard::STATUS405);
					$this->setResponse('data',Standard::INVALIDKEY);						
				}
			}else if($post['flag'] == 'selectImovel'){// SELECIONAR DADOS DE UM IMÓVEL
				if($post['where'] != ""){
					$select = $imovel->selectImovel((array)$post['where']);
					if($select){
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$select);
					}
					else{
						$this->setResponse('status',Standard::STATUS405);
						$this->setResponse('data',false);
					}
				}
			}else if($post['flag'] == 'updateImovel'){//ATUALIZAR DADOS DO IMOVEL
				if($login->validaUser($post['key'],$post['iduser']) && $imovel->is_imovel_from_user($post['idimovel'],$post['iduser']) ){
					if($post['query'] != "" && $post['iduser']){						
						if(!empty($post['query']->base64imgs)){
							$imagens_urls = $imovel->uploadIMGS($post['query']->base64imgs,$post['query']->rotulo.date('H:d:s:m'));
							
							foreach($imagens_urls as $urls){
								$post['query']->imagens[] = $urls; 
							}
						}
						
						$post['query']->base64imgs = [];
						$aux_lalon = $pesquisa->prepara_lalon($post['query']->address,$post['query']->neighbor, $post['query']->city );
						$post['query']->latlon = $pesquisa->getLalon($aux_lalon);
						$select = $imovel->updateImovel($post['idimovel'], (array)$post['query'], 'owner_id', $post['iduser']);
						if($select){
							$this->setResponse('status',Standard::STATUS200);
							$this->setResponse('data',true);
						}
						else{
							$this->setResponse('status',Standard::STATUS405);
							$this->setResponse('data',false);
						}
					}
				}
				else
				{
					$this->setResponse('status',Standard::STATUS405);
					$this->setResponse('data',Standard::INVALIDKEY);
				}					
			}else if($post['flag'] == 'listaImoveis'){
				if($post['where'] != ""){
					if(!isset($post['projection'])  || $post['projection'] == "")
						$post['projection'] = NULL;
					
					$select = $imovel->listaImoveis((array)$post['where'], (array)$post['projection']);
					if($select)
					{
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$select);
					}else
					{
						$this->setResponse('status',Standard::STATUS405);
						$this->setResponse('data',false);
					}
				}						
			}else if($post['flag'] == 'deleteImovel'){
				if($login->validaUser($post['key'],$post['iduser'])  && $imovel->is_imovel_from_user($post['where'],$post['iduser'])){
					if($post['where'] != "" && $post['iduser'] != ""){ // PROJECTION  = OWNER_ID
						$select = $imovel->deleteImovel($post['where'],$post['iduser']);
						if($select)
						{
							$this->setResponse('status',Standard::STATUS200);
							$this->setResponse('data',true);
						}else
						{
							$this->setResponse('status',Standard::STATUS405);
							$this->setResponse('data',false);
						}
					}			
				}
				else
				{
					$this->setResponse('status',Standard::STATUS405);
					$this->setResponse('data',Standard::INVALIDKEY);
				}			
			}else if($post['flag'] == 'validaImovelUser'){
				if($post['where'] != "" && $post['projection'] != ""){ // PROJECTION  = OWNER_ID
					$select = $imovel->validaImovelUser($post['where'],$post['projection']);
					if($select)
					{
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$select);
					}
					else
					{
						$this->setResponse('status',Standard::STATUS405);
						$this->setResponse('data',false);
					}
				}						
			}else if($post['flag'] == 'alimenta_lista'){
				if($login->validaUser($post['key'],$post['iduser'])){

					$select = $imovel->alimenta_lista($post['data'],$post['iduser']);
					if($select){
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$select);
					}
					else
					{
						$this->setResponse('status',Standard::STATUS405);
						$this->setResponse('data',false);
					}
				}
			}else if($post['flag'] == 'filtroADMIN'){
				if($login->validaUser($post['key'],$post['iduser']) && $login->validaAdmin($post['iduser'])){
					$consulta = $imovel->alimenta_lista($post['configs'],false,(array)$post['data']);
					$this->setResponse('status',Standard::STATUS200);
					$this->setResponse('data',$consulta);
				}
				else
				{
					$this->setResponse('data','invalidkey');
				}
			}
		}
	}

	public function _get(){
		var_dump($this->getData('ID'));
		exit;
	}

	public function _put(){//FUNCOES DO ADMIN REFERENTE IMOVEIS
		$imovel = new Model_Imovel();
		$login = new Model_User();
		$pesquisa = new Model_Pesquisa();
			
		if($post = (array) $this->getData('body')){
			if($login->validaUser($post['key'],$post['iduser']) && $login->validaAdmin($post['iduser'])){
				if($post['flag'] == 'listaImoveis'){
					if($post['where'] != ""){
						if(!isset($post['projection'])  || $post['projection'] == "")
							$post['projection'] = NULL;
						$select = $imovel->listaImoveis((array)$post['where'], (array)$post['projection']);
							
						if($select){
							$this->setResponse('status',Standard::STATUS200);
							$this->setResponse('data',$select);
						}
						else
						{
							$this->setResponse('status',Standard::STATUS405);
							$this->setResponse('data',false);
						}
					}						
				}else if($post['flag'] == 'updateImovel'){
					if(isset($post['query']) && isset($post['idimovel'])){
						if(!empty($post['query']->base64imgs)){
							$imagens_urls = $imovel->uploadIMGS($post['query']->base64imgs,$post['query']->rotulo.date('H:d:s:m'));
							
							foreach($imagens_urls as $urls){
								$post['query']->imagens[] = $urls; 
							}
						}
						
						$aux_lalon = $pesquisa->prepara_lalon($post['query']->address,$post['query']->neighbor, $post['query']->city );
						$post['query']->latlon = $pesquisa->getLalon($aux_lalon);
						$post['query']->base64imgs = [];
						$select = $imovel->updateImovel($post['idimovel'], (array)$post['query']);
						
						if($select){
							$this->setResponse('status',Standard::STATUS200);
							$this->setResponse('data',true);
						}
						else{
							$this->setResponse('status',Standard::STATUS405);
							$this->setResponse('data',false);
						}
					}									
				}else if($post['flag'] == 'selectSingleImovel'){//SELECIONA IMOVEL E ENVIA OWNERS COM SEUS NOMES
					if(isset($post['idimovel'])){
						$select = $imovel->selectImovel_ID($post['idimovel'],NULL);
						$owner = (array) $select;
						$owner = (array) $owner['owner_id'];
						$owners = [];
						$cont = 0;
						
						foreach($owner as $ow){
							$user = $login->selectUser_ID($ow,array('name' => 1));
							$owners[$cont]['value'] = (string) $ow;
							$owners[$cont]['name'] = $user['name'];
							$cont++;
						}

						$envia['dados'] = $select;
						$envia['owners'] = $owners;
						
						if($select){
							$this->setResponse('status',Standard::STATUS200);
							$this->setResponse('data',$envia);
						}
						else{
							$this->setResponse('status',Standard::STATUS405);
							$this->setResponse('data',false);
						}
									
					}									
				}else if($post['flag'] == 'deletaImovel'){
					$select = $imovel->deleteImovelAdmin($post['data']);
					
					if($select){
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',true);
					}else{
						$this->setResponse('status',Standard::STATUS405);
						$this->setResponse('data',false);
					}
				}else if($post['flag'] == 'alimenta_lista'){
					$select = $imovel->alimenta_lista($post['data']);
					
					if($select){
						$this->setResponse('status',Standard::STATUS200);
						$this->setResponse('data',$select);
					}
					else{
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