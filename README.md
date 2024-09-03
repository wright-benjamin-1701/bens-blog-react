This is a containerized React application ready for cloud deployment.

It's purpose is to load random quotes from literature in an async pattern.

TODO: Add unit tests and SASS for better styling patterns.

Sources used for this dev:

0. For a project idea: https://medium.com/@rohan.fulzele/50-beginner-and-intermediate-level-react-project-ideas-%EF%B8%8F-809b396faa39
1. For creating a dockerized react application: https://www.freecodecamp.org/news/how-to-dockerize-a-react-application/
   (Notes: use "npx create-react-app react-docker-example --template typescript" & also need "npm i axios")
2. An API inspiration for generating a random book quote: https://medium.com/@sumsourabh14/introducing-recite-a-free-api-for-book-quotes-138dca77f7da
3. Adding async calls: https://www.geeksforgeeks.org/how-to-fetch-data-from-apis-using-asynchronous-await-in-reactjs/
4. CSS quote and button styles: https://devsnap.me/css-quote-styles, https://getcssscan.com/css-buttons-examples

To run locally,

1. Check out the repository, navigate to the react-docker-example folder
2. Run "npm install", "npm i axios" and then "npm start"

To run in a container,

1. Check out the repository, navigate to the react-docker-example folder
2. Use docker image build to build the image, and docker run to run your image. Make sure to pass the -p flag.

For example, if I named the image "react-image-example", use
docker image build -t react-image-example .
docker run -p 3000:3000 --name react-example-container react-image-example
