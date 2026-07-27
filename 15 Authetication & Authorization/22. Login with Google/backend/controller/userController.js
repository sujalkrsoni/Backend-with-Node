import User from "../models/user.model.js";
import { registerValidator } from "../validators/user.validator.js";

export const registerUser = async (req, res) => {
  const data = registerValidator.parse(req.body);
  const user = await User.create(data);
  res.status(201).json({
    success: true,
    user,
  });
};

export const googleAuth = (req, res) => {
  
  res.redirect(generateAuthUrl());
  res.end();
};

export const googleCallback = async (req, res) => {
  const code = req.body.code;
  const userData = await fetchIdToken(code); 

  //* for better and optimize way we'll use this :
  // const userData = await fetchIdTokenUsingGoogleAuthLibrary(code);

  console.log(userData);
  const user = await User.findOneAndUpdate(
    { email: userData.email },
    {
      $set: {
        googleId: userData.sub,
        name: userData.name,
        avatar: userData.picture,
        email: userData.email,
      },
    },
    {
      upsert: true,
      new: true,
    },
  );
  if (!user)
    return res.status(404).json({ success: false, message: "User not found" });
  res.status(200).json({
    success: true,
    message: "User Login Successfully !",
    user,
  });
};

async function fetchIdToken(code) {
  console.log("Code :=> ", code);
  console.log({
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
    GOOGLE_TOKEN_ENDPOINT: process.env.GOOGLE_TOKEN_ENDPOINT,
  });
  const payload = `code=${code}&client_id=${process.env.GOOGLE_CLIENT_ID}&client_secret=${process.env.GOOGLE_CLIENT_SECRET}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&grant_type=authorization_code`;
  const result = await fetch(`${process.env.GOOGLE_TOKEN_ENDPOINT}`, {
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

  return userData;
}

const client = new OAuth2Client({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: process.env.GOOGLE_REDIRECT_URI,
});


async function fetchIdTokenUsingGoogleAuthLibrary(code) {
  try {
    const { token } = await client.getToken(code);
    console.log("Token :=> ", token);
    const ticket = await client.verifyIdToken({
      idToken: token.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    console.log("Ticket :=> ", ticket);
    console.log("ticket.getEnvelop : ", ticket.getEnvelop());
    console.log("Ticket User Id :", ticket.getUserId());
    return tiket.getPayload();

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
}


function generateAuthUrl(){
  return client.generateAuthUrl({
    scope : ["openid", "email", "profile"],
    // prompt : "consent" // none | select_account | consent
    // login_hint : "example@gmail.com"
  })
}