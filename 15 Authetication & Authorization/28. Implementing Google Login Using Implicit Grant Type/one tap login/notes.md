window.onload = function () {
  google.accounts.id.initialize({
    client_id,
    callback: (response) => {
    // response is there in the callback
    },
  });
  google.accounts.id.prompt(); // for one tap login pop up
  google.accounts.id.renderButton(// render the button
  googleLoginBtn, // selecting the Element
  {
    theme: "filled_blue", // customise
    shape: "pill",
  });
};

Refernce Docs = https://developers.google.com/identity/gsi/web/reference/js-reference