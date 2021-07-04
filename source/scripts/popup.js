import browser from 'webextension-polyfill';

import '../styles/popup.css';

function openWebPage(url) {
  return browser.tabs.create({url});
}

document.addEventListener('DOMContentLoaded', () => {
  // const tabs = await browser.tabs.query({
  //   active: true,
  //   lastFocusedWindow: true,
  // });

  // const url = tabs.length && tabs[0].url;

  // const response = await browser.runtime.sendMessage({
  //   msg: 'hello',
  //   url,
  // });

  document.getElementById('github__button').addEventListener('click', () => {
    return openWebPage('https://github.com/kholland950/select-spotify/issues/new');
  });

  // document.getElementById('options__button').addEventListener('click', () => {
  //   return openWebPage('options.html');
  // });
});
