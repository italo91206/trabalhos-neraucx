import { userInfo } from "os";

export default class validaForm {

  validaPessoaFisica() {
    alert("test ok");
  }


  /****AGENDA STATUS ***/
  getStatus_agenda(status) {
    switch (status) {
      case '1':
        return this.visita_concluida();
        break;
      case '2':
        return this.visita_cancelada();
        break;
      case '3':
        return this.visita_pendente();
        break;
      case '4':
        return this.agendado();
        break;
      case '5':
        return this.visita_cancelada_admin();
        break;
    }
  }
  visita_concluida() {
    var data = {};
    data.alert = 'alert-success';
    data.id = '1';
    data.label = 'Visita concluida';
    return data;
  }
  visita_cancelada() {
    var data = {};
    data.alert = 'alert-danger'
    data.id = '2'
    data.label = 'Visita cancelada';
    return data;
  }
  visita_pendente() {
    var data = {};
    data.alert = 'alert-warning';
    data.id = '3'
    data.label = 'Pendente de corretor';
    return data;
  }


  agendado() {
    var data = {};
    data.alert = 'alert-primary';
    data.id = '4';
    data.label = 'Agendado';
    return data;
  }
  visita_cancelada_admin() {
    var data = {};
    data.alert = 'alert-danger';
    data.id = '5'
    data.label = 'Cancelada pelo ADM';
    return data;

  }

  /*** STATUS ***/
  ativo() {
    return '1';
  }
  inativo() {
    return '2';
  }
  pendente() {
    return '3';
  }


  getLabel_status(id) {
    switch (id) {
      case this.ativo():
        return 'Ativo';
        break;
      case this.inativo():
        return 'Inativo';
        break;
      case this.pendente():
        return 'Pendente';
        break;
    }
  }


  admin() {
    return '1';
  }
  captador() {
    return '4';
  }
  anunciar() {
    return '3';
  }
  corretor() {
    return '5';
  }
  alugar() {
    return '6';
  }

  getType_labels(groups) {
    var types = '';
    for (var key in groups) {
      switch (groups[key]) {
        case this.admin():
          types += ' ADM';
          break;
        case this.captador():
          types += ' CAP ';
          break;
        case this.anunciar():
          types += ' PRO ';
          break;
        case this.corretor():
          types += ' COR ';
          break;
        case this.alugar():
          types += 'LOC';
          break;

      }

    }
    return types;
  }


  getLabel_users(id) {
    id = parseInt(id);
    var name = {};
    switch (id) {
      case 1:
        name.min = 'ADM';
        name.all = 'Administrador';
        break;
      case 3:
        name.min = 'PRO';
        name.all = 'Proprietário';
        break;
      case 4:
        name.min = 'CAP';
        name.all = 'Captador';
        break;
      case 5:
        name.min = 'COR';
        name.all = 'Corretor';
        break;
      case 6:
        name.min = 'LOC';
        name.all = 'Locatário';
        break;
    }

    return name;
  }



  /** FIM STATUS **/

  getForm_blog() {
    var form = {};
    form.titulo = '';
    form.descryption = '';
    form.content = '';
    form.imgs = [];
    form.data = '';
    form.owner_id = '';
    form.main_img = '';

    return form;

  }

