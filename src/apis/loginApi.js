const uid = document.getElementById("uid"),
  password = document.getElementById("password");

function loginHandler() {
  const req = {
    uid: uid.value,
    password: password.value,
  };
  fetch("/api/login", {
    method: "POST",
    headers: {
      Accept: "application / json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("아이디 비밀번호를 확인해 주세요.");
      }
      return res.json();
    })
    .then(() => {
      location.href = "/public/views/page.html";
    })
    .catch((err) => {
      alert(err);
    });
}
