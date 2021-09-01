import styles from "./Expense.module.scss";
import { Paragraph } from "components/atoms/Paragraph/Paragraph";
import { connect } from "react-redux";
import { removeExpense } from "actions";

const Expense = ({ id, title, cost, removeExpense }) => (
    <div className={styles.expense}>
        <Paragraph>{title}</Paragraph>
        <div className={styles.cost}>
            <Paragraph >{cost}$</Paragraph>
        </div>
        <button className={styles.button} onClick={() => removeExpense(id)}>x</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    removeExpense: (id) => dispatch(removeExpense(id)),
});

export const ConnectedExpense = connect(null, mapDispatchToProps)(Expense)