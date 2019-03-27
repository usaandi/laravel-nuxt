import PostService from "./PostService";
import Service from "./Service";

export default class ServiceContainer {
  constructor(api) {
    this.service = new Service(api);
    this.posts = new PostService(api);
  }
}
