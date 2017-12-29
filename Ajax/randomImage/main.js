/* global $ */

var img = document.querySelector("#img");

$("#btn").click(function(){
    $.getJSON('https://random.cat/meow')
    .done(function(data){
        console.log(data);
        img.src = data.file;
    })
    .fail(function(){
        console.log("ERROR!!");
    });
});