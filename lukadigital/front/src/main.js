// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import ValidaForm from './skins/js/validaForm'
import consomeJSON from './skins/jsons/consome'
import Multiselect from 'vue-multiselect'
import Siema from 'vue2-siema'
import { L, LMap, LTileLayer, LMarker, LCircleMarker, LRectangle, LPolygon, LPolyline, LPopup, LTooltip } from 'vue2-leaflet';
import NProgress from 'nprogress';
import pluginLeaflet from 'leaflet-routing-machine'
import VueContentPlaceholders from 'vue-content-placeholders'
import indexPanel from '../src/components/panel/indexPanel'
import tinymce from 'vue-tinymce-editor'
import { doesNotThrow } from 'assert'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './skins/css/estilo.css'
import './skins/css/estiloadmin.css'
import './skins/css/icons.css'
import './skins/css/jquery-2.2.0.min.js'
import 'leaflet/dist/leaflet.css'
import '../node_modules/nprogress/nprogress.css'


Vue.use(axios)
Vue.use(BootstrapVue)
Vue.use(Siema)
Vue.use(VueContentPlaceholders);
Vue.component('tinymce', tinymce);
Vue.component('NProgress', NProgress);
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-circle', LCircleMarker);
Vue.component('l-rectangle', LRectangle);
Vue.component('l-polygon', LPolygon);
Vue.component('l-polyline', LPolyline);
Vue.component('l-popup', LPopup);
Vue.component('l-tooltip', LTooltip);
Vue.component('routing-machine', pluginLeaflet);
Vue.component('multiselect', Multiselect)
delete L.Icon.Default.prototype._getIconUrl

// eslint-disable-next-line  
// eslint-disable-next-line  
//	Vue.prototype.urlMain = 'http://localhost:8080/#/';
//	Vue.prototype.urlApi = 'http://localhost/apiImob/';

Vue.config.productionTip = false;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
router.beforeEach((to, from, next) => {
	NProgress.start();
	next();
});
router.beforeResolve((to, from, next) => {
	next();
});
router.afterEach((to, from) => {
	NProgress.done();
});

