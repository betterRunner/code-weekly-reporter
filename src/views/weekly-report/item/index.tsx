import { defineComponent, nextTick, ref, PropType } from '@vue/runtime-core';
import Content from './content';
import Delete from './delete';
import Tags from '@/components/tags';
import type { Report } from '../../../types';

export default defineComponent({
  props: {
    index: {
      type: Number,
      default: 1
    },
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
      <li class="flex flex-col items-start pb-4 relative">
        <div class="absolute -left-2 z-10">{props.index}</div>
        <Content title={props.report.title} onUpdate={updateTitle}></Content>
        <div class="flex flex-row items-center w-full">
          <ElSlider
            class="w-52 mx-3"
            v-model={process.value}
            step={10}
            show-stops
            input-size="mini"
          ></ElSlider>
          <Delete class="hover:blue-200"></Delete>
        </div>
        <Tags tags={props.report.tags}></Tags>
      </li>
    );
  },
});
