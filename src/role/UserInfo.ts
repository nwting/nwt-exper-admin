import { Menu, Role, UserInfo } from "./Menu";
// export interface UserInfo {
//   id: string;
//   pw: string;
//   role: string;
//   name?: string;
//   gender?: string;
//   age?: number;
//   college?: string;
//   major?: string;
// }

//规定role=“1”--教师；role=“2”--管理员
const userinfoList: UserInfo[] = [
  {
    id: "1001",
    pw: "1",
    role: "1",
    name: "王老师",
    gender: "男",
    age: 30,
    college: "信息与计算机工程学院",
    major: "软件工程",
  },
  {
    id: "1002",
    pw: "123456",
    role: "2",
    name: "李老师",
    gender: "女",
    age: 35,
    college: "信息与计算机工程学院",
    major: "软件工程",
  },
];
export function getuserinfoList() {
  return userinfoList;
}
export function getuserinfo(id: string) {
  return getuserinfoList().find((x) => {
    return x.id == id;
  });
}
