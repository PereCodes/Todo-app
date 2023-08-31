// variables
var theme = document.getElementById("theme");
var addBtn = document.getElementById("add-btn")
var addItemInput = document.getElementById("addItem");
var itemsLeft = document.querySelector(".items-left span");
var todoList = document.querySelector('.content ul');
// 


// event listeners
theme.addEventListener('click', function(){
   document.querySelector('body').classList = [theme.checked ? 'theme-dark' : 'theme-light'];
});
addBtn.addEventListener('click', crtlAddItem);
addItemInput.addEventListener('keypress', function(event){
   if (event.keyCode === 13 || event.which === 13) {
      crtlAddItem();
 }
});

// add todo item
function crtlAddItem(){
   var InputValue = addItemInput.value;
   if (InputValue.length > 0) {
      var html = `<li class="flex drag-item">
      <label class="list-item">
        <input type="checkbox" name="todoItem">
        <span class="checkmark"></span>
        <span class="text">${InputValue}</span>
      </label>
     <button class="remove" type="button" name="remove"</button>
   </li>`
   document.querySelector(".content ul").insertAdjacentHTML('beforeend', html);
  }
  addItemInput.value = "";
  updateItemsCount(1);
}; 

function updateItemsCount(number) {
   itemsLeft.innerText = +itemsLeft.innerText + number;
}

// remove todo item
function removeTodoItem(del) {
   del.remove();
   updateItemsCount(-1);
}

todoList.addEventListener('click', function(event){
   if(event.target.classList.contains('remove')){
      removeTodoItem(event.target.parentElement)
   }
});

// clear comleted items

document.querySelector('.clear').addEventListener('click', () => {
   document.querySelectorAll('.list-item input[type="checkbox"]:checked').forEach(item => {
       removeTodoItem(item.closest('li'));
   });
});


// filter todolist items
   document.querySelectorAll(".filter input").forEach(radio =>{
      radio.addEventListener('change', function(event){
         filterTodoItems(event.target.id);
   });
 });

function filterTodoItems(id){
   var allItems = todoList.querySelectorAll("li");

   switch(id){
      case 'all':
         allItems.forEach(item =>{
            item.classList.remove("hidden");
         })
         break;
      case 'active':
         allItems.forEach(item =>{
            item.querySelector("input").checked ? item.classList.add("hidden") : item.classList.remove("hidden");
         })
         break;
      default:
         allItems.forEach(item =>{
            !item.querySelector("input").checked ? item.classList.add("hidden") : item.classList.remove("hidden");
         })
         break;
   }
};







