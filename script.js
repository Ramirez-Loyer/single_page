let listCat = [];


//la fonction initCategories est définie pour remplir le tableau avec des objets de type Categorie
//la méthode push pour ajouter de nouveaux objets Categorie.
function initCategories () {
    listCat.push( new Categorie (1, "Tout niveau"));
    listCat.push( new Categorie (2, "Avancé"));
    listCat.push( new Categorie (3, "Débutant"));
  
}

//la fonction displayCategories est définie pour afficher les catégories dans le HTML.
function displayCategories() {
    //Je veux parcourir les categories pour les afficher dans mon HTML
    //je dois récupérer comme un pointeur sur la partie html dans laquelle je souhaite insérer
    const cat = document.getElementById("categories");
    cat.innerHTML = ' ';  //vide le contenu
  
  // parcourt le tableau listCat à l'aide de la méthode forEach
    listCat.forEach( categorie => {
        cat.innerHTML += '<a href="#" onclick="notify(this) class="list-group-item"> ' + categorie.getName() + "</a>";  
        //À chaque itération de la boucle, cette ligne ajoute du HTML à l'intérieur de l'élément HTML représenté par la variable cat
    });
    
    for (let categorie of listCat) {   //cette boucle parcourt chaque élément du tableau listCat 
        console.log(categorie);
    }
}

//la fonction initCategories est appelée pour initialiser les catégories, suivie de l'appel à displayCategories pour les afficher dans le HTML.
initCategories();
//la fonction displayCategories affiche les catégories dans la console à l'aide d'une boucle for...of
displayCategories();


//--------------------ARTICLES---------------------------

let listArticles = [];

function initArticles() {
    listArticles.push(new Article ("Coder pour les nuls", 29.99));
    listArticles.push(new Article ("HTML pour les nuls", 25.50));
    listArticles.push(new Article ("Javascript pour les nuls", 28.00));
    listArticles.push(new Article ("Java pour les nuls", 27.99));
    listArticles.push(new Article ("Java pour les nuls", 27.99));
}

console.log(listArticles);

function displayArticles() {
   
    const art = document.getElementById("articles");
    //art.innerHTML = ' '; 

    listArticles.forEach(article => {
    art.innerHTML += '<a href="#" onclick="notify(this)" class="list-group-item"> ' + article.getName() + " " + article.getPrice() + "</a>";
    });

    for (let article of listArticles) {
    console.log(article);
    }
}

initArticles();
displayArticles();


//------Associer un article à une catégory-------
function displayArtByCat(){
    const article = document.getElementById("articles");
    initArticles.innerHTML = " ";
}


//------Ajouter un article au panier-----
function addToCart(){

}





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