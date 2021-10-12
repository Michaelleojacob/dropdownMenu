import './style.css';
import nav from './navElement';
import hoverMenu from './makeHoverMenu';

(() => {
  const wrapper = {
    init() {
      this.parent = document.querySelector('#container');
      this.nav();
      this.makeNewA();
    },
    nav() {
      this.navbar = nav();
      this.parent.appendChild(this.navbar);
      this.navDropDown = hoverMenu();
      console.log(this.navDropDown);
      this.navbar.appendChild(this.navDropDown);
    },
    makeNewA() {
      const newA = document.createElement('a');
      newA.textContent = 'newLink';
      newA.setAttribute('href', '#');
      this.navDropDown.querySelector('.dropdown-content').appendChild(newA);
    },
  };
  return wrapper.init();
})();
