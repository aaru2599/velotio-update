import styled from "styled-components";
import { TbExternalLink } from "react-icons/tb";

const Tag = ({ item }) => {
  ////console.log("tagitem", item);
  return (
    <Tagbox>
      {item.tags.map((tag, index) => {
        return (
          <div key={index}>
            <TagButton className={tag.link?"cursor":""}>
             <span> {tag.tagname}</span>
              {tag.link && <img src="https://assets-global.website-files.com/5d121ce15cf154f8f7d91740/659f128d76097cba69fc564c_external-link.svg" className="icon" />}
            </TagButton>
          </div>
        );
      })}
    </Tagbox>
  );
};

export default Tag;

const Tagbox = styled.div`
  display: flex;
  /* align-items: center; */
  flex-wrap: wrap;
  gap: 8px;
  .cursor{
    cursor:pointer;
  }
`;

const TagButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0px 7px;
  border-radius: 16px;
  background-color: rgb(245 243 243 / 59%);
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  // cursor: pointer;

  &:hover {
    /* transform: scale(1.1); */
  }

  .icon {
    color: purple;
    height:12px;
    width:12px;
  }
`;
