import "./AboutContent.modules.css";
import aboutUsHeroImg from "../../../assets/about-us-hero.jpg";

export function AboutContent() {
    return (
        <div className="aboutUsHeroContainer">
            <img src={aboutUsHeroImg} />
            <div className="aboutUsContentContainer">
                <div className="aboutUsTextContainer">
                    <p>About Us</p>
                    <p>
                        Welcome to Neth BookPoint, your trusted source for a diverse range of books
                        catering to every reader's taste. Established with the mission to foster a
                        love for reading in our community, we pride ourselves on providing excellent
                        service and a wide selection of books. Our journey began in 2021, and since
                        then, we have grown to become a beloved destination for book lovers. Below,
                        you'll find information about our four branches, their locations, and
                        contact numbers.
                    </p>
                </div>

                <div className="aboutUsOurBranches">
                    <p>Our Branches</p>

                    <div>
                        <div>
                            <p>Kurunegala</p>
                            <p>Main Street, City Center</p>
                            <p>Contact: 123-456-7890</p>
                            <p>
                                Operating Hours: Monday to Saturday, 9 AM - 7 PM; Sunday, 10 AM - 5
                                PM
                            </p>
                            <p>
                                In-store shopping, Special discounts for students, Workshops, Study
                                spaces
                            </p>
                        </div>

                        <div>
                            <p>Kandy</p>
                            <p>Main Street, City Center</p>
                            <p>Contact: 123-456-7890</p>
                            <p>
                                Operating Hours: Monday to Saturday, 9 AM - 7 PM; Sunday, 10 AM - 5
                                PM
                            </p>
                            <p>
                                In-store shopping, Special discounts for students, Workshops, Study
                                spaces
                            </p>
                        </div>

                        <div>
                            <p>Colombo</p>
                            <p>Main Street, City Center</p>
                            <p>Contact: 123-456-7890</p>
                            <p>
                                Operating Hours: Monday to Saturday, 9 AM - 7 PM; Sunday, 10 AM - 5
                                PM
                            </p>
                            <p>
                                In-store shopping, Special discounts for students, Workshops, Study
                                spaces
                            </p>
                        </div>
                    </div>
                </div>

                <div className="aboutUsOurCommitment">
                    <p>Our Commitment</p>
                    <p>
                        At Neth BookPoint, we are committed to providing a welcoming and inspiring
                        environment for all book enthusiasts. Each of our branches is staffed with
                        knowledgeable and friendly team members ready to assist you in finding the
                        perfect book. Whether you're looking for the latest bestseller, a rare find,
                        or a cozy place to read, Neth BookPoint is your destination. We believe in
                        the power of reading to transform lives and build community. Join us at one
                        of our branches or explore our offerings online. We're here to support your
                        reading journey and make your book shopping experience enjoyable and
                        fulfilling.
                    </p>
                </div>
            </div>
        </div>
    );
}
