import styles from "./AddExpense.module.scss";
import { Heading } from "components/atoms/Heading/Heading";
import { connect } from "react-redux";
import { useFormik } from "formik";
import { addExpense as addExpenseContent } from "actions";

const AddExpense = ({ addExpense }) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            cost: "",
        },
        onSubmit: (values) => {
            addExpense(values);
            formik.resetForm(); 
        },
    });

    return (
        <div className={styles.addExpense}>
            <Heading>Add expense</Heading>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <input
                    id="name"
                    name="name"
                    placeholder="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className={styles.input}
                />
                <input
                    id="cost"
                    name="cost"
                    type="number"
                    placeholder="cost"
                    onChange={formik.handleChange}
                    value={formik.values.cost}
                    className={styles.input}
                />
                <button type="submit" className={styles.add}>
                    Add
                </button>
            </form>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expenseContent) => dispatch(addExpenseContent(expenseContent)),
});

export const ConnectedAddExpense = connect(null, mapDispatchToProps)(AddExpense)