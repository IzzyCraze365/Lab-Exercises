let image1 = document.querySelector("#firstImage");
let image2 = document.querySelector("#secondImage");

async function render(fi, si) {
    let response = await fetch(`https://rickandmortyapi.com/api/character/${fi},${si}`)
    let data = await response.json()
    console.log(data)
    // Your code goes here

    //! Something will need to happen right here...
}

render(20, 35);
