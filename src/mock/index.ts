import {
  updatelabinfoList,
  updatelaboccupyinfo,
  updatelabinfo,
  deletelabinfo,
  updatelaboccupyinfo_delete,
} from "@/role/LabInfo";
import { createlaborderinfo, deletelaborderinfo } from "@/role/LabOrderInfo";
import { Menu, Role, UserInfo, Lab } from "@/role/Menu";
import {
  getuserinfoList,
  getuserinfobyId,
  updateuserinfo,
  deleteuserinfo,
  createteacher,
  updateuserpw,
} from "@/role/UserInfo";
import {
  updateorderinfo_occupyform,
  updateorderinfo_occupyform_delete,
} from "@/role/OrderedInfo";
import {
  updatecourseinfoList,
  updatecourselabinfo,
  updatecourselabinfo_delete,
} from "@/role/CourseInfo";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import store from "@/store";

const mock = new MockAdapter(axios);
// 过滤http前缀请求
mock.onGet(/^http/).passThrough();

function path(p: string) {
  const reg = p.replace(/{\w+}/g, "(\\w+)").replace(/\//g, "\\/") + "$";
  return new RegExp(reg);
}
export interface ResultVO {
  code: number;
  message?: string;
  data?: any;
}
const resulVO: ResultVO = {
  code: 200,
  data: {},
};
mock.onGet(path("users/{uid}/personnalinfo")).reply((c) => {
  const reg = /users\/(\d+)/;
  const uid = c.url?.match(reg)![1];
  const userinfo = getuserinfoList().find((h) => {
    return h.id == uid;
  });
  resulVO.code = 200;
  resulVO.data = { userinfo };
  return [200, resulVO];
});
mock.onPost("deleteUserInfo").reply((c) => {
  const data = c.data;
  const { id } = JSON.parse(data);
  const deleteinfo = deleteuserinfo(id);
  resulVO.data = { deleteinfo };
  return [200, resulVO];
});
mock.onPost("deleteLabInfo").reply((c) => {
  const data = c.data;
  const { id } = JSON.parse(data);
  const deleteinfo = deletelabinfo(id);
  resulVO.data = { deleteinfo };
  return [200, resulVO];
});
mock.onPost("deleteLabOrderInfo").reply((c) => {
  const data = c.data;
  const { labid, week, day, cth, stunum, courseid, createTime } = JSON.parse(
    data
  );
  const orderitem = {
    labid: labid,
    week: week,
    day: day,
    cth: cth,
    courseid: courseid,
    createTime: createTime,
  };
  //const labinfo_d = updatelaboccupyinfo_delete(orderitem);
  const laborderinfo_d = deletelaborderinfo(createTime);
  //const orderedinfo_d = updateorderinfo_occupyform_delete(orderitem);
  //const courseinfo_d = updatecourselabinfo_delete(orderitem);
  resulVO.data = { laborderinfo_d };
  return [200, resulVO];
});
mock.onPost("deleteOrderedInfo").reply((c) => {
  const data = c.data;
  const { labid, week, day, cth, stunum, courseid, createTime } = JSON.parse(
    data
  );
  const orderitem = {
    labid: labid,
    week: week,
    day: day,
    cth: cth,
    courseid: courseid,
    createTime: createTime,
  };
  //const labinfo_d = updatelaboccupyinfo_delete(orderitem);
  //const laborderinfo_d = deletelaborderinfo(createTime);
  const orderedinfo_d = updateorderinfo_occupyform_delete(orderitem);
  //const courseinfo_d = updatecourselabinfo_delete(orderitem);
  resulVO.data = { orderedinfo_d };
  return [200, resulVO];
});
mock.onPost("deleteLabOccupyInfo").reply((c) => {
  const data = c.data;
  const { labid, week, day, cth, stunum, courseid, createTime } = JSON.parse(
    data
  );
  const orderitem = {
    labid: labid,
    week: week,
    day: day,
    cth: cth,
    courseid: courseid,
    createTime: createTime,
  };
  const labinfo_d = updatelaboccupyinfo_delete(orderitem);
  //const laborderinfo_d = deletelaborderinfo(createTime);
  //const orderedinfo_d = updateorderinfo_occupyform_delete(orderitem);
  //const courseinfo_d = updatecourselabinfo_delete(orderitem);
  resulVO.data = { labinfo_d };
  return [200, resulVO];
});
mock.onPost("deleteCourseInfo").reply((c) => {
  const data = c.data;
  const { labid, week, day, cth, stunum, courseid, createTime } = JSON.parse(
    data
  );
  const orderitem = {
    labid: labid,
    week: week,
    day: day,
    cth: cth,
    courseid: courseid,
    createTime: createTime,
  };
  //const labinfo_d = updatelaboccupyinfo_delete(orderitem);
  //const laborderinfo_d = deletelaborderinfo(createTime);
  //const orderedinfo_d = updateorderinfo_occupyform_delete(orderitem);
  const courseinfo_d = updatecourselabinfo_delete(orderitem);
  resulVO.data = { courseinfo_d };
  return [200, resulVO];
});
mock.onPost("updateLabInfo").reply((c) => {
  const data = c.data;
  const { id, place, deviceNum, description } = JSON.parse(data);
  const upinfo = {
    id: id,
    place: place,
    deviceNum: deviceNum,
    description: description,
  };
  const updateinfo = updatelabinfo(upinfo);
  resulVO.data = { updateinfo };
  return [200, resulVO];
});
mock.onPost("updateUserInfo").reply((c) => {
  const data = c.data;
  const { id, pw, role, name, gender, age, college, major } = JSON.parse(data);
  const upinfo = {
    id: id,
    pw: pw,
    role: role,
    name: name,
    gender: gender,
    age: age,
    college: college,
    major: major,
  };
  const updateinfo = updateuserinfo(upinfo);
  resulVO.data = { updateinfo };
  return [200, resulVO];
});
mock.onPost("createTeacher").reply((c) => {
  const data = c.data;
  const { id, pw, role, name, gender, age, college, major } = JSON.parse(data);
  const cinfo = {
    id: id,
    pw: pw,
    role: role,
    name: name,
    gender: gender,
    age: age,
    college: college,
    major: major,
  };
  const createinfo = createteacher(cinfo);
  resulVO.data = { createinfo };
  return [200, resulVO];
});
mock.onPost("updateUserPw").reply((c) => {
  const data = c.data;
  console.log(data);
  const { uid, npw } = JSON.parse(data);
  console.log(uid);
  const updatepw = updateuserpw(uid, npw);
  resulVO.data = { updatepw };
  return [200, resulVO];
});
mock.onPost("updateCourseList").reply((c) => {
  const data = c.data;
  const {
    id,
    name,
    takePeriod,
    teacher,
    stuNum,
    takelabInfo,
    otherInfo,
  } = JSON.parse(data);
  const newcourse = {
    id: id,
    name: name,
    takePeriod: takePeriod,
    teacher: teacher,
    stuNum: stuNum,
    takelabInfo: takelabInfo,
    otherInfo: otherInfo,
  };
  const updated = updatecourseinfoList(newcourse);
  resulVO.data = { updated };
  return [200, resulVO];
});
//!!!!
mock.onPost("updateCourseInfo_Lab").reply((c) => {
  const data = c.data;
  const { labid, week, day, cth, stunum, courseid, createTime } = JSON.parse(
    data
  );
  const orderitem = {
    labid: labid,
    week: week,
    day: day,
    cth: cth,
    courseid: courseid,
    createTime: createTime,
  };
  const updatecourselab = updatecourselabinfo(orderitem);
  resulVO.data = { updatecourselab };
  return [200, resulVO];
});
mock.onPost("updateLabList").reply((c) => {
  const data = c.data;
  const {
    id,
    place,
    deviceNum,
    description,
    isoccupyed,
    occupyedTime,
  } = JSON.parse(data);
  const newlab = {
    id: id,
    place: place,
    deviceNum: deviceNum,
    description: description,
    isoccupyed: isoccupyed,
    occupyedTime: occupyedTime,
  };
  const updated = updatelabinfoList(newlab);
  resulVO.data = { updated };
  return [200, resulVO];
  console.log("updateLabList");
});

mock.onPost("createLabOrderInfo").reply((c) => {
  const data = c.data;
  const { labid, week, day, cth, stunum, courseid, createTime } = JSON.parse(
    data
  );
  const orderitem = {
    labid: labid,
    week: week,
    day: day,
    cth: cth,
    courseid: courseid,
    createTime: createTime,
  };
  const createform = createlaborderinfo(orderitem, store.state.userinfo);
  resulVO.data = { createform };
  return [200, resulVO];
  //console.log("updateLabOccupyInfo");--执行但不输出？？
});
//!!!!
mock.onPost("updateLabInfo_Occupy").reply((c) => {
  const data = c.data;
  const { labid, week, day, cth, stunum, courseid, createTime } = JSON.parse(
    data
  );
  const orderitem = {
    labid: labid,
    week: week,
    day: day,
    cth: cth,
    courseid: courseid,
    createTime: createTime,
  };
  const orderform = updatelaboccupyinfo(orderitem);
  resulVO.data = { orderform };
  return [200, resulVO];
  //console.log("updateLabOccupyInfo");--执行但不输出？？
});
//!!!!
mock.onPost("updateOrderedInfo").reply((c) => {
  const data = c.data;
  const { labid, week, day, cth, stunum, courseid, createTime } = JSON.parse(
    data
  );
  const orderitem = {
    labid: labid,
    week: week,
    day: day,
    cth: cth,
    courseid: courseid,
    createTime: createTime,
  };
  const orderedinfo = updateorderinfo_occupyform(orderitem);
  resulVO.data = { orderedinfo };
  return [200, resulVO];
});
mock.onPost("login").reply((c) => {
  const data = c.data;
  const { number, password } = JSON.parse(data);
  const usertmp = getuserinfoList().find((h) => {
    return h.id == number;
  });
  if (usertmp?.pw == password) {
    resulVO.code = 200;
    const userinfo = getuserinfoList().find((h) => {
      return h.id == number;
    });
    resulVO.data = { userinfo };
    return [200, resulVO];
  }
  resulVO.code = 401;
  resulVO.message = "用户名密码错误";
  return [200, resulVO];
});
