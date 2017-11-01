class RouteBuilder {

  constructor(path) {
    this.routeObj = {path}
  }
  
  static create = (path) => {
    const builder = new RouteBuilder(path);
    return builder;
  }

  addContainerPath = (containerPath) => {
    this.routeObj['containerPath'] = containerPath;
    return this;
  }

  addContainerName = (containerName) => {
    this.routeObj['containerName'] = containerName;
    return this;
  }
  
  build2 = () => {
    let routeObj = this.routeObj;
    this.routeObj = null;
    return routeObj;
  }
  build() {
    let routeObj = this.routeObj;
    this.routeObj = null;
    const {
      path,
      containerPath,
      containerName
    } = routeObj;
    return {
      path,
      getComponent(nextState, callback) {
        require.ensure([], require => {
          // registerModel(app, require('../models/example'))
          callback(null, require(containerPath))
        }, containerName)
      }
    };
  }
  // {
  //   path: '/test',
  //   getComponent(nextState, cb) {
  //     require.ensure([], require => {
  //       registerModel(app, require('../models/example'))
  //       cb(null, require('../containers/About/About'))
  //     }, 'About')
  //   }
  // },
  
}

export default RouteBuilder;