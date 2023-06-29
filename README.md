# aknamed-apis

Node.js APIs for User details creation and listing

## Routes

"/create-user": POST API for creating a user record

"/list-user/:id": GET API for listing a user record with a given id

## Tools

MySQL database with Sequelize module

Email with Nodemailer module

## Notes

MVC Architecture is followed

Backend validation is implemented for all form fields. Age will be greater than or equal to 18 only

Email and Phone will be Unique

Custome Script is created for running project locally with npm run dev
