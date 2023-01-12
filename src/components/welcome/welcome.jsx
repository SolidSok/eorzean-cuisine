// import Cactuar from './cactuar';
import './welcome.css';
export default function Welcome() {
  return (
    <div className="welcome">
      <h1 className="title">The Eorzean Diner</h1>
      <div className="content">
        <img
          className="welcome-image"
          src={require('../../assets/crystariumWelcome.jpg')}
          alt="placeholder"
        />{' '}
        <h3 className="welcome-header">
          Welcome to the Eorzean Cafe! Come in and enjoy delicious meals from
          all around the world of Eorzea!
        </h3>
      </div>
      <div>
        {' '}
        <h4 className="welcome-description">
          {' '}
          From the snowy fields of Ishgard, to the shores of Kugane, and even
          regions thought lost to time, we have procured many different kinds of
          recipes to meet all kinds of different tastes.
        </h4>
      </div>
      {/* add design later */}
      {/* <Cactuar /> */}
    </div>
  );
}
