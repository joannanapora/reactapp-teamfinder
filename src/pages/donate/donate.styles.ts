import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


export const useDonateStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '5rem',
            [theme.breakpoints.down("sm")]: {
                padding: theme.spacing(3),
            },
            [theme.breakpoints.up("md")]: {
                padding: theme.spacing(3),
            },
        },
        alert: {
            width: '100%',
            '& > * + *': {
                marginTop: '2rem'
            },
        },
        alertContainer: {
            marginTop: '2rem',
        },
        donate: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: theme.spacing(3),
        },
        donateButton: {
            marginTop: theme.spacing(3),
            alignSelf: 'center',

        }
    }));