

const inputList = document.querySelector('.text');
const add = document.querySelector('.add-btn');
//const removeAll = document.querySelector('.remove');
const List = document.getElementById('list');
const form = document.getElementById('form');
const done = document.querySelector('.done');

let toDoList = [];
let  idList = 0;

const addDomElement= function(transaction){

    const item = document.createElement('li');

  
   item.innerHTML=`<span id="india" class="${transaction.classText}">${transaction.text}</span>
   <span><button class="add-btn done" onclick = "strikeList(${transaction.id})"><i class="fas fa-clipboard-check"></i></button>
   <button class="add-btn delete" onclick = "removeList(${transaction.id})"><i class="fas fa-trash-alt"></i></button></span>`;
   List.appendChild(item);
}; 
const init = function (){
    List.innerHTML = '';

    toDoList.forEach(addDomElement);
};
const strikeList = function(id){
    toDoList.map((transaction)=> {
        if(transaction.id === id){
              transaction.classText ="strike";
        }
        });
    init();
    };

const removeList = function(id){
toDoList = toDoList.filter((transaction)=> transaction.id != id);
init();
};

const removeAll = function (){
toDoList= [];
init();
};

add.addEventListener('click',(e) =>{
e.preventDefault();
    if(inputList.value !='')
    {
        document.querySelector('small').className = "small";
        idList++;
        const transaction ={
            id:idList,
            text:inputList.value,
            classText:"abc"
        };
        inputList.innerHTML='';
        console.log(transaction);

        addDomElement(transaction);

        toDoList.push(transaction);
    }
    else
    {

             document.querySelector('small').className = "smart";
    }
});


