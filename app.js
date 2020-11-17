// ----------menu burger 
let  isFlipped = true
// creer un fonction de deux parametres 
  const afficherFenetre = (clickeBouton, fenetre) => {
    //   mettre un ecouteur 
    clickeBouton.addEventListener("click", ()=> {
        // mettre une condition qui permettre d'afficher et fermer le menu
        if(isFlipped){
            // afficher le menu 
            fenetre.classList.remove("afficheMenu")
          isFlipped=false
      }else{
        //   fermer la fenetre
        fenetre.classList.add("afficheMenu")
          isFlipped=true
      } 
      })   
  }

const menu = document.querySelector(".modalMenu")
const bouton = document.querySelector(".bouton")

const iconDown = document.querySelector(".elementSousMenu")
const sousMenu = document.querySelector(".afficheSousm")

const iconDown2 = document.querySelector(".elementSousMenu2")
const sousMenu2 = document.querySelector(".afficheSousm2")
// appeler la fonction afficherFenetre
afficherFenetre(bouton, menu)
afficherFenetre(iconDown, sousMenu)
afficherFenetre(iconDown2,sousMenu2)


// ----------modal le bienvenue 
// selection l'element 
const modal = document.querySelector("#main")
// creer une fonction qui permet d'afficher le modal 
const afficheModal = () =>{
    // afficher la fenetre 
    modal.classList.remove('afficheMenu')
}
// appeler la fonction afficheModal apres 1.5 s de l'ouverture de site 
setTimeout(afficheModal, 1500)
// selection le bouton qui permet de fermer le modal 
const boutonFermer = document.querySelector("#close-btn")
// mettre un ecouteur qui permet de fermer le modan en clickant sur le bouton 
boutonFermer.addEventListener("click", ()=> {
    modal.classList.add('afficheMenu')
});