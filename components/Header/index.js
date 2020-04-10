// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
                    //Creat componet

 const hContainter = document.createElement('div')
 const spanDate = document.createElement('span')
     const hh1 = document.createElement('h1')
 const spanTemp = document.createElement('span')
                    
                                        //Class list Add
                    
hContainter.classList.add('header')
 spanDate.classList.add('date')
spanTemp.classList.add('temp')
                    
                                        //Text Content
                    spanDate.textContent = 'SMARCH 28, 2019'
hh1.textContent = 'Lambda Times'
 spanTemp.textContent = '98°'
                    
                                        //Add to Dom
                    
 hContainter.append(spanDate, hh1, spanTemp)
                    
return hContainter
          }
                    
const myHeader = document.querySelector('.header-container')
 myHeader.appendChild(Header())