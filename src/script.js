import './style.css';
import nav from './navElement';
import hoverMenu from './makeHoverMenu';

(() => {
  const app = {
    init() {
      this.parent = document.querySelector('#container');
      this.nav();
      this.dropdown1();
      this.dropdown2();
      this.appendA();
      this.removeA();
    },
    nav() {
      this.navbar = nav();
      this.parent.appendChild(this.navbar);
    },
    dropdown1() {
      this.navDropDown = hoverMenu();
      this.navbar.appendChild(this.navDropDown.makeTree('hover1', 'tree1'));
    },
    dropdown2() {
      this.secondDropdown = hoverMenu();
      this.navbar.appendChild(this.secondDropdown.makeTree('hover2', 'tree2'));
    },
    appendA() {
      this.navDropDown.appendATagToDropdown('mything', '#');
      this.navDropDown.appendATagToDropdown('lolxd', '#');
    },
    removeA() {
      this.navDropDown.removeDropdownItem('mything');
    },
  };
  return app.init();
})();
