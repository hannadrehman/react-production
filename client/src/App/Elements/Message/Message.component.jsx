import { message } from 'antd';

const AppMessage = (type, messageText) => (
  message[type](messageText)
);
export default AppMessage;
