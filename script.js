document.addEventListener("DOMContentLoaded", function() {
    let menuBtn = document.querySelector(".menu-btn");
    let cancelBtn= document.querySelector(".cancel-btn");
    let navBar = document.querySelector(".navbar");

    menuBtn.onclick = function() {
        menuBtn.style.opacity = "0";
        menuBtn.style.pointerEvents = "none";
        navBar.classList.add("active");
    }
    cancelBtn.onclick = function() {
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
        navBar.classList.remove("active");
    } })

document.addEventListener("DOMContentLoaded", function() {
    // ...其他代码...

    // 表单验证
    const form = document.getElementById("contact-form");
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = form.elements["name"].value.trim();
            const email = form.elements["email"].value.trim();
            const subject = form.elements["subject"].value.trim();
            const message = form.elements["message"].value.trim();
            const msgDiv = document.getElementById("msg");

            // 简单邮箱正则
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(!name || !email || !subject || !message) {
                msgDiv.textContent = "Please fill in all required fields.";
                msgDiv.style.color = "red";
                return;
            }
            if(!emailPattern.test(email)) {
                msgDiv.textContent = "Please enter a valid email address.";
                msgDiv.style.color = "red";
                return;
            }
            msgDiv.textContent = "Message sent successfully!";
            msgDiv.style.color = "green";
            form.reset();
        });
    }
});
    


    document.addEventListener("DOMContentLoaded", function() {
    // ...existing code...

    // 主题切换
    const toggleBtn = document.getElementById('toggle-theme');
    toggleBtn.onclick = function() {
        document.body.classList.toggle('dark-mode');
        // 可选：切换按钮图标
        toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    }
});



