import { API_BASE_URL } from "./register.mjs";

const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

// End-points:
// Register:  /api/v1/social/auth/register
// Login: /api/v1/social/auth/login
// All Entries: /api/v1/social/posts

// ------------------ Login User
export async function loginUser(url, userData) {
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
        // console.log(json);
        // console.log(json.accessToken);
        const accessToken = json.accessToken;
        localStorage.setItem('accessToken', accessToken);
    } catch (error) {
        console.log(error);
    }
}

const userToLogin = {
    "email": "bgo_student_test@stud.noroff.no",
    "password": "noroff-student-321",
};

// loginUser(loginUrl, userToLogin);

