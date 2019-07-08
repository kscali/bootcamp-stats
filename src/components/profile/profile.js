import React, { Component } from "react";

export default class Profile extends Component {
  // state = {
  //   userId: null
  // }

  componentWillMount() {
   
    const userId = this.props.match.params.id;
    
    this.props.getUser(userId);
    
  }

  render() {
    let user = this.props.user;
    if (!user) return null;
    
    return (
      <article className="mw7 center bg-blacke br3 pa3 pa4-ns mv3 ba b--black-30">
        <div className="tc">
            <h1 className="f4">Hello</h1>
            <h1 className="f4">{user.handle}</h1>
            
            <hr className="mw3 bb bw1 b--black-10" />
  </div>
           
</article>
    );
  }
}
