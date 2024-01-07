export const helper = {
  getPersianYear: () => {
    const date = new Date();

    const option = {
      year: "numeric",
      calendar: "persian",
    };

    return date.toLocaleDateString("fa-IR", option);
  },

  // getTools: () => [
  //   {
  //     name: "محاسبه فاکتوریل",
  //     link: "/tools/factorial",
  //     icon: "o_priority_high",
  //     address: "factorial"
  //   },
  //   {
  //     name: "محاسبه لگاریتم",
  //     link: "/tools/logarightm",
  //     icon: "o_functions",
  //     address: "logarightm"
  //   },
  //   {
  //     name: "محاسبه جذر",
  //     link: "/tools/square-root",
  //     icon: "o_square",
  //     address: "square-root"
  //   },
  //   {
  //     name: "تولید متن تصادفی",
  //     link: "/tools/loremipsum",
  //     icon: "o_format_list_numbered_rtl",
  //     address: "loremipsum"
  //   },
  //   {
  //     name: "شمارش تعداد کلمات متن",
  //     link: "/tools/letter-counter",
  //     icon: "o_segment",
  //     address: "letter-counter"
  //   },
  //   {
  //     name: "تولید رمز قوی",
  //     link: "/tools/strong-password",
  //     icon: "o_password",
  //     address: "strong-password"
  //   },
  //   {
  //     name: "محاسبه درصد",
  //     link: "/tools/percent",
  //     icon: "o_percent",
  //     address: "percent"
  //   },
  //   {
  //     name: "آی پی من چیه؟",
  //     link: "/tools/whats-my-ip",
  //     icon: "o_question_mark",
  //     address: "whats-my-ip"
  //   },
  //   {
  //     name: "حذف فواصل اضافه متن",
  //     link: "/tools/whats-my-ip",
  //     icon: "o_format_align_left",
  //     address: "multiple-space-remover"
  //   },
  // ],

  getTools: () => [
    {
      name: "ابزارهای محاسباتی",
      icon: "o_calculate",
      address: "computational",
      subItem: [
        {
          name: "محاسبه فاکتوریل",
          icon: "o_priority_high",
          address: "factorial",
        },
        {
          name: "محاسبه لگاریتم",
          icon: "o_functions",
          address: "logarightm",
        },
        {
          name: "محاسبه جذر",
          icon: "o_square",
          address: "square-root",
        },
        {
          name: "محاسبه درصد",
          icon: "o_percent",
          address: "percent",
        },
      ],
    },
    {
      name: "ابزارهای متنی",
      icon: "o_description",
      address: "text",
      subItem: [
        {
          name: "تولید متن تصادفی",
          icon: "o_format_list_numbered_rtl",
          address: "loremipsum",
        },
        {
          name: "شمارش تعداد کلمات متن",
          icon: "o_segment",
          address: "letter-counter",
        },
        {
          name: "حذف فواصل اضافه متن",
          icon: "o_format_align_left",
          address: "multiple-space-remover",
        },
      ],
    },
    {
      name: "ابزارهای شبکه ای",
      icon: "o_public",
      address: "network",
      subItem: [
        {
          name: "آی پی من چیه؟",
          icon: "o_question_mark",
          address: "whats-my-ip",
        },
      ],
    },
    {
      name: "ابزارهای امنیتی",
      icon: "o_lock",
      address: "security",
      subItem: [
        {
          name: "تولید رمز قوی",
          link: "/tools/strong-password",
          icon: "o_password",
          address: "strong-password",
        },
      ],
    },
  ],

  websiteURL: () => {
    return "https://tanbalbashi.ir/wp-content/themes/tanbalbashi/app/public";
    return "http://localhost/webida/wp-content/themes/blackbox/app/public";
  },
};
