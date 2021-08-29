import styles from "./Expenses.module.scss"
import { Heading } from "components/atoms/Heading/Heading";
import { Paragraph } from "components/atoms/Paragraph/Paragraph";

const Expenses = () => (

    <div className={styles.expenses}>
        <Heading>Expenses</Heading>
        <Paragraph>Nothing here... Add something!</Paragraph>
    </div>

);

export { Expenses }