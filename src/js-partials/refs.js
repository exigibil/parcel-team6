export function getRefs() {
  return {
    header: document.querySelector('.global-header'),
    headerContainer: document.querySelector('.header-container'),
    headerNav: document.querySelector('.header-nav'),
    headerListButton: document.querySelector('.header-list-button'),
    headerListItem: document.querySelector('.header-list-item'),
    headerLink: document.querySelector('.header-link'),
    headerSearchContainer: document.querySelector('.header-search-container'),
    headerSearch: document.querySelector('.header-search'),
    headerInput: document.querySelector('.header-input'),
    headerSearchButton: document.querySelector('.header__search-button'),
    watchedTabButton: document.querySelector('.watched-tab-btn'),
    queueTabButton: document.querySelector('.queue-tab-btn'),
    gallery: document.querySelector('.gallery'),
    galleryContainer: document.querySelector('.container'),
    swiper: document.querySelector('.swiper'),
    swiperButtonPrev: document.querySelector('.swiper-button-prev-icon'),
    swiperButtonNext: document.querySelector('.swiper-button-next-icon'),
    movieListItem: document.querySelector('.movies'),
    movieLib: document.querySelector('.movies-lib'),
    containerPagination: document.querySelector('.container-pagination'),
    pagination: document.querySelector('.pagination'),
    loader: document.querySelector('.loader'),
    footerContainer: document.querySelector('.container-footer'),
    footerList: document.querySelector('.footer-list'),
    footerItem: document.querySelector('.footer-item'),
    footerIcon: document.querySelector('.footer-icon'),
    modal: document.getElementById('info-modal'),
    modalWind: document.getElementById('modal'),
    closeModal: document.getElementById('close-modal'),
    movieCard: document.getElementById('movie-card'),
    movieContent: document.getElementById('movie-content'),
    filmImg: document.getElementById('film-img'),
    trailerButton: document.getElementById('film-id'),
    movieTextContent: document.getElementById('text-content'),
    filmTitle: document.getElementById('film-title'),
    filmDescription: document.getElementById('description'),
    votes: document.getElementById('votes'),
    popularity: document.getElementById('popularity'),
    originalTitle: document.getElementById('origTitle'),
    genre: document.getElementById('genre'),
    about: document.getElementById('about'),
    addToWachedButton: document.querySelectorAll('.add-to-watched-btn'),
    addToQueueButton: document.querySelectorAll('.add-to-queue-btn'),
  };
}
