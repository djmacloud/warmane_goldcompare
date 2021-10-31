// let coinperkgold ='1';
// let columnoldtitle = 'Faction: activate to sort column ascending';
// let columnnewtitle = 'Coin per 1k gold: activate to sort column ascending';

chrome.runtime.onInstalled.addListener(() => {
  // chrome.storage.sync.set({ coinperkgold });
  // chrome.storage.sync.set({ columnoldtitle });
  // chrome.storage.sync.set({ columnnewtitle });
  console.log('Coin per 1k gold measurement initialized');
});
