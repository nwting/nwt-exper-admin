import { updatelabinfoList } from "@/role/LabInfo";
import { Menu, Role, UserInfo, Lab } from "@/role/Menu";
import { getuserinfoList, getuserinfo } from "@/role/UserInfo";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

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
mock.onPost("updateLabList").reply((c) => {
  const data = c.data;
  const { newlab } = JSON.parse(data);
  const updated = updatelabinfoList(newlab);
  resulVO.data = { updated };
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
