import React, { PureComponent } from "react";
import Image from '../Skins/c1.png'

class Character extends PureComponent { 
    // constructor(horizontal, vertical) {
    //     super(horizontal, vertical);
    //     this.horizontal = horizontal;
    //     this.vertical = vertical;
    // }

  render() {
    // const {x, y} = data;

    return (
      <div style={{ 
          position: "absolute", 
          width: 32, 
          height: 32, 
          backgroundImage: `url(${Image})`, 
          backgroundPosition: `-${32}px -${0}px`, 
          left: 400, 
          top: 400 }} />
    );
  }
}

export { Character };