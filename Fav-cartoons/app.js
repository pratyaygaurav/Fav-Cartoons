const cartoons =
[
    {

        id:0,
        names:"Shinchan",
        work:"STUDENT",
        detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum neque tenetur modi laboriosam accusantium nam magnam unde dolores facilis odio!",
        photo:"./sinchan.jpg"
    },
    {
        id:1,
        names:"Kochikame",
        work:"POLICE OFFICER",
        detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum neque tenetur modi laboriosam accusantium nam magnam unde dolores facilis odio!",
        photo:"./kochikame.jpeg"
       
    },
    {
        

        
         id:2,
        names:"HageMaru",
        work:"STUDENT",
        detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum neque tenetur modi laboriosam accusantium nam magnam unde dolores facilis odio!",
        photo:"./hagemaru.jpg"
    
    },
    {

        id:3,
        names:"Oggy",
        work:"COCKROACH CATCHER",
        detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum neque tenetur modi laboriosam accusantium nam magnam unde dolores facilis odio!",
        photo:"./oggy.png"
    }
]

const lft = document.getElementById("left");
const rght = document.getElementById("right");
const bton = document.getElementById("btn");

const img = document.getElementById("image");
const nme = document.getElementById("name");
const opn = document.getElementById("occupation");
const dls = document.getElementById("details");

let current = 0;

lft.addEventListener("click",function()
{
    
    current--;
    if(current<0)
        current=3;
     img.src=cartoons[current].photo;
    nme.innerText = cartoons[current].names;
    opn.innerText = cartoons[current].work;
    dls.innerText = cartoons[current].detail;

})

rght.addEventListener("click",function()
{
    current++;
    if(current>3)
        current=0;
    img.src=cartoons[current].photo;
    nme.innerText = cartoons[current].names;
    opn.innerText = cartoons[current].work;
    dls.innerText = cartoons[current].detail;

})

bton.addEventListener("click",function()
{
    current = Math.floor(Math.random()*4);
    console.log(current);
    img.src=cartoons[current].photo;
    nme.innerText = cartoons[current].names;
    opn.innerText = cartoons[current].work;
    dls.innerText = cartoons[current].detail;
})