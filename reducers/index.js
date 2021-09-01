const initialState = {
    expenses: [
        {
            id: 0,
            name: "Shopping",
            cost: 70
        },
        {
            id: 1,
            name: "Fuel",
            cost: 30
        },
        {
            id: 2,
            name: "House rent",
            cost: 100
        }
    ],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REMOVE_EXPENSE":
            return {
                ...state,
                [action.payload.type]: [
                    ...state[action.payload.type].filter(
                        (expense) => expense.id !== action.payload.id
                    ),
                ],
            }
        case "ADD_EXPENSE":
            return {
                ...state,
                [action.payload.type]: [
                    ...state[action.payload.type],
                    action.payload.expenseContent,
                ],
            }
    }
    return state;
};

export default rootReducer;
