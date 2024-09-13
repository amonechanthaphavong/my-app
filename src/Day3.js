import { useState } from "react";
import Swal from "sweetalert2";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name == "" ||
      formData.email == "" ||
      formData.dateOfBirth == "" ||
      formData.gender == "" ||
      formData.message == ""
    ) {
      return Swal.fire({
        title: "ທ່ານປ້ອນຂໍ້ມູນບໍ່ຄົບ",
        text: "ກະລຸນາປ້ອນຂໍ້ມູນຂອງທ່ານໃຫ້ຄົບຖ້ວນ",
        icon: "warning",
        confirmButtonText: "ຕົກລົງ",
      });
    }

    const isSubmit = await Swal.fire({
      title: "ທ່ານຕ້ອງການສົ່ງຂໍ້ມູນແທ້ບໍ?",
      text: "ຂໍ້ມູນຂອງທ່ານໄດ້ສົ່ງໄປທີ່ດ້ານຫຼັງແລ້ວ",
      icon: "question",
      confirmButtonText: "ຕົກລົງ",
      cancelButtonText: "ຍົກເລີກ",
      showCloseButton: true,
      showCancelButton: true,
    });
    if (!isSubmit.isConfirmed) {
      return;
    }

    onSubmit(formData);
    setFormData({
      name: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      message: "",
    });
    Swal.fire({
      title: "ສໍາເລັດແລ້ວ",
      text: "ຂໍ້ມູນຂອງທ່ານໄດ້ສົ່ງສໍາເລັດແລ້ວ",
      icon: "success",
      confirmButtonText: "ຕົກລົງ",
    });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="ຊື່"
      ></input>
      <input
        type="email"
        name="email"
        placeholder="ອີ່ເມວ"
        value={formData.email}
        onChange={handleChange}
      ></input>
      <input
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        placeholder="ວັນ, ເດືອນ, ປີເກີດ"
      ></input>
      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option>ເລືອກເພດ</option>
        <option value="ຊາຍ">ຊາຍ</option>
        <option value="ຍິງ">ຍິງ</option>
        <option value="ອື່ນໆ">ອື່ນໆ</option>
      </select>
      <textarea
        name="message"
        placeholder="ຂໍ້ຄວາມ"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <br></br>
      <button type="submit">ສົ່ງຂໍ້ຄວາມ</button>
      <button type="reset">ຍົກເລີກ</button>
    </form>
  );
};

const Day3 = () => {
  const [submissions, setSubmissins] = useState([]);
  const handleSubmit = (formData) => {
    setSubmissins([...submissions, formData]);
  };
  return (
    <div className="container">
      <h2>ຟອມປະກອບຄໍາເຫັນ</h2>
      <Form onSubmit={handleSubmit}></Form>
      <div className="submissions">
        <h3>ຂໍ້ມູນທີ່ໄດ້ຮັບ</h3>
        {submissions.map((ss, index) => (
          <div className="submission-item">
            <p>
              <strong>ຊື່ :</strong> {ss.name}
            </p>
            <p>
              <strong>ອີ່ເມວ :</strong> {ss.email}
            </p>
            <p>
              <strong>ວັນ, ເດືອນ, ປີເກີດ :</strong> {ss.dateOfBirth}
            </p>
            <p>
              <strong>ເພດ :</strong> {ss.gender}
            </p>
            <p>
              <strong>ຂໍ້ຄວາມ :</strong> {ss.message}
            </p>
          </div>
        ))}
      </div>
      <style jsx>
        {`
                .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                min-height: 100vh;
                background-color: #ffe6e6;
                padding: 20px
                max-width: 600px;
                text-align:  center;
                margin: 0 auto;
                font-family: Saysettha OT;
                }
                .form {
                  display: flex;
                flex-direction: column;
                align-items: center;
                width: 300px;
                padding: 20px;
                background-color: white;
                border-radius: 8px;
                box-shadow: 0 0 10px rbg(0, 0, 0, 0.1);
                margin-bottom: 20px;
                margin: 20px;
                
                }
                .form input, .form select {
                width: 100%;
                margin: 10px 0;
                padding: 10px;
                border-radius: 8px;
                border: 1px solid #ddd;
                font-size: 16px;
                font-family: Saysettha OT;
                }
                .form textarea {
                width: 100%;
                min-height: 1px 0;
                resize: vertical;
                font-size: 16px;
                font-family: Saysettha OT;
                }
                .form button {
                margin: 10px 0;
                padding: 10px;
                background-color: #4CAF50;
                color: white;
                border: none;
                border-radius: 4px;
                font-size: 16px;
                cursor: pointer;
                font-family: Saysettha OT;
                }
                .submissions {
                width: 100%;
                max-width: 500px;
                margin-top: 20px;
                text-align: left;
                }
                .submission-item {
                background-color: white;
                border-radius: 8px;
                padding: 15px;
                margin-bottom: 15px;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
                }

                `}
      </style>
    </div>
  );
};

export default Day3;
