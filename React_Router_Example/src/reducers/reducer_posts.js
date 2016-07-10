import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = { all_posts:[], post: null };

export default function (state=INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all_posts: action.payload.data };
    default:
      return state;
  }
}