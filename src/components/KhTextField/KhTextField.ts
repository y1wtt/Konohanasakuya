import './kh-text-field.scss'

export class KhTextField extends HTMLElement {
  constructor() {
    super()
    this.classList.add('kh-text-field')
    const attrs = this.attributes
    const khInputBorder = this.setupInputBorderEl()
    const khInputSlot = this.setupInputSlotEl()
    const inputEl = this.setupInputEl(attrs)
    const labelEl = this.setupLabelEl(inputEl)

    khInputSlot.appendChild(labelEl)
    khInputSlot.appendChild(inputEl)

    window.addEventListener('load', () => {
      this.appendChild(khInputBorder)
      this.appendChild(khInputSlot)
    })
  }

  private setupInputBorderEl(): HTMLDivElement {
    const khInputBorder = document.createElement('div')
    khInputBorder.classList.add('kh--input-border')
    return khInputBorder
  }

  private setupInputSlotEl(): HTMLDivElement {
    const el = document.createElement('div')
    el.classList.add('kh--input-slot')
    return el
  }

  private setupInputEl(attrs: NamedNodeMap): HTMLInputElement {
    const el = document.createElement('input')
    for (let i = attrs.length - 1; i >= 0; i--) {
      const attr = attrs[i]
      if (attr.name !== 'class' && attr.name !== 'style' && attr.name !== 'label') {
        el.setAttribute(attr.name, attr.value)
      }
    }
    el.addEventListener('focus', (_: Event) => {
      this.classList.add('--active')
      this.classList.add('--focused')
    })
    el.addEventListener('blur', (_: Event) => {
      if (el.value?.length === 0) {
        this.classList.remove('--active')
      }
      this.classList.remove('--focused')
    })
    el.dispatchEvent(new Event('focus'))
    el.dispatchEvent(new Event('blur'))
    return el
  }

  private setupLabelEl(inputEl: HTMLInputElement): HTMLLabelElement {
    const el = document.createElement('label')
    el.setAttribute('for', inputEl.getAttribute('id') ?? '')
    el.innerText = this.getAttribute('label') ?? ''
    return el
  }
}
