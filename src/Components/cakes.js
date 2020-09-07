import React from 'react';
import {connect} from 'react-redux';
import {buyCake, addCake} from '../Redux';

function Cakes(props) {
    return (
        <div>
            <h1> Number of Cake - {props.showNumofCake} </h1>
            <button onClick={props.clickBuyCake} > Buy Cake </button>
            <button onClick={props.clickAddCake}> Add Cake </button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        showNumofCake : state.cake.numOfCake
    }
}

const dispatchStateToProps = dispatch => {
    return {
        clickBuyCake : () => dispatch(buyCake()),
        clickAddCake : () => dispatch(addCake())
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(Cakes);