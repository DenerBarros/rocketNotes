import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';
import { Container, Profile, Loggout } from './styles';
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header(){
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    return (
        <Container>
            <Profile to="/profile">
                <img 
                src={avatarUrl} 
                alt="Foto do usuário"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Dener Barros</strong>
                </div>
            </Profile>

            <Loggout onClick={signOut}>
                <RiShutDownLine />
            </Loggout>
        </Container>
    );
}