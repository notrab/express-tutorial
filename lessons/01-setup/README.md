# Creating a new Project

Using the commands below, we're going to create a project named `express-tutorial` *(you can name it whatever you like)* and `cd` to that location.

```bash
mkdir express-tutorial
cd express-tutorial
```

As we're going to be using Node.js and Express.

Let's create a `package.json` to store some configuration along with all our dependencies and their versions.

```bash
npm init -y
```

## Installing Express

Now we need to add Express to our `package.json`. You can do this easily with NPM.

```bash
npm install express --save
```

---

[Next: Running Express](../02-running-express/)
