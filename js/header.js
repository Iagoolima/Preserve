window.addEventListener('DOMContentLoaded', function() {
    var headerTop = document.getElementById('header_top');
    var headerBottom = document.getElementById('header_bottom');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
    function handleScroll() {
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
      if (scrollTop > headerTop.offsetHeight && windowWidth >= 768) {
        headerTop.style.display = 'none';
        headerBottom.style.top = '0';
      } else {
        headerTop.style.display = 'flex';
        headerBottom.style.top = headerTop.offsetHeight + 'px';
      }
    }
  
    handleScroll(); // Executa a função uma vez para definir o estado inicial
  
    window.addEventListener('scroll', handleScroll); // Adiciona o evento de rolagem
  
  });
  

//efeito em cima do header  


var header = document.getElementById("header");
var navigationHeader = document.getElementById("navigation_header")
var content = document.getElementById("content")
var showSidebar = false;

function toggleSidebar() {

    showSidebar = !showSidebar
    if (showSidebar) {

        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar'
        content.style.filter = 'blur(2px)'

    } else {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = ''
        content.style.filter = ''
    }
}

function closedSideBar() {
    if (showSidebar) {
        toggleSidebar();
    }


}
window.addEventListener('resize', function (event) {

    if (window.innerWidth > 768 && showSidebar) {
        toggleSidebar()
    }

});
$(document).ready(function () {
    if (window.location.hash) {
        window.location.hash = "";
    }
});

$(document).ready(function () {
    $('a.scroll-link').click(function (e) {
        e.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
        window.history.replaceState(null, null, window.location.pathname + window.location.search);
    });
});