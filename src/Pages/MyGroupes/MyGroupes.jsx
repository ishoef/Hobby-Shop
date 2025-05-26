import React, { useEffect, useState, useContext } from "react";
import CreatedGroups from "../../Components/CreatedGroups/CreatedGroups";
import NoCreatedGroups from "../../Components/NoCreatedGroups/NoCreatedGroups";
import { AuthContext } from "../../Context/AuthProvider";

const MyGroupes = () => {
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    document.title = "My Groups | Hobby Shop";
  }, []);

  useEffect(() => {
    if (user && user.email) {
      fetch(
        `https://hobby-shop-server-side-aazw9yse7-ismail-nayefs-projects.vercel.app/groups?userEmail=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setGroups(data);
        })
        .catch((err) => {
          console.error("Failed to fetch user groups:", err);
          setGroups([]);
        });
    } else {
      // If user not ready yet, keep loading or handle it here
      setGroups([]);
    }
  }, [user]);

  if (!groups || groups.length === 0) {
    return <NoCreatedGroups />;
  }

  return (
    <div>
      <CreatedGroups groups={groups} setGroups={setGroups} />
    </div>
  );
};

export default MyGroupes;
