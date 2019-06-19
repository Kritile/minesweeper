import React from 'react';
import Row from '../Row/Row';
import Generator from '../Generator/Generator'
class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maps: Generator(this.props.height,this.props.width,this.props.bombs)
        } 
    }
    
    render() {
        const abc = this.state.maps.map((row)=>
            <Row rows = {row}/>
        );
        return(
            <div onContextMenu={(e)=>e.preventDefault()} className="Field">
                {abc}
            </div>

      );
    }
    

}
  export default Field;