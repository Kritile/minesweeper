import React from 'react';
// import FieldMap from '../FieldMap/FieldMap'
import Cell from '../Cell/Cell'
class Row extends React.Component {
  render() {
    const coll = this.props.rows.map((col)=>
      <Cell cell = {col}/>
    );
    return(
      <div className="Row">{coll}</div>
    );
    
  }
}

export default Row;