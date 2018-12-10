import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Grid extends React.Component{
    render(){
        const width = this.props.cols * 14;
        var rowsArr = []
        var boxClass="";
        // can use the map method
        for (var i = 0; i < this.props.rows;i++) {
            for (var j = 0; j < this.props.rows;j++){

            }
        }
        return (
            <div className="grid" style={{width: width}}>
                {{rowsArr}}
            </div>
        )
    }
}
class Main extends React.Component{
    speed = 100;
    rows = 30;
    cols = 50;
    state = {
        generation:0,
        gridFull:Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
    }
   

    render(){
        return(
            <div>
                <h1>The Game of Life</h1>
                <Grid
                gridFull={this.state.gridFull}
                rows={this.rows}
                cols={this.cols}>
                </Grid>
                <h2>Generations: {this.state.generation}</h2>
            </div>

        )
    }
}
ReactDOM.render(<Main />, document.getElementById('root'));

