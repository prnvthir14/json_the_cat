const request = require('request')

let args = process.argv.slice(2);
// console.log(args)



request.get(`https://api.thecatapi.com/v1/breeds/search/?q=${args}`, (error,response,body) => {

  if (args.length === 0){

    return console.log('no breed provided/')

  }

  if (error){
  
    return console.log(error);
  
  } else {

    let data = JSON.parse(body);
    //console.log(data)
    //data object has 1 key
    //data[0] gets us into the main object.. now we can use . notion
    //this returns the first entry in the object parsed from the JSON object returned from our request.
    
    //This returns the first entry in the data array
    console.log(data[0][(Object.keys(data[0])[0])])
    
    console.log('-------------')
    //This returns the desciption of the cat    
    console.log(data[0].description)

  }

});

  // console.log(body)
  // console.log('----')
  // // console.log(typeof body)//string
  // const data = JSON.parse(body);
  // console.log(data);
  // console.log('-------------');
  // console.log(data[description]);
  // // // console.log(typeof data);//object
  // // // console.log(data[(Object.keys(data)[0])]);
  // // let mass = data[(Object.keys(data)[0])]
  // // console.log(mass)


// const request = require('request');
// request('https://www.google.com/fdsafsafsa.html', (error, response, body) => {


//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

//how to get the value from keys > obj[(Object.keys(obj)[0])]


  //console.log()
  // const data = JSON.parse(body);
  // //console.log(data);
  // // console.log(typeof data);
  
  // console.log(data[(Object.keys(data)[0])])
