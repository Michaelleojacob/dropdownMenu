import domManager from './domManager';

export default function hoverMenu() {
  const my = {
    makeTree() {
      this.el = domManager({
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
      this.dropdownContent = this.el.querySelector('.dropdown-content');
      return this.el;
    },
    appendATagToDropdown(str, link) {
      // TODO add logic for missing str or link.
      const newA = domManager({
        tagName: 'a',
        text: str,
        attributes: [{ href: link }],
      });
      this.dropdownContent.appendChild(newA);
    },
    removeDropdownItem(thing) {
      this.dropdownContent.remove(thing);
      // not sure how this would work.
      // I think I would add a click to register which item to delete.
      // delete button = delete this a tag
    },
  };
  return my;
}
