export const state = () => ({
  shows: null
});

export const mutations = {
  SET_SHOWS: (state, shows) => {
    state.shows = shows;
  }
};

export const actions = {

  loadShows({dispatch, commit}, shows) {
    commit('SET_SHOWS', shows)
  }
};
