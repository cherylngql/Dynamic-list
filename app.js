const toggleList = document.querySelector('#toggleList');
const listDiv = document.querySelector('div');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const listUl = document.querySelector('ul');
const lis = listUl.children;


function attachListItemButton(li) {
  let up = document.createElement('button');
    up.textContent = 'Up';
    up.className = 'up';
    li.appendChild(up);
  
  let down = document.createElement('button');
    down.textContent = 'Down';
    down.className = 'down';
    li.appendChild(down);
  
  let remove = document.createElement('button');
    remove.textContent = 'Remove';
    remove.className = 'remove';
    li.appendChild(remove);
}

for (let i = 0; i < lis.length; i++) {
  attachListItemButton(lis[i]);
}
hideButtons(lis);

  listUl.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      if (event.target.className === 'up') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        let prevLi = li.previousElementSibling;
        if (prevLi) {
          ul.insertBefore(li,prevLi)
        }
      }
      if (event.target.className === 'down') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        let nextLi = li.nextElementSibling;
        if (nextLi) {
          ul.insertBefore(nextLi,li)
        }
      }
      if (event.target.className === 'remove') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
      }
    }
    hideButtons(lis);
  });


toggleList.addEventListener('click',()=>{
  if (listDiv.style.display == 'none') {
  toggleList.textContent = 'Hide list';
  listDiv.style.display = 'block';
  } else {
  toggleList.textContent = 'Show list';
  listDiv.style.display = 'none';
  }
});

descriptionButton.addEventListener('click', () => descriptionP.innerHTML = descriptionInput.value + ': ');

addItemButton.addEventListener('click', () => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButton(li);
  ul.appendChild(li);
  addItemInput.value = '';
  hideButtons(lis);
  
});

removeItemButton.addEventListener('click', () => {
  let ul = document.querySelector('ul');
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});

function hideButtons(lis) {
  const firstListItem = listUl.firstElementChild;
  const lastListItem = listUl.lastElementChild;
  for (let i = 0; i < lis.length; i++) {
    if (lis.length === 1) {
      if (lis[i].querySelector('button.up')) {
        lis[i].removeChild(lis[i].querySelector('button.up'))
      }
      if (lis[i].querySelector('button.down')) {
        lis[i].removeChild(lis[i].querySelector('button.down'))
      }
    } else {
    
      if (lis[i] === firstListItem) {
        while (lis[i].firstElementChild) {
          lis[i].removeChild(lis[i].firstElementChild)
        }
        attachListItemButton(lis[i]);
        const up = lis[i].querySelector('button.up');
        lis[i].removeChild(up);
      } 
      if (lis[i] === lastListItem) {
        while (lis[i].firstElementChild) {
          lis[i].removeChild(lis[i].firstElementChild)
        }
        attachListItemButton(lis[i]);
        const down = lis[i].querySelector('button.down');
        lis[i].removeChild(down);
      }
      if (lis[i] !== lastListItem && lis[i] !== firstListItem) {
        while (lis[i].firstElementChild) {
          lis[i].removeChild(lis[i].firstElementChild)
        }
        attachListItemButton(lis[i]);
      } 
    }
  }
}




