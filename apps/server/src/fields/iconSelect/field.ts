import { Field } from 'payload/types'
import { IconSelectComponent } from './component'
import './style.scss'

const iconField: Field = {
  name: 'icon',
  type: 'text',
  admin: {
    components: {
      Field: IconSelectComponent,
    },
  }
}

export default iconField
