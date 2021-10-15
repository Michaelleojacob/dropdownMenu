import maketree from './makeTree';
import appendATag from './appendATag';

export default function hoverobj() {
  const obj = {
    tree() {
      this.el = maketree();
      return this.el;
    },
    newLink(arg1, arg2) {
      this.aParent = this.el.querySelector(`.${this.className}content`);
      const newA = appendATag(arg1, arg2);
      this.aParent.appendChild(newA);
    },
    logger() {
      return console.log(this.tree());
    },
  };
  return obj;
}
