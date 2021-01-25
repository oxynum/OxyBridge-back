# OxyBridge-back

Hey if you are here it's that you want to contribute to the Oxybridge API system. This API is based on a MySQL database and an JWT auth. 

## Pre-req

You will have to install the following tool to make the env work on your platform localy:

- NodeJS
- NPM
- MySQL (with Xampp / MAMP) with auth based.
- Environement variables will be given later in this documentation

## Installation

Make sure you have NODEJS and NPM installed. First of all clone the repository. One cloned, go to `oxybridge-back` and run the following command.

```
npm install
```

All depedencies are now installed. If you try to run your project it won't work since you do not have your environement variables setted.

So once everything is installed, configure your Env. Variables.

## Env. Variables

Go to your `.env.example` and copy what is inside to create your own `.env` file.

You can fill in the value of the variables with your own variables:

```
MYSQL_DB_USERNAME= <your-username>
MYSQL_DB_PASSWORD= <your-password>
BRIDGE_API_SANDBOX_URL= <your-sandbox>
BRIDGE_API_SANDBOX_API_KEY= <your-api-key>
...
```

## Install and Configure the MySQL database

First of all, install your database in local. For this project the common use is MAMP or XAMPP. 

Go inside **MAMP** or **XAMPP**, launch it and access to your client in order to handle your database connection. Get your credentials and create a new database named `oxybridge-cluster`.

Next you can run the following command:

```
npm run create:database:mysql
```

Normally you should see a _nice message_ if everything went well during the database installation.

⚠️ Don't hesitate to verify that you have all tables created inside your local database.

## Launch the Oxybridge-API

A lot of run commands are available inside the package.json to launch the project.

🚨 Don't forget to launch your database before launching your project.

In order to watch the `/server` folder you can run the following command.

```
npm run watch:dev
```

### Possible Errors
-> TODO

🚀 Your API should be working now, congrats !