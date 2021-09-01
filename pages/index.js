import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.scss";
import { Heading } from "components/atoms/Heading/Heading";
import { ConnectedBudgetPanel as BudgetPanel } from "components/molecules/BudgetPanel/BudgetPanel";
import { ConnectedExpenses as Expenses } from "components/molecules/Expenses/Expenses";
import { AddExpense } from "components/molecules/AddExpense/AddExpense";

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <Heading isBig>Budget-app</Heading>
            <BudgetPanel />
            <Expenses />
            <AddExpense />
        </div>
    );
}
