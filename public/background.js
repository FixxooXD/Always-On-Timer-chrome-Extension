// background.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "SAVE_TARGET_DATE") {
    chrome.storage.sync.set({ targetDate: request.targetDate }, () => {
      console.log("Target date saved:", request.targetDate);
      sendResponse({ status: "success" });
    });
    return true; // Keep the message channel open for the asynchronous response
  }
});
