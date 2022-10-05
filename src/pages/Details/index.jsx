import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';

export function Details() {

  return(
    <Container>     
      <Header />
      <main>
        <Content>        
          <ButtonText title="Excluir nota"/>
          <h1>
            Introdução ao React
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae deserunt pariatur aspernatur doloremque sapiente natus itaque fugit sequi rem cupiditate, error ullam enim, obcaecati earum quae ipsum! Minus, doloremque eaque!
          </p>
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
        </Content>
    </main> 
    </Container>
    
  )
}