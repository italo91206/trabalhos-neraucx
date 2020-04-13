<template>
  <div class="painelvisita">
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
            <load v-if="loading"></load>
            <div class="row">
              <ul class="paginas">
                <li v-for="paginacao in controle_paginas">
                  <span
                    v-on:click="switchPage(paginacao)"
                    v-bind:class="{active: paginacao == $route.params.pagina}"
                  >{{paginacao}}</span>
                </li>
              </ul>
            </div>

            <content-placeholders v-if="loading" :rounded="true">
              <content-placeholders-heading/>
              <content-placeholders-text :lines="3"/>
              <content-placeholders-img/>
              <content-placeholders-text/>
            </content-placeholders>
            <table class="tabelaADMIN" v-else>
              <thead>
                <tr>
                  <th aria-colindex="1" class>Status</th>
                  <th aria-colindex="2" class>Data</th>
                  <th aria-colindex="3" class>Corretor</th>
                  <th aria-colindex="4" class>Visitante</th>
                  <th aria-colindex="4" class>Imóvel</th>
                  <th aria-colindex="5" class>Ações</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <select
                      v-on:change="sugestion()"
                      v-model="filtro.status"
                      class="selectPadraoAdmin"
                    >
                      <option value selected>Selecione</option>
                      <option :value="validForm.visita_concluida().id">Concluida</option>
                      <option :value="validForm.visita_cancelada().id">Cancelada</option>
                      <option :value="validForm.visita_pendente().id">Pendente</option>
                      <option :value="validForm.agendado().id">Agendado</option>
                    </select>
                  </td>
                  <td>
                    <input
                      v-on:keyup="sugestion()"
                      v-model="filtro.scheduled_at"
                      type="text"
                      name="filtro"
                      id="filtro"
                      value
                      class="inputPadraoAdmin"
                    >
                  </td>
                  <td>
                    <input
                      v-on:keyup="sugestion()"
                      v-model="filtro.realtor_ID"
                      type="text"
                      name="filtro"
                      id="filtro"
                      value
                      class="inputPadraoAdmin"
                    >
                  </td>
                  <td>
                    <input
                      v-on:keyup="sugestion()"
                      v-model="filtro.visitor_ID"
                      type="text"
                      name="filtro"
                      id="filtro"
                      value
                      class="inputPadraoAdmin"
                    >
                  </td>
                  <td>
                    <input
                      v-on:keyup="sugestion()"
                      v-model="filtro.property_ID"
                      type="text"
                      name="filtro"
                      id="filtro"
                      value
                      class="inputPadraoAdmin"
                    >
                  </td>
                </tr>
                <tr v-for="visita in results.results">
                  <td>{{validForm.getStatus_agenda(visita.status).label}}</td>
                  <td>{{visita.scheduled_at}}</td>
                  <td>{{visita.corretor}}</td>
                  <td>{{visita.visitante}}</td>
                  <td>
                    <a
                      target="_blank"
                      :href="urlMain+'imovel/'+visita.rotulo_imovel"
                      class="centraliza"
                    >
                      <p class="redirect" style="font-size: 15px;">{{visita.rotulo_imovel}}</p>
                    </a>
                  </td>
                  <td>
                    <div class="btn-group">
                      <a v-on:click="editaAgenda(visita._id.$oid)" class="btn btn-xs btn-info">
                        <i class="fa fa-edit"></i> Editar
                      </a>

                      <a v-on:click="excluiAgenda(visita._id.$oid)" class="btn btn-xs btn-danger">
                        <i class="fa fa-times"></i> Excluir
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="!controle_paginas">
              <p class="text-center">Não há nenhum agendamento.</p>
            </div>
          </div>
        </b-row>
      </b-row>
    </div>
  </div>
</template>
<script>
import topo from "../globais/Topoadmin.vue";
import sidebar from "../globais/Sidebarleftadmin.vue";
import load from "../../globais/Load.vue";

export default {
  name: "Visitas",
  components: {
    topo,
    sidebar,
    load
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js PWA",
      controlMenu: 0,
      agenda_horarios: "",
      fields: ["Status", "Data", "Corretor", "Visitante"],
      items: [],
      loading: false,
      paginacao_atual: [],
      aux_atual: [],
      pag_atual: 1,
      limite_pag: 7,
      results: [],
      controle_paginas: false,
      filtro: {
        status: "",
        visitor_ID: "",
        realtor_ID: "",
        scheduled_at: "",
        property_ID: ""
      },
      filtrando: false
    };
  },

  mounted() {
    var aux = {};
    aux.pagina = this.$route.params.pagina;
    aux.limite = this.limite_pag;
    this.agenda("alimenta_lista", aux, []);
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
    editaAgenda(idA) {
      this.$router.push({ name: "editaAgendaAdmin", params: { id: idA } });
      //  alert('Index: ' + index + '\n\nItem: ' + JSON.stringify(item));
    },
    excluiAgenda(idA) {
      if (confirm("Tem certeza que deseja excluir?")) {
        this.agenda_horarios = [];
        this.paginacao_atual = [];
        this.agenda("excluiAgenda", idA);
      }
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
    resolvePaginacao() {
      var aux = [];
      var count = 1;
      var controle = this.results.qtd_pag;
      while (controle > 0) {
        aux.push(count);
        count++;
        controle--;
      }
      this.controle_paginas = aux;
      console.log(this.controle_paginas);
    },
    switchPage(number) {
      var aux = {};
      aux.pagina = number;
      aux.limite = this.limite_pag;
      var rua = this.pesquisa("getLocal");
      if (!this.filtrando) this.agenda("alimenta_lista", aux, []);
      else this.filtroADMIN("Agenda", this.filtro, aux);

      this.$router.push({ name: "Visitas", params: { pagina: number } });
    },
    sugestion() {
      if (
        this.filtro.status >= 1 ||
        this.filtro.scheduled_at.length >= 3 ||
        this.filtro.visitor_ID.length >= 3 ||
        this.filtro.realtor_ID.length >= 3 ||
        this.filtro.property_ID.length >= 3
      ) {
        this.filtrando = true;
        var aux = {};
        aux.pagina = 1;
        aux.limite = this.limite_pag;
        this.filtroADMIN("Agenda", this.filtro, aux);
        this.$router.push({ name: "Visitas", params: { pagina: 1 } });
      } else if (
        this.filtro.status == 0 &&
        this.filtro.scheduled_at.length == 0 &&
        this.filtro.visitor_ID.length == 0 &&
        this.filtro.realtor_ID.length == 0 &&
        this.filtro.property_ID.length == 0
      ) {
        this.filtrando = false;
        var aux = {};
        aux.pagina = 1;
        aux.limite = this.limite_pag;
        this.agenda("alimenta_lista", aux, []);
        this.$router.push({ name: "Visitas", params: { pagina: 1 } });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