Vue.prototype.urlMain = 'https://lukadigital.desenvolvendo.site/#/';
Vue.prototype.urlApi = 'https://api.lukadigital.desenvolvendo.site/';
Vue.prototype.validForm = new ValidaForm();
Vue.prototype.consomeJSON = new consomeJSON();
Vue.prototype.logado = true;
Vue.prototype.keyUser = 'XBGE3FEFGIGEE';
Vue.prototype.userData = '';
Vue.prototype.mainAxios = axios.create({
	baseURL: 'https://api.lukadigital.desenvolvendo.site/',
	headers:	{
		'Accept': 'application/json',
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'User-Email': 'anderson@av5.com.br',
		'Api-Token': '1a2b3c4d5e',
		'YW5kZXJzb25AYXY1LmNvbS5icjoxYTJiM2M0ZDVl': 'token'
	}
});
Vue.prototype.update_dataUser = function () {
	var jsonDados = window.localStorage.getItem('dados');
	var main = this;
	if (jsonDados) {
		console.log(this.getIDLocalSt());
		
		this.mainAxios.post('/user', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), flag: 'update_dataUser' }).then(function (response) {
			if (response.data.login == 'OK') {
				main.mataSessao();
				main.setUserLocalSt(response.data.dados, response.data.dados._id.$oid, response.data.key);
				main.setdatas();
				main.setCookieData();
			}
			main.loading = false;
			NProgress.done();
		}).catch(function (error) {
			main.loading = false;
			NProgress.done();
		});

		var jsonAux = {};
		jsonAux.id = idUser;
		jsonAux.dados = data;
		jsonAux.key = keyUser;
		jsonAux.dados.password = "";
		console.log(jsonAux);
		window.localStorage.setItem('dados', JSON.stringify(jsonAux));
		var data = JSON.parse(jsonDados)
  	}
};
Vue.prototype.setCookieData = function () {
	var data = this.getUserLocalSt();
	if (data) {
		var now = new Date();
		var time = now.getTime();
		time += 60 * 60 * 24 * 1000;
		now.setTime(time);
		document.cookie =
		'username=' + data.dados.name +
		'; expires=' + now.toUTCString() +
		'; path=/';
  	}
};
Vue.prototype.getCookie = function (cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
  	}
  	return false;
};
Vue.prototype.getBase64 = function (file) {//PEGA BASE64 DO UPLOAD DA FOTO E JA SETA NO DESTINO;
	var main = this;
	var reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function () {
		var base = reader.result;
		//  base =  base.split(',')
		main.getBase64_axios(base);
	};
	reader.onerror = function (error) {
		console.log('Error: ', error);
	};
};
Vue.prototype.in_array_grupo = function (array_grupos, needle) {
	//needle = needle.toString();
	for (var i in array_grupos) {
		if (array_grupos[i] == needle) return true;
	}
	return false;
};
Vue.prototype.mataSessao = function () {
	if (this.getUserLocalSt()) {
		localStorage.removeItem('dados');
	}
};
Vue.prototype.switchDatasUser = function (acao, tipo) {//ALTERNA FORMS DE FISICA OU JURIDICA
	if (acao == 'acrescenta') {
		/***  TIPO = FISICA OU JURIDICA ****/
		this.validForm.getSwitch_user_acrescenta(this, tipo);

	} else if (acao == 'deleta') {
		this.validForm.getSwitch_user_deleta(this, tipo);
	}
};
Vue.prototype.getUserLocalSt = function () {
	var jsonDados = window.localStorage.getItem('dados');
	if (jsonDados) {
		var data = JSON.parse(jsonDados);
		return data;
	}
	return false;
};
Vue.prototype.setUserLocalSt = function (data, idUser, keyUser) {
	var jsonAux = {};
	jsonAux.id = idUser;
	jsonAux.dados = data;
	jsonAux.key = keyUser;
	jsonAux.dados.password = "";
	window.localStorage.setItem('dados', JSON.stringify(jsonAux));
};
Vue.prototype.getKeyLocalSt = function (data) {
	var jsonDados = window.localStorage.getItem('dados');
	var data = JSON.parse(jsonDados);
	if (jsonDados) {
		return data.key;
	}
};
Vue.prototype.getIDLocalSt = function (data) {
	var jsonDados = window.localStorage.getItem('dados');
	var data = JSON.parse(jsonDados);
  	if (jsonDados) {
    	return data.id;
  	}
};
Vue.prototype.validaUser_ = function () {
	if (this.getUserLocalSt())
		return true;
	else
		this.$router.push({ name: 'Index' });
};
Vue.prototype.admin = function (tipo, dados, exception) {//FUNÇÕES DO PAINEL ADMINISTRATIVO
	var main = this;
	var query = {};
	var projectionQuery = {};
	var aux = {};

	this.loading = true;
	NProgress.start()

	if (tipo == 'listaImoveis') {
		this.mainAxios.put('/imovel', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), where: {}, flag: tipo }).
		then(function (response) {
			if (response.data) {
				console.log(response.data);
				main.imoveis = response.data;
				main.recebeImoveis();
			}
      		main.loading = false;
      		NProgress.done();
    	}).catch(function (error) {
	    	main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'listaUsers'){
		this.mainAxios.put('/user', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), where: {}, flag: tipo }).
		then(function (response) {
	      	if (response.data) {
        		main.users = response.data;
        		main.recebeUsers();
      		}
      		main.loading = false;
      		NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'getTipoUser'){
    	query.group_id = dados;
		this.mainAxios.put('/user', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), where: query, flag: 'listaUsers' }).
		then(function (response) {
			if (response.data) {
				console.log(response.data);
				main.recebeUsers = response.data;    
			}
			main.loading = false;
			NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'updateImovel'){
    	query = dados;
    	delete query._id;
    	console.log(JSON.stringify(query));
    	console.log(exception);
		this.mainAxios.put('/imovel', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), idimovel: exception, query: query, flag: tipo }).
		then(function (response) {
			if (response.data) {
				console.log(response.data);
				main.recebeAjax('dadosImovel');
				main.message = true;
			}
			main.loading = false;
			NProgress.done();
    	}).catch(function (error) {
			main.loading = false;
			NProgress.done();
    	});
  	}else if (tipo == 'selectSingleImovel'){
		this.mainAxios.put('/imovel', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), idimovel: dados, flag: tipo }).
		then(function (response) {
			if (response.data) {
				console.log(response.data);
				main.globalForm = response.data.dados;
				main.op = response.data.owners;
				console.log(main.options)
				main.recebeAjax('dadosImovel');
				//  main.$router.push({name: 'editarUser'});
			}
			main.loading = false;
			NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'selectSingleUser'){
		this.mainAxios.put('/user', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), where: dados, flag: tipo }).
		then(function (response) {
      		if (response.data) {
        		main.globalForm = response.data;
        		main.recebeAjax('dadosUser');
      		}
      		main.loading = false;
      		NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'updateUser'){
    	query = dados;
    	delete query._id;
		this.mainAxios.put('/user', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), where: exception, projection: query, flag: tipo }).
		then(function (response) {
			if (response.data) {
				console.log(response.data);
				//  main.$router.push({name: 'editarUser'});
				main.message = true;
			}
			main.loading = false;
			NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'validaADMIN'){
    	if (this.getIDLocalSt() && this.getKeyLocalSt()) {
			this.mainAxios.post('/user', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), where: exception, projection: query, flag: tipo }).
			then(function (response) {
        		if (!response.data || response.data == "invalidkey") {
          			main.$router.push({ name: 'Index' })
				}
				else {
          			main.istoshow = true;
        		}
        		console.log(response.data);
        		main.loading = false;
        		NProgress.done();
      		}).catch(function (error) {
        		main.loading = false;
        		NProgress.done();
      		});
		} 
		else{
      		main.$router.push({ name: 'Index' })
    	}
  	}else if (tipo == 'deletaUser'){
		this.mainAxios.put('/user', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, flag: tipo }).
		then(function (response) {
	      	if (response.data) {
        		main.admin('alimenta_lista', main.$route.params.pagina, 'User')
      		}
      		main.loading = false;
      		NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'deletaImovel'){
		this.mainAxios.put('/imovel', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, flag: tipo }).
		then(function (response) {
	      	if (response.data) {
        		var aux = {};
        		aux.pagina = main.$route.params.pagina;
        		aux.limite = main.limite_pag;
        		main.admin('alimenta_lista', aux, 'Imovel')
      		}
      		main.loading = false;
      		NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'alimenta_lista'){
		this.mainAxios.put('/' + exception, { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, flag: tipo }).
		then(function (response) {
      		if(response.data){
        		console.log(response.data);
        		main.results = response.data;
        		main.resolvePaginacao();
      		}
      		main.loading = false;
      		NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}
};
Vue.prototype.pesquisa = function (tipo, dados, exception = "") {
	var main = this;
	var query = {};
	var projectionQuery = {};
	var aux = {};

	if (tipo != 'pesquisa')
		NProgress.start()
  	if (tipo == 'pesquisa'){//PESQUISA  DE IMOVEIS
		this.mainAxios.post('/pesquisa', { data: dados, flag: tipo }).
		then(function (response) {
      		if (response.data) {
        		main.sugestao = response.data;
        		//  main.$router.push({name: 'editarUser'});
        		main.message = true;
      		}
      		main.loading = false;
      		NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'defineBusca'){
		this.mainAxios.post('/pesquisa', { data: dados, flag: tipo, pagina: exception }).then(function (response) {
		if (response.data) 
		{
			main.results = response.data;
    	    main.generatePositions();
        	main.generateCenter();
        	main.resolvePaginacao()
        	//  main.$router.push({name: 'editarUser'});
        	main.message = true;
      	}
      	main.loading = false;
      	NProgress.done();
		}).catch(function (error) {
			main.loading = false;
			NProgress.done();
		});
  	}else if (tipo == 'setLocal') {
    	window.localStorage.setItem('pesquisa', dados);
  	}else if (tipo == 'getLocal') {
    	var rua = window.localStorage.getItem('pesquisa');
    	return rua;
  	}else if (tipo == 'teste') {
		this.mainAxios.post('/pesquisa', { data: dados, flag: tipo, pagina: exception }).
		then(function (response) {
      		if (response.data) {
        		console.log(response.data);
        		//  main.$router.push({name: 'editarUser'});
        		main.message = true;
      		}
      		main.loading = false;
      		NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'getCenter'){
		this.mainAxios.post('/pesquisa', { data: dados, flag: tipo }).
		then(function (response) {
			if (response.data) {
				main.setCenter(response.data);
			}
			main.loading = false;
			NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}
};
Vue.prototype.imovelAxios = function (tipo, dados, exception = "", multi_expection = []) { // FUNÇÕES DE IMÓVEL
	var main = this;
	var query = {};
	var projectionQuery = {};
	var aux = {};
	
	this.loading = true;
	NProgress.start()

  	if (tipo == 'cadastro') {//CADASTRO DE IMOVEL
    //dados.owner_id = this.getIDLocalSt();
    console.log(JSON.stringify(dados));
	this.mainAxios.post('/imovel', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, flag: 'cadastroImovel' }).
	then(function (response) {
      	if (response.data) {
        	console.log(response.data);
        	//  main.$router.push({name: 'editarUser'});
        	main.message = true;
      	}
      	main.loading = false;
      	NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'listaImoveis'){
    query.owner_id = this.getIDLocalSt();
    projectionQuery = "";
    this.mainAxios.post('/imovel', { where: query, projection: projectionQuery, flag: 'listaImoveis' }).then(function (response) {
      if (response.data) {
        main.imoveis = response.data;
        main.recebeData();
        console.log(main.imoveis)

        //  main.$router.push({name: 'editarUser'});
      }
      main.loading = false;
      NProgress.done();

    }).catch(function (error) {
      main.loading = false;
      NProgress.done();
    });
  	}else if (tipo == 'deleteImovel'){
    query = dados; //ID DO IMOVEL
    projectionQuery = this.getIDLocalSt(); //ID DO USER
    console.log(query);
    console.log(projectionQuery);
    this.mainAxios.post('/imovel', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), where: query, projection: projectionQuery, flag: tipo }).then(function (response) {
      if (response.data) {
        var aux = {};
        aux.pagina = main.$route.params.pagina;
        aux.limite = main.limite_pag;
        main.imovelAxios('alimenta_lista', aux)

        //  main.$router.push({name: 'editarUser'});
      }
      main.loading = false;

      NProgress.done();
    }).catch(function (error) {
      main.loading = false;
      NProgress.done();
    });
  	}else if (tipo == 'validaImovelUser'){/**VALIDAR SE O RESPECTIVO IMÓVEL É DO USER EM QUESTÃO***/
    query = dados;  //ID DO IMOVEL
    projectionQuery = this.getIDLocalSt(); // ID DO USER
    this.mainAxios.post('/imovel', { where: query, projection: projectionQuery, flag: tipo }).then(function (response) {
      if (response.data) {
        main.globalForm = response.data;
        main.recebeAjax(response.data);

        //  main.$router.push({name: 'editarUser'});
      }
      main.loading = false;
      NProgress.done();

    }).catch(function (error) {
      main.loading = false;
      NProgress.done();
    });
  	}else if (tipo == 'updateImovel'){
    aux = exception; // ID DO IMOVEL
    query = dados;  //DADOS DO UPDATE (FORM)
    delete query._id;
    console.log(JSON.stringify(dados));
    this.mainAxios.post('/imovel', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), query: query, iduser: this.getIDLocalSt(), idimovel: aux, flag: tipo }).then(function (response) {
      if (response.data) {
        console.log(response.data);

        //  main.$router.push({name: 'editarUser'});
        main.message = true;
      }
      main.loading = false;
      NProgress.done();
    }).catch(function (error) {
      main.loading = false;
      NProgress.done();
    });
  	}else if (tipo == 'selectImovel'){ // Retorna o imóvel selecionado de acordo com o rótulo enviado
		// console.log('Dados: ' + JSON.stringify(dados));
		this.mainAxios.post('/imovel', { where: dados, iduser: this.getIDLocalSt(), flag: tipo }).
		then(function (response) {
			if (response.data) {
				main.dados_imovel = response.data;
				main.generatePosition();
				console.log(response.data);
				main.message = true;
			}
			main.loading = false;
			NProgress.done();
		}).catch(function (error) {
			main.loading = false;
			NProgress.done();
		});
  	}else if (tipo == 'alimenta_lista') {
		this.mainAxios.post('/imovel', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, flag: tipo }).
		then(function (response) {
      		if (response.data) {
	        	console.log(response.data);
        		main.results = response.data;
        		main.resolvePaginacao();
      		}
      		main.loading = false;
      		NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}
};
Vue.prototype.formValid = function (tipo, dados, exception = "") {//VALIDAÇÃO E ENVIO GERAL DE FORMS  E USERS
  	var main = this;
  	var query = {};
  	var projectionQuery = {};
  	this.loading = false;
  	NProgress.start()
  	if (tipo == 'cep'){//AUTO COMPLETE CEP
		axios.get('https://webservice.kinghost.net/web_cep.php?auth=24fc1da7de21ab0cddf57fdd07757cee&formato=json&cep=' + dados, {}).
		then(function (response) {
			main.resposta = response.data; 
			main.recebeAjax('cep');
			this.loading = false;
			NProgress.done();
			console.log(main.resposta);
    	}).catch(function (error) {
			console.log(error.config);
			console.log(error.response);
			console.log(error.request);
			main.loading = false;
			NProgress.done();
    	});
  	}else if (tipo == 'login'){//LOGIN
		query.email = dados.email;
		query.password = dados.password;
		this.mainAxios.post('/user', { where: query, flag: 'login' }).
		then(function (response){
			main.loading = false;
			NProgress.done();
			if (response.data.login == 'OK') {
				main.setUserLocalSt(response.data.dados, response.data.dados._id.$oid, response.data.key);
				main.setCookieData();
				if (exception == "")
					main.$router.push({ name: 'editarUser' });
				else
					main.$router.push({ name: 'Paineladmin' });
			}
			else{
				main.invalidLogin = 'Tente novamente!'
			}
		}).catch(function (error) {
			main.loading = false;
			NProgress.done();
			main.invalidLogin = error.response.data.login;
		});
  	}else if (tipo == 'email'){//VERIFICA SE E-MAIL EXISTE
		this.mainAxios.post('/FormValid', { email: dados, flag: tipo }).
		then(function (response) {
			main.loading = false;
			NProgress.done();
			console.log(response.data);
			if (!response.data) {
				main.erro.email = 'Email existente!'
			}
			else{
				main.erro.email = '';
			}
    	}).catch(function (error){
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'cpf'){//VERIFICA SE CPF JA EXISTE
		this.mainAxios.post('/FormValid', { cpf: dados, flag: tipo }).
		then(function (response) {
			main.loading = false;
			NProgress.done();
			if(!response.data){
				main.erro.documents.cpf = 'CPF existente!'
			}
			else{
				main.erro.documents.cpf = '';
			}
    	}).catch(function (error) {
			main.loading = false;
			NProgress.done();
    	});
  	}else if (tipo == 'cadastroUser'){//envio da cadastroUsuarios
    	console.log(JSON.stringify(dados));
    	//LOGIN: EXCEPTION (TRUE OU FALSE ) DEFINE SE IRÁ FAZER O LOGIN APÓS CADASTRO OU NÃO.
		this.mainAxios.post('/User', { data: dados, flag: tipo, login: exception }).
		then(function (response) {
	      	main.loading = false;
      		NProgress.done();
      		if (response.data.login == 'OK') {
        		main.setUserLocalSt(response.data.dados, response.data.dados._id.$oid, response.data.key);
				console.log('Deu certo!');
				location.reload();
				// main.$router.push({ name: 'editarUser' });
				return true;
			}
			else{
				console.log('Deu errado!');
				main.message = true;
				return false;
      		}
    	}).catch(function (error) {
      		main.loading = false;
			NProgress.done();
			return false;
    	});
  	}else if (tipo == 'updateUser'){//UPDATE DE USUARIO
    	var query = this.getUserLocalSt();
    	query = query.id;
    	projectionQuery = dados;
    	delete projectionQuery._id;
		this.mainAxios.post('/User', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), where: query, projection: projectionQuery, flag: tipo }).
		then(function (response) {
      		if (response.data) {
        		main.globalForm = dados;
        		main.setUserLocalSt(dados, query, main.getKeyLocalSt());
        		console.log(response.data);
        		main.message = true;
      		}
      		main.loading = false;
      		NProgress.done();
    	}).catch(function (error) {
      		console.log(error.response.data);
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'selectUser'){
		this.mainAxios.post('/User', { key: this.getKeyLocalSt(), iduser: this.getIDLocalSt(), where: this.getIDLocalSt(), flag: tipo }).
		then(function (response) {
			if (response.data) {
				// não tinha nada aqui dentro.
				// por que será ?
			}
			main.loading = false;
			NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    });
  	}else if (tipo == 'getJSON'){
    	var nacionalidades = window.localStorage.getItem('nacionalidades');
    	var data = JSON.parse(nacionalidades);
    	if (!nacionalidades){
			this.mainAxios.post('/FormValid', { flag: tipo }).
			then(function (response) {
        		if (response.data) {
          			console.log(response.data);
          			window.localStorage.setItem('cidades', JSON.stringify(response.data.cidades));
          			window.localStorage.setItem('nacionalidades', JSON.stringify(response.data.nacionalidades));
          			window.localStorage.setItem('profissoes', JSON.stringify(response.data.profissoes));
          			main.recebeJSONS();
        		}
        		main.loading = false;
        		NProgress.done();
      		}).catch(function (error) {
        		main.loading = false;
        		NProgress.done();
      		});
		}
		else{
      		NProgress.done();
      		main.istoshow = true;
      		main.loading = false;
    	}
  	}
};
Vue.prototype.agenda = function (tipo, dados, exception = "") {
	  
	var main = this;
  	var query = {};
  	var projectionQuery = {};
  	this.loading = true;
	NProgress.start()
	  
  	if (tipo == 'listaHora_imovel'){//PEGAR HORARIOS DISPONIVEIS DO DIA SELECIONADO
		this.mainAxios.post('/Agenda', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(),  data: dados,  flag: tipo, more: exception })
		.then(function (response){
			main.loading = false;
			NProgress.done();
			var pacote = response.data;
			main.respostas = pacote;
		}).catch(function (error) {
			main.loading = false;
			NProgress.done();
		});
 	}else if (tipo == 'diasSemana'){//Pegar os próximos 5 dias das semanas sequentes ao dia atual
    	var key_user = this.getKeyLocalSt();
    	var id_user = this.getIDLocalSt();
    	console.log('KEY_USER = ' + key_user);
    	if (!key_user)
      		key_user = 'axb';
    	if (!id_user)
      		id_user = 'bxa';
		this.mainAxios.post('/Agenda', { iduser: id_user, key: key_user, flag: tipo }).
		// Pegar os próximos 5 dias das semanas sequentes ao dia atual
		then(function (response) {
      		main.loading = false;
      		NProgress.done();
			main.diasSemana = response.data;
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
			main.diasSemana = 'invalidkey';
    	});
  	}else if (tipo == 'enviaAgenda'){
		this.mainAxios.post('/Agenda', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, flag: tipo }).
		then(function (response) {
      		main.loading = false;
      		NProgress.done();
			if (response.data) {
				main.agendou = true;
				main.naopermite = false;
			}
			else{
				main.agendou = false;
				main.naopermite = true;
			}
      		//  main.diasSemana = response.data;
      		console.log(response.data);
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'recebe_corretor'){
		this.mainAxios.post('/Agenda', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, flag: tipo }).
		then(function (response) {
	      	main.loading = false;
			NProgress.done();
      		if (response.data) {
        		main.message = response.data;
        		console.log(response.data);
			}
			else{
        		main.message = 'NOT';
      		}
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'getAgenda'){
		this.mainAxios.post('/Agenda', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, flag: tipo }).
		then(function (response) {
			main.loading = false;
			NProgress.done();
			if (response.data) {
				main.agenda_horarios = response.data;
				main.paginacao();
				console.log(response.data);
			}
		}).catch(function (error) {
			main.loading = false;
			NProgress.done();
    	});
  	}else if (tipo == 'cancelaAgenda_visitor'){
		this.mainAxios.post('/Agenda', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, flag: tipo }).
		then(function (response) {
      		main.loading = false;
			NProgress.done();
      		if(response.data){
        		//location.reload()
        		//main.agenda_horarios = response.data;
				console.log('Resposta: ');
				console.log(response.data);
      		}
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'cancelaAgenda_corretor'){
		this.mainAxios.post('/Agenda', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, flag: tipo }).
		then(function (response) {
	      	main.loading = false;
      		NProgress.done();
      		if (response.data){
        		//main.agenda_horarios = response.data;
        		var query = {};
        		query.realtor_ID = this.getIDLocalSt();
        		main.agenda('getAgenda', query);
        		console.log(response.data);
      		}
    	}).catch(function (error){
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'getAgendaAdmin'){
		this.mainAxios.post('/Agenda', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, flag: tipo }).
		then(function (response) {
      		main.loading = false;
      		NProgress.done();
	      	if (response.data){
        		main.agenda_horarios = response.data;
        		console.log(response.data);
    		}
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'updateAgendaAdmin'){
		this.mainAxios.post('/Agenda', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, flag: tipo }).
		then(function (response) {
			main.loading = false;
			NProgress.done();
			if (response.data){
				//main.agenda_horarios = response.data;
				main.message = true;
				console.log(response.data);
			}
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'agendaAgora_et1'){//Verificar disponibilidade de horários
    	var key_user = this.getKeyLocalSt();
    	var id_user = this.getIDLocalSt();
    	// console.log('KEY_USER = ' + key_user);
    	if (!key_user)
      		key_user = 'axb';
    	if (!id_user)
      		id_user = 'bxa';
		this.mainAxios.post('/Agenda', { iduser: id_user, key: key_user, data: dados, flag: tipo }).
		then(function (response){
			// console.log('Ao menos respondi!');
			main.loading = false;
      		NProgress.done();
      		main.logged = true;
      		if(response.data){
				main.agenda_agora_et1 = response.data;
				// console.log('Etapa 1 passou:');
				// console.log(response.data);
			}
			else{
				main.agenda_agora_et1 = false;
				console.log('Etapa 1 passou mas no else:');
        		console.log(response.data);
      		}
    	}).catch(function (error) {
			// console.log('Etapa 1 não passou:');
      		main.logged = false;
      		main.loading = false;
      		NProgress.done();
    	});
	}else if (tipo == 'agendaAgora_et2'){//Confirmar agendamento
		jQuery(".guarda-spinner").addClass("aparece");
    	jQuery(".for-overlay").addClass("aparece");
		var key_user = this.getKeyLocalSt();
		var id_user = this.getIDLocalSt();		
		this.mainAxios.post('/Agenda', { iduser: id_user, key: key_user, data: dados, flag: tipo }).
		then(function (response) {
	      	main.loading = false;
      		NProgress.done();
      		if (response.data){
				main.agenda_agora_et2 = true;
				main.respostaAgendaAgora = true;
				jQuery(".guarda-spinner").removeClass("aparece");
				jQuery(".for-overlay").removeClass("aparece");
				// console.log('Agendamento feito!');
				// console.log(response.data);
			}
			else{
				// console.log('Não foi possível fazer agendamento!');
				// console.log(response.data);
			}
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'excluiAgenda') {
		this.mainAxios.post('/Agenda', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, flag: tipo }).
		then(function (response) {
      		main.loading = false;
      		NProgress.done();
      		if (response.data) {
        		var aux = {};
        		aux.pagina = main.$route.params.pagina;
        		aux.limite = main.limite_pag;
        		main.agenda('alimenta_lista', aux, [])
        		//location.reload();
      		}
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'getRota') {
		this.mainAxios.post('/Agenda', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), flag: tipo }).
		then(function (response) {
	      	main.loading = false;
      		NProgress.done();
      		if (response.data) {
		        main.results = response.data;
        		main.generatePositions();
			}
			else{
        		main.istoshow = false;
      		}
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'alimenta_lista'){
		this.mainAxios.post('/agenda', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, where: exception, flag: tipo }).
		then(function (response) {
			if (response.data) {
				console.log(response.data);
				main.results = response.data;
				main.resolvePaginacao();
			}
			main.loading = false;
			NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}
};
Vue.prototype.blog = function (tipo, dados, exception = "", aux_2 = "") {
  	var main = this;
  	var query = {};
  	var projectionQuery = {};
  	var aux = {};
  	NProgress.start();
  	main.loading = true;
  	if(tipo == 'uploadImage'){//PESQUISA  DE IMOVEIS
		this.mainAxios.post('/blog', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, flag: tipo }).
		then(function (response) {
      		if (response.data) {
        		main.urls_images.push(response.data);
        		main.afterUpload(response.data);
      		}
      		main.loading = false;
      		NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'insertPost'){
		this.mainAxios.post('/blog', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, flag: tipo }).
		then(function (response) {
      		if(response.data){
        		main.message = true;
      		}
      		main.loading = false;
      		NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'alimenta_lista'){
		this.mainAxios.post('/blog', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, flag: tipo }).
		then(function (response) {
			// console.log('Resposta consulta:') ;
			// console.log(response);
			if(response.data){
				// console.log('Resposta data:') ;
				// console.log(response);
        		main.results = response.data;
        		main.resolvePaginacao();
      		}
      		main.loading = false;
      		NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'updatePost'){
		this.mainAxios.post('/blog', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, query: exception, flag: tipo, updateMain: aux_2 }).
		then(function (response) {
      		if (response.data) {
        		main.message = true;
        		setInterval(location.reload(), 3000);
      		}
      		main.loading = false;
      		NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'selectPost_edit'){
		this.mainAxios.post('/blog', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, flag: tipo }).
		then(function (response) {
	      	if (response.data) {
        		console.log(response.data);
        		main.globalForm = response.data;
        		main.recebeData();
      		}
      		main.loading = false;
      		NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'deletaPost'){
		this.mainAxios.post('/blog', { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, flag: tipo }).
		then(function (response) {
	      	if (response.data) {
        		var aux = {};
        		aux.pagina = main.$route.params.pagina;
        		aux.limite = main.limite_pag;
        		main.blog('alimenta_lista', aux)
      		}
      		main.loading = false;
      		NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}else if (tipo == 'select'){
		this.mainAxios.post('/blog', { data: dados, flag: tipo }).
		then(function (response) {
			if (response.data) {
				main.blogData = response.data;
			}
			main.loading = false;
			NProgress.done();
    	}).catch(function (error) {
      		main.loading = false;
      		NProgress.done();
    	});
  	}
};
Vue.prototype.filtroADMIN = function (tipo, dados, exception = "", aux_2 = "") {
  	var main = this;
  	var query = {};
  	var projectionQuery = {};
  	var aux = {};

	this.mainAxios.post('/' + tipo, { iduser: this.getIDLocalSt(), key: this.getKeyLocalSt(), data: dados, configs: exception, flag: 'filtroADMIN' }).
	then(function (response) {
    	if (response.data) {
      		main.results = response.data;
      		main.resolvePaginacao();
    	}
  	}).catch(function (error) {
		//   mais outro campo que não tem nada dentro. Por que?
  	});
};

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App },
	methods: {}
})