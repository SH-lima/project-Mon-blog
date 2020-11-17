const menu = document.querySelector(".modalMenu")
const bouton = document.querySelector(".bouton")
let  isFlipped = true
bouton.addEventListener("click", ()=> {
  if(isFlipped){
     menu.classList.remove("afficheMenu")
    isFlipped=false
}else{
    menu.classList.add("afficheMenu")
    isFlipped=true
} 
})

const iconDown = document.querySelector(".elementSousMenu")
const sousMenu = document.querySelector(".afficheSousm")
iconDown.addEventListener("click", ()=> {
    if(isFlipped){
       sousMenu.classList.remove("afficheMenu")
      isFlipped=false
  }else{
      sousMenu.classList.add("afficheMenu")
      isFlipped=true
  } 
  })


  const iconDown2 = document.querySelector(".elementSousMenu2")
const sousMenu2 = document.querySelector(".afficheSousm2")
iconDown2.addEventListener("click", ()=> {
    if(isFlipped){
       sousMenu2.classList.remove("afficheMenu")
      isFlipped=false
  }else{
      sousMenu2.classList.add("afficheMenu")
      isFlipped=true
  } 
  })

const modal = document.querySelector("#main")
const afficheModal = () =>{
    modal.classList.remove('afficheMenu')
}
const boutonFermer = document.querySelector("#close-btn")
setTimeout(afficheModal, 1500)
boutonFermer.addEventListener("click", ()=> {
    modal.classList.add('afficheMenu')
});