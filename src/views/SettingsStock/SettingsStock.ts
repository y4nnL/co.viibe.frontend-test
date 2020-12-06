import { Component, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'

@Component
export default class SettingsStock extends Vue {

}

@Component({
  render(h: CreateElement): VNode {
    return h('div', 'Stock')
  },
})
export class SettingsStockTitle extends Vue {
}
