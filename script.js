// // EX 1

// const valorCompra = +prompt('Informe o valor da compra');
// const clienteVip = true;
// const formaPagamento = prompt('Informe a forma de pagamento (ex: "pix", "boleto", "credito", "debito")');

// if(valorCompra <= 0) {
//     console.log('Erro: Valor de compra inválido.');
// }
// else if(valorCompra < 100) {
//     console.log('Frete padrão: R$ 20,00.');
// }
// else if(valorCompra >= 100 && valorCompra <= 299.99 && clienteVip) {
//     console.log('Benefício aplicado: Frete Grátis!');
// }
// else {
//     console.log('Benefício aplicado: Frete Grátis + 10% de desconto!');
// }

// switch (formaPagamento) {
//     case 'pix':
//         console.log('Gerando QR Code com aprovação instantânea...');
//         break;
//     case 'credito':
//     case 'debito':
//         console.log('Conectando à operadora de cartão...');
//         break;
//     case 'boleto':
//         console.log('Gerando linha digitável com vencimento em 3 dias úteis...');
//         break;
//     default:
//         console.log('Erro: Forma de pagamento não aceita.');
//         break;
// }

// // EX 2
// const categoriaChamado = prompt('Informe a categoria do chamado (ex: "financeiro", "bug", "acesso", "duvida")');
// const prejuizoEstimado = +prompt('Informe o prejuíso');
// const clienteEnterprise = false;

// switch (categoriaChamado) {
//     case 'financeiro':
//         console.log('Direcionando ticket para a equipe de Faturamento e Cobrança.');
//         break;
//     case 'bug':
//         console.log('Direcionando ticket para a Engenharia de Software (Nível 2).');
//         break;
//     case 'acesso':
//     case 'duvida':
//         console.log('Direcionando ticket para o Atendimento Geral (Nível 1).');
//     default:
//         console.log('Erro: Categoria de chamado inválida.');
//         break;
// }

// if(prejuizoEstimado < 0) {
//     console.log('Erro: Valor de prejuízo inválido.');
// }
// else if(prejuizoEstimado >= 10000 || clienteEnterprise) {
//     console.log('Prioridade CRÍTICA: Atendimento imediato (SLA: 1 hora).');
// }
// else if(prejuizoEstimado >= 1000 && prejuizoEstimado <= 9999.99 && clienteEnterprise) {
//     console.log('Prioridade ALTA: Atendimento em até 4 horas.');
// }
// else {
//     console.log('Prioridade NORMAL: Atendimento em até 24 horas.');
// }