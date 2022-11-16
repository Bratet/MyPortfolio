import bashPng from "../assets/languages/bash.png";
import djangoRestFrameworkPng from "../assets/languages/django-rest-framework.png";
import djangoPng from "../assets/languages/django.png";
import dockerPng from "../assets/languages/docker.png";
import gitPng from "../assets/languages/git.png";
import githubPng from "../assets/languages/github.png";
import csharpPng from "../assets/languages/C#.png";
import netlifyPng from "../assets/languages/netlify.png";
import postgresqlPng from "../assets/languages/postgresql.png";
import pythonPng from "../assets/languages/python.png";
import rPng from "../assets/languages/r.png";
import juliaPng from "../assets/languages/julia.png";
import sqlitePng from "../assets/languages/sqlite.png";
import cplusPng from "../assets/languages/c++.png";
import cPng from "../assets/languages/c.png";
import javaPng from "../assets/languages/java.png";
import scikitPng from "../assets/languages/scikitlearn.jpg";
import tensorflowPng from "../assets/languages/tensorflow.png";
import flaskPng from "../assets/languages/flask.png";
import mongodbPng from "../assets/languages/mongodb.jpg";

// --------------------------------------------------------------------------------------------------------------------

export const tech = [
  {
    title: "Technologies & Tools",
    description:
      "For me, those are some of the tech & tools that i like to use on my daily work, and which I really enjoy using them on the different projects.",
    data: [
      {
        type: "Programming languages",
        png: [
          pythonPng,
          cPng,
          cplusPng,
          javaPng,
          juliaPng,
          bashPng,
        ],
      },
      {
        type: "Frameworks & libraries",
        png: [
          scikitPng,
          tensorflowPng,
          djangoPng,
          djangoRestFrameworkPng,
          flaskPng,
        ],
      },
      {
        type: "Tools & services",
        png: [
          postgresqlPng,
          sqlitePng,
          mongodbPng,
          gitPng,
          githubPng,
          netlifyPng,
          dockerPng,
        ],
      },
    ],
  },
];
