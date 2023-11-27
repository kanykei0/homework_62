export interface FilmConf {
  id: string;
  filmName: string;
}

export interface CellProps {
  hasItem: boolean;
  clicked: boolean;
  onClickCell?: React.MouseEventHandler;
}
export interface MessageConf {
  author: string;
  message: string;
  datetime: string;
}

export interface MessageMutation {
  author: string;
  message: string;
}
