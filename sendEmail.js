// sendEmail.js

exports.handler = async (event) => {
  const { firstName, lastName, email, message } = JSON.parse(event.body);

  // Add your email address here
  const toEmail = 'philipsdublin@gmail.com';

  // Here you'll add the logic to send the email
  // For now, let's just return a success response
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Email sent successfully' })
  };
};

