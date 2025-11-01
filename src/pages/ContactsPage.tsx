import React from 'react'
import ContactForm from '../components/ContactForm'
import './ContactsPage.css'

const ContactsPage: React.FC = () => {
  return (
    <div className="contacts-page">
      <div className="container">
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactsPage

