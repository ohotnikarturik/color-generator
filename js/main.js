
// to display greeting
let sayHello = () => {
  let helloTitle;
  setTimeout(() => {
    helloTitle = document.createElement('h3');
    helloTitle.setAttribute('class', 'hello-title');
    helloTitle.textContent = 'Hello! Let`s go to generate!!!';

    form.appendChild(helloTitle);

  }, 1500);

  setTimeout(() => {
    form.removeChild(helloTitle)
  }, 4000);

  setTimeout(() => {
    helloTitle = document.createElement('h3');
    helloTitle.setAttribute('class', 'hello-title__second');
    helloTitle.textContent = 'Do not be shy :)';

    form.appendChild(helloTitle);

  }, 4500);

  setTimeout(() => {
    form.removeChild(helloTitle)
  }, 6500);
};

sayHello();

//function to copy rgb color
let copyColor = (str) => {
  let elem = document.createElement('input');
  elem.value = str;
  body.appendChild(elem);
  elem.select();
  document.execCommand("copy");
  body.removeChild(elem);
};

//to clean children
let toCleanChildren = () => {
  let classOfLi = document.querySelectorAll('.hexa__item');
  classOfLi.forEach((elem) => {
    ul.removeChild(elem)
  })

};

//function to create rgb color
let hexaColor = () => {
  let hexaString = '0123456789adcdef';
  let hexaColor = '#';

  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * hexaString.length);
    hexaColor = hexaColor + hexaString[index]
  }

  return hexaColor;
};



let body = document.body;
let form = document.querySelector('#form');

let input = document.createElement('input');
input.setAttribute('class', 'input');
input.setAttribute('name', 'number')
input.setAttribute('class', 'input');
input.setAttribute('name', 'number');
input.setAttribute('placeholder', 'Enter the number greater than 5...');

let ul = document.querySelector('.hexa__list');

let btnGenerate = document.createElement('a');
btnGenerate.setAttribute('href', '#');
btnGenerate.textContent = 'Generate';
btnGenerate.setAttribute('class', 'btn btn__generate');

let btnStop = document.createElement('a');
btnStop.setAttribute('href', '#');
btnStop.textContent = 'Stop';
btnStop.setAttribute('class', 'btn btn__stop');


let mainTitle = document.createElement('h1');
mainTitle.setAttribute('class', 'main-title');
mainTitle.textContent = 'Hexadecimal Color Generator';

let subTitle = document.createElement('h5');
subTitle.setAttribute('class', 'subtitle');
subTitle.textContent = 'Colors change people emotions, so put meaningful colors in your site.';

let div = document.createElement('div');
div.setAttribute('class', 'form__field');


form.appendChild(mainTitle);
form.appendChild(div);
form.appendChild(subTitle);
div.appendChild(input);
div.appendChild(btnGenerate);
div.appendChild(btnStop);


//default loop to create 5 elements

let loop = (n) => {
  for (let i = 0; i < n; i++) {

    let li = document.createElement('li');
    li.setAttribute('class', 'hexa__item');

    let hexaNumber = document.createElement('span');
    hexaNumber.setAttribute('class', 'hexa__number');

    let btnCopy = document.createElement('a');
    btnCopy.setAttribute('href', '#');
    btnCopy.textContent = 'Copy';
    btnCopy.setAttribute('class', 'btn btn__copy');

    //to merge text rgb with background rgb colors
    let contentItemColor = () => {
      hexaNumber.textContent = li.style.backgroundColor = hexaColor()
    };
    contentItemColor();

    //to the implementation of the interval
    let startInterval = setInterval(() => {
      contentItemColor();
    }, 2000);

    //click to stop the interval
    btnStop.addEventListener('click', () => {
      clearInterval(startInterval);
    });

    ul.appendChild(li);
    li.appendChild(hexaNumber);
    li.appendChild(btnCopy);

    //click to generate and remove element(s) in one moment
    btnGenerate.addEventListener('click', () => {
      ul.appendChild(li);
      ul.removeChild(li);
    });

    //click to copy color
    btnCopy.addEventListener('click', () => {
      copyColor(hexaNumber.textContent);
    });

    let together = () => {
      li.addEventListener('mouseover', () => {
        clearInterval(startInterval);
        // li.style.margin = '5px';
        // li.style.borderRadius = '5px';
        // li.style.boxShadow = '2px 2px 20px 2px black';

        btnCopy.addEventListener('mouseover', () => {
          clearInterval(startInterval);
          // li.style.margin = '5px';
          // li.style.borderRadius = '5px';
          // li.style.boxShadow = '2px 2px 20px 2px black';
        });
      })


    };
    together();


    //to onmouseover and hold content
    li.addEventListener('mouseover', () => {
      clearInterval(startInterval);
      // li.style.margin = '5px';
      // li.style.borderRadius = '5px';
      // li.style.boxShadow = '2px 2px 20px 2px black';
    });


    //to onmouseout to continue interval
    li.addEventListener('mouseout', () => {
      // li.style.margin = '0px';
      // li.style.borderRadius = '0';
      // li.style.boxShadow = 'none'

      toCleanChildren(5);
      loop(5);


    });


  }
};

loop(5);


//click to create ... element(s)
btnGenerate.addEventListener('click', () => {
  let inputValue = input.value;

  if (inputValue === '') {
    alert('You should to put some number')
  } else if (inputValue === '0') {
    alert('You should to put some number over: 0')
  }

  //Loop for creating elements in ul container
  for (let i = 0; i < inputValue; i++) {

    let li = document.createElement('li');
    li.setAttribute('class', 'hexa__item');

    let hexaNumber = document.createElement('span');
    hexaNumber.setAttribute('class', 'hexa__number');

    //to merge text rgb with background rgb colors
    let contentItemColor = () => {
      hexaNumber.textContent = li.style.backgroundColor = hexaColor()
    };
    contentItemColor();

    //to the implementation of the interval
    let startInterval = setInterval(() => {
      contentItemColor();
    }, 2000);

    //click to stop the interval
    btnStop.addEventListener('click', () => {
      clearInterval(startInterval);
    });

    let btnCopy = document.createElement('a');
    btnCopy.setAttribute('href', '#');
    btnCopy.textContent = 'Copy';
    btnCopy.setAttribute('class', 'btn btn__copy');

    ul.appendChild(li);
    li.appendChild(hexaNumber);
    li.appendChild(btnCopy);


    //click to generate and remove element(s) in one moment
    btnGenerate.addEventListener('click', () => {
      ul.appendChild(li);
      ul.removeChild(li);
    });

    //click to copy color
    btnCopy.addEventListener('click', () => {
      copyColor(hexaNumber.textContent);
    });

    //to onmouseover and hold content
    li.addEventListener('mouseover', () => {
      clearInterval(startInterval);
      // li.style.margin = '5px';
      // li.style.borderRadius = '5px';
      // li.style.boxShadow = '2px 2px 20px 2px black';
    });

    //to onmouseout to continue interval
    li.addEventListener('mouseout', () => {
      // li.style.margin = '0px';
      // li.style.borderRadius = '0';
      // li.style.boxShadow = 'none'

      toCleanChildren(5);
      loop(inputValue);

    });

  }
});
































