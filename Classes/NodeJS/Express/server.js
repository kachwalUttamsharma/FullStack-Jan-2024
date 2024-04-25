const express = require("express");
const app = express();
const port = 3000;

// in-built middleware
app.use(express.json());

let userInfo = [
  {
    username: "Sambit",
    email: "sambit@scaler.com",
  },
];
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getUserDetails", (req, res) => {
  res.send(userInfo);
});

app.post("/addNewUser", (req, res) => {
  const newUser = req.body;
  userInfo.push(newUser);
  console.log(userInfo);
  res.status(201).json({ message: "user has been created", user: newUser });
});

app.put("/updateUserInfo", (req, res) => {
  const user = req.body;
  console.log("before", userInfo);
  for (let i = 0; i < userInfo.length; i++) {
    if (user.username === userInfo[i].username) {
      userInfo[i].email = user.email;
      break;
    }
  }
  console.log(userInfo);
  res.status(200).json({ message: "updated the user info" });
});

app.delete("/deleteUser", (req, res) => {
  const user = req.body;
  userInfo = userInfo.filter(
    (u) => u.username.toLowerCase() !== user.username.toLowerCase()
  );
  console.log(userInfo);
  res.status(200).json({ message: "user has been deleted" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
