const getColor = () => {
    //hex code
    const randomNumber = Math.floor(Math.random() * 16777215);  //to convert to hex code
    const randomCode = "#" + randomNumber.toString(16);   //convert to hex code

    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    document.body.style.color = randomCode;
    

    navigator.clipboard.writeText(randomCode);
}

//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

//init call
getColor();