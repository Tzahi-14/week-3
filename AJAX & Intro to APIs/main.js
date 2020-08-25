// $.get("https://www.googleapis.com/books/v1/volumes?q=title:'Name of the Wind'", function(result){
//     console.log(result.items[0].volumeInfo.description)
// })

// //request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//   //extract the geo data of the first user

//   let lat = users[0].address.geo.lat
//   let long = users[0].address.geo.lng
//   let cp = users[users.length-1].company.catchPhrase

//   console.log(`${lat}, ${long} ${cp}`) //prints -37.3159, 81.1496
// })

// const useData = function(data){
//     console.log(data)
// }
// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: useData ,

//   })
// const fetch = function(){
// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: function (data) {
//         console.log(data);
//     },
//     error: function (xhr, text, error) {
//         console.log(text);
//     }
// }); 

// }
//     let click =`<button class="fetchBtn">click me</button>`
//     $(".container").append(click)

//     $(".fetchBtn").on("click",function(){
//         $(".container").append(fetch)
//     })

//ex1
// const fetch = function (isbn) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${isbn}`,
//         success: function (data) {
//             console.log(data);
//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     })
// }

// fetch(9789814561778)


//ex2

// const fetch = function (queryType,queryValue) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//             console.log(data);
//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     })
// }

// fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People")

//ex3

// const fetch = function (queryType, queryValue) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//             data.items.forEach(element => {
//                 console.log(`Title:${element.volumeInfo.title} author: ${element.volumeInfo.authors} ISBN: ${element.volumeInfo.industryIdentifiers[0].identifier}`);
//             })
//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     })
// }

// fetch("title", "The Wise Man's Fears")

//ex4
// const fetch = function () {
//     $.get("http://api.giphy.com/v1/gifs/search?q=raptors&api_key=xA0qsOIDd08r49yWId1wxpGFNvxNSP5z", function (gifs) {
//         console.log(gifs.data[0].embed_url)
//         $(".container").append(`<iframe src="${gifs.data[0].embed_url}">`)
//     })
// }

// fetch()

// const fetch = function (){
//     $.ajax({
//         method: "GET",
//         url:"http://api.giphy.com/v1/gifs/search?q=raptors&api_key=xA0qsOIDd08r49yWId1wxpGFNvxNSP5z",
//         success: function(gifs){
//             console.log(gifs.data[0].embed_url)
//             let firstGif = `<iframe src="${gifs.data[0].embed_url}">`
//             $(".container").append(firstGif)
//         },
//         error: function (xhr,text,error) {
//             console.log(text)
//         }
//     })
// }
// fetch()

// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=xA0qsOIDd08r49yWId1wxpGFNvxNSP5z&limit=5");
// xhr.done(function (data) { console.log("success got data", data); });

// if you want to have daynamic by ID
// const gifPicker = function (id) {
//     let gif = `<iframe src=https://giphy.com/embed/${id}></iframe>`
//     $(".container").append(gif)
// }

// gifPicker ("qg5pk8s2h5kJy")

//ex5
// const selectYourGif = function (userInput){
//     $.ajax({
//         method: "GET",
//         url:`http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=xA0qsOIDd08r49yWId1wxpGFNvxNSP5z`,
//         success: function(gifs){
//             console.log(gifs.data[0].embed_url)
//             let firstGif = `<iframe src="${gifs.data[0].embed_url}"></iframe>`
//             $(".gif-place").append(firstGif)
//         },
//         error: function (xhr,text,error) {
//             console.log(text)
//         }
//     })
// }

// let inp = `<input id="in" type="text" placeholder="choose your gif">`
// let btn = `<button id="btn" > click here</button>`
// $(".container").prepend(btn)
// $(".container").prepend(inp)

// $("#btn").on("click",function(){
//     $(".gif-place").empty()
//     const postText = $("#in").val()
//     selectYourGif(postText)
//     $("#in").val("")
// })

//ex6

