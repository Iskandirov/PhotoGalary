import React, { Component } from 'react';
import { connect } from "react-redux";
import * as productActions from './reducer_food';
import get from 'lodash.get';
class ProductWidgetContainer extends Component {
    state = {}

    componentDidMount() {
        this.props.getListData();
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

                    <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Product Gallery</h1>

                    <hr className="mt-2 mb-5" />

                    <div className="row text-center text-lg-left">

                        {listContent}
                    </div>
                    <div className="row text-center text-lg-left">

                        <button type="button" className="btn btn-success">Buy</button>
                    </div>
                   
                </div>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        list: get(state, 'product.list.data'),
        isListLoading: get(state, 'product.list.loading'),
        isListError: get(state, 'product.list.error')
    }
}
const mapDispatch = (dispatch) => {
    return {
        getListData: () => {
            dispatch(productActions.getListData());
        }
    }
}

const ProductWidget = connect(mapState, mapDispatch)(ProductWidgetContainer);


export default ProductWidget;