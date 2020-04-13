export default class consomeJSON{

	horarios_imovel(){
		var horarios = 
		[{"id":"0","name":"Domingo","agendado":"false"},
		{"id":"1","name":"Segunda","agendado":"false"},
		{"id":"2","name":"Ter\u00e7a","agendado":"false"},
		{"id":"3","name":"Quarta","agendado":"false"},
		{"id":"4","name":"Quinta","agendado":"false"},
		{"id":"5","name":"Sexta","agendado":"false"},
		{"id":"6","name":"S\u00e1bado","agendado":"false"}];

		return horarios;
	}
	nacionalidades(){//ok
		var nacionalidades = window.localStorage.getItem('nacionalidades');
        var data = JSON.parse(nacionalidades);
		return data;
	}
	sexo(){
		var sexo = [{'id': 'M', 'name': 'Masculino'}, {'id': 'F', 'name': 'Feminino'}];
		return sexo;
	}
	profissao(){//ok
		var profissoes = window.localStorage.getItem('profissoes');
        var data = JSON.parse(profissoes);
		return data;
	}
	getProfissaoByID(id){
		var profissoes = this.profissao();
		for(var key in profissoes){
			if(profissoes[key].id == id){
				return profissoes[key].name;
			}
		}
	}
	getCidadeByID(uf,id){
		var cidades = this.cidades();
		for(var key in cidades){
			if(cidades[key].uf == uf){
				for(var i in cidades[key].cidades){
					if(cidades[key].cidades[i].id == id)
						return cidades[key].cidades[i].name;
				}
			}
		}
	}
	estadoCivil(){
		var estC = [{"id":2,"name":"CASADO"},{"id":4,"name":"DIVORCIADO"},{"id":3,"name":"SEPARADO JUDICIALMENTE"},{"id":1,"name":"SOLTEIRO"},{"id":6,"name":"UNIÃO ESTÁVEL"},{"id":5,"name":"VIUVO"}];
		return estC;
	}
	cidades(){
		var cidades = window.localStorage.getItem('cidades');
        var data = JSON.parse(cidades);
        return data;
	}
	getNome_dia(diaNumero){
        var  diaNum = parseInt(diaNumero);
        var semana = this.horarios_imovel();
        return semana[diaNum].name;
	}
	getTipos_imovel(){
		var tipos = [
			{"id":1,"nome":"Casa"},
			{"id":2,"nome":"Sobrado"},
			{"id":3,"nome":"Apartamento"},
			{"id":4,"nome":"Comercial"},
			{"id":5,"nome":"Casa com salão comercial"},
			{"id":6,"nome":"Lazer"},
			{"id":7,"nome":"Terreno"},
			{"id":8,"nome":"Rural"},
			{"id":9,"nome":"Área"},
			{"id":10,"nome":"Salão"},
			{"id":11,"nome":"Sala"}
		];
		return tipos;
	}
	getTipo_nome(ID){
		var tipos = this.getTipos_imovel();
		for(var key in tipos){
			if(tipos[key].id == ID){
				return tipos[key].nome;
			}
		}
	}
	getOperacoes(){
		var operacoes = [{"id":1, "nome":"Alugar"}, {"id":2, "nome":"Comprar"}, {"id":3, "nome":"Alugar e comprar"}, {"id":4, "nome":"Permuta"}];
		return operacoes;
	}
	getOperacao(ID){
		var operacoes = this.getOperacoes();
		for(var key in operacoes) {
			if(operacoes[key].id == ID){
				return operacoes[key].op;
			}
		}
	}
	getArea(){
		var tiposAreas = [
		{"id":1, "nome":"m²"},{"id":2, "nome":"km²"},{"id":3, "nome":"Hectares"},
		{"id":4, "nome":"Acres"},{"id":5, "nome":"Alqueires"},{"id":6, "nome":"Alqueires Paulistas"},
		{"id":7, "nome":"Alqueires Mineiros"},{"id":8, "nome":"Alqueires Baianos"},{"id":9, "nome":"Alqueires do Norte"}]
		return tiposAreas;
	}
	getAreas(ID){
		var tiposAreas = this.tiposAreas();
		for(var key in tiposAreas){
			if(tiposAreas[key].id == ID){
				return tiposAreas[key].nome;
			}
		}
	}
	getOpcao(){
		var opcao = [
			{"id": 1, "nome":"Sim"},
			{"id": 2, "nome":"Não"}
		]
		return opcao;
	}
	getOpcoes(ID){
		var opcao = this.opcao();
		for(var key in opcao){
			if(opcao[key].id == ID){
				return opcao[key].nome;
			}
		}
	}
	getMes(){
		var mes = [
			{"id":0, "nome": "-"},
			{"id": 1, "nome":"1"},
			{"id": 2, "nome":"2"},
			{"id": 3, "nome":"3"},
			{"id": 4, "nome":"4"},
			{"id": 5, "nome":"5"},
			{"id": 6, "nome":"6"},
			{"id": 7, "nome":"7"},
			{"id": 8, "nome":"8"},
			{"id": 9, "nome":"9"},
			{"id": 10, "nome":"10"},
			{"id": 11, "nome":"11"},
			{"id": 12, "nome":"12"},

		]
		return mes;
	}
	getMeses(ID){
		var mes = this.mes();
		for(var key in mes){
			if(mes[key].id == ID){
				return mes[key].nome;
			}
		}
	}
	getDisponivel(){
		var disponibilidade = [
			{"id": 1, "nome":"Disponível"},
			{"id": 2, "nome":"Alugado"},
			{"id": 2, "nome":"Vendido"},
			{"id": 2, "nome":"Reservado"},
			{"id": 2, "nome":"Desistência"},
			{"id": 2, "nome":"Outros"}
		]
		return disponibilidade;
	}
	getDisponibilidade(ID){
		var disponibilidade = this.disponibilidade();
		for(var key in disponibilidade){
			if(disponibilidade[key].id == ID){
				return disponibilidade[key].nome;
			}
		}
	}
	getEstado(){
		var estado = [
			{"id": 1, "nome":"Novo"},
			{"id": 2, "nome":"Usado"}
		]
		return estado;
	}
	getEstados(ID){
		var estado = this.estado();
		for(var key in estado){
			if(estado[key].id == ID){
				return estado[key].nome;
			}
		}
	}
	getEstado(){
		var estado = [
			{"id": 1, "nome":"Novo"},
			{"id": 2, "nome":"Usado"}
		]
		return estado;
	}
	getEstados(ID){
		var estado = this.estado();
		for(var key in estado){
			if(estado[key].id == ID){
				return estado[key].nome;
			}
		}
	}
	getTipoValor() {
		var tipo = [
			{"id": 1, "nome": "m²"},
			{"id": 2, "nome": "Imóvel"}
		]
		return tipo;
	}
	getTipoValores(ID){
		var tipo = this.tipo();
		for(var key in tipo){
			if(tipo[key].id == ID){
				return tipo[key].nome;
			}
		}
	}
	getTipoLocacao() {
		var locacao = [
			{"id": 1, "nome": "Mês"},
			{"id": 2, "nome": "Dia(Temporada)"},
			{"id": 3, "nome": "Ano"}

		]
		return locacao;
	}
	getTipoTempo(ID){
		var locacao = this.locacao();
		for(var key in locacao){
			if(locacao[key].id == ID){
				return locacao[key].nome;
			}
		}
	}
	horarios(){
		var horarios = ['08:00', '08:30','09:00','09:30','10:00','10:30',
		'11:00','11:30','12:00', '12:30','13:00','13:30','14:00','14:30',
		'15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30',
		'19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30',
		'23:00','23:30']
		return horarios;
	}
}

