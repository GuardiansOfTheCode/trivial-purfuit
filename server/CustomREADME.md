To get started with the project
- execute "npm install" to install dependencies from package.json

To run the server
- execute "npm run start" which builds first, then watches all typescript file changes and runs the server and watches for changes to the server.js file
- see package.json for more
- Note: IT MAY ERROR DURING INITIAL BUILDING BECAUSE ITS BUILDING WHILE TRYING TO RUN THE SERVER
  BUT THEN ONCE EVERYTHING IS BUILT, NODEMON WILL RE-RUN THE SERVER

Server currently provides DB API (the file dbApi.txt)

Things get out of wack with typescripts compilation when you do 
things like renaming files or changing directories.
- You'll have to delete the compiled CommonJS files yourself.
- If you haven't changed the "dist" folder location you can run the "clean"
  script to remove all the fines under it.
