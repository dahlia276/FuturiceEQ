import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color }) => (
    <ReactLoading className="loading" type={"spokes"} color={"#0c788e"} height={100} width={100} />
);
 
export default Loading;