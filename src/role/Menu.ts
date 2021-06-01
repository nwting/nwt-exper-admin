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
