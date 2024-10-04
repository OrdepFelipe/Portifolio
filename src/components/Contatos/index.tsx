import { Container } from "../../styles";
import { Url } from "../../utils/UrlImg";
import * as S from "./styles";

const Contatos = () => {
  return (
    <Container>
      <S.Contatos id="contatos">
        <h3>Onde me encontrar?</h3>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/pedro-felipe-abreu/">
              <img src={Url.lkn} alt="Logo Linkdn" />
            </a>
          </li>
          <li>
            <a href="https://github.com/OrdepFelipe">
              <img src={Url.gb} alt="Logo Github" />
            </a>
          </li>
        </ul>
      </S.Contatos>
    </Container>
  );
};

export default Contatos;
