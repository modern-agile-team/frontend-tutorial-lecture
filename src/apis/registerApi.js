const uid = document.getElementById("uid"),
  password = document.getElementById("password"),
  checkPw = document.getElementById("check-password"),
  name = document.getElementById("name");
const registerBtn = document.getElementById("registerSubmit");

function registerHandler() {
  //에러핸들링
  if (uid.value === "" || password.value === "") {
    alert("아이디 비밀번호를 입력해 주세요.");
    return 0;
  }

  if (password.value === checkPw.value) {
    const req = {
      id: 3,
      uid: uid.value,
      password: password.value,
      name: name.value,
    };
    fetch("/api/register", {
      method: "POST",
      headers: {
        Accept: "application / json",
      },
      body: JSON.stringify(req),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("이미 존재하는 아이디 입니다.");
        }
        return res.json();
      })
      .then(() => {
        if (confirm("회원가입 성공! 로그인페이지로 이동하시겠습니까?")) {
          location.href = "/public/views/login.html";
        }
      })
      .catch((err) => {
        alert(err);
      });
  } else {
    alert("비밀번호가 일치하지 않습니다.");
  }
}
