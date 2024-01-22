const express = require("express");
import { UserInput } from "common";
const app = express();
const port = 3003;

app.use(express.json());

app.post("/", (req: any, res: any) => {
  let parsedUser = UserInput.safeParse(req.body);
  if (!parsedUser.success) {
    res.send("incorrect inpur2!");
    return;
  }
  res.send("correct input");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
