import { checkUrl } from "~storage";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    checkUrl(changeInfo.url).then(isPhishing => {
      if (isPhishing !== undefined) {
        console.log("your site is not safe");
        chrome.tabs.sendMessage(tabId, "showAlert");
      }else{
        console.log("your site is safe");
      }
    });
  }
});
