import React from 'react'
import Grid from '@material-ui/core/Grid'
import {
    List,
    ListItem,
    ListItemText,
    Box,
    Paper,
    Typography,
    Button,
    IconButton,
} from '@material-ui/core'
import Navigation from '../components/Navigation/Navigation'

const Home = () => {
    const YourLibraryAndPlaylists = () => {
        return (
            <Paper>
                <Paper>
                    <Typography variant="body2">YOUR LIBRARY</Typography>
                    <List>
                        <ListItem button>
                            <ListItemText>Made For You</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText>Recently Played</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText>Liked Songs</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText>Albuns</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText>Artists</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText>Podcasts</ListItemText>
                        </ListItem>
                    </List>
                </Paper>
                <Paper>
                    <Typography variant="body2">PLAYLISTS</Typography>
                    <list>
                        <ListItem button>
                            <ListItemText>Lo-deb</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText>TWers na Quarentena</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText>* Oldies By Marco</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText>* Dance Floor</ListItemText>
                        </ListItem>
                    </list>
                </Paper>
                <Paper>
                    <Button fullWidth>New Playlist</Button>
                </Paper>
            </Paper>
        )
    }
    return (
        <Grid container spacing={1}>
            <Grid item xs={2}>
                <Navigation />
                <YourLibraryAndPlaylists />
            </Grid>
            <Grid item xs={9}>
                <Box>
                    <IconButton></IconButton>
                    <IconButton></IconButton>
                </Box>
                <Box>
                    <h1>Song Carrousel</h1>
                </Box>
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    )
}

export default Home
