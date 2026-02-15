function showMessage(){
    document.getElementById("secretMessage").style.display = "block";
}

/* floating hearts */
setInterval(createHeart, 350);

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";

    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },4000);
}
