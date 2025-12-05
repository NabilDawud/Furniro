// API Products 

export async function getProductsData(url, count) {
    let response = await fetch(url)
    let data = await response.json()
    showAllProducts(data, count)
    return data.length
}


function showAllProducts(data, count) {
    const allProductsContainer = document.querySelector('#allProductsContainer')
    allProductsContainer.innerHTML = ''
    for (const element of data.slice(0, count)) {

        allProductsContainer.innerHTML += `<div class="col ">
                        <div class="card bg-light">
                            <div class="front">
                                <img src=${element.image} alt="Product 1">
                                <div class="content pb-4 pt-3 ps-2">
                                    <h4 class="mb-0">${element.title}</h4>
                                    <p class="text-muted my-2 fs-6 fw-medium">${element.description}</p>
                                    <h6 class="d-inline-flex mb-0">Rp ${element.price}</h6>
                                </div>
                            </div>
                            <div class="back align-content-center text-center text-white ">
                                <button class="btn text-primary bg-white border-0 py-2 px-5 add-to-cart-button" data-image="${element.image}" 
        data-title="${element.title}" 
        data-price="${element.price}">Add to cart</button>
                                <div class="reacts d-flex justify-content-around mt-3">
                                    <div class="item">
                                        <i class="fa-solid fa-share-nodes"></i>
                                        <span>Share</span>
                                    </div>
                                    <div class="item">
                                        <i class="fa-solid fa-right-left"></i>
                                        <span>Compare</span>
                                    </div>
                                    <div class="item">
                                        <i class="fa-regular fa-heart"></i>
                                        <span>Like</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>`
    }



    const cartButtons = document.querySelectorAll('.add-to-cart-button')

    for (const button of cartButtons) {
        button.addEventListener('click', (event) => {
            const imageEl = event.currentTarget.getAttribute("data-image")
            const titleEl = event.currentTarget.getAttribute("data-title")
            const priceEl = event.currentTarget.getAttribute("data-price")
            addCart(imageEl, titleEl, priceEl)

        })
    }




}



const productsArray = JSON.parse(localStorage.getItem('AllProducts')) || []
function addCart(image, title, price) {

    const productIndex = productsArray.findIndex(product => product.titleProduct === title)

    if (productIndex !== -1) {
        productsArray[productIndex].quantityProduct += 1
        alert(`Quantity of ${title} increased to ${productsArray[productIndex].quantityProduct}.`);
        localStorage.setItem('AllProducts', JSON.stringify(productsArray))
        showLocalStorageProductsCart(productsArray)

    } else {
        productsArray.push({ quantityProduct: 1, imageSrc: image, titleProduct: title, priceProduct: price })
        localStorage.setItem('AllProducts', JSON.stringify(productsArray))
        showLocalStorageProductsCart(productsArray)
    }

}

const productCartContent = document.querySelector('#cartList .offcanvas-body');
function showLocalStorageProductsCart(products) {
    productCartContent.innerHTML = ''
    products.forEach(product => {
        productCartContent.innerHTML += `
        <div class="row mb-2 border-bottom">
                <div class="col-1 px-1">
                    <h6 id="quantity_product" class="fw-medium" >${product.quantityProduct}</h6>
                </div>
                <div class="col-2 px-1">
                    <img class="img-fluid img-thumbnail" src="${product.imageSrc}" alt="Image 1">
                </div>
                <div class="col-7 px-1">
                    <h6 id="title_product" class="fw-medium">${product.titleProduct}</h6>
                </div>
                <div class="col-2 px-1">
                    <h6 id="price_product" class="fw-medium" >${product.priceProduct}</h6>
                </div>
            </div>`
    });
}

showLocalStorageProductsCart(productsArray)

