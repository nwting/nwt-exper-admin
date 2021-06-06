import { CourseInfo, Time, Lab, Teacher } from "./Menu";
const courseinfolist: CourseInfo[] = [
  {
    id: "1",
    name: "web实验",
    takePeriod: 4,
    takeTime: [
      { week: 3, day: 1, cth: 1 },
      { week: 3, day: 1, cth: 2 },
      { week: 4, day: 1, cth: 1 },
      { week: 4, day: 1, cth: 2 },
    ], //
    teacher: { id: "1001", name: "王老师" },
    stuNum: 60,
    lab: [], //注意更新
    otherInfo: "",
  },
  {
    id: "2",
    name: "java实验",
    takePeriod: 4,
    takeTime: [
      { week: 3, day: 2, cth: 1 },
      { week: 3, day: 2, cth: 2 },
      { week: 4, day: 2, cth: 1 },
      { week: 4, day: 2, cth: 2 },
    ],
    teacher: { id: "1002", name: "王老师" },
    stuNum: 100,
    lab: [],
    otherInfo: "",
  },
  {
    id: "3",
    name: "web前端实验",
    takePeriod: 2,
    takeTime: [
      { week: 1, day: 1, cth: 1 },
      { week: 1, day: 1, cth: 2 },
    ],
    teacher: { id: "1001", name: "王老师" },
    stuNum: 100,
    lab: [{ id: "911" }],
    otherInfo: "",
  },
  {
    id: "4",
    name: "软件工程实验",
    takePeriod: 2,
    takeTime: [
      { week: 1, day: 2, cth: 1 },
      { week: 1, day: 2, cth: 2 },
    ],
    teacher: { id: "1002", name: "李老师" },
    stuNum: 100,
    lab: [{ id: "911" }],
    otherInfo: "",
  },
];
