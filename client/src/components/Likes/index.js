import React, {Component} from 'react'; 

class Likes extends Component {
  state = {
    liked = false, 
    count: 1
  };

  updateLikes() {
    this.setState((prevState, props) => {
      return {
        liked: prevState.liked ? false : true, 
        count: prevState.liked ? prevState.count - 1 : prevState.count + 1
      }
    }); 
  }

  render(){
    let classes = className({
      'like-btn': true, 
      'liked': this.state.liked
    });
    return (
      <div className="button-wrap">
        <div className={classes} onClick={() => this.updateLikes()}>Heart</div>
      </div>
    )
  }
}

export default Likes; 

// React Hooks 

// class LikeBtn extends Component {
//   state = {
//     liked: false,
//     count: 1
//   };

//   const [liked, false] = useState(...)

//   this.setState({
//     updatelikes: 
//       this.state.liked
//       ? this.state.count - 1
//       : this.state.count + 1,
//       liked: !this.state.liked
//   })

//   render() {
//     return (
        // <div className="button-wrap">
        //   <div className={classes} onClick={() => this.updateLikes()}>Heart</div>
        // </div>
  //   }
  // }
  
  // export default LikeBtn;
  
 
 