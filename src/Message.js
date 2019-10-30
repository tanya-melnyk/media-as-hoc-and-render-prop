import React from 'react';
import mediaHOC from './mediaHOC';

const Message = () => <p>The screen is less than 800 px wide</p>;

export default mediaHOC(Message);
