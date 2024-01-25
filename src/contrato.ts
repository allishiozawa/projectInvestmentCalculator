// contrato


//1 - sistema deve usar o Tailwindcss
//2 - sistema deve ter m elemento html do tipo table (com id definido) preparado e sem informações dentro
//3 - são necessários dois arrays para geração da tabela...
    //3.1 - um array de dados
    //3.2 - um array com objetos que caraterizam as colunas
    //3.3 - não é necessário, mas pode se passar uma função de formatação dos dados daquela coluna

type columnObject = {
    columnLabel: string;
    accessor: string;
    formatFN?: (info: number | string) => string;
};

type columnsArray = columnObject[];
