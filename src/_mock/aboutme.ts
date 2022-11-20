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
              I'm Mrabet Ahmed, a ${getage()} years old AI engineer student, from Tangier Morocco 🇲🇦. 
            `,
      icon: "🧔🏻",
    },
    {
      id: 2,
      text: ` 
              I'm an Artificial Intelligence Engineer student at National School of Computer Science 
              and Systems Analysis (ENSIAS in french).
            `,
      icon: "🧑🏼‍🎓",
    },
    {
      id: 3,
      text: `
              I enjoy being challenged and engaging with projects that require me to work outside
              my comfort zone and knowledge set, as continuing to learn more and more the world of
              Ariificial Intelligence.
           `,
      icon: "🎯",
    },
    {
      id: 4,
      text: ` 
              I'm fluent with Python, R, Julia and Java. 
            `,
      icon: "💻",
    },
    {
      id: 5,
      text: `
              My field of Interest are building new Projects and Products in various areas 
              related to Computer Vision and Natural Language Processing.
            `,
      icon: "📈",
    },
    {
      id: 6,
      text: `
              whenever possible, i also apply my passion for developing products with multiple 
              different frameworks and technologies, like Tensorflow, Scikit-learn, Django, Flask ..
            `,
      icon: "🐋",
    }
    
  ],
};
