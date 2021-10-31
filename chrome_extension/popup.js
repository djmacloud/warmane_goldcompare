// Set the variables needed
// chrome.storage.sync.get("coinperkgold", ({ coinperkgold }) => { });
// chrome.storage.sync.get("columnoldtitle", ({ columnoldtitle }) => { });
// chrome.storage.sync.get("columnnewtitle", ({ columnnewtitle }) => { });


// When the button is clicked, change the column title and data into current page
activateBtn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changeMode,
  });
});

// The body of this function will be execuetd as a content script inside the current page

function changeMode() {
  let columntochange = document.querySelector('[aria-label="Faction: activate to sort column ascending"]');
  columntochange.ariaLabel = "Coin per 1k gold: activate to sort column ascending";
  columntochange.innerHTML = "Coin per 1k gold";
}
