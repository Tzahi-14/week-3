
// localStorage.setItem('name', 'Shoobert');
// localStorage.name ="tzahi"
// let local = localStorage
// console.log(local)


// let userStorage = {
//     darkMode: true,
//     showSideNav: false,
//     defaultResultCount: 9,
//     latestMarks: {
//         sectionA: 92,
//         sectionB: 11
//     },
//     cart: [
//         { id: 3112, count: 2 },
//         { id: 812, count: 16 }
//     ]
// }
// localStorage.userStorage = JSON.stringify(userStorage)

//check with danny 

let wisdom = []
let texts = JSON.parse(localStorage.wisdom || "[]")
$(".new").append(`<div id="container"><input id="input" type="text" placeholer="enter something"><button id="btn"> click</button><button id="btn-clear">Clear Wisdom</button><div>`)


let refresh = function () {

    let currentData = localStorage.wisdom
    var obj = JSON.parse(currentData)
    console.log(currentData);
    console.log(obj)
    for (let cur of obj) {
        console.log(cur.text);
        $("#container").append(`<div>${cur.text}</div>`)
    }
    console.log(currentData)
}
refresh()


$("#btn").on("click", function () {
    let inputVal = $("#input").val()
    let inputObj = { text: inputVal }
    // let inp = $("#text").html()
    // wisdom.push(inp)
    wisdom.push(inputObj)
    $("#container").append(`<div>${inputVal}</div>`)
    $("#input").val("")
    console.log(wisdom)
    if (wisdom.length % 2 === 0) {
        localStorage.wisdom = JSON.stringify(wisdom)
    }
})


$("#btn-clear").on("click",function(){
   localStorage.removeItem('wisdom')
   $("#new").empty()
})




