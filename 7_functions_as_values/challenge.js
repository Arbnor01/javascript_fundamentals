const notifyByEmail = (email) => {
    return `Email sent to: ${email}`;
  }
  
  const notifyByText = (phoneNumber) => {
    return `Text sent to: ${phoneNumber}`;
  }
  
  const notify = (emailOrPhone, notifyFunction) => {
    return notifyFunction(emailOrPhone);
  }
  
  console.log(notify('arbnor@exmaple.com', notifyByEmail));
  console.log(notify('+07437347473822971', notifyByText));