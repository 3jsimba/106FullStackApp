## Repo Convention

When working on anything relataed to the repo please make sure to create your own branch using the following name convention for the branch `name: username/<task, obj, etc.>`

For example: `3jsimba/init`

## Installation and usage
1) Clone this repository  
2) Install dependencies  
```
cd social-media-app  
npm install
cd client
npm install
```
3) Change the .env
```
cd ..
touch .env
```
4) Configure environment variables in your new .env file. To acquire your MONGO_URI, create a cluster for free over at https://www.mongodb.com/. The TOKEN_KEY is a secret key of your choosing, you can generate one at this site: https://randomkeygen.com/.
```
MONGO_URI=<YOUR_MONGO_URI> 
TOKEN_KEY=<YOUR_TOKEN_KEY>
PORT=4000
```
5) Run the server
```
npm run server
```
6) Start a new terminal and run react's development server
```
cd social-media-app
cd client
npm start
```
