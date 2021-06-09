import { CourseInfo, Time, Lab, Teacher } from "./Menu";
const courseinfolist: CourseInfo[] = [
  {
    id: "1",
    name: "web实验",
    takePeriod: 4,
    teacher: { id: "1001", name: "王老师" },
    stuNum: 60,
    takelabInfo: [
      { week: 3, day: 1, cth: 1, labid: "910" },
      { week: 3, day: 1, cth: 2, labid: "910" },
      { week: 4, day: 1, cth: 1, labid: "911" },
      { week: 4, day: 1, cth: 2, labid: "911" },
    ],
    otherInfo: "",
  },
  {
    id: "2",
    name: "java实验",
    takePeriod: 4,
    teacher: { id: "1002", name: "王老师" },
    stuNum: 100,
    takelabInfo: [
      { week: 3, day: 2, cth: 1, labid: "920" },
      { week: 3, day: 2, cth: 2, labid: "920" },
      { week: 4, day: 2, cth: 1, labid: "921" },
      { week: 4, day: 2, cth: 2, labid: "921" },
    ],
    otherInfo: "",
  },
  {
    id: "3",
    name: "web前端实验",
    takePeriod: 2,
    teacher: { id: "1001", name: "王老师" },
    stuNum: 100,
    takelabInfo: [
      { week: 1, day: 1, cth: 1, labid: "920" },
      { week: 1, day: 1, cth: 2, labid: "920" },
    ],
    otherInfo: "",
  },
  {
    id: "4",
    name: "软件工程实验",
    takePeriod: 2,
    teacher: { id: "1002", name: "李老师" },
    stuNum: 100,
    takelabInfo: [
      { week: 1, day: 2, cth: 1, labid: "920" },
      { week: 1, day: 2, cth: 2, labid: "920" },
    ],
    otherInfo: "",
  },
];
export function getcourseinfoById(fid: string) {
  return courseinfolist.find((x) => x.id == fid);
}
export function getcourseinfoList() {
  return courseinfolist;
}
export function updatecourseinfoList(newcourse: CourseInfo) {
  courseinfolist.push(newcourse);
  return newcourse;
}
