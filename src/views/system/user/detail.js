import React from 'react';

class UserDetail extends React.Component {

  constructor(props) {
    super(props)
    let match = this.props.match.params;
    this.id = match.id;
  }

  render() {
    return (
      <div>
        {this.id}
      </div>
    )
  }
}

export default UserDetail
