# Defining a route

Routes allow us to define a response when a request is made.

Let's go ahead and define a route at the root of our app.

When a request is made to `/` we will send the response `Hello world!`. Copy the code below to the `index.js` file above the `app.listen` declaration.

```javascript
app.use('/', (req, res) => {
  res.send('Hello world!')
})
```

Finally, start your app.

```
node index.js
```

Now to go [`http://localhost:3000`](http://localhost:3000/) to see our new `Hello world!` response.

---

[Next: Defining a route](../lessons/03-defining-a-route)
