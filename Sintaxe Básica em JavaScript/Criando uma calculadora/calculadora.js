function calculadora() {
    const operacao = Number(prompt('Escolha a operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação(**)' ));

    if (!operacao|| operacao >= 7) {
        alert ('Erro - operação inválida!');
        calculadora();
        } else {
        let n1 = Number(prompt('insira o primeiro valor:'));
        let n2 = Number(prompt('insira o segundo valor:'));
        let resultado;

        if(!n1 || !n2) {
            alert ('Erro - parâmetros inválidos!')
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
            function potencializacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
                novaOperacao();
            }
        
            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não ');
        
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!')
                } else {
                    alert('digite uma opção válida!')
                    novaOperacao();
                }
            }
        }
    
      /*  if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        }else if (operacao == 4) {
            divisaoReal();
        }else if (operacao == 5) {
            divisaoInteira();
        }else if (operacao == 6) {
            potencializacao(); 
        }*/

        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potencializacao();
                break;
        }
    }

    
}
calculadora();