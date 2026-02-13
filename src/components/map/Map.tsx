
const Map = () => {
    return (
        <>
            <div className="maps-area bg-gray overflow-hidden">
                <div className="google-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d370.932549095779!2d-0.17163328266739727!3d5.700963747753677!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1771019324729!5m2!1sen!2sgh" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
        </>
    );
};

export default Map;