const listaProdutos = require('./lista')

function exercicio1(){
    var total = 0;  
    
    for(i=0; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];
        
        total = total + produto.qtdEstoque; 
    }
  
    console.log("Total de produtos em estoque = "+total);

}

function exercicio2(){
    var total = 0;  
    
    for(i=0; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];

        if (produto.emDestaque == "sim"){
            total += produto.qtdEstoque;
        }
    }
  
    console.log("Total de produtos em destaque = "+total);

}

function exercicio3(){
    var total = 0;  
    
    for(i=0; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];

        if (produto.disponivel == "sim"){
            total += produto.qtdEstoque;
        }
    }
  
    console.log("Total de produtos disponivel = "+total);

}


function exercicio4(){
    var total = 0;

    for (i=0; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];

        if (produto.emDestaque == "sim" && produto.disponivel == "sim"){
            total += produto.qtdEstoque;
        }
    }
    console.log("Total de produtos em estoque disponíveis e em destaque = "+total);

}

function exercicio5(){
    var TotalInventario = 0;
    var valorInventario = 0;

   
    for (i=0; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];

        if (produto.qtdEstoque > 0){
           valorInventario = produto.preco * produto.qtdEstoque
           TotalInventario += valorInventario   
        }        
    }
    console.log("o valor do inventario é R$ "+TotalInventario);

}

function exercicio6(){
    let produtoMaisCaro = listaProdutos[0];

    for (i=1; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];
        if (produto.preco > produtoMaisCaro.preco){
            produtoMaisCaro = produto;
        }
    }
    console.log("Produto mais caro da empresa é o  "+produtoMaisCaro.descricao+ " cujo preço é R$ "+produtoMaisCaro.preco);
    

}

function exercicio7(){
    let produtoMaisBarato = listaProdutos[0];

    for (i=1; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];
        if (produto.preco < produtoMaisBarato.preco){
            produtoMaisBarato = produto;
        }
    }
    console.log("Produto mais barato da empresa é o  "+produtoMaisBarato.descricao+ " cujo preço é R$ "+produtoMaisBarato.preco);
    

}

function exercicio8(){
    let estoqueMaisvalioso = listaProdutos[0];

    for (i=1; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];

        if (produto.qtdEstoque > 0){
            if (produto.preco * produto.qtdEstoque > estoqueMaisvalioso.preco * estoqueMaisvalioso.qtdEstoque){
                estoqueMaisvalioso = produto;
            }
        }        
    }
    console.log("O estoque mais valioso é do produto "+estoqueMaisvalioso.descricao + 
                " cujo valor está estimado em R$ "+(estoqueMaisvalioso.preco*estoqueMaisvalioso.qtdEstoque));


}

function exercicio9(){
    let estoqueMaisBarato = listaProdutos[0];

    for (i=1; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];

        if (produto.qtdEstoque > 0){
            if (produto.preco * produto.qtdEstoque < estoqueMaisBarato.preco * estoqueMaisBarato.qtdEstoque){
                estoqueMaisBarato = produto;
            }
        }        
    }
    console.log("O estoque mais barato é do produto "+estoqueMaisBarato.descricao + 
                " cujo valor está estimado em R$ "+(estoqueMaisBarato.preco*estoqueMaisBarato.qtdEstoque));


}

function exercicio11(){
    var listaDeptos = [];
    let codDepto = 0;

    for (i=0;i<listaProdutos.length; i++){
        let produto = listaProdutos[i];
        if (produto.departamento.idDepto != codDepto){
            let itemLista = {
                nomeDepto: produto.departamento.nomeDepto,
                idDepto: produto.departamento.idDepto,
                somatoriaItens: 0
            };
            listaDeptos.push(itemLista);
            codDepto = produto.departamento.idDepto;
        }
    }

    // agora, vou novamente percorrer a lista e, para cada produto, percorro os departamentos definidos e somo o estoque

    for (i=0; i < listaProdutos.length ; i++){
        let produto = listaProdutos[i];

        // tenho que percorrer a lista de departamentos
        for (j=0;j<listaDeptos.length; j++){
            if (produto.departamento.idDepto == listaDeptos[j].idDepto){  // o depto do produto corresponde ao depto da lista?
                listaDeptos[j].somatoriaItens += produto.qtdEstoque;
                break;
            }
        }
    }

    // depois de tudo, exibo a lista
    console.log(listaDeptos);
}

