import React from "react";
import { styled } from "styled-components";
import { Buttons } from "../UI/Buttons";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const product = [
  {
    id: "1",
    image: "https://www.myphone.kg/files/media/17/17204.webp",
    title: "Iphone 14 Pro",
    price: "$1320",
    description:
      " Dynamic Island, новый волшебный способ взаимодействия с iPhone. Чип А16 Bionic - сверхбыстрый и сверхэффективный, обеспечивающий удивительное время автономной работы в течение всего дня. Основная камера 48 МП с усовершенствованным четырехпиксельным сенсором дляувеличения разрешения до 4 раз.Аварийный сигнал SOS через спутник иобнаружение столкновений - революционные функции,разработанные для спасения жизней.",
  },
  {
    id: "2",
    image: "https://www.myphone.kg/files/media/13/13410.jpg",
    title: "Iphone 13 Pro",
    price: "$1120",
    description:
      "Дисплей iPhone 13 Pro представляет собой прямоугольник с закруглёнными углами. Диагональ этого прямоугольника без учёта закруглений составляет 6,06 дюйма (фактическая область просмотра меньше).",
  },
  {
    id: "3",
    image: "https://www.myphone.kg/files/media/13/13486.jpg",
    title: "Iphone 12 Pro",
    price: "$650",
    description:
      "Apple iPhone 12 Pro Max имеет поддержку 5G и оснащен самым быстрым на сегодняшний день процессором A14 Bionic, позволяющим в полной мере использовать возможности дополненной реальности. 6.7 OLED-дисплей занимает переднюю панель от края до края и защищен прочным стеклом Ceramic Shield.",
  },
];

export const IphoneDetail = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const params = useParams();

  const findeId = product.find((el) => el.id === params.productId);

  return (
    <Block>
      <Container>
        <div>
          <Image src={findeId.image} />
        </div>
        <NextBlock>
          <Buttons onClick={goBack} />
          <h2>{findeId.title}</h2>
          <p>
            <strong>Price:</strong>
            {findeId.price}
          </p>
          <Description>{findeId.description}</Description>
        </NextBlock>
      </Container>
    </Block>
  );
};

const Block = styled.div`
  width: 1300px;
  height: 500px;
  background-color: #fff;
  margin-top: 50px;
  margin-left: 50px;
`;
const NextBlock = styled.div`
  margin-top: 30px;
`;

const Container = styled.div`
  display: flex;
  width: 1000px;
  justify-content: space-around;
`;

const Description = styled.p`
  width: 580px;
`;

const Image = styled.img`
  margin-top: 50px;
  width: 300px;
  height: 350px;
`;
