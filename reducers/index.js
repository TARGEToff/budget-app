const initialState = {
    expenses: [
        {
            id: 0,
            title: "Shopping",
            cost: 70
        },
        {
            id: 1,
            title: "Fuel",
            cost: 30
        },
        {
            id: 2,
            title: "House rent",
            cost: 100
        }
    ],
};

const rootReducer = (state = initialState, action) => {
    return state;
};

export default rootReducer;
