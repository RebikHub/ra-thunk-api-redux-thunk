export interface IStatus {
  loading: boolean;
  error: string | null;
};

export interface IPostSave extends IStatus {
  save: 'ok' | null;
};

export interface IGetIdItem extends IStatus {
  item: Item | null;
};

export interface IGetItems extends IStatus {
  items: Array<Item>;
};

export type Item = {
  id : number,
  name: string,
  price: number | string,
  content: string
}

// item
// {
//   "id":1,
//   "name":"Замена стекла",
//   "price":21000,
//   "content":"Стекло оригинал от Apple"
// }

// items
// [
//   {"id":1,"name":"Замена стекла","price":21000},
//   {"id":2,"name":"Замена дисплея","price":25000},
//   {"id":3,"name":"Замена аккумулятора","price":4000},
//   {"id":4,"name":"Замена микрофона","price":2500}
// ]