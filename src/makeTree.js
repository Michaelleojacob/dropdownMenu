import domManager from './domManager';

export default function maketree(buttonText, treeClass) {
  if (treeClass === undefined) {
    return console.log('maketree needs a class argument');
  }
  const el = domManager({
    classes: [`${treeClass}Wrapper`, treeClass],
    children: [
      domManager({
        tagName: 'button',
        text: buttonText,
        classes: [`${treeClass}btn`],
      }),
      domManager({
        classes: [`${treeClass}content`],
      }),
    ],
  });
  return el;
}

// ? < dummy data for testing > ?\\
// children: [
//   domManager({
//     tagName: 'a',
//     text: 'Link 1',
//     classes: ['link1'],
//     attributes: [{ href: '#' }],
//   }),
//   domManager({
//     tagName: 'a',
//     text: 'Link 2',
//     classes: ['link2'],
//     attributes: [{ href: '#' }],
//   }),
//   domManager({
//     tagName: 'a',
//     text: 'Link 3',
//     classes: ['link3'],
//     attributes: [{ href: '#' }],
//   }),
// ],
// ? </ dummy data for testing > ?\\
