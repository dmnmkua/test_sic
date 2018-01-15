function ShowMenu() {
  this.navBtn = document.querySelector('.nav__btn');
  this.navList = document.querySelector('.nav__list');
  this.overflow = document.querySelector('.overflow');

  this._events = () => {
    this.navBtn.addEventListener('click', () => {
      this.navList.classList.add('nav__list--show');
      this.overflow.classList.add('overflow--active');
    });
    this.overflow.addEventListener('click', () => {
      this.navList.classList.remove('nav__list--show');
      this.overflow.classList.remove('overflow--active');
    })
  }

  this._init = () => {
    this._events();
  }

  this._init();
}

let showMenu = new ShowMenu();
