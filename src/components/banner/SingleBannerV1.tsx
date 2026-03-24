import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id: number;
    bgImage: string;
    subTitle: string;
    title: string;
    title2: string;
    buttonText: string;
    shapeImage: string;
}

const SingleBannerV1 = ({ banner }: { banner: DataType }) => {
    const { bgImage, subTitle, title, title2, buttonText } = banner;

    return (
        <>
            <div className="banner-thumb bg-cover shadow theme" style={{ background: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/img/banner/${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-8 offset-xl-4">
                        <div className="content">
                            <h2>{subTitle}</h2>
                            <h5>{title}</h5>
                            <h5>{title2}</h5>
                            <div className="button mt-40">
                                <Link className="btn btn-theme btn-md radius animation" href="/about-us">{buttonText}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape-bg">
                <Image src="/assets/img/shape/1.png" alt="Shape" width={800} height={630} />
            </div>
        </>
    );
};

export default SingleBannerV1;