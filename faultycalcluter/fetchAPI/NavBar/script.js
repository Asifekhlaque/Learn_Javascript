let btn = document.querySelector("#btn");
let Mobile = document.querySelector(".Mobile");

btn.addEventListener("click", () => {
    if (Mobile.style.display === "block") {
        Mobile.style.display = "none";
    } else {
        Mobile.style.display = "block";
    }
});
