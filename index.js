import {UserService} from './user-service.js';
import {UserCtrl} from './user-controller.js';

const userId = 1234;
const userController = new UserCtrl(new UserService(), document, userId);
userController.initializeForm();
