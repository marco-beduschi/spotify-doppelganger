import React from 'react'
import { List, ListItem, ListItemText, Paper } from '@material-ui/core'

const Navigation = () => {
    return (
        <Paper>
            <List component="nav">
                <ListItem button>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Browse" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Radio" />
                </ListItem>
            </List>
        </Paper>
    )
}

export default Navigation
