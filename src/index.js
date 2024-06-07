import { createCaptcha } from 'freecaptcha';





async function freecaptcha() {
   var el = document.getElementById('captcha');
   var captcha_val = createCaptcha(el);
   console.log(captcha_val);
   localStorage.setItem('cap', captcha_val);
  }
  window.freecaptcha = freecaptcha;

async function validateCaptcha(){
    var el = document.getElementById('captchaTextBox');
    var inp = el.value;
    if (inp == ''){
        console.log("false");
        return;
    }
    const cval = localStorage.getItem('cap');
    if (cval == inp) {
        console.log("true");
    }
    else {
        console.log("false");
    }
    el.value = '';
}
window.validateCaptcha = validateCaptcha;

async function flush(){
    localStorage.setItem('cap', '');
}
window.flush = flush;
