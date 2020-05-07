import React from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import {Link} from 'react-router-dom'


const useStyles = makeStyles(() => ({
    container: {
        background: orange[50]
    }
}))

const PricingCard = (props) => {
    const classes = useStyles();
    const {title} = props
    return (
        <>
            <Card className={classes.container}>
                <h2>{title}</h2>
                <CardContent>Content</CardContent>
                <Link to={`/subscription/${title}`}>
                    <Button>
                        Subscribe!
                    </Button>
                </Link>
            </Card>
        </>
    )
}


export default PricingCard


