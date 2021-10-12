import './style.css';
import nav from './navElement';
import hoverMenu from './makeHoverMenu';

(() => {
  const wrapper = {
    init() {
      this.parent = document.querySelector('#container');
      this.nav();
      this.appendA();
      this.removeA();
    },
    nav() {
      this.navbar = nav();
      this.parent.appendChild(this.navbar);
      this.navDropDown = hoverMenu();
      console.log(this.navDropDown);
      this.navbar.appendChild(this.navDropDown.makeTree());
    },
    appendA() {
      this.navDropDown.appendATagToDropdown('mything', '#');
      this.navDropDown.appendATagToDropdown('lolxd', '#');
    },
    removeA() {
      // this.navDropDown.removeDropdownItem('mything');
    },
  };
  return wrapper.init();
})();
