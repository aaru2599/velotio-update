import styled from "styled-components";
import { HelpYouData } from "../../Data/HelpYou";
import LinkToPage from "../../Atoms/LinkToPage";
import Tag from "../../Atoms/Tag";

const Sec2Card = () => {
  const Data = HelpYouData;

  return (
    <div>
      <Container>
        {Data.map((item, index) => {
          return (
            <Card key={index}>
              <CardHeader>
                <img src={item.img} alt="cardimage" className="cardimg" />
                <h4 className="title">{item.title}</h4>
              </CardHeader>
              <Textbox>
                <p className="description">{item.Description}</p>
                {/* <LinkToPage item={item} /> */}
                <h3 className="link">Read More</h3>
                <Line></Line>

                <Tag item={item} />
              </Textbox>
            </Card>
          );
        })}
      </Container>
    </div>
  );
};

export default Sec2Card;

const CardHeader = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  margin: 20px 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(380px, 1fr));
`;

const Card = styled.div`
  border-radius: 16px;
  /* box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1); */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: white;
  padding: 16px;
  border: 1px solid #eaeaea;
  // cursor: pointer;

  .cardimg {
    object-fit: cover;
    width: 40px;
    height: 40px;
    /* border-radius: 50%; */
  }
`;

const Textbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  .title {
    margin-top: 8px;
    color: #383838;
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
  }

  .description {
    color: #51535e;
    margin: 12px 0;
    font-size: 13px;
    line-height: 23px;
    font-weight: 500;
    height: 75px;
  }

  .link {
    color: purple;
    font-size: 14px;
    cursor: pointer;
  }
`;

const Line = styled.div`
  border-bottom: 0.5px solid #e8e8e8;
  display: flex;
  justify-self: center;
  /* align-self: center; */
  width: 100%;
  margin: 10px 0;
`;
