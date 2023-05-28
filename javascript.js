/* 
- a <p> with red text that says “Hey I’m red!”
- an <h3> with blue text that says “I’m a blue h3!”
- a <div> with a black border and pink background color with the following elements inside of it:
- another <h1> that says “I’m in a div”
- a <p> that says “ME TOO!”
*/ 

const paraOne = document.createElement('p')

// Red <p> element:
  paraOne.classList.add('paraCSS');
  paraOne.textContent = 'I am red!';
  container.appendChild(paraOne);
  paraOne.style.color = 'red';
  paraOne.style.fontSize = '16px';


// blue <h3> element:

const h3 = document.createElement('h3')
h3.classList.add('h3style');
h3.textContent = 'I am a blue h3';
container.appendChild(h3);
h3.style.color = 'blue';

// <div> with a black border and pink background color:

const div = document.createElement('div')
div.classList.add = 'divStyle'
container.appendChild(div)
Object.assign(div.style, {
  border: "solid black 2px",
  backgroundColor: "pink",
  // padding: "50px"
})

// another <h1> that says “I’m in a div”
const h1 = document.createElement('h1')
h1.classList.add('h1Style')
h1.textContent = ('I am in a div')
div.appendChild(h1)

// another <h1> that says “I’m in a div”
const paraTwo = document.createElement('p')
// paraTwo.classList.add('')
paraTwo.textContent = ('ME TOO!')
div.appendChild(paraTwo)


