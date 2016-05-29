# NodeJS Skeleton for Facebook Messenger Platform

This is a NodeJS skeleton to host Facebook Messenger bots. Inspired by Slack Python RTMBot, the folder structure is created similarly. `api` is the main controller and it will initially attach all the text processors and payload processors in the `textbacks` and `postbacks` folders respectively.

When a facebook event is received, it will call the `api` controller through the `webhook` route. The controller checks if the event contains a message or a postback and redirect to the related processor.

Text messages will go through all the text processors. It will call all the text processors `processMessage()` function.

Postback events will go through all the payload processors. It will call all the payload processors `processPayload()` function.

## processMessage()

Each text processor should implement this method as this will be the entry point for the message. This method tests the message against a regular expression and if matched, it will call another method within the processor to either send the sender back a message or store data in a database.

## processPayload()

Each payload processor should implement this method as this will be the entry point for the payload. The developer can set their own conditions for the payload and if matched, it will call another method within the processor to continue the application logic.

## How to use

Do a git clone on this repository.

`git clone`

Do a npm install to install necessary dependencies.

`npm install`

Run the application.

`node index.js`

Deploy to Heroku

`git add .`
`git commit -m '<commit message>'`
`git push heroku master`

## Environment Variables

`FBMP_TOKEN`: This is the Facebook Page token when you select a page and generate the access token, this is needed if not you will not be able to send message from your Facebook Page.

`FBMP_VERIFYTOKEN`: You can set this token to anything you want. Before you can set your webhook callback, you need to have a verify token to verify that you own that hostname.

