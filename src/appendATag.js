import domManager from './domManager';

export default function appendATag(str, link) {
  const myid = str.replace(/\s+/g, '');
  const newA = domManager({
    tagName: 'a',
    text: str,
    attributes: [{ href: link }, { id: myid }],
  });
  return newA;
}
// how to use this
// const firstA = appendATag('hello', 'https://google')
