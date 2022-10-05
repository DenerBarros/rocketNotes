import { Container, Links } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';

export function Details() {

  return(
    <Container>     
      <Header />
      <Section title="Links úteis">
        <Links>
          <li>
            <a href="http://github.com/DenerBarros">http://github.com/DenerBarros</a>
          </li>

          <li>
            <a href="http://github.com/DenerBarros">http://github.com/DenerBarros</a>
          </li>          
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="nodejs"/>
      </Section>

      <Button title="Voltar"/>
    </Container>
    
  )
}