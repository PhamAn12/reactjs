
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Click me !",
            clickCount: 0
        }
        this.updateCount = this.updateCount.bind(this);
    }

    updateCount() {
        this.setState({
            clickCount : this.state.clickCount + 1
        });
    } 
    render() {
        return (
            <button onClick = {this.updateCount}> 
                {this.state.text} : {this.state.clickCount}
            </button>
        );
    }
}
ReactDOM.render(
    <Button/>,document.getElementById('button1')
)

class Greeting extends React.Component {
    render() {
        return (
            <div className="greeting">
                <h3>Hello {this.props.name}</h3>
                <i>{this.props.message}</i>
            </div>
        );
    }
}

Greeting.defaultProps = {
    name : 'There',
    message : 'Welcome to this website'
}
ReactDOM.render(
    <Greeting name ="Banh" message='welcomeback'/>,document.getElementById('hello')
    
)
ReactDOM.render(
    <Greeting/>,document.getElementById('defautHello')
)
class Person extends React.Component {
    render() {
        return(
            <div className = "person-info">
                <h3>Person {this.props.personNo}:</h3>
                <ul>
                    <li>First Name: {this.props.firstName}</li>
                    <li>Last Name: {this.props.lastName}</li>
                    <li>Nation : {this.props.nation}</li>
                </ul>
            </div>

        );
    }
}

const element1 = document.getElementById('person1');
const element2 = document.getElementById('person2');

ReactDOM.render(
    <Person personNo='1' firstName='Bill' lastName='Gates' nation='America' />, element1
)


ReactDOM.render(
    <Person personNo='2' firstName='Donald' lastName='Trump' nation='America'/>, element2
)
class Com extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            total : 1
        }
        this.onClick = this.onClick.bind(this);
    }
    onClick () {
        this.setState({
            total : this.state.total + 1
        });
    }
    render() {
        return (
            <div>
                <h1 className='mauvang'>{this.state.total}</h1>
                <button onClick = {this.onClick}>Happy lunar new year {this.state.total}</button>
            </div>
        );
    }
};
ReactDOM.render(
  <Com />,
document.getElementById('root')
);