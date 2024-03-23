/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Helmet } from 'react-helmet-async'

const Title = ({ title = "Gossip", description = "Welcome to gossip, let's talk" }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
        </Helmet>
    )
}

export default Title