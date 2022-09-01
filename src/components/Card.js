import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) =>{
    //props 대신 {title , children}로 바로 데이터 접근 가능
    return (
        <div className="card mb-3 cursor-pointer" onClick={props.onClick}>
            <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <div>{props.title}</div>

                    {/* props.children 이 있을경우 */}
                    {props.children && <div>{props.children}</div>}
                </div>
            </div>
        </div>
    )
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
    onClick: PropTypes.func,
};

// props 의 데이터가 없을경우
Card.defaultProps = {
    children:null,
    onClick: () => {}
}

export default Card;