const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Hello from my PC API!" });
});

app.get('/joke', (req, res) => {
  res.json({ joke: "Why did the dev quit? He had no branches to hang onto" });
});
app.get('/kist', (req, res) => {
    res.json({ kist: "Kist is a term used in some regions to refer to a chest or box, often used for storage." });
}
);
app.get('/micheal', (req, res) => {
    res.json({ micheal: "Michael is a name that means 'who is like God'." });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});