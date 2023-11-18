import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "General",
    categoryTitle: "General",
    description:
      "Getting to know all about Computer systems, Computer networks, etc. and overall the basics of hacking"
  },
  {
    _id: uuid(),
    categoryName: "Defensive",
    categoryTitle: "Defensive",
    description:
      "Learning the art of defending the computer systems, and protecting the company's digital infrastructure"
  },
  {
    _id: uuid(),
    categoryName: "Offensive",
    categoryTitle: "Offensive",
    description:
      "Learning the art of attacking and hacking into computer systems, maintaing the access and escalating the access"
  }
];