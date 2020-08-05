const carouselSteam = document.querySelector('.carousel-slide-steam')
const carouselSteamImages = document.querySelectorAll('.carousel-slide-steam img')

const prevSteamBtn = document.querySelector('#steamPrevBtn')
const nextSteamBtn = document.querySelector('#steamNextBtn')

let steamCounter = 1
const sizeSteam = carouselSteamImages[0].clientWidth

carouselSteam.style.transform = 'translateX(' + (-sizeSteam * steamCounter) + 'px)'

nextSteamBtn.addEventListener('click', () => {
    if(steamCounter >= carouselSteamImages.length - 1) return
    carouselSteam.style.transition = 'transform 0.4s ease-in-out'
    steamCounter++
    carouselSteam.style.transform = 'translateX(' + (-sizeSteam * steamCounter) + 'px)'
})

prevSteamBtn.addEventListener('click', () => {
    if(steamCounter <= 0) return
    carouselSteam.style.transition = 'transform 0.4s ease-in-out'
    steamCounter--
    carouselSteam.style.transform = 'translateX(' + (-sizeSteam * steamCounter) + 'px)'
})

carouselSteam.addEventListener('transitionend', () => {
    if(carouselSteamImages[steamCounter].id == 'steamLastClone'){
        carouselSteam.style.transition = 'none'
        steamCounter = carouselSteamImages.length - 2
        carouselSteam.style.transform = 'translateX(' + (-sizeSteam * steamCounter) + 'px)'
    }
    if(carouselSteamImages[steamCounter].id == 'steamFirstClone'){
        carouselSteam.style.transition = 'none'
        steamCounter = carouselSteamImages.length - steamCounter
        carouselSteam.style.transform = 'translateX(' + (-sizeSteam * steamCounter) + 'px)'
    }
})

//weather carousel
const carouselWeather = document.querySelector('.carousel-slide-weather')
const carouselWeatherImages = document.querySelectorAll('.carousel-slide-weather img')

const prevWeatherBtn = document.querySelector('#weatherPrevBtn')
const nextWeatherBtn = document.querySelector('#weatherNextBtn')

let weatherCounter = 1
const sizeWeather = carouselWeatherImages[0].clientWidth

carouselWeather.style.transform = 'translateX(' + (-sizeWeather * weatherCounter) + 'px)'

nextWeatherBtn.addEventListener('click', () => {
    if(weatherCounter >= carouselWeatherImages.length - 1) return
    carouselWeather.style.transition = 'transform 0.4s ease-in-out'
    weatherCounter++
    carouselWeather.style.transform = 'translateX(' + (-sizeWeather * weatherCounter) + 'px)'
})

prevWeatherBtn.addEventListener('click', () => {
    if(weatherCounter <= 0) return
    carouselWeather.style.transition = 'transform 0.4s ease-in-out'
    weatherCounter--
    carouselWeather.style.transform = 'translateX(' + (-sizeWeather * weatherCounter) + 'px)'
})

carouselWeather.addEventListener('transitionend', () => {
    if(carouselWeatherImages[weatherCounter].id == 'weatherLastClone'){
        carouselWeather.style.transition = 'none'
        weatherCounter = carouselWeatherImages.length - 2
        carouselWeather.style.transform = 'translateX(' + (-sizeWeather * weatherCounter) + 'px)'
    }
    if(carouselWeatherImages[weatherCounter].id == 'weatherFirstClone'){
        carouselWeather.style.transition = 'none'
        weatherCounter = carouselWeatherImages.length - weatherCounter
        carouselWeather.style.transform = 'translateX(' + (-sizeWeather * weatherCounter) + 'px)'
    }
})