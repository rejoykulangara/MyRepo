 const express = require('express')
const router = express.Router()
const api_helper = require('../api/api_helper')

router.get('/',(req,res)=> {
	
  api_helper.make_API_call('https://data.covid19india.org/data.json')
    .then(response => {
		 res.header("Access-Control-Allow-Origin", "*");  
        res.json(response)
    })
    .catch(error => {
		 res.header("Access-Control-Allow-Origin", "*");  
        res.send(error)
    })
})

module.exports = router