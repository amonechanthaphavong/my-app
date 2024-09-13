import axios from "axios";
import { useEffect, useState } from "react";
const API_URL = "https://sample-api-fwbm.onrender.com/api/v1";

const Day9 = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        console.log(`Fetch post`);
        fetchMyUser();
      }, [])

    const fetchMyUser = async() => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`${API_URL}/users/me`, { 
            headers: {Authorization: `Bearer ${token}`}      
          })
          setUser(response.data.data.data)
        } catch (error) {
        localStorage.removeItem('token')
      }
    }
  return (

    <div className="container">
      <h2> My profile</h2>

      <div className="box1">
        <img className = "profile-image" src="/amone.png" width="100" height="100" alt="My picture"></img>
        <h2>ຊື່ ແລະ ນາມສະກຸນ: {user?.first_name} {user?.surname}</h2>
        <ul>
        <li><p><b>Email:</b> {user?.email}</p></li>
        <li><p><b>ເບີໂທ:</b> {user?.phone_number}</p></li>
        <li><p><b>ສິດທິ:</b> {user?.role}</p> </li>
        <li><p><b>ອາຊີບ :</b> ພະນັກງານ </p></li>
        <li><p><b>ໜ້າທີ່:</b> ອາຈານສອນ</p></li>
        <li><p><b>ສະຖານທີ່ເຮັດວຽກ:</b> ພາກວິຊາວິທະຍາສາດຄອມພິວເຕີ, ຄວທ, ມຊ</p></li>
        <li><p><b>ກິດຈະກໍາທີ່ມັກ:</b> ຫຼິ້ນກິລາ, ເບິ່ງໜັງຟັງເພງ ແລະ ດື່ມບາງຄັ້ງຄາວ</p>  </li>
        </ul>          
      </div>
      <div className="box2">
        <h2>ກິດຈະກໍາໃນເວລາຫວ່າງ</h2>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
      </div>
      <style jsx>
        {`
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          input,
          button {
            padding: 10px;
            background-color: #4caf50;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 10px;
          }
          .box1 {
            display: flex;
            flex-direction: column;
            background-color: #4caf50;
            margin-bottom: 0px;
            padding: 10px;
            font-family: Saysettha OT;
            text-align: left;
            margin: 10px 10px;
          }
          .box2 {
            display: flex;
            flex-direction: column;
            background-color: #e8f1f3;
            margin-bottom: 0px;
            padding: 10px;
            font-family: Saysettha OT;
          }
          .profile-image {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto 15px;
          }
            h2 {
            font-family: Saysettha OT;
            text-align: center;
            color: #0b37ec;
            }
            p {
            margin: 0;
            }
        `}
      </style>
    </div>
  );
};
export default Day9;
