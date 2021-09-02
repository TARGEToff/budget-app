import styles from "./AddExpense.module.scss";
import { Heading } from "components/atoms/Heading/Heading";
import { connect } from "react-redux";
import { useFormik } from "formik";
import { addExpense as addExpenseContent } from "actions";
import { Paragraph } from "components/atoms/Paragraph/Paragraph";
import * as Yup from "yup";

const AddExpense = ({ addExpense }) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .max(70, "Too many characters")
            .required("Name field is required"),
        cost: Yup.number()
            .max(1000000, "Not too much?")
            .integer("Cost must be a number")
            .positive("Cost must be positive")
            .required("Cost field is required"),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            cost: "",
        },
        validationSchema,
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
                <Paragraph>{formik.errors.name}</Paragraph>
                <input
                    id="cost"
                    name="cost"
                    type="number"
                    placeholder="cost"
                    onChange={formik.handleChange}
                    value={formik.values.cost}
                    className={styles.input}
                />
                <Paragraph>{formik.errors.cost}</Paragraph>
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