export const addOrder = async (order) => {
    console.log("adding order ", order, "To DB");
    await fetch("../api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    });
};

//Returns true if a give public key has purchased an item before 
// Send a GET request with the public key as a parameter 
//If response code is 200 ...
// If orders is not empty, check if there are any records with this buyer and item ID 

export const hasPurchased = async (publickey, itemID) => {
    const response = await fetch(`../api/orders?buyer=${publickey.toString()}`);
    if(response.status === 200) {
        const json = await response.json();
        console.log("Current wallet's orders are:", json);
        if(json.length > 0) {
            const order = json.find((order) => order.buyer === publicKey.toString() && order.itemID === itemID);
            if (order) {
                return true;
            }
        }
    }

}

export const fetchItem = async (itemID) => {
    const response = await fetch("../api/fetchItem", {
        method: "POST",
        headers: {
            "Content-Type": "applications/json",
        },
        body: JSON.stringify({ itemID }),
    });
    const item = await response.json();
    return item;
}