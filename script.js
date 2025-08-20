function apertou() {

  const menu = document.getElementById('menu-list');
  const logo = document.querySelector('.logo');
  const menuIcon = document.querySelector('.menu span'); 

  if (menu.style.display === "none" || menu.style.display === "") {
    
    menu.style.display = "block";
    logo.classList.add('open');
    menuIcon.textContent = "close";
    document.querySelector('.itens').classList.add('show');
  } else {

    menu.style.display = "none";
    logo.classList.remove('open');
    menuIcon.textContent = "menu";
    document.querySelector('.itens').classList.remove('show');
  }
}