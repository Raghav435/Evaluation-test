// Store the wallet amount to your local storage with key "amount"
let indexArr = JSON.parse(localStorage.getItem("amount")) || [];

let total = indexArr.reduce(function (sum, elem, index, arr){
    return sum + Number(elem.amount);
},0);

console.log(total);

let navbar = document.getElementById("navbar");
navbar.append(total);



function addToWallet(data){

    data.map(function(elem){
        console.log(elem);

        var box = document.getElementById("navbar");

        let p = document.createElement("p");
        p.innerText = elem.amount;

        let btn = document.createElement("btn");
        btn.innerText = "Add to wallet"
        btn.addEventListener("click", function(){
            addToWallet(elem);
        })
        box.append(p, btn);
        // console.log(elem);

    })
    console.log(data);
}

function addToWallet(elem){
   
    localStorage.setItem("amount",JSON.stringify(indexArr));

}




