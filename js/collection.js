// -------------- MENU, CALENDAR, LIST DATA
import  { makeMenu } from "./utils/nav.mjs";
import  { CalendarControl } from "./utils/calendar.mjs";
import  { listData } from "./utils/utils.mjs";

//--------------- REGISTER, LOGIN, getAccessToken
import  { registerUser } from "./register.mjs";
import  { loginUser } from "./login.mjs";
import  { getWithToken } from "./accessToken.mjs";



import Lightbox from 'bs5-lightbox';

const options = {
    keyboard: true,
    size: 'fullscreen'
};

document.querySelectorAll('.my-lightbox-toggle').forEach((el) => el.addEventListener('click', (e) => {
    e.preventDefault();
    const lightbox = new Lightbox(el, options);
    lightbox.show();
}));