import styles from "./AddExpense.module.scss";
import { Heading } from "components/atoms/Heading/Heading";
import { useFormik } from "formik";

const AddExpense = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            cost: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
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


export { AddExpense };