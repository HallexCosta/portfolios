import {
  Button,
  Title,
  Description,
  Circle,
  Avatar,
  Header,
  ScrollUp,
  SocialLink,
  Section,
  Container,
} from "ui";

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
        <Section className="px-2 flex flex-row w-full">
          <Container>
            <div>
              <Title.Root>
                <Title.Top name="Hállex Costa" />
                <Title.Down content="backend developer" />
              </Title.Root>

              <Description />

              <Button content="Download CV" />
            </div>

            <div className="relative -z-10 -ml-[100px]">
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
      </main>
    </>
  );
}
