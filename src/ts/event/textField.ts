export class textField {
  textField: NodeListOf<HTMLInputElement> | null = null

  constructor() {
    this.textField = document.querySelectorAll<HTMLInputElement>('.kh-text-field>input')
    this.registerEvent()
  }

  registerEvent = () => {
    this.textField?.forEach((tf) => {
      tf.addEventListener('focus', (_: Event) => {
        tf.labels?.forEach((l) => {
          l.parentElement?.classList.add('--active')
        })
      })
      tf.addEventListener('blur', (_: Event) => {
        if (tf.value?.length === 0) {
          tf.labels?.forEach((l) => {
            l.parentElement?.classList.remove('--active')
          })
        }
      })
      tf.dispatchEvent(new Event('focus'))
      tf.dispatchEvent(new Event('blur'))
      window.addEventListener('load',() =>{
        tf.labels?.forEach((l) => {
          l.classList.add('--transition')
        })
      })
    })
  }
}
