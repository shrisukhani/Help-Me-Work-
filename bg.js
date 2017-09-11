chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
  chrome.tabs.create({url: "blocked.html", active: true});
  var tabID = sender.tab.id;
  chrome.tabs.remove(tabID);
});
