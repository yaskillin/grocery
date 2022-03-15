// Import stylesheets
import './style.css';
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<div>
    <h1>Shopping List</h1>
    <input placeholder="please add your item" id="itemInput" type="text"/> <button id="add" >add item</button>
    <ul id="itemList"></ul>
</div>`;
let itemInput = document.getElementById('itemInput') as HTMLInputElement;
const listItem = document.getElementById('itemList');
type Grocery = 'Pear' | 'Banana' | 'Ananas';
interface ShoppingListType {
  groceries: Grocery[];
}
class ShoppingList {
  groceries: string[] = [];

  addItem(item: string) {
    this.groceries = [...this.groceries, item];
  }

  removeItem(item: string) {
    this.groceries = this.groceries.filter((grocery) => grocery !== item);
  }
}

const myList = new ShoppingList();

const inputDOM = document.getElementById('input') as HTMLInputElement;
const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const grociesList = document.getElementById('groceries-list');

addButton.addEventListener('click', () => {
  if (inputDOM.value !== '') {
    myList.addItem(inputDOM.value);
    inputDOM.value = '';

    displayList();
    inputDOM.focus();
  } else {
    alert("You can't add an empty item");
  }
});

removeButton.addEventListener('click', () => {
  if (inputDOM.value !== '') {
    myList.removeItem(inputDOM.value);
    inputDOM.value = '';

    displayList();
    inputDOM.focus();
  } else {
    alert("You can't remove an empty item");
  }
});

const displayList = () => {
  grociesList.innerHTML = '';
  myList.groceries.forEach((grocery) => {
    let newLi = document.createElement('li');
    newLi.innerHTML = grocery;

    grociesList.appendChild(newLi);
  });
};
