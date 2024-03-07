import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit'
import {addUser, addUserSuccess}  from '../store/user/User.slice'
import IUser from '../component/user/UserType';


function callApi(payload: IUser): any{
   return {id:payload.id, name:payload.name+" SAGA", state:payload.state +" SAGA"};
}
export const delay = (ms:any) => new Promise(res => setTimeout(res, ms))


// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchUser({payload}: PayloadAction<IUser>) {
   try {      
     // const user = yield call(callApi, payload);
      
      yield call(delay, 1000)
      const sagaUser: IUser =  {id:payload.id, name:payload.name+" SAGA", state:payload.state +" SAGA"};
      yield put(addUserSuccess(sagaUser));
   } catch (e) {
      //yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export default function* mySaga() {
  yield takeEvery(addUser, fetchUser);
}