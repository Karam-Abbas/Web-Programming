import express from "express";
const port = process.env.PORT || 3000;
const app = express();

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      name: "joke1",
      joke: "Why did the chicken cross the road? To get to the other side.",
    },
    {
      id: 2,
      name: "joke2",
      joke: "Why did the cow go to school? To learn to milk.",
    },
    {
      id: 3,
      name: "joke3",
      joke: "Why did the dog go to the dentist? To get a toothbrush.",
    },
    {
      id: 4,
      name: "joke4",
      joke: "Why did the elephant get lost? Because it wanted to play in the rain.",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
