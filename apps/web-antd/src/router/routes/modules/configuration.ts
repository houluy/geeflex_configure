import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    path: '/configuration',
    name: 'Configuration',
    // redirect: '/home/index',
    meta: {
      title: $t('page.configuration.title'),
      icon: 'line-md:cog-filled-loop',
    },
    children: [
      {
        name: 'ConfigurationIndex',
        path: '',
        component: () => import('#/views/configuration/index.vue'),
        meta: {
          icon: 'line-md:cog-filled-loop',
          title: $t('page.configuration.test'),
          keepAlive: true, // 是否缓存
          ignoreAccess: true,
        },
      },
      {
        name: 'ConfigurationTable',
        path: 'table',
        component: () => import('#/views/configuration/tableStyle.vue'),
        meta: {
          icon: 'line-md:compass-filled',
          title: $t('page.configuration.test'),
          ignoreAccess: true,
        },
      },
    ],
  },
];

export default routes;