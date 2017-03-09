# Defining a route

Routes allow us to define a response when a request is made.

Let's go ahead and define a route at the root of our app to respond with `Hello world!`.

Copy the code below to the `index.js` file above the `app.listen` declaration.

```javascript
app.use('/', (req, res) => {
  res.send('Hello world!')
})
```

Finally, start your app.

```
node index.js
```

[`http://localhost:3000`](http://localhost:3000/) will now return `Hello world!`.

---

[Next: Static files](../lessons/04-static-files)
