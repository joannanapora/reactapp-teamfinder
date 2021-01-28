import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


export const useSignUpStyles = makeStyles((theme: Theme) =>
    createStyles({
        textfield: {
            width: '100%',
            margin: '1vw 0'

        },
        form: {
            display: 'flex',
            flexDirection: 'column',
        },
        loginButton: {
            margin: '2vw 0'
        },
        alert: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
        alertContainer: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
    }));