import { Lab } from "./Menu";
const labinfolist: Lab[] = [
  {
    id: "910",
    place: "丹青",
    deviceNum: 120,
    description: "丹青机房910",
    isoccupyed: false,
  },
  {
    id: "911",
    place: "丹青",
    deviceNum: 120,
    description: "丹青机房911",
    isoccupyed: true,
    occupyedTime: [
      { week: 1, day: 1, cth: 1 },
      { week: 1, day: 1, cth: 2 },
      { week: 1, day: 2, cth: 1 },
      { week: 1, day: 2, cth: 2 },
    ],
  },
];
export function getlabinfoList() {
  return labinfolist;
}
export function updatelabinfoList(newlab: Lab) {
  labinfolist.push(newlab);
  return newlab;
}
