<template>
  <div class="editaAgendaAdmin">
    <topo></topo>
    <div class="w-100">
      <b-row>
        <div class="col-md-2 ajusteColuna">
          <sidebar></sidebar>
        </div>
        <div v-on:click="showMenu()" class="exibirPainelMob">ABRIR MENU</div>
        <b-row>
          <div class="content-painel content-visitas">
            <h3 class="text-center titlesAdmin">Visitas</h3>
            <div class="container text-center">
              <content-placeholders v-if="loading">
                <content-placeholders-text :lines="7"/>
                <content-placeholders-text/>
              </content-placeholders>
              <div class="row" v-else>
                <div class="w-25 col-xs-12 form-linha centraliza">
                  <label for="status" class="pull-left">Status:</label>
                  <select
                    name="tipoPessoaAlugar"
                    id="status"
                    v-model="agenda_horarios.status"
                    class="selectPadraoAdmin"
                  >
                    <option
                      v-bind:value="validForm.getStatus_agenda('1').id"
                    >{{validForm.getStatus_agenda('1').label}}</option>
                    <option
                      v-bind:value="validForm.getStatus_agenda('2').id"
                    >{{validForm.getStatus_agenda('2').label}}</option>
                    <option
                      v-bind:value="validForm.getStatus_agenda('3').id"
                    >{{validForm.getStatus_agenda('3').label}}</option>
                    <option
                      v-bind:value="validForm.getStatus_agenda('4').id"
                    >{{validForm.getStatus_agenda('4').label}}</option>
                    <option
                      v-bind:value="validForm.getStatus_agenda('5').id"
                    >{{validForm.getStatus_agenda('5').label}}</option>
                  </select>
                </div>
              </div>
              <br>
              <div class="row">
                <div class="w-25 col-xs-12 form-linha centraliza">
                  <label for="nomeCompletoAlugar" class="pull-left">Agendado para:</label>

                  <input
                    type="text"
                    class="inputPadraoAdmin"
                    name="nomeCompletoAlugar"
                    id="nomeCompletoAlugar"
                    v-bind:value="agenda_horarios.scheduled_at"
                    disabled="true"
                  >
                </div>
              </div>
              <div class="row">
                <div class="w-25 col-xs-12 form-linha centraliza">
                  <label for="Corretor" class="pull-left">Corretor:</label>
                  <select
                    name="Corretor"
                    id="Corretor"
                    v-model="agenda_horarios.realtor_ID"
                    class="selectPadraoAdmin"
                  >
                    <option
                      v-for="corretor in recebeUsers"
                      v-bind:value="corretor._id.$oid"
                    >{{corretor.name}}</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="w-25 col-xs-12 form-linha centraliza">
                  <label for="nomeCompletoAlugar" class="pull-left">Visitante:</label>
                  <input
                    type="text"
                    class="inputPadraoAdmin"
                    name="nomeCompletoAlugar"
                    id="nomeCompletoAlugar"
                    v-bind:value="agenda_horarios.visitante"
                    disabled="true"
                  >
                </div>
              </div>
              <div class="row">
                <div class="w-25 col-xs-12 form-linha centraliza">
                  <label for="nomeCompletoAlugar" class="pull-left">Proprietário:</label>
                  <input
                    type="text"
                    class="inputPadraoAdmin"
                    name="nomeCompletoAlugar"
                    id="nomeCompletoAlugar"
                    v-bind:value="agenda_horarios.proprietario"
                    disabled="true"
                  >
                </div>
              </div>
              <br>
              <br>
              <div class="row" style="text-align: center">
                <a
                  target="_blank"
                  :href="urlMain+'imovel/'+agenda_horarios.rotulo_imovel"
                  class="centraliza"
                >
                  <p class="imovelProperty redirect">Imovel: {{agenda_horarios.rotulo_imovel}}</p>
                </a>
              </div>
              <p class="pull-right">
                <a
                  id="botaoLoginAdmin"
                  v-on:click="enviaForm()"
                  class="button botaoPadraoAdmin"
                >Atualizar</a>
              </p>
              <load v-if="loading"></load>
              <p v-if="message">Atualizado com sucesso!</p>
            </div>
          </div>
        </b-row>
      </b-row>
    </div>
  </div>
</template>
<script>
import load from "../../globais/Load.vue";
import topo from "../globais/Topoadmin.vue";
import sidebar from "../globais/Sidebarleftadmin.vue";

export default {
  name: "editaAgendaAdmin",
  components: {
    topo,
    sidebar,
    load
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js PWA",
      controlMenu: 0,
      agenda_horarios: {},
      recebeUsers: "",
      loading: false,
      message: false
    };
  },

  mounted() {
    this.admin("getTipoUser", "5");
    this.agenda("getAgendaAdmin", this.$route.params.id);
    var main = this;
    document.onkeydown = function(e) {
      if (e.keyCode == 13) {
        main.enviaForm();
      }
    };

    // alert(this.$route.params.id);
  },
  watch: {
    agenda_horarios: function() {
      var adapta = [];

      for (var key in this.agenda_horarios) {
        adapta[key] = {};
        adapta[key].Status = this.validForm.getStatus_agenda(
          this.agenda_horarios[key].status
        ).label;
        adapta[key].Data = this.agenda_horarios[key].scheduled_at;
        adapta[key].Corretor = this.agenda_horarios[key].corretor;
        adapta[key].Visitante = this.agenda_horarios[key].visitante;
        //adapta[key]
        adapta[key].id = this.agenda_horarios[key]._id.$oid;
      }
      this.items = adapta;
    }
  },
  methods: {
    editaAgenda(item, index) {
      this.$router.push({ name: "EditaAgendaAdmin", params: { id: item.id } });
      //  alert('Index: ' + index + '\n\nItem: ' + JSON.stringify(item));
    },
    showMenu: function() {
      if (this.controlMenu == 0) {
        jQuery(".ajusteColuna").show("slow");
        jQuery(".exibirPainelMob").html("FECHAR MENU");
        this.controlMenu = 1;
      } else {
        jQuery(".ajusteColuna").hide("slow");
        jQuery(".exibirPainelMob").html("ABRIR MENU");
        this.controlMenu = 0;
      }
    },
    enviaForm: function() {
      console.log(this.agenda_horarios);

      this.agenda("updateAgendaAdmin", this.agenda_horarios);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
