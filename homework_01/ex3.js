const item = {
    "name":      "Avocado",
    "type":      "Fruit",
    "category":  "Food",
    "price":     200
};

function applyCoupon(item) {
    return function(discount) {
        const newItem = Object.create(item);
        const getFinalPrice = function() {
            return newItem.price - (discount * newItem.price) / 100
        }
        newItem.price = getFinalPrice(); 

        return newItem;
    }
}

console.log(applyCoupon(item)(10).price === 180);