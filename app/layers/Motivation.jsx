import Container from "../components/Container";

const Motivation = () => {
  return (
    <Container className="pt-[120px] pb-[96px]">
      <div className="flex flex-col md:flex-row items-stretch gap-x-[80px]">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between w-full md:w-[40%]">
          <div>
            <h2 className="motivation_heading">motivation</h2>
            <h3 className="motivation_subheading">
              THE JOURNEY OF CREATIVE INSPIRATION
            </h3>
          </div>

          <div className="mb-[30px] flex items-center gap-x-[8px] mt-10 md:mt-0">
            <div className="w-[18px] h-[18px] rounded-full bg-white flex-shrink-0"></div>
            <h3 className="story_title flex-shrink-0">My motto</h3>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-[60%] flex flex-col justify-between">
          <div className="space-y-[20px]">
            <p className="motivation_pagaraph mt-2">
              As a CSE student, I loved solving logical problems and writing
              code. But deep down, I felt something was missing. I wanted to
              create things people could see, feel, and connect with.
            </p>

            <p className="motivation_pagaraph">
              Then one day, a friend introduced me to Figma. At first, it seemed
              like just another tool. But once I started experimenting, moving
              shapes, playing with colors, aligning elements, something clicked.
              I didn’t realize how much time had passed. Designing felt natural,
              exciting, even therapeutic. I could sit for hours without noticing
              the clock, fully lost in the process.
            </p>

            <p className="motivation_pagaraph">
              That small spark of curiosity turned into something much bigger. I
              began learning everything I could about UI/UX. No formal classes.
              Just pure drive. I read articles, watched tutorials, downloaded
              design eBooks, followed designers I admired, and practiced almost
              daily. What started as an interest quickly grew into a passion,
              and that passion became my path. I’m still learning, still
              exploring, and still just as excited as I was that very first day
              I opened Figma.
            </p>
          </div>

          <p className="motivation_italic mt-[48px] self-end">
            “Design is not just what it looks like and feels like. Design is how
            it works."
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Motivation;
