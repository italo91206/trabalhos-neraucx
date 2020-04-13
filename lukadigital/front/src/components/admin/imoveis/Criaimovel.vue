<template>
  <div class="criaImovelAdmin">
    <topo></topo>
    <div class="w-100">
      <b-row>
        <div class="col-md-2 ajusteColuna">
          <sidebar></sidebar>
        </div>
        <div v-on:click="showMenu()" class="exibirPainelMob">ABRIR MENU</div>
        <b-row>
          <div class="content-painel content-visitas">
            <h3 class="text-center titlesAdmin">Cadastro de novo imóvel</h3>
            <b-container class="ajustContainer">
              <div class="container">
                <h3 class="titleCadastro col-12 mb-3">Informações básicas</h3>
                <div class="row">
                  <div class="col-md-6">
                    <label for="proprietarios">Proprietários:</label>
                    <Multiselect
                      v-model="op"
                      :options="options"
                      :multiple="true"
                      :close-on-select="false"
                      :clear-on-select="false"
                      :preserve-search="true"
                      placeholder="Pick some"
                      label="name"
                      track-by="name"
                      :preselect-first="true"
                    ></Multiselect>
                  </div>
                  <div class="col-md-4">
                    <label for="status">Status</label>
                    <select v-model="globalForm.status" class="selectPadraoAdmin">
                      <option value="1">ATIVO</option>
                      <option value="2">INATIVO</option>
                      <option value="3">PENDENTE</option>
                    </select>
                    <br>
                  </div>
                </div>
                <br>
                <div class="col-md-12">
                  <div class="form-group">
                    <hr>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-6 col-xs-12 form-linha">
                    <label for="tipo">Categoria:</label>
                    <select
                      v-model="globalForm.type"
                      v-bind:class="{'erroInput': erro.type}"
                      name="tipo"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for="tipo in tiposImoveis"
                        v-bind:value="tipo.id"
                        selected
                      >{{tipo.nome}}</option>
                    </select>
                    <span v-if="erro.type" class="erro">{{erro.type}}</span>
                  </div>
                  <div class="col-md-6 col-xs-12 form-linha">
                    <label for="operacao">Operação:</label>
                    <select
                      v-model="globalForm.operacao"
                      v-bind:class="{'erroInput': erro.operacao}"
                      name="operacao"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for="operacao in operacoes"
                        v-bind:value="operacao.id"
                        selected
                      >{{operacao.nome}}</option>
                    </select>
                    <span v-if="erro.operacao" class="erro">{{erro.operacao}}</span>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-12 col-xs-12 form-linha">
                    <label for="title">Título:</label>
                    <input
                      v-model="globalForm.title"
                      v-bind:class="{'erroInput': erro.title}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="titulo"
                      id="titulo"
                      value
                    >
                    <span v-if="erro.title" class="erro">{{erro.title}}</span>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-6 col-xs-12 form-linha">
                    <label for="loteamento">Loteamento:</label>
                    <input
                      v-model="globalForm.loteamento"
                      v-bind:class="{'erroInput': erro.loteamento}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="loteamento"
                      id="loteamento"
                      value
                    >
                    <span v-if="erro.loteamento" class="erro">{{erro.loteamento}}</span>
                  </div>
                  <div class="col-md-6 col-xs-12 form-linha">
                    <label for="proximidade">Proximidade:</label>
                    <input
                      v-model="globalForm.proximidade"
                      v-bind:class="{'erroInput': erro.proximidade}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="proximidade"
                      id="proximidade"
                      value
                    >
                    <span v-if="erro.proximidade" class="erro">{{erro.proximidade}}</span>
                  </div>
                </div>
                <br>
                <div class="col-md-12">
                  <div class="form-group">
                    <hr>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="quartos">Quartos:</label>
                    <input
                      type="number"
                      v-model="globalForm.rooms.quartos"
                      v-bind:class="{'erroInput': erro.rooms.quartos}"
                      class="inputPadraoAdmin"
                      name="quartos"
                      id="quartos"
                      value
                      min="0"
                      max="100"
                    >
                    <span v-if="erro.rooms.quartos" class="erro">{{erro.rooms.quartos}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="suites">Suites:</label>
                    <input
                      type="number"
                      v-model="globalForm.rooms.suites"
                      v-bind:class="{'erroInput': erro.rooms.suites}"
                      class="inputPadraoAdmin"
                      name="suites"
                      id="suites"
                      value
                      min="0"
                      max="100"
                    >
                    <span v-if="erro.rooms.suites" class="erro">{{erro.rooms.suites}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="salasEstar">Salas (de estar):</label>
                    <input
                      type="number"
                      v-model="globalForm.rooms.salasEstar"
                      v-bind:class="{'erroInput': erro.rooms.salasEstar}"
                      class="inputPadraoAdmin"
                      name="salasEstar"
                      id="salasEstar"
                      value
                      min="0"
                      max="100"
                    >
                    <span v-if="erro.rooms.salasEstar" class="erro">{{erro.rooms.salasEstar}}</span>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="banheiros">Banheiros:</label>
                    <input
                      type="number"
                      v-model="globalForm.rooms.banheiros"
                      v-bind:class="{'erroInput': erro.rooms.banheiros}"
                      class="inputPadraoAdmin"
                      name="banheiros"
                      id="banheiros"
                      value
                      min="0"
                      max="100"
                    >
                    <span v-if="erro.rooms.banheiros" class="erro">{{erro.rooms.banheiros}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="lavabos">Lavabos:</label>
                    <input
                      type="number"
                      v-model="globalForm.rooms.lavabos"
                      v-bind:class="{'erroInput': erro.rooms.lavabos}"
                      class="inputPadraoAdmin"
                      name="lavabos"
                      id="lavabos"
                      value
                      min="0"
                      max="100"
                    >
                    <span v-if="erro.rooms.lavabos" class="erro">{{erro.rooms.lavabos}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="garagem">Garagem:</label>
                    <input
                      type="number"
                      v-model="globalForm.rooms.garagem"
                      v-bind:class="{'erroInput': erro.rooms.garagem}"
                      class="inputPadraoAdmin"
                      name="garagem"
                      id="garagem"
                      value
                      min="0"
                      max="100"
                    >
                    <span v-if="erro.rooms.garagem" class="erro">{{erro.rooms.garagem}}</span>
                  </div>
                </div>
                <br>
                <div class="col-md-12">
                  <div class="form-group">
                    <hr>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="areaConstruida">Área útil (construída)</label>
                    <input
                      type="text"
                      v-on:keyup="mascaraMoeda('areaConstruida')"
                      v-model="globalForm.basic_data.areaConstruida"
                      v-bind:class="{'erroInput': erro.basic_data.areaConstruida}"
                      class="inputPadraoAdmin"
                      name="areaConstruida"
                      id="areaConstruida"
                      value
                    >
                    <span
                      v-if="erro.basic_data.areaConstruida"
                      class="erro"
                    >{{erro.basic_data.areaConstruida}}</span>
                  </div>
                  <div class="col-md-2 col-xs-12 form-linha">
                    <label for="tipoConstruida">Tipo:</label>
                    <select
                      v-model="globalForm.basic_data.tipoConstruida"
                      v-bind:class="{'erroInput': erro.basic_data.tipoConstruida}"
                      name="tipoConstruida"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for="tipoConstruida in tiposAreas"
                        v-bind:value="tipoConstruida.id"
                        selected
                      >{{tipoConstruida.nome}}</option>
                    </select>
                    <span
                      v-if="erro.basic_data.tipoConstruida"
                      class="erro"
                    >{{erro.basic_data.tipoConstruida}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="areaTerreno">Área Total (terreno)</label>
                    <input
                      type="text"
                      v-on:keyup="mascaraMoeda('areaTerreno')"
                      v-model="globalForm.basic_data.areaterreno"
                      v-bind:class="{'erroInput': erro.basic_data.areaterreno}"
                      class="inputPadraoAdmin"
                      name="areaTerreno"
                      id="areaTerreno"
                      value
                    >
                    <span
                      v-if="erro.basic_data.areaterreno"
                      class="erro"
                    >{{erro.basic_data.areaterreno}}</span>
                  </div>
                  <div class="col-md-2 col-xs-12 form-linha">
                    <label for="tipoTerreno">Tipo:</label>
                    <select
                      v-model="globalForm.basic_data.tipoTerreno"
                      v-bind:class="{'erroInput': erro.basic_data.tipoTerreno}"
                      name="tipoTerreno"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for="tipoTerreno in tiposAreas"
                        v-bind:value="tipoTerreno.id"
                        selected
                      >{{tipoTerreno.nome}}</option>
                    </select>
                    <span
                      v-if="erro.basic_data.tipoTerreno"
                      class="erro"
                    >{{erro.basic_data.tipoTerreno}}</span>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="areaComum">Área Comum</label>
                    <input
                      type="text"
                      v-on:keyup="mascaraMoeda('areaComum')"
                      v-model="globalForm.basic_data.areaComum"
                      v-bind:class="{'erroInput': erro.basic_data.areaComum}"
                      class="inputPadraoAdmin"
                      name="areaComum"
                      id="areaComum"
                      value
                    >
                    <span
                      v-if="erro.basic_data.areaComum"
                      class="erro"
                    >{{erro.basic_data.areaComum}}</span>
                  </div>
                  <div class="col-md-2 col-xs-12 form-linha">
                    <label for="tipoComum">Tipo:</label>
                    <select
                      v-model="globalForm.basic_data.tipoComum"
                      v-bind:class="{'erroInput': erro.basic_data.tipoComum}"
                      name="tipoComum"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for="tipoComum in tiposAreas"
                        v-bind:value="tipoComum.id"
                        selected
                      >{{tipoComum.nome}}</option>
                    </select>
                    <span
                      v-if="erro.basic_data.tipoComum"
                      class="erro"
                    >{{erro.basic_data.tipoComum}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="areaPrivativa">Área Privativa:</label>
                    <input
                      type="text"
                      v-on:keyup="mascaraMoeda('areaPrivativa')"
                      v-model="globalForm.basic_data.areaPrivativa"
                      v-bind:class="{'erroInput': erro.basic_data.areaPrivativa}"
                      class="inputPadraoAdmin"
                      name="areaPrivativa"
                      id="areaPrivativa"
                      value
                    >
                    <span
                      v-if="erro.basic_data.areaPrivativa"
                      class="erro"
                    >{{erro.basic_data.areaPrivativa}}</span>
                  </div>
                  <div class="col-md-2 col-xs-12 form-linha">
                    <label for="tipoPrivativa">Tipo:</label>
                    <select
                      v-model="globalForm.basic_data.tipoPrivativa"
                      v-bind:class="{'erroInput': erro.basic_data.tipoPrivativa}"
                      name="tipoPrivativa"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for="tipoPrivativa in tiposAreas"
                        v-bind:value="tipoPrivativa.id"
                        selected
                      >{{tipoPrivativa.nome}}</option>
                    </select>
                    <span
                      v-if="erro.basic_data.tipoPrivativa"
                      class="erro"
                    >{{erro.basic_data.tipoPrivativa}}</span>
                  </div>
                </div>
                <br>
                <div class="col-md-12">
                  <div class="form-group">
                    <hr>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-4 form-linha">
                    <label for="valorLocacao">Valor de locação:</label>
                    <input
                      v-on:keyup="mascaraMoeda('valorLocacao')"
                      v-model="globalForm.value"
                      v-bind:class="{'erroInput': erro.value}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="valorLocacao"
                      id="valorLocacao"
                      value
                    >
                    <span>{{erro.value}}</span>
                  </div>
                  <div class="col-md-4 form-linha">
                    <label for="valorVenda">Valor de venda:</label>
                    <input
                      v-on:keyup="mascaraMoeda('valorVenda')"
                      v-model="globalForm.value_data.venda"
                      v-bind:class="{'erroInput': erro.value_data.venda}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="valorVenda"
                      id="valorVenda"
                      value
                    >
                    <span>{{erro.value_data.venda}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="condominio">Condomínio:</label>
                    <input
                      v-on:keyup="mascaraMoeda('condominio')"
                      v-model="globalForm.value_data.condominio"
                      v-bind:class="{'erroInput': erro.value_data.condominio}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="condominio"
                      id="condominio"
                      value
                    >
                    <span>{{erro.value_data.condominio}}</span>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-6 col-xs-12 form-linha">
                    <label for="tipoValor">Valor (Tipo):</label>
                    <select
                      v-model="globalForm.value_data.tipo"
                      v-bind:class="{'erroInput': erro.value_data.tipo}"
                      name="iptuParcelado"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for="tipoValor in tipoValorImovel"
                        v-bind:value="tipoValor.id"
                        selected
                      >{{tipoValor.nome}}</option>
                    </select>
                    <span v-if="erro.value_data.tipo" class="erro">{{erro.value_data.tipo}}</span>
                  </div>
                  <div class="col-md-6 col-xs-12 form-linha">
                    <label for="tipoLocacao">Tipo de locação</label>
                    <select
                      v-model="globalForm.value_data.tipoLocacao"
                      v-bind:class="{'erroInput': erro.value_data.tipoLocacao}"
                      name="tipoLocacao"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for="tipoLocacao in tipoTempo"
                        v-bind:value="tipoLocacao.id"
                        selected
                      >{{tipoLocacao.nome}}</option>
                    </select>
                    <span
                      v-if="erro.value_data.tipoLocacao"
                      class="erro"
                    >{{erro.value_data.tipoLocacao}}</span>
                  </div>
                </div>
                <br>
                <div class="col-md-12">
                  <div class="form-group">
                    <hr>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="iptuMes">IPTU (mês)</label>
                    <input
                      v-on:keyup="mascaraMoeda('iptuMes')"
                      v-model="globalForm.value_data.iptu"
                      v-bind:class="{'erroInput': erro.value_data.iptu}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="iptuMes"
                      id="iptuMes"
                      value
                    >
                    <span>{{erro.value_data.iptu}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="iptuParcelado">IPTU (Parc.)</label>
                    <select
                      v-model="globalForm.value_data.iptuParcelado"
                      v-bind:class="{'erroInput': erro.value_data.iptuParcelado}"
                      name="iptuParcelado"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for="iptuParcelado in meses"
                        v-bind:value="iptuParcelado.id"
                        selected
                      >{{iptuParcelado.nome}}</option>
                    </select>
                    <span
                      v-if="erro.value_data.iptuParcelado"
                      class="erro"
                    >{{erro.value_data.iptuParcelado}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="iptuAVista">IPTU (à vista)</label>
                    <input
                      v-on:keyup="mascaraMoeda('iptuAVista')"
                      v-model="globalForm.value_data.iptuAVista"
                      v-bind:class="{'erroInput': erro.value_data.iptuAVista}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="iptuAVista"
                      id="iptuAVista"
                      value
                    >
                    <span>{{erro.value_data.iptuAVista}}</span>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="iptuGaragemMes">IPTU Garagem (mês)</label>
                    <input
                      v-on:keyup="mascaraMoeda('iptuGaragemMes')"
                      v-model="globalForm.value_data.iptuGaragemMes"
                      v-bind:class="{'erroInput': erro.value_data.iptuGaragemMes}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="iptuGaragemMes"
                      id="iptuGaragemMes"
                      value
                    >
                    <span>{{erro.value_data.iptuGaragemMes}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="iptuGaragemParcelado">IPTU Garagem (Parc.)</label>
                    <select
                      v-model="globalForm.value_data.iptuGaragemParcelado"
                      v-bind:class="{'erroInput': erro.value_data.iptuGaragemParcelado}"
                      name="iptuGaragemParcelado"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for="iptuGaragemParcelado in meses"
                        v-bind:value="iptuGaragemParcelado.id"
                        selected
                      >{{iptuGaragemParcelado.nome}}</option>
                    </select>
                    <span
                      v-if="erro.value_data.iptuGaragemParcelado"
                      class="erro"
                    >{{erro.value_data.iptuGaragemParcelado}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="iptuGaragemAVista">IPTU Garagem (à vista)</label>
                    <input
                      v-on:keyup="mascaraMoeda('iptuGaragemAVista')"
                      v-model="globalForm.value_data.iptuGaragemAVista"
                      v-bind:class="{'erroInput': erro.value_data.iptuGaragemAVista}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="iptuGaragemAVista"
                      id="iptuGaragemAVista"
                      value
                    >
                    <span>{{erro.value_data.iptuGaragemAVista}}</span>
                  </div>
                </div>
                <br>
                <div class="col-md-12">
                  <div class="form-group">
                    <hr>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="seguroIncendioMes">Seguro Incêndio (mês)</label>
                    <input
                      v-on:keyup="mascaraMoeda('seguroIncendioMes')"
                      v-model="globalForm.value_data.seguroIncendioMes"
                      v-bind:class="{'erroInput': erro.value_data.seguroIncendioMes}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="seguroIncendioMes"
                      id="seguroIncendioMes"
                      value
                    >
                    <span>{{erro.value_data.seguroIncendioMes}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="seguroIncendioParcelado">Seguro Incêndio (Parc.)</label>
                    <select
                      v-model="globalForm.value_data.seguroIncendioParcelas"
                      v-bind:class="{'erroInput': erro.value_data.seguroIncendioParcelas}"
                      name="seguroIncendioParcelado"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for="seguroIncendioParcelado in meses"
                        v-bind:value="seguroIncendioParcelado.id"
                        selected
                      >{{seguroIncendioParcelado.nome}}</option>
                    </select>
                    <span
                      v-if="erro.value_data.seguroIncendioParcelas"
                      class="erro"
                    >{{erro.value_data.seguroIncendioParcelas}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="seguroIncendioAvista">Seguro Incêndio (à vista)</label>
                    <input
                      v-on:keyup="mascaraMoeda('seguroIncendioAvista')"
                      v-model="globalForm.value_data.seguroIncendioAVista"
                      v-bind:class="{'erroInput': erro.value_data.seguroIncendioAVista}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="seguroIncendioAvista"
                      id="seguroIncendioAvista"
                      value
                    >
                    <span>{{erro.value_data.seguroIncendioAVista}}</span>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-12">
                    <label for="seguroIncendioOBS">Observação:</label>
                    <b-form-textarea
                      id="seguroIncendioOBS"
                      v-model="globalForm.value_data.seguroIncendioObs"
                      placeholder="Observação sobre seguro incêndio."
                      :rows="3"
                      :max-rows="6"
                    ></b-form-textarea>
                  </div>
                </div>
                <br>
                <div class="col-md-12">
                  <div class="form-group">
                    <hr>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="estado">Estado:</label>
                    <select
                      v-model="globalForm.basic_data.estado"
                      v-bind:class="{'erroInput': erro.basic_data.estado}"
                      name="estado"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for="estado in estadoUso"
                        v-bind:value="estado.id"
                        selected
                      >{{estado.nome}}</option>
                    </select>
                    <span v-if="erro.basic_data.estado" class="erro">{{erro.basic_data.estado}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="destaque">Destaque:</label>
                    <select
                      v-model="globalForm.basic_data.destaque"
                      v-bind:class="{'erroInput': erro.basic_data.destaque}"
                      name="destaque"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for="destaque in simOuNao"
                        v-bind:value="destaque.id"
                        selected
                      >{{destaque.nome}}</option>
                    </select>
                    <span v-if="erro.basic_data.destaque" class="erro">{{erro.basic_data.destaque}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="local">Mostrar Local:</label>
                    <select
                      v-model="globalForm.basic_data.local"
                      v-bind:class="{'erroInput': erro.basic_data.local}"
                      name="local"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for="local in simOuNao"
                        v-bind:value="local.id"
                        selected
                      >{{local.nome}}</option>
                    </select>
                    <span v-if="erro.basic_data.local" class="erro">{{erro.basic_data.local}}</span>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="parceria">Abre parceria:</label>
                    <select
                      v-model="globalForm.basic_data.parceria"
                      v-bind:class="{'erroInput': erro.basic_data.parceria}"
                      name="parceria"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for="parceria in simOuNao"
                        v-bind:value="parceria.id"
                        selected
                      >{{parceria.nome}}</option>
                    </select>
                    <span v-if="erro.basic_data.parceria" class="erro">{{erro.basic_data.parceria}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="corretor">% Corretor:</label>
                    <input
                      v-on:keyup="mascaraMoeda('corretor')"
                      v-model="globalForm.basic_data.corretor"
                      v-bind:class="{'erroInput': erro.basic_data.corretor}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="corretor"
                      id="corretor"
                      value
                    >
                    <span>{{erro.basic_data.corretor}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="indicador">% Indicador:</label>
                    <input
                      v-on:keyup="mascaraMoeda('indicador')"
                      v-model="globalForm.basic_data.indicador"
                      v-bind:class="{'erroInput': erro.basic_data.indicador}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="indicador"
                      id="indicador"
                      value
                    >
                    <span>{{erro.basic_data.indicador}}</span>
                  </div>
                </div>
                <br>
                <div class="col-md-12">
                  <div class="form-group">
                    <hr>
                  </div>
                </div>
                <br>
                <h3 class="titlesAdmin col-12 mb-3">Informações internas:</h3>
                <div class="row">
                  <div class="col-md-6">
                    <label for="captadores">Captadores:</label>
                    <Multiselect
                      v-model="opCaptadores"
                      :options="optionsCaptadores"
                      :multiple="true"
                      :close-on-select="false"
                      :clear-on-select="false"
                      :preserve-search="true"
                      placeholder="Pick some"
                      label="name"
                      track-by="name"
                      :preselect-first="true"
                    ></Multiselect>
                  </div>
                  <div class="col-md-6 col-xs-12 form-linha">
                    <label for="disponibilidade">Disponibilidade:</label>
                    <select
                      v-model="globalForm.documents.disponibilidade"
                      v-bind:class="{'erroInput': erro.documents.disponibilidade}"
                      name="disponibilidade"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for="disponibilidade in disponivel"
                        v-bind:value="disponibilidade.id"
                        selected
                      >{{disponibilidade.nome}}</option>
                    </select>
                    <span
                      v-if="erro.documents.disponiblidade"
                      class="erro"
                    >{{erro.documents.disponiblidade}}</span>
                  </div>
                  <div class="col-md-6 col-xs-12 form-linha">
                    <label for="localChave">Local chave:</label>
                    <input
                      v-model="globalForm.documents.localChave"
                      v-bind:class="{'erroInput': erro.documents.localChave}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="localChave"
                      id="localChave"
                      value
                    >
                    <span>{{erro.documents.localChave}}</span>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-2 col-xs-12 form-linha">
                    <label for="exclusividade">Exclusividade:</label>
                    <select
                      v-model="globalForm.documents.exclusividade"
                      v-bind:class="{'erroInput': erro.documents.exclusividade}"
                      name="exclusividade"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for=" exclusividade in simOuNao"
                        v-bind:value="exclusividade.id"
                        selected
                      >{{exclusividade.nome}}</option>
                    </select>
                    <span
                      v-if="erro.documents.exclusividade"
                      class="erro"
                    >{{erro.documents.exclusividade}}</span>
                  </div>
                  <div class="col-md-2 col-xs-12 form-linha">
                    <label for="autorizacao">Autorização:</label>
                    <select
                      v-model="globalForm.documents.autorizacao"
                      v-bind:class="{'erroInput': erro.documents.autorizacao}"
                      name="autorizacao"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for=" autorizacao in simOuNao"
                        v-bind:value="autorizacao.id"
                        selected
                      >{{autorizacao.nome}}</option>
                    </select>
                    <span
                      v-if="erro.documents.autorizacao"
                      class="erro"
                    >{{erro.documents.autorizacao}}</span>
                  </div>
                  <div class="col-md-2 col-xs-12 form-linha">
                    <label for="escriturada">Escriturada:</label>
                    <select
                      v-model="globalForm.documents.escriturada"
                      v-bind:class="{'erroInput': erro.documents.escriturada}"
                      name="escriturada"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for=" escriturada in simOuNao"
                        v-bind:value="escriturada.id"
                        selected
                      >{{escriturada.nome}}</option>
                    </select>
                    <span
                      v-if="erro.documents.escriturada"
                      class="erro"
                    >{{erro.documents.escriturada}}</span>
                  </div>
                  <div class="col-md-2 col-xs-12 form-linha">
                    <label for="financiamento">Financiamento:</label>
                    <select
                      v-model="globalForm.documents.financiamento"
                      v-bind:class="{'erroInput': erro.documents.financiamento}"
                      name="financiamento"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for="financiamento in simOuNao"
                        v-bind:value="financiamento.id"
                        selected
                      >{{financiamento.nome}}</option>
                    </select>
                    <span
                      v-if="erro.documents.financiamento"
                      class="erro"
                    >{{erro.documents.financiamento}}</span>
                  </div>
                  <div class="col-md-2 col-xs-12 form-linha">
                    <label for="placa">Placa:</label>
                    <select
                      v-model="globalForm.documents.placa"
                      v-bind:class="{'erroInput': erro.documents.placa}"
                      name="placa"
                      class="selectPadraoAdmin"
                    >
                      <option
                        v-for="placa in simOuNao"
                        v-bind:value="placa.id"
                        selected
                      >{{placa.nome}}</option>
                    </select>
                    <span v-if="erro.documents.placa" class="erro">{{erro.documents.placa}}</span>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="matricula">Matrícula:</label>
                    <input
                      v-model="globalForm.documents.matricula"
                      v-bind:class="{'erroInput': erro.documents.matricula}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="matricula"
                      id="matricula"
                      value
                    >
                    <span>{{erro.documents.matricula}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="valorOculto">Valor Oculto:</label>
                    <input
                      v-on:keyup="mascaraMoeda('valorOculto')"
                      v-model="globalForm.documents.valorOculto"
                      v-bind:class="{'erroInput': erro.documents.valorOculto}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="valorOculto"
                      id="valorOculto"
                      value
                    >
                    <span>{{erro.documents.valorOculto}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="valorMinimo">Valor Mínimo:</label>
                    <input
                      v-on:keyup="mascaraMoeda('valorMinimo')"
                      v-model="globalForm.documents.valorMinimo"
                      v-bind:class="{'erroInput': erro.documents.valorMinimo}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="valorMinimo"
                      id="valorMinimo"
                      value
                    >
                    <span>{{erro.documents.valorMinimo}}</span>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-12">
                    <label for="documentsObs">Observação:</label>
                    <b-form-textarea
                      id="documentsObs"
                      v-model="globalForm.documents.obs"
                      placeholder="Observação utéis (internas)."
                      :rows="3"
                      :max-rows="6"
                    ></b-form-textarea>
                  </div>
                </div>
                <br>
                <div class="col-md-12">
                  <div class="form-group">
                    <hr>
                  </div>
                </div>
                <br>

                <h3 class="titleCadastro">Imagens</h3>

                <div class="row">
                  <form ref="fileform" class="drag-drop" style="    display: block;">
                    <span class="drop-files">Arraste suas imagens aqui!</span>
                  </form>
                  <div class="col-md-12 form-linha">
                    <input type="file" id="file" ref="myFiles" @change="uploadFoto" multiple>
                  </div>
                </div>

                <br>
                <br>
                <br>
                <br>
                <br>
                <br>

                <div class="row">
                  <div class="col-md-2" v-for="(imagem,index) in globalForm.base64imgs">
                    <img
                      v-on:click="removeImg(index)"
                      v-bind:src="imagem"
                      class="img-responsive img-imoveis"
                    >
                  </div>
                  <br>
                </div>
                <br>
                <br>
                <div class="row espacamentoLinha" style="display: none;">
                  <div class="col-md-6 col-xs-12 form-linha">
                    <label for="videos">Videos:</label>
                    <input type="text" class="inputPadraoAdmin" name="videos" id="videos" value>
                  </div>
                </div>

                <h3 class="titleCadastro">Localização</h3>
                <div class="row">
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="cep">CEP:</label>
                    <input
                      v-on:keyup="validaCep(); mascaraCep()"
                      v-model="globalForm.address.cep"
                      v-bind:class="{'erroInput': erro.address.cep}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="cep"
                      id="cep"
                      value
                    >
                    <span v-if="erro.address.cep" class="erro">{{erro.address.cep}}</span>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-6 col-xs-12 form-linha">
                    <label for="rua">Rua:</label>

                    <input
                      v-model="globalForm.address.logradouro"
                      v-bind:class="{'erroInput': erro.address.logradouro}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="rua"
                      id="rua"
                      value
                    >
                    <span v-if="erro.address.logradouro" class="erro">{{erro.address.logradouro}}</span>
                  </div>
                  <div class="col-md-2 col-xs-12 form-linha">
                    <label for="num">Nº:</label>

                    <input
                      v-model="globalForm.address.numero"
                      v-bind:class="{'erroInput': erro.address.numero}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="num"
                      id="num"
                      value
                    >
                    <span v-if="erro.address.numero" class="erro">{{erro.address.numero}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="comple">Complemento:</label>

                    <input
                      v-model="globalForm.address.complemento"
                      type="text"
                      class="inputPadraoAdmin"
                      name="comple"
                      id="comple"
                      value
                    >
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="bairro">Bairro:</label>

                    <input
                      v-model="globalForm.neighbor"
                      v-bind:class="{'erroInput': erro.neighbor}"
                      type="text"
                      class="inputPadraoAdmin"
                      name="bairro"
                      id="bairro"
                      value
                    >
                    <span v-if="erro.neighbor" class="erro">{{erro.neighbor}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="estado">Estado:</label>
                    <select
                      v-on:change="trocaCity()"
                      v-model="globalForm.state"
                      v-bind:class="{'erroInput': erro.state}"
                      name="estado"
                      class="selectPadraoAdmin"
                    >
                      <option v-for="state in estados" :value="state.uf">{{state.uf}}</option>
                    </select>
                    <span v-if="erro.state" class="erro">{{erro.state}}</span>
                  </div>
                  <div class="col-md-4 col-xs-12 form-linha">
                    <label for="cidade">Cidade:</label>
                    <select
                      v-model="globalForm.city_id"
                      v-bind:class="{'erroInput': erro.city_id}"
                      name="cidade"
                      class="selectPadraoAdmin"
                    >
                      <option v-for="city in cidades" :value="city.id">{{city.name}}</option>
                    </select>
                    <span v-if="erro.city_id" class="erro">{{erro.city_id}}</span>
                  </div>
                </div>
                <br>
                <div class="col-md-12">
                  <div class="form-group">
                    <hr>
                  </div>
                </div>
                <br>
                <h3 class="titleCadastro col-12 mb-3">Agendamento:</h3>
                <div class="row" style="align-items:flex-end;">
                  <div class="col-md-3">
                    <label for="dia">Dia:</label>
                    <select
                      class="padraoSelect"
                      v-on:change="alteraNome_semana()"
                      v-model="agenda_estatico.diaSem"
                      name="dia"
                    >
                      <option v-for="hora in horarios" :value="hora.id">{{hora.name}}</option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label for="hora-inicio">Hora de início:</label>
                    <select
                      name="hora-inicio"
                      class="padraoSelect"
                      v-model="agenda_estatico.hora_inicio"
                    >
                      <option v-for="hour in consomeJSON.horarios()" v-bind:value="hour">{{hour}}</option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label for="hora-fim">Hora de término:</label>
                    <select name="hora-fim" class="padraoSelect" v-model="agenda_estatico.hora_fim">
                      <option v-for="hour in consomeJSON.horarios()" v-bind:value="hour">{{hour}}</option>
                    </select>
                  </div>
                  <div class="col-md-3" style="margin-bottom:16px">
                    <a class="button botaoPadrao" v-on:click="salvarHora()">SALVAR</a>
                  </div>
                </div>
                <div v-for="dia in schedule" class="row" :id="'dia'+ dia.flag">
                  <b-col>{{dia.nome_semana}}</b-col>
                  <b-col>{{dia.hora_inicio}}</b-col>
                  <b-col>{{dia.hora_fim}}</b-col>
                  <b-col>
                    <a class="button botaoPadrao" v-on:click="removeHora(dia.flag)">remover</a>
                  </b-col>
                </div>
                <br>
                <div class="row espacamentoLinha">
                  <label for="descricao">Descrição:</label>
                  <b-form-textarea
                    id="descricao"
                    v-model="globalForm.descryption"
                    placeholder="Descrição do imóvel"
                    :rows="3"
                    :max-rows="6"
                  ></b-form-textarea>
                </div>
                <br>
                <p class="pull-right">
                  <a
                    v-if="requisicao_feita == 0"
                    id="botaoLoginAdmin"
                    v-on:click="enviaForm()"
                    class="button botaoPadraoAdmin"
                  >Cadastrar</a>
                </p>
                <load v-if="loading"></load>
                <p v-if="message">Cadastrado com sucesso!</p>
              </div>
            </b-container>
          </div>
        </b-row>
      </b-row>
    </div>
  </div>
</template>

<script>
import load from "../../globais/Load.vue";
import axios from "axios";
import topo from "../globais/Topoadmin.vue";
import sidebar from "../globais/Sidebarleftadmin.vue";
import Multiselect from "vue-multiselect";
import consomeJSONN from "../../../skins/jsons/consome";
import ValidaForm from "../../../skins/js/validaForm";
var consomeJSON = new consomeJSONN();
export default {
  name: "CriaImovel",
  components: {
    topo,
    sidebar,
    Multiselect,
    load
  },
  data() {
    return {
      erro: this.validForm.getFormImovel_cadastro(),
      globalForm: this.validForm.getFormImovel_cadastro(),
      horarios: consomeJSON.horarios_imovel(),
      agenda_estatico: {},
      contador: 0,
      schedule: [],
      resposta: "",
      estados: this.consomeJSON.cidades(),
      cidades: "",
      recebeUsers: "",
      op: [],
      options: [],
      recebeCaptadores: "",
      opCaptadores: [],
      optionsCaptadores: [],
      loading: false,
      message: false,
      file: [],
      tiposImoveis: consomeJSON.getTipos_imovel(),
      tiposAreas: this.consomeJSON.getArea(),
      operacoes: this.consomeJSON.getOperacoes(),
      tipoValorImovel: this.consomeJSON.getTipoValor(),
      simOuNao: this.consomeJSON.getOpcao(),
      disponivel: this.consomeJSON.getDisponivel(),
      meses: this.consomeJSON.getMes(),
      tipoTempo: this.consomeJSON.getTipoLocacao(),
      dragAndDropCapable: true,
      tiposImoveis: this.consomeJSON.getTipos_imovel(),
      estadoUso: this.consomeJSON.getEstado(),
      requisicao_feita: 0,
      controlMenu: 0
    };
  },
  watch: {
    recebeUsers: function() {
      var items = [];
      var count = 0;
      for (var key in this.recebeUsers) {
        //ADEQUAR DADOS À TABELA
        items[count] = {};
        items[count].name = this.recebeUsers[key].name;
        items[count].value = this.recebeUsers[key]._id.$oid;
        count++;
      }
      this.options = items;
    },
    recebeCaptadores: function() {
      var items = [];
      var count = 0;
      for (var key in this.recebeCaptadores) {
        items[count] = {};
        items[count].name = this.recebeCaptadores[key].name;
        items[count].value = this.recebeCaptadores[key]._id.$oid;
        count++;
      }
      this.optionsCaptadores = items;
    }
  },
  methods: {
    enviaForm: function() {
      var aux = [];
      for (var key in this.op) {
        aux.push(this.op[key].value);
      }

      this.globalForm.owner_id = aux;
      console.log(this.globalForm.owner_id);
      this.globalForm.schedule = this.schedule;
      var validar = this.validForm.validacaoForm_cadastroImovel(
        this.globalForm
      );
      this.erro = validar;
      if (validar.qtd_error == 0) {
        this.requisicao_feita = 1;
        this.imovelAxios("cadastro", this.globalForm);
      }
    },

    alteraNome_semana() {
      var nomeDia_semana = consomeJSON.getNome_dia(this.agenda_estatico.diaSem);
      this.agenda_estatico.nome_semana = nomeDia_semana;
    },

    salvarHora() {
      this.agenda_estatico.flag = this.contador;
      var agenda = {};
      agenda.diaSem = this.agenda_estatico.diaSem;
      agenda.flag = this.agenda_estatico.flag;
      agenda.hora_fim = this.agenda_estatico.hora_fim;
      agenda.hora_inicio = this.agenda_estatico.hora_inicio;
      agenda.nome_semana = this.agenda_estatico.nome_semana;
      console.log(this.agenda_estatico);

      this.agenda_estatico.diaSem = "";

      this.schedule.push(agenda);

      this.contador++;
    },

    removeHora(controlador) {
      console.log(this.schedule);
      var armazenaKEY = "";
      var estatic = [];
      this.contador = 0;

      for (var x in this.schedule) {
        if (this.schedule[x].flag != controlador) {
          this.schedule[x].flag = this.contador;
          estatic.push(this.schedule[x]);
          this.contador++;
        }
      }
      this.schedule = estatic;
      console.log(this.schedule);
    },

    recebeAjax(tipo) {
      if (tipo == "cep") {
        this.globalForm.address.logradouro = this.resposta.logradouro;
        this.globalForm.neighbor = this.resposta.bairro;
        this.globalForm.state = this.resposta.uf;
        this.trocaCity();
        for (var key in this.cidades) {
          if (
            this.cidades[key].name.toLowerCase() ==
            this.resposta.cidade.toLowerCase()
          ) {
            this.globalForm.city_id = this.cidades[key].id;
            this.globalForm.city = this.cidades[key].name;
            break;
          }
        }
      }
    },

    validaCep() {
      var cep = this.globalForm.address.cep.replace("-", "");
      console.log(cep);
      if (cep.length == 8) {
        this.formValid("cep", cep);
      }
    },

    trocaCity: function() {
      if (this.globalForm.state) {
        for (var key in this.estados) {
          if (this.estados[key].uf == this.globalForm.state) {
            this.cidades = this.estados[key].cidades;
            break;
          }
        }
      }
    },

    proprietarios: function() {
      var aux = [];
      var aux2 = {};
      for (var key in this.recebeUsers) {
        if (this.recebeUsers[key]._id.$oid == this.atual_prop) {
          aux2.nome = this.recebeUsers[key].name;
          aux2.id = this.atual_prop;
        }
      }
      this.owners.push(aux2);
      console.log(this.owners);
    },

    captadores: function() {
      var aux = [];
      var aux2 = {};
      for (var key in this.recebeCaptadores) {
        if (this.recebeCaptadores[key]._id.$oid == this.atual_prop) {
          aux2.nome = this.recebeCaptadores[key].name;
          aux2.id = this.atual_prop;
        }
      }
      this.owners.push(aux2);
      console.log(this.owners);
    },

    uploadFoto() {
      this.file = this.$refs.myFiles.files;
      for (var key in this.file) {
        this.getBase64(this.file[key]);
      }
    },
    getBase64_axios(base) {
      this.globalForm.base64imgs.push(base);
    },
    removeImg(index) {
      var aux = [];
      for (var key in this.globalForm.base64imgs) {
        if (key != index) {
          aux.push(this.globalForm.base64imgs[key]);
        }
      }
      this.globalForm.base64imgs = aux;
    },
    determineDragAndDropCapable() {
      var div = document.createElement("div");

      return (
        ("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
        "FormData" in window &&
        "FileReader" in window
      );
    },

    mascaraMoeda(campo) {
      switch (campo) {
        case "areaConstruida":
          this.globalForm.basic_data.areaConstruida = this.validForm.mascaraMoeda(
            this.globalForm.basic_data.areaConstruida
          );
          break;
        case "areaTerreno":
          this.globalForm.basic_data.areaterreno = this.validForm.mascaraMoeda(
            this.globalForm.basic_data.areaterreno
          );
          break;
        case "areaComum":
          this.globalForm.basic_data.areaComum = this.validForm.mascaraMoeda(
            this.globalForm.basic_data.areaComum
          );
          break;
        case "areaPrivativa":
          this.globalForm.basic_data.areaPrivativa = this.validForm.mascaraMoeda(
            this.globalForm.basic_data.areaPrivativa
          );
          break;
        case "valorLocacao":
          this.globalForm.value = this.validForm.mascaraMoeda(
            this.globalForm.value
          );
          break;
        case "valorVenda":
          this.globalForm.value_data.venda = this.validForm.mascaraMoeda(
            this.globalForm.value_data.venda
          );
          break;
        case "condominio":
          this.globalForm.value_data.condominio = this.validForm.mascaraMoeda(
            this.globalForm.value_data.condominio
          );
          break;
        case "iptuMes":
          this.globalForm.value_data.iptu = this.validForm.mascaraMoeda(
            this.globalForm.value_data.iptu
          );
          break;
        case "iptuAVista":
          this.globalForm.value_data.iptuAVista = this.validForm.mascaraMoeda(
            this.globalForm.value_data.iptuAVista
          );
          break;
        case "iptuGaragemMes":
          this.globalForm.value_data.iptuGaragemMes = this.validForm.mascaraMoeda(
            this.globalForm.value_data.iptuGaragemMes
          );
          break;
        case "iptuGaragemAVista":
          this.globalForm.value_data.iptuGaragemAVista = this.validForm.mascaraMoeda(
            this.globalForm.value_data.iptuGaragemAVista
          );
          break;
         case "seguroIncendioMes":
          this.globalForm.value_data.seguroIncendioMes = this.validForm.mascaraMoeda(
            this.globalForm.value_data.seguroIncendioMes
          );
          break;
        case "seguroIncendioAvista":
          this.globalForm.value_data.seguroIncendioAVista = this.validForm.mascaraMoeda(
            this.globalForm.value_data.seguroIncendioAVista
          );
          break;
        case "corretor":
          this.globalForm.basic_data.corretor = this.validForm.mascaraMoeda(
            this.globalForm.basic_data.corretor
          );
          break;
        case "indicador":
          this.globalForm.basic_data.indicador = this.validForm.mascaraMoeda(
            this.globalForm.basic_data.indicador
          );
          break;
        case "valorOculto":
          this.globalForm.documents.valorOculto = this.validForm.mascaraMoeda(
            this.globalForm.documents.valorOculto
          );
          break;
        case "valorMinimo":
          this.globalForm.documents.valorMinimo = this.validForm.mascaraMoeda(
            this.globalForm.documents.valorMinimo
          );
          break;
      }
    },
    mascaraCep() {
      this.globalForm.address.cep = this.validForm.mascaraCep(
        this.globalForm.address.cep
      );
    },
    showMenu() {
      if (this.controlMenu == 0) {
        jQuery(".ajusteColuna").show("slow");
        jQuery(".exibirPainelMob").html("FECHAR MENU");
        this.controlMenu = 1;
      } else {
        jQuery(".ajusteColuna").hide("slow");
        jQuery(".exibirPainelMob").html("ABRIR MENU");
        this.controlMenu = 0;
      }
    }
  },
  mounted() {
    var main = this;
    document.onkeydown = function(e) {
      if (e.keyCode == 13) {
        main.enviaForm();
      }
    };

    this.admin("getTipoUser", "3");
    this.dragAndDropCapable = this.determineDragAndDropCapable();

    if (this.dragAndDropCapable) {
      [
        "drag",
        "dragstart",
        "dragend",
        "dragover",
        "dragenter",
        "dragleave",
        "drop"
      ].forEach(
        function(evt) {
          this.$refs.fileform.addEventListener(
            evt,
            function(e) {
              e.preventDefault();
              e.stopPropagation();
            }.bind(this),
            false
          );
        }.bind(this)
      );

      this.$refs.fileform.addEventListener(
        "drop",
        function(e) {
          for (let i = 0; i < e.dataTransfer.files.length; i++) {
            this.getBase64(e.dataTransfer.files[i]);
          }
        }.bind(this)
      );
    }
  },
  beforeCreate() {
    //this.validaUser();
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>