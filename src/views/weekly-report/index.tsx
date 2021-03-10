import { defineComponent, ref } from '@vue/runtime-core';
import Head from './head/index';
import Item from './item';

export default defineComponent({
  setup() {
    const reportList = ref([1, 2, 3]);
    const handleSearch = (searchText: string) => {
      // TODO: search weekly report.
      console.log('search', searchText);
    };
    const handleAddReportItem = () => {
      console.log('add');
      reportList.value.push(reportList.value.length + 1);
    };
    return () => (
      <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div>
                <img src="/img/logo.svg" class="h-7 sm:h-8" />
              </div>
              <div class="divide-y divide-gray-200">
                <Head onAdd={handleAddReportItem} onSearch={handleSearch}></Head>
                <div class="py-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <ul class="list-disc space-y-2">
                    {reportList.value.map((report) => <Item title={report.toString()}></Item>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
