import { defineComponent, PropType } from '@vue/runtime-core';

export default defineComponent({
  props: {
    title: {
      type: String
    },
    process: Number,
    tags: Array
  },
  setup(props) {
    return () => (
      <li class="flex items-start">
        <span class="h-6 flex items-center sm:h-7">
          <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <p class="ml-2">
          Customizing your
          <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> {props.title}
          file
        </p>
      </li>
    );
  },
});
