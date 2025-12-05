import { getProductsData } from './callfunction.js'

let show_products_number_inputEL = document.querySelector('#show_products_number')
    , number_showing_products = show_products_number_inputEL.value,
    btnFilter = document.querySelector('.startFiltering .filterIcon > button');



btnFilter.addEventListener('click', async _ => {
     number_showing_products = show_products_number_inputEL.value
    document.querySelector('#numberOfProductsShowing').innerHTML = number_showing_products;
    document.querySelector('#numberOfProducts').innerHTML = await getProductsData('https://fakestoreapi.com/products', number_showing_products);
})

document.querySelector('#numberOfProductsShowing').innerHTML = number_showing_products;
document.querySelector('#numberOfProducts').innerHTML = await getProductsData('https://fakestoreapi.com/products', number_showing_products);


