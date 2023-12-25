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
    },
    {
      name: "محاسبه لگاریتم",
      link: "/tools/factorial",
    },
    {
      name: "محاسبه جذر",
      link: "/tools/factorial",
    },
    {
      name: "تولید متن تصادفی",
      link: "/tools/factorial",
    },
    {
      name: "تولید رمز قوی",
      link: "/tools/factorial",
    },
    {
      name: "محاسبه درصد",
      link: "/tools/factorial",
    },
  ],
};
