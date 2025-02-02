// Create web server


const express = require('express');
const app = express();
const PORT = 3000;

app.get('/comment', (req, res) => {
  res.json({
    message: 'This is a comment',
    status: 'success'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Run this script and open http://localhost:3000/comment in your browser.
// You will see the JSON response. 
// You can also use Postman to test this API.

// 3. Return a dynamic JSON response
// Now, let's return a dynamic JSON response. We will use query parameters to return a custom message.
// ok