  getFormUser_global() {

    var form = {};
    form.name = '';
    form.visited_now = {};
    form.visited_now.now = '';
    form.visited_now.id_schedule = '';
    form.email = '';
    form.password = '';
    form.status = this.pendente();
    form.person_type = 'F';

    form.foto = "";
    form.base64imgs = [];

    form.schedule = {};
    form.schedule.diaSemana = [];
    form.schedule.hora_inicio = '';
    form.schedule.hora_fim = '';
    form.schedule.almoco_inicio = '';
    form.schedule.almoco_fim = '';

    form.horarios = {};
    form.horarios.hora_inicio = '';
    form.horarios.hora_fim = '';
    form.horarios.almoco_inicio = '';
    form.horarios.almoco_fim = '';
    form.horarios.diaSemana = [];


    form.telephones = {};
    form.telephones.telefone = '';
    form.telephones.whats = '';

    form.addresses = {};
    form.addresses.cep = '';
    form.addresses.logradouro = '';
    form.addresses.numero = '';
    form.addresses.bairro = '';
    form.addresses.cidade = '';
    form.addresses.cidade_nome = '';
    form.addresses.complemento = '';
    form.addresses.uf = '';

    form.documents = {};
    form.documents.rg = '';
    form.documents.dataExpedicaoRg = '';
    form.documents.cpf = '';
    form.documents.cnh = '';
    form.documents.cnpj = '';
    form.documents.inscricaoEstadual = '';
    form.documents.inscricaoMunicipal = '';
    form.documents.creci = "";

    form.pf_data = {};
    form.pf_data.sexo = '';
    form.pf_data.dataNascimento = '';
    form.pf_data.nacionalidadeId = '';
    form.pf_data.estadoCivilId = '';
    form.pf_data.profissaoId = '';

    form.pj_data = {};
    form.pj_data.nomeContato = '';
    form.pj_data.dataFund = '';
    form.pj_data.ramo = '';

    form.group_id = [];
    
    form.lastCheck = '';
    form.isUnchecked = '';

    return form;
  }

  get_lastCheck(user){
    // Retorna uma mensagem caso o usuário tenha passado entre 115 à 120 dias
    // ou então até mesmo se já passou 120 ou mais dias
    // caso já tenha passado 120 dias, é atualizado para isUnchecked = true
    var msg = ''
    var atual = new Date();
    var diferenca = atual - user.lastCheck;
    diferenca /= 1000; // milissegundos agora é segundos;
    diferenca /= 60; // segundos agora é minutos;
    diferenca /= 60; // minutos agora é horas;
    diferenca /= 24; // horas agora sao dias;
    if(diferenca >= 120){
      msg = 'Você precisa atualizar o seu cadastro!';
      user.isUnchecked = true;
    }
    else if(diferenca >= 115 && diferenca < 120)
      msg = 'Você logo precisará atualizar o seu cadastro.'
    return msg;
  }

  getSwitch_user_acrescenta(that, type) {
    if (type == 'juridica') {
      that.globalForm.documents.cnpj = '';
      that.globalForm.documents.inscricaoEstadual = '';
      that.globalForm.documents.inscricaoMunicipal = '';
      that.globalForm.pj_data = {};
      that.globalForm.pj_data.nomeContato = '';
      that.globalForm.pj_data.dataFund = '';
      that.globalForm.pj_data.ramo = '';

    } else if (type == 'fisica') {
      that.globalForm.documents.rg = '';
      that.globalForm.documents.dataExpedicaoRg = '';
      that.globalForm.documents.cpf = '';
      that.globalForm.documents.cnh = '';
      that.globalForm.pf_data = {};
      that.globalForm.pf_data.sexo = '';
      that.globalForm.pf_data.dataNascimento = '';
      that.globalForm.pf_data.nacionalidadeId = '';
      that.globalForm.pf_data.estadoCivilId = '';
      that.globalForm.pf_data.profissaoId = '';
    }
  }

  getSwitch_user_deleta(that, type) {
    if (type == 'juridica') {
      delete that.globalForm.documents.cnpj;
      delete that.globalForm.documents.inscricaoEstadual;
      delete that.globalForm.documents.inscricaoMunicipal;
      delete that.globalForm.pj_data;;

    } else if (type == 'fisica') {
      delete that.globalForm.documents.rg;
      delete that.globalForm.documents.dataExpedicaoRg;
      delete that.globalForm.documents.cpf;
      delete that.globalForm.documents.cnh;
      delete that.globalForm.pf_data;
    }
  }

