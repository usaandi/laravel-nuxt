export const state = () => ({
  list: [],
  pagination: {
    current_page: 0,
    last_page: 0
  },
  isLoading: false
});

export const mutations = {
  ADD_POSTS(state, posts) {
    state.list.push(...posts)
  },
  SET_POSTS(state, posts) {
    state.list = posts
  },
  SET_PAGINATION(state, pagination) {
    state.pagination = pagination;
  },
  TOGGLE_IS_LOADING(state) {
    state.isLoading = !state.isLoading;
  }
};
export const actions = {
  loadNextPosts(context) {
    context.commit('TOGGLE_IS_LOADING');
    this.$axios.$get('posts', {
      params: {
        page: context.state.pagination.current_page + 1
      }
    }).then((response) => {
      context.commit('ADD_POSTS', response.data);
      delete response.data;
      context.commit('SET_PAGINATION', response);
      context.commit('TOGGLE_IS_LOADING');
    });
  },
  loadPostPage(context, page) {
    context.commit('TOGGLE_IS_LOADING');
    this.$axios.$get('posts', {
      params:{
        page: page
      }
    }).then((response)=>{
      context.commit('SET_POSTS', response.data);
      delete response.data;
      context.commit('SET_PAGINATION', response);
      context.commit('TOGGLE_IS_LOADING');
    });
  }
};
export const getters = {};
