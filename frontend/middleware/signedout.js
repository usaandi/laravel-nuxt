export default function (context) {
  console.log(context);
  if (context.isServer && !context.req) return;
  if (!store.state.auth.token) {
    context.redirect('posts');

  }


}
