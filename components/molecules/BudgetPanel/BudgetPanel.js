import { useState } from "react";
import styles from "./BudgetPanel.module.scss"
import { Paragraph } from "components/atoms/Paragraph/Paragraph";
import { connect } from "react-redux";

const BudgetPanel = ({ expenses }) => {
    const [budget, setBudget] = useState(1500);

    const expensesSum = expenses.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.cost
    }, 0)
    console.log(expensesSum)

    return (
        <div className={styles.budgetPanel}>
            <div className={styles.budget}>
                <Paragraph>Budget: {budget}$</Paragraph>
            </div>
            <div className={styles.remaining}>
                <Paragraph>Remaining: {budget - expensesSum}$</Paragraph>
            </div>
            <div className={styles.spented}>
                <Paragraph>Spented: {expensesSum}$</Paragraph>
            </div>
        </div>
    )
};


const mapStateToProps = ({ expenses }) => ({ expenses });

export const ConnectedBudgetPanel = connect(mapStateToProps)(BudgetPanel)