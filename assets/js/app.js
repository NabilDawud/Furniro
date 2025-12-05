const slider_track = document.querySelector('.slider-track'),
    btnSlider = document.querySelector('#nextSlider'),
    btnSlider2 = document.querySelector('.middle aside button'),
    imgs_Slider = document.querySelectorAll('.slider-track .slider img'),
    active_slider_img = document.querySelector('.slider.active img'),
    imgs_slider_array = [...imgs_Slider],
    spanOnMiddleDiv = document.querySelector('#bedroom_number'),
    btnsPagination = [...document.querySelectorAll('.pagination button')];
let curentimage = 0,
    src_imgs_sliders = imgs_slider_array.map(e => e.src)

btnSlider.addEventListener('click', nextSlide)
btnSlider2.addEventListener('click', nextSlide)


for (const index in btnsPagination) {


    btnsPagination[index].addEventListener('click', function () {
        active_slider_img.src = src_imgs_sliders[index]
        curentimage = +index
        spanOnMiddleDiv.innerHTML = (curentimage + 1).toString().padStart(2, '0')
        for (const element of btnsPagination) {
            element.classList.remove('active')


        }
        btnsPagination[index].classList.add('active')
    })


}


function nextSlide() {
    curentimage++
    if (curentimage > src_imgs_sliders.length - 1) {
        curentimage = 0
    }
    spanOnMiddleDiv.innerHTML = (curentimage + 1).toString().padStart(2, '0')
    active_slider_img.src = src_imgs_sliders[curentimage]

    for (const element of btnsPagination) {
        element.classList.remove('active')


    }
    btnsPagination[curentimage].classList.add('active')
}



import {getProductsData} from './callfunction.js'


getProductsData('https://fakestoreapi.com/products' , 8)


