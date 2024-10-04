import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.Nav>
        <ul>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#skills">Skils</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contatos">Contatos</a>
          </li>
        </ul>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
