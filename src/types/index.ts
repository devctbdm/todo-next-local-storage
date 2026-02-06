export interface TodoProps {
  _id: string;
  title: string;
  todo: string;
}

export interface TodoItemsProps {
  item: {
    todo: string;
    _id: string;
    title: string;
  };
}
