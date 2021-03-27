"use strict";

const addBtns = document.querySelectorAll('.add-btn:not(.solid)');
const saveItemBtns = document.querySelectorAll('.solid');
const addItemContainers = document.querySelectorAll('.add-container');
const addItems = document.querySelectorAll('.add-item');

const itemLists = document.querySelectorAll('.drag-item-list');
const backLogList = document.getElementById('backlog-list');
const progressList = document.getElementById('progress-list');
const completeList = document.getElementById('complete-list');
const onHoldList = document.getElementById('on-hold-list');

let updatedOnLoad = false;
let draggedItem;

let backLogListArray = [];
let progressListArray = [];
let completeListArray = [];
let onHoldListArray = [];
let listArrays = [];

function getSavedColumns() {
  if (localStorage.getItem('backlogItems')) {
    backLogListArray = JSON.parse(localStorage.backlogItems);
    progressListArray = JSON.parse(localStorage.progressItems);
    completeListArray = JSON.parse(localStorage.completeItems);
    onHoldListArray = JSON.parse(localStorage.onHoldItems);
  } else {
    backLogListArray = ['Work on projects', 'Do something...'];
    progressListArray = ['Work on projects', 'Do something...'];
    completeListArray = ['Work on projects', 'Do something...'];
    onHoldListArray = ['Do something...'];
  }
}

function updateSavedColumns() {
  const arrays = [
    { array: backLogListArray, name: 'backlogItems' },
    { array: progressListArray, name: 'progressItems' },
    { array: completeListArray, name: 'completeItems' },
    { array: onHoldListArray, name: 'onHoldItems' }
  ];

  arrays.forEach(item => {
    localStorage.setItem(item.name, JSON.stringify(item.array))
  })
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

  backLogList.textContent = '';
  backLogListArray.forEach((item, index) => {
    createEl(backLogList, 0, item, index)
  });

  progressList.textContent = '';
  progressListArray.forEach((item, index) => {
    createEl(progressList, 0, item, index)
  });

  completeList.textContent = '';
  completeListArray.forEach((item, index) => {
    createEl(completeList, 0, item, index)
  });

  onHoldList.textContent = '';
  onHoldListArray.forEach((item, index) => {
    createEl(onHoldList, 0, item, index)
  });
}

// Drag func
function drag(event) {
  draggedItem = event.target;
  console.log(draggedItem)
}

function allowDrop(event) {
  event.preventDefault();
}

function dragEnter(column) {
  console.log(column)
}

// Dropping item in a column
function drop(event) {
  event.preventDefault();
}