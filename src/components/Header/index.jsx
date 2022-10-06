import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Loggout } from './styles';

export function Header(){
    return (
        <Container>
            <Profile to="/profile">
                <img 
                src="https://github.com/DenerBarros.png" 
                alt="Foto do usuário"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Dener Barros</strong>
                </div>
            </Profile>

            <Loggout>
                <RiShutDownLine />
            </Loggout>
        </Container>
    );
}