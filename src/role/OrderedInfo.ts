import {
  OrderedInfo,
  DayToOrderInfo,
  CthToCourse,
  CourseInfo,
  OrderForm,
} from "./Menu";
import { getcourseinfoById } from "./CourseInfo";
const orderedinfolist: OrderedInfo[] = [
  {
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
  {
    labId: "921",
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
export function updateorderinfo_occupyform(orderitem: OrderForm) {
  let flag = 0;
  orderedinfolist.forEach((x) => {
    console.log(orderitem);
    if (x.labId == orderitem.labid) {
      flag = 2; //2——找到同一实验室，未找到同一周次
      orderitem.week?.forEach((y) => {
        if (x.week == y) {
          flag = 1; //1——找到同一实验室同一周次数据
          orderitem.day?.forEach((d) => {
            //console.log("if (x.week == y)");
            orderitem.cth?.forEach((c) => {
              //console.log(orderitem.courseid);
              if (orderitem.courseid != undefined) {
                console.log("pre-push!");
                const item = {
                  day: d,
                  info: [
                    {
                      cth: c,
                      course: {
                        id: orderitem.courseid,
                        name: getcourseinfoById(orderitem.courseid)?.name,
                      },
                    },
                  ],
                } as DayToOrderInfo;
                x.orderInfo?.push(item);
                console.log("push!");
              }
            });
          });
        }
      });
    }
  });
  if (flag == 2 || flag == 0) {
    orderitem.week?.forEach((w) => {
      const item1 = {
        labId: orderitem.labid,
        week: w,
        orderInfo: [],
      } as OrderedInfo;
      orderitem.day?.forEach((d) => {
        const item1orderinfo = {
          day: d,
          info: [],
        } as DayToOrderInfo;
        orderitem.cth?.forEach((c) => {
          if (orderitem.courseid != undefined) {
            const item1info = {
              cth: c,
              course: {
                id: orderitem.courseid,
                name: getcourseinfoById(orderitem.courseid)?.name,
              },
            } as CthToCourse;
            item1orderinfo.info?.push(item1info);
          }
        });
        item1.orderInfo?.push(item1orderinfo);
      });
      orderedinfolist.push(item1);
    });
  }
}
