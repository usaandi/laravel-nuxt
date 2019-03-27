import ServiceContainer from "../services/ServiceContainer";
export default ({ app }, inject) => {
  inject('api', new ServiceContainer(app.$axios))
}
