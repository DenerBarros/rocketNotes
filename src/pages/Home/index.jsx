import { FiPlus } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
              
                <li><ButtonText title="Todos" isActive/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Node"/></li>
                
            </Menu>

            <Search>
                <Input placeholder="pesquisar pelo título"/>
            </Search>

            <Content>
                <Section title="Minhas Notas">
                    <Note data= {{ 
                        title: 'React', 
                        tags: [
                            {id: '1', name: 'react'},
                            {id: '2', name: 'node'},
                        ] 
                        }} 
                        />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar Nota
            </NewNote>

        </Container>
    );
}
