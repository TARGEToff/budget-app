import styles from "./Expense.module.scss";
import { Paragraph } from "components/atoms/Paragraph/Paragraph";

const Expense = ({ title, cost }) => (
    <div className={styles.expense}>
        <Paragraph>{title}</Paragraph>
        <Paragraph>{cost}</Paragraph>
    </div>
);

export { Expense };