import { defineComponent, nextTick, ref, PropType, computed, watch } from '@vue/runtime-core';
import Content from './content';
import type { Report } from '../../../types';

export default defineComponent({
  props: {
    report: {
      type: Object as PropType<Report>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const process = ref(0);
    const updateTitle = (title: string) => {
      emit('update', { title: title, id: props.report.id })
    }

    return () => (
      <li class="flex flex-col items-start hover:bg-purple-200 cursor-pointer">
        <Content title={props.report.title} onUpdate={updateTitle}></Content>
        <ElSlider
          class="w-52 mx-3"
          v-model={process.value}
          step={10}
          show-stops
          input-size="mini"
        ></ElSlider>
      </li>
    );
  },
});
