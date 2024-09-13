import React, { useEffect, useState } from "react";
const FunctionalCounter = () => {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    document.title = `Fun update ${count} `;
  });
  return (
    <div className="counter">
      <h2>ນີ້ແມ່ນ Functional Counter</h2>
      <p>ຈໍານວນ: {count}</p>

      <button
        className="add-btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ເພີ່ມ
      </button>

      <button
        className="del-btn"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        ລົບ
      </button>
    </div>
  );
};
//My blog
const BlogPost = (prop) => {
  const [like, setLike] = useState(0);
  return (
    <div text-align="center">
      <h1> {prop.title} </h1>
      <h3> {prop.content} </h3>
      <div text-align="center">
        {" "}
        <img
          src="https://www.pngitem.com/pimgs/m/52-526807_responsible-person-icon-hd-png-download.png"
          width="150"
          height="110"
        ></img>
      </div>
      <p>
        <h3>
          I. <u>What is CSS?</u>
        </h3>
        <ul>
          <li>CSS stands for Cascading Style Sheets</li>
          <li>
            CSS describes how HTML elements are to be displayed on screen,
            paper, or in other media
          </li>
          <li>
            CSS saves a lot of work. It can control the layout of multiple web
            pages all at once
          </li>
          <li>External stylesheets are stored in CSS files</li>
        </ul>
      </p>
      <div>
        <button
          className="like-btn"
          onClick={() => {
            setLike(like + 1);
          }}
        >
          <img
            src="https://img.lovepik.com/free-png/20211216/lovepik-like-png-image_401703580_wh1200.png"
            width="70"
            height="70"
          ></img>
        </button>

        <button
          className="like-btn"
          onClick={() => {
            setLike(like - 1);
          }}
        >
          <img
            src="https://thumbs.dreamstime.com/b/thumb-down-i-don-t-like-no-thumb-down-i-don%C3%A2%E2%82%AC%E2%84%A2t-like-no-%C3%A2%E2%82%AC-vector-117202104.jpg"
            width="70"
            height="70"
          ></img>
        </button>

        <h2>{like}</h2>
      </div>
    </div>
  );
};

