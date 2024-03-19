import SecHeading from "../Atoms/SecHeading";
import Sec2Card from "../Molecules/Navabr/Sec2Card";
import styled from "styled-components";
const Section2 = ({ heading }) => {
  //console.log("secHeading",heading);
  //console.log();
  return (
    <div>
      <Box>
       
        <SecHeading heading={heading}/>
      </Box>
      <Sec2Card />
    </div>
  );
};

export default Section2;

const Box = styled.div`
  display: flex;
  align-items: center;
 
`;


