import { CourseInfo, Time, Lab, Teacher } from "./Menu";
// export interface Teacher {
//   id: string;
//   name?: string;
// }
// export interface Lab {
//   id: string;
//   devicNum?: number;
//   description?: string;
// }
// export interface Time {
//   week?: number;
//   day?: number;
//   cth?: number;
// }
// export interface CourseInfo {
//   id: string;
//   name?: string;
//   takePeriod?: number; //节数
//   takeTime?: Time[];
//   teacher?: Teacher[];
//   stuNum?: number;
//   lab?: Lab[];
// }
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
    ],
    teacher: "王老师",
    stuNum: 60,
    lab: [],
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
    teacher: "李老师",
    stuNum: 100,
    lab: [],
  },
];
