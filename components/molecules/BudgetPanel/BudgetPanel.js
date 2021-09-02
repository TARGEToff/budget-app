import { useState } from "react";
import styles from "./BudgetPanel.module.scss";
import { Paragraph } from "components/atoms/Paragraph/Paragraph";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

const BudgetPanel = ({ expenses }) => {
    const [budget, setBudget] = useState(1500);
    const [budgetEdit, setBudgetEdit] = useState(false);

    const expensesSum = expenses.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.cost;
    }, 0);

    const validationSchema = Yup.object().shape({
        budget: Yup.number()
            .max(999999, "Not too much?")
            .integer("Cost must be a number")
            .positive("Cost must be positive")
            .required("Cost field is required"),
    });

    const formik = useFormik({
        initialValues: {
            budget,
        },
        enableReinitialize: true,
        validationSchema,
        onSubmit: (values) => {
            setBudget(values.budget);
            setBudgetEdit(false);
            formik.resetForm();
        },
    });

    return (
        <div className={styles.budgetPanel}>
            {budgetEdit ? (
                <form className={styles.budget} onSubmit={formik.handleSubmit}>
                    <input
                        id="budget"
                        name="budget"
                        type="number"
                        value={formik.values.budget}
                        onChange={formik.handleChange}
                        className={styles.input}
                    />
                    <button type="submit" className={styles.edit}>
                        Save
                    </button>
                </form>
            ) : (
                <div className={styles.budget}>
                    <Paragraph>Budget: {budget}$</Paragraph>
                    <button
                        onClick={() => setBudgetEdit(true)}
                        className={styles.edit}
                    >
                        Edit
                    </button>
                </div>
            )}
            <div className={styles.remaining}>
                <Paragraph>Remaining: {budget - expensesSum}$</Paragraph>
            </div>
            <div className={styles.spented}>
                <Paragraph>Spented: {expensesSum}$</Paragraph>
            </div>
            <p className={styles.validation}>{formik.errors.budget}</p>
            { budget < expensesSum && <Paragraph>Expenses have exceeded your budget!</Paragraph> }
        </div>
    );
};

const mapStateToProps = ({ expenses }) => ({ expenses });

export const ConnectedBudgetPanel = connect(mapStateToProps)(BudgetPanel);