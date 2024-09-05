## Learning Management System

### A platform where you can sell your course



## BACKEND CODE

### Step 1

- Initialize the Node.js Project
    - npm init -y
- Initialize the type script in this project
    - npm install typescript @types/node --save-dev
- Initialize TypeScript Configuration
    - npx tsc --init
- Write the script for run the project
    - "dev": "ts-node-dev --respawn --transpile-only src/server.ts"
        - Run your TypeScript code without compiling it to JavaScript first.
        - Automatically restart the server whenever you make changes to the source files.
        - Skip type checking to speed up the startup and reload time.
- Make it entry level file
    - server.ts
    - app.ts


### Basic Set Up

1. start the server
2. make a connection to the db

### Mail Logic of LMS Backend

## Models folder
- User Model
    - I create the interface that tell us what the data in the user sechema object
    - Then use this interface i create the user sechema 
    - using pre keyword we can perform some opreation on the data before save into the database so i use this keyword to hash the password
    - mongoose provide the functionality to create the methods so i create the SignAccessToken method to generate the accesstoken and same for referesh token and for compare the password.
    - And at the create the model and export that
- Course Model 
    - The course model is very big becouse course contain lot of sub models so i will explain each of them
    1. Comment
        - create the interface first
        - then create the sechema
    2. Review
        - create the interface first
        - then create the sechema
    3. Link
        - create the interface first
        - then create the sechema
    4. CourseData
        - create the interface first
        - then create the sechema
    5. Course
        - create the interface first
        - then create the sechema using all the sechemas 
- Layout Model
    - This Layout model is created for update the layout of the ui of the lms
    1. FAQ item
        - faq for storing the question and answer
    2. Category
        - category is created for storing the category of the course
    3. Banner Image
        - Is the image into the front page
    4. layout
        - all these thing together in the layout schema
- Notification Model
    - This model is created for notification when i admin create some course the notification is created and the notification and default status is unread
- Order Model
    - Order is a model to store the info about course purchass like who purchass and invoice of payment etc.

## Controllers
1. Users
    1. Register : 
        - This controller take the three parameter (name,email,password) and validate the parameter and create a token using this data and random code and send the mail and response to the user that the work of register
    2. Activate User : 
        - This controller take parameter form the frontend called (activation token and activation code) and validate the token and extract the data and validate the code create the user into the database
    3. Login User : 
        - This controller take parameter form the forntend called (email and password) and verify it if email and password is correct or not if correct the send redis req to redis server to store the user data with user._id as key and user data as value and also set the two cookie to the client called accessToken and refreshToken and send the data to the client 
    4. Logout User : 
        - This controller is create for logout user when the user hit the endpoint i just remove the token to frontend and delete the key value form the redis server
    5. UpdateAccessToken : 
        - This controller is created for update the access token by the help of refresh token extract the refresh token and decode them and send a req to redis server to get the user info and generate new access token and refresh token and set the redis server set the user data with expiry data 7days 
    6. GetUserInfo : 
        - This controller is created for get the user info with redis server
    7. SocailAuth :
        - This controller is created for third perty login like google , github : This controller take three parameter called (name,email,avatar) -> create the user if not store in redis set cookies all thing are same as login.
    8. UpdateUserInfo And UpdatePassword And UpdateProfilePicture : 
        - This controller is created for update the user name this controller accept the name and we just check user presence and update the name and update user data into redis also 
    9. GetAllUsers[Admin] : 
        - This controller is created for send all users
    10. UpdateUserRole[Admin] : 
        - This controller is to update the role of user take tow parameter role and userId and update the user info
    11. DeleteUser[Admin] : 
        - This controller is to create to delete the user

2. Courses 
    1. Upload Course :
        - In this controller i recevie the data and extract the thumbnail from the data and upload on cloudinary and use the one helper function to uplaod all the data to data base 
    2. Edit Course : 
        - In this controller i just edit the created course. here is only one logic if you upload new thumbnail then delete old one and uplaod new and as it is use the set opreator of mongoose to update all the course data
    3. Get single course -- without purchasing :
        - This controller is created for When user req details about course without purchase then this endpoint will we hit i just extract all usefull information that not to be sent without purchase if requested couse exist in the redis then return the res and not then save the course into redis and send to the response to the user
    4. Get all courses --without purchasing : 
        - Same as above but we don't want to set the redis becouse be don't want to save all course to redis that not good approch
    5. Get course content --only for valid user :
        - When a user purchase the course we add a id in user.cousres section now this course controller will select all courses and send to user
    6. Add questions in course :
        - In this controller i just accept the [cousreId questionId contentId] then apply some validation like find the course using courseId and check the contentId is valid or not if yes then just find the content and add a question to the content and send a notification to the admin that one question is asked by user.
    7. Add answer in course question :
        - In this controller i just answer the give question and if answer given by same user then send a simple notification new answer receved if someone diffrent persone ans your question then simply send a mail new reply recevied
    8. Add review in course : 
        - In this section a user can review your course first we validate the user if user is purchased or not this course if yes the user can create review where user can write a msg for review and give the star out of five now count all review and divied by the size of reviews course to find avg of review and submit the avg of review and create a simple notification for admin of course and send it response
    9. Add reply in review :
        - In this controller i just give the reply of review find the courseId and find the reviewId and add a reply and save the course in redis for next 7days
    10. Get all course[Admin] : 
        - In this controller i just get all cousre but for only for admin
    11. Delete course[Admin] : 
        - This is create for delete the course but for admin only 
    12. Generate video url : 
        -

3. Layout 
    1. Create Layout :
        - This controller is to create to initilise the layout controller like if we have the type of layout just add the data acouding to that like banner image, faqs and category of course that it.
    2. Edit Layout : 
        - This controller is to edit the layout not for create the layout here i just update the created layouts
    3. Get layout by type : 
        - This controller is to fetch the layout by type
4. Notification
    1. Get all notification[Admin] : 
        - Get all notification in order to new one first
    2. Update the notification status[Admin] :
        - Update the notification statue by the admin only
    3. Corn-Node :
        - Delete all the notification is from 30 days after 
5. Orders
    1. Create orders :
        - This controller is create a create order we recevie the [courseId and payment_info] now extract the payment id and check payment succeced or not . then check if you purchased course before or not if not then procede then simple add the course in the user.courses and send the notfication to the user order confirmation and create the order with the {courseId , userId, payment_info}
    2. Get all orders[Admin] :
        - This Controller is create for get all orders for admin
    3. Send stripe publishble key :
        - Give the publication key return for user
    4. New payment :
        - This is a controller to make a new payment for the purchased the course

6. Analytics
    1. Get users,courses,order analytics[Admin]
        - This function generates data for the last 12 months by calculating a rough "month" as 28 days and counting the number of documents created in each of those "months" within the provided Mongoose model. The result is returned as an array of objects containing the month and the count of documents for that month.


## FRONTEND CODE

### Step 1

1. Initlise the next app by this commond
    npx create-next-app@latest
2. Defalut setup
    - folders 
        - app
            - page.ts : for seo we set here some meta data about the page
            - layout.tsx : page jo hai bo layout me as a children pass hua hai


3. Header : 
4. Hero :


: Problem to build
    AllInvoices.tsx
    CoursePlayer