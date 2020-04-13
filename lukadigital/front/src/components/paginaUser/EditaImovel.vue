<template>
  <div>
    <div class="EditaImovel">
      <topo></topo>

		
		<div class="myAccount"> <!-- header editar imovel -->
			<div class="container">
				<div class="row">
					<div class="col-md-12">
					<h2>
						<i class="fa fa-plus-circle"></i> Editar imóvel
					</h2>
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

      <div class="sectioncadImovel">
        <div class="container ajustContainer">
          	<h3 class="titleCadastro">Informações básicas</h3>
			<div class="row">

				<div class="col-md-4 form-linha">
					<label for="matricula">Matricula:</label>
					<i class="sl sl-icon-doc"></i>
					<input v-model="globalForm.documents.matricula" v-bind:class="{'erroInput': erro.documents.matricula}" type="text" class="input-text" name="matricula" id="matricula" value >
					<span v-if="erro.documents.matricula" class="erro">{{erro.documents.matricula}}</span>
				</div>

				<div class="col-md-4 form-linha">
					<label for="tipo">Categoria:</label>
					<select v-model="globalForm.type" v-bind:class="{'erroInput': erro.type}" name="tipo" class="padraoSelect">
						<option v-for="tipo in tiposImoveis" v-bind:value="tipo.id" v-bind:key="tipo.id" selected>{{tipo.nome}}</option>
					</select>
					<span v-if="erro.type" class="erro">{{erro.type}}</span>
				</div>

				<div class="col-md-4 form-linha">
					<label for="operacao">Operação:</label>
					<select v-model="globalForm.operacao" v-bind:class="{'erroInput': erro.operacao}" name="operacao" class="padraoSelect">
						<option v-for="operacao in operacoes" v-bind:value="operacao.id" v-bind:key="operacao.id" selected>{{operacao.nome}}</option>
					</select>
					<span v-if="erro.operacao" class="erro">{{erro.operacao}}</span>
				</div>
				
			</div>

		  	<br/>

          	<div class="row">
            	<div class="col-md-6 form-linha">
              		<label for="loteamento">Loteamento:</label>
					<input v-model="globalForm.loteamento" v-bind:class="{'erroInput': erro.loteamento}" type="text" class="input-text" name="loteamento" id="loteamento" value >
              		<span v-if="erro.loteamento" class="erro">{{erro.loteamento}}</span>
            	</div>
            	
				<div class="col-md-6 form-linha">
              		<label for="proximidade">Proximidade:</label>
              		<input v-model="globalForm.proximidade" v-bind:class="{'erroInput': erro.proximidade}" type="text" class="input-text" name="proximidade" id="proximidade" value >
              		<span v-if="erro.proximidade" class="erro">{{erro.proximidade}}</span>
            	</div>
          	</div>

          	<br/>

          	<div class="col-md-12">
				<div class="form-group">
					<hr>
				</div>
          	</div>
          
		  	<br/>
          	
			<div class="row">
				<div class="col-md-4 col-xs-12 form-linha">
					<label for="quartos">Quartos:</label>
					<input type="number" v-model="globalForm.rooms.quartos" v-bind:class="{'erroInput': erro.rooms.quartos}" class="input-text" name="quartos" id="quartos" value min="0" max="100" >
					<span v-if="erro.rooms.quartos" class="erro">{{erro.rooms.quartos}}</span>
				</div>

            	<div class="col-md-4 col-xs-12 form-linha">
              		<label for="suites">Suites:</label>
              		<input type="number" v-model="globalForm.rooms.suites" v-bind:class="{'erroInput': erro.rooms.suites}" class="input-text" name="suites" id="suites" value min="0" max="100" >
              		<span v-if="erro.rooms.suites" class="erro">{{erro.rooms.suites}}</span>
				</div>

            	<div class="col-md-4 col-xs-12 form-linha">
					<label for="salasEstar">Salas (de estar):</label>
					<input type="number" v-model="globalForm.rooms.salasEstar" v-bind:class="{'erroInput': erro.rooms.salasEstar}" class="input-text" name="salasEstar" id="salasEstar" value min="0" max="100" >
					<span v-if="erro.rooms.salasEstar" class="erro">{{erro.rooms.salasEstar}}</span>
            	</div>
          	</div>
          	
			<br>
          	
			<div class="row">
				<div class="col-md-4 col-xs-12 form-linha">
					<label for="banheiros">Banheiros:</label>
					<input type="number" v-model="globalForm.rooms.banheiros" v-bind:class="{'erroInput': erro.rooms.banheiros}" class="input-text" name="banheiros" id="banheiros" value min="0" max="100">
					<span v-if="erro.rooms.banheiros" class="erro">{{erro.rooms.banheiros}}</span>
				</div>
            
				<div class="col-md-4 col-xs-12 form-linha">
              		<label for="lavabos">Lavabos:</label>
              		<input type="number" v-model="globalForm.rooms.lavabos" v-bind:class="{'erroInput': erro.rooms.lavabos}" class="input-text" name="lavabos"id="lavabos" value min="0" max="100" >
              		<span v-if="erro.rooms.lavabos" class="erro">{{erro.rooms.lavabos}}</span>
            	</div>

            	<div class="col-md-4 col-xs-12 form-linha">
              		<label for="garagem">Garagem:</label>
              		<input type="number" v-model="globalForm.rooms.garagem" v-bind:class="{'erroInput': erro.rooms.garagem}" class="input-text" name="garagem" id="garagem" value min="0" max="100" >
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
            <div class="col-md-6 col-lg-3 form-linha">
              <label for="areaConstruida">Área útil (construída)</label>
              <i class="moedaOpt">m²</i>
              <input
                type="text"
                v-on:keyup="mascaraMoeda('areaConstruida')"
                v-model="globalForm.basic_data.areaConstruida"
                v-bind:class="{'erroInput': erro.basic_data.areaConstruida}"
                class="input-text"
                name="areaConstruida"
                id="areaConstruida"
                value
              >
              <span
                v-if="erro.basic_data.areaConstruida"
                class="erro"
              >{{erro.basic_data.areaConstruida}}</span>
            </div>
            <div class="col-md-2 col-xs-12 form-linha d-none">
              <label for="tipoConstruida">Tipo:</label>
              <select
                v-model="globalForm.basic_data.tipoConstruida"
                v-bind:class="{'erroInput': erro.basic_data.tipoConstruida}"
                name="tipoConstruida"
                class="padraoSelect"
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
            <div class="col-md-6 col-lg-3 form-linha">
              <label for="areaTerreno">Área Total (terreno)</label>
              <i class="moedaOpt">m²</i>
              <input
                type="text"
                v-on:keyup="mascaraMoeda('areaTerreno')"
                v-model="globalForm.basic_data.areaterreno"
                v-bind:class="{'erroInput': erro.basic_data.areaterreno}"
                class="input-text"
                name="areaTerreno"
                id="areaTerreno"
                value
              >
              <span v-if="erro.basic_data.areaterreno" class="erro">{{erro.basic_data.areaterreno}}</span>
            </div>
            <div class="col-md-2 col-xs-12 form-linha d-none">
              <label for="tipoTerreno">Tipo:</label>
              <select
                v-model="globalForm.basic_data.tipoTerreno"
                v-bind:class="{'erroInput': erro.basic_data.tipoTerreno}"
                name="tipoTerreno"
                class="padraoSelect"
              >
                <option
                  v-for="tipoTerreno in tiposAreas"
                  v-bind:value="tipoTerreno.id"
                  selected
                >{{tipoTerreno.nome}}</option>
              </select>
              <span v-if="erro.basic_data.tipoTerreno" class="erro">{{erro.basic_data.tipoTerreno}}</span>
            </div>
            <div class="col-md-6 col-lg-3 form-linha">
              <label for="areaComum">Área Comum</label>
              <i class="moedaOpt">m²</i>
              <input
                type="text"
                v-on:keyup="mascaraMoeda('areaComum')"
                v-model="globalForm.basic_data.areaComum"
                v-bind:class="{'erroInput': erro.basic_data.areaComum}"
                class="input-text"
                name="areaComum"
                id="areaComum"
                value
              >
              <span v-if="erro.basic_data.areaComum" class="erro">{{erro.basic_data.areaComum}}</span>
            </div>
            <div class="col-md-2 col-xs-12 form-linha d-none">
              <label for="tipoComum">Tipo:</label>
              <select
                v-model="globalForm.basic_data.tipoComum"
                v-bind:class="{'erroInput': erro.basic_data.tipoComum}"
                name="tipoComum"
                class="padraoSelect"
              >
                <option
                  v-for="tipoComum in tiposAreas"
                  v-bind:value="tipoComum.id"
                  selected
                >{{tipoComum.nome}}</option>
              </select>
              <span v-if="erro.basic_data.tipoComum" class="erro">{{erro.basic_data.tipoComum}}</span>
            </div>
            <div class="col-md-6 col-lg-3 form-linha">
              <label for="areaPrivativa">Área Privativa:</label>
              <i class="moedaOpt">m²</i>
              <input
                type="text"
                v-on:keyup="mascaraMoeda('areaPrivativa')"
                v-model="globalForm.basic_data.areaPrivativa"
                v-bind:class="{'erroInput': erro.basic_data.areaPrivativa}"
                class="input-text"
                name="areaPrivativa"
                id="areaPrivativa"
                value
              >
              <span
                v-if="erro.basic_data.areaPrivativa"
                class="erro"
              >{{erro.basic_data.areaPrivativa}}</span>
            </div>
            <div class="col-md-2 col-xs-12 form-linha d-none">
              <label for="tipoPrivativa">Tipo:</label>
              <select
                v-model="globalForm.basic_data.tipoPrivativa"
                v-bind:class="{'erroInput': erro.basic_data.tipoPrivativa}"
                name="tipoPrivativa"
                class="padraoSelect"
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
          <div class="row">
            <div class="col-md-4 form-linha">
              <label for="valorLocacao">Valor de locação:</label>
              <i class="moedaOpt">R$</i>
              <input
                v-on:keyup="mascaraMoeda('valorLocacao')"
                v-model="globalForm.value"
                v-bind:class="{'erroInput': erro.value}"
                type="text"
                class="input-text"
                name="valorLocacao"
                id="valorLocacao"
                value
              >
              <span>{{erro.value}}</span>
            </div>
            <div class="col-md-4 form-linha">
              <label for="valorVenda">Valor de venda:</label>
              <i class="moedaOpt">R$</i>
              <input
                v-on:keyup="mascaraMoeda('valorVenda')"
                v-model="globalForm.value_data.venda"
                v-bind:class="{'erroInput': erro.value_data.venda}"
                type="text"
                class="input-text"
                name="valorVenda"
                id="valorVenda"
                value
              >
              <span>{{erro.value_data.venda}}</span>
            </div>
            <div class="col-md-4 form-linha">
              <label for="condominio">Condomínio:</label>
              <i class="moedaOpt">R$</i>
              <input
                v-on:keyup="mascaraMoeda('condominio')"
                v-model="globalForm.value_data.condominio"
                v-bind:class="{'erroInput': erro.value_data.condominio}"
                type="text"
                class="input-text"
                name="condominio"
                id="condominio"
                value
              >
              <span>{{erro.value_data.condominio}}</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 form-linha">
              <label for="tipoValor">Valor (Tipo):</label>
              <select
                v-model="globalForm.value_data.tipo"
                v-bind:class="{'erroInput': erro.value_data.tipo}"
                name="iptuParcelado"
                class="padraoSelect"
              >
                <option
                  v-for="tipoValor in tipoValorImovel"
                  v-bind:value="tipoValor.id"
                  selected
                >{{tipoValor.nome}}</option>
              </select>
              <span v-if="erro.value_data.tipo" class="erro">{{erro.value_data.tipo}}</span>
            </div>
            <div class="col-md-4 form-linha">
              <label for="tipoLocacao">Tipo de locação</label>
              <select
                v-model="globalForm.value_data.tipoLocacao"
                v-bind:class="{'erroInput': erro.value_data.tipoLocacao}"
                name="tipoLocacao"
                class="padraoSelect"
              >
                <option
                  v-for="tipoLocacao in tipoTempo"
                  v-bind:value="tipoLocacao.id"
                  selected
                >{{tipoLocacao.nome}}</option>
              </select>
              <span v-if="erro.value_data.tipoLocacao" class="erro">{{erro.value_data.tipoLocacao}}</span>
            </div>
            <div class="col-md-4 form-linha">
              <label for="estado">Estado:</label>
              <select
                v-model="globalForm.basic_data.estado"
                v-bind:class="{'erroInput': erro.basic_data.estado}"
                name="estado"
                class="padraoSelect"
              >
                <option v-for="estado in estadoUso" v-bind:value="estado.id" selected>{{estado.nome}}</option>
              </select>
              <span v-if="erro.basic_data.estado" class="erro">{{erro.basic_data.estado}}</span>
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
              <label for="iptuMes">IPTU (mês)</label>
              <i class="moedaOpt">R$</i>
              <input
                v-on:keyup="mascaraMoeda('iptuMes')"
                v-model="globalForm.value_data.iptu"
                v-bind:class="{'erroInput': erro.value_data.iptu}"
                type="text"
                class="input-text"
                name="iptuMes"
                id="iptuMes"
                value
              >
              <span>{{erro.value_data.iptu}}</span>
            </div>
            <div class="col-md-4 form-linha">
              <label for="iptuParcelado">IPTU (Parc.)</label>
              <select
                v-model="globalForm.value_data.iptuParcelado"
                v-bind:class="{'erroInput': erro.value_data.iptuParcelado}"
                name="iptuParcelado"
                class="padraoSelect"
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
            <div class="col-md-4 form-linha">
              <label for="iptuAVista">IPTU (à vista)</label>
              <i class="moedaOpt">R$</i>
              <input
                v-on:keyup="mascaraMoeda('iptuAVista')"
                v-model="globalForm.value_data.iptuAVista"
                v-bind:class="{'erroInput': erro.value_data.iptuAVista}"
                type="text"
                class="input-text"
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
              <i class="moedaOpt">R$</i>
              <input
                v-on:keyup="mascaraMoeda('iptuGaragemMes')"
                v-model="globalForm.value_data.iptuGaragemMes"
                v-bind:class="{'erroInput': erro.value_data.iptuGaragemMes}"
                type="text"
                class="input-text"
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
                class="padraoSelect"
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
              <i class="moedaOpt">R$</i>
              <input
                v-on:keyup="mascaraMoeda('iptuGaragemAVista')"
                v-model="globalForm.value_data.iptuGaragemAVista"
                v-bind:class="{'erroInput': erro.value_data.iptuGaragemAVista}"
                type="text"
                class="input-text"
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
          	
			<br/>

          	<div class="row">

				<!-- Seguro incêndio (mês) -->
				<div class="col-md-4 col-xs-12 form-linha">
					<label for="seguroIncendioMes">Seguro Incêndio (mês)</label>
					<i class="moedaOpt">R$</i>
					<input v-on:keyup="mascaraMoeda('seguroIncendioMes')" v-model="globalForm.value_data.seguroIncendioMes" v-bind:class="{'erroInput': erro.value_data.seguroIncendioMes}" type="text" class="input-text" name="seguroIncendioMes" id="seguroIncendioMes" value >
					<span>{{erro.value_data.seguroIncendioMes}}</span>
				</div>

				<!-- Seguro incêndio (parcelado) -->
				<div class="col-md-4 col-xs-12 form-linha">
					<label for="seguroIncendioParcelado">Seguro Incêndio (Parc.)</label>
					<select v-model="globalForm.value_data.seguroIncendioParcelas" v-bind:class="{'erroInput': erro.value_data.seguroIncendioParcelas}" name="seguroIncendioParcelado" class="padraoSelect" >
						<option v-for="seguroIncendioParcelado in meses" v-bind:value="seguroIncendioParcelado.id" v-bind:key="seguroIncendioParcelado.id" selected>
							{{seguroIncendioParcelado.nome}}
						</option>
					</select>
					<span v-if="erro.value_data.seguroIncendioParcelas" class="erro">{{erro.value_data.seguroIncendioParcelas}}</span>
				</div>

				<!-- Seguro incêndio (à vista) -->
				<div class="col-md-4 col-xs-12 form-linha">
					<label for="seguroIncendioAvista">Seguro Incêndio (à vista)</label>
					<i class="moedaOpt">R$</i>
					<input v-on:keyup="mascaraMoeda('seguroIncendioAvista')" v-model="globalForm.value_data.seguroIncendioAVista" v-bind:class="{'erroInput': erro.value_data.seguroIncendioAVista}"type="text" class="input-text" name="seguroIncendioAvista"id="seguroIncendioAvista" value >
					<span>{{erro.value_data.seguroIncendioAVista}}</span>
				</div>

          	</div>

          	<br/>
			<div class="col-md-12"><div class="form-group"><hr></div></div>
			<br/>

			<div class="row">

				<div class="col-md-4 col-xs-12 form-linha">
					<label for="valorCapitalizacao">Capitalização ( R$ )</label>
					<i class="moedaOpt">R$</i>
					<input v-on:keyup="mascaraMoeda('valorCapitalizacao')" v-model="globalForm.value_data.valorCapitalizacao" v-bind:class="{'erroInput': erro.value_data.valorCapitalizacao}" type="text" class="input-text" name="valorCapitalizacao" id="valorCapitalizacao" value/>
					<span v-if="erro.value_data.valorCapitalizacao" class="erro">{{erro.value_data.valorCapitalizacao}}</span>
				</div>

				<div class="col-md-4 col-xs-12 form-linha">
					<label for="vigenciaCapitalizacao">Vigência ( meses )</label>
					<select v-model="globalForm.value_data.vigenciaCapitalizacao" v-bind:class="{'erroInput': erro.value_data.vigenciaCapitalizacao}" name="vigenciaCapitalizacao" class="padraoSelect" >
						<option v-for="vigenciaCapitalizacao in meses" v-bind:value="vigenciaCapitalizacao.id" v-bind:key="vigenciaCapitalizacao.id" selected>
							{{vigenciaCapitalizacao.nome}}
						</option>
					</select>
					<span v-if="erro.value_data.vigenciaCapitalizacao" class="erro">{{erro.value_data.vigenciaCapitalizacao}}</span>
				</div>

				<div class="col-md-4 col-xs-12 form-linha">
					<label for="seguroFianca">Seguro Fiança ( anual )</label>
					<i class="moedaOpt">R$</i>
					<input v-on:keyup="mascaraMoeda('seguroFianca')" v-model="globalForm.value_data.seguroFianca" v-bind:class="{'erroInput': erro.value_data.seguroFianca}" type="text" class="input-text" name="seguroFianca" id="seguroFianca" value/>
					<span v-if="erro.value_data.seguroFianca" class="erro">{{erro.value_data.seguroFianca}}</span>
				</div>

			</div>
			
			<br/>
			<div class="col-md-12"><div class="form-group"><hr></div></div>
			<br/>

			<div class="row">
				<div class="col-12">
					<label for="seguroIncendioOBS">Observação:</label>
					<b-form-textarea id="seguroIncendioOBS" v-model="globalForm.value_data.seguroIncendioObs" placeholder="Observação sobre seguro incêndio." :rows="3" :max-rows="6">
					</b-form-textarea>
				</div>
			</div>

          	<br/>


		  <br/>
          <div class="col-md-12"><div class="form-group"><hr></div></div>
          <br/>

          <h3 class="titleCadastro mb-3">Imagens</h3>

          <div class="row">
            <div class="col-md-2" v-for="(imagem,index) in globalForm.imagens">
              <img
                v-on:click="removeImg_banco(index)"
                v-bind:src="urlApi+imagem"
                class="img-responsive img-imoveis"
              >
            </div>
            <br>
          </div>
          <div class="row">
            <!--form ref="fileform" class="drag-drop" style="    display: block;">
             <span class="drop-files">Arraste suas imagens aqui!</span>
            </form-->
            <div class="col-md-12 form-linha">
              <input type="file" id="file" ref="myFiles" @change="uploadFoto" multiple>
            </div>
          </div>
          <br>
          <br>
          <br>
          <div class="row">
            <div class="col-md-2" v-for="(imagem,index) in globalForm.base64imgs">
              <img
                v-on:click="removeImg(index)"
                v-bind:src="imagem"
                class="img-responsive"
                style="width: 100%;height: 100%;"
              >
            </div>
            <br>
          </div>
          <br>

          <div class="row espacamentoLinha d-none" >
            <div class="col-md-6 col-xs-12 form-linha">
              <label for="videos">Videos:</label>
              <input type="text" class="input-text" name="videos" id="videos" value>
            </div>
          </div>
          <br>
          <div class="col-md-12">
            <div class="form-group">
              <hr>
            </div>
          </div>
          <br>
          <h3 class="titleCadastro">Localização</h3>

          <div class="row">
            <div class="col-md-4 col-xs-12 form-linha">
              <label for="cep">CEP:</label>
              <i class="sl sl-icon-compass"></i>
              <input
                v-on:keyup="validaCep();mascaraCep()"
                v-model="globalForm.address.cep"
                v-bind:class="{'erroInput': erro.address.cep}"
                type="text"
                class="input-text"
                name="cep"
                id="cep"
                value
              >
              <span v-if="erro.address.cep" class="erro">{{erro.address.cep}}</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-xs-12 form-linha">
              <label for="rua">Rua:</label>
              <i class="sl sl-icon-location"></i>
              <input
                v-model="globalForm.address.logradouro"
                v-bind:class="{'erroInput': erro.address.logradouro}"
                type="text"
                class="input-text"
                name="rua"
                id="rua"
                value
              >
              <span v-if="erro.address.logradouro" class="erro">{{erro.address.logradouro}}</span>
            </div>
            <div class="col-md-2 col-xs-12 form-linha">
              <label for="num">Nº:</label>
              <i class="sl sl-icon-location"></i>
              <input
                v-model="globalForm.address.numero"
                v-bind:class="{'erroInput': erro.address.numero}"
                type="text"
                class="input-text"
                name="num"
                id="num"
                value
              >
              <span v-if="erro.address.numero" class="erro">{{erro.address.numero}}</span>
            </div>
            <div class="col-md-4 col-xs-12 form-linha">
              <label for="comple">Complemento:</label>
              <i class="sl sl-icon-location"></i>
              <input
                v-model="globalForm.address.complemento"
                type="text"
                class="input-text"
                name="comple"
                id="comple"
                value
              >
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-xs-12 form-linha">
              <label for="bairro">Bairro:</label>
              <i class="sl sl-icon-location"></i>
              <input
                v-model="globalForm.neighbor"
                v-bind:class="{'erroInput': erro.neighbor}"
                type="text"
                class="input-text"
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
                class="padraoSelect"
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
                class="padraoSelect"
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
              <select name="hora-inicio" class="padraoSelect" v-model="agenda_estatico.hora_inicio">
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

          <div v-for="dia in globalForm.schedule" class="row" :id="'dia'+dia.flag">
            <b-col>{{dia.nome_semana}}</b-col>
            <b-col>{{dia.hora_inicio}}</b-col>
            <b-col>{{dia.hora_fim}}</b-col>
            <b-col>
              <a class="button botaoPadrao" v-on:click="removeHora(dia.flag)">remover</a>
            </b-col>
          </div>

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
        <div class="mb-5">
          <div class="row espacamentoLinha" style="justify-content:flex-end;">
            <a
              v-on:click="enviaForm()"
              id="botaoCadastraAlugar"
              class="button botaoPadrao"
            >Atualizar dados</a>
          </div>
          <load v-if="loading"></load>
          <p v-if="message" class="pull-right mt-3">Atualizado com sucesso!</p>
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
import axios from "axios";
export default {
	name: "EditaImovel",
	components: {
		rodape,
		topo,
		sidebarLeft,
		load
	},
	data() {
		return {
			erro: this.validForm.getFormImovel_cadastro(),
			globalForm: {},
			horarios: this.consomeJSON.horarios_imovel(),
			agenda_estatico: {},
			contador: 0,
			schedule: [],
			resposta: "",
			estados: this.consomeJSON.cidades(),
			cidades: "",
			loading: false,
			message: false,
			file: "",
			dragAndDropCapable: false,
			tiposImoveis: this.consomeJSON.getTipos_imovel(),
			tiposAreas: this.consomeJSON.getArea(),
			operacoes: this.consomeJSON.getOperacoes(),
			tipoValorImovel: this.consomeJSON.getTipoValor(),
			simOuNao: this.consomeJSON.getOpcao(),
			estadoUso: this.consomeJSON.getEstado(),
			disponivel: this.consomeJSON.getDisponivel(),
			meses: this.consomeJSON.getMes(),
			tipoTempo: this.consomeJSON.getTipoLocacao()
		}
  	},
  	methods: {
		enviaForm: function() {
			this.imovelAxios("updateImovel", this.globalForm, this.$route.params.id);
		},
		alteraNome_semana() {
			var nomeDia_semana = this.consomeJSON.getNome_dia(
				this.agenda_estatico.diaSem
			);
			this.agenda_estatico.nome_semana = nomeDia_semana;
		},
    	salvarHora() {
			console.log(this.agenda_estatico);
			this.agenda_estatico.flag = this.contador;
			var agenda = {};
			agenda.diaSem = this.agenda_estatico.diaSem;
			agenda.flag = this.agenda_estatico.flag;
			agenda.hora_fim = this.agenda_estatico.hora_fim;
			agenda.hora_inicio = this.agenda_estatico.hora_inicio;
			agenda.nome_semana = this.agenda_estatico.nome_semana;

			this.agenda_estatico.diaSem = "";
			this.globalForm.schedule.push(agenda);
			this.contador++;
		},
    	removeHora(controlador) {
      		var armazenaKEY = "";
			var estatic = [];
			this.contador = 0;

			for (var x in this.globalForm.schedule) {
				if (this.globalForm.schedule[x].flag != controlador) {
				this.globalForm.schedule[x].flag = this.contador;
				estatic.push(this.globalForm.schedule[x]);
				this.contador++;
				}
			}
			this.globalForm.schedule = estatic;
			console.log(this.globalForm);
    	},
    	recebeAjax(tipo) {
			if (tipo == "cep") {
				alert("chegou");
				this.globalForm.address.logradouro = this.resposta.logradouro;
				this.globalForm.neighbor = this.resposta.bairro;
				this.globalForm.state = this.resposta.uf;
				this.trocaCity();
				for (var key in this.cidades) {
					if ( this.cidades[key].name.toLowerCase() == this.resposta.cidade.toLowerCase()) {
						this.globalForm.city_id = this.cidades[key].id;
						this.globalForm.city = this.cidades[key].name;
						break;
					}
				}
      		}
    	},
    	validaCep() {
			var cep = this.globalForm.address.cep.replace("-", "");
			console.log(cep.length);
			if (cep.length == 8)
				this.formValid("cep", cep);
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
		recebeAjax: function(data) {
			this.trocaCity();
			for (var key in this.globalForm.schedule) {
				this.contador++;
			}
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
				if (key != index) 
					aux.push(this.globalForm.base64imgs[key]);
			}
			this.globalForm.base64imgs = aux;
		},
    	removeImg_banco(index) {
			var aux = [];
			for (var key in this.globalForm.imagens) {
				if (key != index)
					aux.push(this.globalForm.imagens[key]);
			}
			this.globalForm.imagens = aux;
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
				case "areaConstruida":	this.globalForm.basic_data.areaConstruida = this.validForm.mascaraMoeda(
										this.globalForm.basic_data.areaConstruida );
										break;

				case "areaTerreno":		this.globalForm.basic_data.areaterreno = this.validForm.mascaraMoeda(
										this.globalForm.basic_data.areaterreno );
										break;

				case "areaComum": 		this.globalForm.basic_data.areaComum = this.validForm.mascaraMoeda(
										this.globalForm.basic_data.areaComum );
										break;

				case "areaPrivativa":	this.globalForm.basic_data.areaPrivativa = this.validForm.mascaraMoeda(
										this.globalForm.basic_data.areaPrivativa);
										break;
				case "valorLocacao":	this.globalForm.value_data.locacao = this.validForm.mascaraMoeda(
										this.globalForm.value_data.locacao );
										break;

				case "valorVenda":		this.globalForm.value = this.validForm.mascaraMoeda(
										this.globalForm.value);
										break;

				case "condominio":		this.globalForm.value_data.condominio = this.validForm.mascaraMoeda(
										this.globalForm.value_data.condominio );
										break;

				case "iptuMes":			this.globalForm.value_data.iptu = this.validForm.mascaraMoeda(
										this.globalForm.value_data.iptu );
										break;
				case "iptuAVista": 		this.globalForm.value_data.iptuAVista = this.validForm.mascaraMoeda(
										this.globalForm.value_data.iptuAVista );
										break;

				case "iptuGaragemMes": 	this.globalForm.value_data.iptuGaragemMes = this.validForm.mascaraMoeda(
										this.globalForm.value_data.iptuGaragemMes );
										break;
				case "iptuGaragemAVista": 	this.globalForm.value_data.iptuGaragemAVista = this.validForm.mascaraMoeda(
											this.globalForm.value_data.iptuGaragemAVista );
											break;
				case "seguroIncendioMes":	this.globalForm.value_data.seguroIncendioMes = this.validForm.mascaraMoeda(
											this.globalForm.value_data.seguroIncendioMes );
											break;
				case "seguroIncendioAvista": 	this.globalForm.value_data.seguroIncendioAVista = this.validForm.mascaraMoeda(
												this.globalForm.value_data.seguroIncendioAVista);
											break;
				case "corretor":	this.globalForm.basic_data.corretor = this.validForm.mascaraMoeda(
									this.globalForm.basic_data.corretor);
									break;
				case "indicador":	this.globalForm.basic_data.indicador = this.validForm.mascaraMoeda(
									this.globalForm.basic_data.indicador);
									break;
				case "valorOculto":	this.globalForm.documents.valorOculto = this.validForm.mascaraMoeda(
									this.globalForm.documents.valorOculto);
									break;
				case "valorMinimo":	this.globalForm.documents.valorMinimo = this.validForm.mascaraMoeda(
									this.globalForm.documents.valorMinimo);
									break;
				case "valorCapitalizacao": 	this.globalForm.value_data.valorCapitalizacao = this.validForm.mascaraMoeda(
											this.globalForm.value_data.valorCapitalizacao);
											break;
				case "seguroFianca":	this.globalForm.value_data.seguroFianca = this.validForm.mascaraMoeda(
										this.globalForm.value_data.seguroFianca);
										break;
					
			}
    	},
		mascaraCep() {
			this.globalForm.address.cep = this.validForm.mascaraCep(
				this.globalForm.address.cep
				);
		}
	},
  	mounted() {
   	 	var main = this;
		document.onkeydown = function(e) {
			if (e.keyCode == 13) {
				main.enviaForm();
			}
		};
    	jQuery("body").removeClass("indexadmin");
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
		this.imovelAxios("validaImovelUser", this.$route.params.id);
	}
}
</script>
