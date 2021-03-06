import { Menu, Role, UserInfo } from "./Menu";
//规定role=“1”--教师；role=“2”--管理员
const userinfoList: UserInfo[] = [
  {
    id: "1001",
    pw: "123456",
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
export function getuserinfobyId(id: string) {
  return userinfoList.find((x) => x.id == id);
}
export function updateuserinfo(upuser: UserInfo) {
  userinfoList.forEach((u) => {
    if (u.id == upuser.id) {
      userinfoList.splice(userinfoList.indexOf(u), 1, upuser);
    }
  });
  return upuser;
}
export function updateuserpw(uid: string, npw: string) {
  const u = getuserinfobyId(uid);
  if (u != undefined) {
    u.pw = npw;
  }
  console.log(getuserinfobyId("1001"));
  return npw;
}
export function deleteuserinfo(duid: string) {
  userinfoList.forEach((x) => {
    if (x.id == duid) {
      userinfoList.splice(userinfoList.indexOf(x), 1);
    }
  });
}
export function createteacher(newteacher: UserInfo) {
  userinfoList.push(newteacher);
}
