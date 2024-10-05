import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify'; // تأكد من استيراد toast
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b3iq6t1 test', 'template_f2s6ivf', form.current, 'Abx4PTmuyv9_QMP_F')
      .then((result) => {
          console.log(result.text);
          toast.success("تم إرسال الرسالة بنجاح!", {
            position: "top-right", 
          });
      }, (error) => {
          console.log(error.text);
          toast.error("فشل في إرسال الرسالة.", {
            position: "top-right", 
          });
      });
  };

  return (
    <div className="container my-5">
      <ToastContainer />
      <div className="row">
        <div className="col-md-8">
          <div className="card border-light shadow-sm">
            <div className="card-body">
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="form-group col-md-6 my-2">
                    <label htmlFor="name">Enter Your Name:</label>
                    <input type="text" name="user_name" className="form-control" placeholder="Your Name *" required />
                  </div>

                  <div className="form-group col-md-6 my-2">
                    <label htmlFor="email">Enter Your Email:</label>
                    <input type="email" name="user_email" className="form-control" placeholder="Your Email *" required />
                  </div>
                </div>

                <div className="form-group my-2">
                  <label htmlFor="phone">Enter Your Phone:</label>
                  <input type="text" name="user_phone" className="form-control" placeholder="Your Phone *" required />
                </div>

                <div className="form-group my-2">
                  <textarea name="message" className="form-control" rows="6" placeholder="Your Message *" required></textarea>
                </div>

                <div className="form-group text-right my-2">
                  <button type="submit" className="btn btn-danger">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 border-light shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <i className="fa-solid fa-phone icon-circle"></i>
                <h5 className="font-weight-bold text-danger">اتصل بنا</h5>
              </div>
              <p>نحن متواجدون 24/7، 7 أيام في الأسبوع</p>
              <p><strong className='text-danger'>Phone:</strong> +20</p>
              <hr />
              <div className="d-flex align-items-center mb-3">
                <i className="fa-solid fa-message icon-circle"></i>
                <h5 className="font-weight-bold text-danger">تواصل معنا </h5>
              </div>
              <p>املأ النموذج الخاص بنا وسوف نتصل بك خلال 24 ساعة</p>
              <p><strong className='text-danger'>Email:</strong> customers@exclusive.com</p>
              <p><strong className='text-danger'>Email:</strong> support@exclusive.com</p>
              <p><strong className='text-danger'>WhatsApp:</strong> <a href="https://wa.me/88099112222">Chat with us on WhatsApp</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
