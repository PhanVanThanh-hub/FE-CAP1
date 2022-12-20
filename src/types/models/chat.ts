import { ProfileApiItem } from "./auth";

export interface BoxChatApiItem {
  id: string;
  timestamp: String;
  box_chat_id: string;
}

export interface MessageApiItem {
  id: number;
  content: string;
  create_at: string;
  user: number;
  box_chat: BoxChatApiItem;
  status: boolean;
}

export interface UserBoxChatApiItem {
  id: string;
  online: boolean;
  box_chat: BoxChatApiItem;
}

export interface BoxChatApiItem {
  key: number;
  user_box_chat: ProfileApiItem;
  last_mess: MessageApiItem;
  unread_messages: number;
  box_chat: UserBoxChatApiItem;
}

export interface ListBoxChatApiItem {
  data: BoxChatApiItem[];
}
