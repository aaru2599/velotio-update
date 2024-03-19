import React from "react";
import SecHeading from "../Atoms/SecHeading";
import SecSubHeading from "../Atoms/SecSubHeading";
import BlogCard from "../Molecules/BlogCard";
import { BlogCardData } from "../Data/BlogCardData";
import styled from "styled-components";

const BlogSection = () => {
  const data = BlogCardData;
  return (
   <div >
     <SectionContainer>
      <div>
      <SecHeading heading={"Velotio’s technology blog"} />
      <SecSubHeading normal={"Latest Blogs from"} bold={"Our Engineers."} />
      </div>
      <div style={{display:"flex",justifyContent:"center" }}>
      <BlogContainer>
        <BlogCard data={data} />
      </BlogContainer>
      </div>
    </SectionContainer>
   </div>
  );
};

export default BlogSection;
const BlogContainer = styled.div`
  display: grid;
      grid-template-columns: repeat(3, minmax(250px, 1fr));
      
  // justify-content: center;
  gap: 50px;
`;

const SectionContainer = styled.div`
  paddingtop: 50px;
  padding-bottom: 100px;
  display:flex;
  flex-direction:column;
  gap:50px;
`;
