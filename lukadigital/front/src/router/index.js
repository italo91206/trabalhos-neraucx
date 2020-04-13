import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/components/Index');
const UserLogin = () => import('@/components/UserLogin');
const EditarUser = () => import('@/components/paginaUser/EditaUser.vue');
const AgendaCorretor = () => import('@/components/paginaUser/AgendaCorretor.vue')
const AgendaUser = () => import('@/components/paginaUser/AgendaUser.vue')
const MeusImoveis = () => import('@/components/paginaUser/MeusImoveis.vue')
const CadastroImovel = () => import('@/components/paginaUser/CadastroImovel.vue')
const Pesquisa = () => import('@/components/Pesquisa.vue');
const Imovel = () => import('@/components/Imovel.vue');
const Indexadmin = () => import('@/components/admin/Indexadmin.vue');
const Paineladmin = () => import('@/components/admin/Painel.vue');
const Visitas = () => import('@/components/admin/visitas/IndexVisitas.vue');
const ImoveisAdmin = () => import('@/components/admin/imoveis/Indeximoveis.vue')
const IndexPessoas = () => import('@/components/admin/pessoas/IndexPessoas.vue')
const MeuPerfil = () => import('@/components/admin/MeuPerfil.vue')
const CriaImovel = () => import('@/components/admin/imoveis/Criaimovel.vue')
const Cadastrapessoa = () => import('@/components/admin/pessoas/Cadastrapessoa.vue')
const EditaImovel = () => import('@/components/paginaUser/EditaImovel.vue')
const EditaImovelAdmin = () => import('@/components/admin/imoveis/EditaImovelAdmin.vue')
const EditaPessoasAdmin = () => import('@/components/admin/pessoas/EditaPessoasAdmin.vue')
const UrlAgenda = () => import('@/components/recebe/UrlAgenda.vue')
const editaAgendaAdmin = () => import('@/components/admin/visitas/EditaAgendaAdmin.vue')
const rota = () => import('@/components/Rota.vue')
const editBlog = () => import('@/components/admin/blog/EditBlog.vue')
const indexBlog = () => import('@/components/admin/blog/IndexBlog.vue')
const criaBlog = () => import('@/components/admin/blog/CriaBlog.vue')
const blogPage = () => import('@/components/BlogPage.vue')
Vue.use(Router)
export default new Router({
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path: '/userLogin',
			name: 'userLogin',
			component: UserLogin
		},

		{
			path: '/editaUser',
			name: 'editarUser',
			component: EditarUser
		},

		{
			path: '/agendaCorretor/:pagina',
			name: 'agendaCorretor',
			component: AgendaCorretor
		},

		{
			path: '/agendaUser/:pagina',
			name: 'agendaUser',
			component: AgendaUser
		},

		{
			path: '/meusImoveis/:pagina',
			name: 'meusImoveis',
			component: MeusImoveis
		},
		{
			path: '/cadastroImovel',
			name: 'cadastroImovel',
			component: CadastroImovel
		},
		{
			path: '/pesquisa/:pagina',
			name: 'Pesquisa',
			component: Pesquisa
		},
		{
			path: '/imovel/:rotulo',
			name: 'Imovel',
			component: Imovel
		},
		{
			path: '/admin',
			name: 'Indexadmin',
			component: Indexadmin
		},
		{
			path: '/admin/painel',
			name: 'Paineladmin',
			component: Paineladmin
		},
		{
			path: '/admin/visitas/:pagina',
			name: 'Visitas',
			component: Visitas
		},
		{
			path: '/admin/imoveis/:pagina',
			name: 'ImoveisAdmin',
			component: ImoveisAdmin
		},
		{
			path: '/admin/pessoas/:pagina',
			name: 'IndexPessoas',
			component: IndexPessoas
		},
		{
			path: '/admin/meuperfil',
			name: 'MeuPerfil',
			component: MeuPerfil
		},
		{
			path: '/admin/criaimovel',
			name: 'Criaimovel',
			component: CriaImovel
		},
		{
			path: '/admin/cadastrapessoa',
			name: 'Cadastrapessoa',
			component: Cadastrapessoa
		},
		{
			path: '/editaImovel/:id',
			name: 'EditaImovel',
			component: EditaImovel
		},
		{
			path: '/admin/editaImovelAdmin/:id',
			name: 'EditaImovelAdmin',
			component: EditaImovelAdmin
		},
		{
			path: '/admin/EditaPessoasAdmin/:id',
			name: 'EditaPessoasAdmin',
			component: EditaPessoasAdmin
		},
		{
			path: '/urlAgenda/:random/:data/:idcorretor',
			name: 'UrlAgenda',
			component: UrlAgenda
		},

		{
			path: '/admin/editaAgendaAdmin/:id',
			name: 'editaAgendaAdmin',
			component: editaAgendaAdmin
		},
		{
			path: '/rota',
			name: 'rota',
			component: rota
		},

		{
			path: '/admin/editBlog/:id',
			name: 'editBlog',
			component: editBlog
		},

		{
			path: '/admin/indexBlog/:pagina',
			name: 'indexBlog',
			component: indexBlog
		},
		{
			path: '/admin/criaBlog/',
			name: 'criaBlog',
			component: criaBlog
		},

		{
			path: '/blogPage/:pagina',
			name: 'blogPage',
			component: blogPage
		},


	]
});
/*
const router = new Router({mode: 'history', routes: routes})

router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})


router.beforeResolve((to,from,next) => {
  next()
})

router.afterEach((to, from) => {
 NProgress.done();
 next();
})
export default router
*/