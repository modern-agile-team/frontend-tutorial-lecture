"use strict";

const userData = [
  {
    id: 1,
    name: "유저1",
    uid: "user1",
    password: "pass1",
  },
  {
    id: 2,
    name: "유저2",
    uid: "user2",
    password: "pass2",
  },
];

const handlers = [
  MockServiceWorker.http.get("/api/users", () => {
    return MockServiceWorker.HttpResponse.json(userData);
  }),

  MockServiceWorker.http.post("/api/register", async ({ request }) => {
    const newData = await request.json();

    const registerData = userData.find((data) => {
      return data.uid === newData.uid;
    });
    if (registerData) {
      return new MockServiceWorker.HttpResponse(null, {
        status: 409, //conflict 충돌 상태코드
        statusText: "the uid already exists.",
      });
    }
    userData.push(newData);
    return MockServiceWorker.HttpResponse.json(newData, { status: 201 });
  }),

  MockServiceWorker.http.post("/api/login", async ({ request }) => {
    const loginData = await request.json();

    const loginSuccess = userData.find((data) => {
      return data.uid === loginData.uid && data.password === loginData.password;
    });
    if (!loginSuccess) {
      return new MockServiceWorker.HttpResponse(null, {
        status: 401, //액세스 권한이 없음
        statusText: "the uid password does not exist.",
      });
    }
    return MockServiceWorker.HttpResponse.json(loginData, {
      status: 200, //성공
    });
  }),
];

export default handlers;
