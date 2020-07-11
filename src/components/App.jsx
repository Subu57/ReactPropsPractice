import React from "react";
import Cards from "./Cards";
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Cards name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" num= "+123 456 789" mail="b@beyonce.com" />
      <Cards name="Jack Bauer"img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" num= "+123 456 789" mail="jack@gahs.com" />
      <Cards name="Chuck Norris" img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" num= "+123 456 789" mail="chuck@adas.com" />
     
    </div>
  );

}

export default App;
