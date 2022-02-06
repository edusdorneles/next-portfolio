import { useState } from 'react';
import TitleDesc from 'components/TitleDesc/TitleDesc';
import Input from 'react-phone-number-input/input';
import emailjs from 'emailjs-com';

// Toast envio do email
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styles
import { ContatoStyle } from './styles';
import { Container } from 'styles/Global';

// Icons
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Contato: React.FC = () => {
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    // Função para envio de email
    const sendEmail = async () => {
        if(nome && celular) {
            const serviceId: string = process.env.REACT_APP_EMAIL_JS_SERVICE_ID as string;
            const templateId: string = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID as string;        
            const userId: string = process.env.REACT_APP_EMAIL_JS_USER_ID as string;

            const params = {
                nome: nome,
                telefone: celular,
                email: email,
                mensagem: mensagem
            }

            await toast.promise(
                emailjs.send(serviceId, templateId, params, userId)
                .then((response) => {
                    console.log('Sucesso no envio: ', response.status, response.text);                

                }, (err) => {
                    console.log('Falha no envio: ', err);                
                }),

                {
                    pending: 'Enviando email, aguarde!',
                    success: 'Email enviado!',
                    error: 'Erro no envio!'
                }
            );

            setNome('');
            setCelular('');
            setEmail('');
            setMensagem('');
        } else {
            toast.error('Preencha todos os campos!');
        }
    }

    return (
        <ContatoStyle>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

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

                    <form method="POST">
                        <input
                            name="nome" 
                            type="nome" 
                            placeholder="Nome: *"
                            value={nome}
                            onChange={(e: any) => setNome(e.target.value)}
                        />

                        <Input 
                            placeholder="Celular: *"
                            defaultCountry="BR"
                            value={celular}
                            onChange={(e: any) => {setCelular(e)}}
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