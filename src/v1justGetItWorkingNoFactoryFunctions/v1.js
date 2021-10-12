//! < script / app > !\\
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
//! </ script / app > !\\

//! < nav > !\\
import './nav.css';
import domManager from './domManager';

export default function nav() {
  const navbar = domManager({
    classes: ['nav'],
  });
  return navbar;
}
//! </ nav > !\\

//! < hoverElement > !\\
import domManager from './domManager';

export function hoverMenu() {
  const el = domManager({
    classes: ['dropdown'],
    children: [
      domManager({
        tagName: 'button',
        text: 'dropdown',
        classes: ['dropbtn'],
      }),
      domManager({
        classes: ['dropdown-content'],
        children: [
          domManager({
            tagName: 'a',
            text: 'Link 1',
            attributes: [{ href: '#' }],
          }),
          domManager({
            tagName: 'a',
            text: 'Link 2',
            attributes: [{ href: '#' }],
          }),
          domManager({
            tagName: 'a',
            text: 'Link 3',
            attributes: [{ href: '#' }],
          }),
        ],
      }),
    ],
  });
  return el;
}
//! </ hoverElement > !\\