  getFormUser_corretor() {
    var form = {};
    form.name = '';
    form.email = '';
    form.password = '';
    form.status = '1';
    form.foto = '';
    form.base64imgs = [];
    form.person_type = 'C';
    form.group_id = [this.corretor()];

    form.schedule = {};
    form.schedule.diaSemana = [];
    form.schedule.hora_inicio = '';
    form.schedule.hora_fim = [];
    form.horarios = '';

    form.telephones = {};
    form.telephones.telefone = '';
    form.telephones.whats = '';

    form.addresses = {};
    form.addresses.cep = '';
    form.addresses.logradouro = '';
    form.addresses.numero = '';
    form.addresses.bairro = '';
    form.addresses.cidade = '';
    form.addresses.complemento = '';
    form.addresses.uf = '';

    form.documents = {};
    form.documents.creci = "";
    form.documents.rg = '';
    form.documents.cpf = '';
    form.documents.dataExpedicaoRg = '';
    form.documents.cnh = '';
    form.documents.cnpj = '';
    form.documents.inscricaoEstadual = '';
    form.documents.inscricaoMunicipal = '';


    form.pf_data = {};
    form.pf_data.sexo = '';
    form.pf_data.dataNascimento = '';
    form.pf_data.nacionalidadeId = '';
    form.pf_data.estadoCivilId = '';
    form.pf_data.profissaoId = '';


    form.pj_data = {};
    form.pj_data.nomeContato = '';
    form.pj_data.dataFund = '';
    form.pj_data.ramo = '';

    form.group_id = [];

    return form;

  }



  getFormImovel_cadastro() {
    var form = {};

    form.type = '';
    form.value = '';
    form.status = this.pendente();

    form.rotulo = '';
    form.imagens = [];
    form.base64imgs = []
    form.visited_now = '';


    form.owner_id = [];
    form.documents = {};
    form.documents.disponibilidade = '';
    form.documents.localChave = '';
    form.documents.exclusividade = '';
    form.documents.autorizacao = '';
    form.documents.escriturada = '';
    form.documents.financiamento = '';
    form.documents.placa = '';
    form.documents.valorOculto = '';
    form.documents.valorMinimo = '';
    form.documents.obs = '';

    form.descryption = '';
    form.documents.matricula = '';


    form.value_data = {};
    form.value_data.condominio = '';
    form.value_data.venda = '';
    form.value_data.tipo = '';
    form.value_data.tipoLocacao = '';

    form.value_data.iptu = '';
    form.value_data.iptuParcelado = '';
    form.value_data.iptuAVista = '';
    form.value_data.iptuGaragemMes = '';
    form.value_data.iptuGaragemParcelado = '';
    form.value_data.iptuGaragemAVista = '';
    form.value_data.valorCapitalizacao = '';
    form.value_data.seguroFianca = '';

    form.value_data.seguroIncendioMes = '';
    form.value_data.seguroIncendioParcelas = '';
    form.value_data.seguroIncendioAVista = '';
    form.value_data.seguroIncendioObs = '';

    form.basic_data = {};
    form.basic_data.areaterreno = '';
    form.basic_data.areaConstruida = '';
    form.basic_data.areaTerreno = '';
    form.basic_data.areaComum = '';
    form.basic_data.areaPrivativa = '';
    form.basic_data.tipoConstruida = '';
    form.basic_data.tipoTerreno = '';
    form.basic_data.tipoComum = '';
    form.basic_data.tipoPrivativa = '';
    form.basic_data.estado = '';
    form.basic_data.destaque = '';
    form.basic_data.local = '';
    form.basic_data.parceria = '';
    form.basic_data.corretor = '';
    form.basic_data.indicador = '';

    form.rooms = {};
    form.rooms.quartos = '';
    form.rooms.suites = '';
    form.rooms.salasEstar = '';
    form.rooms.banheiros = '';
    form.rooms.lavababos = '';
    form.rooms.garagem = '';

    form.address = {};
    form.address.cep = '';
    form.address.logradouro = '';
    form.address.numero = '';
    form.address.complemento = '';

    form.neighbor = '';
    form.state = '';
    form.city = '';
    form.city_id = '';

    form.schedule = [];

    form.latlon = [];

    return form;
  }

