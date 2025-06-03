let image = document.querySelector("#image");
let btn=document.querySelector("#btn")

btn.addEventListener("click",()=>{
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
        image.setAttribute("src",response.data.message)

    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
})