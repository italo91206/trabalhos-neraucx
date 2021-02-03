{
    '--carregar-contas': component => {
       component.$setGlobalState('contas', [])
       component.$bridge('call', async fetch => {
           const api = await fetch('/vendedor/listbankaccounts/');
           const gete = await api.get('',);

           component.$setGlobalState('contas', gete.data.bank_accounts || [])
       })
   },







    '--criar-nova-conta-bancaria': component => {
       const valido = validarDados([
           {
               seletor: 'select[name="paymentbank"]',
               validador: v => v.length > 0
           },
           {
               seletor: 'input[name="paymentaccount"]',
               validador: v => v.length > 0
           },
           {
               seletor: 'input[name="paymentagency"]',
               validador: v => v.length > 0
           },
           {
               seletor: 'input[name="document"]',
               validador: v => v.length > 0
           },
           {
               seletor: 'input[name="payment_account_type"]',
               validador: v => v.length == 2
           },
           {
               seletor: 'input[name="paymentowner"]',
               validador: v => v.length > 0
           },

       ])

       if (!valido) return component.$toast('Preencha os campos em vermelho').error

       carregarCampos(true)
       component.$setGlobalState('carregando', true)

       component.$bridge('call', async fetch => {
           try {
               const api = await fetch('/vendedor/registerbank/');
               const post = await api.post('', {
                   "paymentbank": document.querySelector('select[name="paymentbank"]').value,
                   "paymentaccount": document.querySelector('input[name="paymentaccount"]').value,
                   "paymentagency": document.querySelector('input[name="paymentagency"]').value,
                   "paymentowner": document.querySelector('input[name="paymentowner"]').value,
                   "document": document.querySelector('input[name="document"]').value,
                   "payment_account_type": document.querySelector('input[name="payment_account_type"]').value,
                   "set_main_account": true,
               });

               console.log('post', post)

               component.$hook('--carregar-contas', component, () => {})
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
}