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