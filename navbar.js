const btnToggle = document.querySelector(".btn-toggle");
const sidebarToggle = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar');

btnToggle.addEventListener("click",function(){
 sidebar.classList.toggle("show-sidebar")
})

sidebarToggle.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar')
})