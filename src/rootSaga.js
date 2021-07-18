import { all } from 'redux-saga/effects';
import { getHomePageProductSaga } from './redux/saga';

export function* sagas() {
  yield all([getHomePageProductSaga()]);
}
