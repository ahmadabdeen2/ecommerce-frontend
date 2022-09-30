import React from "react";

const About = () => {
  const Links = [
    {
      id: 1,
      url: "https://www.ahmadabdeen.software",
      title: "Ahmad Abdeen's Portfolio",
    },
    {
      id: 2,
      url: "https://www.github.com/ahmadabdeen2",
      title: "Ahmad Abdeen on Github",
    },
    {
      id: 3,
      url: "https://www.linkedin.com/in/ahmad-abdeen-73a852156/",
      title: "Ahmad Abdeen on LinkedIn",
    },
    {
      id: 4,
      url: "https://www.twitter.com/realabdin",
      title: "Ahmad Abdeen on Twitter",
    },
    {
      id: 5,
      url: "https://www.instragram.com/ahmadabdeennn",
      title: "Ahmad Abdeen on Instagram",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-[82vh]">
      <h1 className="text-xl sm:text-3xl font-poppins text-gray-900 dark:text-gray-200 font-light py-10">
        {" "}
        About{" "}
      </h1>

      <p className="text-xl font-poppins text-gray-900 dark:text-gray-200 font-light py-2">
        {" "}
        This is a Django-React e-commerce website.{" "}
      </p>
      <p className="text-xl font-poppins text-gray-900 dark:text-gray-200 font-light py-2">
        {" "}
        Developed as a test website for my portfolio.{" "}
      </p>
      <p className="text-xl font-poppins text-gray-900 dark:text-gray-200 font-light py-2">
        {" "}
        Check out my portfolio and my social media accounts{" "}
      </p>
      {Links.map((link) => {
        return (
          <div key={link.id}>
            <p className="text-xl font-poppins text-gray-900 dark:text-gray-200 font-light py-2">
              {" "}
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                {" "}
                {link.title}{" "}
              </a>{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default About;
