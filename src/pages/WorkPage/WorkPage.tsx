import projects from "./../../data.ts";

const WorkPage = () => {
  return (
    <section className=" h-full p-4 text-lg">
      <div className="relative">
        <div className="pf-container absolute left-0 right-0 top-0 z-0 flex h-full justify-between sm:justify-evenly sm:px-0">
          <div className="h-full w-[30px] bg-yellow"></div>
          <div className="h-full w-[30px] bg-yellow"></div>
          <div className="h-full w-[30px] bg-yellow"></div>
          <div className="h-full w-[30px] bg-yellow"></div>
          <div className="hidden h-full w-[30px] bg-yellow sm:block"></div>
          <div className="hidden h-full w-[30px] bg-yellow sm:block"></div>
          <div className="hidden h-full w-[30px] bg-yellow sm:block"></div>
          <div className="hidden h-full w-[30px] bg-yellow sm:block"></div>
        </div>

        <div className="z-100 relative flex h-screen flex-col justify-center gap-x-4 pt-[100px] md:flex-row md:items-center">
          <h2 className="mb-4 text-6xl uppercase md:flex-1 md:text-8xl">
            Projects
          </h2>
          <p className="text-2xl leading-none md:flex-1 lg:text-3xl">
            Below is a list of selected projects I have done. If you have any
            questions feel free to&nbsp;
            <a
              href="mailto: ozerova.lenka@gmail.com"
              className="hover:text-yellow"
            >
              PING ME
            </a>
            .
          </p>
        </div>
      </div>

      <div className="mb-10">
        <ul className="uppercase ">
          {projects.map((project) => (
            <li key={project.id} className="mb-4 h-screen w-full md:mb-2 ">
              <div className="flex flex-col gap-x-4 hover:bg-gray-300 md:flex-row md:items-center">
                <div className="flex flex-1 flex-col justify-end md:block ">
                  <h3 className="pt-2 text-4xl">{project.name}</h3>
                  <p className="py-4 leading-none">{project.description}</p>
                  <div className="flex justify-between">
                    {project.live.length === 0 ? (
                      <div className="w-12">-</div>
                    ) : (
                      <a
                        className="text-3xl hover:text-yellow"
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LIVE
                      </a>
                    )}
                    <a
                      className="text-3xl hover:text-green"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col items-center justify-center overflow-hidden bg-black md:h-[320px]">
                  <img src={project.image} alt={`${project.name} screenshot`} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="mb-10 text-center text-3xl uppercase">
        see more apps&nbsp;
        <a
          className="underline hover:text-red"
          href="https://elen-oz.notion.site/About-Me-bbfdf9a7e6c54669829923d14b6cd7f6?pvs=4"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        &nbsp;or&nbsp;
        <a
          href="mailto: ozerova.lenka@gmail.com"
          className=" underline hover:text-yellow"
        >
          ping me
        </a>
      </p>
    </section>
  );
};
export default WorkPage;
