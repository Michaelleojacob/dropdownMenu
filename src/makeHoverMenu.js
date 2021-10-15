import domManager from './domManager';

export default function hoverMenu() {
  const my = {
    makeTree(treestr, treeClass) {
      if (treeClass === undefined) {
        return console.log('makeTree needs a class argument');
      }
      this.el = domManager({
        classes: ['dropdown', treeClass],
        children: [
          domManager({
            tagName: 'button',
            text: treestr,
            classes: ['dropbtn'],
          }),
          domManager({
            classes: ['dropdown-content'],
          }),
        ],
      });
      this.dropdownContent = this.el.querySelector('.dropdown-content');
      return this.el;
    },
    appendATagToDropdown(str, link) {
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
