import axios from "axios";
import { useEffect, useState } from "react";
const API_URL = "https://sample-api-fwbm.onrender.com/api/v1";

const Profile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log(`Fetch post`);
    fetchMyUser();
  }, []);

  const fetchMyUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.data.data);
    } catch (error) {
      localStorage.removeItem("token");
    }
  };
  return (
    <div className="container">
      <div className="box1">
        <p>
          <img
            className="flag-image"
            src="/laos-flag-pole-animated.gif"
            width="100"
            height="100"
            alt="My picture"
          ></img>
        </p>
        <h1> My profile</h1>
        <img
          className="profile-image"
          src="/amone.jpg"
          width="100"
          height="100"
          alt="My picture"
        ></img>
        <h2>ຂໍ້ມູນພື້ນຖານ</h2>
        <ul>
          <li>
            <p>
              <b>ຊື່ ແລະ ນາມສະກຸນ:</b> {user?.first_name} {user?.surname}
            </p>
          </li>
          <li>
            <p>
              <b>Email:</b> {user?.email}
            </p>
          </li>
          <li>
            <p>
              <b>ເບີໂທ:</b> {user?.phone_number}
            </p>
          </li>
          <li>
            <p>
              <b>ສິດທິ:</b> {user?.role}
            </p>{" "}
          </li>
          <li>
            <p>
              <b>ອາຊີບ :</b> ພະນັກງານ{" "}
            </p>
          </li>
          <li>
            <p>
              <b>ໜ້າທີ່:</b> ອາຈານສອນ
            </p>
          </li>
          <li>
            <p>
              <b>ສະຖານທີ່ເຮັດວຽກ:</b> ພາກວິຊາວິທະຍາສາດຄອມພິວເຕີ, ຄວທ, ມຊ
            </p>
          </li>
          <li>
            <p>
              <b>ກິດຈະກໍາທີ່ມັກ:</b> ຫຼິ້ນກິລາ, ເບິ່ງໜັງຟັງເພງ ແລະ
              ດື່ມບາງຄັ້ງຄາວ
            </p>{" "}
          </li>
        </ul>
      </div>
      <div className="box2">
        <div className="box2-group">
        <img
            className="activities-image"
            src="/react4.jfif"
            width="100"
            height="100"
            alt="My picture"
          ></img>
        </div>
        <h2>ການເຝິກອົບຮົມກ່ຽວກັບ React ແລະ JavaScript</h2>
        <h3>1. React ແມ່ນຫຍັງ?</h3>
        <div className="box3">
          <p>
            <ul>
              <li>
                React ເປັນເຕັກໂນໂລຊີໜຶ່ງທີ່ມາແຮງຫຼາຍ ທັງໃນລາວ ແລະ ຕ່າງປະເທດ,
                ໂດຍສ້າງມາຈາກພື້ນຖານແນວຄວາມຄິດແບບ MVC (Model View Controller)
                ເຊິ່ງໝາຍຄວາມວ່າ React ມີໜ້າທີ່ຈັດການກັບ Model ຫຼື View
                ແຕ່ສ່ວນໃຫຍ່ຈະເປັນ View ກ່ອນໜ້ານັ້ນເວລາຈະຂຽນໜ້າເວັບ
                ເຮົາກໍຈະເຮັດຜ່ານ HTML ມີການໃຊ້ CSS ໃນການປັບປ່ຽນໜ້າຕາຂອງ UI.
              </li>
              <li>
                ແຕ່ໃນ React ຖ້າຈະສ້າງໜ້າເວັບຂຶ້ນມານັ້ນ ເຮົາຈະໃຊ້ເປັນ Component
                ປຽບໄດ້ວ່າ Component ເປັນ Block ສ່ວນຍ່ອຍຂອງເວັບເຮົາທີ່ຈະສ້າງອອກມາ
                ໂດຍເຮົາຈະຂຽນ Code ພາສາ JavaScript ເພື່ອະທິບາຍໜ້າຕາຂອງ block
                ນັ້ນໆ, ເວລາສະແດງຜົນໃນໜ້າ Page ເຮົາຈະເອີ້ນ Component
                ອອກມາສະແດງຜົນ.
              </li>
              <h3>ສະຫຼຸບສັ້ນໆຄື:</h3>
              <li>
                React ເປັນ Javascript Libraly ສ້າງ ແລະ ພັດທະນາຂຶ້ນໂດຍ Facebook
                ຂຽນໄດ້ແຕ່ UI ເທົ່ານັ້ນ ແລະ ເປີດໃຫ້ໃຊ້ຟຣີ.
              </li>
              <li>React ໃຊ້ HTML Code, CSS ແລະ Javascript.</li>
              <li>
                React ມີ 3 ຄອນເຊັບທີ່ເຮົາຕ້ອງຮຽນຮູ້ຄື: Component, State ແລະ
                Props.
              </li>
            </ul>
          </p>
        </div>
        <div className="box2">
          <h3>2. ຈຸດດີ ແລະ ຈຸດອ່ອນຂອງ React.</h3>
          <p>
            <img
              className="activities-image"
              src="/react5.jfif"
              width="100"
              height="100"
              alt="My picture"
            ></img>
          </p>
          <h3>ຈຸດດີຂອງ React</h3>
          <p>
            <ul>
              <li>Component ເຂົ້າໃຈງ່າຍ ເຮົາສາມາດຮຽນຮູ້ໄດ້ດ້ວຍຕົວເອງ.</li>
              <li>
                Tool ຫຼາຍ, ແຕ່ React ຢ່າງດຽວກໍສ້າງເວັບໄດ້ທັງເວັບແລ້ວ,
                ໂດຍບໍ່ຕ້ອງຫາ Tool ເພິ່ມເຕິມ ແລະ ຍັງມີ Tool
                ພັດທະນາອອກມາຢູ່ເລື້ອຍໆ.
              </li>
              <li>
                ສາມາດພັດທະນາ App ໄດ້, React ມີເຄື່ອງມືໜຶ່ງທີ່ຊື່ວ່າ React Native
                ເປັນການຂຽນ JavaScript ແລ້ວແປງເປັນ App ແບບ Native ໄດ້ທັງເທິງ
                Android ແລະ iOS.
              </li>
            </ul>
          </p>
          <p>
            <img
              className="activities-image"
              src="/react3.jfif"
              width="100"
              height="100"
              alt="My picture"
            ></img>
          </p>
          <h3>ຈຸດອ່ອນຂອງ React</h3>
          <p>
            <ul>
              <li>
                ຕ້ອງມີພື້ນຖານໃນ Javascript ໃນລະດັບໜຶ່ງ
                ຄົົນທີ່ສົນໃຈຮຽນກໍຈະລຳບາກແດ່ຖ້າບໍ່ມີພື້ນຖານ Javascript
                ອາດຈະຕ້ອງໃຊ້ເວລາຫຼາຍ.
              </li>
              <li>
                Documentation ອ່ານຍາກ React ມີ Documentation ທີ່ຍັງບໍ່ຄ່ອຍດີ
                ໃນອະນາຄົດອາດຈະມີການພັດທະນາອີກ.
              </li>
            </ul>
          </p>
        </div>
        <div className="box2">
          <p>
            <img
              className="activities-image"
              src="/react1.jfif"
              width="100"
              height="100"
              alt="My picture"
            ></img>
          </p>
          <h3>3. ການຕິດຕັ້ງ React</h3>
          <p>
            ການຕິດຕັ້ງ React ນັ້ນ ເຮົາຈະຕິດຕັ້ງຜ່ານ command line
            ໂດຍໃຊ້ຄຳສັ່ງຕໍ່ໄປນີ້
            <ul>
              <li>npm init</li>
              <li>npm install --save react react-dom</li>
            </ul>
          </p>
          <p>
            <img
              className="activities-image"
              src="/react7.jfif"
              width="100"
              height="100"
              alt="My picture"
            ></img>
          </p>
        </div>
        <div className="box2">
          <h3>4. ການສ້າງໄຟລ໌ໂປຣເຈັກ</h3>
          <p>
            ການສ້າງໂປຣເຈັກໃນ React ມັນຈະບໍ່ເໝືອນກັບການສ້າງໂປຣເຈັກໃນ Editer
            ໂດຍເຮົາຈະສ້າງຜ່ານ Command line ເໝືອນກັບການຕິດຕັ້ງ,
            ໂດຍໃຊ້ຄຳສັ່ງດັ່ງຕໍ່ໄປນີ້
          </p>
          <p>
            1. ຕິດຕັ້ງ create-react-app ດ້ວຍຄຳສັ່ງ npm install -g
            create-react-app.
          </p>
          <p>
            2. ໃຊ້ create-react-app ສ້າງໂປຣເຈັກ ຕໍ່ຈາດຄຳສັ່ງຈະເປັນຊື່ໂປຣເຈັກ
            create-react-app my-App
          </p>
          <p>
            ເຮົາກໍຈະໄດ້ໂຟນເດີ my-App ເຊິ່ງດ້ານໃນກໍຈະມີ React Code ແລະ
            ການເຊັດອັບໄວ້ຮຽບຮ້ອຍ ໂດຍເຮົາສາມາດເຂົ້າໄປໃນໂປຣເຈັກ ແລະ
            ມີຄຳສັ່ງຕ່າງໆໃຫ້ໃຊ້
          </p>
          <p>
            <ul>
              <li>
                npm start ເລີ່ມໂປຣເຈັກໂດຍເຂົ້າໄປເບິ່ງທີ່ http://localhost:3000
              </li>
              <li>
                npm run build ເພື່ອ Build ໂປຣເຈັກເອົາໄປໃຊ້ໃນລະດັບ Production
                ໂດຍໄຟລ໌ທີ່ໄດ້ຈະຢູ່ໃນ Folder Build.
              </li>
              <li>npm test ຄຳສັ່ງຣັນ Test ທີ່ມີຢູ່ໃນໂປຣເຈັກ</li>
              <li>
                npm run eject ຄຳສັ່ງແກ້ໄຂການເຊັດອັບໂປຣເຈັກ ຫຼື
                ຢາກເຫັນການຕັ້ງຄ່າ, ໂດຍໄຟລ໌ການຕັ້ງຄ່າຈະຢູ່ໃນໂຟນເດີ Config
              </li>
            </ul>
          </p>
          <p>
            3. ຈາກນັ້ນ ໃຊ້ຄຳສັ້ງ cd ຢ້ອນກັບເຂົ້າໄປທີ່ໂຟນເດີ mindphp ເມື່ອ path
            ເປັນ ຊື່ໂຟນເດີຂອງເຮົາແລ້ວ ກໍໃຊ້ຄຳສັ່ງ start ໄດ້ເລີຍ
          </p>
          <p>
            <ul>
              <li>cd my-mindphp</li>
              <li>npm start</li>
            </ul>
            <h2>ກິດຈະກໍາທີ່ມັກ</h2>
          </p>
        </div>
        <h3>ກິລາບານເຕະ ອາທິດລະເທື່ອ ເພື່ອສຸຂະພາບ</h3>
        <p>
          <img
            className="activities-image"
            src="/react6.jfif"
            width="100"
            height="100"
            alt="My picture"
          ></img>
        </p>
        <h3>ຄັ້ງໜຶ່ງທີ່ທົ່ງໄຫຫີນ, ແຂວງ ຊຽງຂວາງ</h3>
        <p>
          <img
            className="activities-image"
            src="/react8.jpg"
            width="100"
            height="100"
            alt="My picture"
          ></img>
        </p>
        <h3>ອາຊີບປັດຈຸບັນ</h3>
        <p>
          <img
            className="activities-image"
            src="/react11.jpg"
            width="100"
            height="100"
            alt="My picture"
          ></img>
        </p>
        <h3>ຄັ້ງໜຶ່ງ ທີ່ ເກົາຫຼີໃຕ້ ທີ່ Seoul</h3>
        <p>
          <img
            className="activities-image"
            src="/react10.jpg"
            width="100"
            height="100"
            alt="My picture"
          ></img>
        </p>
        <p>
          <img
            className="activities-image"
            src="/react9.jpg"
            width="100"
            height="100"
            alt="My picture"
          ></img>
        </p>
        <p>
          <img
            className="activities-image"
            src="n-seoul-tower-003.jpg"
            width="100"
            height="100"
            alt="My picture"
          ></img>
        </p>
      </div>
      <style jsx>
        {`
          .container {
            max-width: 700px;
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
            margin: 0px;
          }
          .box2 {
            
            background-color: #e8f1f3;
            margin-bottom: 0px;
            padding: 10px;
            font-family: Saysettha OT;
          }
          .box2 .box2-group{
          display: flex;
          }
          .box3 {
            display: flex;
            flex-direction: row;
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
          h1 {
            font-family: Times new Ronam;
            text-align: center;
            color: #0b37ec;
          }
          h2 {
            font-family: Saysettha OT;
            text-align: center;
            color: #0b37ec;
          }
          h3 {
            font-family: Saysettha OT;
            text-align: left;
            color: #0b37ec;
          }
          p {
            margin: 0;
          }
          .activities-image {
            width: 400px;
            height: 400px;
            border-radius: 5%;
            object-fit: cover;
            margin: 0 auto 15px;
            text-align: center;
          }
          .flag-image {
            width: 80px;
            height: 80px;
            border-radius: 5%;
            object-fit: cover;
            margin: 0 auto 15px;
          }
        `}
      </style>
    </div>
  );
};
export default Profile;
