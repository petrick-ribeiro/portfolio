import GitHubSVGIcon from "../../../../assets/svg/GitHubSVGIcon";
import GmailSVGIcon from "../../../../assets/svg/GmailSVGIcon";
import LinkedinSVGIcon from "../../../../assets/svg/LinkedinSVGIcon";
import Icon from "../../../../components/Icon";
import profileImage from "/img/me.jpeg";
import wavingGif from "/img/waving.gif";

const HomeCard = () => {
  return (
    <section className="space-y-4">
      <div className="space-y-8 font-bold text-4xl">
        <img className="object-cover h-64 w-64 rounded-full shadow-lg" src={profileImage} alt="" />

        <div className="space-x-2">
          <div className="flex space-x-2">
            <img className="w-10" src={wavingGif} />

            <h1>Hello World,</h1>
          </div>

          <h1>Eu sou Petrick</h1>
        </div>
      </div>

      <p className="font-roboto-serif text-lg">
        Entusiasta de Tecnologia,
        <br />
        Engenharia de Software e DevOps.
      </p>

      <div className="flex space-x-4">
        <Icon link="https://github.com/petrick-ribeiro">
          <GitHubSVGIcon width={28} />
        </Icon>

        <Icon link="https://www.linkedin.com/in/petrick-ribeiro">
          <LinkedinSVGIcon width={28} />
        </Icon>

        <Icon link="mailto:hello.petrick@gmail.com">
          <GmailSVGIcon width={28} />
        </Icon>
      </div>
    </section>
  );
};

export default HomeCard;
