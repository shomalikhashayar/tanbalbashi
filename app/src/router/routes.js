const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/HomePage.vue") }],
  },

  {
    path: "/tools",
    component: () => import("layouts/ToolsLayout.vue"),
    name: "ابزارها",
    meta: {
      icon: "o_handyman",
    },
    children: [
      {
        path: "factorial",
        component: () => import("pages/FactorialPage.vue"),
        name: "فاکتوریل",
        meta: {
          icon: "o_priority_high",
        },
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
