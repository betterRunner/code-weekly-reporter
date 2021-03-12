import { defineComponent, ref, nextTick } from '@vue/runtime-core';
import { useKeyDown } from '@/uses/key';

export default defineComponent({
  props: {
    title: String,
  },
  setup(props, { emit }) {
    /// 修改content
    const rInput = ref(null);
    const editing = ref(false);
    const editTitle = ref(props.title);
    const handleEdit = () => {
      setTimeout(() => {
        editing.value = true;
        // autofocus by hand.
        nextTick(() => {
          ((rInput.value as unknown) as HTMLInputElement).focus();
        });
      });
    };
    const finishEdit = () => {
      editing.value = false;
      emit('update', editTitle.value);
    };
    useKeyDown('enter', () => {
      finishEdit();
    });
    const handleClickOutside = () => {
      finishEdit();
    };
    return () => (
      <div class="cursor-pointer hover:bg-purple-200 w-full">
        {editing.value ? (
          <ElInput
            ref={rInput}
            v-click-outside={handleClickOutside}
            autofocus
            size="mini"
            v-model={editTitle.value}
          ></ElInput>
        ) : (
          <div onClick={handleEdit} class="flex">
            <p class="ml-2">{props.title}</p>
          </div>
        )}
      </div>
    );
  },
});