function exercicio13(){
    var listaDeptos = [];
    let codDepto = 0;

    for (i=0;i<listaProdutos.length; i++){
        let produto = listaProdutos[i];
        
        if (produto.departamento.idDepto != codDepto){
            let itemLista = {
                nomeDepto: produto.departamento.nomeDepto,
                idDepto: produto.departamento.idDepto,
                somatoriaItens: 0,
                totalEstoque: 0,
                ticketMedio: 0
            };
            listaDeptos.push(itemLista);
            codDepto = produto.departamento.idDepto;
        }
    }

    // para cada produto, percorrer cada um dos departamentos da lista, fazendo as devidas somatórias (tanto de quantidade de itens, quanto de preço)
    for (i=0; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];

        for (j=0; j<listaDeptos.length; j++){
            if (produto.departamento.idDepto == listaDeptos[j].idDepto){
                listaDeptos[j].somatoriaItens += produto.qtdEstoque;
                listaDeptos[j].totalEstoque += produto.preco * produto.qtdEstoque;
                break;
            }
        }
    }

    // defini todos os valores de somatoria de itens e também de total do estoque... para facilitar a compreensão,
    // vamos pela última vez, percorrer a lista de departamentos e calcular o ticket médio

    for (j=0; j<listaDeptos.length; j++){
        listaDeptos[j].ticketMedio = listaDeptos[j].totalEstoque / listaDeptos[j].somatoriaItens;
    }

    console.log(listaDeptos);


}

function exercicio14(){
    var listaDeptos = [];
    let codDepto = 0;

    for (i=0;i<listaProdutos.length; i++){
        let produto = listaProdutos[i];
        if (produto.departamento.idDepto != codDepto){
            let itemLista = {
                nomeDepto: produto.departamento.nomeDepto,
                idDepto: produto.departamento.idDepto,
                totalEstoque: 0
            };
            listaDeptos.push(itemLista);
            codDepto = produto.departamento.idDepto;
        }
    }

    // agora, vou novamente percorrer a lista e, para cada produto, percorro os departamentos definidos e somo o estoque

    for (i=0; i < listaProdutos.length ; i++){
        let produto = listaProdutos[i];

        // tenho que percorrer a lista de departamentos
        for (j=0;j<listaDeptos.length; j++){
            if (produto.departamento.idDepto == listaDeptos[j].idDepto){  // o depto do produto corresponde ao depto da lista?
                listaDeptos[j].totalEstoque += produto.preco * produto.qtdEstoque;
                break;
            }
        }
    }

    // função que reorganiza a lista do maior para o menor
    let deptoValioso = listaDeptos

    deptoValioso.sort(function (a, b) {
        if (a.totalEstoque > b.totalEstoque){
            return -1;
         }else{
            return true;
         }
      });

   
   console.log(`Departamento mais valioso é ${deptoValioso[0].nomeDepto}  com  ${deptoValioso[0].totalEstoque}`);
}

function exercicio15(){
    var listaDeptos = [];
    let codDepto = 0;

    for (i=0;i<listaProdutos.length; i++){
        let produto = listaProdutos[i];
        if (produto.departamento.idDepto != codDepto){
            let itemLista = {
                nomeDepto: produto.departamento.nomeDepto,
                idDepto: produto.departamento.idDepto,
                totalEstoque: 0
            };
            listaDeptos.push(itemLista);
            codDepto = produto.departamento.idDepto;
        }
    }

    // agora, vou novamente percorrer a lista e, para cada produto, percorro os departamentos definidos e somo o estoque

    for (i=0; i < listaProdutos.length ; i++){
        let produto = listaProdutos[i];

        // tenho que percorrer a lista de departamentos
        for (j=0;j<listaDeptos.length; j++){
            if (produto.departamento.idDepto == listaDeptos[j].idDepto){  // o depto do produto corresponde ao depto da lista?
                listaDeptos[j].totalEstoque += produto.preco * produto.qtdEstoque;
                break;
            }
        }
    }

    // função que reorganiza a lista do maior para o menor
    let deptoValioso = listaDeptos

    deptoValioso.sort(function (a, b) {
        if (a.totalEstoque < b.totalEstoque){
            return -1;
         }else{
            return true;
         }
      });

   
   console.log(`Departamento menos valioso é ${deptoValioso[0].nomeDepto}  com  ${deptoValioso[0].totalEstoque}`);
}