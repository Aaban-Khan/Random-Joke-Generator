let jokeContainer = document.getElementById("joke")
let btn = document.getElementById("btn")
let getURL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,explicit&type=single"

let jokeGenerator = ()=>{
    jokeContainer.classList.remove("fade")
    fetch(getURL)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = item.joke
        jokeContainer.classList.add("fade")
    })
    .catch(error => console.error(error))
}
jokeGenerator()
btn.addEventListener("click",jokeGenerator)