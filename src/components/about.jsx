import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/SigmaIcon.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>เกี่ยวกับเรา</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <p>
                การดำเนินงานของห้างหุ้นส่วนฯ ที่ผ่านมาได้มีการนำวิทยาการสมัยใหม่เข้ามาช่วยในงานเพื่อพัฒนาคุณภาพของงานให้ดียิ่งขึ้น เช่น
                นำเครื่องคอมพิวเตอร์และโปรแกรมประยุกต์เข้ามาช่วยในงานคำนวณออกแบบทาง
                วิศวกรรมและงานทดสอบระบบ เป็นต้น
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
