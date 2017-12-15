/* global $ */

$("#getBtn").click(function(){
    $.get('https://api.github.com/users/isaacecheatham')
    .done(function(data){
        console.log(data);
    })
});

$("#postBtn").click(function(){
    
});

$("#getJSONBtn").click(function(){
    
});