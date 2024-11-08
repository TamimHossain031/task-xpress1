const items = document.querySelectorAll('.item');
const image = document.querySelector('.image-holder');
const outer = document.querySelector('.outer');
const bg_img = document.querySelector('.bg-img')
const hoverBg = document.querySelector('.hover-bg');
const box = document.querySelector('.box');
const allImages = document.querySelectorAll('.get-Image');

const allImagesSrc = Array.from(allImages).map(single=> single.src);



let time;
let dataAll;

items.forEach((item,index) =>{
    const newHover = document.createElement('div');
    newHover.classList.add('hovered');
    item.appendChild(newHover);
    newHover.addEventListener('mouseover',function(e){               
      document.querySelectorAll('.active').forEach(single => single.classList.remove('active'))                 
       
        const data = allImagesSrc[index];       
        hoverBg.style.top = `${index * 80}px`;     
      
        if(!item.classList.contains('active')){ 
            bg_img.classList.add('fadeOut');
            clearTimeout(time);
            item.classList.add('active');
            image.classList.remove('active');
            bg_img.classList.remove('active')
            time = setTimeout(()=>{            
                image.src = data ;
                bg_img.src = data;
                bg_img.classList.remove('fadeOut');
                bg_img.classList.add('active')
                image.classList.add('active');
               
            },200);
        }else{
            
        }      
        
    },true) 
  
}
   
)

const fade = () =>{
    outer.style.opacity = '1';
    image.style.opacity = '1';
   
}
window.addEventListener('load',()=>{
    fade()
})