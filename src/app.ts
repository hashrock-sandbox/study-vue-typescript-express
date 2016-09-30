import * as express from "express";

var app = express();
app.use(express.static(`${__dirname}/../public`));
console.log(__dirname);
app.get('/api', (req, res, next)=>{
    res.json({
        "msg": "hello"
    })
});

app.listen(3000, function(){
    console.log("Demo Express server listening on port %d in %s mode", 3000, app.settings.env);
});

export var App = app;