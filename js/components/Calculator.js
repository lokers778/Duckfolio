import React, {Component} from "react"


class CalcDisplay extends Component {
    render() {
        let {result} = this.props
        return (
            <div className=".calcDisplay">
                <div>{result}</div>
            </div>
        )
    }
}

class CalcRow extends Component {

    render() {
        return (
            <div className="calcRow">
                <button name={this.props.firstButton}
                        onClick={e => this.props.onClick(e.target.name)}>{this.props.firstButton}</button>
                <button name={this.props.secondButton}
                        onClick={e => this.props.onClick(e.target.name)}>{this.props.secondButton}</button>
                <button name={this.props.firstButton}
                        onClick={e => this.props.onClick(e.target.name)}>{this.props.thirdButton}</button>
                <button name={this.props.firstButton}
                        onClick={e => this.props.onClick(e.target.name)}>{this.props.fourthButton}</button>
            </div>
        )
    }
}


class CalcKeys extends Component {



    render() {
        return (
            <div className="calcKeys">
                <CalcRow firstButton="CE" secondButton="(" thirdButton=")" fourthButton="C"  onClick={this.onClick}/>
                <CalcRow firstButton="7" secondButton="8" thirdButton="9" fourthButton="/"  onClick={this.onClick}/>
                <CalcRow firstButton="4" secondButton="5" thirdButton="6" fourthButton="x"  onClick={this.onClick}/>
                <CalcRow firstButton="1" secondButton="2" thirdButton="3" fourthButton="-"  onClick={this.onClick}/>
                <CalcRow firstButton="0" secondButton="." thirdButton="=" fourthButton="+"  onClick={this.onClick}/>

            </div>
        );
    }
}



class CalculatorApp extends Component {
    state = {
        result: ""

    };
    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };
    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };
    render() {
        return (
            <section className="calcApp">
                <CalcDisplay result={this.state.result}/>
                <CalcKeys onClick={this.onClick}/>
            </section>
        )
    }
}

export default CalculatorApp