import * as types from '../constants';

// Write your actions here.
export function screenResize(width) {
  return {
    type: types.SCREEN_RESIZE,
    width,
  };
}
