# Disclaimer : Project made from following video strictly for learning purpose

https://www.youtube.com/watch?v=Dorf8i6lCuk

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Lessons learned

`1. React component is function which is defined and exported, plus it should return anything that can be rendered in html (mostly JSX)`

`2. First character of the Custom component's name should be uppercase.`

Reason behind that is, react internally recognize tags with case lettering.\
Every internal tag starts with lower case letter.\
Hence, to differentiate custom tag should start with upper case letter.

`3. props (or can be referred with any other name) is a js object containing key value pair of properties passed in the custom object.`

i.e to accept dynamic content from where it is rendered.

`4. useState is one of the React Hook`

Always return the array with two elements.\
You can set initial value of the state and it can be accessed using the first element of the array.\
Second element in array, is a function which allows us to change the value of the state.\
You cannot change the state value by reassinging the first element of the array.\
Whenever you call the second element (i.e the function used to change the state) for example in this project, setModelIsOpen, react will re-execute the component to which that state belongs and re-evaluate it. It also updates what rendered on the screen.\
