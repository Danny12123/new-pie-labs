import Image from "next/image";
import AboutFactV1Data from "@/assets/jsonData/fact/AboutFactV1Data.json"
import AboutFactV1 from "../fact/AboutFactV1";
import FaqV2Data from "@/assets/jsonData/faq/FaqV2Data.json"
import SingleFaqV2 from "../faq/SingleFaqV2";
import SplitText from "../animation/SplitText";

const AboutV1 = () => {
    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="shape-animated-left">
                    <Image src="/assets/img/shape/3.png" alt="Image Not Found" width={58} height={122} />
                    <Image src="/assets/img/shape/4.png" alt="Image Not Found" width={83} height={94} />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="about-style-one col-xl-5 col-lg-6">
                            <div className="about-thumb">
                                <Image data-aos="fade-right" src="/assets/img/about/5.jpg" alt="Image Not Found" width={783} height={900} />
                                <div className="about-card" data-aos="fade-up" data-aos-delay="500">
                                    <ul>
                                        {AboutFactV1Data.map(fact =>
                                            <AboutFactV1 fact={fact} key={fact.id} />
                                        )}
                                    </ul>
                                </div>
                                <div className="thumb-shape-bottom" data-aos="fade-down" data-aos-delay="300">
                                    <Image src="/assets/img/illustration/4.png" alt="Image Not Found" width={285} height={290} />
                                </div>
                            </div>
                        </div>
                        <div className="about-style-one col-xl-6 col-lg-5  offset-xl-1 offset-lg-1">
                            <h4 className="sub-title">About Our Company</h4>
                            <h2 className="title split-text mb-25">
                                <SplitText
                                    delay={10}
                                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                    easing="easeOutCubic"
                                    threshold={0.2}
                                    rootMargin="-50px"
                                >
                                    Partnering to Build What Matters
                                </SplitText>
                            </h2>
                            <div data-aos="fade-up" data-aos-delay="200">
                                <p>
                                    Pielabs is an engineering-first company focused on building real, production-grade systems. We work with
                                    ambitious teams to modernize their technology stack, implement practical AI solutions, and develop
                                    hardware products that scale.
                                    Our approach is simple: no hype, no unnecessary complexity—just robust systems designed to perform in
                                    the real world.
                                </p>
                                <div className="accordion mt-30" id="faqAccordion">
                                    {FaqV2Data.map(faq =>
                                        <SingleFaqV2 faq={faq} key={faq.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;