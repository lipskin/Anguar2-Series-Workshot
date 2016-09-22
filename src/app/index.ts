export {App} from './app'
export {router} from './routes'

import * as services from './shared/services'

const mapValuesToArray = obj => Object.keys(obj).map(key => obj[key])

export const providers = [
  ...mapValuesToArray(services)
]
