import './components/button/button.scss';
import './components/icon/icon.scss';
import './components/forms/forms.scss';
import './scss/utilities/_shapes.scss';
import './scss/utilities/_loading.scss';
import './style.scss';

function component(text) {
  const element = document.createElement('h1');
  element.textContent = text;
  return element;
}

document.body.prepend(component('UI-Kit'));
