import styled from "styled-components";

const Listnav = ({ item }) => {
  return (
    <div>
      <List>{item.title}</List>
    </div>
  );
};

export default Listnav;

const List = styled.div`
  display: flex;
`;
