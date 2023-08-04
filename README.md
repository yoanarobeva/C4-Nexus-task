# ShoeShop PLP

This app is application technical task for C4 Nexus.

## Overview
The App resemble typical product listing pages in an ecommerce store. You can choose a product category to be shown or all products are listed.
The Product Listing Page contains information about each product - image, price, name, category, etc.
The products can be filtered or sorted based on choosen criteria. 
Clicking on category loads up to 20 products initially. If there are more products, 20 more can be listed by clicking on "Load more..." button.

## Technical Details

The client application is build with: 

- React.js
- HTML
- CSS
- Bootstrap

JSON file is used for sample data, located in "public" folder and named db.json. The data is fetched from Product Service and then has been managed via Product Context. The Context is provided where products data is needed.
 
To run the project, you have package.json file in the main client folder --->

``npm install``  --->

``npm start``

You can also view the project from **[this link](https://c4-nexus-task.vercel.app/)**.
