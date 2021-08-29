import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.scss";
import { useFormik } from "formik";
import { Heading } from "components/atoms/Heading/Heading";
import { Paragraph } from "components/atoms/Paragraph/Paragraph";

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
            <div className={styles.budgetPanel}>
                <div className={styles.budget}>
                    <Paragraph>Budget: 1500$</Paragraph>
                </div>
                <div className={styles.remaining}>
                    <Paragraph>Remaining: 1500$</Paragraph>
                </div>
                <div className={styles.spented}>
                    <Paragraph>Spented: 0$</Paragraph>
                </div>
            </div>
            <Heading>Expenses</Heading>
            <div className={styles.expenses}>
                <Paragraph>Nothing here... Add something!</Paragraph>
            </div>
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
