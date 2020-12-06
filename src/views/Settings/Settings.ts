import { Component, Mixins } from 'vue-property-decorator'

import RouterTransition from '@/mixins/RouterTransition'

@Component
export default class Settings extends Mixins(RouterTransition) {
}
