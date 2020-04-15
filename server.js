const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 0,
      image: "https://placeimg.com/64/64/1",
      name: "문민종",
      birthday: 950608,
      gender: "남자",
      job: "대학생",
    },
    {
      id: 1,
      image: "https://placeimg.com/64/64/2",
      name: "원재문",
      birthday: 951212,
      gender: "남자",
      job: "대학생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/3",
      name: "한희정",
      birthday: 960912,
      gender: "여자",
      job: "직장인",
    },
  ]);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
