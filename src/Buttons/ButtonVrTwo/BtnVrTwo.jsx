import styles from './Button.module.css';

export default function ButtonWhite({ title }) {
    return (
        <button className={`${styles.btn2}`}>{title}</button>
    )
}
