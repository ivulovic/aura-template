# my-js-lib

This is example of how to build library in react and then export it so we can use it within normal .html file.

Imagine we are having Component element in our library, invoke in our file would look like this:

```
<div data-component="Component" data-prop-title="Title"></div>
```

To use this library developer will have to have html file including libary file:

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="root"></div>
        <script defer src="my-lib.umd.js"></script>
        <div data-component="Component" data-prop-title="Title"></div>
    </body>
</html>
```

The `div#root` is neeed so we can init React code, the `script` tag is used to load our library bundle js file, and `div[data-component="Component"]` is our component we want to show in our website.

Why would you use this library?

Sometimes you want to completely encapsulate specific logic within your library so end users just include your script file and show some data.
