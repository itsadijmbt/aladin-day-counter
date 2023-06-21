const begibBTN= document.querySelector('.begin-btnbtn');
const endBTN= document.querySelector('.end-btnbtn');
const inputBOX1 =document.querySelector('.input-box1');
const inputBOX2 =document.querySelector('.input-box2');
const dataSubmission =document.querySelector('.submit-data-btn');
const display2page =document.querySelector('.intro-page');
const display3page =document.querySelector('.second-window');
const answerDisplay = document.querySelector('.rd');
const repeat =document.querySelector('.OnceMore')
let bbbtn =0;
let eeetn =0;
let answer=0;


repeat.addEventListener('click',()=>{
  display3page.style.display='none';
  display2page.style.display='flex';
  answer=0;
  inputBOX1.style.display='none';
  inputBOX1.style.display='none';
  
})


dataSubmission.addEventListener('click',display);

function display(){

const t =inputBOX1.value;
const start = t.split("-");
const d =inputBOX2.value;
const end = d.split("-");


display2page.style.display='none';
display3page.style.display='flex';

 const sday = parseInt(start[2]);
 const smonth = parseInt(start[1]);
 const syear = parseInt(start[0]);
 
 const eday=parseInt(end[2]);
 const emonth=parseInt(end[1]);
 const eyear=parseInt(end[0]);


const smalldaymonths=[2,4,6,9,11];
let testing_month_start=0;
let testing_month_end=0;


 for(const days of smalldaymonths)
 {
  if((smonth-1)>=days){testing_month_start++;
   
    }
 }
for(let i=0 ;i<5;++i)
 {
  if((emonth-1)>=smalldaymonths[i]){testing_month_end++;
  
 }
}
 const totaldaysCalculatedStart = parseInt(sday + (testing_month_start)*30 + ((smonth-1)-testing_month_start)*31 + (syear-1)*365); 

  
 const totaldaysCalculatedend = parseInt(eday + (testing_month_end)*30 + ((emonth-1) -(testing_month_end))*31 + (eyear-1)*365);

 answer = parseInt(totaldaysCalculatedend-totaldaysCalculatedStart);

 console.log(testing_month_start);
 console.log(testing_month_end);

 console.log(totaldaysCalculatedStart);
 console.log(totaldaysCalculatedend);
 console.log(answer);

 answerDisplay.textContent=answer +'days';
}

begibBTN.addEventListener('click',()=>{
  
  if(bbbtn%2===0)
  inputBOX1.style.display='block';
  else
  inputBOX1.style.display='none';
   
  bbbtn++;
})

endBTN.addEventListener('click',()=>{
  
  if(eeetn%2===0){
  inputBOX2.style.display='block';
}else{
  inputBOX2.style.display='none';}
  
  eeetn++;
 
  

})

