const lowercaseMessage = (message) => {
    return message.toLowerCase();
  }

  const transform = (message, transformFunction) => {
    return transformFunction(message);
}

  const inputString = 'MY NAME IS ARBNOR';
  const result = transform(inputString, lowercaseMessage);
  
  console.log(result);