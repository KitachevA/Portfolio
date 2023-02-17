const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelector('.menu__close'),
      progress = document.querySelectorAll('#skill'),
      scale = document.querySelectorAll('.skills__progressbar-me');




      hamburger.addEventListener('click', ()=>{
        menu.classList.add('active');
      });

      closeMenu.addEventListener('click', ()=>{
            menu.classList.remove('active');
      });

     progress.forEach((item,i)=>{
            item.addEventListener('change',()=>{
                  scale[i].style.width = item.value;
            });
     });