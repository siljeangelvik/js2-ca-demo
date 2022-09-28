import { API_BASE_URL } from "./register.mjs";
const postsUrl = `${API_BASE_URL}/api/v1/social/posts`;

// End-points:
// Register:  /api/v1/social/auth/register
// Login: /api/v1/social/auth/login
// All Entries: /api/v1/social/posts

// ------------------ Request with Token
export async function getWithToken(url, method = 'GET') {
    try {
        // console.log(url);
        const token = localStorage.getItem('accessToken');
        // console.log(token);
        const fetchOptions = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, fetchOptions);
        // console.log(response);
        const json = await response.json();
        // console.log(json);
    } catch (error) {
        console.log(error);
    }
}

getWithToken(postsUrl);
