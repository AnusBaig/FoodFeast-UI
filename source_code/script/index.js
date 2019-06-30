

let leftslider=document.querySelector('.leftslider');
let rightslider=document.querySelector('.rightslider');
let backgrounds=document.querySelectorAll('.foodtype__back');
let befores=document.querySelectorAll('.foodtype__before');
let first=0,second=1,third=2,fourth=3;

function clear()
{
   for(let i=0;i<backgrounds.length;i++)
   {
       backgrounds[i].style.display='none';
       befores[i].style.display='none';
   }
}

function startSlide()
{
    clear();

    backgrounds[1].style.display='block';
    backgrounds[1].style.gridColumn='2/3';      
    backgrounds[1].style.gridRow='2/-1';   

     befores[1].style.display='flex';       
     befores[1].style.gridColumn='2/3';       
     befores[1].style.gridRow='2/-1';
     
     backgrounds[2].style.display='block';
     backgrounds[2].style.gridColumn='3/4';      
     backgrounds[2].style.gridRow='2/-1';   
        
      befores[2].style.display='flex';       
      befores[2].style.gridColumn='3/4';       
      befores[2].style.gridRow='2/-1';

      backgrounds[0].style.display='block';
      backgrounds[0].style.gridColumn='1/2';      
      backgrounds[0].style.gridRow='2/-1'; 

      backgrounds[3].style.display='block';
      backgrounds[3].style.gridColumn='4/-1';      
      backgrounds[3].style.gridRow='2/-1'; 
     

}

leftslider.addEventListener('click',function(){

   

    clear();

    backgrounds[first].style.display='block';
    backgrounds[first].style.gridColumn='1/2';      
    backgrounds[first].style.gridRow='2/-1';
    first++;check();

    backgrounds[second].style.display='block';
    backgrounds[second].style.gridColumn='2/3';      
    backgrounds[second].style.gridRow='2/-1';   
    befores[second].style.display='flex';       
    befores[second].style.gridColumn='2/3';       
    befores[second].style.gridRow='2/-1';
    second++;check();

     
    backgrounds[third].style.display='block';
    backgrounds[third].style.gridColumn='3/4';      
    backgrounds[third].style.gridRpw='2/-1';
    befores[third].style.display='flex';       
    befores[third].style.gridColumn='3/4';       
    befores[third].style.gridRow='2/-1';
    third++;check();

    backgrounds[fourth].style.display='block';
    backgrounds[fourth].style.gridColumn='4/-1';      
    backgrounds[fourth].style.gridRow='2/-1';
    fourth++;check();
    
});

rightslider.addEventListener('click',function(){


    clear();

    backgrounds[first].style.display='block';
    backgrounds[first].style.gridColumn='1/2';      
    backgrounds[first].style.gridRow='2/-1';
    first--;check();

    backgrounds[second].style.display='block';
    backgrounds[second].style.gridColumn='2/3';      
    backgrounds[second].style.gridRow='2/-1';   
    befores[second].style.display='flex';       
    befores[second].style.gridColumn='2/3';       
    befores[second].style.gridRow='2/-1';
    second--;check();

    backgrounds[third].style.display='block';
    backgrounds[third].style.gridColumn='3/4';      
    backgrounds[third].style.gridRow='2/-1';   
    befores[third].style.display='flex';       
    befores[third].style.gridColumn='3/4';       
    befores[third].style.gridRow='2/-1';
    third--;check();

    backgrounds[fourth].style.display='block';
    backgrounds[fourth].style.gridColumn='4/-1';      
    backgrounds[fourth].style.gridRow='2/-1';
    fourth--;check();
     
});

function check()
{
    if (first>backgrounds.length-1)
    first=0;
    if (second>backgrounds.length-1)
    second=0;
    if (third>backgrounds.length-1)
    third=0;
    if (fourth>backgrounds.length-1)
    fourth=0;

    if (first<0)
    first=backgrounds.length-1;
    if (second<0)
    second=backgrounds.length-1;
    if (third<0)
    third=backgrounds.length-1;
    if (fourth<0)
    fourth=backgrounds.length-1;
}

startSlide();
