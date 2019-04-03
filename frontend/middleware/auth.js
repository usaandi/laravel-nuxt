export default function (context) {
  console.log(context);
  if (context.isServer && !context.req) return;
  if (!context.isServer) {
    let token = window.localStorage.getItem('token');
    if (token) {
      context.store.dispatch('setToken', token);
      if (context.route.path === 'auth/login') {
        context.redirect('posts');
      } else {
        if (context.route.path !== '/auth/login') {
          context.redirect('/auth/login');
        }
      }
    }
  }

}
