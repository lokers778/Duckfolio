import React, {Component} from "react"


class CalcRow extends Component{
    render() {
        return(
            <div className="calcRow">
                <button>{this.props.firstButton}</button>
                <button>{this.props.secondButton}</button>
                <button>{this.props.thirdButton}</button>
                <button>{this.props.fourthButton}</button>
                </div>
        )
    }
}

class CalcKeys extends Component{
    render() {
        return (
            <div className="calcKeys">
                <CalcRow firstButton="7" secondButton="8" thirdButton="9" fourthButton="/"/>
                <CalcRow firstButton="4" secondButton="5" thirdButton="6" fourthButton="x"/>
                <CalcRow firstButton="1" secondButton="2" thirdButton="3" fourthButton="-"/>
                <CalcRow firstButton="0" secondButton="." thirdButton="=" fourthButton="+"/>

            </div>
        );
    }
}

class CalculatorApp extends Component{
    render() {
        return(
            <section className="calcApp">
                <div className="calcDisplay"><div></div><button>CE</button></div>
            <CalcKeys/>
            </section>
        )
    }
}
export default CalculatorApp