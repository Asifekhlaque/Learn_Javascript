const additem = async (text) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = text;
    document.body.append(div);
};

// Create random delay
const randomDelay = () => {
    return new Promise((resolve, reject) => {
        const timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    });
};

async function main() {
    let t=setInterval(() => {
        let last = document.body.lastElementChild;
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)
        }
        else {
            last.innerHTML = last.innerHTML + "."
        }
    }, 100)
    let text = ["Hacking Start...", "Hacking Process...", "Password Found...","Final Password Found...","File Access","File Access Granted...","Hacking Completed..."];

    for (const item of text) {
        await additem(item);
    }
    await randomDelay()
    clearInterval(t)
}
main();
