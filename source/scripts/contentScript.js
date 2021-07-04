/**
 * Selectors for selectable elements
 */
const headerSelector = '*[draggable] > [as="h1"]';
const trackItemsSelector = '*[data-testid="tracklist-row"] [as="div"]';

const selectors = [headerSelector, trackItemsSelector];

/**
 * CSS Rule for showing user select
 */
const cssUserSelect = '{ user-select: all !important; }';
/**
 * Built CSS for style tag
 */
const css = selectors.map((e) => `${e} ${cssUserSelect}`).join(' ');

const head = document.head || document.getElementsByTagName('head')[0];
const style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
style.appendChild(document.createTextNode(css));

/**
 * Select all text of a DOM element
 * @param {Node} element to select text in
 */
function selectAll(element) {
  const r = document.createRange();
  r.selectNode(element);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
}

/**
 * Select text in an element if it is selectable
 */
window.addEventListener('click', (e) => {
  if (selectors.some((selector) => e.target.matches(selector))) {
    selectAll(e.target);
  }
});
