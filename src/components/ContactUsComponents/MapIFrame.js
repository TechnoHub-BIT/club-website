import React from 'react';
import './MapIFrame.css';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    return (
        // basic bootstrap classes. you can change with yours.
        <div className="col-md-12">
            <div className="emdeb-responsive">
                <iframe style={{padding: "absolute",width: "80%" , height: "100%", border: "none" }} src={src}></iframe>
            </div>
        </div>
    );
};

export default Iframe;