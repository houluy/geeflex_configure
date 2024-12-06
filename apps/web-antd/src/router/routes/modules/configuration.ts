import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    path: '/configuration',
    name: 'Configuration',
    redirect: '/home/index',
    meta: {
      title: $t('page.configuration.title'),
      icon: 'mdi:home',
    },
    children: [
      {
        name: 'ConfigurationIndex',
        path: '/configuration/setting',
        component: () => import('#/views/configuration/index.vue'),
        meta: {
          icon: 'mdi:home',
          title: $t('page.configuration.title'),
          keepAlive: true, // 是否缓存
        },
      },
    ],
  },
];

export default routes;
