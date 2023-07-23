import {
  Button,
  Title,
  Description,
  Circle,
  Avatar,
  Header,
  ScrollUp,
  SocialLink,
} from "ui";

export default function Page() {
  return (
    <>
      <Header.Root>
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
      </Header.Root>

      <Title.Root>
        <Title.Top name="Hállex Costa" />
        <Title.Down content="backend developer" />
      </Title.Root>

      <Description />

      <Avatar>
        <Circle.Root size="lg" />

        <Circle.Root
          size="sm"
          className="rotate-45 bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-700 top-24 right-0"
        />

        <Circle.Root size="md" className="-top-14 right-24">
          <Circle.BackgroundImage url="https://github.com/hallexcosta.png" />
        </Circle.Root>
      </Avatar>

      <Button />

      <ScrollUp />
    </>
  );
}
