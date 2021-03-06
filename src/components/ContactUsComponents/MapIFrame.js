import React from 'react';
import './MapIFrame.css';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    return (
        // basic bootstrap classes. you can change with yours.
        <div>
            <div className="emdeb-responsive">
                <iframe style={{padding: "absolute",width: "100%" , height: "350px", border: "none" }} src={src} title="TechnoHub Location"></iframe>
            </div>
        </div>
    );
};

export default Iframe;