class Product {
    index;
    name;
    price;
    image;
    description;
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.image = "images/default-product.png";
        this.description = "This is new product";
    }

    getHml(){
        // let html = "Kết quả của phép tính " + a +" với " + b + " là " + (a+b);
        // let html2 =`Kết quả của phép tính ${a} với ${b} là ${a+b}`
        let html = `<div class="card">
                        <img src="${this.image}" alt="${this.image}" style="width:100%">
                        <h1>${this.name}</h1>
                        <p class="price">${this.price}</p>
                        <p>${this.description}</p>
                        <p><button onclick="editProduct(${this.index})">Update</button></p>
                        <p><button onclick="deleteProduct(${this.index})">Remove</button></p>
                    </div>`;
        return html;
    }
}
