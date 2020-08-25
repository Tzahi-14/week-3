// const source = $('#store-template').html();
// const template = Handlebars.compile(source)

// const newHTML = template({item: "bread", price: "15"});
// $('.items').append(newHTML);


// const source =$("#store-template").html()
// const template = Handlebars.compile(source)
// var items = [
//   { item: "cheese", price: 15 },
//   { item: "arak", price: 68 },
//   { item: "hummus", price: 15 },
//   { item: "pita", price: 5 }
// ]
// for(let it of items){
//   let someHtml=template(it)
//   $(".items").append(someHtml)
// }


// const menuData = {
//     menu: [
//       { name: "Google", link: "http://google.com" },
//       { name: "Facebook", link: "http://facebook.com" },
//       { name: "Instagram", link: "http://nstagram.com" },
//       { name: "Twitter", link: "http://twitter.com" },
//     ]
//   };
  
//   const source = $('#menu-template').html();
//   const template = Handlebars.compile(source);
//   const newHTML = template(menuData);
  
//   // append our new html to the page
//   $('.menu').append(newHTML);


//   var classData = {
//     classmates: [
//         {name: "That on gal", description: "Always has the ansswer", nicePerson:true },
//         {name: "The weird dude", description: "Quick with a smile",nicePerson:true},
//         {name: "Taylor", description: "Just Taylor", nicePerson:false}
//     ]
// }

// const source =$("#class-data").html()
// const template = Handlebars.compile(source)
// const newHtml= template(classData)
// $("#classroom").append(newHtml)

// const stockData ={
//     stockInfo:[
//         {name: "apple", roi: 0.7 ,profitable:true},
//         {name: "amazon", roi: 0.4, profitable:true},
//         {name: "dal", roi: -0.5 ,profitable:false},
//         {name: "boa", roi: -0.3 ,profitable:false}
//     ]
// }

// const source = $("#stock-data").html()
// const template = Handlebars.compile(source)
// const newHtml = template(stockData)
// $(".info").append(newHtml)

// const renderFirst = function(){
//     const source = $('#first-template').html();
//     const template = Handlebars.compile(source);
//     let newHTML = template({ text: "This gets rendered" });
//     $('body').append(newHTML);  
//   }
  
//   const renderSecond = function(){
//     const source = $('#second-template').html();
//     const template = Handlebars.compile(source);
//     let newHTML = template({ moreText: "This also gets rendered" });
//     $('#special').append(newHTML);  
//   }
  
//   renderFirst()
//   renderSecond()
    

const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const animalsFunc = function(){
    const source = $("#animal-template").html()
    const template = Handlebars.compile(source)
    let newHtml = template({animals})
    $("#animal-list").append(newHtml)

}

const languagesFunc= function(){
    const source =$("#languages-template").html()
    const template = Handlebars.compile(source)
    let newHtml =template({languages})
    $("#languages-list").append(newHtml)
}


animalsFunc()
languagesFunc()