//class component
class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
  }
  componentDidUpdate() {
    document.title = `ຈໍານວນ: ${this.state.count}`;
  }
  render() {
    return (
      <div className="counter">
        <h2>ນີ້ແມ່ນ class Counter</h2>
        <p>ຈໍານວນ: {this.state.count} </p>
        <button
          className="add-btn"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          ເພີ່ມ
        </button>
        <button
          className="del-btn"
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          ເພີ່ມ
        </button>
      </div>
    );
  }
}
//Product component
const ProductComp = (prop) => {
  return (
    <div className="product-card">
      <h1 className="textcenter">ເຊີນທ່ອງທ່ຽວລາວປີ 2024</h1>
      <p>ລໍາດັບທີ: {prop.index}</p>
      <img src={prop.productIm} width={300}></img>
      <h2>ສະຖານທີ່: {prop.productTitle}</h2>
      <p>ລາຍລະອຽດ: {prop.productDiscription}</p>
      <p>{prop.productPrice}</p>
      <button className="like-btn">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/420/238/non_2x/like-icon-vector-illustration.jpg"
          width={70}
          height={70}
        ></img>
      </button>
    </div>
  );
};
//Book component
const Book = (prop) => {
  return (
    <div className="book-card">
      <h1 className="textcenter">Book component.</h1>
      <img src={prop.bookIm} width="250" height="250"></img>
      <h1>{prop.bookTitle}</h1>
      <p>{prop.bookDiscription}</p>
      <p>{prop.bookPrice}</p>
      <p>{prop.like}</p>
    </div>
  );
};
//Main Component
const Day2 = () => {
  const productDetail = [
    {
      title: "ຍາມແລງທີ່ແຄມຂອງ",
      description: "ເຈົ້າສາມາດຊອກຫາປະສົບການໃນການຍ່າງຫຼິ້ນແຄມຂອງ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZM9BsoHG9-d5ySnPQAJj2HoXP7WEKq5Vzg&s",
      price: "ລາຄາ: 150,000 ກີບ",
    },
    {
      title: "ເດີ່ນທາດຫຼວງ",
      description: "ເຈົ້າສາມາດຊອກຫາປະສົບການໃນການຍ່າງຫຼິ້ນເດີ່ນທາດຫຼວງ",
      img: "https://www.agoda.com/wp-content/uploads/2024/01/2-That-Luang-Festival-Vientiane.jpg",
      price: "ລາຄາ: 100,000 ກີບ",
    },
    {
      title: "ປະຕູໄຊ",
      description: "ເຈົ້າສາມາດຊອກຫາປະສົບການໃນການຍ່າງຫຼິ້ນເດີ່ນປະຕູໄຊ",
      img: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT15RSZBndpMuIZQyFA0_qaUfPhgFTldm39htSutqs5BYlw5B4C3_f6DjRXd9oP_3Di_3yIY7RfMz2C19EMFtvdbGvRj4ESD8b_lszIIg",
      price: "ລາຄາ: 200,000 ກີບ",
    },
    {
      title: "ວັດພູຈໍາປາສັກ",
      description:
        "ເຈົ້າສາມາດຊອກຫາປະສົບການໃນການຍ່າງຫຼິ້ນເດີ່ນທີ່ວັດພູຈໍາປາສັກ, ພາກໃຕ້ຂອງປະເທດລາວ",
      img: "https://lp-cms-production.imgix.net/2023-08/shutterstockRF302595713.jpg?fit=crop&ar=1%3A1&w=1200&auto=format&q=75",
      price: "ລາຄາ: 250,000 ກີບ",
    },
  ];

  const title = "ນີ້ແມ່ນຫົວຂໍ້";
  const content = "ນີ້ແມ່ນເນື້ອໃນເອກະສານ";
  const productTitle = "ຍ່າງຫຼິ້ນແຄມຂອງ";
  const productDiscription = "ເຈົ້າສາມາດຊອກຫາປະສົບການໃນການຍ່າງຫຼິ້ນແຄມຂອງ";
  const productIm =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZM9BsoHG9-d5ySnPQAJj2HoXP7WEKq5Vzg&s";
  const productPrice = "100,000 ກີບ";

  const bookIm =
    "https://images-se-ed.com/ws/Storage/Originals/978616/084/9786160843237L.jpg?h=e5520b3b8e8ff4e3ae0dc0afd3ce75cf";
  const bookTitle = "React Native";
  const bookDiscription =
    "Do you want to develop a skill that will ensure you never go jobless again. Have you always wanted to learn how to program but could never afford those ridiculously expensive courses.Developers and programmers are amongst the highest paid professions in the world, and according to the US Bureau of Labor Statistics, the number of jobs for software and app developers will increase by a shocking 24% in the next few years. In 2019, the tech industry posted 4.6 million job openings in the US job market, and their direct economic output was estimated at 1.9 trillion dollars.";
  const bookPrice = "ລາຄາ: 500,000 ກີບ";
  return (
    <div className="App">
      {productDetail.map((element, index) => (
        <ProductComp
          index={index + 1}
          productIm={element.img}
          productTitle={element.title}
          productDiscription={element.description}
          productPrice={element.price}
        ></ProductComp>
      ))}
      <FunctionalCounter></FunctionalCounter>
      <ClassCounter></ClassCounter>
      <hr></hr>
      <BlogPost title={title} content={content}></BlogPost>
      <hr></hr>
      <ProductComp
        productIm={productIm}
        productTitle={productTitle}
        productDiscription={productDiscription}
        productPrice={productPrice}
      ></ProductComp>
      <hr></hr>

      <Book
        bookIm={bookIm}
        bookTitle={bookTitle}
        bookDiscription={bookDiscription}
        bookPrice={bookPrice}
      ></Book>

      <style jsx>
        {`
          .App {
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
          }
          .counter {
            margin: 20px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            background-color: #b3f0ff;
            font-family: Saysettha OT;
          }
          p {
            font-size: 18px;
            text-align: left;
          }
          button {
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            padding-right: 30px;
            margin: 10px 10px;
            text-align: center;
          }
          .add-btn {
            background-color: #6666ff;
          }
          .del-btn {
            background-color: #00b300;
          }
          .like-btn {
            text-align: center;
            border-radius: 5px;
          }
          .product-card {
            margin: 20px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            background-color: #f2e6ff;
            font-family: Saysettha OT;
          }
          .textcenter {
            text-align: center;
          }
          .book-card {
            margin: 20px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            background-color: #b3f0ff;
          }
        `}
      </style>
    </div>
  );
};

export default Day2;
