var express = require('express');
const router = express.Router();
const User = require('../models/users');


/* 处理请求. */

router.get('/users',(req,res)=>{
  User.find({})
  .then(result=>{
    res.send({
      data: result,
      status: result.statusCode,
      message: ' success all data'
    })
  }).catch(e=>{
    res.send({
      errorName: e.name,
      message: e.message
    })
  })
})


router.get("/user/:id",(req,res)=>{
  User.findOne({_id: req.params.id})
    .then(data=>{
      res.send({
        data,
        status: data.statusCode,
        message: "success "
      })
    }).catch(err=>{
      res.send({
        errorName: err.name,
        message: e.message
      })
    })
})


router.post('/user',(req,res,next)=>{
  
  // const user = new User(req.body)
  // user.save((err)=>{
  //   if(err){
  //     res.send({
  //       errorName: err.name,
  //       message: "error"
  //     })
  //   }
  //     res.send({
  //       data: [
  //         {
  //           ...req.body
  //         },
  //       ],
  //       status: res.statusCode,
  //       message: "Post Data"
  //     })
  // })
  User.create(req.body)
    .then(result=>{
        res.send({
          data: [
            {
              name: req.body.name,
              description: req.body.description
            },
          ],
          status: res.statusCode,
          message: "success Post Data"
        })
      })
      .catch(err=>{
        res.send({
          errorName: err.name,
          message: "error"
        })
      })
})

router.put("/user/:id",(req,res)=>{
  User.findOneAndUpdate({_id: req.params.id},req.body)
    .then(()=>{
      res.send({
        status: res.statusCode,
        message: "Success UPDATE data"
      })
    })
    .catch(e=>{
      res.send({
        errorName: e.name,
        message: e.message
      })
    })
})

router.delete("/user/:id",(req,res)=>{
  User.findOneAndRemove({_id: req.params.id})
    .then(()=>{
      res.send({
        status: res.statusCode,
        message: "Success DELETE data"
      })
    })
    .catch(err=>{
      res.send({
        errorName: e.name,
        message: e.message
      })
    })
})

module.exports = router;
