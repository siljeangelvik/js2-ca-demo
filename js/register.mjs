export const API_BASE_URL = 'https://nf-api.onrender.com';

const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

// End-points:
// Register:  /api/v1/social/auth/register
// Login: /api/v1/social/auth/login

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
    // console.log(url, userData);
    try {
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        // console.log(response);
        const json = await response.json();
        //console.log(json);
    } catch (error) {
        console.log(error);
    }
}

const userToRegister = {
    "name": "bgo_student_test",
    "email": "bgo_student_test@stud.noroff.no",
    "password": "noroff-student-321",
    // "avatar": "https://img.service.com/avatar.jpg",
    // "banner": "https://img.service.com/banner.jpg"
};

// registerUser(registerUrl, userToRegister);
