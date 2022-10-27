# URL Shortener
Short URL web app.   
This is a hands-on project of [ALPHAcamp](https://tw.alphacamp.co/).
# Getting start
## Prerequisites
1. [Node.js](https://nodejs.org/en/), v16.14.0
2. (Optional) [nodemon](https://www.npmjs.com/package/nodemon) (2.0.20)
3. [MongoDB Atlas](https://www.mongodb.com/), sign up and get a free account
## Install the app in local host
1. Clone this repo in local,   
   `git clone https://github.com/bensonybs/2_3_S5_URL_Shortener.git`
2. Open terminal in the project directory, type `npm install` to install needed packages.
3. Sign in to MongoDB Atlas and get the URI. 
   See the document of [MongoDB](https://www.mongodb.com/docs/atlas/getting-started/) for more information.
4. Save the URI to the environment variables on your computer(variable name: MONGODB_URI).
    [Windows](https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html)
5. On terminal, type `npm run seed` or `node models/seeds/shortURLSeeder.js`(without nodemon) to install seed data to your mongodb.
6. Type `npm run dev` or `node app.js` if you didn't install nodemon.
7. Go to [http://localhost:3000](http://localhost:3000) in the browser to see the website. 
## Demo
1. Input URL to create new short URL.
   ![create_url](/public/images/create_url.JPG)   
   If the URL you would like to shorten is already in the database, the stored short URL will show.
   ![url_exist](/public/images/url_exist.JPG)
2. You can browse stored short URLs in 'Short URL List'.
   ![url_list](/public/images/url_list.JPG)
# Process Flow Chart
The app process flow chart is showed below.   
![draw.io](/public/images/URL_Shortener.drawio.png)
# Future Update
1. Let user add and edit short URL description.
2. User authentication.