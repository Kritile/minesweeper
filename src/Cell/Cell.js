import React from 'react';
class Cell extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visibility:false,
            flag:false,
            bomb_active:false
        }
    }
    render(){
        const cell = this.props.cell
        if(cell==="b"){
            return( <button onClick={()=>this.colClick(cell)} onContextMenu={()=>this.SetFlag()} className={this.state.visible ? "visible "+"col_bomb " +"bomb_active-"+this.state.bomb_active+ " col " +"flag_"+ this.state.flag:"unvisible "+"col_bomb" + " col " +"flag_"+ this.state.flag}></button>);
        }else{
            return( <button onClick={()=>this.colClick(cell)} onContextMenu={()=>this.SetFlag()} className={this.state.visible ? "visible "+"col"+cell + "th" + " col " +"flag_"+ this.state.flag:"unvisible "+"col"+cell + "th" + " col " +"flag_"+ this.state.flag}><p>{cell}</p></button>);
        }
    }
    colClick = (col)=> {
        if(!this.state.flag & document.getElementsByClassName("bomb_active-true ").length === 0){
            if (col === 'b' ){
                alert("GameOver")
                this.setState({
                    bomb_active:true
                })
            }
            if (!this.state.bomb_active){
                this.setState({visible:true})
            }
            
        }
        
    }
    SetFlag = () =>{
        if (!this.state.visible){
            this.setState({
                flag:!this.state.flag
            })
        }
        
    }
}
export default Cell;