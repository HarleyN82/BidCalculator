import styles from './Input.module.css'

export function Input({ type, text, name,disabled, placeholder, handleOnChange, value }) {

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                onChange={handleOnChange}
            />
        </div>
    )
}