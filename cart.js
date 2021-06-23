let carts= document.querySelectorAll('.add-cart');
let products = [
    {
        name: 'Minced Pork',
        tag: 'mincedpork',
        price: 200,
        incart:0
    },
    {
        name: 'Pigs Foot',
        tag: 'pigsfoot',
        price: 700,
        incart:0
    },
    {
        name: 'Pork Sausage',
        tag: 'porksausage',
        price: '540',
        incart:0
    },
    {
        name: 'Porkloin',
        tag: 'porkloin',
        price: 460,
        incart:0
    },
    {
        name: 'Hamhock',
        tag: 'hamhock',
        price: 350,
        incart:0
    },
    {
        name: 'Boston Butt',
        tag: 'bostonbutt',
        price: 600,
        incart:0
    },
    {
        name: 'Fresh Ham',
        tag: 'freshham',
        price: 300,
        incart:0
    },
    {
        name: 'Bacon',
        tag: 'bacon',
        price: 250,
        incart:0
    },
    {
        name: 'Oven Baked',
        tag: 'Oven Baked',
        price: 100,
        incart:0
    }

];
for(let i=0;i<carts.length; i++){
    carts[i].addEventListener('click', ()=>{
       // console.log("added to cart");
       cartNumbers(products[i]);
       totalCost(products[i]);
    })
}
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.nav span').textContent = productNumbers;
    }

}
function cartNumbers(product){
    // console.log("the product is ",product)
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers+1);
        document.querySelector('.nav span').textContent = productNumbers + 1;

    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.nav span').textContent = 1;
    }
    setItem(product);
}
function setItem(product){
   let cartItems = localStorage.getItem('productsInCart');
   cartItems = JSON.parse(cartItems);
   // console.log("My cartItems are",cartItems);
    
   if (cartItems != null){

    if(cartItems[product.tag] == undefined){
        cartItems = {
            ...cartItems,
            [product.tag]:product
        }
    }
       cartItems[product.tag].incart += 1;
   } else{
    product.incart=1;
    cartItems = {
        [product.tag]:product
     }
  
    }  
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product) {
    console.log("total cost for products is",product.price);
    let cartCost = localStorage.getItem('totalCost');
    // cartCost  = parseInt(cartCost);
    console.log('My cartCost is', cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost  = parseInt(cartCost);
       localStorage.setItem('totalCost', cartCost +
        product.price);

    } else{
        localStorage.setItem('totalCost', product.price);

    }  

}
   
onLoadCartNumbers()
