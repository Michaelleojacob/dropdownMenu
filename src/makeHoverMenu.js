import domManager from './domManager';

export default function hoverMenu() {
  const my = {
    makeTree(treeClass) {
      if (treeClass === undefined) {
        return console.log('makeTree needs a class argument');
      }
      this.el = domManager({
        classes: ['dropdown', treeClass],
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
                classes: ['link1'],
                attributes: [{ href: '#' }],
              }),
              domManager({
                tagName: 'a',
                text: 'Link 2',
                classes: ['link2'],
                attributes: [{ href: '#' }],
              }),
              domManager({
                tagName: 'a',
                text: 'Link 3',
                classes: ['link3'],
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
      const addClass = str.replace(/\s+/g, '');
      const newA = domManager({
        tagName: 'a',
        text: str,
        classes: [addClass],
        attributes: [{ href: link }],
      });
      this.dropdownContent.appendChild(newA);
    },
    removeDropdownItem(targetClass) {
      return this.dropdownContent.querySelector(`.${targetClass}`).remove();
    },
  };
  return my;
}
