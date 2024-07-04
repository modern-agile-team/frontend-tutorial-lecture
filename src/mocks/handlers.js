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
    console.log(registerData);
    if (registerData) {
      return new MockServiceWorker.HttpResponse(null, {
        status: 403,
        statusText: "already uid",
      });
    }
    userData.push(newData);
    return MockServiceWorker.HttpResponse.json(newData, { status: 201 });
  }),
];

export default handlers;
