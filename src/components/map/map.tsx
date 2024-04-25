import React from "react";

const Map = () => {
    return (
        <div className="map-banner mt-120 lg-mt-80">
            <div className="gmap_canvas h-100 w-100">
                <iframe
                    className="gmap_iframe h-100 w-100"
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=EWBS Excellence Business Services Dubai UAE&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
            </div>
        </div>
    );
}

export default Map;