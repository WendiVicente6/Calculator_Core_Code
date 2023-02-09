
let memory=[];
let  activeOperation=null;
let prevOperation=null;


const display=document.querySelector('#display');
//console.log(display.innerHTML)
//display.innerHTML='Wendi'

const ac=document.querySelector('#ac');

ac.addEventListener('click',()=>{
ac.innerHTML='AC';
display.innerHTML='0';
});

const sig=document.querySelector("#sig");

sig.addEventListener('click',()=>{
    const currentDisplay=display.innerHTML;
    let newdisplay=`${Number(currentDisplay)*-1}`;
    if(currentDisplay==='0'){
        newdisplay='-0';
    }
    display.innerHTML=newdisplay;
});

const percent=document.querySelector("#parcent");
percent.addEventListener('click',()=>{
    const currentDisplay=display.innerHTML;
    display.innerHTML=`${Number(currentDisplay)/100}`;
});

const dot=document.querySelector("#dot");

const decimalHandler=()=>{   
    const currentDisplay=display.innerHTML;
    if(currentDisplay.indexOf('.')>0)return;
    display.innerHTML=`${currentDisplay}.`;
};
dot.addEventListener('click',()=>decimalHandler());

//============================================ equal
const equal=document.querySelector('#equal');

const equalHandler=()=>{
    const operation=`${memory.join(' ')}${Number(display.innerHTML)}`;
    display.innerHTML=`${eval(operation)}`;
    memory=[];
    activeOperation=null;
    prevOperation=null;
};
equal.addEventListener('click',()=>equalHandler());

//============================================ operators
const div=document.querySelector('#div');
const mul=document.querySelector('#mul');
const sum=document.querySelector('#sum');
const sub=document.querySelector('#sub');

const operators=[{el:div,op:'/'},{el:mul,op:'*'},{el:sum,op:'+'},{el:sub,op:'-'}];

const setSelectedOperation=(elOp)=>{
    elOp.style.backgroundColor='#ffffff';
    elOp.style.color='#ee6c4d';
};

const setUnSelectedOperation=(elOp)=>{
    elOp.style.backgroundColor='#ee6c4d';
    elOp.style.color='#ffffff'
};

const operationHandler=(op,opEl)=>{
    setSelectedOperation(opEl)
    const currentDisplay=display.innerHTML;
    if(memory.length===0){
        memory.push(currentDisplay);
    }
    if(memory.length > 1){
        equalHandler();
        memory.push(Number(display.innerHTML))
    }
    memory.push(op)
    activeOperation=opEl;
    prevOperation=opEl;
    //console.log(memory);
    //console.log(op);
};


operators.forEach((oper)=>
    oper.el.addEventListener('click',()=>operationHandler(oper.op,oper.el))
);


const zero=document.querySelector("#zero");
const one=document.querySelector("#one");
const two=document.querySelector("#two");
const three=document.querySelector("#three");
const four=document.querySelector("#four");
const five=document.querySelector("#five");
const six=document.querySelector("#six");
const seven=document.querySelector("#seven");
const eighth=document.querySelector("#eighth");
const nine=document.querySelector("#nine");

const numbers=[zero,one,two,three,four,five,six,seven,eighth,nine];

const numbersHandler=(n)=>{
    if(prevOperation!==null){
        setUnSelectedOperation(prevOperation);
        display.innerHTML='';
        activeOperation=null;
    }

    ac.innerHTML='C';
    const currentDisplay=display.innerHTML;
    let newdisplay=`${display.innerHTML}${n}`;
    if(currentDisplay==='0'){
        newdisplay=n;
    }
    display.innerHTML=`${Number(newdisplay)}`;
};
                //elemento,indice
numbers.forEach((n,i)=>n.addEventListener('click',()=>numbersHandler(i))); //sobre el objeto hacer addeventlistener
