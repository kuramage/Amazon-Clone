import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

let progressHTML='';
let product=JSON.parse(localStorage.getItem('matchingProduct'));
let cart=JSON.parse(localStorage.getItem('cartMatching'));
let dateFinal=dayjs(JSON.parse(localStorage.getItem('dateFinal')));
// console.log(cart);
displayProduct(product,cart,dateFinal);
export function displayProduct(product,cart,dateFinal){
    const today=dayjs();
    let option=1;
    console.log(today);
    console.log(dateFinal);
    if (today.isAfter(dayjs(dateFinal),'day')) option = 2;
    else if (today.isSame(dayjs(dateFinal), 'day') || today.isBefore(dayjs(dateFinal),'day')) option = 3;

    const bar=document.querySelector('.js-progress-bar')
    bar.classList.remove('progress-bar');
    bar.classList.add(`progress-bar-${option}`);
    document.querySelector('.js-delivery-date').innerHTML=`Arriving on ${dateFinal.format('dddd, MMMM D')}`;
    document.querySelector('.js-product-info').innerHTML=`${product.name}`;
    document.querySelector('.js-product-quantity').innerHTML=`Quantity: ${cart.productQuantity}`;
    document.querySelector('.js-product-image').src=product.image;
    document.querySelector('.js-progress').innerHTML=progressRender(option);
    
};


function progressRender(option){
    progressHTML+=`
        <div class="progress-label ${option===1 ? 'current-status':''}">
        Preparing
        </div>
        <div class="progress-label ${option===2 ? 'current-status':''}">
        Shipped
        </div>
        <div class="progress-label ${option===3 ? 'current-status':''}">
        Delivered
        </div>
    `;
    return progressHTML;
};