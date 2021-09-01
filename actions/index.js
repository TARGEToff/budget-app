export const removeExpense = (id) => {
    return {
        type: "REMOVE_EXPENSE",
        payload: {
            type: "expenses",
            id,
        },
    };
};