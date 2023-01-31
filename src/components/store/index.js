/** @format */

import { configureStore } from '@reduxjs/toolkit';

import drawerSlice from './drawerSlice';
import logger from './middleware/logger';
import loginSlice from './loginSlice';
import chatSlice from './chatSlice';
import loginMiddleware from './middleware/loginMiddleware';
import signUpMiddleware from './middleware/signUpMiddleware';
import chatMiddleware from './middleware/chatMiddleware';
import newPostMiddleware from './middleware/newPostMiddleware';
import postSlice from './postSlice';
import getPostMiddleware from './middleware/getPostMiddleware';
import exploreSlice from './exploreSlice';
import exploreMiddleware from './middleware/exploreMiddleware';
import taskSlice from './taskSlice';

const store = configureStore({
  reducer: {
    drawer: drawerSlice,
    login: loginSlice,
    post: postSlice,
    chat: chatSlice,
    explore: exploreSlice,
    taskList: taskSlice,
  },
  middleware: [
    logger,
    loginMiddleware,
    signUpMiddleware,
    newPostMiddleware,
    getPostMiddleware,
    exploreMiddleware,
    chatMiddleware,
  ],
});

export default store;
