import { CreateElement, VNode } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class WorkoutBoard extends Vue {

}

@Component({
  render(h: CreateElement): VNode {
    return h('div', 'Board')
  },
})
export class WorkoutBoardTitle extends Vue {
}
