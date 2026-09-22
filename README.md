# Project Name
Dev Stack
---
# Description
Dev Stack is a web application where users can explore different technologies and add their favorite technologies to build their own developer stack.
---
# Technologies Used
-React.js
-Tailwind CSS, DaisyUI
-TypeScript / JavaScript (ES6+)
-React-Toastify (NPM Package)
-JSON (for technology data)
-Vite (build tool)
---
# Features
-Users can explore different technologies with their details.
-Users can add technologies to their personal stack.
-Users can remove a technology or remove all technologies from their stack.
---
# React Questions

(i). What is JSX, and why is it used in React?
JSX is a syntax that allows us to write HTML code inside JavaScript for building React UI.

(ii). What is the difference between props and state?
Props are passed from a parent component, while state stores and manages data inside a component.

(iii). What does the useState hook do, and where did you use it in this project?
useState helps manage changing data, and I used it to store the selected technologies in the stack.

(iv). What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs code after rendering, and it can be used to load JSON data when the component starts.

(v). Why does every item in a .map() list need a unique key prop?
A unique key helps React identify each item and update the list efficiently.

(vi). What is conditional rendering? Show one place you used it.
Conditional rendering shows different UI based on a condition.

(vii). How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent sends data using props, and a child sends data back by calling a function passed through props.