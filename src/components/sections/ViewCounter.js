import React, { useEffect, useState } from "react";
import firebase from "gatsby-plugin-firebase";
import incrementViews from "../../controllers/increment-views";

const ViewCounter = ({ id }) => {
  const [viewCount, setViewCount] = useState("");
  useEffect(() => {
    // 1 is displayed for a split second and then the correct count
    // This is a workaround
    const onViews = (newViews) => {
      setViewCount(newViews.val() === 1 ? 0 : newViews.val());
    };

    incrementViews(id);

    firebase.database().ref("/views").child(id).on("value", onViews); // listen to /views/id and on value change execute "onViews"

    return () => {
      // On loading this component, id is sent to increment-views to increment the
      // value and the returned value is stored in viewCount.
      // Upon completion, if an instance of database exists, detach it using off()
      if (firebase.database()) {
        firebase.database().ref(`/views`).child(id).off(`value`, onViews);
      }
    };
  }, [id]);

  return (
    <div style={{ color: "#7e7e7e" }}>
      {viewCount ? viewCount : "-----"} views
    </div>
  );
};

export default ViewCounter;
