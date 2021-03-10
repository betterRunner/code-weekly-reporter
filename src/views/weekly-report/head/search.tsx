import { watch, defineComponent, ref, PropType } from '@vue/runtime-core';

export default defineComponent({
  setup(_, { emit }) {
    const searchText = ref('');
    watch(searchText, (val) => {
      emit('search', val)
    });
    return () => (
      <div>
        <ElInput
          size="mini"
          suffix-icon="el-icon-search"
          placeholder="搜索"
          v-model={searchText.value}
        ></ElInput>
      </div>
    );
  },
});
