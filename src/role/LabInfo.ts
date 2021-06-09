import { Lab, OrderForm } from "./Menu";
const labinfolist: Lab[] = [
  {
    id: "910",
    place: "丹青",
    deviceNum: 120,
    description: "丹青机房910",
    isoccupyed: false,
    occupyedTime: [],
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
export function getlabinfoListByid(gid: string) {
  const labinfo = labinfolist.find((x) => {
    return x.id == gid;
  });
  return labinfo;
}
export function updatelaboccupyinfo(item: OrderForm) {
  labinfolist.forEach((x) => {
    if (x.id == item.labid) {
      x.isoccupyed = true;
      item.week?.forEach((a) => {
        item.day?.forEach((b) => {
          item.cth?.forEach((c) => {
            x.occupyedTime?.push({
              week: a,
              day: b,
              cth: c,
            });
          });
        });
      });
    }
  });
  //console.log("function updatelaboccupyinfo");
  return item;
}
