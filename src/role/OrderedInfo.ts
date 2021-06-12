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
    week: 4,
    orderInfo: [
      {
        day: 1,
        info: [
          {
            cth: 1,
            course: {
              id: "1",
              name: "web实验",
            },
          },
          {
            cth: 2,
            course: {
              id: "1",
              name: "web实验",
            },
          },
        ],
      },
    ],
  },
  {
    labId: "910",
    week: 3,
    orderInfo: [
      {
        day: 1,
        info: [
          {
            cth: 1,
            course: {
              id: "1",
              name: "web实验",
            },
          },
          {
            cth: 2,
            course: {
              id: "1",
              name: "web实验",
            },
          },
        ],
      },
    ],
  },
  {
    labId: "920",
    week: 3,
    orderInfo: [
      {
        day: 2,
        info: [
          {
            cth: 1,
            course: {
              id: "2",
              name: "java实验",
            },
          },
          {
            cth: 2,
            course: {
              id: "2",
              name: "java实验",
            },
          },
        ],
      },
    ],
  },
  {
    labId: "920",
    week: 1,
    orderInfo: [
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
    //console.log(orderitem);
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
export function updateorderinfo_occupyform_delete(orderitem: OrderForm) {
  orderitem.week?.forEach((w) => {
    orderedinfolist.forEach((odi) => {
      if (odi.labId == orderitem.labid) {
        if (odi.week == w) {
          //定位到列表指定对象odi，开始操作
          orderitem.day?.forEach((d) => {
            odi.orderInfo?.forEach((oinfo) => {
              if (oinfo.day == d) {
                //定位到指定对象的指定orderinfo的对象——oinfo
                //此时week相等且day相等
                const n = oinfo.info;
                console.log(n);
                orderitem.cth?.forEach((c) => {
                  oinfo.info?.forEach((info) => {
                    console.log(info); //orderedinfo

                    console.log(c); // orderitem.cth
                    if (info.cth == c) {
                      //删掉该info对象
                      oinfo.info?.splice(oinfo.info.indexOf(info), 1);
                    }
                    //判断oinfo.info是否为空，空则删除该oinfo对象
                    //判断odi.orderinfo是否为空，空则删除该odi
                    if (oinfo.info?.length == 0) {
                      odi.orderInfo?.splice(odi.orderInfo.indexOf(oinfo), 1);
                    }
                    if (odi.orderInfo?.length == 0) {
                      orderedinfolist.splice(orderedinfolist.indexOf(odi), 1);
                    }
                  });
                });
              }
            });
          });
        }
      }
    });
  });
  console.log(orderedinfolist);
}
