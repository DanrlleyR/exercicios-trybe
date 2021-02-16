const emailListInData = [
  "roberta@email.com",
  "paulo@email.com",
  "anaroberta@email.com",
  "fabiano@email.com"
];

const showEmailList = (email, posicao, array) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
}

emailListInData.forEach((email, posicao) => {
  showEmailList(email);
  console.log(`O email: ${email} foi aprovado na ${posicao+1}ª posição. Parabéns!`)
})