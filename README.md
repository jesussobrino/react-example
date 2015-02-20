poc-webapp
----------

Example web application with angular.js(client) and hapi.js(server) for
the architecture draft.

**Requirements**

[node.js](http://nodejs.org),

*if you live on the bleeding edge you can also use [io.js](http://iojs.org)*

*tested on nodejs v0.10.36,v0.12.0 and iojs v1.1.0*

**Instructions**

+ Download the required dependencies with

  `npm install`

+ Start a local http server with:

  `node server.js`

  *You can optionally set a PORT environment variable for the server*

  `
  PORT=6666
  node server.js
  `

+ To start the Karma (test runner) server use:

  `npm test`

  The tests will be run each time a file is saved.
  Test coverage is output in HTML format in the "coverage" directory.


+ To minify the client use:

  `make`

  This will lint and minify the JS files, minify the HTML and CSS files and
  place them in a "dist" directory.

**Notes**

You can add "routes" dynamically by making a POST request to the server
(*make sure the server is started*)

```

curl -X POST http://localhost:3000/register \
  --data "{ \"path\": \"http://someurl/endpoint\", \"method\": \"GET\" }" \
  --header "content-type:application/json"

```

This will add a new "route" available at

`http://localhost:3000/endpoint`

and will forward the requests to the original url

