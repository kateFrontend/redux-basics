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
  
### ACTION - you can think of an action as an event that describes something that happened in the application.
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