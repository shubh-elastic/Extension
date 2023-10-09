// // background.js
chrome.runtime.onInstalled.addListener(() => {
    console.log('Data Scraper Extension Installed');
});
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     console.log(request.message);
//     sendResponse({message : "Got the data"})

//     // Store the received data in local storage
//     chrome.storage.local.set({ 'data': request.message }, function() {
//       console.log('Data has been stored');
//     });
  
//     // Enable the user to download the data as a file
//     chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
//       suggest({filename: 'data.txt', conflictAction: 'overwrite'});
//     });
  
//     chrome.downloads.download({
//       url: 'data:text/plain;charset=utf-8,' + encodeURIComponent(request.message),
//       filename: 'data.txt',
//       saveAs: true
//     });
//   });
  
