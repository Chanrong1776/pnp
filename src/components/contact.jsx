import { useEffect,useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import Swal from "sweetalert2";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    console.log(e);

    emailjs
      .sendForm(
        "service_lh3t2zy",
        "template_jxfyeqp",
        e.target,
        "5ipRsI19stk5B1D51"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "ส่งข้อความสำเร็จ",
            text: "เราจะติดต่อกลับไปภายในระยะเวลาทำการของบริษัท",
            timer: 1500,
            timerProgressBar: true,
            showConfirmButton: false,
            customClass: {
              confirmButton: "swal2-confirm",
            },
          }).then(() => {
            clearState();
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "ส่งข้อความล้มเหลว",
            text: "เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง",
            timer: 1500,
            timerProgressBar: true,
            showConfirmButton: false,
            customClass: {
              confirmButton: "swal2-confirm",
            },
          }).then(() => {
            clearState();
          });
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>ส่งข้อความถึงเรา</h2>
                <p>
                  กรอกข้อมูลด้านล่างหากมีความประสงค์ในการติดต่องาน เสนอแนะ หรือ
                  สอบถามข้อมูลเกี่ยวกับบริษัทของเรา เมื่อได้รับการติดต่อแล้ว
                  เราจะติดต่อกลับไปภายในระยะเวลาทำการของบริษัท
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="ชื่อ"
                        required
                        value={name}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="ข้อความ"
                    required
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  ส่งข้อความ
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>ติดต่อได้ที่</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> ที่อยู่สำนักงาน
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <span>
                <i className="fa fa-phone"></i> โทรศัพท์
                {props.data
                  ? props.data.phone.map((number, index) => (
                      <p key={index}>{number}</p>
                    ))
                  : "loading"}
              </span>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> อีเมล
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
