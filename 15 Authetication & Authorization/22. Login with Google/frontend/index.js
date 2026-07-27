const btn = document.getElementById("login");

btn.addEventListener("click", () => {
  window.open("https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=857880822095-h5i4vvupi9jmrlumf8blhemb7rkv29n6.apps.googleusercontent.com&scope=openid%20email%20profile&redirect_uri=http://127.0.0.1:5500/callback.html", "auth-popup", "width=500,height=500");
});


// Getting Message in page from popup
window.addEventListener("message", async (e) => {
  if(e.data.code){
    const result =  await fetch("http://localhost:8080/user/auth/google/callback    ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: e.data.code })
    })
    const data = await result.json();
    console.log("Data from backend :=> ", data)
  }
});

