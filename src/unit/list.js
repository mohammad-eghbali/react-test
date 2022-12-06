import React, { useEffect, useState } from "react";
import "./list.css";

export default function FollowersList() {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      const res = await fetch("https://randomuser.me/api/?results=5");
      const data = await res.json();
      setFollowers(data.results);
    };

    fetchFollowers();
  }, []);

  return (
    <div className="followerslist-container">
      <div>
        {followers.map((follower, index) => (
          <div
            className="follower-item"
            data-testid={`follower-item-${index}`}
            key={index}
          >
            <img src={follower.picture.large} alt="" />
            <div className="followers-details">
              <div className="follower-item-name">
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
