// 1. Selecting Elements
let heading1 = document.querySelector('h1');
let headings4 = document.querySelectorAll('h4');
let firstParagraph = document.getElementById('first-paragraph');
let specialElements = document.getElementsByClassName('special');
let allDivs = document.getElementsByTagName('div');

// 2. Manipulating Elements
heading1.innerText = "Updated Heading";
headings4.forEach(h4 => h4.style.color = 'blue');
if (firstParagraph) {
  firstParagraph.innerHTML = "<strong>This is the first paragraph.</strong>";
} else {
  console.error('Element with ID "first-paragraph" not found');
}
if (specialElements.length > 0) {
  specialElements[0].setAttribute('data-info', 'special-element');
} else {
  console.error('No elements with class "special" found');
}
if (allDivs.length > 0) {
  allDivs[0].classList.add('highlight');
} else {
  console.error('No div elements found');
}

// 3. Creating and Removing Elements
let newDiv = document.createElement('div');
newDiv.textContent = "This is a new div";
document.body.appendChild(newDiv);

let oldDiv = document.querySelector('.old-div');
if (oldDiv) {
  document.body.removeChild(oldDiv);
}

// 4. Event Handling
// Ensure the button exists and has the correct selector
let button = document.querySelector('#myButton');
if (button) {
  button.addEventListener('click', () => {
    alert('Button was clicked!');
  });
} else {
  console.error('Button not found');
}

let inputField = document.querySelector('input[name="username"]');
inputField.addEventListener('input', (event) => {
  console.log('Input value:', event.target.value);
});

// 5. Traversing the DOM
let parent = heading1.parentNode;
let children = parent.childNodes;
let firstChild = parent.firstChild;
let lastChild = parent.lastChild;
let nextSibling = heading1.nextSibling;
let previousSibling = heading1.previousSibling;

// 6. Styling Elements
heading1.style.fontSize = '2em';
heading1.classList.add('highlight');
if (specialElements.length > 0) {
  specialElements[0].style.backgroundColor = 'yellow';
}

// 7. Form Handling
let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submitted');
  form.reset();
});

let input = document.querySelector('input[name="username"]');
input.value = 'New Username';

// 8. Browser Object Model (BOM)
console.log(window.innerWidth);
console.log(navigator.userAgent);
console.log(screen.width);
console.log(history.length);
console.log(location.href);

// 9. Additional Examples

// Example: Adding a new list item to an unordered list
let ul = document.querySelector('ul');
let newListItem = document.createElement('li');
newListItem.textContent = 'New List Item';
ul.appendChild(newListItem);

// Example: Removing the last child of a list
let lastListItem = ul.lastChild;
if (lastListItem) {
  ul.removeChild(lastListItem);
}

// Example: Toggling a class on an element
let toggleButton = document.querySelector('#toggle-button');
toggleButton.addEventListener('click', () => {
  heading1.classList.toggle('hidden');
});

// Example: Changing the source of an image
let image = document.querySelector('img');
image.src = 'new-image.jpg';

// Example: Handling form input focus and blur events
inputField.addEventListener('focus', () => {
  console.log('Input field focused');
});
inputField.addEventListener('blur', () => {
  console.log('Input field lost focus');
});

// 10. Advanced Concepts

// Event Delegation
document.body.addEventListener('click', (event) => {
  if (event.target.matches('.delegated-button')) {
    console.log('Delegated button clicked');
  }
});

// Cloning Nodes
let clonedDiv = newDiv.cloneNode(true);
document.body.appendChild(clonedDiv);

// Handling Custom Events
let customEvent = new Event('customEvent');
document.body.addEventListener('customEvent', () => {
  console.log('Custom event triggered');
});
document.body.dispatchEvent(customEvent);

// Using dataset
let dataElement = document.querySelector('.data-element');
dataElement.dataset.info = 'Updated info';
console.log(dataElement.dataset.info);

// Advanced Traversal
let closestDiv = heading1.closest('div');
console.log(closestDiv);

let matches = heading1.matches('.highlight');
console.log(matches);

// Shadow DOM
let shadowHost = document.createElement('div');
let shadowRoot = shadowHost.attachShadow({ mode: 'open' });
shadowRoot.innerHTML = `<style>p { color: blue; }</style><p>Shadow DOM content</p>`;
document.body.appendChild(shadowHost);

// Mutation Observers
let targetNode = document.getElementById('first-paragraph');
let config = { attributes: true, childList: true, subtree: true };
let callback = function(mutationsList, observer) {
  for(let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      console.log('A child node has been added or removed.');
    }
    else if (mutation.type === 'attributes') {
      console.log('The ' + mutation.attributeName + ' attribute was modified.');
    }
  }
};
let observer = new MutationObserver(callback);
observer.observe(targetNode, config);

// Templates
let template = document.createElement('template');
template.innerHTML = `
  <style>
    .template-content { color: green; }
  </style>
  <div class="template-content">Template content</div>
`;
document.body.appendChild(template.content.cloneNode(true));

// Content Security Policy (CSP)
// Ensure that your script tags include the 'nonce' attribute and that your server sets the appropriate CSP headers.
// Example: <script nonce="random123">...</script>
// Server-side: Content-Security-Policy: script-src 'self' 'nonce-random123';