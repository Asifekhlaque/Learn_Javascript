const a = () => {
    let div = document.createElement("div")
    div.innerHTML = "Hello"
    div.style.color = "red"
    div.setAttribute("class", "JsDiv")
    document.body.append(div)
}

