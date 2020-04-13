<template>
  	<div class="sidebar left">
    	<div class="my-account-nav-container">

			<ul class="my-account-nav">
				<li class="sub-nav-title">Menu</li>
				<li>
					<a v-on:click="redireciona('editarUser')" class="editarUser">
						<i class="sl sl-icon-user"></i> Minha conta
					</a>
				</li>
			</ul>

			<ul class="my-account-nav">
				<li class="sub-nav-title">Gestão de imóveis</li>
				<li v-if="in_array_grupo(dadosLog.group_id,validForm.corretor())">
					<a v-on:click="redireciona('agendaCorretor',1)" class="agendaCorretor">
						<i class="sl sl-icon-notebook"></i> Agenda(corretor)
					</a>
				</li>

				<li>
					<a v-on:click="redireciona('agendaUser',1)" class="agendaUser">
						<i class="sl sl-icon-notebook"></i> Agenda
					</a>
				</li>
				
				<li>
					<a v-on:click="redireciona('meusImoveis',1)" class="meuImovel">
						<i class="fa fa-home"></i> Meus imóveis
					</a>
				</li>

				<li>
					<a v-on:click="redireciona('cadastroImovel')">
						<i class="fa fa-home"></i> Cadastrar novo imóvel
					</a>
				</li>
			</ul>

      		<ul class="my-account-nav">
				<li>
					<a href>
						<i class="sl sl-icon-power"></i> Sair
					</a>
				</li>
      		</ul>
    	</div>
  	</div>
</template>

<script>
export default {
	name: "sidebarLeft",
	props: ["ativo"],
	components: {},
	data() {
		return {
			dadosLog: this.getUserLocalSt().dados
		};
	},
	mounted() {
		jQuery("." + this.ativo).css("font-weight", "bold");
	},
	methods: {
		redireciona: function(local, params = false) {
			if (!params) this.$router.push({ name: local });
			else this.$router.push({ name: local, params: { pagina: params } });
		}
	},
	beforeCreate() {
		this.validaUser_();
	}
};
</script>
