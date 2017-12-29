/* global $ */
/* global axios */


var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var xhr = document.querySelector("#xhr");
var fetchBtn = document.querySelector("#fetch");
var jqueryBtn = document.querySelector("#jquery");
var axiosBtn = document.querySelector("#axios");
var quote = document.querySelector("#quote");
        
        
        
        // XHR
        //listen for clicks
        xhr.addEventListener("click" , function() {
            var XHR = new XMLHttpRequest();
            
            XHR.onreadystatechange = function() {
                if(XHR.readyState == 4 && XHR.status == 200) {
                    var data = JSON.parse(XHR.responseText);
                    quote.innerText = data;
                } 
            };
            
            XHR.open("GET", url);
            XHR.send();
        });
        
        
        // FETCH
        fetchBtn.addEventListener("click" , function() {

            fetch(url)
                .then(handleErrors)
                .then(parseJSON)
                .then(updateQuote)
                .catch(printError);
        });


        
        function handleErrors(res){
            if(!res.ok) {
                throw Error(res.status);
            }
            return res;
        }
        
        function parseJSON(res){
            return res.json().then(function(parsedData){
                return parsedData;
            });
        }
        
        function updateQuote(data){
            quote.innerText = data;
        }
        
        function printError(error){
            console.log(error);
        }
        
        
        
        // JQUERY
        $(jqueryBtn).click(function(){
            $.getJSON(url)
            .done(function(data){
                quote.innerText = data;
            })
            .fail(function(){
                console.log("ERROR!!");
            });
        });
        
        
        axiosBtn.addEventListener("click", sendRequest);
        // AXIOS
        function sendRequest() {
        axios.get(url)
        .then(function(res){
            console.log(res);
            quote.innerText = res.data;
        })
        .catch(function(){
            console.log("ERR");
        });
        }