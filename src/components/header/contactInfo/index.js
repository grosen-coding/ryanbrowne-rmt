import React from "react";
import styled from "styled-components";
import ContactCard from "./contactCard";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { FiClock } from "react-icons/fi";

function ContactInfo() {
  return (
    <>
      <ContactCards>
        <ContactCard
          icon={<BsTelephone />}
          title="Phone"
          subTitle="647-555-4487"
        />
        <ContactCard
          icon={<MdAlternateEmail />}
          title="Email"
          subTitle="ryan@ryanbrownermt.ca"
        />
        <ContactCard
          icon={<FiClock />}
          title="Hours"
          subTitle="Mon - Sat: 12PM - 8PM"
        />
      </ContactCards>
    </>
  );
}

export default ContactInfo;

const ContactCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  justify-self: flex-end;
`;
