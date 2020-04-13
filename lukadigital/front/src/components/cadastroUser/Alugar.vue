<template>
  	<div class="col-md-12 col-xs-12 alugarImovel">
      	
	  	<h3 class="titleCadastro">Informações básicas</h3>
    
		<!-- <div class="row">
			<div class="col-md-6 col-xs-12 form-linha">
				<label for="enviaFotoAlugar">Selecione uma foto:</label>
				<input type="file" v-bind:class="{'erroInput': (!img1 && triggered)}" name="enviaFotoPerfil" ref="myFiles" @change="uploadFoto('enviaFotoPerfil')" placeholder="Escolha uma foto" accept="image/*"/>
			</div>
			<div class="col-md-6 col-xs-12 form-linha">
				<div v-if="!img1 && triggered" class="text-center alert alert-danger">
					<span class="erro">Nenhuma foto enviado!</span>
				</div>
			</div>
		</div> -->

		<!-- Inserir nome completo -->
		<div class="row">
			
			<div class="col-md-12 col-xs-12 form-linha">
				<label for="nomeCompletoAlugar">Nome Completo:</label>
				<i class="sl sl-icon-user"></i>
				<input v-model="globalForm.name" type="text" class="input-text" v-bind:class="{'erroInput': erro.name}" name="nomeCompletoAlugar" id="nomeCompletoAlugar" value="">
				
				<div v-if="erro.name" class="text-center alert alert-danger">
					<span class="erro">{{erro.name}}</span>
				</div>
			</div>
		
		</div>

		<!-- Inserir e-mail + tipo de pessoa + sexo -->
		<div class="row">
		
			<!-- Inserir e-mail -->
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="emailAlugar">Email:</label>
				<i class="sl sl-icon-envelope-open"></i>
				<input v-on:blur="verificacoes('email')" v-model="globalForm.email" type="text" class="input-text" name="emailAlugar" v-bind:class="{'erroInput': erro.email}" id="emailAlugar" value="">
			
				<div v-if="erro.email" class="text-center alert alert-danger">
					<span class="erro">{{erro.email}}</span>
				</div>
			</div>

			<!-- Inserir CPF -->
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="cpfAlugar">CPF:</label>
				<i class="sl sl-icon-doc"></i>
				<input v-on:keyup="mascaraCpf()" v-on:blur="verificacoes('cpf')" v-bind:class="{'erroInput': erro.documents.cpf}" v-model="globalForm.documents.cpf" type="text" class="input-text" name="cpfAlugar" id="cpfAlugar" value="">

				<div v-if="erro.documents.cpf" class="text-center alert alert-danger">
					<span class="erro">{{erro.documents.cpf}}</span>
				</div>
			</div>

			<!-- Inserir celular/whatsapp -->
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="whatsAlugar">Celular/Whatsapp:</label>
				<i class="fa fa-whatsapp"></i>
				<input  v-on:keyup="mascaraTELEFONE('whats')" v-bind:class="{'erroInput': erro.telephones.whats}" v-model="globalForm.telephones.whats" type="text" class="input-text" name="whatsAlugar" id="whatsAlugar" value=""> 
				
				<div v-if="erro.telephones.whats" class="text-center alert alert-danger">
					<span class="erro">{{erro.telephones.whats}}</span>
				</div>
			</div>
			<!-- Inserir sexo -->
			<!-- <div v-if="globalForm.person_type == 'F'" class="col-md-4 col-xs-12 form-linha">
				<label for="sexoAlugar">Sexo:</label>
				<select v-bind:class="{'erroInput': erro.pf_data.sexo}" v-model="globalForm.pf_data.sexo" name="sexoAlugar" class="padraoSelect">
					<option v-for="sex in sexo" :value="sex.id" v-bind:key="sex.id">{{sex.name}}</option>
				</select>
				
				<div v-if="erro.pf_data.sexo" class="text-center alert alert-danger">
					<span class="erro">{{erro.pf_data.sexo}}</span>
				</div>
			</div>  -->
		</div>

		<!-- <div  v-if="globalForm.person_type == 'F'" class="row">
			
			// Inserir RG
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="rgAlugar">RG:</label>
				<i class="sl sl-icon-doc"></i>
				<input  v-on:keyup="mascaraRg()" v-model="globalForm.documents.rg" type="text" class="input-text" name="rgAlugar" v-bind:class="{'erroInput': erro.documents.rg}" id="rgAlugar" value="">
				
				<div v-if="erro.documents.rg" class="text-center alert alert-danger">
					<span class="erro">{{erro.documents.rg}}</span>
				</div>
			</div>

			// Inserir data de expedição RG
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="datargAlugar">Data de expedição do RG:</label>
				<i class="sl sl-icon-doc"></i>
				<input v-bind:class="{'erroInput': erro.documents.dataExpedicaoRg}" v-model="globalForm.documents.dataExpedicaoRg" type="date" class="input-text" name="datargAlugar" id="datargAlugar" value="">
				
				<div v-if="erro.documents.dataExpedicaoRg" class="text-center alert alert-danger">
					<span class="erro">{{erro.documents.dataExpedicaoRg}}</span>
				</div>
			</div>

			//  Inserir CPF
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="cpfAlugar">CPF:</label>
				<i class="sl sl-icon-doc"></i>
				<input v-on:keyup="mascaraCpf()" v-on:blur="verificacoes('cpf')" v-bind:class="{'erroInput': erro.documents.cpf}" v-model="globalForm.documents.cpf" type="text" class="input-text" name="cpfAlugar" id="cpfAlugar" value="">

				<div v-if="erro.documents.cpf" class="text-center alert alert-danger">
					<span class="erro">{{erro.documents.cpf}}</span>
				</div>
			</div> //
		</div> -->

		<!-- <div v-else class="row">
			
			//Pegar CNPJ 
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="cnpj">CNPJ:</label>
				<i class="sl sl-icon-doc"></i>
				<input v-on:keyup="mascaraCnpj" v-model="globalForm.documents.cnpj"  type="text" class="input-text" name="cnpj" id="cnpj" value=""/>
				
				<div v-if="erro.documents.cnpj" class="text-center alert alert-danger">
					<span class="erro">{{erro.documents.cnpj}}</span>
				</div>
			</div>

			// Pegar IE 
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="inscEstad">Inscrição estadual:</label>
				<i class="sl sl-icon-doc"></i>
				<input v-model="globalForm.documents.inscricaoEstadual" type="text" class="input-text"   name="inscEstad" id="inscEstad" value=""/>
				
				<div v-if="erro.documents.inscricaoEstadual" class="text-center alert alert-danger">
					<span class="erro">{{erro.documents.inscricaoEstadual}}</span>
				</div>
			</div>

			// Pegar Inscrição Municipal
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="inscMun">Inscrição Municipal:</label>
				<i class="sl sl-icon-doc"></i>
				<input v-bind:class="{'erroInput': erro.documents.inscricaoMunicipal}" v-model="globalForm.documents.inscricaoMunicipal" type="text" class="input-text" name="inscMun" id="inscMun" value="">
			</div>                             
		</div> -->

		<!-- <div  v-if="globalForm.person_type == 'F'" class="row">

			// Inserir CNH
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="cnAlugar">CNH:</label>
				<i class="sl sl-icon-doc"></i>
				<input v-bind:class="{'erroInput': erro.documents.cnh}" v-model="globalForm.documents.cnh" type="text" class="input-text" name="cnAlugar" id="cnhAlugar" value="">
				
				<div v-if="erro.documents.cnh" class="text-center alert alert-danger">
					<span class="erro">{{erro.documents.cnh}}</span>
				</div>
			</div>

			// Inserir data de nascimento
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="nascimentoAlugar">Data de Nascimento:</label>
				<i class="sl sl-icon-doc"></i>
				<input v-bind:class="{'erroInput': erro.pf_data.dataNascimento}" v-model="globalForm.pf_data.dataNascimento" type="date" class="input-text" name="nascimentoAlugar" id="nascimentoAlugar" value="">
				
				<div v-if="erro.pf_data.dataNascimento" class="text-center alert alert-danger">
					<span class="erro">{{erro.pf_data.dataNascimento}}</span>
				</div>
			</div>

			//Inserir nacionalidade 
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="nacionaAlugar">Nacionalidade:</label>
				<select v-bind:class="{'erroInput': erro.pf_data.nacionalidadeId}" v-model="globalForm.pf_data.nacionalidadeId" name="nacionaAlugar" class="padraoSelect">
					<option  v-for="nac in nacionalidades" :value="nac.id" :selected="nac.name == 'BRASILEIRO' ? 'selected' : ''" v-bind:key="nac.id">{{nac.name}}</option>
				</select>
				
				<div v-if="erro.pf_data.nacionalidadeId" class="text-center alert alert-danger">
					<span class="erro">{{erro.pf_data.nacionalidadeId}}</span>
				</div>
			</div>

		</div> -->

		<!-- <div v-else class="row">
			
			// Inserir nome para contato 
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="nomeContato">Nome contato:</label>
				<i class="sl sl-icon-doc"></i>
				<input v-bind:class="{'erroInput': erro.pj_data.nomeContato}" v-model="globalForm.pj_data.nomeContato" type="text" class="input-text" name="nomeContato" id="nomeContato" value="">
				
				<div v-if="erro.pj_data.nomeContato" class="text-center alert alert-danger">
					<span class="erro">{{erro.pj_data.nomeContato}}</span>
				</div>
			</div>

			// Pegar data de fundação 
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="dataFunda">Data Fundação:</label>
				<i class="sl sl-icon-doc"></i>
				<input v-bind:class="{'erroInput': erro.pj_data.dataFund}" v-model="globalForm.pj_data.dataFund" type="date" class="input-text" name="dataFunda" id="dataFunda" value="">
				
				<div v-if="erro.pj_data.dataFund" class="text-center alert alert-danger">
					<span class="erro">{{erro.pj_data.dataFund}}</span>
				</div>
			</div>
			
			// Pegar ramo de atividade
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="ramoAtivi">Ramo Atividade:</label>
				<i class="sl sl-icon-doc"></i>
				<input v-bind:class="{'erroInput': erro.pj_data.ramo}" v-model="globalForm.pj_data.ramo" type="text" class="input-text" name="ramoAtivi" id="ramoAtivi" value="">
				
				<div v-if="erro.pj_data.ramo" class="text-center alert alert-danger">
					<span class="erro">{{erro.pj_data.ramo}}</span>
				</div>
			</div>  

		</div> -->

		<!-- <div  v-if="globalForm.person_type == 'F'" class="row">

			// Inserir profissão 
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="profissaoAlugar">Profissão:</label>
				<select v-bind:class="{'erroInput': erro.pf_data.profissaoId}" v-model="globalForm.pf_data.profissaoId" name="profissaoAlugar" class="padraoSelect">
					<option v-for="prof in profissao" :value="prof.id" v-bind:key="prof.id">{{prof.name}}</option>
				</select>
				
				<div v-if="erro.pf_data.profissaoId" class="text-center alert alert-danger">
					<span class="erro">{{erro.pf_data.profissaoId}}</span>
				</div>
			</div>

			// Inserir estado civil
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="estadocivilAlugar">Estado Civil:</label>
				<select v-bind:class="{'erroInput': erro.pf_data.estadoCivilId}" v-model="globalForm.pf_data.estadoCivilId" name="estadocivilAlugar" class="padraoSelect">
					<option v-for="estC in estadoCivil" :value="estC.id" v-bind:key="estC.id">{{estC.name}}</option>
				</select>
				
				<div v-if="erro.pf_data.estadoCivilId" class="text-center alert alert-danger">
					<span class="erro">{{erro.pf_data.estadoCivilId}}</span>
				</div>
			</div>

		</div> -->

		<!-- <h3 class="titleCadastro">Informações de endereço</h3> -->

		<!-- <div class="row">
			
			// Inserir CEP
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="cepAlugar">CEP:</label>
				<i class="sl sl-icon-compass"></i>
				<input v-on:keyup="validaCep();mascaraCep()"  v-bind:class="{'erroInput': erro.addresses.cep}" v-model="globalForm.addresses.cep" type="text" class="input-text" name="cepAlugar" id="cepAlugar" value="">
				
				<div v-if="erro.addresses.cep" class="text-center alert alert-danger">
					<span  class="erro">{{erro.addresses.cep}}</span>
				</div>
			</div>

		</div> -->

		<!-- <div class="row">
			
			//Inserir Rua 
			<div class="col-md-6 col-xs-12 form-linha">
				<label for="ruaAlugar">Rua:</label>
				<i class="sl sl-icon-location"></i>
				<input v-bind:class="{'erroInput': erro.addresses.logradouro}" v-model="globalForm.addresses.logradouro" type="text" class="input-text" name="ruaAlugar" id="ruaAlugar" value="">     
				
				<div v-if="erro.addresses.logradouro" class="text-center alert alert-danger">
					<span class="erro">{{erro.addresses.logradouro}}</span>
				</div>
			</div>

			// Inserir numero 
			<div class="col-md-2 col-xs-12 form-linha">
				<label for="numAlugar">Nº:</label>
				<i class="sl sl-icon-location"></i>
				<input   v-bind:class="{'erroInput': erro.addresses.numero}" v-model="globalForm.addresses.numero" type="text" class="input-text" name="numAlugar" id="numAlugar" value="">        
				
				<div v-if="erro.addresses.numero" class="text-center alert alert-danger">
					<span class="erro">{{erro.addresses.numero}}</span>
				</div>
			</div>

			// Inserir complemento 
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="compleAlugar">Complemento:</label>
				<i class="sl sl-icon-location"></i>
				<input  v-model="globalForm.addresses.complemento" type="text" class="input-text" name="compleAlugar" id="compleAlugar" value="">
			</div>
		</div>     -->
			
		<!-- <div class="row">
			
			// Pegar o bairro
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="bairroAlugar">Bairro:</label>
				<i class="sl sl-icon-location"></i>
				<input  v-bind:class="{'erroInput': erro.addresses.bairro}" v-model="globalForm.addresses.bairro" type="text" class="input-text" name="bairroAlugar" id="bairroAlugar" value="">   
				
				<div v-if="erro.addresses.bairro" class="text-center alert alert-danger">
					<span class="erro">{{erro.addresses.bairro}}</span>
				</div>
			</div>

			// Pegar o estado
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="estAlugar">Estado:</label>
				<select v-on:change="trocaCity()" v-model="globalForm.addresses.uf" name="estAlugar" class="padraoSelect">
					<option v-for="state in estados" :value="state.uf" v-bind:key="state.id">{{state.uf}}</option>
				</select>  
				
				<div v-if="erro.addresses.uf" class="text-center alert alert-danger">
					<span class="erro">{{erro.addresses.uf}}</span>
				</div>
			</div>

			// Pegar a cidade 
			<div class="col-md-4 col-xs-12 form-linha">
				<label for="cidaAlugar">Cidade:</label>
				<select v-model="globalForm.addresses.cidade" name="cidaAlugar" class="padraoSelect">
					<option v-for="city in cidades" :value="city.id" v-bind:key="city.id">{{city.name}}</option>
				</select>   
				
				<div v-if="erro.addresses.cidade" class="text-center alert alert-danger">
					<span class="erro">{{erro.addresses.cidade}}</span>
				</div>
			</div>
		</div>    -->

		<!-- <h3 class="titleCadastro">Informações de contato</h3> -->

		<!-- <div class="row">
			
			//Pegar celular/whatsapp 
			<div class="col-md-6 col-xs-12 form-linha">
				<label for="whatsAlugar">Celular/Whatsapp:</label>
				<i class="fa fa-whatsapp"></i>
				<input  v-on:keyup="mascaraTELEFONE('whats')" v-bind:class="{'erroInput': erro.telephones.whats}" v-model="globalForm.telephones.whats" type="text" class="input-text" name="whatsAlugar" id="whatsAlugar" value=""> 
				
				<div v-if="erro.telephones.whats" class="text-center alert alert-danger">
					<span class="erro">{{erro.telephones.whats}}</span>
				</div>
			</div>

			// Pegar telefone(opcional)
			<div class="col-md-6 col-xs-12 form-linha">
				<label for="telAlugar">Telefone (opcional):</label>
				<i class="sl sl-icon-phone"></i>
				<input v-on:keyup="mascaraTELEFONE('tel')" v-model="globalForm.telephones.telefone" type="text" class="input-text" name="telAlugar" id="telAlugar" value=""> 
			</div>

		</div> -->

		<!-- <h3 class="titleCadastro">Acesso</h3>

		<div class="row">
			
			// Criar senha
			<div class="col-md-6 col-xs-12 form-linha">
				<label for="passAlugar">Senha:</label>
				<i class="sl sl-icon-key"></i>
				<input  v-bind:class="{'erroInput': erro.password}" v-model="globalForm.password" type="text" class="input-text" name="passAlugar" id="passAlugar" value="">
				
				<div v-if="erro.password" class="text-center alert alert-danger">
					<span class="erro">{{erro.password}}</span>
				</div>
			</div>

			//Confirmar senha
			<div class="col-md-6 col-xs-12 form-linha">
				<label for="confirmpassAlugar">Confirma a senha:</label>
				<i class="sl sl-icon-key"></i>
				<input v-bind:class="{'erroInput': erro.password}" v-model="confirma_senha" type="text" class="input-text" name="confirmpassAlugar" id="confirmpassAlugar" value="">

				<div v-if="erro.password" class="text-center alert alert-danger">
					<span class="erro">{{erro.password}}</span>
				</div>
			</div>

		</div> -->

		<!-- <h3 class="titleCadastro">Upload de documentos</h3> -->

		<!-- <div class="row">
			upload foto do rg
			<div class="col-md-6 col-xs-12 form-linha">
				<label for="fotoRG">Enviar foto do RG</label><br/>
				<input type="file" v-bind:class="{'erroInput': !img2 && triggered }" name="fotoRG" id="fotoRG" ref="myFiles" @change="uploadFoto('fotoRG'); update2()">
			</div>

			<div class="col-md-6 col-xs-12 form-linha">
				<div v-if="!img2 && triggered" class="text-center alert alert-danger">
					<span class="erro">Nenhuma foto enviado!</span>
				</div>
			</div>
		</div> -->
			
		<!-- <br/> -->

		<!-- <div class="row">
			upload foto do cpf
			<div class="col-md-6 col-xs-12 form-linha">
				<label for="fotoCPF">Enviar foto CPF</label><br/>
				<input type="file" v-bind:class="{'erroInput': !img3 && triggered }" name="fotoCPF" id="fotoCPF" ref="myFiles" @change="uploadFoto('fotoCPF'); update3()">
			</div>

			<div class="col-md-6 col-xs-12 form-linha">
				<div v-if="!img3 && triggered" class="text-center alert alert-danger">
					<span class="erro">Nenhuma foto enviado!</span>
				</div>
			</div>
		</div> -->

		<!-- <br/> -->

		<!-- <div class="row">
			upload foto comprovante de endereço
			<div class="col-md-6 col-xs-12 form-linha">
				<label for="fotoEndereco">Enviar foto comprovante de endereço</label>
				<input type="file" v-bind:class="{'erroInput': !img4 && triggered }" name="fotoEndereco" id="fotoEndereco" ref="myFiles" @change="uploadFoto('fotoEndereco'); update4()">
			</div>

			<div class="col-md-6 col-xs-12 form-linha">
				<div v-if="!img4 && triggered" class="text-center alert alert-danger">
					<span class="erro">Nenhuma foto enviado!</span>
				</div>
			</div>
		</div> -->

		<!-- <br/> -->

		<!-- <div class="row">
			upload foto certidão de nascimento
			<div class="col-md-6 col-xs-12 form-linha">
				<label for="fotoCertidao">Enviar foto certidão de nascimento</label>
				<input type="file" name="fotoCertidao" v-bind:class="{'erroInput': !img5 && triggered }" id="fotoCertidao" class="myFiles" @change="uploadFoto('fotoCertidao'); update5()">
			</div>

			<div class="col-md-6 col-xs-12 form-linha">
				<div v-if="!img5 && triggered" class="text-center alert alert-danger">
					<span class="erro">Nenhuma foto enviado!</span>
				</div>
			</div>

		</div> -->

		<p class="pull-right" v-if="requisicao_feita == 0">
			<a v-on:click="enviaForm()" id="botaoCadastraAlugar" class="button botaoPadrao">Cadastrar</a>
		</p>

		<load v-if="loading"></load>
		
		<br/><br/><br/>
		<div class="text-center">
			<p v-if="msg" class="alert alert-danger">Verifique o preenchimento dos campos obrigatórios!</p>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import load from '../globais/Load.vue';
	export default {
		name: 'alugar',
		data(){
			return {
				erro: this.validForm.getFormUser_global(),
				globalForm: this.validForm.getFormUser_global(),
				nacionalidades: this.consomeJSON.nacionalidades(),
				sexo: this.consomeJSON.sexo(),
				profissao : this.consomeJSON.profissao(),
				estadoCivil : this.consomeJSON.estadoCivil(),
				estados: this.consomeJSON.cidades(),
				cidades: '',
				sucesso: '',
				loading: false,
				msg: false,
				// img1: false,
				// img2: false,
				// img3: false,
				// img4: false,
				// img5: false,
				triggered: false,
				foto : '',
				file: '',
				requisicao_feita : 0,
				confirma_senha: ''
			}
		},
		components:{
			load
		},
		methods:{
			enviaForm: function(){
				this.globalForm.foto = this.file;
				this.triggered = true;
				var validacaoForm = this.validForm.validacaoForm_userGlobal(
					this.globalForm,
					this.erro.email,
					this.erro.documents.cpf
				);
				this.erro = validacaoForm;
				// if(!(this.img1 && this.img2 && this.img3 && this.img4 && this.img5)){
				// 	this.msg = true;
				// }
				// else{
					this.msg = false;
					if (validacaoForm.qtd_error == 0) {
						this.formValid("cadastroUser", this.globalForm, true);
						// if (this.confirma_senha == this.globalForm.password)
						// {
						// 	this.requisicao_feita = 1;
						// }
						// else
						// {
						// 	console.log('Passando aqui, porque as senhas não batem....');
						// 	this.erro.password = "As senhas não batem!";
						// }
					}
				// }
				//  this.globalForm = this.validForm.getFormUser_global();/** RESETA FORM **/
			},
			validaCep(){
				var cep = this.globalForm.addresses.cep.replace('-',"");
				console.log(cep);
				if(cep.length == 8)
					this.formValid('cep',cep);
			},
			mascaraCep(){
				this.globalForm.addresses.cep = this.validForm.mascaraCep(this.globalForm.addresses.cep);
			},
			trocaCity: function(){
				if(this.globalForm.addresses.uf)
				{
					for(var key in this.estados){
						if(this.estados[key].uf == this.globalForm.addresses.uf){
							this.cidades = this.estados[key].cidades;
							break;
						}
					}	
				}
			},
			recebeAjax(tipo){
				if(tipo == 'cep'){
					console.log(this.resposta);
					this.globalForm.addresses.logradouro = this.resposta.logradouro;
					this.globalForm.addresses.bairro = this.resposta.bairro;
					this.globalForm.addresses.uf = this.resposta.uf;
					this.trocaCity();
					for(var key in this.cidades){
						if(this.cidades[key].name.toLowerCase() == this.resposta.cidade.toLowerCase()){
							this.globalForm.addresses.cidade = this.cidades[key].id;
							break;
						}
					}
				}else if(tipo == 'cadastroUser'){}
			},
			verificacoes(tipo){
				switch(tipo){
					case 'email': this.formValid('email',this.globalForm.email);
								break;
					case 'cpf': this.formValid('cpf',this.globalForm.documents.cpf);
								break;
				}
			},
			getBase64_axios(base64){
				this.globalForm.base64imgs = [];  
				this.globalForm.base64imgs.push( base64 );
				console.log(this.globalForm.base64imgs); // prints the base64 strin
			},
			uploadFoto(elm){
				switch (elm) {
					case 'enviaFotoPerfil': this.img1 = true;break;
					case 'fotoRG': this.img2 = true; break;
					case 'fotoCPF': this.img3 = true; break;
					case 'fotoEndereco': this.img4 = true; break;
					case 'fotoCertidao': this.img5 = true; break;
				}
			},
			mascaraRg(){
				this.globalForm.documents.rg = this.validForm.mascaraRg(this.globalForm.documents.rg)
			},
			mascaraCpf(){
				this.globalForm.documents.cpf = this.validForm.mascaraCPF(this.globalForm.documents.cpf);
			},
			mascaraTELEFONE(type){
				if(type == 'whats')
					this.globalForm.telephones.whats = this.validForm.mascaraTel(this.globalForm.telephones.whats);
				else
					this.globalForm.telephones.telefone = this.validForm.mascaraTel(this.globalForm.telephones.telefone);
			},
			mascaraCnpj(){
				this.globalForm.documents.cnpj = this.validForm.mascaraCNPJ(this.globalForm.documents.cnpj)
			},
		},
		watch:{
			'foto': function(){
				this.getBase64(this.foto);
			}
		},
		created(){
			this.globalForm.pf_data.nacionalidadeId = 1;
			this.globalForm.group_id.push(this.validForm.alugar());
		},
		mounted(){
		}

}
</script>
