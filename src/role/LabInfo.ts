import { getlaborderinfobyCreateTime } from "./LabOrderInfo";
import { Lab, OrderForm } from "./Menu";
const labinfolist: Lab[] = [
  {
    id: "910",
    place: "丹青",
    deviceNum: 120,
    description: "丹青机房910",
    isoccupyed: false,
    occupyedTime: [
      { week: 3, day: 1, cth: 1 },
      { week: 3, day: 1, cth: 2 },
    ],
  },
  {
    id: "921",
    place: "丹青",
    deviceNum: 120,
    description: "丹青机房911",
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
      { week: 4, day: 1, cth: 1 },
      { week: 4, day: 1, cth: 2 },
    ],
  },
  {
    id: "920",
    place: "丹青",
    deviceNum: 120,
    description: "丹青机房920",
    isoccupyed: true,
    occupyedTime: [
      { week: 1, day: 2, cth: 1 },
      { week: 1, day: 2, cth: 2 },
      { week: 3, day: 2, cth: 1 },
      { week: 3, day: 2, cth: 2 },
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
            const t = x.occupyedTime?.find(
              (d) => d.week == a && d.day == b && d.cth == c
            );
            if (t != undefined) {
              x.occupyedTime?.splice(x.occupyedTime.indexOf(t), 1);
            }
            if (x.occupyedTime?.length == 0) {
              x.isoccupyed = false;
            }
          });
        });
      });
    }
  });
  //console.log("function updatelaboccupyinfo");
  return item;
}
export function updatelabinfo(uplab: Lab) {
  labinfolist.forEach((u) => {
    if (u.id == uplab.id) {
      labinfolist.splice(labinfolist.indexOf(u), 1, uplab);
    }
  });
  return uplab;
}
export function deletelabinfo(duid: string) {
  labinfolist.forEach((x) => {
    if (x.id == duid) {
      labinfolist.splice(labinfolist.indexOf(x), 1);
    }
  });
}
export function updatelaboccupyinfo_delete(item: OrderForm) {
  item.week?.forEach((dw) => {
    item.day?.forEach((dd) => {
      item.cth?.forEach((dc) => {
        labinfolist.forEach((cinfo) => {
          if (cinfo.id == item.labid) {
            cinfo.occupyedTime?.forEach((x) => {
              if (x.week == dw && x.day == dd && x.cth == dc) {
                cinfo.occupyedTime?.splice(cinfo.occupyedTime.indexOf(x), 1);
              }
            });
            if (cinfo.occupyedTime?.length == 0) cinfo.isoccupyed = false;
          }
        });
      });
    });
  });
  console.log(getlabinfoListByid("920"));
}
// export function updatelaboccupyinfo_delete(item: OrderForm) {
//   labinfolist.forEach((x) => {
//     if (x.id == item?.labid) {
//       item.week?.forEach((a) => {
//         item.day?.forEach((b) => {
//           item.cth?.forEach((c) => {
//             if (
//               x.occupyedTime?.findIndex((t) => {
//                 t.week == a && t.day == b && t.cth == c;
//               }) != -1
//             ) {
//               const d = x.occupyedTime?.findIndex((t) => {
//                 t.week == a && t.day == b && t.cth == c;
//               });
//               if (d != undefined) {
//                 x.occupyedTime?.splice(d, 1);
//               }
//             }
//           });
//         });
//       });
//     }
//   });
//   console.log(getlabinfoListByid("910"));
//   return item;
// }
