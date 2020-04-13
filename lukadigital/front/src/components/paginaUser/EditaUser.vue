<template>
  <div class="editaUser">
    <topo></topo>

    <div class="myAccount">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Minha conta</h2>

            <!-- Breadcrumbs 
                    <nav id="breadcrumbs">
                        <ul>
                          <li><a href="#">Home</a></li>
                          <li>Meus agendamentos</li>
                          </ul>
                      </nav>

                </div>
            !-->
          </div>
        </div>
      </div>
    </div>

    <div class="sectionMeio">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-xs-12 sideLayout">
            <sidebarLeft v-bind:ativo="ativo"></sidebarLeft>
          </div>
          <div class="col-md-9 col-xs-12">
            <h3 class="titleCadastro">Informações básicas</h3>
            <div class="row">
              <div class="col-md-6 col-xs-12 form-linha">
                <label for="enviaFotoAlugar">Selecione uma nova foto:</label>
                <input
                  type="file"
                  name="enviaFotoAlugar"
                  ref="myFiles"
                  @change="uploadFoto"
                  placeholder="Escolha uma foto"
                >
              </div>
              <div class="col-md-6">
                <img
                  class="pull-right"
                  style="width: 50%; height: 100%;"
                  v-bind:src="urlApi+globalForm.foto"
                >
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 col-xs-12 form-linha">
                <label for="nomeCompletoAlugar">Nome Completo:</label>
                <i class="sl sl-icon-user"></i>
                <input
                  readonly="“true”"
                  v-model="globalForm.name"
                  type="text"
                  class="input-text"
                  name="nomeCompletoAlugar"
                  id="nomeCompletoAlugar"
                  value
                >
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-xs-12 form-linha">
                <label for="emailAlugar">Email:</label>
                <i class="sl sl-icon-envelope-open"></i>
                <input
                  v-model="globalForm.email"
                  type="text"
                  class="input-text"
                  name="emailAlugar"
                  id="emailAlugar"
                  value
                >
              </div>
              <div
                v-if="globalForm.person_type == 'F' || globalForm.person_type == 'J'"
                class="col-md-4 col-xs-12 form-linha"
              >
                <label for="tipoPessoaAlugar">Tipo de Pessoa:</label>
                <select
                  readonly="readonly"
                  name="tipoPessoaAlugar"
                  v-model="globalForm.person_type"
                  class="padraoSelect"
                >
                  <option selected>Selecione um tipo</option>
                  <option value="F">Física</option>
                  <option value="J">Juridica</option>
                </select>
              </div>

              <div
                v-if="globalForm.person_type == 'F' || in_array_group(5)"
                class="col-md-4 col-xs-12 form-linha"
              >
                <label for="sexoAlugar">Sexo:</label>
                <select
                  readonly="readonly"
                  v-model="globalForm.pf_data.sexo"
                  name="sexoAlugar"
                  class="padraoSelect"
                >
                  <option v-for="sex in sexo" :value="sex.id" v-bind:key="sex.id">{{sex.name}}</option>
                </select>
              </div>
            </div>

            <div v-if="globalForm.person_type == 'F'" class="row">
              <div class="col-md-4 col-xs-12 form-linha">
                <label for="rgAlugar">RG:</label>
                <i class="sl sl-icon-doc"></i>
                <input
                  readonly="true"
                  v-on:keyup="mascaraRg()"
                  v-model="globalForm.documents.rg"
                  type="text"
                  class="input-text"
                  name="rgAlugar"
                  id="rgAlugar"
                  value
                >
              </div>
              <div v-if="globalForm.person_type == 'F'" class="col-md-4 col-xs-12 form-linha">
                <label for="datargAlugar">Data de expedição do RG:</label>
                <i class="sl sl-icon-doc"></i>
                <input
                  readonly="true"
                  v-model="globalForm.documents.dataExpedicaoRg"
                  type="date"
                  class="input-text"
                  name="datargAlugar"
                  id="datargAlugar"
                  value
                >
              </div>
              <div class="col-md-4 col-xs-12 form-linha">
                <label for="cpfAlugar">CPF:</label>
                <i class="sl sl-icon-doc"></i>
                <input
                  readonly="true"
                  v-on:keyup="mascaraCpf()"
                  v-model="globalForm.documents.cpf"
                  type="text"
                  class="input-text"
                  name="cpfAlugar"
                  id="cpfAlugar"
                  value
                >
              </div>
              <div v-if="in_array_group(5)" class="col-md-4 col-xs-12 form-linha">
                <label for="creciCorretor">CRECI:</label>
                <input
                  readonly="true"
                  v-if="in_array_group(5)"
                  v-model="globalForm.documents.creci"
                  type="text"
                  class="input-text"
                  name="creciCorretor"
                  id="creciCorretor"
                  value
                >
              </div>
            </div>

            <div v-else class="row">
              <div class="col-md-4 col-xs-12 form-linha">
                <label for="cnpj">CNPJ:</label>
                <i class="sl sl-icon-doc"></i>
                <input
                  readonly="true"
                  v-on:keyup="mascaraCnpj()"
                  v-model="globalForm.documents.cnpj"
                  type="text"
                  class="input-text"
                  name="cnpj"
                  id="cnpj"
                  value
                >
              </div>
              <div class="col-md-4 col-xs-12 form-linha">
                <label for="inscEstad">Inscrição estadual:</label>
                <i class="sl sl-icon-doc"></i>
                <input
                  readonly="true"
                  v-model="globalForm.documents.inscricaoEstadual"
                  type="text"
                  class="input-text"
                  name="inscEstad"
                  id="inscEstad"
                  value
                >
              </div>
              <div class="col-md-4 col-xs-12 form-linha">
                <label for="inscMun">Inscrição Municipal:</label>
                <i class="sl sl-icon-doc"></i>
                <input
                  readonly="true"
                  v-model="globalForm.documents.inscricaoMunicipal"
                  type="text"
                  class="input-text"
                  name="inscMun"
                  id="inscMun"
                  value
                >
              </div>
            </div>

            <div v-if="globalForm.person_type == 'F' || in_array_group(5)" class="row">
              <div v-if="globalForm.person_type == 'F'" class="col-md-4 col-xs-12 form-linha">
                <label for="cnAlugar">CNH:</label>
                <i class="sl sl-icon-doc"></i>
                <input
                  readonly="true"
                  v-model="globalForm.documents.cnh"
                  type="text"
                  class="input-text"
                  name="cnAlugar"
                  id="cnhAlugar"
                  value
                >
              </div>
              <div class="col-md-4 col-xs-12 form-linha">
                <label for="nascimentoAlugar">Data de Nascimento:</label>
                <i class="sl sl-icon-doc"></i>
                <input
                  readonly="“true”"
                  v-model="globalForm.pf_data.dataNascimento"
                  type="date"
                  class="input-text"
                  name="nascimentoAlugar"
                  id="nascimentoAlugar"
                  value
                >
              </div>
              <div v-if="globalForm.person_type == 'F'" class="col-md-4 col-xs-12 form-linha">
                <label for="nacionaAlugar">Nacionalidade:</label>
                <select
                  readonly="readonly"
                  v-model="globalForm.pf_data.nacionalidadeId"
                  name="nacionaAlugar"
                  class="padraoSelect"
                >
                  <option v-for="nac in nacionalidades" :value="nac.id" v-bind:key="nac.id">{{nac.name}}</option>
                </select>
              </div>
            </div>

            <div v-else class="row">
              <div class="col-md-4 col-xs-12 form-linha">
                <label for="nomeContato">Nome contato:</label>
                <i class="sl sl-icon-doc"></i>
                <input
                  v-model="globalForm.pj_data.nomeContato"
                  type="text"
                  class="input-text"
                  name="nomeContato"
                  id="nomeContato"
                  value
                >
              </div>
              <div class="col-md-4 col-xs-12 form-linha">
                <label for="dataFunda">Data Fundação:</label>
                <i class="sl sl-icon-doc"></i>
                <input
                  v-model="globalForm.pj_data.dataFund"
                  type="date"
                  class="input-text"
                  name="dataFunda"
                  id="dataFunda"
                  value
                >
              </div>
              <div class="col-md-4 col-xs-12 form-linha">
                <label for="ramoAtivi">Ramo Atividade:</label>
                <i class="sl sl-icon-doc"></i>
                <input
                  v-model="globalForm.pj_data.ramo"
                  type="text"
                  class="input-text"
                  name="ramoAtivi"
                  id="ramoAtivi"
                  value
                >
              </div>
            </div>
            <div v-if="globalForm.person_type == 'F'" class="row">
              <div class="col-md-4 col-xs-12 form-linha" v-if="!in_array_group(5)">
                <label for="profissaoAlugar">Profissão:</label>
                <select
                  v-model="globalForm.pf_data.profissaoId"
                  name="profissaoAlugar"
                  class="padraoSelect"
                >
                  <option v-for="prof in profissao" :value="prof.id" v-bind:key="prof.id">{{prof.name}}</option>
                </select>
              </div>
              <div class="col-md-4 col-xs-12 form-linha">
                <label for="estadocivilAlugar">Estado Civil:</label>
                <select
                  v-model="globalForm.pf_data.estadoCivilId"
                  name="estadocivilAlugar"
                  class="padraoSelect"
                >
                  <option v-for="estC in estadoCivil" :value="estC.id" v-bind:key="estC.id">{{estC.name}}</option>
                </select>
              </div>
            </div>
            <div v-if="in_array_group(5)">
              <h3 class="titleCadastro">Horários de agendamento</h3>

              <br>

              <div class="row">
                <div class="col-md-3">
                  <label for>Inicio</label>
                  <select
                    v-model="globalForm.horarios.hora_inicio"
                    type="text"
                    class="selectPadraoAdmin"
                    name="ramoAtivi"
                    value
                  >
                    <option v-for="hour in consomeJSON.horarios()" v-bind:value="hour" v-bind:key="hour.id">{{hour}}</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for>Fim</label>
                  <select
                    v-model="globalForm.horarios.hora_fim"
                    type="text"
                    class="selectPadraoAdmin"
                    name="ramoAtivi"
                    value
                  >
                    <option v-for="hour in consomeJSON.horarios()" v-bind:value="hour" v-bind:key="hour.id">{{hour}}</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for>Almoço inicio</label>
                  <select
                    v-model="globalForm.horarios.almoco_inicio"
                    type="text"
                    class="selectPadraoAdmin"
                    name="ramoAtivi"
                    value
                  >
                    <option v-for="hour in consomeJSON.horarios()" v-bind:value="hour" v-bind:key="hour.id">{{hour}}</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for>Almoço fim</label>
                  <select
                    v-model="globalForm.horarios.almoco_fim"
                    type="text"
                    class="selectPadraoAdmin"
                    name="ramoAtivi"
                    value
                  >
                    >
                    <option v-for="hour in consomeJSON.horarios()" v-bind:value="hour" v-bind:key="hour.id">{{hour}}</option>
                  </select>
                </div>

                <br>
                <br>
                <repeat v-for="hour in dias" class="mt-3 ml-3" v-bind:key="hour.id">
                  <input
                    v-model="globalForm.horarios.diaSemana"
                    type="checkbox"
                    v-bind:id="hour.name"
                    v-bind:value="hour.id"
                  >
                  <label v-bind:for="hour.name" v-bind:value="hour.id">{{hour.name}}</label>
                </repeat>
              </div>
            </div>

            <h3 class="titleCadastro">Informações de endereço</h3>

            <div class="row">
              <div class="col-md-4 col-xs-12 form-linha">
                <label for="cepAlugar">CEP:</label>
                <i class="sl sl-icon-compass"></i>
                <input
                  v-model="globalForm.addresses.cep"
                  type="text"
                  class="input-text"
                  name="cepAlugar"
                  id="cepAlugar"
                  value
                >
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-xs-12 form-linha">
                <label for="ruaAlugar">Rua:</label>
                <i class="sl sl-icon-location"></i>
                <input
                  v-model="globalForm.addresses.logradouro"
                  type="text"
                  class="input-text"
                  name="ruaAlugar"
                  id="ruaAlugar"
                  value
                >
              </div>
              <div class="col-md-2 col-xs-12 form-linha">
                <label for="numAlugar">Nº:</label>
                <i class="sl sl-icon-location"></i>
                <input
                  v-model="globalForm.addresses.numero"
                  type="text"
                  class="input-text"
                  name="numAlugar"
                  id="numAlugar"
                  value
                >
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
                  v-model="globalForm.addresses.bairro"
                  type="text"
                  class="input-text"
                  name="bairroAlugar"
                  id="bairroAlugar"
                  value
                >
              </div>
              <div class="col-md-4 col-xs-12 form-linha">
                <label for="estAlugar">Estado:</label>
                <select
                  v-on:change="trocaCity()"
                  v-model="globalForm.addresses.uf"
                  name="estAlugar"
                  class="padraoSelect"
                >
                  <option v-for="state in estados" :value="state.uf" v-bind:key="state.id">{{state.uf}}</option>
                </select>
              </div>
              <div class="col-md-4 col-xs-12 form-linha">
                <label for="cidaAlugar">Cidade:</label>
                <select
                  v-model="globalForm.addresses.cidade"
                  name="cidaAlugar"
                  class="padraoSelect"
                >
                  <option v-for="city in cidades" :value="city.id" v-bind:key="city.id">{{city.name}}</option>
                </select>
              </div>
            </div>

            <h3 class="titleCadastro">Informações de contato</h3>

            <div class="row">
              <div class="col-md-6 col-xs-12 form-linha">
                <label for="whatsAlugar">Celular/Whatsapp:</label>
                <i class="fa fa-whatsapp"></i>
                <input
                  v-on:keyup="mascaraTELEFONE('whats')"
                  v-model="globalForm.telephones.whats"
                  type="tel" pattern="^\d{4}-\d{3}-\d{4}$" required
                  class="input-text"
                  name="whatsAlugar"
                  id="whatsAlugar"
                  value
                >
              </div>
              <div class="col-md-6 col-xs-12 form-linha">
                <label for="telAlugar">Telefone (opcional):</label>
                <i class="sl sl-icon-phone"></i>
                <input
                  v-on:keyup="mascaraTELEFONE('tel')"
                  v-model="globalForm.telephones.telefone"
                  type="tel"
                  class="input-text"
                  name="telAlugar"
                  id="telAlugar"
                  value
                >
              </div>
            </div>

            <h3 class="titleCadastro">Acesso</h3>
            <label for="alteraSenha">Alterar senha?</label>
            <input type="checkbox" id="alteraSenha" v-model="changePass" value="false">

            <div class="row" v-if="changePass">
              <div class="col-md-6 col-xs-12 form-linha">
                <label for="passAlugar">Senha:</label>
                <i class="sl sl-icon-key"></i>
                <input
                  v-model="globalForm.password"
                  type="text"
                  class="input-text"
                  name="passAlugar"
                  id="passAlugar"
                  value
                >
                <span v-if="erro.password" class="erro">{{erro.password}}</span>
              </div>
              <div class="col-md-6 col-xs-12 form-linha">
                <label for="confirmpassAlugar">Confirma a senha:</label>
                <i class="sl sl-icon-key"></i>
                <input
                  v-model="confirma_senha"
                  type="text"
                  class="input-text"
                  name="confirmpassAlugar"
                  id="confirmpassAlugar"
                  value
                >
              </div>
            </div>
            <p class="pull-right">
              <a
                id="botaoCadastraAlugar"
                v-on:click="enviaForm()"
                class="button botaoPadrao"
              >Atualizar dados</a>
            </p>
            <load v-if="loading"></load>
            <p v-if="message">Atualizado com sucesso!</p>
          </div>
        </div>
      </div>
    </div>
    <rodape></rodape>
  </div>
