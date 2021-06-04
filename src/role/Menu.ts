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
}
export interface LabOrderInfo {
  id: string;
  orderUser?: Teacher;
  createTime?: string;
  orderCourseTime?: CourseInfo.takeTime;
}
