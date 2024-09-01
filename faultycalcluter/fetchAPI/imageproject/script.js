// let url="https://dog.ceo/api/breeds/image/random"
// let image=document.querySelector("#image")
// const getImage=async()=>{
//     const response=await fetch(url)
//     const data=await response.json() // in json format
//     image.setAttribute("src",data.message)
// }

// getImage()

// let url2="https://api.thecatapi.com/v1/images/search"
// let image2=document.querySelector("#image2")
// const getimage2=async()=>{
//     const response=await fetch(url2)
//     const data=await response.json() // in json format
//     image2.setAttribute("src",data[0].url)
//     image2.style="width:300px"
// }

// getimage2()
let image = document.querySelector("#image2");
let country = prompt("Enter country name");

function getCountry() {
    if (country === null || country.trim() === "") {
        alert("Please enter a country name");
    } else {
        let formattedCountry = country.trim().toLowerCase()
            formattedCountry=formattedCountry.substring(0, 2); // Ensuring the country name is properly formatted
        let url = `https://flagcdn.com/224x168/${formattedCountry}.png`;
        image.setAttribute("src", url);
    }
}

getCountry(); // Call the function to prompt and set the flag

