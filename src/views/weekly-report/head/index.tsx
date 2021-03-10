import { defineComponent } from '@vue/runtime-core';
import AddItem from '@/components/AddItem';
import Search from './search';

export default defineComponent({
  setup(_, { attrs }) {
    return () => (
      <div class="pb-2 pt-10 flex flex-row justify-between items-center">
        <Search class="w-80" onSearch={attrs.onSearch}></Search>
        <AddItem onAdd={attrs.onAdd}></AddItem>
      </div>
    );
  },
});
