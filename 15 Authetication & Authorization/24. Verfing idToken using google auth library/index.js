
import { oAuth2client} from "google-auth-library";

const client = new oAuth2client({
    clientId : "Your Client ID", 
    clientSecret : "Your Client Secret",
    redirectUri : "Your Redirect URI"
})

const verifyIdToken = async (idToken) => {
    try {
        const ticket = await client.verifyIdToken({
            idToken : idToken,
            audience : "Your Client ID"
        })
        const payload = ticket.getPayload()
        
        console.log(payload)
        console.log("ticket.getEnvelop : ",ticket.getEnvelop())
        console.log("Ticket User Id :", ticket.getUserId())
    } catch (error) {
        console.log(error)
    }
}





// ? Notes to understand:






/**
 * Google OAuth2 ID Token Verification
 * 
 * This file demonstrates how to verify a Google ID token (obtained from the client-side
 * after a user signs in with Google) using the google-auth-library.
 * 
 * Flow:
 * 1. User signs in with Google on the frontend → gets an idToken
 * 2. Frontend sends this idToken to your backend
 * 3. Backend verifies the idToken using this code
 * 4. If valid, you extract user info (email, name, etc.) from the payload
 */

import { OAuth2Client } from "google-auth-library";

/**
 * Initialize the OAuth2 client with your Google OAuth credentials.
 * 
 * @param {string} clientId - Your Google OAuth 2.0 Client ID (from Google Cloud Console)
 * @param {string} clientSecret - Your Google OAuth 2.0 Client Secret
 * @param {string} redirectUri - The redirect URI configured in Google Cloud Console
 * 
 * NOTE: For ID token verification only, clientSecret and redirectUri are NOT strictly required.
 * However, it's good practice to include them for completeness.
 */
const client = new OAuth2Client({
    clientId: "Your Client ID",
    clientSecret: "Your Client Secret",
    redirectUri: "Your Redirect URI"
});

/**
 * Verifies a Google ID token and extracts user information from it.
 * 
 * @param {string} idToken - The ID token received from the client-side Google Sign-In
 * 
 * @returns {Object|null} The decoded payload containing user info, or null if verification fails
 * 
 * The payload (ticket.getPayload()) contains:
 *   - iss: Issuer (always "accounts.google.com" or "https://accounts.google.com")
 *   - sub: Google User ID (unique identifier for the user)
 *   - aud: Audience (should match your Client ID)
 *   - exp: Expiration time (Unix timestamp)
 *   - iat: Issued at time (Unix timestamp)
 *   - email: User's email address
 *   - email_verified: Whether the email is verified (boolean)
 *   - name: User's full name
 *   - picture: URL to user's profile picture
 *   - given_name: User's first name
 *   - family_name: User's last name
 *   - locale: User's locale (e.g., "en")
 */
const verifyIdToken = async (idToken) => {
    try {
        // Verify the ID token
        // The verifyIdToken method:
        // 1. Validates the token's signature (cryptographic verification)
        // 2. Validates the token's expiration (checks 'exp' claim)
        // 3. Validates the audience matches your Client ID
        // 4. Returns a LoginTicket object on success
        const ticket = await client.verifyIdToken({
            idToken: idToken,
            audience: "Your Client ID" // Must match your Google Cloud Console Client ID
        });

        // Extract the payload containing user information
        const payload = ticket.getPayload();

        // Log the full user payload for debugging
        console.log("Full User Payload:", payload);

        // Get the token envelope (contains header info like algorithm, key ID, etc.)
        console.log("Token Envelope:", ticket.getEnvelope());

        // Get the Google User ID (same as payload.sub)
        console.log("Google User ID:", ticket.getUserId());

        // --- Common use cases after verification ---
        // 
        // 1. Create/update user in your database:
        //    const user = await User.findOneAndUpdate(
        //      { googleId: payload.sub },
        //      { name: payload.name, email: payload.email, picture: payload.picture },
        //      { upsert: true, new: true }
        //    );
        //
        // 2. Generate your own JWT session token:
        //    const sessionToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        //
        // 3. Return user data to the frontend:
        //    return { success: true, user: payload };

        return payload; // Return the payload for further processing

    } catch (error) {
        // Common errors:
        // - TokenExpiredError: The ID token has expired
        // - InvalidTokenError: The token signature is invalid
        // - InvalidAudienceError: The audience doesn't match your Client ID
        console.error("ID Token Verification Failed:", error);
        return null; // Return null to indicate verification failure
    }
};

// --- Example Usage ---
// 
// When you receive an idToken from the frontend (e.g., in an Express route):
//
// app.post("/api/auth/google", async (req, res) => {
//     const { idToken } = req.body;
//     const payload = await verifyIdToken(idToken);
//     
//     if (!payload) {
//         return res.status(401).json({ error: "Invalid or expired token" });
//     }
//     
//     // User is authenticated - proceed with your app logic
//     res.json({ 
//         message: "Authentication successful",
//         user: {
//             id: payload.sub,
//             email: payload.email,
//             name: payload.name,
//             picture: payload.picture
//         }
//     });
// });
