export const helper = {
  getPersianYear: () => {
    const date = new Date();

    const option = {
      year: "numeric",
      calendar: "persian",
    };

    return date.toLocaleDateString("fa-IR", option);
  },

  getTools: () => [
    {
      name: "محاسبه فاکتوریل",
      link: "/tools/factorial",
      icon: "o_priority_high"
    },
    {
      name: "محاسبه لگاریتم",
      link: "/tools/factorial",
      icon: "o_functions"
    },
    {
      name: "محاسبه جذر",
      link: "/tools/factorial",
      icon: "o_view_in_ar"
    },
    {
      name: "تولید متن تصادفی",
      link: "/tools/factorial",
      icon: "o_format_list_numbered_rtl"
    },
    {
      name: "تولید رمز قوی",
      link: "/tools/factorial",
      icon: "o_password"
    },
    {
      name: "محاسبه درصد",
      link: "/tools/factorial",
      icon: "o_percent"
    },
  ],

  websiteURL: () => {
    return "https://tanbalbashi.ir/wp-content/themes/tanbalbashi/app/public";
    return "http://localhost/webida/wp-content/themes/blackbox/app/public";
  }
};
