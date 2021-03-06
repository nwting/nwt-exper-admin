export interface Menu {
  title: string;
  path?: string;
  children?: Menu[];
}
export interface Role {
  rolenum: string;
  title: string;
  menulist: Menu[];
}
export interface UserInfo {
  id: string | undefined;
  pw?: string;
  role?: string;
  name?: string;
  gender?: string;
  age?: number;
  college?: string;
  major?: string;
}
export interface Teacher {
  id: string;
  name?: string;
}
export interface Lab {
  id: string;
  place?: string;
  deviceNum?: number;
  description?: string;
  isoccupyed?: boolean;
  occupyedTime?: Time[];
}
export interface Time {
  week?: number;
  day?: number;
  cth?: number;
}
export interface TakeLabInfo {
  week?: number;
  day?: number;
  cth?: number;
  labid?: string;
}
export interface CourseInfo {
  id: string;
  name?: string;
  takePeriod?: number; //节数
  //takeTime?: Time[];
  teacher?: Teacher;
  stuNum?: number;
  takelabInfo?: TakeLabInfo[];
  otherInfo?: string;
}

export interface CthToCourse {
  cth?: number;
  course?: CourseInfo;
}
export interface DayToOrderInfo {
  day?: number;
  info?: CthToCourse[];
}
export interface OrderedInfo {
  //id: string; //scheme中每一个教室每一行（每一周）对应一个id，
  labId?: string;
  week?: number; //周次
  orderInfo?: DayToOrderInfo[];
}

export interface LabOrderInfo {
  orderLabId?: string;
  orderUser?: Teacher;
  createTime?: string;
  orderCourseTime?: Time[];
  orderCourse?: CourseInfo;
  isOrdered?: boolean;
}
export interface OrderForm {
  labid?: string;
  week?: [];
  day?: [];
  cth?: [];
  stunum?: number;
  courseid?: string;
  createTime?: string;
}
// {
//   id: "1",
//   name: "web实验",
//   takePeriod: 4,
//   teacher: { id: "1001", name: "王老师" },
//   stuNum: 60,
//   takelabInfo: [
//     { week: 3, day: 1, cth: 1, labid: "910" },
//     { week: 3, day: 1, cth: 2, labid: "910" },
//     { week: 4, day: 1, cth: 1, labid: "911" },
//     { week: 4, day: 1, cth: 2, labid: "911" },
//   ],
//   otherInfo: "",
// },
