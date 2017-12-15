        var btn = document.querySelector("#btn");
        var img = document.querySelector("#avatar");
        var username = document.querySelector("#username");
        var fullname = document.querySelector("#fullname");
        var city = document.querySelector("#city");
        var email = document.querySelector("#email");

        var url = "https://randomuser.me/api/";
        
        //listen for clicks
        btn.addEventListener("click" , function() {

            fetch(url)
                .then(handleErrors)
                .then(parseJSON)
                .then(updateProfile)
                .catch(printError)
                
        });


        
        function handleErrors(res){
            if(!res.ok) {
                throw Error(res.status);
            }
            return res;
        }
        
        function parseJSON(res){
            return res.json().then(function(parsedData){
                return parsedData.results[0];
            });
        }
        
        function updateProfile(data){

            img.src = data.picture.medium;
            username.innerText = data.login.username;
            fullname.innerText = data.name.first + " " + data.name.last;
            city.innerText = data.location.city;
            email.innerText = data.email;
        }
        
        function printError(error){
            console.log(error);
        }