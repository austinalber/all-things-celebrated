import React, { Component } from "react";
// import Input from "./components/Input";
// import Button from "./components/Button";
import API from "../../utils/API";
import { FriendList, FriendListItem } from "../../components/FriendList";
import "./UserPageStyle.css";


class UserPage extends Component {
  // state is where we initialize the start of our event 
  state = {
    friends: [],
    cards: [],
    search: "",
    results: []
  };

  // When this component mounts, search for our friend array database with findAll()
  componentDidMount() {
    API.getUsers("")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
    
    API.getAllCards()
    .then(res => this.setState({ cards: res.data }))
    .catch(err => console.log(err));
  }

  // This is where the page display the components 
  render() {
    return (
      <div className="user-page-container">
        <div className="friends-container">
          {!this.state.friends.length ? (
            <h1 className="text-center">No friends to Display</h1>
          ) : (
            <div className="user-friends">
              <h1 className="text-center">My Friends:</h1>
              <FriendList>
                {this.state.friends.map(card => {
                  return (
                    <FriendListItem
                      key={card._id}
                      id={card._id}
                      name={card.firstName}
                      email={card.email}
                      userImage={card.userImage}
                      />
                  );
                })}
              </FriendList>
            </div>
          )}
        </div>
        <div className="user-cards-container">
          {/* Post all user cards here */}
        </div>
      </div>
   );
  }
}
//   render() {
//     return (
//       <div>
//         <Container>
//           <Row>
//             <Col size="md-12">
//               <form>
//                 <Container>
//                   <Row>
//                     <Col size="xs-9 sm-10">
//                       <h1>Hello!</h1>
//                     </Col>
//                     <Col size="xs-3 sm-2">
//                     </Col>
//                   </Row>
//                 </Container>
//               </form>
//             </Col>
//           </Row>
//           <Row>
//             <Col size="xs-12">
//               {!this.state.friends.length ? (
//                 <h1 className="text-center">No friends to Display</h1>
//               ) : (
//                 <FriendList>
//                   {this.state.friends.map(card => {
//                     return (
//                       <FriendListItem
//                         key={card._id}
//                         id={card._id}
//                         name={card.firstName}
//                         email={card.email}
//                         image={card.userImage}
//                         />
//                     );
//                   })}
//                 </FriendList>
//               )}
//             </Col>
//           </Row>
//         </Container>
//       </div>
//    );
//   }
// }

export default UserPage;

