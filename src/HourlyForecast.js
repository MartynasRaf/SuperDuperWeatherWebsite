import React from 'react'

class HourlyForecast extends React.Component{

    componentDidMount() {


        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")

        var hsh=[14,10,8,14.5,18,20,23,22,18,17.5]

        DrawGraph(ctx,hsh);

      }


render(){
    return(
        <div className="Hourly">
        
            <div className="Hours">00h 03h 06h 09h 12h 15h 18h 21h 24h</div>
            <div className="DegreesVertical">30C 25C 20C 15C 10C 5C 0C -5C -10C -15C -20C -25C -30C -35C</div>
            <canvas ref="canvas" className="Canvas"></canvas>

        </div>
)
}
}

function DrawGraph(ctx,hourly){

    ctx.beginPath();
    ctx.moveTo(0, 70-(hourly[0])*2);

    for (let i=1;i<=10;i++){
    ctx.lineTo(30*i, 70-(hourly[i])*2);
    }
    ctx.stroke();


}


export default HourlyForecast