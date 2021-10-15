const decreaser = document.getElementById("q-decrease");
const increaser = document.getElementById("q-increase");
const quantity = document.getElementById("quantity");
const payButton = document.querySelector(".pay-button")

var quantity_value = Number(document.getElementById("quantity").value);
var buyPrice = document.getElementById("buyPrice");

var stockPrice = quantity_value * 35;

function CheckQuantity() {

    switch(quantity_value) {

        case 1:

            decreaser.style.color="grey";
            decreaser.disabled = true;

            buyPrice.innerHTML = stockPrice;
            break;
        case 2:
            decreaser.style.color="white";
            increaser.style.color="white";
            if(decreaser.disabled) decreaser.disabled = false;
            if(increaser.disabled) increaser.disabled = false;
            
            buyPrice.innerHTML = stockPrice;
            break;
        case 3:
            decreaser.style.color="white";
            increaser.style.color="grey";

            increaser.disabled = true;

            buyPrice.innerHTML = stockPrice;
            break;

        default:
            console.log("Something Went Wrong!");
    
    } 

}
CheckQuantity();


decreaser.addEventListener('click', function(){
    quantity_value--; 
    quantity.value = quantity_value;
    stockPrice = quantity_value * 35;
    CheckQuantity();
    
});
increaser.addEventListener('click', function(){
       quantity_value++;
       quantity.value = quantity_value;
       stockPrice = quantity_value * 35;
       CheckQuantity();
});
payButton.addEventListener('click', function() {
    alert("Succesfully Purchased\n\nStock(s) ="+quantity_value+"\nTotal = $"+ stockPrice);
})
