export default function handler(req, res) {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  let count = 0;
  setInterval(() => {
    res.write(`data: ${JSON.stringify({ message: "Update " + count++ })}\n\n`);
  }, 5000);
}
