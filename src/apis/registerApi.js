const uid = document.getElementById("uid"),
  password = document.getElementById("password"),
  checkPw = document.getElementById("check-password"),
  name = document.getElementById("name");
const registerBtn = document.getElementById("registerSubmit");

function registerHandler() {
  if (password.value === checkPw.value) {
    const req = {
      id: 3,
      uid: uid.value,
      password: password.value,
      name: name.value,
    };
    try {
      fetch("/api/register", {
        method: "POST",
        headers: {
          Accept: "application / json",
        },
        body: JSON.stringify(req),
      }).then((res) => res.json);
    } catch (err) {
      if (err.response.status === 403) {
        alert("이미 존재하는 아이디 입니다.");
      }
    }
  } else {
    alert("비밀번호가 일치하지 않습니다.");
  }
}

function getUser() {
  fetch("/api/users", {
    method: "GET",
    headers: {
      Accept: "application / json",
    },
  })
    .then((res) => res.json)
    .then((res) => console.log(res));
}
