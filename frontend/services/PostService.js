import Service from "./Service";

export default class PostService extends Service {
  constructor(api) {
    super(api);
    this.prefix = 'posts'
  }

}
