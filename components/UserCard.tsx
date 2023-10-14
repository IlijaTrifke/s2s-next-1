import React from "react";
import Image from "next/image";

export interface User {
  uid?: string; //nije mendatory, nije obavezan
  full_name: string;
  image: string;
  email_address: string;
  job_title: string;
}

const UserCard: React.FC<User> = ({
  full_name,
  image,
  email_address,
  job_title,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image src={image} width={250} height={300} alt={full_name} />
      <h2>{full_name}</h2>
      <p>{email_address}</p>
      <span>{job_title}</span>
    </div>
  );
};

export default UserCard;
