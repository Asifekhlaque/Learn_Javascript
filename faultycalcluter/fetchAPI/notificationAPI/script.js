const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    Notification.requestPermission().then((result) => {
        if (result === "granted") {
            const notification = new Notification("Kya huia Bro", {
                body: "All in one business solution chyia Aa jyio",
                icon: "https://media.licdn.com/dms/image/D560BAQF0dO8JYJF03A/company-logo_200_200/0/1685811131670?e=2147483647&v=beta&t=vJcA3bG2zCFHxtxsieBoTKhWT-IT-Ajss99no8kgeB0", 
            });

            notification.onclick = () => {
                window.location.href = "https://bizogreat.com/";
            };
        }

    });
});

