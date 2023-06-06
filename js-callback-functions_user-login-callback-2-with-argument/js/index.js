console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Swetha");
}

// The exercise starts here!

function showWelcomeMessage(userName) {
  console.log(`welocme ${userName} you are logged in now.`);
}
handleUserLogin(showWelcomeMessage);

//Anonymus function
handleUserLogin((userName) => {
  console.log(`welocme ${userName} you are logged in now.`);
});
