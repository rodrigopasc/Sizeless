# Sizeless
AWS Lambda with NodeJS to resize and optimize pictures on S3.

<hr>

## Introduction
This is a script that works by S3 events.

When your bucket receives a new file, this script is going to automatically run to resize and optimize your uploaded picture.

<br />

## Installation
### Dependencies
* NodeJS & NPM.


### Guide
* You shall need to install [Serverless](http://serverless.com) and to do that, open your terminal and run:

```sh
$ npm install serverless -g
```
(Sorry, it is not available with Yarn)

<br/>

* By now, you can clone the source code by running:

```sh
$ git clone https://github.com/rodrigopasc/Sizeless
```

<br/>

* You can now install its dependencies. 

```sh
$ cd Sizeless
$ yarn or npm install
```

<br/>

* You must setup your AWS information. Please create an IAM with _Programatic Access_ and _AdministratorAccess_ permission.

```sh
$ serverless config credentials -o --provider aws --key=YOUR_AWS_KEY --secret YOUR_AWS_SECRET
```

<br />

* Finally you can deploy your brand new AWS Lambda script. Just type and run:

```sh
$ yarn deploy or npm run deploy
```

<br />

🚨 DO NOT forget to change your bucket name on `serverless.yml` and to create your `prefix` subfolder on your bucket as well. 🚨

<br />

Enjoy! 🎉🎊  