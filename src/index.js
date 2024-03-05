import { createCaptcha } from 'freecaptcha';





async function freecaptcha() {
   var el = document.getElementById('captcha');
   var captcha_val = createCaptcha(el);
   console.log(captcha_val);
  }
  window.freecaptcha = freecaptcha;


