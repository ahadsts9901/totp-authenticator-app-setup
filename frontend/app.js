const userId = "USER_ID_HERE"; // demo
const baseUrl = "http://localhost:5005"

async function getQR() {
    const res = await fetch(`${baseUrl}/api/auth/enable-2fa`, {
        method: "POST"
    });

    const data = await res.json();

    document.getElementById("qr").src = data.qr;
}

async function verify() {
    const token = document.getElementById("otp").value;

    const res = await fetch(`${baseUrl}/api/auth/verify-2fa`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ token })
    });

    const data = await res.json();
    alert(data.message);
}

async function verifyLoginOTP() {
    const token = document.getElementById("otp-ver").value;

    const res = await fetch(`${baseUrl}/api/auth/verify-login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token
        })
    });

    const data = await res.json();
    alert(data.message);
}
