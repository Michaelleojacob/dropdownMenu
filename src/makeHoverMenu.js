import domManager from './domManager';

export default function hoverMenu() {
  const el = domManager({
    classes: ['dropdown'],
    children: [
      domManager({
        tagName: 'button',
        text: 'Dropdown',
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

//* * */

/* <div class="dropdown">
  <button class="dropbtn">
    Dropdown
  </button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>; */

//* * */
