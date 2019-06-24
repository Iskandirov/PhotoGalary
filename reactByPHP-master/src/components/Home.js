import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Notifications, { notify } from '../components/Notifications';
import Modal from './Modal';
import './Modal.css';

class Home extends Component {
    state = {
        isShowModal: false,
        // credentialMessage: {
        //     isShow: false
        // }
    }
    btnIncrementCounter = (e) => {
        e.preventDefault();
        this.props.dispatch({ type: "INCREMENT" })
        console.log('Hello click');
    }

    btnToggleShowModalClick = () => {
        const { isShowModal } = this.state;
        this.setState({ isShowModal: !isShowModal });
    }

    btnCloseDialog = () => {
        this.btnToggleShowModalClick();
        notify('Close Dialog good', '#ffc107');
        //this.setState({isShowModal: false});
    }
    render() {
        const { isShowModal } = this.state;
        console.log('----Home props----', this.props);
        const { count } = this.props;
        return (
            <div>
                <Notifications />
                <h1>Home Page {count}</h1>
                <button onClick={() => notify('JONE', '#28a745')}>Click me jone</button>
                <button onClick={() => notify('Помилка при роботі', '#dc3545')}>Помилка!!!!!!!!</button>

                <button className="btn btn-success" onClick={this.btnIncrementCounter}>Counter++</button>

                <div>
                    <button className="btn btn-success" onClick={this.btnToggleShowModalClick}>Показати вікно</button>
                </div>
                <div className={classnames('custommodal', { 'open': isShowModal })}>
                    <Modal callBackCloseSemen={this.btnCloseDialog} />
                </div>

            </div>
        );
    }
}

const mapStateProps = (state) => {
    console.log('----redux store connect----', state);
    return {
        count: state.counter.counterStore
    };
}

export default connect(mapStateProps)(Home);