import React from 'react';
import {Renderer} from 'amis';

@Renderer({
  type: 'my-renderer',
  name: 'my-renderer'
})
export default class MyRenderer extends React.Component {
  static defaultProps = {
    target: 'world'
  };

  render() {
    const {target} = this.props;

    return <p>Hello {target}!</p>;
  }
}
