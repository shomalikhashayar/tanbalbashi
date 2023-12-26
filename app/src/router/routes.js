import MainLayout from "src/layouts/MainLayout.vue";
import ToolsLayout from "src/layouts/ToolsLayout.vue";
import HomePage from "src/pages/HomePage.vue";
import FactorialPage from "src/pages/FactorialPage.vue";
import ErrorNotFound from "src/pages/ErrorNotFound.vue";

const routes = [
  {
    path: "/",
    name: "خانه",
    meta: { icon: "o_chair" },
    component: MainLayout,
    children: [{ path: "", component: HomePage }],
  },
  {
    path: "/tools",
    name: "ابزارها",
    meta: { icon: "o_square_foot" },
    component: ToolsLayout,
    children: [
      {
        path: "factorial",
        name: "فاکتوریل",
        meta: { icon: "o_priority_high" },
        component: FactorialPage,
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: MainLayout,
    children: [{ path: "", component: ErrorNotFound }],
  },
];

export default routes;
