import styles from "./BudgetPanel.module.scss"
import { Paragraph } from "components/atoms/Paragraph/Paragraph";

const BudgetPanel = () => (
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
);

export { BudgetPanel };