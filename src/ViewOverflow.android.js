// @flow
import * as React from 'react';
import { View } from 'react-native'
import _ from 'lodash'

import NativeVieWithoutOverflow from './ViewOverflow-native';

class ViewWithoutOverflow extends React.PureComponent {
  render() {
    if(_.get(this.props, 'style.overflow', 'hidden') == 'visible')
      return <NativeVieWithoutOverflow {...this.props} />;
    return <View {...this.props} />
  }
}

export default ViewWithoutOverflow;
