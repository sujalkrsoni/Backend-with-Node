const btn = document.getElementById("login");

btn.addEventListener("click", () => {
  window.open("https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=857880822095-h5i4vvupi9jmrlumf8blhemb7rkv29n6.apps.googleusercontent.com&scope=openid%20email&redirect_uri=http://127.0.0.1:5500/callback.html", "auth-popup", "width=500,height=500");
});

// const code = new URLSearchParams(window.location.search).get("code");
const GOOGLE_CLIENT_ID = `YOUR CLIENT ID`;
const GOOGLE_CLIENT_SECRET = `SECRET `; // never write it here , it should be only be in backend and in .env.
const GOOGLE_REDIRECT_URI = `http://127.0.0.1:5500/callback.html`;
const GOOGLE_TOKEN_ENDPOINT = `https://oauth2.googleapis.com/token`;



// Getting Message in page from popup
window.addEventListener("message", (e) => {
  fetchIdToken(e.data.code);
  console.log("Getting Message :", e);
  console.log("Getting Message Data :", e.data);
});



console.log("Running localhost ....");


async function fetchIdToken(code) {
  console.log("Code :=> ", code);
  const payload = `code=${code}&client_id=${GOOGLE_CLIENT_ID}&client_secret=${GOOGLE_CLIENT_SECRET}&redirect_uri=${GOOGLE_REDIRECT_URI}&grant_type=authorization_code`;
  const result = await fetch(`${GOOGLE_TOKEN_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: payload,
  });
  // console.log("result :", result);
  const data = await result.json();
  console.log("Data :=> ", data); // log and understand properly 
  const userToken = data.id_token.split(".")[1]; // here i'm taking 2nd value from id_token
  const userData = JSON.parse(atob(userToken));

  console.log("userData :=> ", userData);
}