  validaForm_blog(validar) {
    var objetoForm = this.getForm_blog();
    objetoForm.qtd_error = 0;

    if (!validar.titulo) {
      objetoForm.titulo = 'Campo vazio!';
      objetoForm.qtd_error++;
    }

    if (!validar.descryption) {
      objetoForm.descryption = 'Campo vazio!';
      objetoForm.qtd_error++;
    }

    if (!validar.content) {
      objetoForm.content = 'Campo vazio!';
      objetoForm.qtd_error++;
    }

    return objetoForm;
  }

	validacaoForm_userGlobal(validar, email, cpf) {
		var objetoForm = this.getFormUser_global();
		objetoForm.qtd_error = 0;

		for (var f in validar.foto) {
			var nome = f.filename;
			console.log(nome.filename);
		}
		if (!validar.name) {
			objetoForm.name = 'Campo vazio';
			objetoForm.qtd_error++;
		}
		if (!validar.email) {
			objetoForm.email = 'Campo vazio';
			objetoForm.qtd_error++;
		}
		if (email) {
			// SE E-MAIL FOR VALIDO OU NAO EXISTIR NO BANCO
			objetoForm.email = 'Email existente';
			objetoForm.qtd_error++;
		}
		if (!validar.telephones.whats) {
			objetoForm.telephones.whats = 'Campo vazio';
			objetoForm.qtd_error++;
		}
		if (!validar.documents.cpf) {
			objetoForm.documents.cpf = 'Campo vazio';
			objetoForm.qtd_error++;
		}
		// if (!validar.password) {
		// 	objetoForm.password = 'Campo vazio';
		// 	objetoForm.qtd_error++;
		// }
		// if (!validar.addresses.bairro) {
		// 	objetoForm.addresses.bairro = 'Campo vazio';
		// 	objetoForm.qtd_error++;
		// }
		// if (!validar.addresses.cep) {
		// 	objetoForm.addresses.cep = 'Campo vazio';
		// 	objetoForm.qtd_error++;
		// }
		// if (!validar.addresses.logradouro) {
		// 	objetoForm.addresses.logradouro = 'Campo vazio';
		// 	objetoForm.qtd_error++;
		// }
		// if (!validar.addresses.numero) {
		// 	objetoForm.addresses.numero = 'Campo vazio';
		// 	objetoForm.qtd_error++;
		// }
		// if (!validar.addresses.uf) {
		// 	objetoForm.addresses.uf = 'Campo vazio';
		// 	objetoForm.qtd_error++;
		// }
		// if (!validar.addresses.cidade) {
		// 	objetoForm.addresses.cidade = 'Campo vazio';
		// 	objetoForm.qtd_error++;
		// }
		// if (validar.person_type == 'F') {
		// 	if (!validar.documents.rg) {
		// 		objetoForm.documents.rg = 'Campo vazio';
		// 		objetoForm.qtd_error++;
		// 	}
			
		// 	/*else if(!this.testaCPF(validar.documents.cpf)){
		// 		objetoForm.documents.cpf = 'CPF Inválido ';
		// 		objetoForm.qtd_error++;
		// 	}*/
		// 	if (cpf) {
		// 		objetoForm.documents.cpf = 'CPF existente';
		// 		objetoForm.qtd_error++;
		// 	}
		// 	// if (!validar.documents.cnh) {
		// 	// 	objetoForm.documents.cnh = 'Campo vazio';
		// 	// 	objetoForm.qtd_error++;
		// 	// } 
		// 	// removido à pedido do cliente
		// 	if (!validar.documents.dataExpedicaoRg) {
		// 		objetoForm.documents.dataExpedicaoRg = 'Campo vazio';
		// 		objetoForm.qtd_error++;
		// 	}
		// 	if (!validar.pf_data.dataNascimento) {
		// 		objetoForm.pf_data.dataNascimento = 'Campo vazio';
		// 		objetoForm.qtd_error++;
		// 	}
		// 	if (!validar.pf_data.estadoCivilId) {
		// 		objetoForm.pf_data.estadoCivilId = 'Campo vazio';
		// 		objetoForm.qtd_error++;
		// 	}
		// 	if (!validar.pf_data.nacionalidadeId) {
		// 		objetoForm.pf_data.nacionalidadeId = 'Campo vazio';
		// 		objetoForm.qtd_error++;
		// 	}
		// 	if (!validar.pf_data.profissaoId) {
		// 		objetoForm.pf_data.profissaoId = 'Campo vazio';
		// 		objetoForm.qtd_error++;
		// 	}
		// 	if (!validar.pf_data.sexo) {
		// 		objetoForm.pf_data.sexo = 'Campo vazio';
		// 		objetoForm.qtd_error++;
		// 	}
		// }
		// else {
		// 	if (!validar.documents.cnpj) {
		// 		objetoForm.documents.cnpj = 'Campo vazio';
		// 		objetoForm.qtd_error++;
		// 	}
		// 	if (!validar.documents.inscricaoEstadual) {
		// 		objetoForm.documents.inscricaoEstadual = 'Campo vazio';
		// 		objetoForm.qtd_error++;
		// 	}
		// 	if (!validar.documents.inscricaoMunicipal) {
		// 		objetoForm.documents.inscricaoMunicipal = 'Campo vazio';
		// 		objetoForm.qtd_error++;
		// 	}
		// 	if (!validar.pj_data.dataFund) {
		// 		objetoForm.pj_data.dataFund = 'Campo vazio';
		// 		objetoForm.qtd_error++;
		// 	}
		// 	if (!validar.pj_data.nomeContato) {
		// 		objetoForm.pj_data.nomeContato = 'Campo vazio';
		// 		objetoForm.qtd_error++;
		// 	}
		// 	if (!validar.pj_data.ramo) {
		// 		objetoForm.pj_data.ramo = 'Campo vazio';
		// 		objetoForm.qtd_error++;
		// 	}
		// }
		return objetoForm;
	}

