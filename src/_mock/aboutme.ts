// my age
export function getAge() {
  const birthYear = 2002;
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

function getage() {
  const birthYear = 2002;
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

export const aboutMe = {
  title: "Let me introduce myself",
  details: [
    {
      id: 1,
      text: ` 
              I'm Mrabet Ahmed, a ${getage()} years old AI engineer student, from Tangier, Morocco 🇲🇦. 
            `,
      icon: "🧔🏻",
    },
    {
      id: 2,
      text: ` 
              I'm currently studying Artificial Intelligence Engineering at the National School of 
              Computer Science and Systems Analysis (ENSIAS in French).
            `,
      icon: "🧑🏼‍🎓",
    },
    {
      id: 3,
      text: `
              I'm an extremely friendly and approachable person who loves collaborating with others 
              to create innovative projects in the world of Artificial Intelligence. My passion 
              for AI spans across various domains, with a particular emphasis on Computer Vision 
              and Reinforcement Deep Learning. I am driven by the desire to develop useful 
              applications that make a positive and meaningful impact on people's lives. 
              I thrive on working with diverse teams, sharing knowledge, and learning from each 
              other to accomplish our goals together.
           `,
      icon: "🎯",
    },
    {
      id: 4,
      text: `
              In my leisure time, I have a variety of interests that help me maintain a well-
              rounded life.
              I am an avid reader and enjoy diving into books to expand my knowledge and explore 
              new ideas.
              Art also plays an important role in my life, as I find it to be a great way to 
              express my creativity.
              Music is another passion of mine, and I enjoy playing the violin and piano, 
              which allows me to unwind and immerse myself in the beauty of sound. Additionally, 
              I believe in staying active and healthy, so I make it a point to hit the gym 
              regularly, keeping my body and mind in top shape.
            `,
      icon: "🐋",
    }
  ],
};
