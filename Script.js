const gif=document.getElementById("gif");
const question=document.getElementById("question");
const text=document.getElementById("text");

const yes=document.getElementById("yesBtn");
const no=document.getElementById("noBtn");

let count=0;

const gifs=[
"tkthao219-peach.gif",
"peachandgoma-goma.gif",
"mitao-cat-mochi-mochi-cat.gif", // <-- agar filename alag hai to yahan exact naam likho
"cry.gif",
"goma-cat-kiss-goma-kiss.gif"
];

const messages=[
"Please choose one 🥺",
"Don't say No 😭",
"Think again ❤️",
"Pleaseeeee 😭💔",
"I'll cry... 😢"
];

no.addEventListener("mouseover",()=>{

count++;

let x=Math.random()*(window.innerWidth-150);
let y=Math.random()*(window.innerHeight-80);

no.style.position="fixed";
no.style.left=x+"px";
no.style.top=y+"px";

if(count<5){
gif.src=gifs[count];
text.innerHTML=messages[count];
}

yes.style.transform=`scale(${1+count*0.15})`;

});

yes.addEventListener("click",()=>{

document.body.innerHTML=`
<div style="display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:100vh;
background:#ffd6e7;
font-family:Arial;">

<img src="goma-cat-kiss-goma-kiss.gif" width="260">

<h1 style="color:#ff1493;margin-top:20px;">
Yayyy!! ❤️🥰
</h1>

<h2>I Love You Forever 💖</h2>

</div>
`;

});
