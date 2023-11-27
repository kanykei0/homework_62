import React from "react";
import Message from "./Message";
import { MessageConf } from "../../../type";

interface Props {
  messages: MessageConf[];
}

const Messages: React.FC<Props> = ({ messages }) => {
  const getFormattedDate = (datetime: string) => {
    const date = new Date(datetime);

    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}`;
  };

  return (
    <>
      <div className="d-flex flex-column">
        {messages.map((mess, index) => (
          <Message
            key={index}
            author={mess.author}
            datetime={getFormattedDate(mess.datetime)}
            message={mess.message}
          />
        ))}
      </div>
    </>
  );
};

export default Messages;
