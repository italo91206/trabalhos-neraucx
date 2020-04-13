<template>
  <div class="col-md-12 col-xs-12 cadastroCorretor">
    <h3 class="titleCadastro">Informações básicas</h3>

    <div class="row">
      <div class="col-md-6 col-xs-12 form-linha">
        <label for="enviaFotoAlugar">Selecione uma foto:</label>

        <input
          type="file"
          name="enviaFotoAlugar"
          ref="myFiles"
          @change="uploadFoto"
          placeholder="Escolha uma foto"
        >
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 col-xs-12 form-linha">
        <label for="nomeCompletoCorretor">Nome Completo:</label>
        <i class="sl sl-icon-user"></i>
        <input
          v-model="globalForm.name"
          v-bind:class="{'erroInput': erro.name}"
          type="text"
          class="input-text"
          name="nomeCompletoCorretor"
          id="nomeCompletoCorretor"
          value
        >
        <span v-if="erro.name" class="erro">{{erro.name}}</span>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 col-xs-12 form-linha">
        <label for="emailCorretor">Email:</label>
        <i class="sl sl-icon-envelope-open"></i>
        <input
          v-on:blur="verificacoes('email')"
          v-model="globalForm.email"
          v-bind:class="{'erroInput': erro.email}"
          type="text"
          class="input-text"
          name="emailCorretor"
          id="emailCorretor"
          value
        >
        <span v-if="erro.email" class="erro">{{erro.email}}</span>
      </div>
      <div class="col-md-4 col-xs-12 form-linha">
        <label for="creciCorretor">CRECI:</label>
        <i class="sl sl-icon-doc"></i>
        <input
          v-model="globalForm.documents.creci"
          v-bind:class="{'erroInput': erro.documents.creci}"
          type="text"
          class="input-text"
          name="creciCorretor"
          id="creciCorretor"
          value
        >
        <span v-if="erro.documents.creci" class="erro">{{erro.documents.creci}}</span>
      </div>
      <div class="col-md-4 col-xs-12 form-linha">
        <label for="rgCorretor">RG:</label>
        <i class="sl sl-icon-doc"></i>
        <input
          v-on:keyup="mascaraRg()"
          v-model="globalForm.documents.rg"
          v-bind:class="{'erroInput': erro.documents.rg}"
          type="text"
          class="input-text"
          name="rgCorretor"
          id="rgCorretor"
          value
        >
        <span v-if="erro.documents.rg" class="erro">{{erro.documents.rg}}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-xs-12 form-linha">
        <label for="cpfCorretor">CPF:</label>
        <i class="sl sl-icon-doc"></i>
        <input
          v-on:keyup="mascaraCpf()"
          v-on:blur="verificacoes('cpf')"
          v-model="globalForm.documents.cpf"
          v-bind:class="{'erroInput': erro.documents.cpf}"
          type="text"
          class="input-text"
          name="cpfCorretor"
          id="cpfCorretor"
          value
        >
        <span v-if="erro.documents.cpf" class="erro">{{erro.documents.cpf}}</span>
      </div>
      <div class="col-md-4 col-xs-12 form-linha">
        <label for="sexoCorretor">Sexo:</label>
        <select
          v-model="globalForm.pf_data.sexo"
          v-bind:class="{'erroInput': erro.pf_data.sexo}"
          name="sexoCorretor"
          class="padraoSelect"
        >
          <option v-for="sex in sexo" :value="sex.id">{{sex.name}}</option>
        </select>
        <span v-if="erro.pf_data.sexo" class="erro">{{erro.pf_data.sexo}}</span>
      </div>
      <div class="col-md-4 col-xs-12 form-linha">
        <label for="nascimentoCorretor">Data de Nascimento:</label>
        <i class="sl sl-icon-doc"></i>
        <input
          v-model="globalForm.pf_data.dataNascimento"
          v-bind:class="{'erroInput': erro.pf_data.dataNascimento}"
          type="date"
          class="input-text"
          name="nascimentoCorretor"
          id="nascimentoCorretor"
          value
        >
        <span v-if="erro.pf_data.dataNascimento" class="erro">{{erro.pf_data.dataNascimento}}</span>
      </div>
    </div>

    <h3 class="titleCadastro">Horários de agendamento</h3>

    <br>

    <div class="row">
      <div class="col-md-3">
        <label for>Inicio</label>
        <select
          v-model="globalForm.schedule.hora_inicio"
          type="text"
          class="selectPadraoAdmin"
          name="ramoAtivi"
          value
        >
          <option v-for="hour in consomeJSON.horarios()" v-bind:value="hour">{{hour}}</option>
        </select>
      </div>
      <div class="col-md-3">
        <label for>Fim</label>
        <select
          v-model="globalForm.schedule.hora_fim"
          type="text"
          class="selectPadraoAdmin"
          name="ramoAtivi"
          value
        >
          <option v-for="hour in consomeJSON.horarios()" v-bind:value="hour">{{hour}}</option>
        </select>
      </div>
      <div class="col-md-3">
        <label for>Almoço inicio</label>
        <select
          v-model="globalForm.schedule.almoco_inicio"
          type="text"
          class="selectPadraoAdmin"
          name="ramoAtivi"
          value
        >
          <option v-for="hour in consomeJSON.horarios()" v-bind:value="hour">{{hour}}</option>
        </select>
      </div>
      <div class="col-md-3">
        <label for>Almoço fim</label>
        <select
          v-model="globalForm.schedule.almoco_fim"
          type="text"
          class="selectPadraoAdmin"
          name="ramoAtivi"
          value
        >
          >
          <option v-for="hour in consomeJSON.horarios()" v-bind:value="hour">{{hour}}</option>
        </select>
      </div>

      <br>
      <br>
      <repeat v-for="hour in dias" style="margin-left: 1em;">
        <input
          v-model="globalForm.schedule.diaSemana"
          type="checkbox"
          v-bind:id="hour.name"
          v-bind:value="hour.id"
        >
        <label v-bind:for="hour.name" v-bind:value="hour.id">{{hour.name}}</label>
      </repeat>
    </div>

    <h3 class="titleCadastro">Informações de endereço</h3>

    <div class="row">
      <div class="col-md-4 col-xs-12 form-linha">
        <label for="cepAlugar">CEP:</label>
        <i class="sl sl-icon-compass"></i>
        <input
          v-on:keyup="validaCep();mascaraCep()"
          v-bind:class="{'erroInput': erro.addresses.cep}"
          v-model="globalForm.addresses.cep"
          type="text"
          class="input-text"
          name="cepAlugar"
          id="cepAlugar"
          value
        >
        <span v-if="erro.addresses.cep" class="erro">{{erro.addresses.cep}}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-xs-12 form-linha">
        <label for="ruaAlugar">Rua:</label>
        <i class="sl sl-icon-location"></i>
        <input
          v-bind:class="{'erroInput': erro.addresses.logradouro}"
          v-model="globalForm.addresses.logradouro"
          type="text"
          class="input-text"
          name="ruaAlugar"
          id="ruaAlugar"
          value
        >
        <span v-if="erro.addresses.logradouro" class="erro">{{erro.addresses.logradouro}}</span>
      </div>
      <div class="col-md-2 col-xs-12 form-linha">
        <label for="numAlugar">Nº:</label>
        <i class="sl sl-icon-location"></i>
        <input
          v-bind:class="{'erroInput': erro.addresses.numero}"
          v-model="globalForm.addresses.numero"
          type="text"
          class="input-text"
          name="numAlugar"
          id="numAlugar"
          value
        >
        <span v-if="erro.addresses.numero" class="erro">{{erro.addresses.numero}}</span>
      </div>
      <div class="col-md-4 col-xs-12 form-linha">
        <label for="compleAlugar">Complemento:</label>
        <i class="sl sl-icon-location"></i>
        <input
          v-model="globalForm.addresses.complemento"
          type="text"
          class="input-text"
          name="compleAlugar"
          id="compleAlugar"
          value
        >
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-xs-12 form-linha">
        <label for="bairroAlugar">Bairro:</label>
        <i class="sl sl-icon-location"></i>
        <input
          v-bind:class="{'erroInput': erro.addresses.bairro}"
          v-model="globalForm.addresses.bairro"
          type="text"
          class="input-text"
          name="bairroAlugar"
          id="bairroAlugar"
          value
        >
        <span v-if="erro.addresses.bairro" class="erro">{{erro.addresses.bairro}}</span>
      </div>
      <div class="col-md-4 col-xs-12 form-linha">
        <label for="estAlugar">Estado:</label>
        <select
          v-on:change="trocaCity()"
          v-model="globalForm.addresses.uf"
          name="estAlugar"
          class="padraoSelect"
        >
          <option v-for="state in estados" :value="state.uf">{{state.uf}}</option>
        </select>
        <span v-if="erro.addresses.uf" class="erro">{{erro.addresses.uf}}</span>
      </div>
      <div class="col-md-4 col-xs-12 form-linha">
        <label for="cidaAlugar">Cidade:</label>
        <select v-model="globalForm.addresses.cidade" name="cidaAlugar" class="padraoSelect">
          <option v-for="city in cidades" :value="city.id">{{city.name}}</option>
        </select>
        <span v-if="erro.addresses.cidade" class="erro">{{erro.addresses.cidade}}</span>
      </div>
    </div>

    <h3 class="titleCadastro">Informações de contato</h3>

    <div class="row">
      <div class="col-md-6 col-xs-12 form-linha">
        <label for="whatsAlugar">Celular/Whatsapp:</label>
        <i class="fa fa-whatsapp"></i>
        <input
          v-on:keyup="mascaraTELEFONE('whats')"
          v-bind:class="{'erroInput': erro.telephones.whats}"
          v-model="globalForm.telephones.whats"
          type="text"
          class="input-text"
          name="whatsAlugar"
          id="whatsAlugar"
          value
        >
        <span v-if="erro.telephones.whats" class="erro">{{erro.telephones.whats}}</span>
      </div>
      <div class="col-md-6 col-xs-12 form-linha">
        <label for="telAlugar">Telefone (opcional):</label>
        <i class="sl sl-icon-phone"></i>
        <input
          v-on:keyup="mascaraTELEFONE('tel')"
          v-model="globalForm.telephones.telefone"
          type="text"
          class="input-text"
          name="telAlugar"
          id="telAlugar"
          value
        >
      </div>
    </div>

    <h3 class="titleCadastro">Acesso</h3>

    <div class="row">
      <div class="col-md-6 col-xs-12 form-linha">
        <label for="passCorretor">Senha:</label>
        <i class="sl sl-icon-key"></i>
        <input
          v-model="globalForm.password"
          v-bind:class="{'erroInput': erro.password}"
          type="text"
          class="input-text"
          name="passCorretor"
          id="passCorretor"
          value
        >
        <span v-if="erro.password" class="erro">{{erro.password}}</span>
      </div>
      <div class="col-md-6 col-xs-12 form-linha">
        <label for="confirmpassCorretor">Confirma a senha:</label>
        <i class="sl sl-icon-key"></i>
        <input
          v-model="confirma_senha"
          type="text"
          class="input-text"
          name="confirmpassCorretor"
          id="confirmpassCorretor"
          value
        >
      </div>
    </div>

    <p class="pull-right">
      <a
        v-if="requisicao_feita == 0"
        v-on:click="enviaForm()"
        id="botaoCadastraCorretor"
        class="button botaoPadrao"
      >Cadastrar</a>
    </p>
    <load v-if="loading"></load>
  </div>
