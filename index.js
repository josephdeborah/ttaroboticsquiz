const card = document.querySelectorAll(".card");
const loader = document.querySelector("#preloader")
const loader1 = document.querySelector("#preloader1")
let picked= document.querySelector(".picked")
const form = document.querySelector(".form")
const cardOverlay = document.querySelectorAll(".cardOverlay");
const inputField = document.querySelector('.SchoolName');
let schoolNameDisplay;
let cardOverlayP = document.querySelectorAll(".cardOverlayP")
const submit = document.querySelector(".submit")
let parentElement ;
let childVariable;
let stop;
let minusNo;
let childVariableChildren;   


    


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const schoolName = inputField.value;
        console.log("School Name:", schoolName);
        if (schoolName) {
            let p = document.createElement("p")
            p.textContent=schoolName
            console.log(p);
            schoolNameDisplay=p
            localStorage.setItem("schoolName", schoolName);
        } else {
        }
    });
});



//   function cardDisplayFunc() {
//     // if (stop) {
//     //     // childVariable.classList.add("display");
//     //     return;
//     // }

//     document.querySelector(".cardContainer").style.marginLeft = "0px";

//     cardOverlay.forEach((element2) => {
//         let childElement = element2;
//         childVariable = childElement;

//         if (this.contains(childVariable)) {
//             childVariableChildren = childVariable.children;
//             childVariable.classList.add("display");

//             const card = event.currentTarget;
//             // let projectTittle;
//             // const cardContent = childVariable.parentElement;

//             // const projectTittleArray = document.querySelectorAll(".projectTittleH5");
//             // projectTittleArray.forEach((e) => {
//             //     if (e.parentElement === cardContent) {
//             //         projectTittle = e.innerHTML;
//             //     }
//             // });

//             // // Locate the next sibling card elements and update their `cardOverlayP`
//             // const siblings = Array.from(card.parentElement.children).filter(
//             //     (sibling) => sibling !== card
//             // );

//             // siblings.forEach((sibling) => {
//             //     const overlayP = sibling.querySelector(".cardOverlayP");
//             //     if (overlayP) {
//             //         const currentValue = parseInt(overlayP.innerHTML, 10);
//             //         if (!isNaN(currentValue)) {
//             //             overlayP.innerHTML = currentValue - 1;
//             //         }
//             //     }
//             // });

//             card.classList.add("cardDisplay");

//             setTimeout(() => {
//                 let div = document.createElement("div");
//                 let p = document.createElement("p");
//                 p.classList.add("paragraph");
//                 p.innerHTML = `You picked ${projectTittle}`;
//                 card.classList.remove("cardDisplay");
//                 div.appendChild(p);
//                 div.appendChild(card);
//                 picked.appendChild(div);
//             }, 1000);
//         }
//     });
// }
     

function cardFunc() {
    card.forEach((element)=>{
        let parent = element
        parentElement=parent
        cardOverlay.forEach((e)=>{
            if (e.classList.contains("display")) {
                return;
            }
            
        })
        parentElement.addEventListener("click",cardDisplayFunc,{once:true} )
    })
}


