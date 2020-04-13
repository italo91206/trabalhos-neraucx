<?php
class Controller_Pesquisa extends Controller {

	public function _post() {
		if($post = (array) $this->getData('body')){
			$pesquisa = new Model_Pesquisa();
			$imovel = new Model_Imovel();
			if($post['flag'] == 'pesquisa'){						
				$this->setResponse('status',Standard::STATUS200);
				$this->setResponse('data',$pesquisa->sugestao($post['data']));
			}else if($post['flag'] == 'defineBusca'){
				$this->setResponse('status',Standard::STATUS200);
				$this->setResponse('data',$pesquisa->defineBusca($post['data'],$post['pagina']));	
			}else if($post['flag'] == 'teste'){
				$this->setResponse('status',Standard::STATUS200);
				//$consulta = $imovel->uploadIMGS($post['data'],'xed')
				$this->setResponse('data',$consulta = $imovel->uploadIMGS($post['data'],'xed'));
			}else if($post['flag'] = 'getCenter'){
				$aux = explode(' ', $post['data'][0]);
				$aux = implode('+',$aux);
				$aux_lalon = $aux;
				$aux = explode(' ', $post['data'][1]);
				$aux = implode('+',$aux);
				$aux_lalon .= '+'.$aux;					
				$this->setResponse('status',Standard::STATUS200);
				$this->setResponse('data',$pesquisa->getLalon($aux_lalon));
			}
		}
	}
}




