const GoogleMap = () => (
    <div className="mapouter">
        <div className="gmap_canvas">
            <iframe
                className="gmap_iframe"
                width="100%"
                height="100%"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=-6.917271969752331, 107.67116388876387&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowFullScreen // If you want to allow fullscreen
            ></iframe>
            <a href="https://embed-googlemap.com">embed google maps in website</a>
        </div>
    </div>
);

export default GoogleMap;
