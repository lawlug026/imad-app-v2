
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles=
    {
        a:{
              title:'Article One'  ,
              head:'Article One',
              date:'07 Feb 2016',
              content:`  <p>
                                CONTENT of ARTICLE ONE
                            </p>`
            },
        articletwo:{
              title:'Article TWO'  ,
              head:'Article TWO',
              date:'08 Feb 2016',
              content:`  <p>
                                CONTENT of ARTICLE SECOND
                            </p>`
            },
        articlethree:{
              title:'Article Three'  ,
              head:'Article Three',
              date:'09 Feb 2016',
              content:`  <p>
                                CONTENT of ARTICLE THIRD
                            </p>`
            },
    };
    
    


    function createTemplate(data)
{   var title=data.title;
    var date=data.date;
    var head=data.head;
    var content=data.content;
    
    var htmlTemplate=
      
      `<html>
        <head>
            <title>${title}</title>
            <meta name='viewport' width='device-width' initial-scale=1/> 
            <link href="/ui/style.css" rel="stylesheet" />
           
            
        </head>
    
        <body>
            <div class='container'>
                <div>
                    <a href="/">Home</a>
                </div>
                
                <div>
                    <h1>
                        ${head}
                    </h1>
                    <hr/>
                </div>
            
                <div>
                    ${date}
                </div>
                <hr/>
            
            
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;  
    
    return(htmlTemplate);
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:articleName', function(req,res){
   
var articleName=req.params.articleName;
   res.send(createTemplate(articles[a])); 
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
