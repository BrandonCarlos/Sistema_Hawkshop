module.exports = {
  date(timestamp) {
    const date = new Date(timestamp)

    //Vamos pegar o ANO
    const year = date.getFullYear() //UTC para PEGAR O TEMPO UNIVERSAL

    //Vamos pegar o MÊS
    //Aki os meses vão de 0 a 11
    //11 = DEZEMBRO e 0 = JANEIRO
    //O MÊS irá vir NÚMERICO
    const month = `0${date.getMonth() + 1}`.slice(-2)//SLICE = CORTAR, Cortando a STRING
    //e pegando só o que me INTERESSA NELA = .slice(-2) Estou DIZENDO PEGA OS 2 ULTIMOS DIGITOS

    //Agora vamos pegar o DIA
    const day = `0${date.getDate()}`.slice(-2)

    //Eu preciso montar ele dessa forma = return yyyy-mm-dd
    const hour = date.getHours()
    const minutes = date.getMinutes()

    //Vamos RETORNAR UM OBJETO NO FORMATO "ISO"
    return {
      day, 
      month,
      year,
      hour,
      minutes,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`,
      format: `${day}/${month}/${year}`
    }
  },
  formatarPreco(preco) {//Função que irá FORMATAR O PREÇO
    //Devemos FORMATAR PARA REAL = R$
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency', //currency = MOEDA
      currency: 'BRL' //R$
    }).format(preco / 100) //Aqui é o VALOR que eu quero que FORMATE para mim no caso o "VALUE"
  }
}