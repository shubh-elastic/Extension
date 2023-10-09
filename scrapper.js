document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('activetab'); // Assuming your button has an id of 'saveButton' in your popup.html
    
    saveButton.addEventListener('click', function() {
      // Send a message to content.js to retrieve data from the current page
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'getData' }, function(response) {
          // Received data from content.js
          if(response){
            const data = response.message
          
          
            chrome.identity.getAuthToken({ 'interactive': true }, function (token) {
              console.log(token);
            });

            // fetch("http://192.168.0.252:8080/contracts/read")
            // .then(response => console.log(response))
            // .then(data => console.log(data)) // Log the response data to the console
            // .catch(error => console.error(error)); // Log errors to the console
        

          
          // Store the received data in local storage
          chrome.storage.local.set({ 'data': data }, function() {
            console.log('Data has been stored');
          });
          
          // Enable the user to download the data as a file
          chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
            suggest({ filename: 'data.txt', conflictAction: 'overwrite' });
          });
          
          chrome.downloads.download({
            url: 'data:text/plain;charset=utf-8,' + encodeURIComponent(data),
            filename: 'data.txt',
            saveAs: true
          });
          }
        });
      });
    });
  });
  