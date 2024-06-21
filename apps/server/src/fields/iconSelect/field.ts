import { Field } from 'payload/types'
import { IconSelectComponent } from './component'
import './style.scss'

const iconField: Field = {
  name: 'name',
  type: 'text',
  admin: {
    components: {
      Field: IconSelectComponent,
    },
  },
}

export default iconField
