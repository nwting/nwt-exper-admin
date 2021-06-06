import { LabOrderInfo, CourseInfo } from "./Menu";

const laborderinfolist: LabOrderInfo[] = [
  {
    id: "1",
    orderLabId: "911",
    orderUser: [{ id: "1001", name: "王老师" }],
    createTime: "2021-6-4T16:04:00",
    orderCourseTime: [
      { week: 1, day: 1, cth: 1 },
      { week: 1, day: 1, cth: 2 },
    ],
    orderCourse: { id: "3", name: "web前端实验" },
    isOrdered: true,
  },
  {
    id: "2",
    orderLabId: "911",
    orderUser: [{ id: "1002", name: "李老师" }],
    createTime: "2021-6-5T16:04:00",
    orderCourseTime: [
      { week: 1, day: 2, cth: 1 },
      { week: 1, day: 2, cth: 2 },
    ],
    orderCourseName: { id: "4", name: "软件工程实验" },
    isOrdered: true,
  },
];
