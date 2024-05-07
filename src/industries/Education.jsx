import React from "react";

function Education() {
  const data = {
    img: "/images/ind01.jpg",
    p1: "As a developing economy, India has a lot of opportunities to transform the way it educates its children. The education sector is the basis for every nation’s growth. With older methodologies, children cannot pay enough attention these days. They have a lot of electronic gadgets to play around with. The need of the hour is to provide quality education incorporating the ongoing boom in technology",
    p2: "We help educational institutions transform with our innovative solutions. India had 37.4 million students enrolled in higher education in 2018-19. Gross Enrolment Ratio in higher education reached 26.3% in FY19. In 2020-21, there were 9,700 total AICTE approved institutes. Of the total, there were 4,100 undergraduate, 4,951 postgraduate and 4,514 diploma courses in AICTE approved institutes.India holds an important place in the global education industry. India has one of the largest networks of higher education institutions in the world. However, there is still a lot of potential for further development in the education system.",
  };

  return (
    <div className="w-full space-y-3 col-span-2 px-8 md:px-0">
      <div>
        <img src={data.img} alt="" />
      </div>
      <div className="space-y-2">
        <p className="text-xs text-neutral-600 leading-6">{data.p1}</p>
        <p className="text-xs text-neutral-600 leading-6">{data.p2}</p>
      </div>
    </div>
  );
}

export default Education;
