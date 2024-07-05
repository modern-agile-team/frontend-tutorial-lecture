const uid = document.getElementById("uid"),
  password = document.getElementById("password");

function loginHandler() {
  const req = {
    uid: uid.value,
    password: password.value,
  };
  try {
    fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application / json",
      },
      body: JSON.stringify(req),
    })
      .then((res) => res.json)
      .then((res) => {
        if (res.response.status === 200) {
          location.href = "/public/views/page.html";
        }
      });
  } catch (err) {
    alert("아이디 비밀번호를 확인해 주세요.");
  }
}
