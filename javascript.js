 document.addEventListener('click', () => {console.log("clicked!")})
/*
const para = document.querySelector('para')
const content = document.createElement('p');
const h3 = document.createElement('h3')
const div = document.createElement('div')
const h1 = document.createElement('h1')
const p2 = document.createElement('p2')

content.classList.add('p')
content.textContent = 'This is the glorious text-content!';
content.appendChild(content)

*/

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
/*
    <p>Hey I'm red!</p>
<h3>Hey I'm blue</h3>
<div class="div">
    <h1>I'm inside a div</h1>
    <p>ME TOO!</p>


</div>
*/