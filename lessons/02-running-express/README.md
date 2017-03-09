# Running Express

Now we have Express installed and added to our `package.json`, it is time to run Express and mount to an available PORT.

Next, create a file named `index.js` and copy the code below to that file.

```javascript
const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('Example server started on port 3000')
})
```

In the code above, we're assigning `express` to a constant we can initialise later.

On the last line, we've told Express to listen for requests on port `3000`.

Next to execute that code, simply run `node index.js`.

You should see `Example server started on port 3000` printed in your terminal.

Now to go  [`http://localhost:3000`](http://localhost:3000/). You will see `Cannot GET /` returned.

Express is running locally and listening for requests 💯! Next we'll define a route.

---

[Next: Defining a route](../lessons/03-defining-a-route)
