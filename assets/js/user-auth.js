function showAlertAndRedirect(message, redirectUrl, isChangePage) {
  if(isChangePage) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500,
      padding: '3em',
      didClose: () => {
        window.location.assign(redirectUrl);
      }
    });
  } else {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500,
      padding: '3em',
    });
  }
}

const signUpBtn = document.querySelector('#signUpBtn');
const loginBtn = document.querySelector('#loginBtn');
const sendResetPasswordBtn = document.querySelector('#sendResetPasswordBtn');
const resetPasswordBtn = document.querySelector('#resetPasswordBtn');

if (signUpBtn) {
  signUpBtn.addEventListener("click", function() {
    showAlertAndRedirect('註冊成功', 'login.html', true);
  });
}

if (loginBtn) {
  loginBtn.addEventListener("click", function() {
    showAlertAndRedirect('登入成功', 'index.html', true);
  });
}

if (sendResetPasswordBtn) {
  sendResetPasswordBtn.addEventListener("click", function() {
    showAlertAndRedirect('已發送驗證信', '', false);
  });
}

if (resetPasswordBtn) {
  resetPasswordBtn.addEventListener("click", function() {
    showAlertAndRedirect('密碼重設成功', 'login.html', true);
  });
}
