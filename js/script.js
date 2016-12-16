
var token = '269965923.9027a77.3332744452484e12a0f5105146d5ed6e', //token
    userid = 269965923, //user id
    num_photos = 6; // cantidad de fotos

$.ajax({
    url: 'https://api.instagram.com/v1/users/' + 269965923 + '/media/recent', 
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(response){
        console.log(response);
        for(x in response.data){
            $('#pictures').append('<div class="col m4"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+response.data[x].images.standard_resolution.url+'"></div></div></div>'); 
        }
    },
    error: function(data){
        console.log(data);
    }
});

/*
var token = '269965923.9027a77.3332744452484e12a0f5105146d5ed6e',
    hashtag='cat', // hashtag
    num_photos = 4; //número de fotos
 
$.ajax({
    url: 'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(response){
        console.log(response);
        for(x in response.data){
            $('#pictures').append('<div class="col m4"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+response.data[x].images.standard_resolution.url+'"><p class="center-align link">Holi</p></div></div></div>');  
        }
    },
    error: function(data){
        console.log(data);
    }
});
*/
