import React from 'react';

const message = () => {
    return (
        <div className="notification success --value:20s">
            <div className="timer"></div>
            <div className="inner-wrapper">
                <div className="notification-header">success</div>
                <div className="notification-body">
                    Hello world
                </div>
            </div>
        </div>
    )
}
export default message;