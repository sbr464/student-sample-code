## Creating and hooking up a controller
1. Create /controllers/index.js
2. require('./controllers/index.js') in app.js
3. Add module.exports to /controllers/index.js
4. Add route handler to the exports object
5. Create the route in app.js, referencing the route handler from /controllers/index.js

## Pulling data from a model
1. Create /models/volcano.js
2. Define mock data (Constructor, array of instances)
3. Export a model object with a getAllVolcanoes method
4. Require /models/volcano.js from /controllers/index.js
5. Call getAllVolcanoes() in /controllers/index.js and passed it to the view