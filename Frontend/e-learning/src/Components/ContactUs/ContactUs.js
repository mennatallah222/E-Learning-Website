import '../assets/css/linearicons.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/bootstrap.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/nice-select.css';
import '../assets/css/hexagons.min.css';
import '../assets/css/main.css';
import '../assets/css/contactUs.css';

const ContactUs = () => {

    return (
        <section class="registration-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 part">
                        <div class="section-title text-left text-white">
                            <h2 class="text-white">
                                Contact Us <br />
                                To Stay In Touch
                            </h2>
                            <p>
                                If you are looking at blank cassettes on the web, you may be
                                very confused at the difference in price. You may see some for
                                as low as $.17 each.
                            </p>
                        </div>
                    </div>
                    <div class="offset-lg-3 col-lg-4 col-md-6">
                        <div class="course-form-section">
                            <h3 class="text-white">Contact Us</h3>
                            <p class="text-white">It is high time for learning</p>
                            <form class="course-form-area contact-page-form course-form text-right" id="myForm" action="mail.html"
                                method="post">
                                <div class="form-group col-md-12">
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Name"
                                        onfocus="this.placeholder = ''" onBlur="this.placeholder = 'Name'" />
                                </div>
                                
                                <div class="form-group col-md-12">
                                    <input type="email" class="form-control" id="email" name="email" placeholder="Email Address"
                                        onfocus="this.placeholder = ''" onBlur="this.placeholder = 'Email Address'" />
                                </div>
                                <div class="col-lg-12 text-center">
                                    <button class="btn text-uppercase">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
