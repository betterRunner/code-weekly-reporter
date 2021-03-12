import { defineComponent, ref, PropType } from '@vue/runtime-core';
import { SmartTagz } from 'smart-tagz';
import 'smart-tagz/dist/smart-tagz.css';
import './Tags.css';

export default defineComponent({
  props: {
    tags: {
      type: Array as PropType<string[]>,
      default: [],
    },
  },
  setup(props, { emit }) {
    const handleChange = (tags: string[]) => {
      console.log('tag', tags);
      emit('update', tags);
    };
    return () => (
      <SmartTagz
        theme={{
          primary: '#545454',
          background: '#fff',
          tagTextColor: '#fff',
        }}
        sources={['低代码', '架构', '云服务器']}
        defaultTags={props.tags}
        allow-duplicates={false}
        allow-paste={{ delimiter: ',' }}
        autosuggest
        on-changed={handleChange}
      ></SmartTagz>
    );
  },
});
