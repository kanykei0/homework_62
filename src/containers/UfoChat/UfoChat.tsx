import { useEffect, useRef, useState } from "react";
import { MessageConf } from "../../type";
import Preloader from "../../components/ChatComponent/Preloader/Preloader";
import Messages from "../../components/ChatComponent/Messages/Messages";
import MessageForm from "../../components/ChatComponent/MessageForm/MessageForm";
import "./UfoChat.css";

const URL = "http://146.185.154.90:8000/messages";

const UfoChat = () => {
  const [messages, setMessages] = useState<MessageConf[]>([]);
  const [preloader, setPreloader] = useState(false);
  const [loadComplete, setLoadComplete] = useState(false);

  const toBotom = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (toBotom.current) {
      toBotom.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    if (response.ok) {
      const messages: MessageConf[] = await response.json();
      const newMessages = messages.map((message) => ({
        ...message,
      }));
      return newMessages;
    }
    return [];
  };

  useEffect(() => {
    if (!loadComplete) {
      setPreloader(true);
    }
  }, [loadComplete]);

  const getLastMessages = async () => {
    try {
      const data = await fetchData(URL);
      setMessages(data);
      setLoadComplete(true);
    } finally {
      setPreloader(false);
    }
  };

  useEffect(() => {
    void getLastMessages();
  }, []);

  useEffect(() => {
    let lastMessageDate = "";

    const interval: number = setInterval(async () => {
      const result = await fetchData(`${URL}?datetime=${lastMessageDate}`);
      if (result.length > 0) {
        lastMessageDate = result[result.length - 1].datetime;
        getLastMessages();
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inner-container">
      <Preloader show={preloader} />
      <Messages messages={messages} />
      <div ref={toBotom}>
        <MessageForm />
      </div>
    </div>
  );
};

export default UfoChat;
