import { Container } from "../../styles";
import * as S from "./styles";

const Hero = () => {
  return (
    <Container>
      <S.Section id="sobre">
        <S.Sobre>
          <h2>Olá, me chamo Pedro</h2>
          <p>
            Sou formado em Arquivologia e atualmente estou buscando migrar de
            área. Atualmente, estou fazendo o curso de formação Full Stack na
            EBAC.
          </p>
        </S.Sobre>
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQEKNgH7MxGQXA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705265582400?e=1733356800&v=beta&t=et6ofu-L5KncH9H-T55FIi7E3MHC22QrHbxx0rwUgdk"
          alt=""
        />
      </S.Section>
    </Container>
  );
};

export default Hero;
