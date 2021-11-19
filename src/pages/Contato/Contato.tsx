import { useState } from 'react';
import TitleDesc from 'components/TitleDesc/TitleDesc';
import Input from 'react-phone-number-input/input';

// Styles
import { ContatoStyle } from './styles';
import { Container } from 'styles/Global';

// Icons
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Contato: React.FC = () => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const sendEmail = () => {
        // Criar função para enviar email
        console.log(nome);
        console.log(telefone);
        console.log(email);
        console.log(mensagem);
    }

    return (
        <ContatoStyle>
            <Container className="contato__container">
                <TitleDesc 
                    title="contato" 
                    firstDesc="Ficou interessado e quer entrar em contato?" 
                    secondDesc="Preencha o formulário abaixo, te responderei o mais rápido possível!" 
                />

                <div className="contato__form__container">
                    <div className="form__link-buttons">
                        <a href="https://wa.me/+5551993896982" target="_blank" rel="noreferrer">
                            <FaWhatsapp /> Whatsapp
                        </a>

                        <a href="https://www.instagram.com/dududornelees/" target="_blank" rel="noreferrer">
                            <FaInstagram /> Instagram
                        </a>
                    </div>

                    <form>
                        <input 
                            name="nome" 
                            type="nome" 
                            placeholder="Nome:"
                            value={nome}
                            onChange={(e: any) => setNome(e.target.value)}
                        />

                        <Input 
                            placeholder="Telefone:"
                            defaultCountry="BR"
                            value={telefone}
                            onChange={(e: any) => {setTelefone(e)}}
                        />

                        <input 
                            name="email" 
                            type="email" 
                            placeholder="Email:" 
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                        />

                        <textarea 
                            name="mensagem" 
                            placeholder="Mensagem:" 
                            rows={10}
                            value={mensagem}
                            onChange={(e: any) => setMensagem(e.target.value)}
                        />

                        <button type="button" onClick={() => {sendEmail()}}>
                            Enviar
                        </button>
                    </form>
                </div>
            </Container>
        </ContatoStyle>
    )
}

export default Contato;