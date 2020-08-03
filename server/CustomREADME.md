To get started with the project
- make sure you have yarn
- execute "yarn install" to install dependencies from package.json

To run the server
- execute "yarn start" which builds first, then watches all typescript file changes and runs the server and watches for changes to the server.js file
- see package.json for more
- Note: IT MAY ERROR DURING INITAL BUILDING BECAUSE ITS BUILDING WHILE TRYING TO RUN THE SERVER
  BUT THEN ONCE EVERYTHING IS BUILT, NODEMON WILL RE-RUN THE SERVER

Server currenlty provides DB API (the file dbApi.txt)

Things get out of wack with typescripts compilation when you do 
things like renaming files or changing directories.
- You'll have to delete the compile CommonJS files yourself.
- If you haven't changed the "dist" folder location you can run the "clean"
  script to remove all the fines under it.

Currenlty the essential things needed are:
- yarn command
- dist/ and node_modules/ aren't needed when moving the code whether to version control or not