import React, { useEffect, useState, useContext } from "react";
import CreatedGroups from "../../Components/CreatedGroups/CreatedGroups";
import NoCreatedGroups from "../../Components/NoCreatedGroups/NoCreatedGroups";
import { AuthContext } from "../../Context/AuthProvider";
import NormalLoader from "../../Components/Loader/NormalLoader";

const MyGroupes = () => {
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  // Set the document title
  useEffect(() => {
    document.title = "My Groups | Hobby Shop";
  }, []);

  useEffect(() => {
    if (user && user.email) {
      fetch(
        `https://hobby-shop-server-side.vercel.app/groups?userEmail=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setGroups(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch user groups:", err);
          setGroups([]);
          setLoading(false);
        });
    } else {
      // If user not ready yet, keep loading or handle it here
      setGroups([]);
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <NormalLoader></NormalLoader>
  }

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
