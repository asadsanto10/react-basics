import nerdImage from '../assets/images/illustration.png';
import Button from './Button';
import { ButtonContainer, CardContainer, ContentContainer } from './styles/Container.style';
import { H1, Image, P, Tag } from './styles/Element.style';

export default function Card() {
  return (
    <CardContainer>
      <ContentContainer>
        <Tag color="#ff6347">EXCLUSIVE </Tag>
        <H1>React Styled Components</H1>
        <P>
          Exclusive React JS Tutorial on Styled Components where you will learn why we need this &
          how to use it.
        </P>
        <ButtonContainer>
          <Button link="https://lwsbd.link/rsc" text="Watch now" />
          <Button link="https://lwsbd.link/react" text="Github repo" />
        </ButtonContainer>
      </ContentContainer>
      <Image src={nerdImage} alt="Nerd" width="300px" />
    </CardContainer>
  );
}
