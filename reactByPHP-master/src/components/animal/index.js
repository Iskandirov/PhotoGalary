import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import * as animalActions from './reducer';
import PropTypes from 'prop-types';
import get from 'lodash.get';
class AnimalWidgetContainer extends Component {
    state = {}

    componentDidMount() {
        this.props.getListData();
    }
    redirectToAddAnimal = (e) => {
        const { history } = this.props;
        e.preventDefault();
        console.log('-----перехід на іншу сторінку------');
        history.push('/animal/add');
    }
    render() {
        console.log('----state-----', this.state);
        console.log('----Props-----', this.props);
        const listContent = this.props.list.map(item => {
            return (
                <div key={item.id} className="col-lg-3 col-md-4 col-6">
                    <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src={item.image} alt="" />
                    </a>
                </div>
            )
        });
        return (
            <div>
                <div className="container">
                    <button className="btn btn-success" onClick={this.redirectToAddAnimal}>Додати тварину</button>
                    <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Thumbnail Gallery</h1>

                    <hr className="mt-2 mb-5" />

                    <div className="row text-center text-lg-left">

                        {listContent}
                    </div>

                </div>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        list: get(state, 'animal.list.data'),
        isListLoading: get(state, 'animal.list.loading'),
        isListError: get(state, 'animal.list.error')
    }
}
const mapDispatch = (dispatch) => {
    return {
        getListData: () => {
            dispatch(animalActions.getListData());
        }
    }
}

   AnimalWidgetContainer.propTypes = 
   {
       history: PropTypes.object.isRequired,
       list: PropTypes.array.isRequired,
       isListLoading: PropTypes.bool.isRequired,
       isListError: PropTypes.bool.isRequired
   };
const AnimalWidget = withRouter(connect(mapState, mapDispatch)(AnimalWidgetContainer));


export default AnimalWidget;