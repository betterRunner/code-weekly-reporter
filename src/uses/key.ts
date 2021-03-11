import { onMounted, onUnmounted } from '@vue/runtime-core';

export function useKeyDown(code: string, cb: () => void) {
  const evt: any = (e: KeyboardEvent) => {
    console.log(e.code, code)
    if (e.code.toLowerCase() === code) {
      cb();
    }
  };
  onMounted(() => {
    window.addEventListener('keydown', evt);
  });
  onUnmounted(() => {
    window.removeEventListener('keydown', evt);
  });
}
