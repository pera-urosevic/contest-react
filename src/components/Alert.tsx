import styles from './Alert.module.css'

type AlertProps = {
  message: string
}

export function Alert(props: AlertProps) {
  const onReload = () => {
    window.location.reload()
  }

  return (
    <div className={styles.alert}>
      <p>{props.message}</p>
      <button onClick={onReload}>Reload</button>
    </div>
  )
}
