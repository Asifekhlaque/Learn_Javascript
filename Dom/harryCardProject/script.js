let btn = document.querySelector(".btn");
let title
let channel
let views
let date
let videoLength
let viewsNumber
function userInput(){
    title = prompt("Enter Title");
    channel = prompt("Enter Channel Name");
    views = prompt("Enter Views");
    viewsNumber = parseInt(views);
    if (viewsNumber > 1000) {
        viewsNumber = viewsNumber / 1000
    }
    date = prompt("Enter Date");
    videoLength = prompt("Enter Video Length")
}
function DOMOperation(){
    let t = document.querySelector(".title");
    t.innerText = title;
    let c = document.querySelector(".channelName");
    c.innerText = channel;
    let v = document.querySelector(".viewCount");
    v.innerText = views+"k views";
    let d = document.querySelector(".date");
    d.innerText = date + "years ago";
    let caption = document.querySelector(".time");
    caption.innerText = videoLength;
}

btn.addEventListener("click", () => {
    userInput();
    DOMOperation();
})