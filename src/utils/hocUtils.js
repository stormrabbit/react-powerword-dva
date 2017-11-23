import React, {Component} from 'react';
export const hocUtils = (wrapcomponent) => {
  if(typeof wrapcomponent === 'function') {
    return  window.isHidden ? () => <div/> : wrapcomponent;
  } else {
    return class extends Comment {
      constructor(){
        super();
      }

      render() {
        return <div style={{color: 'red'}}>
          <wrapcomponent {...this.props}/>
        </div>
      }
    }
  }

}

export const anti = (wrapcomponent) => class extends wrapcomponent {
  constructor() {
    super();
  }

  render() {
    console.log('anti');
    return super.render();
  }
}