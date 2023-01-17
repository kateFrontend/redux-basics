# Redux Basics

**Redux is a pattern and library for managing and updating application state, using events called "actions".** It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

Official source https://redux.js.org/

## React-redux

Redux can integrate with any UI framework (Angular, Vue, Vanila Js etc.), and is most frequently used with React. React-Redux is an official package that lets your React components interact with a Redux store by reading pieces of state and dispatching actions to update the store.

## Redux Toolkit

**Redux Toolkit** is recommended approach for writing Redux logic. It contains packages and functions that are essential for building a Redux app. Redux Toolkit builds best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

## Install 
```
npm install redux react-redux
```

## Terminology

Let's imagine that the user wants to add items to the cart. \
To use Redux for this, let's analyze the following importants Redux terms:
- STORE
- ACTION
- REDUCER
- DISPATCH
  
#### **ACTION** - you can think of an action as an event that describes something that happened in the application.
Action does't change the state, it's just an intention to do something. 

A - one of the possible user actions (add to cart)

```
const addToCart = () => {
    return {
        type: "ADD_TO_CART"
    }
}
```

B - another one of the possible user actions (remove item from cart)

```
const removeItem = () => {
    return {
        type: "REMOVE_ITEM"
    }
}
```

C - another one of the possible user actions (change the quantity of the item in the cart)

```
const changeNumber = () => {
    return {
        type: "CHANGE_NUMBER"
    }
}
```

#### **REDUCER** - you can think of a reducer as an event listener which handles events based on the received action (event) type.
A description of how our intentions to make actions will change the state. Reducer does't change the state.

The logic inside reducer functions typically follows the same series of steps:

- Check to see if the reducer cares about this action
- If so, make a copy of the state, update the copy with new values, and return it
Otherwise, return the existing state unchanged.

Reducers can use any kind of logic inside to decide what the new state should be: if/else, switch, loops, and so on. 
I'll use switch logic here:

```
const cart = (state = 0, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
        return state +1;

        case "REMOVE_ITEM":
        return state -1;

        default:
        return state;
    }
}
```

#### **STORE** - the current Redux application state lives in an object called the store.


```
import { createStore } from 'redux'

let store = createStore(cart);

```

#### **DISPATCH** - the only way to update the state is to call store.dispatch() and pass in an action object.
The store will run its reducer function and save the new state value inside:

```
store.dispatch(addToCart())
store.dispatch(addToCart())
store.dispatch(removeItem())
```

To check what our console shows we need to use a method called **getState** that returns the current state value:

```
let store = createStore(cart);
store.subscribe(() => console.log(store.getState()));
```
