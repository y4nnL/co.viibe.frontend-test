import { Component, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'

@Component
export default class WorkoutOne extends Vue {

}

@Component({
  render(h: CreateElement): VNode {
    return h('div', 'WorkoutOne')
  },
})
export class WorkoutOneTitle extends Vue {
}
