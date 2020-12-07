import API from '@/api'
import { Boot } from '@/app'

export default function ({ storage }: Boot) {
  return storage.dispatch('userFetch', void 0)
    .catch(() => API.authToken = '')
}
