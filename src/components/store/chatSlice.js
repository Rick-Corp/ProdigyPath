import { createSlice } from '@reduxjs/toolkit';
import { joinRoom, sendMessage } from '../Chat/useMessage';

const initialState = {
  roomName: '',
  roomList: [],
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setRoomName: (state, action) => {
      state.roomName = action.payload;
    },
    setRoomList: (state, action) => {
      state.roomList = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { setRoomName, setRoomList, setMessages } = chatSlice.actions;

export const joinRoomThunk = (data) => dispatch => {
  console.log(data);
  joinRoom(data);
  const { text } = data;
  dispatch(setRoomName(text));

};

export const sendMessageThunk = (data) => (dispatch, getState) => {
  console.log(data);
  const { text, socket } = data;
  const { messages, roomName } = getState().chat;
  const obj = {
    roomName: roomName,
    text: text,
socket: socket
  }
  sendMessage(obj);
  dispatch(setMessages([...messages, text ]));
};


export default chatSlice.reducer;