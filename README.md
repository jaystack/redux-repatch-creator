# redux-repatch-creator

Redux enhancer for dispatching reducers

[Repatch](https://www.npmjs.com/package/repatch) is just a simplfied [Redux](https://www.npmjs.com/package/redux), that let you create actions more briefly by dispatching reducers directly.

The [redux-repatch](https://www.npmjs.com/package/redux-repatch) library adds this feature to Redux and ships the [redux-thunk](https://www.npmjs.com/package/redux-thunk) functionality too.

However if you need to be compatible with the original [redux-thunk](https://www.npmjs.com/package/redux-thunk), then you are looking for this library.

**The `redux-repatch-creator` wraps the reducers into a redux-like action object.**

## Installation

```
npm install --save redux-repatch-creator
```

## How to use

`redux-repatch-creator` provides a store enhancer, that is usable at creating the store. This enhancer ensures that you can use regular actions, original `thunk` actions and repatch actions together:

```javascript
import { createStore } from 'redux'
import { repatch, createAction } from 'redux-repatch'

const reducer = (state = 0, action) {
  switch (action.type) {
    'SET_TO_VALUE': return action.value
    default: state
  }
}

const store = createStore(reducer, repatch)

const setToValue = value => ({ type: 'SET_TO_VALUE', value }) // redux action
const increment = value => createAction(state => state + value) // repatch action

store.dispatch(setToValue(42)) // 42
store.dispatch(increment(10)) // 52
```

### Use with other enhancers

```javascript
import { createStore, applyMiddlewares, compose } from 'redux'
import { repatch, createAction } from 'redux-repatch-creator'

const store = createStore(
  reducer,
  compose(
    applyMiddlewares(myMiddleware),
    repatch
  )
)
```

### Use without `createAction` function

```javascript
import { REDUCER } from 'redux-repatch-creator'

const increment = value => ({
  type: REDUCER,
  reducer: state => state + value
})
```

## How it works

The `repatch` enhancer extends your reducer by a special action type (`REDUCER`), that every repatch action contains. The `createAction` function creates a `{ type: REDUCER, reducer }` action object. When this action arrives into the reducer, the reducer considers that is a repatch action, and reduces the whole state by the given `reducer`.

## Bundles

```html
<script src="https://unpkg.com/redux-repatch-creator/dist/redux-repatch-creator.js"></script>
```

or the minified bundle:

```html
<script src="https://unpkg.com/redux-repatch-creator/dist/redux-repatch-creator.min.js"></script>
```

then

```javascript
const { repatch, createAction, REDUCER } = ReduxRepatchCreator
```

---

## License

[MIT](https://spdx.org/licenses/MIT)

## Community

[https://twitter.com/repatchjs](https://twitter.com/repatchjs)

## Developed by

[![JayStack](http://jaystack.com/wp-content/uploads/2017/08/jaystack_logo_transparent_50.png)](http://jaystack.com/)
