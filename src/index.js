function getMessage() {
  return 'Hola desde Node';
}

if (require.main === module) {
  console.log(getMessage());
}

module.exports = { getMessage };
