let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;


function nextSlide() {
    itemActive = (itemActive + 1) % countItem;
    showSlider();
}


function prevSlide() {
    itemActive = (itemActive - 1 + countItem) % countItem;
    showSlider();
}

next.onclick = nextSlide;

let refreshInterval = setInterval(nextSlide, 12000); 

prev.onclick = prevSlide;


function showSlider() {
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');

    
    if (itemActiveOld && thumbnailActiveOld) {
        itemActiveOld.classList.remove('active');
        thumbnailActiveOld.classList.remove('active');

        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');
    }
}


function redirectToGoogle(query) {
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
}


let homeBtn = document.querySelector('.menu li:nth-child(1)');
let contactBtn = document.querySelector('.menu li:nth-child(2)');
let infoBtn = document.querySelector('.menu li:nth-child(3)');


homeBtn.addEventListener('click', function() {
    redirectToGoogle('Home');
});

contactBtn.addEventListener('click', function() {
    redirectToGoogle('Contact');
});

infoBtn.addEventListener('click', function() {
    redirectToGoogle('Info');
});

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});


let searchIcon = document.getElementById('searchIcon');
let searchBar = document.getElementById('searchBar');


searchIcon.addEventListener('click', function(event) {
    event.stopPropagation(); 
    searchBar.classList.toggle('active'); 
});


document.body.addEventListener('click', function() {
    searchBar.classList.remove('active');
});


searchBar.addEventListener('click', function(event) {
    event.stopPropagation();
});
