import React from 'react';
import styled from 'styled-components';
import ee from 'event-emitter';

const Container = styled.div`
    background-color: ${props=>props.bcolor};
    color: white;
    padding: 16px;
    position: absolute;
    top: ${props=>props.top}px;
    right: 16px;
    z-index: 999;
    transition: top 0.5s ease;

    >i {
        margin-left: 8px;
    }
`;
const emitter = new ee();
export const notify = (msg, bcolor) => {
    emitter.emit('notification', msg, bcolor);
}
export default class Notifications extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            top: -100,
            msg: '',
            bcolor: ''
        }
        emitter.on('notification', (msg, bcolor) => {
            this.showNotification(msg, bcolor);
        });
    }
    showNotification = (msg, bcolor) => {
        this.setState({ top: 16, msg: msg, bcolor: bcolor }, () => {
            setTimeout(()=> {
                this.setState({ top: -100 });
               }, 3000);
        });
    }
    render() { 
        const {top, msg, bcolor} = this.state;
        return ( 
            <React.Fragment>
                {/* <button onClick={this.showNotification}>Click me</button> */}
                <Container top={top} bcolor={bcolor}>{msg}<i className="fa fa-bell"></i></Container>
            </React.Fragment>
         );
    }
}
