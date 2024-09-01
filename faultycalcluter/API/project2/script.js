async function dict() {
    let respond = await fetch("https://github.com/PokeAPI/sprites.git")
    let data = await respond.json()
    console.log(data)
}

dict()