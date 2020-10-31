function removeOrderItem(orderInfo, position) {
    if(!orderInfo["items"] instanceof Array) {
        throw new Error("Items should be an array");
    }

    let checkItem
    for(let i=0; i<orderInfo.items.length; i++) {
        checkItem = true
        if(orderInfo.items[i].price == undefined || orderInfo.items[i].quantity == undefined) {
            throw new Error('Malformed item');
        }
    }

    if(position < 0 || position > orderInfo.items.length - 1) {
        throw new Error("Malformed position");
    }

    let value = orderInfo.items[position].price * orderInfo.items[position].quantity;
    orderInfo.total += value

    let returnedOrderInfo 
    let j = 0
    for(let i=0; i<orderInfo.items.length; i++) {
        if(i != position) {
            returnedOrderInfo[j] = orderInfo.items[i]
            j += 1
        }
    }
    return returnedOrderInfo
}

const app = {
    removeOrderItem
};

module.exports = app;