fetchAPI();

function fetchAPI(){
    var location= '22 Main St Boston MA';
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', 
   { params:{
        address: location,
        key: 'AIzaSyApAj0zBMsS1RWj4j5S7DZ6j0PnRp9iNNI'
    }}
    )
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    }
    )

}