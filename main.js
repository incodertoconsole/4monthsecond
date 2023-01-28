let img;
let price;
let discount;
let desc;
let title;
let url = "https://fakestoreapi.com/products";

async function HandleFetch() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);

        for (var i = 0; i < 20; i++) {
            img = document.querySelector(".card-img" + i);
            price = document.querySelector(".price" + i);
            discount = document.querySelector(".discount" + i);
            desc = document.querySelector(".desc" + i);
            title = document.querySelector(".name" + i);

            img.src = data[i].image;
            price.innerHTML = "Price: " + data[i].price;
            discount.innerHTML = "Discount: " + data[i].rating.count;
            desc.innerHTML = "Description: " + data[i].description;
            title.innerHTML = "Name: " + data[i].title;
        }
    }

    catch (error) {
        console.log("error");
    }
}

function confirmFUNC() {
    try {
        if (confirm("Confirm your actions?") == true) {
            console.log("Deleted");
            alert("Deleted)");
        }
    }
    catch (error) {
        alert("Error, please retry!");
    }
}

HandleFetch();