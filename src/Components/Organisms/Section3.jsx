import React from "react";
import TesimonialCard from "../Molecules/TesimonialCard";
import SecHeading from "../Atoms/SecHeading";
import SecSubHeading from "../Atoms/SecSubHeading";

const Section3 = () => {
  return (
    <div>
      <SecHeading heading={"Testimonials"} />

      <SecSubHeading normal={"Our"} bold={"partners feedback"} />

      <div style={{ marginTop: "12px" }}>
        <TesimonialCard />
      </div>
    </div>
  );
};

export default Section3;
