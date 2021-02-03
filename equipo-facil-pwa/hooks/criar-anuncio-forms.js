{
    '--criar-anuncio-etapa-1': component => {
    
        const valido = validarDados([
            {
                seletor: 'input[name="name"]',
                validador: v => v.length > 1
            },
            {
                seletor: 'input[name="categories"]',
                validador: v => v.length > 0
            },
            {
                seletor: 'input[name="ano_fabricacao"]',
                validador: v => v.length === 4
            },
            {
                seletor: 'input[name="marca_equipo"]',
                validador: v => (component.$$globalState.marcas || []).map(m => m.label).includes(v)
            },
            {
                seletor: 'input[name="modelo_equipo"]',
                validador: v => (component.$$globalState.modelos || []).map(m => m.label).includes(v)
            },
        ])

        if (!valido) return component.$toast('Preencha os campos em vermelho').error

        var categories = []
        var checkboxes = document.querySelectorAll('input[name="categories[]"]:checked')

        for (var i = 0; i < checkboxes.length; i++) {
            categories.push(checkboxes[i].value)
        }

        carregarCampos(true)
        component.$setGlobalState('carregando', true)

        component.$bridge('call', async fetch => {
            try {
                const api = await fetch('/catalog/step1/');
                const post = await api.post('', {
                    "name": document.querySelector('input[name="name"]').value,
                    "categories": categories.concat([ document.querySelector('input[name="category"]').value ]),
                    "modelo_equipo" :   (component.$$globalState.modelos || []).filter(m => m.label === document.querySelector('input[name="modelo_equipo"]').value)[0].value, 
                    "ano_fabricacao":  document.querySelector('select[name="ano_fabricacao"]').value,
                    "marca_equipo" :  (component.$$globalState.marcas || []).filter(m => m.label === document.querySelector('input[name="marca_equipo"]').value)[0].value
                });

                component.$setGlobalState('produtoCriando', post.data.product)
                component.$router.push({ name: 'criar-anuncio-informacoes', query: { product: post.data.product.entity_id } })
            } catch (error) {
                console.error(error)
                if (error.response) {
                    if (error.response.data) {
                        component.$toast(error.response.data.error_message || 'Erro desconhecido, tente novamente').error
                    } else {
                        component.$toast('Erro desconhecido, tente novamente').error
                    }
                } else {
                    component.$toast('Erro desconhecido, tente novamente').error
                }
                
            } finally {
               carregarCampos(false)
                component.$setGlobalState('carregando', false)
            }
        })
    },









    '--criar-anuncio-etapa-2': component => {
        const valido = validarDados([
            {
                seletor: 'input[name="id_product"]',
                validador: v => +v > 0
            },
            {
                seletor: 'input[name="description"]',
                validador: v => v.length > 0
            },
            {
                seletor: 'input[name="condicao_equipo"]:checked',
                validador: v => +v > 0
            },
            {
                seletor: 'input[name="weight"]',
                validador: v => +v > -1 && v.length > 0
            },
            {
                seletor: 'select[name="weight_type"]',
                validador: v => v.length > 0
            },
            {
                seletor: 'input[name="width"]',
                validador: v =>+v > -1 && v.length > 0
            },
            {
                seletor: 'input[name="height"]',
                validador: v =>+v > -1 && v.length > 0
            },
            {
                seletor: 'input[name="length"]',
                validador: v =>+v > -1 && v.length > 0
            },
            {
                seletor: 'select[name="color_equipo"]',
                validador: v => v.length > 0 && v.includes('#')
            },
            {
                seletor: 'input[name="estoque"]',
                validador: v => +v > -1 && v.length > 0
            },
        ])

        if ((document.querySelector('input[name="file[]"]').files || []).length <= 0) {
            return component.$toast('Por favor, adicione pelo menus uma foto ou vídeo').error
        }

        if (!valido) return component.$toast('Preencha os campos em vermelho').error

        carregarCampos(true)
        component.$setGlobalState('carregando', true)

        const formData = new FormData()
        const data = {
            "id_product": document.querySelector('input[name="id_product"]').value,
            "description": document.querySelector('textarea[name="description"]').value,
            "condicao_equipo": document.querySelector('input[name="condicao_equipo"]:checked').value,
            "weight": document.querySelector('input[name="weight"]').value,
            "weight_type": document.querySelector('select[name="weight_type"]').value,
            "width": document.querySelector('input[name="width"]').value,
            "height": document.querySelector('input[name="height"]').value,
            "length": document.querySelector('input[name="length"]').value,
            "color_equipo": document.querySelector('select[name="color_equipo"]').value,
            "estoque": document.querySelector('input[name="estoque"]').value,
        }

        Object.keys(data).forEach(name => {
            formData.append(name, data[name])
        })

        formData.append('file[]', document.querySelector('input[name="file[]"]').files[0], document.querySelector('input[name="file[]"]').value)

        component.$bridge('call', async fetch => {
            try {
                const api = await fetch('/catalog/step2/');
                const post = await api.post('', formData, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                });

                component.$setGlobalState('produtoCriando', post.data.product)
                component.$router.push({ name: 'criar-anuncio-precificacao', query: { product: post.data.product.entity_id } })
            } catch (error) {
                console.error(error)
                if (error.response) {
                    if (error.response.data) {
                        component.$toast(error.response.data.error_message || 'Erro desconhecido, tente novamente').error
                    } else {
                        component.$toast('Erro desconhecido, tente novamente').error
                    }
                } else {
                    component.$toast('Erro desconhecido, tente novamente').error
                }
                
            } finally {
                carregarCampos(false)
                component.$setGlobalState('carregando', false)
            }
        })
    },







    '--troca-pessoa': (component, el) => {
        component.$setGlobalState('pessoaTipo', el.value)
    },







    '--inicia-etapa-3': component => {
        component.$setGlobalState('novaConta', false)
        component.$setGlobalState('pessoaTipo', 'pf')
        component.$setGlobalState('contas', [])
        setTimeout(() => {
            document.querySelector('select[name="people_type"]').value = 'pf'
        }, 700)
    },
   
}