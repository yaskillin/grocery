class ShoppingList {
  constructor() {
    this.groceries = [];
  }
  addItem(item) {
    this.groceries = [...this.groceries, item];
  }
  removeItem(item) {
    this.groceries = this.groceries.filter((grocery) => grocery !== item);
  }
  searchInGroceries(item) {
    return this.groceries.filter((grocery) =>
      grocery.toLowerCase().includes(item.toLowerCase())
    );
  }
  save() {
    localStorage.setItem('groceries', JSON.stringify(this.groceries));
    alert('Groceries saved to database !');
  }
  load() {
    if (localStorage.getItem('groceries')) {
      this.groceries = JSON.parse(localStorage.getItem('groceries'));
      alert('Groceries loaded from database !');
    } else {
      alert('Empty database !');
    }
  }
}
const myList = new ShoppingList();
const inputDOM = document.getElementById('input');
const searchInputDOM = document.getElementById('search');
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
searchInputDOM.addEventListener('keyup', () => {
  if (searchInputDOM.value !== '') {
    displayList(myList.searchInGroceries(searchInputDOM.value));
  } else {
    displayList();
  }
});
const displayList = (groceries) => {
  const groceriesLoop = groceries ? groceries : myList.groceries;
  grociesList.innerHTML = '';
  groceriesLoop.forEach((grocery) => {
    let newLi = document.createElement('li');
    newLi.classList.add('grocery-item');
    newLi.innerHTML = grocery;
    grociesList.appendChild(newLi);
  });
};
const saveData = () => {
  myList.save();
};
const loadData = () => {
  myList.load();
  displayList();
};
//# sourceMappingURL=script.js.map
