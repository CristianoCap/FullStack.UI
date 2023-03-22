export interface ToDo {
  name: string;
  description: string;
  date: Date;
  done: boolean;
  importance: Importance;
}

export const enum Importance {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High'
}

export const toDoListStatic : ToDo[] = [
  {name: '111', description: 'Lorem ipsum dolor sit amet', date: new Date(2023, 3, 21), done: false, importance: Importance.Medium},
  {name: '222', description: 'Lorem ipsum dolor sit amet', date: new Date(2023, 6, 21), done: true,importance: Importance.High},
  {name: '333', description: 'Lorem ipsum dolor sit amet', date: new Date(2023, 4, 1), done: false, importance: Importance.Medium},
  {name: '444', description: 'Lorem ipsum dolor sit amet', date: new Date(2023, 4, 23), done: true, importance: Importance.Low},
  {name: '555', description: 'Lorem ipsum dolor sit amet', date:new Date(2023, 3, 15), done: false, importance: Importance.Low}
];
