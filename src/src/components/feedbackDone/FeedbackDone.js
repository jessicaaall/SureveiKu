import { Text, VStack } from "@chakra-ui/react";
import FormalHeading from "../FormalHeading";
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const FeedbackDone = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
        navigate('/home')
        }, 3000)
    }, [])
    return (
        <VStack >
            <FormalHeading fontSize={60} fontWeight='bold' color='white' letterSpacing={2} title='Thanks for giving us a feedback!'/>
            <Text fontSize={25} color='white' letterSpacing={3}>We will reply to your feedback as soon as possible.</Text>
            <Text fontSize={20} fontWeight='bold' borderColor='black' color='white' letterSpacing={3}>You will be returned to the main page shortly</Text>
        </VStack>
    )
}

export default FeedbackDone;