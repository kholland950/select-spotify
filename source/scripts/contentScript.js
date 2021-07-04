if (window.location.origin.includes('open.spotify.com')) {
  const css =
    '*[draggable] > [as="h1"] { user-select: all !important; }' +
    '*[data-testid="tracklist-row"] [as="div"] { user-select: all !important; }';

  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');

  head.appendChild(style);
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
}
