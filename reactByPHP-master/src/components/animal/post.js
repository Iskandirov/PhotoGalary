import React, { Component } from 'react';
import axios from 'axios';

class AnimalCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Hello',
            image: ''
        }
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        console.log('----submit form---');

        const model = {
            name: this.state.name,
            image: this.state.image
        };
        axios.post('https://localhost:44368/api/animal/add', model)
            .then(
                (resp) => {
                    console.log('--success post--', resp.data);
                    this.props.history.push('/animal');
                },
                (err) => {
                    console.log('--err problem---', err);
                }
            );
    }
    onChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.name, e.target.value);

    }
    render() {
        console.log('---AnimalCreate state----', this.state);
        const { name, image } = this.state;
        return (
            <React.Fragment>
                <h1>Додати тварину</h1>
                <form onSubmit={this.onSubmitForm}>
                    <div className="form-group">
                        <label htmlFor="name">Назва тварини:</label>
                        <input type="text" className="form-control" name="name" id="name" onChange={this.onChangeInput} value={name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Фото:</label>
                        <input type="text" className="form-control" name="image" id="image" onChange={this.onChangeInput} value={image} />
                    </div>
                    <button type="submit" className="btn btn-info">Додати</button>
                </form>
            </React.Fragment>
        );
    }
}


export default AnimalCreate;