import { OrderedInfo, DayToOrderInfo, CthToCourse, CourseInfo } from "./Menu";
const orderedinfolist: OrderedInfo[] = [
  {
    id: "1",
    labId: "911",
    week: 1,
    orderInfo: [
      {
        day: 1,
        info: [
          {
            cth: 1,
            course: {
              id: "3",
              name: "web前端实验",
            },
          },
          {
            cth: 2,
            course: {
              id: "3",
              name: "web前端实验",
            },
          },
        ],
      },
      {
        day: 2,
        info: [
          {
            cth: 1,
            course: {
              id: "4",
              name: "软件工程实验",
            },
          },
          {
            cth: 2,
            course: {
              id: "4",
              name: "软件工程实验",
            },
          },
        ],
      },
    ],
  },
];
export function getorderedinfoList() {
  return orderedinfolist;
}
export function updateorderedinfoList(newordered: OrderedInfo) {
  orderedinfolist.push(newordered);
  return newordered;
}
