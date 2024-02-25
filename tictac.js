let audioturn=new Audio('tink.wav')
let playtune=new Audio('playtune.mp3')
let turn2='x'
let imgbox= document.querySelector('imgbox')
let line=document.querySelector('.line')
let img= document.getElementsByTagName('img')[0]
let isgameover = false

// function to change the turn
const changeturn=()=>{
    return turn2==='x'?'0':'x'
}
// function to check for a win
const checkwin=()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 3, 4, 0],
        [3, 4, 5, 3, 11, 0],
        [6, 7, 8, 3, 18, 0],
        [0, 3, 6, -6, 9, 90],
        [1, 4, 7, 3, 9, 90],
        [2, 5, 8, 13, 9, 90],
        [0, 4, 8, 3, 10, 33],
        [2, 4, 6, 6, 10, 145]
        
    ];

    // wins.forEach
// Assuming you have defined 'wins' and 'boxtexts' somewhere in your code.
// ---------------------wincase
wins.forEach((e) => {
  const [a, b, c, x, y, deg] = e;

  const textA = boxtexts[a].innerText;
  const textB = boxtexts[b].innerText;
  const textC = boxtexts[c].innerText;

  if (textA === textB && textB === textC && textA !== "") {
    // Someone won
    document.querySelector('.info').innerText = textA + ' Won';
    document.querySelector('.line').style.width = '23vw';
    line.style.transform = `translate(${x}vw, ${y}vw) rotate(${deg}deg)`;
    isgameover = true;
    line.style.display = 'block';
    console.log('Winner:', textA);
    img.style.width = '200px';
    reset.style.display = 'block';
  } else if (textA !== "" && textB !== "" && textC !== "") {
    // It's a draw
    document.querySelector('.info').innerText = 'Draw';
    isgameover = true;
  }
});
}

// game logic
// playtune.play();


let boxes=document.getElementsByClassName('box')
Array.from(boxes).forEach((ele)=>{
let boxtext=ele.querySelector('.boxtext')

ele.addEventListener('click',()=>{
    if(boxtext.innerText===''){
        boxtext.innerText=turn2
        turn2 = changeturn()
        audioturn.play()
        checkwin()
        if(!isgameover){
        document.getElementsByClassName('info')[0].innerText='Turn For' + turn2 }
    }
})
})


// -----------resetbuttton
let reset=document.getElementById('reset')
let boxtext=document.querySelectorAll('.boxtext')
reset.addEventListener('click',()=>{
    Array.from(boxtext).forEach((e)=>{
        e.innerText=''
        img.style.width='0px'
        reset.style.display='none'
        line.style.display='none'
        
    })
})