</template>

<script>
import load from "../globais/Load.vue";
import rodape from "../globais/Footer.vue";
import topo from "../globais/Topo.vue";
import sidebarLeft from "./SidebarLeft.vue";
export default {
  name: "editarUser",
  components: {
    rodape,
    topo,
    sidebarLeft,
    load
  },
  data() {
    return {
      ativo: "editarUser",
      erro: this.validForm.getFormUser_global(),
      globalForm: this.validForm.getFormUser_global(),
      nacionalidades: this.consomeJSON.nacionalidades(),
      sexo: this.consomeJSON.sexo(),
      profissao: this.consomeJSON.profissao(),
      estadoCivil: this.consomeJSON.estadoCivil(),
      estados: this.consomeJSON.cidades(),
      cidades: "",
      loading: false,
      message: false,
      file: "",
      changePass: false,
      confirma_senha: "",
      dias: this.consomeJSON.horarios_imovel()
    };
  },
  watch: {
    "globalForm.documents.cnpj": function() {
      console.log(this.globalForm.person_type);
    }
  },

  methods: {
    in_array_group: function(needle) {
      for (var i in this.globalForm.group_id) {
        if (this.globalForm.group_id[i] == needle) return true;
      }
      return false;
    },
    enviaForm: function() {
      console.log(this.globalForm);
      if (this.changePass) {
        if (this.confirma_senha == this.globalForm.password) {
          this.requisicao_feita = 1;
          this.erro.password = false;
          delete this.globalForm.visited_now;
          this.formValid("updateUser", this.globalForm);
        } else {
          this.erro.password = "As senhas não batem!";
        }
      } else {
        delete this.globalForm.password;
        this.formValid("updateUser", this.globalForm);
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
    },
    mascaraCnpj() {
      this.globalForm.documents.cnpj = this.validForm.mascaraCNPJ(
        this.globalForm.documents.cnpj
      );
    }
  },

  mounted() {
    jQuery("body").removeClass("indexadmin");
    var dados = this.getUserLocalSt();

    /* if(dados.dados.person_type == 'F')
        this.switchDatasUser('acrescenta','juridica');
      else
        this.switchDatasUser('acrescenta','fisica');
    */
    this.globalForm = dados.dados;
    this.trocaCity();

    var main = this;
    document.onkeydown = function(e) {
      if (e.keyCode == 13) {
        main.enviaForm();
      }
    };
  },

  created() {},
  beforeCreate() {}
};
</script>
