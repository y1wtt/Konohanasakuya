import './main.scss'

const textField: NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>('.kh-text-field>input')
textField.forEach((tf) => {
  tf.addEventListener('focus', (_: Event) => {
    tf.labels?.forEach((l) => {
      l.parentElement?.classList.add('--active')
    })
  })
  tf.addEventListener('blur', (_: Event) => {
    tf.labels?.forEach((l) => {
      l.parentElement?.classList.remove('--active')
    })
  })
})
