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
      reservation_date: "2020-09-12",
      reservation_time: "21:30",
      reservation_name: "문민종",
      reservation_personnel: 10,
      phoneNumber: "01071847653",
      choice_Menu: "제육볶음,순두부찌개",
      Prepayment: "O",
      Prepayment_amout: "10000",
    },
    {
      id: 1,
      reservation_date: "2020-11-10",
      reservation_time: "21:30",
      reservation_name: "원재문",
      reservation_personnel: 5,
      phoneNumber: "01088886666",
      choice_Menu: "김치찌개,감자튀김,소세지구이",
      Prepayment: "O",
      Prepayment_amout: "20000",
    },
    {
      id: 2,
      reservation_date: "2020-10-30",
      reservation_time: "21:30",
      reservation_name: "한희정",
      reservation_personnel: 6,
      phoneNumber: "01057630163",
      choice_Menu: "치즈스틱,모듬튀김,치즈계란찜,연어",
      Prepayment: "x",
      Prepayment_amout: "",
    },
  ]);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
