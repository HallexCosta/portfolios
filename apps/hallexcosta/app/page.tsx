import {
  ButtonGradient,
  Title,
  Description,
  Circle,
  Avatar,
  Header,
  ScrollUp,
  SocialLink,
  Section,
  Container,
  Project,
  Technology,
} from "ui";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  return (
    <>
      <Header.Root>
        <Container className="justify-between">
          <Header.Content className="text-white font-medium text-2xl">
            I.M portifolio
          </Header.Content>

          <Header.Content className="text-white font-sm text-md flex gap-20">
            <a href="#projects">Projects</a>
            <a href="#technologies">Technologies</a>
            <a href="#about-me">About me</a>
          </Header.Content>

          <Header.Content className="text-white font-sm text-md flex gap-6">
            <SocialLink name="github" url="https://github.com/hallexcosta" />
            <SocialLink name="linkedin" url="https://github.com/hallexcosta" />
            <SocialLink name="instagram" url="https://github.com/hallexcosta" />
            <SocialLink name="facebook" url="https://github.com/hallexcosta" />
          </Header.Content>
        </Container>
      </Header.Root>

      <main className="mt-28">
        <Section>
          <Container>
            <div className="w-full">
              <Title.Root>
                <Title.Top name="Hállex Costa" />
                <Title.Down content="backend developer" />
              </Title.Root>

              <Description content="A FullStack Web Developer BE-heavy. Passionate about typescript programming. I am enthusiastic and committed to harnessing the power of technology to develop solutions innovative. I am always looking for ways to apply my knowledge and technology skills to solve problems and make the world a better place." />

              <div className="mt-16">
                <ButtonGradient content="Download CV" />
              </div>
            </div>

            <div className="relative -z-10">
              <Avatar>
                <Circle.Root size="lg" />

                <Circle.Root
                  size="sm"
                  className="top-24 -right-28 rotate-45 bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-700 absolute"
                />

                <Circle.Root size="md" className="-top-28 -right-10 absolute">
                  <Circle.BackgroundImage url="https://github.com/hallexcosta.png" />
                </Circle.Root>
              </Avatar>
            </div>
          </Container>

          <ScrollUp />
        </Section>

        <Section>
          <Container>
            <div className="flex flex-col mt-[152px] w-full">
              <h2
                id="projects"
                className={`${poppins.className} text-5xl text-white w-full`}
              >
                Projects
              </h2>

              <div className="grid grid-cols-2 w-full mt-16 gap-8">
                <Project
                  title="Be a Savior - Server - NGO and Donor Management System"
                  description="Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals.Be a Savior is a service provider for managing information about NGOs and donors. It provides an easy to use interface to facilitate taxpayers and sponsors who want to help or fund an incident of one or more animals."
                  imageUrl="https://github.com/HallanCosta/be-a-savior/raw/main/docs/images/telas.png"
                  previewUrl="https://google.com"
                  repositoryUrl="https://github.com/hallexcosta/be-a-savior"
                />
                <Project
                  title="NLW Setup - Habits"
                  description="The project is a Habit Tracker, that allow a user to create a new Habit and see your summary of habits completed or non-completed changing the colors tone acoordingly with progress of user."
                  imageUrl="https://github.com/HallexCosta/habits-tracker/blob/main/docs/images/web/home.png?raw=true"
                  previewUrl="https://your-habits.netlify.app/"
                  repositoryUrl="https://github.com/HallexCosta/habits-tracker"
                />

                {/* <Project
                  title="Furniture store landing page"
                  description="Responsive HTML/CSS layout for online furniture store. HTML5, CSS3
                  (SCSS)"
                  imageUrl="https://github.com/exif-js/exif-js/assets/55293671/37717c42-5aa1-41c6-94a9-8314888e42f5"
                  previewUrl="https://google.com"
                  repositoryUrl="https://github.com/hallexcosta"
                /> */}
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="flex flex-col mt-[152px] w-full">
              <h2
                id="technologies"
                className={`${poppins.className} text-5xl text-white w-full`}
              >
                Technologies
              </h2>

              <div className="grid grid-cols-3 w-full mt-16 gap-10">
                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="Git" />
                </Technology.Root>

                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="Typescript" />
                </Technology.Root>

                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="Node.js" />
                </Technology.Root>

                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="PostgreSQL" />
                </Technology.Root>

                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="MySQL" />
                </Technology.Root>

                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="Docker" />
                </Technology.Root>

                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="AWS" />
                </Technology.Root>

                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="Digital Ocean" />
                </Technology.Root>

                <Technology.Root>
                  <Technology.Bullet />
                  <Technology.Content text="PHP" />
                </Technology.Root>
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="flex flex-col mt-[152px] w-full">
              <h2
                id="about-me"
                className={`${poppins.className} text-5xl text-white w-full`}
              >
                About me
              </h2>

              {/* <div>
  <Timeline.Root>
    <Timeline.Separator>
      <Timeline.Dot />
      <Timeline.Connector />
    </Timeline.Separator>    
    <Timeline.Content>
      Eat
    </Timeline.Content>
  </Timeline.Root>
</div> */}
              {/* <ol className="border-l-4 border-white mt-16">
                <li>
                  <div className="flex-start flex items-center pt-3 relative">
                    <div className="-ml-[14px] mr-3 h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-400"></div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-300">
                      01.07.2021
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="mb-1.5 text-xl font-semibold text-white">
                      Title of section 1
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque scelerisque diam non nisi semper, et elementum
                      lorem ornare. Maecenas placerat facilisis mollis. Duis
                      sagittis ligula in sodales vehicula.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="flex-start flex items-center pt-2">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-300">
                      13.09.2021
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="mb-1.5 text-xl font-semibold text-white">
                      Title of section 2
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      Libero expedita explicabo eius fugiat quia aspernatur
                      autem laudantium error architecto recusandae natus
                      sapiente sit nam eaque, consectetur porro molestiae ipsam
                      an deleniti.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="flex-start flex items-center pt-2">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-300">
                      25.11.2021
                    </p>
                  </div>
                  <div className="ml-4 mt-2 pb-5">
                    <h4 className="mb-1.5 text-xl font-semibold text-white">
                      Title of section 3
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      Voluptatibus temporibus esse illum eum aspernatur, fugiat
                      suscipit natus! Eum corporis illum nihil officiis tempore.
                      Excepturi illo natus libero sit doloremque, laborum
                      molestias rerum pariatur quam ipsam necessitatibus
                      incidunt, explicabo.
                    </p>
                  </div>
                </li>
              </ol> */}
            </div>
          </Container>
        </Section>
      </main>

      <footer className="mt-16"></footer>
    </>
  );
}
