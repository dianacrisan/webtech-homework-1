function removeOrderItem(orderInfo, position) {
    if(!Array.isArray(orderInfo.items)) {
        throw new Error('Items should be an array');
    }


    let checkItem
    for(let i=0; i<orderInfo.items.length; i++) {
        checkItem = true
        if(orderInfo.items[i].price == undefined || orderInfo.items[i].quantity == undefined) {
            throw new Error('Malformed item');
        }
    }

    if(position < 0 || position > orderInfo.items.length - 1) {
        throw new Error("Invalid position");
    }

    let value = orderInfo.items[position].price * orderInfo.items[position].quantity;
    orderInfo.total -= value

    orderInfo.items.splice(position, 1)

    return orderInfo

}

const app = {
    removeOrderItem
};

module.exports = app;