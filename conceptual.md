### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React Router is a client side routing that syncs the application with the URL. It allows us to build a single page web application with navigation without the page refreshing when the user navigates through the application. React Router uses Component structure to call components

- What is a single page application?
Single page applications are web apps that use client side routing exclusively. They do not need to reload the page everytime a user navigates and uses JavaScript to manipulate the URL using a Web API.

- What are some differences between client side and server side routing?
Server-Side Routing: Decides what HTML to return based on the URL requested. Clinking a link causes the browser to request the page and reload/replace the entire DOM. Everytime the user navigates the page, the browser makes a new request to the server. It is the traditional way of routing.
Client-Side Routing: These are single page web applications. Uses JavaScript to manipulate URL. The entire web application is loaded on the first request. Everytime a user navigates on the page, routing is handled internally by JS instead of making a new request. Better UI/UX. Generally requires more setup than traditional server-side routing.

- What are two ways of handling redirects with React Router? When would you use each?
Using the component. We need to import "Navigate" from react-router-dom, then add the path to the call when the user is acessesing an invalid URL or is redirected. Calling the ".push" method on the "history" object. We can access the history object by importing the "useHistory" hook from React, then we wrap the history object over the browsers history API. The history object has a '.push(url)' which adds the url to the session history.

- What are two different ways to handle page-not-found user experiences using React Router? 
We can add a final component at the bottom inside of the component, this means the routes above haven't matched - the only possible route would hit the one that does not actually exist. Using the component to add a "page-not-found" route.

- How do you grab URL parameters from within a component using React Router?
We import the "useParams" hook from react-router, it then allows us to get any parameter that has been defined with a path that has a (:) before the parameter

- What is context in React? When would you use it?
Context is a way to allow some data to be accessible anywhere in the application. Usually, a prop can only be passed down to components via parent to child, even if a component doesn't need that prop, for its child to be able to use that prop it needs to be passed down. 

- Describe some differences between class-based components and function components in React.
The most common difference is the syntax. Class based components are JavaScript classes whereas functional components are JavaScript functions. Class components require you to extend from React Component and create a render funtion which returns a React element. Previously the only way to have state in a component is to create a class based component. Functional components used to be "stateless" until the introduction of Hooks. Functional components have significantly less code. 

- What are some of the problems that hooks were designed to solve?
Hooks solve the problem of:
- adding and managing "state" using "useState"
- Lifecycle methods using "useEffect"
- Sharing non-visual logic using "useContext"
Previously the only way to share logic in class based methods were higher order components.