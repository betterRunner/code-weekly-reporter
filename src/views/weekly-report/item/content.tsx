import { defineComponent, ref, nextTick } from '@vue/runtime-core';
import { useKeyDown } from '@/uses/key';

export default defineComponent({
  props: {
    title: String
  },
  setup(props, { emit }) {
    /// 修改content
    const rInput = ref(null);
    const editing = ref(false);
    const editTitle = ref('');
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
    return () =>
      editing.value ? (
        // !NOTE: bug v-directive is not working if EInput is written as a variables in setup.
        <ElInput
          ref={rInput}
          v-click-outside={handleClickOutside}
          autofocus
          size="mini"
          v-model={editTitle.value}
        ></ElInput>
      ) : (
        <div onClick={handleEdit} class="flex">
          <span class="h-6 flex items-center sm:h-7">
            <svg
              class="flex-shrink-0 h-5 w-5 text-cyan-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <p class="ml-2">
            Customizing your
            <code class="text-sm font-bold text-gray-900">tailwind.config.js</code>{' '}
            {props.title}
            file
          </p>
        </div>
      );
  },
});
