import firebase from "gatsby-plugin-firebase";

const incrementViews = async () => {
  const ref = firebase.database().ref(`data/lists`);

  ref.transaction(() => {
    return [
      {
        title: "Tea Leaves",
        items: ["Ahmad Tea", "Harney & Sons Lovers Leap", "Lady Grey"],
      },
      {
        title: "Favorite NBA Players",
        items: [
          "Jimmy Butler",
          "Damian Lilliard",
          "Lebron James",
          "Trae Young",
          "Boban Marjanovic",
        ],
      },
      {
        title: "Apps On My Phone Right Now",
        items: ["Kitchen Stories", "Things 3", "Spark", "Threader", "Among Us"],
      },
      {
        title: "Apps On My Phone Right Now",
        items: ["Kitchen Stories", "Things 3", "Spark", "Threader", "Among Us"],
      },
      {
        title: "Apps On My Phone Right Now",
        items: ["Kitchen Stories", "Things 3", "Spark", "Threader", "Among Us"],
      },
      {
        title: "Apps On My Phone Right Now",
        items: ["Kitchen Stories", "Things 3", "Spark", "Threader", "Among Us"],
      },
      {
        title: "Apps On My Phone Right Now",
        items: ["Kitchen Stories", "Things 3", "Spark", "Threader", "Among Us"],
      },
    ];
  });
};

export default incrementViews;
