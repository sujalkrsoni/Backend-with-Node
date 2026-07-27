const accessToken = "Your Access Token ";

const response = await fetch(
  "https://openidconnect.googleapis.com/v1/userinfo", 
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  },
);

const userData = await response.json();

console.log(userData);



// ? we can also send the accessToken in query param :
//!  GET: https://openidconnect.googleapis.com/v1/userinfo?access_token=Your Access Token