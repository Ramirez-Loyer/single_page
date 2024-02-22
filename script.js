let listCat = [];

function initCategories () {
    listCat.push( new Categorie (1, "Smartphone", "téléphone"));
    listCat.push( new Categorie (2, "CSS", "avancé"));
    listCat.push( new Categorie (3, "Java", "débutant"));
}

function displayCategories() {
    //Je veux parcourir les categories pour les afficher dans mon HTML
    //je dois récupérer comme un pointeur sur la partie html dans laquelle je souhaite insérer
    const cat = document.getElementById("categories");
    cat.innerHTML = ' ';
    listCat.forEach( categorie => {
        cat.innerHTML += '<a href="#" onclick="notify(this) class="list-group-item"> ' + categorie.getName() + "</a>";
    });
    
    for (let categorie of listCat) {
        console.log(categorie);
    }
}

initCategories();
displayCategories();








/*
// Je stocke et je sélectionne
const form = document.getElementById('form'); 
console.log(form); 
const create = document.getElementById('create'); 
console.log(create); 
 
//L'élément fait des actions 
form.addEventListener('submit', function(e){
    e.preventDefault(); 
    //console.log('bouton cliqué'); 
    const createValue = create.value; 
    console.log(createValue); 


//---------------------Je gère l'affichage de la tâche (READ)-------------------------------
//A La validation du formuliare, je crée un élément HTML contenat la valeur renseignée et je l'affiche

//Je crée l'élément
let item = `
<div class="item"> 
    <p>${createValue}</p>
    <button class="btn-delete">
        <i class="fas fa-trash-alt"></i>
    </button>
    <button class="btn-approved">
        <i class="fas fa-check-circle"></i>
    </button>
</div>
`
const listItems = document.querySelector('.list-items');
console.log(listItems);

 // Je place tous les items dans listItems 
 listItems.innerHTML += item;

//----------------------Je gère la suppression de la tâche (DELETE)-------------------------------
//Au clic sur l'icone Supprimer la tâche est retiré de la page

//Je sélectionne tous les boutons btn-delete 
const btnDelete = document.querySelectorAll('.btn-delete');
console.log(btnDelete);


//Je supprime la tâche - Ac clic sur l'icone, l'article est supprimé
//J'ai besoin d'utiliser plusieurs éléments, j'utilise donc une boucle
btnDelete.forEach(i => {
console.log('btn-delete')

//Au clic sur bouton supprimer
i.addEventListener('click', function(){
    console.log('btn-delete cliqué');
    //J'enlève l'élément parent
    i.parentElement.remove();
});

});

//Au clic sur le bouton, le compteur augemente de 1------------------------------------
//Je sélectionne et je stocke
const btnApproved = document.getElementById('btn-approved');
console.log(btnApproved, "boutton approved");

//Je soumet l'élément à une action
//btnApproved.addEventListener('click', function(){
    //console.log('btn-approved cliqué');
//});

});// fin de form.addEvenListener*/