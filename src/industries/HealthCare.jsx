import React from "react";

function HealthCare() {
  const data = {
    img: "/images/ind02.jpg",
    p1: "We listen. We advise. We design, together. Happy customers and ongoing relationships are what we strive for. Success is measured by results, the most important being how our clients feel about their experience with us.",
    p2: "With new research and development in healthcare, the demand for technology has grown manifold. Netspeq Solutions understands the need for healthcare organizations to put into operation digital technologies to help manage customer experience effectively and efficiently. From the back office to the doctor’s office to the patients, we help our clients deliver better and effortless healthcare systems. Our committed professionals work tirelessly to deliver the power of technology to healthcare systems in this demanding digital world. Netspeq Solutions offers high-impact, personalized, and efficient solutions to help healthcare organizations transform the customer experience that they provide to their medical staff and their patients.",
    p3: "High-quality health care helps prevent diseases and improve quality of life. Healthy People 2030 focuses on improving health care quality and making sure all people get the health care services they need.",
    p4: "Helping health care providers communicate more effectively can help improve health and well-being. Strategies to make sure health care providers are aware of treatment guidelines and recommended services are also key to improving health.",
    p5: "Some people don’t get the health care services they need because they don’t have health insurance or live too far away from providers who offer them. Interventions to increase access to health care services — like lowering costs, improving insurance coverage, and increasing use of telehealth — can help more people get the care they need.",
  };

  return (
    <div className="w-full space-y-3 col-span-2 px-8 md:px-0">
      <div>
        <img src={data.img} alt="" />
      </div>
      <div className="space-y-2">
        <p className="text-xs text-neutral-600 leading-6">{data.p1}</p>
        <p className="text-xs text-neutral-600 leading-6">{data.p2}</p>
        <p className="text-xs text-neutral-600 leading-6">{data.p3}</p>
        <p className="text-xs text-neutral-600 leading-6">{data.p4}</p>
        <p className="text-xs text-neutral-600 leading-6">{data.p5}</p>
      </div>
    </div>
  );
}

export default HealthCare;