  validacaoForm_corretor(validar, email, cpf) {
    var objetoForm = this.getFormUser_corretor();
    objetoForm.qtd_error = 0;
    if (!validar.name) {
      objetoForm.name = 'Campo vazio';
      objetoForm.qtd_error++;
    }


    if (!validar.email) {
      objetoForm.email = 'Campo vazio';
      objetoForm.qtd_error++;
    }

    if (email) {// CASO O EMAIL EXISTA
      objetoForm.email = 'E-mail existente';
      objetoForm.qtd_error++;
    }

    if (!validar.password) {
      objetoForm.password = 'Campo vazio';
      objetoForm.qtd_error++;
    }

    if (!validar.documents.creci) {
      objetoForm.documents.creci = 'Campo vazio';
      objetoForm.qtd_error++;
    }

    if (!validar.telephones.whats) {
      objetoForm.telephones.telefone = 'Campo vazio';
      objetoForm.qtd_error++;
    }


    if (!validar.documents.rg) {
      objetoForm.documents.rg = 'Campo vazio';
      objetoForm.qtd_error++;
    }


    if (!validar.documents.cpf) {
      objetoForm.documents.cpf = 'Campo vazio';
      objetoForm.qtd_error++;

    }/*else if(!this.testaCPF(validar.documents.cpf)){
                objetoForm.documents.cpf = 'CPF Inválido ';
                objetoForm.qtd_error++;

         }*/
    if (cpf) {//CASO CPF EXISTA
      objetoForm.documents.cpf = 'CPF existente';
      objetoForm.qtd_error++;

    }

    if (!validar.pf_data.sexo) {
      objetoForm.pf_data.sexo = 'Campo vazio';
      objetoForm.qtd_error++;
    }

    if (!validar.pf_data.dataNascimento) {
      objetoForm.pf_data.dataNascimento = 'Campo vazio';
      objetoForm.qtd_error++;
    }



    if (!validar.addresses.bairro) {
      objetoForm.addresses.bairro = 'Campo vazio';
      objetoForm.qtd_error++;
    }

    if (!validar.addresses.cep) {
      objetoForm.addresses.cep = 'Campo vazio';
      objetoForm.qtd_error++;
    }

    if (!validar.addresses.logradouro) {
      objetoForm.addresses.logradouro = 'Campo vazio';
      objetoForm.qtd_error++;
    }

    if (!validar.addresses.numero) {
      objetoForm.addresses.numero = 'Campo vazio';
      objetoForm.qtd_error++;
    }

    if (!validar.addresses.uf) {
      objetoForm.addresses.uf = 'Campo vazio';
      objetoForm.qtd_error++;
    }
    // if(!validar.addresses.cidade){
    //     objetoForm.addresses.cidade = 'Campo vazio';
    //     objetoForm.qtd_error++;
    // }

    return objetoForm;

  }

