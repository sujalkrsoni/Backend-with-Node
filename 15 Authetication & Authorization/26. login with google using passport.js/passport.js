import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const clientId =
  "YOUR ID";
const clientSecret = "YOUR SECRET";
const redirectUri = "http://localhost:4000/auth/google/callback";

passport.use(
  new GoogleStrategy(
    {
      clientID: clientId,
      clientSecret,
      callbackURL: redirectUri,
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);  // here profile will added into our req object and we can access into any file using the req.profile. 

    }
  )
);
