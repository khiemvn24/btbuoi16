const app = document.querySelector(".root");

class Footer extends React.Component {
    render() {
        return (
            <div>
                <br></br>
                
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                {/* <h2>Ramdom number</h2> */}
            </div>
        );
    }
}


class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
            </div>
        );
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            seconds : 0
        };
     }
     tick = () => {
        this.setState({
            seconds: this.state.seconds + 1
        })
      }
    //   Bộ nhớ hẹn h, cứ 1s chạy function tick() 1 lần
     componentDidMount(){
         this.timeID = setInterval(() => this.tick(),1000);
     }
    //  ???
    //  componentWillUnmount(){
    //      clearInterval(this.timeID);
    //  }
    render() {
        return (
            <div>
                <h3>This is time: {this.state.seconds}</h3>
            </div>
        );
    }
}

class ToDoList extends React.Component {
    render() { 
        return ( 
            <ul>
                {
                    // SD map() de Lay tung item trong items, hien thi text cua tung item voi key la Id
                    this.props.items.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))
                }
            </ul>
         );
    }
}

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text:''
        };
        // Khoi tao function handleChange( == Function nhap du lieu)
        this.handleChange = this.handleChange.bind(this);
        // Khoi tao function handleSubmit( == Function onclick)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
         this.setState({
             text : e.target.value
         })
    }
    handleSubmit = (e) =>{
        // return false. Ko cho form reload lai. ko cho trang web reload
         e.preventDefault();
         if(this.state.text.length === 0){
             return;
         }
         const newItem = {
             text :this.state.text,
             id : Date.now()
         }
         this.setState({
            //  Them newItem vao items
             items : this.state.items.concat(newItem),
             text :''
         })
    }
    render() {
        return (
            <div>
                <h1>ToDoApp</h1>
                {/* Hien thi du lieu item */}
                <ToDoList items={this.state.items}/>
                <form onSubmit={this.handleSubmit}> 
                {/* Goi function onSubmit */}
                    <lable>Nhap du lieu</lable><br/>
                    {/* input voi gia tri la Text cua item */}
                    <input onChange ={this.handleChange} value={this.state.text}></input>
                    <br/>
                    <button>
                        Add {this.state.items.length + 1}
                        {/* Add + do dai items */}
                    </button>
                </form>
            </div>
        );
    }
}

class MyApp extends React.Component {
    constructor(props) {
        super(props);
            this.state = { 
                count:0,
                min:1,
                max:100
            }
    }
    clickButton = () =>{
        this.setState({
            count: this.state.count +  this.state.min + (Math.random() * (this.state.max-this.state.min))
        })
    }
    render() {
        return (
            <div>
                <Header/>
                {/* <div>
                    <button onClick={this.clickButton}>Click me now</button>
                    <p>{this.state.count}</p>
                </div> */}
                <div>
                    <HelloMessage name="Khiem Vu"></HelloMessage>
                </div>
                <Clock/>
                <ToDoApp/>
                <Footer/>
            </div>
            
        );
    }
}
ReactDOM.render(<MyApp/>, app);
