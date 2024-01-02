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
      icon: "o_priority_high",
      address: "factorial"
    },
    {
      name: "محاسبه لگاریتم",
      link: "/tools/factorial",
      icon: "o_functions",
      address: "logarightm"
    },
    {
      name: "محاسبه جذر",
      link: "/tools/factorial",
      icon: "o_view_in_ar",
      address: "square-root"
    },
    {
      name: "تولید متن تصادفی",
      link: "/tools/loremipsum",
      icon: "o_format_list_numbered_rtl",
      address: "loremipsum"
    },
    {
      name: "شمارش تعداد کلمات متن",
      link: "/tools/letter-counter",
      icon: "o_calculate",
      address: "letter-counter"
    },
    {
      name: "تولید رمز قوی",
      link: "/tools/factorial",
      icon: "o_password",
      address: "strong-password"
    },
    {
      name: "محاسبه درصد",
      link: "/tools/factorial",
      icon: "o_percent",
      address: "percent"
    },
  ],

  websiteURL: () => {
    return "https://tanbalbashi.ir/wp-content/themes/tanbalbashi/app/public";
    return "http://localhost/webida/wp-content/themes/blackbox/app/public";
  }
};
