// let h1Element = document.getElementById('intro-text')
// h1Element.firstChild.nodeValue ="changed to dummy content"
// h1Element.style.color = 'red'


// let pElements = document.getElementById('ptag')
// pElements.style.color ='green'


// let customeDiv = document.getElementsByClassName('custom-bg')

// for(let element of customeDiv){
//  element.style.backgroundColor ='blue';
//  element.style.color ='red';
 
// }

// let pElementInDivs1 = document.querySelectorAll('div  p')

// for(let element of pElementInDivs1){
//   element.style.fontWeight ='bold'
 
// }

// let pElementInDivs = document.querySelectorAll('div > p:not(div.custom-bg > p)')

// for(let element of pElementInDivs){
//   element.style.textDecoration ='underline'
 
// }


////////////////////


// let h1Element = document.getElementById('intro-text')
// let scriptele = document.querySelector('script')

// let olElement = document.createElement('ol')

// let liElement = document.createElement('li')
// let textVal = document.createTextNode('firstline') 

// liElement.appendChild(textVal)
// olElement.appendChild(liElement)

// // document.body.appendChild(olElement)
// // document.body.insertBefore(olElement, scriptele)

// h1Element.insertAdjacentElement('afterend', olElement)

//////////////////////////////////


// let topics = ['apple', 'banana', 'orange', 'kiwi']

// let h1Element = document.getElementById('intro-text')
// let olElement = document.createElement('ol')

// topics.forEach(function(text){
//    let li = document.createElement('li')
//    li.innerHTML = text;
//    olElement.appendChild(li)
// })


// h1Element.insertAdjacentElement('afterend', olElement)

/////////////////////////////////////////////////


// let topics = ['apple', 'banana', 'orange', 'kiwi']

// let h1Element = document.getElementById('intro-text')
// let scriptele = document.querySelector('script')
// let olElement = document.createElement('ol')

// topics.forEach(function(text){
//    let li = document.createElement('li')
//    li.innerHTML = text;
//    olElement.appendChild(li)
// })

 



// h1Element.insertAdjacentElement('afterend', olElement)


// let classEle = document.createElement('div')
// let pEle = document.createElement('p')
// pEle.textContent = "some dummy content";
// pEle.classList.add('ptagele')

// classEle.classList.add('test-1', 'test-2')
// classEle.appendChild(pEle)


// document.body.insertBefore(classEle, scriptele)



/////////////////////////////////////////

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="style.css" />
//     <title>Document</title>
//   </head>
//   <body>
    
//       <h1 id="intro-text">intro to the document object</h1>
//       <ul>

//       </ul>
  

//     <script>
        
//       let topics = ['apple', 'banana', 'orange', 'kiwi', "mango", "pineapple"]

//         let h1Element = document.getElementById('intro-text')
//         let ulElement = document.querySelector('ul')
  
//         let olElement = document.createElement('ol')

//         topics.forEach(function(text){
//            let li = document.createElement('li')
//            li.innerHTML = text;
//            olElement.appendChild(li)
//         })
    
//         let lastLi = olElement.childNodes[4]
//         lastLi.classList.add('mango')
//         lastLi.remove()
//         ulElement.appendChild(lastLi)

//         h1Element.insertAdjacentElement('afterend', olElement)


    

//     </script>
//   </body>
// </html>