import { defineComponent, resolveComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup(prop) {
    const count = ref(0)
    const ElButton = resolveComponent('el-button')
    return () => (
      <>
        <h1>{prop.msg}</h1>
        <ElButton onClick={() => {count.value ++}}>count is: { count.value }</ElButton>
        <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
      </>
    );
  },
});