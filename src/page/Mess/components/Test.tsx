import React, { useEffect } from "react";
import useWebSocket from "react-use-websocket";
import { Col } from "../../../components/elements";

// In functional React component
const Test = () => {
  const socketUrl = "ws://127.0.0.1:8000/ws/12/";

  const { sendJsonMessage, getWebSocket } = useWebSocket(socketUrl, {
    onOpen: () => console.log("WebSocket connection opened."),
    onClose: () => console.log("WebSocket connection closed."),
    shouldReconnect: (closeEvent) => true,
    onMessage: (event: WebSocketEventMap["message"]) => console.log("event"),
  });

  //   useEffect(() => {
  //     if (getWebSocket() !== null) {
  //       //Change binaryType property of WebSocket

  //       //=> 'arraybuffer'

  //       //Attempt to change event handler
  //       getWebSocket()!.onmessage = console.log;
  //       //=> A warning is logged to console: 'The WebSocket's event handlers should be defined through the options object passed into useWebSocket.'

  //       //Attempt to change an immutable property
  //       getWebSocket()!.url = "www.google.com";
  //       console.log(getWebSocket().url);
  //       //=> 'wss://echo.websocket.org'

  //       //Attempt to call webSocket#send
  //       getWebSocket()!.send("Hello from WebSocket");
  //       //=> No message is sent, and no error thrown (a no-op function was returned), but an error will be logged to console: 'Calling methods directly on the WebSocket is not supported at this moment. You must use the methods returned by useWebSocket.'
  //     }
  //   }, []);
  return <Col></Col>;
};

export default Test;
