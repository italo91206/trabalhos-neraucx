{
  "--prepara-footer": component => {
    const btnOpenFooterMobile = document.querySelectorAll('.efs-btnOpenFooterMobile');
    const subMenuEFS = document.querySelector('.efs-footer-info-efs');
    const subMenuAjuda = document.querySelector('.efs-footer-info-ajuda');

    btnOpenFooterMobile.forEach((item) => {
      item.addEventListener('click', () => {
        var botaoClicado = item.innerText;

        if (botaoClicado == "EFS") {
          subMenuEFS.classList.toggle('efs-footer-open');
          item.children[1].classList.toggle('efs-arrow-rotate');
        }
        else {
          subMenuAjuda.classList.toggle('efs-footer-open');
          item.children[1].classList.toggle('efs-arrow-rotate');
        }
      });
    }   
  }
}