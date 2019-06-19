import React from 'react';
import './App.css';
import Field from '../Field/Field'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      heigth:0,
      width:0,
      bombs:0,
      isStart: false
    }
  }
  
  render() {
    const field = this.state.isStart?<Field height={this.state.heigth} width={this.state.width} bombs = {this.state.bombs}/>:<div/>;
    const settings = 
    <section>
      <div>
        <p>Высота поля</p>
        <input onChange={this.ChangeHeight.bind(this)} value={this.state.heigth}/>
      </div>
      <div>
        <p>Ширина поля</p>
        <input onChange={this.ChangeWidth.bind(this)} value = {this.state.width}/>
      </div>
      <div>
        <p>Количество бомб</p>
        <input onChange={this.ChangeBombs.bind(this)} value = {this.state.bombs}/>
      </div>
    </section>
    return(
      <div className="App">
        <header className="App-header">
          <h1>Сапер</h1>
        </header>
        <main>
          {field}
          {this.state.isStart?"":settings}
          <button onClick = {()=>this.submit()}>{this.state.isStart?"Завершить игру":"Начать игру"}</button>
        </main>
      </div>
    );
  }
  ChangeHeight = (event) =>{
    this.setState({
      heigth:event.target.value
    })
  }
  ChangeWidth = (event) =>{
    this.setState({
      width:event.target.value
    })
  }
  ChangeBombs = (event) =>{
    this.setState({
      bombs:event.target.value
    })
  }
  submit = ()=>{
    this.setState({
      isStart:!this.state.isStart
    })
  }
}
export default App;
