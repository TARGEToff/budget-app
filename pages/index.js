import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.scss";
import { useFormik } from "formik";
import { Heading } from "components/atoms/Heading/Heading";
import { BudgetPanel } from "components/molecules/BudgetPanel/BudgetPanel";
import { Expenses } from "components/molecules/Expenses/Expenses";

export default function Home() {
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
        <div className={styles.wrapper}>
            <Heading isBig>Budget-app</Heading>
            <BudgetPanel />
            <Expenses />
            <Heading>Add expense</Heading>
            <div className={styles.addExpense}>
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
        </div>
    );
}
