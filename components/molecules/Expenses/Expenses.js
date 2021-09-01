import styles from "./Expenses.module.scss"
import { Heading } from "components/atoms/Heading/Heading";
import { connect } from "react-redux"
import { ConnectedExpense as Expense } from "components/molecules/Expense/Expense";

const Expenses = ({ expenses }) => (

    <div className={styles.expenses}>
        <Heading>Expenses</Heading>
        { expenses.map(
            ({ id, name, cost }) => (
                <Expense key={id} id={id} name={name} cost={cost} />
            )
        )}
    </div>

);

const mapStateToProps = ({ expenses }) => ({ expenses });

export const ConnectedExpenses = connect(mapStateToProps)(Expenses)