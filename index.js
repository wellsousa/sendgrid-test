
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg={
     to: 'dev@agrointeli.com.br',
     from: 'test@example.com',
     templateId: 'd-4b9aab3ae8424596a1fda1910965d44d',

     dynamic_template_data:{
        subject: 'um teste qualquer',
        name: 'some one'
     }

}

sgMail.send(msg)