  validacaoForm_login(validar) {
    var objetoForm = {};
    objetoForm.qtd_error = 0;

    if (!validar.email) {
      objetoForm.email = 'Campo vazio';
      objetoForm.qtd_error++;
    }

    if (!validar.password) {
      objetoForm.password = 'Campo vazio';
      objetoForm.qtd_error++;
    }

    return objetoForm;
  }

  validacaoForm_cadastroImovel(validar) {
    var form = this.getFormImovel_cadastro();
    form.qtd_error = 0;

    if (!validar.documents.matricula) {
      form.documents.matricula = 'Campo vazio';
      form.qtd_error++;
    }

    if (!validar.type) {
      form.type = 'Campo vazio';
      form.qtd_error++;
    }

    if (!validar.value) {
      form.value = 'Campo vazio';
      form.qtd_error++;
    }


    // if (!validar.basic_data.areaterreno) {
    //   form.basic_data.areaterreno = 'Campo vazio';
    //   form.qtd_error++;
    // }
    // if(!validar.basic_data.estado){
    //     form.basic_data.estado = 'Campo vazio';
    //     form.qtd_error++;
    // }

    // if (!validar.basic_data.destaque) {
    //   form.basic_data.destaque = 'Campo vazio';
    //   form.qtd_error++;
    // }
    // if (!validar.basic_data.local) {
    //   form.basic_data.local = 'Campo vazio';
    //   form.qtd_error++;
    // }
    // if (!validar.basic_data.parceria) {
    //   form.basic_data.parceria = 'Campo vazio';
    //   form.qtd_error++;
    // }
    // if (!validar.basic_data.corretor) {
    //   form.basic_data.corretor = 'Campo vazio';
    //   form.qtd_error++;
    // }
    // if (!validar.basic_data.indicador) {
    //   form.basic_data.indicador = 'Campo vazio';
    //   form.qtd_error++;
    // }

    // if (!validar.documents.disponibilidade) {
    //   form.documents.disponibilidade = 'Campo vazio';
    //   form.qtd_error++;
    // }
    // if (!validar.documents.localChave) {
    //   form.documents.localChave = 'Campo vazio';
    //   form.qtd_error++;
    // }

    // if (!validar.rooms.quartos) {
    //   form.rooms.quartos = 'Campo vazio';
    //   form.qtd_error++;
    // }
    // if (!validar.rooms.suites) {
    //   form.rooms.suites = 'Campo vazio';
    //   form.qtd_error++;
    // }
    // if (!validar.rooms.salasEstar) {
    //   form.rooms.salasEstar = 'Campo vazio';
    //   form.qtd_error++;
    // }
    // if (!validar.rooms.banheiros) {
    //   form.rooms.banheiros = 'Campo vazio';
    //   form.qtd_error++;
    // }
    // if (!validar.rooms.lavabos) {
    //   form.rooms.lavabos = 'Campo vazio';
    //   form.qtd_error++;
    // }
    // if (!validar.rooms.garagem) {
    //   form.rooms.garagem = 'Campo vazio';
    //   form.qtd_error++;
    // }

    // if (!validar.basic_data.areaConstruida) {
    //   form.basic_data.areaConstruida = 'Campo vazio';
    //   form.qtd_error++;
    // }

    // if (!validar.basic_data.tipoConstruida) {
    //   form.basic_data.tipoConstruida = 'Campo vazio';
    //   form.qtd_error++;
    // }

    // if (!validar.basic_data.tipoTerreno) {
    //   form.basic_data.tipoTerreno = 'Campo vazio';
    //   form.qtd_error++;
    // }


    if (!validar.address.cep) {
      form.address.cep = 'Campo vazio';
      form.qtd_error++;
    }
    if (!validar.address.logradouro) {
      form.address.logradouro = 'Campo vazio';
      form.qtd_error++;
    }
    if (!validar.address.numero) {
      form.address.numero = 'Campo vazio';
      form.qtd_error++;
    }
    if (!validar.neighbor) {
      form.neighbor = 'Campo vazio';
      form.qtd_error++;
    }

    if (!validar.state) {
      form.state = 'Campo vazio';
      form.qtd_error++;
    }

    if (!validar.city_id) {
      form.city_id = 'Campo vazio';
      form.qtd_error++;
    }
    return form;

  }


