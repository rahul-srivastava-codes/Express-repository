const express = require("express");
const app = express();
const port = 3000;

var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];
app.get("/", (req, res) => {
  const john_kidney = users[0].kidneys;
  const numberofkidneys = john_kidney.length;
  let numberofhealthykidneys = 0;
  for (let i = 0; i < numberofkidneys; i++) {
    if (john_kidney[i].healthy) {
      numberofhealthykidneys++;
    }
  }
  const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;
  res.json({
    numberofkidneys,
    numberofhealthykidneys,
    numberofunhealthykidneys,
  });
});
app.post("/", (req, res) => {
  const ishealthy = req.body.ishealthy;
  users[0].kidneys.push({
    healthy: ishealthy,
  });
  res.json({
    message: "kidney status updated",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    message: "all kidneys are healthy",
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
