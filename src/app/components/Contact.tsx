import React from 'react'
import ReUsableHeader from '../ReusableComponents.tsx/ReUsableHeader'
import ContactForm from './ContactForm'

function Contact() {
    return (

        <div>
            <ReUsableHeader
                text1= "Contact"
            headerText= "We’re Here to Help – Get in Touch with CASA"
            text2= "Trusted by Thousands of Business Owners See what our satisfied customers have to say about CASA."
        ></ReUsableHeader>
        <ContactForm></ContactForm>

    </div >
  )
}

export default Contact