## Your Project Idea

- I am proposing a photo editor application that allows users to create unique artwork using an uploaded picture of the user's choice. Users will be able to change the color of uploaded photos and distort photos. This will be a full CRUD application using Node.js.

![Screen Shot 2022-04-01 at 6 46 14 PM](https://user-images.githubusercontent.com/90514977/161357502-85292f85-c544-4f46-b1f1-e8d1778c87bf.png)

## Technologies

- Node.js
- Express
- HTML
- EJS
- MongoDB
- Mongoose
- Multer
- Cloudinary
- Nodemailer

## MVP

- As a user, I would like the functionality of the app to be intuitive.
- As a user, I would like to be able to upload an image.
- As a user, I would like to be able to edit an image uploaded using editor options.
- As a user, I would like to be able to change an uploaded image.
- As a user, I would like to be able to download the image after I'm done with the editor.

## Stretch Goals

- As a User, I would like to have a way to go back to previous designs.
- As a User, I would like to have at least 30 editor options.
- As a User, I would like to have the ability to log in and access all of my previous designs on one page.

## List of Mongoose Models and Their Properties

### Image Upload Model

Title: {type: String}, Img: {type: String, required: true}, Description: {type: String}, createdAT:{type: Date, default. Date.now}
