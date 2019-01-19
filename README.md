# react-ajax-practice

## Overview
This review assignment will give you some additional practice with React, AJAX, and controlled components. In this assignment, you will be creating a small React front-end that sends an AJAX request to a server, and then displays the response on the screen.

## What's in this repo
- Boilerplate `index.html` and working webpack configuration
- Empty `index.js` and `App.jsx` files

## Project Installation
```npm install```

## How to Run
``` npm start```

## User Stories
- When the user visits the page, a small form should be displayed on the screen allowing a user to input their name and a message.

- When the user clicks the submit button, the application should send an AJAX request to the server and display the response on the screen.

## Endpoint

> `http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/INSERT_COHORT_NAME_HERE/greeting`
- Example Greeting Object Format for a POST Request

    `{
      "name": "Example name",
      "message": "Example message"
    }`
    
- The cohort name should either be `hrsf110` or `hrsf111` as appropriate

## Example 
![Example](https://i.imgur.com/iT0T62v.png "Potential Example")


## Bare Minimum Requirements
- Create and mount your React front-end on the index.html page

- Implement a button that sends an AJAX request using one of JQuery's AJAX methods to the endpoint listed in the Endpoint section. Note: Please be sure to understand how the information being sent to the server is formatted, as incorrectly formatted responses will be rejected by the server.
- Display the response from the server on the page


## Advanced Content
- Replace jQuery's AJAX method with the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Nightmare Mode
- Replace the Fetch API with [Axios](https://www.npmjs.com/package/axios)
