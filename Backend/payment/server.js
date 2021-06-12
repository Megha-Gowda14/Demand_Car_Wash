var express=require('express');
var stripe=require('stripe') ('sk_test_51J1EA4SA4RatPZEogV2k9v9dO36j3wnBzr9f8wWtQx7i8S24Ve18kezwZeBeY5g3Xfqbyoa1FKXiEKhGgMvVc0rQ00a6UYpGfX');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var cors=require('cors');
var originWhite;ist=[
    'http://localhost:4200'
];
var corsOptions={
    origin:function(origin,callback){
        var isWhitelisted=originsWhitelist.indexOf(origin)!==-1;
        callback(null,isWhitelisted);
    },
    credentials:true
}
app.use(cors(corsOptions));
app.post('/paynow',(req,res)=>{
    console.log('The body is',req.body);
    var charge=stripe.charges.create({
        amount:5000,
        currency:'INR',
        source:req.body.token
    },(err,charge)=>{
        if(err){
            throw err;
        }
        res.json({
            success:true,
            message:"Payment done"
        })
    });
})

app.listen(3000,()=>{
    console.log('server starts at port 3000');
});