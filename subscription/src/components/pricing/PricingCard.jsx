import React from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export const PricingCard = (props) => {
    return (
        <>
            <Card>
                <CardHeader>Title</CardHeader>
                <CardContent>Content</CardContent>
                <Button>Subscribe!</Button>
            </Card>
        </>
    )
}