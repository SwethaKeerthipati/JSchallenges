console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

function showWelcomeMessage(userName) {
  console.log(`welocme ${userName} you are logged in now.`);
}
handleUserLogin(showWelcomeMessage);
