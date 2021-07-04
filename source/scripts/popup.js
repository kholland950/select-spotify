import browser from 'webextension-polyfill';

import '../styles/popup.scss';

function openWebPage(url) {
  return browser.tabs.create({url});
}

document.addEventListener('DOMContentLoaded', async () => {
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
    return openWebPage('https://github.com/kholland950/select-spotify');
  });

  // document.getElementById('options__button').addEventListener('click', () => {
  //   return openWebPage('options.html');
  // });
});
