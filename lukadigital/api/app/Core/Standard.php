<?php
class Standard {
	CONST STATUS200			= 200;
	CONST STATUS403			= 403;
	CONST STATUS404			= 404;
	CONST STATUS405			= 405;
	CONST STATUS500			= 500;
    CONST INVALIDKEY        = 'invalidkey';

    CONST      ATIVO = '1';
    CONST      INATIVO = '2';
    CONST      PENDENTE = '3';

    CONST      ADMIN = '1';
    CONST      CAPTADOR = '4';
    CONST      ANUNCIAR = '3';
    CONST      CORRETOR = '5';
    CONST      ALUGAR = '6';


    CONST      VISITA_CONCLUIDA = '1';
    CONST      VISITA_CANCELADA = '2';
    CONST      VISITA_PENDENTE = '3';
    CONST      AGENDADO = '4';
    CONST      VISITA_CANCELADA_ADMIN = '5';



	public static function getStatus($code) {
		$status = array(
            200 => 'OK',
            403 => 'Invalid Credentials',
            404 => 'Not Found',
            405 => 'Method Not Allowed',
            500 => 'Internal Server Error',
        );
        return $code . ' ' . (($status[$code]) ? $status[$code] : $status[500]);
	}

	public static function isAllowed($method) {
		$allowedMethods = array('GET','POST','PUT','DELETE','OPTIONS');
		if (in_array($method,$allowedMethods)) {
			return true;
		}

		return false;
	}


 public static function getNomeSemana($semana){
    	$valor =  array();
    	switch($semana){
    		case 0:
    			$valor = 'Domingo';
    			break;
    		case 1:
    			$valor = 'Segunda';
    			break;
    		case 2: 
    			$valor= 'Terça';
    			break;
    		case 3:
    			$valor = 'Quarta';
    			break;
    		case 4:
    			$valor = 'Quinta';
    			break;
    		case 5:
    			$valor = 'Sexta';
    			break;
    		case 6:
    			$valor= 'Sábado';
    			break;
    	}
    	return $valor;


    }

    Public static function getJSONS(){
       
         if(file_exists('jsons/profissoes.json')){
                $profissoes = json_decode(file_get_contents('jsons/profissoes.json'));
                $cidades = json_decode(file_get_contents('jsons/cidades.json'));
                $nacionalidades = json_decode(file_get_contents('jsons/nacionalidades.json'));
           //     return $arquivo;

                if($profissoes && $cidades  && $nacionalidades ){
                            
                            $data =array();
                            $data['profissoes'] = $profissoes;
                            $data['cidades'] = $cidades;
                            $data['nacionalidades'] = $nacionalidades;

                            return $data;

                        }

        }else{
            return false;

        }
    }
}