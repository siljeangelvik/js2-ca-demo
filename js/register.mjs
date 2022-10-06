export const API_BASE_URL = 'https://nf-api.onrender.com';
export const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;
//import { userData as userToRegister } from "./utilities/validate-register.mjs";

// End-points:
// Register:  /api/v1/social/auth/register
// Login: /api/v1/social/auth/login
// Post Feed:
// Post ID:

// --------------- Registers User
/**
 * API call that registers the user
 * @param {string} url
 * @param {any} userData
 * ```js
 * registerUser(registerUrl, userToRegister);
 * ```
 */

export async function registerUser(url, userData) {
     console.log(url, userData);
    try {
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        console.log(response);
        const json = await response.json();
      console.log(json);
    } catch (error) {
        console.log(error);
    }
}


userToRegister = {
"name": validUserName,
"email": validEmail,
"password": validPassword,
"avatar": "https://img.service.com/avatar.jpg",
"banner": "https://img.service.com/banner.jpg"
}


// registerUser(registerUrl, userToRegister);