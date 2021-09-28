import React, { useState, useRef } from 'react'
import { Container, Box, Grid, TextField, Button, Snackbar , Alert } from '@material-ui/core';
import Card from '../../components/Card/Card';
import emailjs from 'emailjs-com';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';

import useStyles from './styles';

const Contato = () => {
    const classes = useStyles();
    const form = useRef();

    // Alertas
    const [openAlert, setOpenAlert] = useState(false);
    const [openErrorAlert, setOpenErrorAlert] = useState(false);
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        } setOpenAlert(false);
    }

    const handleCloseErrorAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        } setOpenErrorAlert(false);
    }

    const handleOpenAlert = () => {setOpenAlert(true)}
    const handleOpenErrorAlert = () => {setOpenErrorAlert(true)}

    // Enviar email
    const sendEmail = (e) => {
        e.preventDefault();

        var nome = document.getElementById('form-nome').value;
        var telefone = document.getElementById('form-telefone').value;
        var email = document.getElementById('form-email')
        var mensagem = document.getElementById('form-mensagem').value;

        if(nome !== null && nome !== '' && telefone !== null && telefone !== '' && email !== null && email !== '' && mensagem !== null && mensagem !== '') {
            emailjs.sendForm('service_rqbx5do', 'template_nrhg95c', form.current, process.env.REACT_APP_EMAIL_JS_KEY)
            .then((result) => {
                handleOpenAlert();
            }, (error) => {
                alert('Erro no envio do email!');
            });
        } else {
            handleOpenErrorAlert();
        }
    };

    return (
        <Container className={classes.mainContato}>
            <Card title="contato" />

            <Box>
                <p className={classes.divText}>Ficou interessado e quer entrar em contato?</p>
                <p className={classes.divText}>Preencha o formulário abaixo, te responderei o mais breve possível</p>
            </Box>

            <form ref={form} onSubmit={sendEmail}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Button fullWidth color="secondary" href="https://wa.me/+5551993896982" target="_blank" startIcon={<WhatsAppIcon/>} sx={{textTransform: 'none'}} variant="contained">
                            Whatsapp
                        </Button>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Button fullWidth color="secondary" href="https://www.instagram.com/dududornelees/" target="_blank" startIcon={<InstagramIcon/>} sx={{textTransform: 'none'}} variant="contained">
                            Instagram
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField name="nome" id="form-nome" fullWidth color="secondary" InputLabelProps={{ className: classes.cssLabel }} InputProps={{ className: classes.contatoInputs }} size="small" label="Nome:" variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField name="telefone" id="form-telefone" fullWidth color="secondary" InputLabelProps={{ className: classes.cssLabel }} InputProps={{ className: classes.contatoInputs }} size="small" label="Telefone:" variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField name="email" id="form-email" type="email" fullWidth color="secondary" InputLabelProps={{ className: classes.cssLabel }} InputProps={{ className: classes.contatoInputs }} size="small" label="Email:" variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField name="mensagem" id="form-mensagem" fullWidth color="secondary" InputLabelProps={{ className: classes.cssLabel }} InputProps={{ className: classes.contatoInputs }} size="small" multiline rows={5} label="Mensagem:" variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <Button type="submit" fullWidth variant="contained" color="secondary" sx={{textTransform: 'none'}} size="small">Enviar</Button>
                    </Grid>
                </Grid>
            </form>

            <Snackbar open={openAlert} onClose={handleCloseAlert} autoHideDuration={2500} >
                <Alert sx={{ width: '100%' }} onClose={handleCloseAlert} >Email enviado com sucesso!</Alert>
            </Snackbar>

            <Snackbar open={openErrorAlert} onClose={handleCloseErrorAlert} autoHideDuration={2500} >
                <Alert sx={{ width: '100%' }} severity="error" onClose={handleCloseErrorAlert} >Preencha todos os campos!</Alert>
            </Snackbar>
        </Container>
    )
}

export default Contato;