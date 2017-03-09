# Static files

At some stage we'll want to send more than plain text responses like `Hello world!`. Static files including images and CSS is one of those files you may want to provide.

Express needs to know where static files are located and where they can be requested at.

In this example we are going to use the `path` module. At the top of `index.js`, include the following.

```javascript
const path = require('path')
```

Now let's mount static files at the root of our app.

```javascript
app.use(express.static(path.join(__dirname, 'public')))
```

Before we start our app, download and copy [`public/logo.png`](public/logo.png) to a new folder called `public`.

Now start your app.

```
node index.js
```

Visit [`http://localhost:3000/logo.png`](http://localhost:3000/logo.png) and you will see the express logo.

## Changing the path for static files

Static files don't always have to live at the root of the app. You can specify a route as shown below.

```javascript
app.use('/assets', express.static(path.join(__dirname, 'public')))
```

Now anything inside `/public` will be accessible at [`http://localhost:3000/assets`](http://localhost:3000/assets/).

---

<!-- [Next: Middleware](../05-middleware) -->
