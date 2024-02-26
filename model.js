class Categorie {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    getName() {
        return this.name;
    }
}


class Article {
    constructor(name, price){
        this.name= name;
        this.price = price;
      
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

  
}