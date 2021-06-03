<html>
    <head>
        <title> Words To Colors</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="script.js"></script>
        <style>
            #container {
                height: 100%;
                position: relative;
            }
            #text{
                margin: 0px;
                position: absolute;
                top: 50%;
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
                margin-left: 32.5%;
                border-radius: 20px;
                width:35%;
                align-items: center;
            }
            #data{
                border-radius: 5px;
                outline:none;
                border: 0px;
                text-align: center;
                font-size: 2em;
                background-color: rgba(255, 255, 255, 0);
                color: white;
                width: 60%;
                padding-bottom: 1%;
                margin-left: 5%;
            }
            #submit{
                background-color: rgba(100, 100, 100, 0);
                cursor: pointer;
                border-radius: 10px;
                position:absolute;                 
                bottom:0;
                border: 0px;
                width: 30%;
            }
            #submit:active{
                background-color: rgba(255, 255, 255, 0.2);
            }
            img{
                size:30%;
                max-width:45px;
            }
            h1{
                text-align: center;
                color: white;
                font-size: 3em;
                margin-top: 0px;
            }
            body{
                margin:0px;
            }
        </style>
    </head>
    <body>
        <div id = "container">
            <br><br><br><br>
            <h1>Transform your words in to colors!</h1>
            <div id = "text"> 
                <input id = "data" type="text">
                <button id = "submit" ><img src="submit.png" alt="invio"></button>
            </div>
        </div>
    </body>
</html>