function cardDisplayFunc() {
    if (stop) {
        childVariable.classList.add("display");
        
       return;
        
    }else{
    
    }
    
    document.querySelector(".cardContainer").style.marginLeft="0px"    
    cardOverlay.forEach((element2)=>{
            let childElement = element2
            childVariable=childElement
            if (this.contains(childVariable)) {
                    
                    childVariableChildren= childVariable.children ;
                
                    childVariable.classList.add("display");
                    const card = event.currentTarget; 
                    let projectTittle ;
                    let cardContent  =  childVariable.parentElement
                    const cardClone = card.cloneNode(true); 
                           // // Locate the next sibling card elements and update their `cardOverlayP`
                         
                        const siblingsAfterCard = Array.from(card.parentElement.children).filter((sibling) => {
                            console.log(sibling.compareDocumentPosition(card));
                            
                            return sibling !== card && sibling.compareDocumentPosition(card) & Node.DOCUMENT_POSITION_PRECEDING;
                        });
                        console.log(siblingsAfterCard);
                        
                                                
            siblingsAfterCard.forEach((sibling) => {
                const overlayP = sibling.querySelector(".cardOverlayP");
                if (overlayP) {
                    const currentValue = Number(overlayP.innerHTML);
                    if (!isNaN(currentValue)) {
                        overlayP.innerHTML = currentValue - 1;
                    }
                }
            });
                    let projectTittleArray = document.querySelectorAll(".projectTittleH5")
                    projectTittleArray.forEach((e)=>{
                    if (e.parentElement===cardContent) {
                        projectTittle=e.innerHTML
                        
                        
                    }
                    
                })
                let element = document.querySelector(".displayCardUnique")
                let nextSibling = element.parentNode.querySelectorAll('.displayCardUnique ~ *');
                      
                cardOverlayP.forEach((element)=>{
                    let  elementParent =  element.parentElement
                    let elementGrandParent = elementParent.parentElement
                    // console.log(elementGrandParent);
                    
                    
                    if (elementGrandParent===cardContent) {
                        let elementGrandParentLoop = elementGrandParent
                        for (let index = 0; index < nextSibling.length; index++) {
                                const arrayItems = nextSibling[index];
                                
                                if (nextSibling[index] === elementGrandParentLoop) {
                                    let needed = nextSibling[index]
                                    let indexSave = index - 2;
                                    
                                    
                                     for (let index2 = indexSave; index2 <= nextSibling.length; index2++) {
                                        let selected = nextSibling[index2]
                                        let cardOverlayNeeded = document.querySelectorAll(".cardOverlay")
                                        cardOverlayNeeded.forEach((e1)=>{

                                            if (e1.parentElement===selected) {
                                                // console.log(e);
                                                let cardOverlayPNeeded = document.querySelectorAll(".cardOverlayP")
                                                cardOverlayPNeeded.forEach((e2)=>{
                                                e2.classList.add("elementClass") 

                                                }) 
                                                                                
                                                
                                            }
                                            
                                        })
                                       
                                        
                                     }                                    
                                    
                                }
                                
                            }                        
                        
                    }
                    
                    
                                       
                })
                card.classList.add('cardDisplay');
                setTimeout(()=>{
                    // cardContent.classList.add('cardDisplay');
                    // let div = document.createElement("div");
                    // let p = document.createElement("p");
                    // p.classList.add("paragraph");
                    // p.innerHTML=`you picked  ${projectTittle}`;
                    // div.appendChild(p)
                    //     div.appendChild(cardClone)
                    //    picked.appendChild(div)
                    let div = document.createElement("div");
                    let p = document.createElement("p");
                    p.classList.add("paragraph");
                    p.innerHTML=`you picked  ${projectTittle}`;
                    card.classList.remove("cardDisplay")
                    div.appendChild(p)
                        div.appendChild(card)
                       picked.appendChild(div)
                },9000)
              
                // cardContent.classList.add('cardDisplay');
                //     let div = document.createElement("div");
                //     let p = document.createElement("p");
                //     p.classList.add("paragraph");
                //     p.innerHTML=`you picked  ${projectTittle}`;
                //     div.appendChild(p)
                //         div.appendChild(cardClone)
                //        picked.appendChild(div)
                    // stop=true
            }
           
        })
        
    
        // if (minusNo) {
        //     let operator = document.querySelectorAll(".elementClass")
        //     console.log(operator);
        //     operator.forEach((e3)=>{
        //            Number(e3.innerHTML)
               
        //         if (Number(childVariableChildren.innerHTML) < e3.innerHTML) {
        //             e3.innerHTML-=1
        //             childVariableChildren.innerHTML+=1
        //             console.log(childVariableChildren);
                    
                    
        //         }
                
                
                
        //     })
            
        //    }
}

cardFunc()



window.addEventListener("load",function(){
    loader.style.display="none";
    form.style.margin="40vh auto"
    
})





 