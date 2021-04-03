import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Carlos",
      email: "civanleiva42@gmail.com",
      password: bcrypt.hashSync("CorrectHorseBatteryStaple", 8),
      isAdmin: true,
    },
  ],
  products: [
    {
      productImageSrc:
        "https://i.ibb.co/54qxX2Q/155566907-1110526986040202-1033804536160992891-n.jpg",
      productTitle: "Producto 1",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc:
        "https://i.ibb.co/0B4S7rd/1a35b9b8-1aac-41fd-902e-fddbdee9bcb3.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc:
        "https://i.ibb.co/SNy5PwR/2b8e84e4-4466-402a-b9df-da75e18496f0.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc:
        "https://i.ibb.co/9tqhBTT/3c837307-3bba-45e9-8f8c-09a3cfcad5b2.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc:
        "https://i.ibb.co/tpSWDFz/3cd518f4-192b-4572-abdd-10292d18b1a2.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc:
        "https://i.ibb.co/R7v8JVk/6ddcf087-9675-4e8d-b5cb-5b25db651bc8.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc:
        "https://i.ibb.co/R7msx1T/7d947345-6348-47cd-a892-4632e97078a5.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc:
        "https://i.ibb.co/T85DGRQ/8b2246f8-442f-432b-9324-1032549222f8.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc:
        "https://i.ibb.co/Br50mCG/8f113dbf-cc89-415a-88b5-f23571e157ca.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc:
        "https://i.ibb.co/3TdXS5T/79b127e9-25d3-4728-87c3-fc82107fa5c9.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc:
        "https://i.ibb.co/ssRKvqd/206e1d96-238d-43cc-a6bf-e3c5e4c439fc.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc:
        "https://i.ibb.co/KK5PphR/3511b0b4-6f3a-4857-ac25-11703b1204c8.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc:
        "https://i.ibb.co/Ryh8jDb/c9d843ff-1a5c-47f1-b834-b29ff01b99cd.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc:
        "https://i.ibb.co/ZJ7jcK4/cfa6b84e-333d-46e3-8f4c-cd4e9c5eb78c.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc:
        "https://i.ibb.co/Vmd9Gf2/d25be836-8918-4a17-b1b4-dd7cdeb54e52.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc:
        "https://i.ibb.co/sJc6g2X/e9ebbbcb-195d-4a01-979a-72512cb4a5e1.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc:
        "https://i.ibb.co/wrH86kL/eb595c70-791b-4824-92c0-fa8dc9d37aee.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
    {
      productImageSrc:
        "https://i.ibb.co/Q6hMRGQ/ff7916c7-6746-4772-815e-9931995d92c6.jpg",
      productTitle: "Producto",
      productDescription: "Beep boop placeholder text",
    },
  ],
};

export default data;
