const menuBurguer = document.querySelector(".menu-burguer")

const x = document.querySelector(".x")

const menuModal = document.querySelector(".container-menu"); 

const changeMenu = () => {

  if (menuModal.style.visibility === 'visible') {
    menuModal.style.visibility = 'hidden';
    menuBurguer.style.visibility = 'visible';
  } else {
    menuModal.style.visibility = 'visible';
     menuBurguer.style.visibility = 'hidden;'

  }
}

menuBurguer.addEventListener('click', changeMenu)

x.addEventListener('click', changeMenu)