</template>

<script>
import load from "../globais/Load.vue";
export default {
  name: "corretor",
  data() {
    return {
      erro: this.validForm.getFormUser_global(),
      globalForm: this.validForm.getFormUser_global(),
      sexo: this.consomeJSON.sexo(),
      estados: this.consomeJSON.cidades(),
      cidades: "",
      sucesso: "",
      loading: false,
      foto: "",
      file: "",
      requisicao_feita: 0,
      confirma_senha: "",
      dias: this.consomeJSON.horarios_imovel()
    };
  },
  components: {
    load
  },
  created() {
    console.log(this.globalForm);
    this.globalForm.group_id.push(this.validForm.corretor());
  },
  watch: {
    foto: function() {
      this.getBase64(this.foto);
    }
  },
  methods: {
    enviaForm: function() {
      var validacaoForm = this.validForm.validacaoForm_corretor(
        this.globalForm,
        this.erro.email,
        this.erro.documents.cpf
      );
      this.erro = validacaoForm;

      console.log(this.erro);
      if (validacaoForm.qtd_error == 0) {
        if (this.confirma_senha == this.globalForm.password) {
          this.requisicao_feita = 1;
          this.formValid("cadastroUser", this.globalForm, true);
        } else {
          this.erro.password = "As senhas não batem!";
        }
      }
    },
    getBase64_axios(base64) {
      this.globalForm.base64imgs = [];
      this.globalForm.base64imgs.push(base64);
      console.log(this.globalForm.base64imgs); // prints the base64 strin
    },

    uploadFoto() {
      this.file = this.$refs.myFiles.files;
      console.log(this.file);
      for (var key in this.file) {
        this.getBase64(this.file[key]);
      }
    },

    trocaCity: function() {
      if (this.globalForm.addresses.uf) {
        for (var key in this.estados) {
          if (this.estados[key].uf == this.globalForm.addresses.uf) {
            this.cidades = this.estados[key].cidades;
            break;
          }
        }
      }
    },
    validaCep() {
      var cep = this.globalForm.addresses.cep.replace("-", "");
      console.log(cep);
      if (cep.length == 8) {
        this.formValid("cep", cep);
      }
    },
    mascaraCep() {
      this.globalForm.addresses.cep = this.validForm.mascaraCep(
        this.globalForm.addresses.cep
      );
    },

    recebeAjax(tipo) {
      if (tipo == "cep") {
        console.log(this.resposta);

        this.globalForm.addresses.logradouro = this.resposta.logradouro;
        this.globalForm.addresses.bairro = this.resposta.bairro;
        this.globalForm.addresses.uf = this.resposta.uf;

        this.trocaCity();
        for (var key in this.cidades) {
          if (
            this.cidades[key].name.toLowerCase() ==
            this.resposta.cidade.toLowerCase()
          ) {
            this.globalForm.addresses.cidade = this.cidades[key].id;
            break;
          }
        }
      }
    },

    verificacoes(tipo) {
      switch (tipo) {
        case "email":
          this.formValid("email", this.globalForm.email);
          break;
        case "cpf":
          this.formValid("cpf", this.globalForm.documents.cpf);
          break;
      }
    },
    mascaraRg() {
      this.globalForm.documents.rg = this.validForm.mascaraRg(
        this.globalForm.documents.rg
      );
    },
    mascaraCpf() {
      this.globalForm.documents.cpf = this.validForm.mascaraCPF(
        this.globalForm.documents.cpf
      );
    },
    mascaraTELEFONE(type) {
      if (type == "whats")
        this.globalForm.telephones.whats = this.validForm.mascaraTel(
          this.globalForm.telephones.whats
        );
      else
        this.globalForm.telephones.telefone = this.validForm.mascaraTel(
          this.globalForm.telephones.telefone
        );
    }
  }
};
</script>
