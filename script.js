"use strict";

const addBtns = document.querySelectorAll('.add-btn:not(.solid)');
const saveItemBtns = document.querySelectorAll('.solid');
const addItemContainers = document.querySelectorAll('.add-container');
const addItems = document.querySelectorAll('.add-item');
const listOfColumns = document.querySelectorAll('.drag-item-list');

let updatedOnLoad = false;
let draggedItem;
let currentColumn;

const data = {
  backLogList: [],
  progressList: [],
  completeList: [],
  onHoldList: []
};

function getSavedColumns() {
  if (localStorage.getItem('backLogList')) {
    for(const column in data) {
      data[column] = JSON.parse(localStorage[column])
    }
  } else {
    for(const column in data) {
      data[column] = ['Work on projects', 'Get some rest', 'Go on working']
    }
  }
}

function updateSavedColumns() {
  for(const column in data) {
    localStorage.setItem(column, JSON.stringify(data[column]))
  }
}

function createEl(columnEl, column, item, index) {
  const el = document.createElement('li');
  el.classList.add('drag-item');
  el.textContent = item;
  el.draggable = true;
  el.setAttribute('ondragstart', 'drag(event)');

  columnEl.appendChild(el);
}

// render lists
updateDOM()

function updateDOM() {
  if(!updatedOnLoad) {
    getSavedColumns();
  }

  for(const column in data) {
    const ul = document.getElementById(column);
    ul.textContent = "";
    data[column].forEach((item, index) => {
      createEl(ul, 0, item, index)
    })
  }

  updatedOnLoad = true;
  updateSavedColumns();
}

//  Update arrays after dropping an item
function updateArrays() {
  listOfColumns.forEach(({ id }) => {
    data[id] = [];

    const children = document.getElementById(id).children
    for(let i = 0; i < children.length; i++) {
      data[id].push(children[i].textContent);
    }
  })
  
  updateDOM();
}

// Drag func
function drag(event) {
  draggedItem = event.target;
}

function allowDrop(event) {
  event.preventDefault();
}

function dragEnter(column) {
  document.getElementById(column).classList.add('over');
  currentColumn = column;
}

// Dropping item in a column
function drop(id) {
  listOfColumns.forEach(column => {
    column.classList.remove('over');

    if(column.id === id) {
      column.appendChild(draggedItem)
    }
  })

  updateArrays();
}