import { getcourseinfoById } from "./CourseInfo";
import {
  LabOrderInfo,
  CourseInfo,
  OrderForm,
  Teacher,
  UserInfo,
  Time,
} from "./Menu";

const laborderinfolist: LabOrderInfo[] = [
  {
    orderLabId: "910",
    orderUser: { id: "1001", name: "王老师" },
    createTime: "2021-06-04T16:04:00",
    orderCourseTime: [
      { week: 3, day: 1, cth: 1 },
      { week: 3, day: 1, cth: 2 },
    ],
    orderCourse: { id: "1", name: "web实验" },
    isOrdered: true,
  },
  {
    orderLabId: "911",
    orderUser: { id: "1001", name: "王老师" },
    createTime: "2021-06-05T16:06:00",
    orderCourseTime: [
      { week: 4, day: 1, cth: 1 },
      { week: 4, day: 1, cth: 2 },
    ],
    orderCourse: { id: "1", name: "web实验" },
    isOrdered: true,
  },
  {
    orderLabId: "920",
    orderUser: { id: "1002", name: "李老师" },
    createTime: "2021-06-07T16:06:00",
    orderCourseTime: [
      { week: 1, day: 2, cth: 1 },
      { week: 1, day: 2, cth: 2 },
    ],
    orderCourse: { id: "4", name: "软件工程实验" },
    isOrdered: true,
  },
  {
    orderLabId: "920",
    orderUser: { id: "1001", name: "王老师" },
    createTime: "2021-06-09T16:00:00",
    orderCourseTime: [
      { week: 3, day: 2, cth: 1 },
      { week: 3, day: 2, cth: 2 },
    ],
    orderCourse: { id: "2", name: "java实验" },
    isOrdered: true,
  },
];
export function createlaborderinfo(item: OrderForm, user: UserInfo) {
  const t = {
    orderLabId: "",
    orderUser: { id: "" },
    createTime: "",
    orderCourseTime: [],
    orderCourse: { id: "" },
    isOrdered: false,
  } as LabOrderInfo;
  if (user.id != undefined) {
    t.orderLabId = item.labid;
    t.orderUser = {
      id: user.id,
      name: user.name,
    };
    t.createTime = item.createTime;
    item.week?.forEach((a) => {
      item.day?.forEach((b) => {
        item.cth?.forEach((c) => {
          t.orderCourseTime?.push({
            week: a,
            day: b,
            cth: c,
          } as Time);
        });
      });
    });
    if (item.courseid != undefined) {
      t.orderCourse = {
        id: item.courseid,
        name: getcourseinfoById(item.courseid)?.name,
      };
    }
    t.isOrdered = true;
    laborderinfolist.push(t);
  }
}
export function getlaborderinfolist() {
  return laborderinfolist;
}
export function getlaborderinfobyCreateTime(ct: string) {
  return laborderinfolist.find((x) => x.createTime == ct);
}
export function deletelaborderinfo(dctime: string) {
  const t = laborderinfolist.find((x) => x.createTime == dctime);
  if (t != undefined) {
    laborderinfolist.splice(laborderinfolist.indexOf(t), 1);
  }
}

// {
//   id: "911",
//   place: "丹青",
//   deviceNum: 120,
//   description: "丹青机房911",
//   isoccupyed: true,
//   occupyedTime: [
//     { week: 4, day: 1, cth: 1 },
//     { week: 4, day: 1, cth: 2 },
//   ],
// },

// {
//   orderLabId: "910",
//   orderUser: { id: "1001", name: "王老师" },
//   createTime: "2021-06-04T16:04:00",
//   orderCourseTime: [
//     { week: 3, day: 1, cth: 1 },
//     { week: 3, day: 1, cth: 2 },
//   ],
//   orderCourse: { id: "1", name: "web实验" },
//   isOrdered: true,
// },
