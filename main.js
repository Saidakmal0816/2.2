// function time(ms) {
//     return new Promise((res, rej) => {
//         if (is_shop_open) {
//             setTimeout (res, ms)
//         } else {
//             rej(console.log("shop i closed"))
//         }
//     })
// }



// async function kitchen() {
//     try {
//         await time(2000)
//         console.log("Production started");
//     }
//     catch {
//         console.log("smth went wrong");
//     }
//     finally {
//         console.log("day ended");
//     }
// }
// kitchen()


const URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector("#select")
 function addDog() {
    fetch(URL)
       .then((Response)=>{
        return Response.json();
    })
    .then((data)=> {
        console.log(data);

        const breedsobject = data.message
        const breedsarray = Object.keys(breedsobject)
        // console.log(breedsarray);
        
        // const img = document.createElement("img");
        // img.src = data.message;
        // img.alt = "Dog"
        for (let i =0;i<breedsarray.length;i++){
            const option = document.createElement("option")
            option.value=breedsarray[i];
            option.innerText=breedsarray[i]
            select.appendChild(option);
            document.querySelector("#select").appendChild(option)
        }
        // document.querySelector(".dogs").appendChild(img)
    })
}

document.querySelector(".add").addEventListener("click",addDog)

select.addEventListener("change", function (e){
    let url = `https://dog.ceo/api/breed/${e.target.value}/images/random`;
    getNewDog(url);
})





// let url = `https://dog.ceo/api/breed/${e.target.value}/images/random`

const img = document.querySelector(".dog-img")
const spinner = document.querySelector(".spinner")
function getNewDog(url) {
    spinner.classList.add("show")
    fetch(url)
     .then((res) => {
        return res.json()
     })
     .then((data) => {
        img.src = data.message;
        spinner.classList.remove("show")
    })
}



























