import MainLayout from "src/layouts/MainLayout.vue";
import ToolsLayout from "src/layouts/ToolsLayout.vue";
import HomePage from "src/pages/HomePage.vue";
import FactorialPage from "src/pages/FactorialPage.vue";
import LoremIpsumPage from "src/pages/LoremIpsumPage.vue";
import LetterCounterPage from "src/pages/LetterCounterPage.vue";
import ErrorNotFound from "src/pages/ErrorNotFound.vue";
import SquareRootPage from "src/pages/SquareRootPage.vue";
import LogarightmPage from "src/pages/LogarightmPage.vue";
import PercentPage from "src/pages/PercentPage.vue";
import StrongPasswordPage from "src/pages/StrongPasswordPage.vue";
import WhatsMyIPPage from "src/pages/WhatsMyIPPage.vue";

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
        name: "محاسبه فاکتوریل",
        meta: { icon: "o_priority_high" },
        component: FactorialPage,
      },
      {
        path: "loremipsum",
        name: "تولید متن تصادفی",
        meta: { icon: "o_format_list_numbered_rtl" },
        component: LoremIpsumPage,
      },
      {
        path: "letter-counter",
        name: "شمارش تعداد کلمات در متن",
        meta: { icon: "o_segment" },
        component: LetterCounterPage,
      },
      {
        path: "square-root",
        name: "محاسبه جذر",
        meta: { icon: "o_square" },
        component: SquareRootPage,
      },
      {
        path: "logarightm",
        name: "محاسبه لگاریتم",
        meta: { icon: "o_functions" },
        component: LogarightmPage,
      },
      {
        path: "percent",
        name: "محاسبه درصد",
        meta: { icon: "o_percent" },
        component: PercentPage,
      },
      {
        path: "strong-password",
        name: "تولید رمز قوی",
        meta: { icon: "o_password" },
        component: StrongPasswordPage,
      },
      {
        path: "whats-my-ip",
        name: "آی پی من چیه؟",
        meta: { icon: "o_question_mark" },
        component: WhatsMyIPPage,
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
