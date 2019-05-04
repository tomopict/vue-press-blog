export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  async function beforeEach(to, from, next) {
    console.log("before");
    return next();
  }

  async function afterEach(to, from, next) {
    console.log("after");
    await router.app.$nextTick()
  }

  router.beforeEach(beforeEach)
  router.afterEach(afterEach)
}