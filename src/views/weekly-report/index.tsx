import { computed, defineComponent, ref } from '@vue/runtime-core';
import Head from './head/index';
import Item from './item/index';
import type { Report } from '../../types';

export default defineComponent({
  setup() {
    const initReportList: Report[] = [
      {
        id: 1,
        title: 'title1',
        progress: 10,
        codeLink: 'https://github.com/betterRunner/code-weekly-reporter.git',
        tags: ['bff', 'SaaS'],
      },
      {
        id: 2,
        title: 'title2',
        progress: 20,
        codeLink: '',
        tags: ['PaaS'],
      },
      {
        id: 3,
        title: 'title3',
        progress: 30,
        codeLink: '',
        tags: ['SaaS'],
      },
    ];
    const reportList = ref(initReportList);
    const searchText = ref('');
    const filterReportList = computed(() => {
      return reportList.value.filter(
        (r) => {
          return r.title.includes(searchText.value) ||
          r.tags.reduce((sum: boolean, t: string) => {
            console.log(t, searchText.value)
            return sum || t.includes(searchText.value)
          }, false)
        }
      );
    });
    const handleSearch = (text: string) => {
      // TODO: search weekly report.
      console.log('search', searchText);
      searchText.value = text;
    };
    const handleAddReportItem = () => {
      console.log('add');
      reportList.value.push({
        id: reportList.value.length + 1,
        title: 'tmp',
        progress: 0,
        tags: [],
      });
    };
    const updateTitle = ({ title, id }: Report) => {
      const r = reportList.value.find((e) => e.id === id);
      console.log('update', title, r);
      r &&
        Object.assign(r, {
          title: title,
        });
    };
    return () => (
      <div class="h-full bg-gray-100 flex flex-col justify-center">
        <div class="relative my-3 mx-52">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl">
            <div class="">
              <div>
                <img src="/img/logo.svg" class="h-7 sm:h-8" />
              </div>
              <div class="divide-y divide-gray-200">
                <Head onAdd={handleAddReportItem} onSearch={handleSearch}></Head>
                <div class="pt-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <ul class="h-screen/2 scrollbar overflow-y-auto list-disc space-y-2">
                    {filterReportList.value.map((report) => (
                      <Item report={report} onUpdate={updateTitle}></Item>
                    ))}
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
