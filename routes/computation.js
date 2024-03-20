const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    
    var a = Math.random()*10+1;
    const cosvalue = Math.cos(a);
    const asinhresult = Math.asinh(a);
 
    const asinresult = Math.asin(a)
    res.send(`Math.cos applied to ${a} is ${cosvalue}<br>
    Math.asinh(a) applied to ${a} is ${asinhresult } <br>
    Math.asin(a) applied to ${a} is ${asinresult} <br>
    `);
 
});
 
// module.exports = router;
 
// router.get('/', function(req, res) {
//     res.send('Respond with a resource');
// });

module.exports = router;