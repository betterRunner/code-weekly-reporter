import { ref, defineComponent } from "@vue/runtime-core";
import { ElOption, ElSelect } from "element-plus";

export default defineComponent({
  props: {
    link: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const link = ref(props.link);
    const linkOptions = [
      'https://github.com/betterRunner/code-weekly-reporter.git',
      'https://github.com/betterRunner/code-weekly-reporter2.git'
    ]
    return () => (
      <div class="flex flex-align-center">
        <div class="text-xs text-yellow-900 mr-2">{link.value}</div>
        {link.value && <div class="el-icon-link mr-2"></div>}
        <ElSelect placeholder="select a gitlab repo" v-model={link.value}>
          {linkOptions.map(link => <ElOption label={link} value={link}></ElOption>)}
        </ElSelect>
      </div>
    )
  }
})