let favoriteGifs = []
const selectYourGif = function (userInput) {
    $.ajax({
        method: "GET",
        url: `http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=xA0qsOIDd08r49yWId1wxpGFNvxNSP5z&limit=5`,
        success: function (gifs) {
            let arr = []
            for (let i = 0; i < 5; i++) {
                let container = `<div id="cont"><button id="add-btn"> Add</button> <iframe id="gif-list" src="${gifs.data[i].embed_url}"></iframe></div>
                `
                // let loopGif = `<iframe id="gif-list" src="${gifs.data[i].embed_url}">`
                // let addBtn = `<button id="add-btn"> Add</button>`
                // $(".gif-place").append(loopGif)
                // $(".gif-place").append(addBtn)
                $(".gif-place").append(container)
                arr.push(gifs.data[i].embed_url)
                console.log(gifs.data[i].embed_url)
            }
            // $(".gif-place").append(`<h1 id="favorite">Favorite GIFs</h1>`)
            console.log(arr)
            // const map1 = arr.map(x=> gifs.data[i].embed_url)
            // arr.push(map1)
            // console.log(arr)

        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}
//need to work on this function
$(".gif-place").on("click", "#add-btn", function () {
    console.log("blabla")
    let addingGif = $(this).closest("#cont").find("#gif-list").attr("src")
    console.log($(this).closest("#cont").find("#gif-list").attr("src"))
    favoriteGifs.push(addingGif)
    // for (let i = 0; i < 5; i++) {
    //     let url = `${gifs.data[i].embed_url}`
    //     let clicked = $(this).closest("#gif-list").text()
    // if (url == clicked) {
    //     favoriteGifs.push(url)
    // }
    //     console.log(favoriteGifs)
    //     for (let a in favoriteGifs) {
    //         $(".favorite-gifs").append(`<iframe src="${favoriteGifs[a]}"></iframe>`)
    //         // let addingUrl=$(this)
    //         // favoriteGifs.push(arr[])
    //     }
    // }
    let addToPage = `<iframe id="gif-list" src="${addingGif}"></iframe>`
    $("#favorite").after(addToPage)
    console.log(favoriteGifs)
})



let inp = `<input id="in" type="text" placeholder="choose your gif">`
let btn = `<button id="btn" > click here</button>`
$(".container").prepend(btn)
$(".container").prepend(inp)

$("#btn").on("click", function () {
    $(".gif-place").empty()
    const postText = $("#in").val()
    selectYourGif(postText)
    $("#in").val("")
})


// //kernal solution
// const appendGifs = function (gifs) {

//     const shortGifs = []

//     for(let i = 0; i < 5; i++) {
//         shortGifs.push(gifs.data[i])
//     }

//     const urls = shortGifs.map(sg => sg.embed_url)

//     const source = $("#gif-template").html()
//     const template = Handlebars.compile(source)

//     const newHTML = template({urls})
//     $(".gif").append(newHTML)
// }


// $(".gif").on("click", ".add", function () {

//     $(".favorite-gifs").append(`<iframe src="${$(this).data().id}"></iframe>`)

// })



// const fetch = function (input) {
//     $.ajax({
//         method: "GET",
//         url: `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu`,
//         success: appendGifs
//     })
// }



// $("#submit").on("click", function () {


//     let input = $("#yourgif").val()
//     console.log(input)
//     fetch(input)
// })


//My-people project using for loop
// peopleList = []
// const myPeople = function () {
//     $.ajax({
//         method: "GET",
//         url: 'https://randomuser.me/api/?results=10',
//         success: function (data) {
//             let people = data.results
//             for (let i = 0; i < 10; i++) {
//                 peopleList.push({
//                     name: people[i].name.first,
//                     img: people[i].picture.large,
//                     email: people[i].email
//                 })
//                 let peopleAddToPage=`<div id="name">${people[i].name.first} ${people[i].name.last}</div>`
//                 let emailAddToPage=`<div id="name">${people[i].email}</div>`
//                 let image =`<img id="pic" src="${people[i].picture.large}">`
//                 $(".people").append(peopleAddToPage)
//                 $(".people").append(emailAddToPage)
//                 $(".people").append(image)
//             }
//             console.log(peopleList);
//         },
//         error: function (xhr, text, error) {
//             $("body").append(`<img id="error" src="https://media.makeameme.org/created/you-get-an-5c12b2.jpg">`)
//             console.log("you get some error");
//         }
//     });
// }

// myPeople()
