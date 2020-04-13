<template>
  	<div class="criaBlog">
    	<topo></topo>
     	<div class="w-100">
			<b-row>
        		<div class="col-md-2 ajusteColuna" >
             		<sidebar></sidebar>
        		</div> 
        		<div v-on:click="showMenu()" class="exibirPainelMob">ABRIR MENU</div>
            	
				<b-row>
            
					<div class="content-painel content-visitas">
						<h3 class="text-center titlesAdmin">Criação de postagem</h3>
						<load v-if="loading"></load>
						<h3 class="titleCadastro">
							Geral
						</h3>
						
						<div class="row">
							<div class="col-md-6 col-xs-12 form-linha">
								<label for="enviaFotoAlugar">Imagem Principal:</label><br>
								<input type="file" name="enviaFotoAlugar" ref="myFiles_main" @change="uploadFoto_main" placeholder="Escolha uma foto" title=""/>
							</div>

							<div class="col-md-12">
								<br>
								<img v-bind:src="globalForm.main_img" style="" />
							</div>
						</div>

						<br>
						<div class="col-md-12 col-xs-12 form-linha">
							<label for="nomeCompletoAlugar">Titulo:</label> 
							<input v-bind:class="{'erroInput': erro.titulo}" type="text" name="nomeCompletoAlugar" v-model="globalForm.titulo" id="nomeCompletoAlugar" value="" class="inputPadraoAdmin inputSentIMGBLOG"> 
							<span v-if="erro.titulo" class="erro">{{erro.titulo}}</span>
						</div>
							
						<br>
						<div class="col-md-12 col-xs-12 form-linha">
							<label for="nomeCompletoAlugar">Descrição:</label> 
							<b-form-textarea id="descricao"
							v-model="globalForm.descryption"
							placeholder="Descrição do post"
							:rows="3"
							:max-rows="6" v-bind:class="{'erroInput': erro.descryption}">
							</b-form-textarea >
							<span v-if="erro.titulo" class="erro">{{erro.descryption}}</span>
						</div>
							
						<br><br>
						<h3 class="titleCadastro">Conteúdo</h3>

						<div class="row">
							<div class="col-md-6 col-xs-12 form-linha">
								<label for="enviaFotoAlugar">Inserir Imagem no texto:</label><br>
								<input type="file" name="enviaFotoAlugar" ref="myFiles" @change="uploadFoto" placeholder="Escolha uma foto" title="" multiple/>
							</div>
								
						</div>
							
						<br>
						<div class="row">
							<div class="blogImagesText">
								<img v-for="(imagem,index) in globalForm.imgs" v-on:click="insertImage(imagem)" v-bind:key="index" v-bind:src="urlApi+imagem" class="img-responsive img-blog_upload" />
							</div>
						</div>

						<br>
						<tinymce v-bind:class="{'erroInput': erro.content}" id="d1" v-model="globalForm.content" :other_options="options" ref="tm"></tinymce>
						<span v-if="erro.titulo" class="erro">{{erro.content}}</span>
						
						<br><br>
						<p class="pull-right">
							<a v-if="requisicao_feita == 0" id="botaoLoginAdmin" v-on:click="enviaForm()" class="button botaoPadraoAdmin">Cadastrar</a>
						</p>
							
						<div class="alert alert-success" v-if="message">
							Cadastrado com sucesso!
						</div>
					</div>
        		</b-row> 
    		</b-row>
		</div>
 	</div>
</template>

<script>
import topo from '../globais/Topoadmin.vue';
import sidebar from '../globais/Sidebarleftadmin.vue';
import load from '../../globais/Load.vue';

import js from '../../../skins/js/pt_BR.js'

export default {
  name: 'criaBlog',
   components:{
   topo,sidebar,load
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      globalForm: this.validForm.getForm_blog(),
      erro: this.validForm.getForm_blog(),
      controlMenu: 0,
      loading: false,
      limite_pag: 10,
      results: [],
      controle_paginas: false, 
      data: '',
      options: {
                language_url: js,
                entity_encoding: "raw" //This url points to location of persian language file.
            },
      file: '',
      base64imgs: '',
      urls_images: [],
      requisicao_feita : 0,
      message: false,
      type: '',
      file_main: ''
      
    }
  },

  mounted(){
  /*   var aux = {};
     aux.pagina = this.$route.params.pagina;
     aux.limite = this.limite_pag;
     console.log(this.$route.params.pagina)
     this.admin('alimenta_lista',aux,'Imovel')
      //  this.admin('listaImoveis');*/


  
  },
  created(){

  },
  methods:{
        enviaForm: function(){
            this.globalForm.owner_id = this.getIDLocalSt();
            var validar = this.validForm.validaForm_blog(this.globalForm);
            this.erro = validar;
            var aux = this.globalForm.content;
            this.globalForm.content = aux.replace(/["]/g, "'");
            if(this.erro.qtd_error == 0)
                this.blog('insertPost',this.globalForm);
            
        },
        showMenu: function(){
           if(this.controlMenu == 0){
             jQuery('.ajusteColuna').show("slow");
             jQuery('.exibirPainelMob').html('FECHAR MENU')
             this.controlMenu = 1;
          }else{
             jQuery('.ajusteColuna').hide("slow");
             jQuery('.exibirPainelMob').html('ABRIR MENU')
             this.controlMenu = 0;
          }
       },
      redireciona: function(local){
           this.$router.push({name: local});
       },
       geraTeste(){
              console.log(this.$refs.tm.editor)
              this.$refs.tm.editor.setContent('<img src="https://i.stack.imgur.com/jdPtC.png?s=32&g=1"/>')
       },
      getBase64_axios(base64){   

        if(this.type == 'text'){
          this.blog('uploadImage',base64);
        }
        else if(this.type == 'main'){
            this.globalForm.main_img = base64;

          }
      },

     uploadFoto(){
        this.type = 'text';
         this.file = this.$refs.myFiles.files;
         console.log(this.file);
       for(var key in this.file){
          this.getBase64( this.file[key]);
          
         }
        
        
       

    },
    afterUpload(url){
      this.$refs.tm.editor.insertContent('<img src="'+this.urlApi+url+'"/>');
      this.globalForm.imgs.push(url)
      console.log(this.globalForm.imgs);
    },
    insertImage(data){

      this.$refs.tm.editor.insertContent('<img src="'+this.urlApi+data+'"/>')
    },
    uploadFoto_main(){
         this.type = 'main'
         this.file = this.$refs.myFiles_main.files;
         console.log(this.file);
         this.getBase64( this.file[0]);
        
        
       

    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
