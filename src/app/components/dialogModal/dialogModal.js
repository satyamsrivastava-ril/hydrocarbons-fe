import React from 'react'
import { Dialog } from 'primereact/dialog'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'

const DialogModal = props => {
  return (
    <Dialog
      className={`dialog-modal ${props.className}`}
      header={props.header}
      footer={props.footer}
      visible={props.displayModal}
      onHide={() => props.setOnHide && props.setOnHide(false)}
    >
      {props.children}
    </Dialog>
  )
}

export default DialogModal
