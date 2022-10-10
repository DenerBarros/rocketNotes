import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';
import { Container, Profile, Loggout } from './styles';
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { useNavigate } from 'react-router-dom';

export function Header(){
    const { signOut, user } = useAuth();
    const navigation = useNavigate();

    function handleSignOut(){
        navigation("/");
        signOut();
    }

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

            <Loggout onClick={handleSignOut}>
                <RiShutDownLine />
            </Loggout>
        </Container>
    );
}