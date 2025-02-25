import './App.css';
import Title from './Components/Title/Title';
import SubTitle from './Components/SubTitle/SubTitle';
import Paragraph from './Components/Paragraph/Paragraph';
import SkillCard from './Components/SkillCard/SkillCard';
import AcademicBackground from './Components/AcademicBackground/AcademicBackground';
import ProjectsDeveloped from './Components/ProjectsDeveloped/ProjectsDeveloped';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="Portfolio">
      <Title text="Rahyan Ramos de Oliveira" />
      <SubTitle text="Sobre Mim" />
      <Paragraph text="Olá, Eu sou Rahyan Ramos de Oliveira." />
      <Paragraph text="Tenho 19 anos e sou natural de Ji-Paraná - RO. Sou formado como técnico em Informática pelo IFRO Campus Ji-Paraná e, atualmente, curso o 4º período de Análise e Desenvolvimento de Sistemas no mesmo campus." />
      <Paragraph text="Tive meu primeiro contato com programação aos 14 anos e, desde então, tenho me dedicado a esse universo. Há quase 2 anos, atuo como desenvolvedor de sistemas em uma multinacional de transportes, onde crio automações para otimizar processos empresariais – desde solicitações simples entre unidades e a matriz financeira até o desenvolvimento de sistemas heurísticos que aprimoram a utilização dos colaboradores em nível nacional." />
      <Paragraph text="Domino tecnologias como Python e JavaScript e já tive a oportunidade de trabalhar com React durante o Projeto de Informatização Escolar, realizado no IFRO, no período em que cursava o Técnico em Informática." />
      <SubTitle text="Habilidades" />
      <div className="skills-container">
        <SkillCard 
          logo="https://cdn.iconscout.com/icon/free/png-256/python-3521655-2945099.png" 
          name="Python" 
          description="Desenvolvimento de algoritmos avançados para otimizar processos complexos, empregando métodos heurísticos para aprimorar a tomada de decisão." 
        />
        <SkillCard 
          logo="https://img.icons8.com/?size=48&id=108784&format=png" 
          name="JavaScript" 
          description="Automação de processos manuais, integrando setores e unidades em uma plataforma digital centralizada para agilizar solicitações internas." 
        />
        <SkillCard 
          logo="https://img.icons8.com/?size=80&id=rgPSE6nAB766&format=png" 
          name="MySQL" 
          description="Gerenciamento eficiente de grandes volumes de dados em múltiplos setores, garantindo melhor desempenho e confiabilidade." 
        />
        <SkillCard 
          logo="https://img.icons8.com/?size=48&id=DUsKDDZsg8FT&format=png" 
          name="Redis" 
          description="Implementação de cache para acelerar o processamento de grandes quantidades de dados e evitar gargalos em algoritmos." 
        />
        <SkillCard 
          logo="https://img.icons8.com/?size=48&id=22813&format=png" 
          name="Docker" 
          description="Containerização de aplicações para padronizar ambientes, simplificar implantações e facilitar escalabilidade." 
        />
        <SkillCard 
          logo="https://img.icons8.com/?size=48&id=20906&format=png" 
          name="Git" 
          description="Versionamento de código para colaboração eficiente, rastreamento de alterações e segurança das diferentes versões do projeto." 
        />
        <SkillCard 
          logo="https://img.icons8.com/?size=80&id=asWSSTBrDlTW&format=png" 
          name="React" 
          description="Criação de interfaces dinâmicas e escaláveis com foco em alta performance e experiência de usuário otimizada." 
        />
        <SkillCard 
          logo="https://img.icons8.com/?size=64&id=Fycm8TUhWmFU&format=png" 
          name="C#" 
          description="Desenvolvimento de aplicações robustas e escaláveis com C#, aproveitando os recursos modernos da linguagem para construir soluções eficientes, seguras e integráveis." 
        />
      </div>
      <SubTitle text="Formação Acadêmica e Certificações" />
      <div className="container">
        <AcademicBackground
          name="Técnico em Informática"
          location="IFRO - Campus Ji-Paraná"
          startDate="2020"
          endDate="2022"
          tags={['Técnico Integrado ao Ensino Médio', 'Tecnologia', 'Inovação']}
        />
        <AcademicBackground
          name="Análise e Desenvolvimento de Sistemas"
          location="IFRO - Campus Ji-Paraná"
          startDate="2023"
          endDate="Atualmente"
          tags={['Graduação', 'Tecnologia', 'Inovação']}
        />
      </div>
      <SubTitle text="Projetos desenvolvidos" />
      <div className="container">
        <ProjectsDeveloped 
          name="Projeto de Informatização Escolar"
          description="Desenvolvimento de um ambiente virtual para a gestão escolar do estado de Rondônia, integrando informações de alunos, professores e funcionários em uma plataforma centralizada."
        />
      </div>
      <SubTitle text="Contato" />
      <div className="contact-container">
        <Contact 
          socialMediaLink={"https://www.linkedin.com/in/rahyanramos/"}
          socialMediaName={"LinkedIn"}
          socialMediaIcon={"https://img.icons8.com/?size=50&id=447&format=png"}
        />
        <Contact 
          socialMediaLink={"https://github.com/RahyanRamos"}
          socialMediaName={"GitHub"}
          socialMediaIcon={"https://img.icons8.com/?size=50&id=12598&format=png"}
        />
      </div>
    </div>
  );
}

export default App;
