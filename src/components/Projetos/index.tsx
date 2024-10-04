import { useEffect, useState } from "react";
import { Container } from "../../styles";
import InfoRepo from "../../models/InfoRepo";
import * as S from "./styles";

const Projetos = () => {
  const username = "OrdepFelipe";
  const [repos, setRepos] = useState([]); // Estado para armazenar os repositórios

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const data = await res.json(); // Chama o método json()
        setRepos(data); // Armazena os dados no estado
      } catch {
        console.log("Erro");
      }
    };
    fetchRepos();
  }, [username]);

  return (
    <Container>
      <S.HeaderSection>
        <h2>Projetos</h2>
        <p>Projetos desenvolvidos durante o curso</p>
      </S.HeaderSection>
      <S.Section id="projetos">
        {repos.map((repo: InfoRepo) => (
          <S.Card key={repo.id}>
            <h3>{repo.name}</h3>
            <p>Linguagem usada: {repo.language}</p>
            <a href={repo.html_url}>Link</a>
          </S.Card>
        ))}
      </S.Section>
    </Container>
  );
};

export default Projetos;
