import './nav.css';
import domManager from './domManager';

export default function nav() {
  const navbar = domManager({
    classes: ['nav'],
  });
  return navbar;
}
