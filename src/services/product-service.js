import axios from "axios";

var data = [{
        id: "5f40a6baac77a903d8f682c6",
        price: .49,
        stock: 130,
        title: "Cabbage",
        image: "img-1.jpg",
        discount: 1.50,
        category: "Vegetable",
    },
    {
        id: "5f40a6ba41d9e5044ced586c",
        price: 5.99,
        stock: 210,
        title: "Strawberry",
        image: "product-6.jpg",
        discount: 1,
        category: "Fruit",
    },
    {
        id: "5f40a6baa9e6e22fa1d5fac4",
        price: 32.0,
        stock: 200,
        title: "Bell pepper",
        image: "img-14.jpg",
        discount: 0,
        category: "Vegetable",
    },
    {
        id: "5f40a6baf0f068a497921d29",
        price: 6.99,
        stock: 100,
        title: "Carrot Bundle",
        image: "img-4.jpg",
        discount: 0,
        category: "Vegetable",
    },
    {
        id: "5f40a866337a3bb00793da523",
        price: .79,
        stock: 340,
        title: "Banana",
        image: "img-5.jpg",
        discount: 4,
        category: "Fruit",
    },
    {
        id: "5f40a866ea0a04e6891b7084",
        price: 2.99,
        stock: 100,
        title: "Orange",
        image: "product-10.jpg",
        discount: 0,
        category: "Fruit",
    },
    {
        id: "5f40a866ea0a04e6891212333",
        price: 2.99,
        stock: 120,
        title: "Egg",
        image: "img-15.jpg",
        discount: 0,
        minimum: 6,
        category: "Dairy & Eggs",
    },
    {
        id: "5f40a866ea0a04e68911231328",
        price: 19.1,
        stock: 35,
        title: "Orange Juice",
        image: "product-15.jpg",
        discount: 12,
        category: "Beverages",
    }, {
        id: "5f40a6baac77a903d8f682c613",
        price: 3.99,
        stock: 13,
        title: "Grapefruit",
        image: "big-2.jpg",
        discount: 1,
        category: "Fruit",
    },
    {
        id: "5f40a6ba41d9e5044ced586c32",
        price: 3.99,
        stock: 120,
        title: "Kiwi",
        image: "img-6.jpg",
        discount: 1,
        category: "Fruit",
    },
    {
        id: "5f40a6baa9e6e22fa1d5fac42",
        price: 3.59,
        stock: 50,
        title: "Egg plant",
        image: "img-8.jpg",
        discount: .2,
        category: "Vegetable",
    },
    {
        id: "5f40a6baf0f068a497921d293",
        price: 6.99,
        stock: 100,
        title: "Beef Stew Meat",
        image: "img-9.jpg",
        discount: 0,
        category: "Meat",
    },
    {
        id: "5f40a866337a3bb00793da52",
        price: 10.99,
        stock: 16,
        title: "Brie cheese",
        image: "img-10.jpg",
        discount: 4,
        category: "Dairy & Eggs",
    },
    {
        id: "5f40a866ea0a04e6891b7083452",
        price: 5.99,
        stock: 100,
        title: "Brocoli",
        image: "img-12.jpg",
        discount: 1.5,
        category: "Vegetable",
    },
    {
        id: "5f40a866ea0a04e68912123333",
        price: 2.99,
        stock: 200,
        title: "Onion",
        image: "img-13.jpg",
        discount: 1,
        category: "Dairy & Eggs",
    },
    {
        id: "5f40a866ea0a04e6891123133318",
        price: 3.99,
        stock: 35,
        title: "Mango",
        image: "product-1.jpg",
        discount: .5,
        category: "Fruit",
    },
];
class ProductService {
    serverUrl = 'http://fsdi.azurewebsites.net/api';
    async getCatalog() {

        //use local data if server stops working.
        // return data;
        //logic to connect to server and retrieve catalog
        // axios.post axios.delete
        var res = await axios.get(this.serverUrl + "/products");

        return res.data;
    }
}


export default ProductService;