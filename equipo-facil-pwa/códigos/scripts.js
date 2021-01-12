// function handleModalMenu() {
//     const button = document.querySelector('#menu-header-bar')
//     const modal = document.querySelector('#modal-menu-user')
//     const modalNotification = document.querySelector('.pwa-modal-notification')
    
    
//     if(button.className === 'pwa-button-action-modal close') {
//         modal.style.display = 'none'
//         modalNotification.style.display = 'none'
//         document.body.classList.remove('looked')
//         button.classList.remove('close')
//         return
//     }

//     button.classList.add('close')
//     modal.style.display = 'flex'
//     document.body.classList.add('looked')
// }

function handleModalUserAccount() {
    const modal = document.querySelector('.menu-perfil-account')
    const buttonModalAccount = document.querySelector('#btn-account')
    const modalOpenAccount = buttonModalAccount.className === 'account'

    if (!modalOpenAccount) {
        modal.style.display = 'none'
        buttonModalAccount.classList.remove('active')
        return
    }

    modal.style.display = 'flex'
    buttonModalAccount.classList.add('active')
}