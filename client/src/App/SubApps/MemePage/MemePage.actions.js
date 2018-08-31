import memePageActionNames from './MemePage.actionNames';

export const memePageFetchMemes = () => ({
  type: memePageActionNames.FETCH_MEMES,
});

export const memePageFetchMemesLoading = () => ({
  type: memePageActionNames.FETCH_MEMES_LOADING,
});

export const memePageFetchMemesSuccess = payload => ({
  type: memePageActionNames.FETCH_MEMES_SUCCESS,
  payload,
});

export const memePageFetcgMemeFailure = payload => ({
  type: memePageActionNames.FETCH_MEMES_FAILURE,
  payload,
});

export const memePageFetchMemesClear = () => ({
  type: memePageActionNames.FETCH_MEMES_CLEAR,
});
