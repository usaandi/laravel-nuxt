export const state = () => ({
  list: [],
  pagination: {
    current_page: 0,
    last_page: 0
  },
  isLoading: false,
  modal: {
    edit: {
      active: false,
      title: 'Edit',
      closeAction: 'toggleModal',
      saveAction: 'savePost',
      name: 'edit',
      id: 0,
      data: {
        title: '',
        content: '',
      }
    }
  }
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
  },
  TOGGLE_MODAL(state, key) {
    state.modal[key].active = !state.modal[key].active
  },
  SET_MODAL_DATA(state, data) {

  },
  UPDATE_MODAL(state, data) {
    state.modal[data.modal] = [...state.modal]
  }

};
export const actions = {
  loadNextPosts(context) {
    context.commit('TOGGLE_IS_LOADING');
    this.$api.posts.page(context.state.pagination.current_page + 1)
      .then((response) => {
        context.commit('ADD_POSTS', response.data);
        delete response.data;
        context.commit('SET_PAGINATION', response);
        context.commit('TOGGLE_IS_LOADING');
      });
  },
  loadPostPage(context, page) {
    context.commit('TOGGLE_IS_LOADING');
    this.$api.posts.page(page)
      .then((response) => {
        context.commit('SET_POSTS', response.data);
        delete response.data;
        context.commit('SET_PAGINATION', response);
        context.commit('TOGGLE_IS_LOADING');
      });
  },
  toggleModal(context, key) {
    context.commit('TOGGLE_MODAL', key);
  },
  setFormData(context, data) {
    context.commit('SET_FORM_DATA', data);
  },
  setModalData(context, data) {
    context.commit('UPDATE_MODAL', {
      modal: data.modal,
      id: data.id,
      title: 'Edit Post',
      data: context.state.list(data.id)
    })
  },
  savePost(context) {
    this.$api.posts.patch('', context.state.modal.edit.data).then(response => {
      console.log(response);
    })
  }
};
export const getters = {};
