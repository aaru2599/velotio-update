import styled from "styled-components";
import { TbExternalLink } from "react-icons/tb";
import { ClienteleData } from "../Data/ClienteleData";
const ClienteleCard = () => {
  const data = ClienteleData;
  // console.log();
  return (
    <Box>
      {data.map((item, index) => {
        return (
          <Main style={item.link ? { cursor: "pointer" } : {}} key={index}>
            <Imageshow>
              <ProductImg
                src={item.Productimg}
                alt="clientlogo"
                className="clientimg"
              />
              <CardTitle className="title">{item.title}</CardTitle>
            </Imageshow>

            <Status>
              {item.Percentage.map((item, index) => {
                return (
                  <PercentageData key={index}>
                    <Boxpercenatge>
                      <BoxElementTitle>{item.globalpercentage}</BoxElementTitle>
                      <BoxElementDescription>
                        {item.about}
                      </BoxElementDescription>
                    </Boxpercenatge>
                  </PercentageData>
                );
              })}
            </Status>

            <CardDescription className="desc">{item.desc}</CardDescription>
          </Main>
        );
      })}
    </Box>
  );
};

export default ClienteleCard;

const Textbox = styled.div`
  .title {
    margin: 0;
    // padding-top:10px 0;
    font-size: 13px;
  }

  .desc {
    font-size: 14px;
    padding: 10px;
    line-height: 1.3;
  }
`;

const CardTitle = styled.h1`
  font-size: 13px;
`;
const Imageshow = styled.div`
  display: flex;
  // align-items: center;
  // justify-content: space-between;
  gap: 18px;

  .clientimg {
    width: 38px;
    height: 38px;
  }
  .icon {
    color: purple;
    width: 24px;
  }
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 22px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(
      1,
      minmax(0, 1fr)
    ); /* Mobile layout with one card per row */
    /* Mobile layout with one card per row */
  }
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

const Main = styled.div`
  background-color: #fff;
  // width: 350px;
  border: 1px solid #eaeaea;
  border-radius: 16px;
  height: 230px;
  padding: 16px;
  transition: 0.3s;
  &:hover {
    background-color: #f0e2ff;
  }
  @media screen and (max-width: 768px) {
    width: 100%; /* Adjust width for larger screens */
    height: 240px;
  }
`;

const Status = styled.div`
  border-bottom: 0.5px solid silver;
  margin-top: 24px;
  display: flex;
  align-items: center;
`;

const PercentageData = styled.div`
  display: flex;
  flex: 33%;
  font-size: 11px;
  height: 90px;
`;

const Boxpercenatge = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 6px;
`;

const ProductImg = styled.img`
  //  fill: purple;
  filter: grayscale(100%);
`;

const CardDescription = styled.p`
  font-size: 11px;
  padding: 10px;
  line-height: 1.3;
`;

const BoxElementTitle = styled.h3`
  font-size: 18px;
`;

const BoxElementDescription = styled.p`
  font-size: 10px;
`;
