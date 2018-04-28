let url = 'https://api.unsplash.com/search/photos/?client_id=779221170b9860703502e0352eff048f80cf61e64d08d45eb0dfd8d73be9ea31&query=japan'


fetch(url)
    .then(response => response.json())

    .then(responseAsJson => {
        let results = responseAsJson.results;

        console.log(results);

        const container = document.querySelector('.gallery-container');
        
        let image = "<ul>";
        
        
        for (let i = 0; i < results.length; i++) {
            
            image += '<li>'

            console.log(results[i]);

            image += '<div class="imgage-container"> <picture><source media="(max-width:300px)" srcset="' + results[i].urls.small + '"/> <source media="(max-width:600px)" srcset="' + results[i].urls.regular + '"/> <source media="(min-width:601px)" srcset="' + results[i].urls.full +'"/><img class="source-image" src=" ' + results[i].urls.small  + 'alt="' + results[i].description  + '" /></picture>'
            
            image +='<div class="popup"><div class="user"><img src="images/user-icon.svg" alt="User Icon"/><p>' + results[i].user.name + '</p></div><div class="likes"><img src="images/heart.svg" alt="Heart Icon"/><p>' + results[i].likes + '</p></div></div>'
            
            image += '</li>'
        }

        image +='</ul>'

        container.insertAdjacentHTML('beforeEnd', image);

    })
    .catch( error => {
        console.log('Error: ', error)
    })


    document.querySelector("header h1").addEventListener('click', function(){
        document.querySelector(".globe img").setAttribute("style", "animation-play-state: running;");
    });

