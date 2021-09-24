import React from 'react'
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import EmailIcon from '@material-ui/icons/Email';

import useStyles from './styles';

const Menu = ({ setMenu }) => {
    const classes = useStyles();

    return (
        <Box sx={{width: 230, height: '100%', backgroundColor: '#191923'}}>
            <Box className={classes.mobileMenuHeader}>
                <h3>Menu</h3>
            </Box>
            <List sx={{width: 230}}>
                <ListItem disablePadding to="/" component={Link} onClick={() => {setMenu(false)}}>
                    <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon className={classes.listItem} />
                    </ListItemIcon>
                    <ListItemText className={classes.listItem} primary="Home" />
                    </ListItemButton >
                </ListItem>
                <Divider className={classes.divider} />
                <ListItem disablePadding to="/projetos" component={Link} onClick={() => {setMenu(false)}}>
                    <ListItemButton>
                    <ListItemIcon>
                        <AppsIcon className={classes.listItem} />
                    </ListItemIcon>
                    <ListItemText className={classes.listItem} primary="Projetos" />
                    </ListItemButton>
                </ListItem>
                <Divider className={classes.divider} />
                <ListItem disablePadding to="/contato" component={Link} onClick={() => {setMenu(false)}}>
                    <ListItemButton>
                    <ListItemIcon>
                        <EmailIcon className={classes.listItem} />
                    </ListItemIcon>
                    <ListItemText className={classes.listItem} primary="Contato" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}

export default Menu;