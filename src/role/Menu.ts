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
export interface CourseInfo {
  id: string;
  name?: string;
  takePeriod?: number; //节数
  takeTime?: Time[];
  teacher?: Teacher[];
  stuNum?: number;
  lab?: Lab[];
  otherInfo?: string;
}
export interface LabOrderInfo {
  id: string;
  orderLabId?: string;
  orderUser?: Teacher;
  createTime?: string;
  orderCourseTime?: Time[];
  orderCourse?: CourseInfo;
  remainDev?: number;
  isOrdered?: false;
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
  id: string; //scheme中每一个教室每一行（每一周）对应一个id，
  labId?: string;
  week?: number; //周次
  orderInfo?: DayToOrderInfo[];
}
