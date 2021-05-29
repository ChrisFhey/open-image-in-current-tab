chrome.contextMenus.create({
  title: "Open image in current tab",
  contexts: ["image"],
  'id': "open_image_context_item"
})

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId != "open_image_context_item") {
    return;
  }

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    chrome.tabs.update(tab.id, {url: info.srcUrl});
  });
})