  mascaraMoeda(tmp) {
    tmp = tmp.replace(/\D/g, "");
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if (tmp.length > 6)
      tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    if (tmp.length > 10)
      tmp = tmp.replace(/([0-9]{3})\.([0-9]{3}),([0-9]{2}$)/g, ".$1.$2,$3");
    return tmp;
  }

  mascaraCep(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    return valor;
  }
  mascaraRg(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4");
    return v;
  }
  mascaraCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
  }

  mascaraTel(tel) {
    tel = tel.replace(/\D/g, "")
    tel = tel.replace(/^(\d)/, "($1")
    tel = tel.replace(/(.{3})(\d)/, "$1)$2")
    if (tel.length == 9) {
      tel = tel.replace(/(.{1})$/, "-$1")
    } else if (tel.length == 10) {
      tel = tel.replace(/(.{2})$/, "-$1")
    } else if (tel.length == 11) {
      tel = tel.replace(/(.{3})$/, "-$1")
    } else if (tel.length == 12) {
      tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length > 12) {
      tel = tel.replace(/(.{4})$/, "-$1")
    }
    return tel;
  }
  testaCPF(strCPF) {
    var cpf = strCPF;
    var i;
    cpf = cpf.replace(/\.|\-/g, "");
    console.log(cpf);
    if (cpf.length < 11)
      return false;
    var digitoDigitado = eval(cpf.charAt(9) + cpf.charAt(10));
    var soma1 = 0, soma2 = 0;
    var vlr = 11;
    var digitoGerado;

    for (i = 0; i < 9; i++) {
      soma1 += eval(cpf.charAt(i) * (vlr - 1));
      soma2 += eval(cpf.charAt(i) * vlr);
      vlr--;
    }
    soma1 = (((soma1 * 10) % 11) == 10 ? 0 : ((soma1 * 10) % 11));
    soma2 = (((soma2 + (2 * soma1)) * 10) % 11);

    var digitoGerado = (soma1 * 10) + soma2;
    if (digitoGerado != digitoDigitado)
      return false;
  }

  mascaraCNPJ(cnpj) {
    cnpj = cnpj.replace(/\D/g, "")
    cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2")
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2")
    cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2")
    return cnpj
  }
}