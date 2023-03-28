React Ecommerce Frontend\
This project is a frontend application built with React that consumes a Node-Express backend application running on Elastic. The application allows you to view, create, read, update, and delete products, users, and orders.\

Getting Started

Prerequisites\
Node.js installed on your local machine.\
A Node-Express backend application running on Elastic.\
Firebase project ID.

Installation
Clone the repository to your local machine.\
Install the required packages using the following command:\
`npm install`\
To start the development server on port 3000, use the following command:\
`npm start`\
Open http://localhost:3000 to view it in your browser.

`npm run build`\
Builds the app for production to the build folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about deployment for more information.\
Updating the Configuration\
Update the Firebase project ID in Firebase YAML files under the folder /github/workflow/.\
Update the backend URL in ConfigMap.\
Update the Node-Express application URL in config.js.
