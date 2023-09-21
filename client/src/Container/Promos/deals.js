import deal1 from "../../assets/images/promo/deal1.jpg";
import deal2 from "../../assets/images/promo/deal2.jpg";
import deal3 from "../../assets/images/promo/deal3.jpg";
import deal4 from "../../assets/images/promo/deal4.jpg";

export const deals = [
  {
    name: "Rupee Savor",
    img: deal2,
    about: "Get 40% off on any indian cuisine ordered worth Rs 700",
    details: "offer valid till 3rd September 2023",
    code: "INDIA77",
    href: "indian",
  },
  {
    name: "Sweet Something",
    img: deal3,
    about:
      "Get a complimentary cupcake free on order worth Rs 500 on Deserts/Cakes",
    details: "offer valid till 1st September 2023 selected stores only",
    code: "SWEETCC",
    href: "/deserts",
  },
  {
    name: "Buy 2 Get 3",
    img: deal1,
    about: "Get 1 Free Salad/Pizza/Pasta  on buying any two of the same",
    details: "offer valid only on Tuesday and Thursday on selected Stores",
    code: "B2G3",
    href: "/pizza",
  },

  {
    name: "Boozy Weekends",
    img: deal4,
    about: "Get 60% off on any drink ordered",
    details: "offer valid only on Weekends on selected Stores",
    code: "WEEKND60",
    href: "/beverages",
  },
];
