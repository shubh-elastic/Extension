

// const data = document.body.innerText
// console.log(data)
// chrome.runtime.sendMessage({message : data}, (response) => {
//     console.log(response.message)
// })

// content.js

// Listen for messages from the popup or background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Check the action sent from the popup or background script
    if (request.action === 'getData') {
      // Retrieve the text content of the <body> element
      const data = document.body.innerText;
      console.log(data)

     
  
      // Send the data back to the popup or background script
  
      // Optionally, you can also send a response back to the sender
      sendResponse({ message: data });
    }
  });
  
  // Additional content.js logic can go here...
  