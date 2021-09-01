export const removeExpense = (id) => {
    return {
        type: "REMOVE_EXPENSE",
        payload: {
            type: "expenses",
            id,
        },
    };
};

export const addExpense = (expenseContent) => {
    const getId = () => `${Math.random()}`.toString(36).substr(2, 9);
    const id = parseInt(getId());
    return {
        type: "ADD_EXPENSE",
        payload: {
            type: "expenses",
            expenseContent: { id, ...expenseContent }
        },
    };
};