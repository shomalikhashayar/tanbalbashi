export const helper = {
  getPersianYear: () => {
    const date = new Date();

    const option = {
      year: "numeric",
      calendar: "persian",
    };

    return date.toLocaleDateString("fa-IR", option);
  },

  thumbStyle: {
    left: '4px',
    borderRadius: '5px',
    width: '6px',
    opacity: 0.75
  },

  barStyle: {
    left: '2px',
    width: '8px',
    opacity: 0.2
  },

  getTools: () => [
    {
      name: "ابزارهای محاسباتی",
      icon: "o_calculate",
      address: "computational-tools",
      subItem: [
        {
          name: "محاسبه فاکتوریل",
          icon: "o_priority_high",
          address: "factorial",
          description: `ابزار محسابه فاکتوریل آنلاین این امکان را به شما می‌دهد تا فاکتوریل هر عددی را بدون استفاده از ماشین حساب بدست بیاورید.`,
        },
        {
          name: "محاسبه لگاریتم",
          icon: "o_functions",
          address: "logarightm",
          description: `چه تعداد از یک عدد را باید در خودش ضرب کنیم تا عدد دیگری را به دست آوریم؟ این ابزار راه حل را به سرعت برای شما نمایان می‌کند.`,
        },
        {
          name: "محاسبه جذر",
          icon: "o_square",
          address: "square-root",
          description: `امکان محاسبه جذر یک عدد را می‌دهد. جذر یک عدد، عددی است که وقتی به توان دو رسانده شود، به عدد اصلی می‌رسد.`
        },
        {
          name: "محاسبه درصد",
          icon: "o_percent",
          address: "percent",
          description: `اگر می‌خواهید بدانید چند درصد یک عدد از عدد دیگر است، این ابزار به شما کمک می‌کند تا این مقدار را به‌صورت آنلاین محاسبه کنید.`
        },
      ],
    },
    {
      name: "ابزارهای متنی",
      icon: "o_description",
      address: "text-tools",
      subItem: [
        {
          name: "تولید متن تصادفی",
          icon: "o_format_list_numbered_rtl",
          address: "loremipsum",
          description: `این ابزار به شما امکان می‌دهد تا متن‌های تصادفی برای آزمایش یا پر کردن فضای خالی در طراحی و تست‌های مختلف تولید کنید.`
        },
        {
          name: "شمارش تعداد کلمات متن",
          icon: "o_segment",
          address: "letter-counter",
          description: `به شما امکان می‌دهد در سه سوت به صورت آنلاین حروف، کلمات و جملات موجود در متن را بشمارید.`
        },
        {
          name: "حذف فواصل اضافه متن",
          icon: "o_format_align_left",
          address: "multiple-space-remover",
          description: `استاد تمیزکاری در متن:  این ابزار فضای خالی اضافه را حذف کرده و متن را به‌صورت تمیز و مرتب نمایش می‌دهد.          `
        },
      ],
    },
    {
      name: "ابزارهای شبکه ای",
      icon: "o_public",
      address: "network-tools",
      subItem: [
        {
          name: "آی پی من چیه؟",
          icon: "o_question_mark",
          address: "whats-my-ip",
          description: `اطلاعاتی راجع به آدرس آی پی شما ارائه می‌دهد. می‌توانید آدرس IP که در حال حاضر در اینترنت استفاده می‌شود را ببینید.`
        },
      ],
    },
    {
      name: "ابزارهای امنیتی",
      icon: "o_lock",
      address: "security-tools",
      subItem: [
        {
          name: "تولید رمز قوی",
          link: "/tools/strong-password",
          icon: "o_password",
          address: "strong-password",
          description: `این ابزار به شما امکان می‌دهد تا رمزهای عبور قوی و امن برای استفاده در حساب‌های آنلاین، ایمیل‌ها، یا هر نیاز دیگری تولید کنید.`
        },
      ],
    },
  ],

  websiteURL: () => {
    return "https://tanbalbashi.ir/wp-content/themes/tanbalbashi/app/public";
    return "http://localhost/webida/wp-content/themes/blackbox/app/public";
  },
};
