import React, {Component} from 'react'

interface CounterProps {
    startNumber : number;
}

interface CounterState {
    number: number;
}

export default class TypeClassComp 
    extends Component<CounterProps,CounterState > {
    constructor(props:CounterProps){
        super(props);
        this.state = {
            number : props.startNumber
        }
    }

    handleNum = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({number : parseInt(e.target.value)})
    }
    
    render(){
        return (
            <div>
                <h3>Counter 컴포넌트</h3>
                <p>props 값으로 전달된 처음 값 : {this.props.startNumber}</p>
                <p>props 값을 받아와 값을 수정하는 state 값 : {this.state.number}</p>
                <label htmlFor="">수정할 숫자</label>
                <input type="number" 
                    onChange={this.handleNum}/>
            </div>
        )
    }
}