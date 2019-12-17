const entries = [
  {
    id: 0,
    title: "treep",
    used: ["React Native", "Node"],
    content: [
      {
        image: `${process.env.PUBLIC_URL}/images/1.jpg`,
        title: "Users can check course data based on what others said before."
      },
      {
        image: `${process.env.PUBLIC_URL}/images/2.jpg`,
        title:
          "Also, users can check how good is a teacher based on certain metrics."
      }
    ],
    from: "2019"
  },
  {
    id: 0,
    title: "Big Sister",
    url: "https://github.com/asimonv/rn-bigsister",
    used: ["React Native", "Node"],
    content: [
      {
        video: `${process.env.PUBLIC_URL}/videos/bigsister.webm`,
        title:
          "BigSister is an app where users can get knowledge about themselves (and how companies could profile them) based on their social media data processed through IBM's Watson Personality Insights API."
      }
    ],
    from: "2019"
  }
];

export default entries;
