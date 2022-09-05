import React, { Component } from 'react';

class Home extends React.Component {

    constructor() {

        super();
        this.state = {
            name: "cdmi",
            email: "cdmi@gmail.com"
        }
    }



    componentDidMount() {
        // console.log("hello");
    }

    componentDidUpdate() {
        // console.log("Welcome");
    }

    render() {

        const btnclick = () => {
            this.setState({

                name: "creative",
                email: "cdmi12@gm.com"

            })
        }




        return (

            <>

                <h1><center>Class Component</center></h1>

                <h2>Name === {this.state.name}</h2>
                <h2>Email === {this.state.email}</h2>
                <h2>Name === {this.props.name}</h2>


                <input type="button" value="Click Here" onClick={btnclick} />

            </>
        )
    }


}



export default Home;