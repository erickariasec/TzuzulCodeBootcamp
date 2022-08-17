# npm

## Create a Node.js project
`npm init -y`  

## Install Express  
`npm i express`

## Add nodemon as dev dependency
`npm i nodemon -D`  

## Run the dev script defined in the project’s package.json file
`npm run dev`  

Used for running the specific commands for serving the project, to any server, to live development. In the case of a web page, you'll see your web page in the browser, and any change you make to the HTML code, for example, will be reflected immediately in the page you see in your browser.  

```js
"scripts": {
    "dev": "npx nodemon index.js", // npx (node package executor)
    "test": "echo \"Error: no test specified\" && exit 1"
}
```