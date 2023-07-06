const previous=document.getElementById('previous');
const image=document.getElementById('image');
const next=document.getElementById('next');
const images=['image1.jpg','image2.jfif','image3.jpg'];
let value=0;


previous.addEventListener('click',function(){
value=(value-1+images.length)%images.length;
image.src=images[value];
});
next.addEventListener('click',function(){
    value=(value+1+images.length)%images.length;
    image.src=images[value];
    });