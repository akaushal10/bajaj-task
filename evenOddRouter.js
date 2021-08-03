const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const fs = require("fs");
const evenOddRouter = express.Router();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "contact.portfoliobuilder@gmail.com",
    pass: "Portfolio@123",
  },
});

evenOddRouter.use(bodyParser.json());

evenOddRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    next();
  })
  .get(async (req, res, next) => {
    res.end(`<html>
    <title>Bajaj Task</title>
    <body>
      <h1>Use Post Method on this API</h1>
      <p>https://bajaj-task.herokuapp.com/bfhl</p>
    </body>
    </html>`)
  })
  .put((req, res, next) => {
    res.end(`<html>
    <title>Bajaj Task</title>
    <body>
      <h1>Use Post Method on this API</h1>
      <p>https://bajaj-task.herokuapp.com/bfhl</p>
    </body>
    </html>`)
  })
  .post(async (req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    let numArray = req.body.numbers;
    let evenArray = [];
    let oddArray = [];
    let user_id = "kajal_verma_04052000";
    let flag = 1
    try {      
      for (let i = 0; i < numArray.length; i++) {
        if(!isNaN(numArray[i])){
          numArray[i] = parseInt(numArray[i])
          if(numArray[i]%2==0){
            evenArray.push(numArray[i])
          }else{
            oddArray.push(numArray[i])
          }
        }else{
          flag = 0;
          break;
        }
      }
      if(flag){
        res.status(200).send({
          odd: oddArray,
          even: evenArray,
          user_id,
          is_success: true,
        });
      }else{
        res.status(200).send({
          user_id,
          is_success: false,
        }); 
      }
    } catch (err) {
      res.status(200).send({
        user_id,
        is_success: false,
      });
    }
  })
  .delete((req, res, next) => {
    res.end(`<html>
    <title>Bajaj Task</title>
    <body>
      <h1>Use Post Method on this API</h1>
      <p>https://bajaj-task.herokuapp.com/bfhl</p>
    </body>
    </html>`)

  });

module.exports = evenOddRouter;
