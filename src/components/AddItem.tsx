import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  setup(_, { emit }) {
    const handleClick = () => {
      emit('add')
    }
    return () => <div onClick={handleClick} class="el-icon-plus click"></div>;
  },
});
