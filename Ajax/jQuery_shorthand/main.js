/* global $ */

$("#getBtn").click(function(){
    $.get('https://api.github.com/users/isaacecheatham')
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        console.log("ERROR!!");
    });
});

$("#postBtn").click(function(){
    var data = {name: "Isaac", city: "Lousiville"}
    $.post("www.testURL.com", data)
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        console.log("CANNOT POST!!");
    });
});

$("#getJSONBtn").click(function(){
    $.getJSON('https://api.github.com/users/isaacecheatham')
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        console.log("ERROR!!");
    });
});