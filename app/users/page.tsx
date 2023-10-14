import UserCard, { User } from "@/components/UserCard";
import React from "react";

async function getUsersData() {
  const response = await fetch("http://localhost:3000/api/users", {
    cache: "no-cache",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

const Users = async () => {
  const allUsers: User[] = await getUsersData();

  return (
    <div className="bg-black p-20 min-h-screen text-white flex flex-row flex-wrap gap-3 justify-center align-middle">
      {allUsers?.map((user: User) => {
        //? znaci da nece nista izbaciti ako ne postoji, pogodno zbog errora da se na clientu ne prikazuje
        return (
          <UserCard
            key={user.uid}
            full_name={user.full_name}
            image={user.image}
            email_address={user.email_address}
            job_title={user.job_title}
          />
        );
      })}
    </div>
  );
};

export default Users;
