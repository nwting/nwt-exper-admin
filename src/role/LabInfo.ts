import { Lab } from "./Menu";
const labinfolist: Lab[] = [
  {
    id: "910",
    place: "丹青",
    deviceNum: 50,
    description: "丹青机房910",
  },
  {
    id: "911",
    place: "丹青",
    deviceNum: 60,
    description: "丹青机房911",
  },
];
export function getlabinfoList() {
  return labinfolist;
}
export function updatelabinfoList(newlab: Lab) {
  labinfolist.push(newlab);
  return newlab;
}
