# Redux Flow

1) On render, fetch data by dispatching [thunk action](https://github.com/greylemon/sample-redux-flow/blob/4c9317fb8bbc566f9054f621e558f1a43395e4e9/frontend/src/views/HelloWorld.js#L27). [Factory function](https://github.com/greylemon/sample-redux-flow/blob/4c9317fb8bbc566f9054f621e558f1a43395e4e9/frontend/src/redux/thunk/helloWorld.js#L5) will be called, which takes in the store (for dispatching actions) and controller for creating HTTP requests to the server (backend). 

2) The [factory thunk action](https://github.com/greylemon/sample-redux-flow/blob/master/frontend/src/redux/thunk/common/REST.js) splits the HTTP request function into stages:

- Start request
- Successful request or failed request

3) On the backend, the request is received by [app controller](https://github.com/greylemon/sample-redux-flow/blob/4c9317fb8bbc566f9054f621e558f1a43395e4e9/backend/src/app.js#L33). 

4) The [controller](https://github.com/greylemon/sample-redux-flow/blob/master/backend/src/controllers/HelloWorld.js) is responsible for waiting for requests from clients (frontend). It will call services to process the request.

5) The [service](https://github.com/greylemon/sample-redux-flow/blob/master/backend/src/services/HelloWorld.js) is responsible for processing the business logic of the request. It uses repositories (data access layer) to get data.

6) The [repository](https://github.com/greylemon/sample-redux-flow/blob/master/backend/src/repositories/HelloWorld.js) is reponsible for fetching data from the database/data store.

7) The response has been processed and is sent back to the client.

8) The process for receiving data is now executed in the redux action from before. This will update the store with the lookup values received from the server.

9) The [selector functions](https://github.com/greylemon/sample-redux-flow/blob/4c9317fb8bbc566f9054f621e558f1a43395e4e9/frontend/src/views/HelloWorld.js#L18) will get a mutation of the store data, which the React component will use. Note that reselect selectors mutate the data, so becareful of usage as it may cause performance issues. 
