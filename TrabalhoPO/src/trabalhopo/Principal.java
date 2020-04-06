package trabalhopo;

import java.util.concurrent.TimeUnit;

public class Principal {

    Arquivo arqOrd, arqRev, arqRand, auxRev, auxRand;
    Arquivo arqTabela;
    
    private long tini, tfim, ttotalO, ttotalRev, ttotalRand;
    private int compO, movO, compRev, movRev, compRand, movRand;
    
    public void gravaLinhaTabela(int campO, double campOE, int movO, double movOE, int totalO,
            int campR, double campRE, int movR, double movRE, int totalR,
            int campRa, double campRaE, int movRa, double movRaE, int totalRa) {
                        String line = String.format(             "      %3d       %3.2f       %3d       %3.2f      %3d "
                                                                + "     %3d         %3.2f      %3d       %3.2f      %3d "
                                                                + "     %3d         %3.2f      %3d       %3.2f      %3d  \r\n",
                campO, campOE, movO, movOE, totalO,
                campR, campRE, movR, movRE, totalR,
                campRa, campRaE, movRa, movRaE, totalRa);
        
        new Registro().gravaTabelaNoArq(arqTabela.getFile(), line);
        
    }
    

    public void geraTabela() {
        String quebra = System.getProperty("line.separator");

        arqTabela = new Arquivo("tabela.txt");
        new Registro().gravaTabelaNoArq(arqTabela.getFile(), "\t\tMétodos Ordenação"
                + "\t\t\tArquivo Ordenado"
                + "\t\t\t\t\t\tArquivo em Ordem Reversa"
                + "\t\t\t\tArquivo Randômico\r\n"
                + "Comp. Prog. | Comp. Equa. | Mov. Prog. | Mov. Equa. | Tempo | "
                + "Comp. Prog. | Comp. Equa. | Mov. Prog. | Mov. Equa. | Tempo | "
                + "Comp. Prog. | Comp. Equa. | Mov. Prog. | Mov. Equa. | Tempo\r\n");

        arqOrd = new Arquivo("arquivoOrdenado.txt");
        arqOrd.geraArquivoOrdenado();
        
        arqRev = new Arquivo("arquivoReverso.txt");
        arqRev.geraArquivoReverso();
        
        arqRand = new Arquivo("arquivoRandomico.txt");
        arqRand.geraArquivoRandomico();
        
        auxRev = new Arquivo("auxReverso.txt");
        auxRand = new Arquivo("auxRand.txt");

        
        //BUCKET SORT
            new Registro().gravaTabelaNoArq(arqTabela.getFile(), "Bucket Sort");
            
            //Arquivo Ordenado 
            arqOrd.initComp();
            arqOrd.initMov();
            
            tini = System.currentTimeMillis(); //método para pegar a hora atual em milisegundos
            arqOrd.bucketSort();
            tfim = System.currentTimeMillis(); //método para pegar a hora atual em milisegundos
            compO = arqOrd.getComp();
            movO = arqOrd.getMov();
            ttotalO = tfim - tini;
            
            //Arquivo Reverso 
            auxRev.copiaArquivo(arqRev); //faz uma cópia do arquivo de arqRev para auxRev para preservar o original
            auxRev.initComp();
            auxRev.initMov();
            tini = System.currentTimeMillis();
            auxRev.bucketSort();
            tfim = System.currentTimeMillis();
            ttotalRev = tfim - tini;
            compRev = auxRev.getComp();
            movRev = auxRev.getMov();
            
            //Arquivo Randomico 
            auxRand.copiaArquivo(arqRand); //faz uma cópia do arquivo de arqRand para auxRand para preservar o original
            auxRand.initComp();
            auxRand.initMov();
            tini = System.currentTimeMillis();
            auxRand.bucketSort();
            tfim = System.currentTimeMillis();
            ttotalRand = tfim - tini;
            compRand = auxRand.getComp();
            movRand = auxRand.getMov();
            
            //grava na tabela informacoes os dados extraídos das execucoes do método Insercao Direta
            gravaLinhaTabela(compO, arqOrd.calculaCompInsDir(arqOrd.filesize(), 1),
                    movO, arqOrd.calculaMovInsDir(arqOrd.filesize(), 1), (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalO)),
                    compRev, arqRev.calculaCompInsDir(arqRev.filesize(), 3),
                    movRev, arqRev.calculaMovInsDir(arqRev.filesize(), 3), (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalRev)),
                    compRand, arqRand.calculaCompInsDir(arqRand.filesize(), 2),
                    movRand, arqRand.calculaMovInsDir(arqRand.filesize(), 2), (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalRand)));
        System.out.println("Passei no bucket sort!");

        //INSERCAO DIRETA
            new Registro().gravaTabelaNoArq(arqTabela.getFile(), "Insercao Direta");
            
            //Arquivo Ordenado 
            arqOrd.initComp();
            arqOrd.initMov();
            
            tini = System.currentTimeMillis(); //método para pegar a hora atual em milisegundos
            arqOrd.insercaoDireta();
            tfim = System.currentTimeMillis(); //método para pegar a hora atual em milisegundos
            compO = arqOrd.getComp();
            movO = arqOrd.getMov();
            ttotalO = tfim - tini;
            
            //Arquivo Reverso 
            auxRev.copiaArquivo(arqRev); //faz uma cópia do arquivo de arqRev para auxRev para preservar o original
            auxRev.initComp();
            auxRev.initMov();
            tini = System.currentTimeMillis();
            auxRev.insercaoDireta();
            tfim = System.currentTimeMillis();
            ttotalRev = tfim - tini;
            compRev = auxRev.getComp();
            movRev = auxRev.getMov();
            
            //Arquivo Randomico 
            auxRand.copiaArquivo(arqRand); //faz uma cópia do arquivo de arqRand para auxRand para preservar o original
            auxRand.initComp();
            auxRand.initMov();
            tini = System.currentTimeMillis();
            auxRand.insercaoDireta();
            tfim = System.currentTimeMillis();
            ttotalRand = tfim - tini;
            compRand = auxRand.getComp();
            movRand = auxRand.getMov();
            
            //grava na tabela informacoes os dados extraídos das execucoes do método Insercao Direta
            gravaLinhaTabela(compO, arqOrd.calculaCompInsDir(arqOrd.filesize(), 1),
                    movO, arqOrd.calculaMovInsDir(arqOrd.filesize(), 1), (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalO)),
                    compRev, arqRev.calculaCompInsDir(arqRev.filesize(), 3),
                    movRev, arqRev.calculaMovInsDir(arqRev.filesize(), 3), (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalRev)),
                    compRand, arqRand.calculaCompInsDir(arqRand.filesize(), 2),
                    movRand, arqRand.calculaMovInsDir(arqRand.filesize(), 2), (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalRand)));
        System.out.println("Passei na inserção direta!");
            
        //INSERÇÃO BINÁRIA
            new Registro().gravaTabelaNoArq(arqTabela.getFile(), "Insercao Binária");
            
            //Arquivo Ordenado 
            arqOrd.initComp();
            arqOrd.initMov();
            
            tini = System.currentTimeMillis(); //método para pegar a hora atual em milisegundos
            arqOrd.insercao_binaria();
            tfim = System.currentTimeMillis(); //método para pegar a hora atual em milisegundos
            compO = arqOrd.getComp();
            movO = arqOrd.getMov();
            ttotalO = tfim - tini;
            
            //Arquivo Reverso 
            auxRev.copiaArquivo(arqRev); //faz uma cópia do arquivo de arqRev para auxRev para preservar o original
            auxRev.initComp();
            auxRev.initMov();
            tini = System.currentTimeMillis();
            auxRev.insercao_binaria();
            tfim = System.currentTimeMillis();
            ttotalRev = tfim - tini;
            compRev = auxRev.getComp();
            movRev = auxRev.getMov();
            
            //Arquivo Randomico 
            auxRand.copiaArquivo(arqRand); //faz uma cópia do arquivo de arqRand para auxRand para preservar o original
            auxRand.initComp();
            auxRand.initMov();
            tini = System.currentTimeMillis();
            auxRand.insercao_binaria();
            tfim = System.currentTimeMillis();
            ttotalRand = tfim - tini;
            compRand = auxRand.getComp();
            movRand = auxRand.getMov();
            
            // você descoriu o que faz, agora tem que fazer a função que tenha o método de calculo em equação!
            //grava na tabela informacoes os dados extraídos das execucoes do método Insercao Direta
            gravaLinhaTabela(compO, arqOrd.calculaCompInsBin(arqOrd.filesize(), 1),
                    movO, arqOrd.calculaMovInsBin(arqOrd.filesize(), 1), (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalO)),
                    compRev, arqRev.calculaCompInsBin(arqRev.filesize(), 3),
                    movRev, arqRev.calculaMovInsBin(arqRev.filesize(), 3), (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalRev)),
                    compRand, arqRand.calculaCompInsBin(arqRand.filesize(), 2),
                    movRand, arqRand.calculaMovInsBin(arqRand.filesize(), 2), (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalRand)));
        System.out.println("Passei na inserção binaria!");
        
        //SELECAO DIRETA   
            new Registro().gravaTabelaNoArq(arqTabela.getFile(), "Selecao Direta ");
            
            //Arquivo Ordenado 
            arqOrd.initComp();
            arqOrd.initMov();
            tini = System.currentTimeMillis(); //método para pegar a hora atual em milisegundos
            arqOrd.selecaoDireta();
            tfim = System.currentTimeMillis(); //método para pegar a hora atual em milisegundos
            compO = arqOrd.getComp();
            movO = arqOrd.getMov();
            ttotalO = tfim - tini;
            
            //Arquivo Reverso 
            auxRev.copiaArquivo(arqRev); //faz uma cópia do arquivo de arqRev para auxRev para preservar o original
            auxRev.initComp();
            auxRev.initMov();
            tini = System.currentTimeMillis();
            auxRev.selecaoDireta();
            tfim = System.currentTimeMillis();
            ttotalRev = tfim - tini;
            compRev = auxRev.getComp();
            movRev = auxRev.getMov();
            
            //Arquivo Randomico 
            auxRand.copiaArquivo(arqRand); //faz uma cópia do arquivo de arqRand para auxRand para preservar o original
            auxRand.initComp();
            auxRand.initMov();
            tini = System.currentTimeMillis();
            auxRand.selecaoDireta();
            tfim = System.currentTimeMillis();
            ttotalRand = tfim - tini;
            compRand = auxRand.getComp();
            movRand = auxRand.getMov();
            
            //grava na tabela informacoes os dados extraídos das execucoes do método Selecao Direta
            gravaLinhaTabela(compO, arqOrd.calculaCompSelDir(arqOrd.filesize()),
                    movO, arqOrd.calculaMovSelDir(arqOrd.filesize(), 1), (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalO)),
                    compRev, arqRev.calculaCompSelDir(arqRev.filesize()),
                    movRev, arqRev.calculaMovSelDir(arqRev.filesize(), 3), (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalRev)),
                    compRand, arqRand.calculaCompSelDir(arqRand.filesize()),
                    movRand, arqRand.calculaMovSelDir(arqRand.filesize(), 2), (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalRand)));
        System.out.println("Passei na seleção direta!");
        
        //BUBBLE SORT *A TERMINAR
            new Registro().gravaTabelaNoArq(arqTabela.getFile(), "Bubble Sort    ");       
            
            //Arquivo Ordenado 
            arqOrd.initComp();
            arqOrd.initMov();
            tini = System.currentTimeMillis(); //método para pegar a hora atual em milisegundos
            arqOrd.bubbleSort();
            tfim = System.currentTimeMillis(); //método para pegar a hora atual em milisegundos
            compO = arqOrd.getComp();
            movO = arqOrd.getMov();
            ttotalO = tfim - tini;
            
            //Arquivo Reverso 
            auxRev.copiaArquivo(arqRev); //faz uma cópia do arquivo de arqRev para auxRev para preservar o original
            auxRev.initComp();
            auxRev.initMov();
            tini = System.currentTimeMillis();
            auxRev.bubbleSort();
            tfim = System.currentTimeMillis();
            ttotalRev = tfim - tini;
            compRev = auxRev.getComp();
            movRev = auxRev.getMov();
            
            //Arquivo Randomico 
            auxRand.copiaArquivo(arqRand); //faz uma cópia do arquivo de arqRand para auxRand para preservar o original
            auxRand.initComp();
            auxRand.initMov();
            tini = System.currentTimeMillis();
            auxRand.bubbleSort();
            tfim = System.currentTimeMillis();
            ttotalRand = tfim - tini;
            compRand = auxRand.getComp();
            movRand = auxRand.getMov();
            
            //grava na tabela informacoes os dados extraídos das execucoes do método Bubble sort
            gravaLinhaTabela(compO, 0.0,
                    movO, 0.0, (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalO)),
                    compRev, 0.0,
                    movRev, 0.0, (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalRev)),
                    compRand, 0.0,
                    movRand, 0.0, (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalRand)));
            System.out.println("Passei no bubble sort");

            
        //SHAKE SORT
            new Registro().gravaTabelaNoArq(arqTabela.getFile(), "Shake Sort     ");
            
            //Arquivo Ordenado 
            arqOrd.initComp();
            arqOrd.initMov();
            tini = System.currentTimeMillis(); //método para pegar a hora atual em milisegundos
            arqOrd.shakeSort();
            tfim = System.currentTimeMillis(); //método para pegar a hora atual em milisegundos
            compO = arqOrd.getComp();
            movO = arqOrd.getMov();
            ttotalO = tfim - tini;
            
            //Arquivo Reverso 
            auxRev.copiaArquivo(arqRev); //faz uma cópia do arquivo de arqRev para auxRev para preservar o original
            auxRev.initComp();
            auxRev.initMov();
            tini = System.currentTimeMillis();
            auxRev.shakeSort();
            tfim = System.currentTimeMillis();
            ttotalRev = tfim - tini;
            compRev = auxRev.getComp();
            movRev = auxRev.getMov();
            
            //Arquivo Randomico 
            auxRand.copiaArquivo(arqRand); //faz uma cópia do arquivo de arqRand para auxRand para preservar o original
            auxRand.initComp();
            auxRand.initMov();
            tini = System.currentTimeMillis();
            auxRand.shakeSort();
            tfim = System.currentTimeMillis();
            ttotalRand = tfim - tini;
            compRand = auxRand.getComp();
            movRand = auxRand.getMov();
            //grava na tabela informacoes os dados extraídos das execucoes do método shake sort
            gravaLinhaTabela(compO, arqOrd.calculaCompShakeSort(arqOrd.filesize()),
                    movO, arqOrd.calculaMovShakeSort(arqOrd.filesize(), 1), (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalO)),
                    compRev, arqRev.calculaCompShakeSort(arqRev.filesize()),
                    movRev, arqRev.calculaMovShakeSort(arqRev.filesize(), 3), (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalRev)),
                    compRand, arqRand.calculaCompShakeSort(arqRand.filesize()),
                    movRand, arqRand.calculaMovShakeSort(arqRand.filesize(), 2), (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalRand)));
        System.out.println("Passei no shake");    
        
        //HEAP SORT *A TERMINAR
            new Registro().gravaTabelaNoArq(arqTabela.getFile(), "Heap Sort      ");    
            
            //Arquivo Ordenado 
            arqOrd.initComp();
            arqOrd.initMov();
            tini = System.currentTimeMillis(); //método para pegar a hora atual em milisegundos
            arqOrd.ordem_Heap();
            tfim = System.currentTimeMillis(); //método para pegar a hora atual em milisegundos
            compO = arqOrd.getComp();
            movO = arqOrd.getMov();
            ttotalO = tfim - tini;
            
            //Arquivo Reverso 
            auxRev.copiaArquivo(arqRev); //faz uma cópia do arquivo de arqRev para auxRev para preservar o original
            auxRev.initComp();
            auxRev.initMov();
            tini = System.currentTimeMillis();
            auxRev.ordem_Heap();
            tfim = System.currentTimeMillis();
            ttotalRev = tfim - tini;
            compRev = auxRev.getComp();
            movRev = auxRev.getMov();
            
            //Arquivo Randomico 
            auxRand.copiaArquivo(arqRand); //faz uma cópia do arquivo de arqRand para auxRand para preservar o original
            auxRand.initComp();
            auxRand.initMov();
            tini = System.currentTimeMillis();
            auxRand.ordem_Heap();
            tfim = System.currentTimeMillis();
            ttotalRand = tfim - tini;
            compRand = auxRand.getComp();
            movRand = auxRand.getMov();
            //grava na tabela informacoes os dados extraídos das execucoes do método HEAP
            gravaLinhaTabela(compO, 0.0,
                    movO, 0.0, (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalO)),
                    compRev, 0.0,
                    movRev, 0.0, (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalRev)),
                    compRand, 0.0,
                    movRand, 0.0, (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalRand)));
        System.out.println("Passei no Heap Sort");
        
        //SHELL SORT *A TERMINAR
            new Registro().gravaTabelaNoArq(arqTabela.getFile(), "Shell Sort     ");
            
            //Arquivo Ordenado 
            arqOrd.initComp();
            arqOrd.initMov();
            tini = System.currentTimeMillis(); //método para pegar a hora atual em milisegundos
            arqOrd.shellSort();
            tfim = System.currentTimeMillis(); //método para pegar a hora atual em milisegundos
            compO = arqOrd.getComp();
            movO = arqOrd.getMov();
            ttotalO = tfim - tini;
            
            //Arquivo Reverso 
            auxRev.copiaArquivo(arqRev); //faz uma cópia do arquivo de arqRev para auxRev para preservar o original
            auxRev.initComp();
            auxRev.initMov();
            tini = System.currentTimeMillis();
            auxRev.shellSort();
            tfim = System.currentTimeMillis();
            ttotalRev = tfim - tini;
            compRev = auxRev.getComp();
            movRev = auxRev.getMov();
            
            //Arquivo Randomico 
            auxRand.copiaArquivo(arqRand); //faz uma cópia do arquivo de arqRand para auxRand para preservar o original
            auxRand.initComp();
            auxRand.initMov();
            tini = System.currentTimeMillis();
            auxRand.shellSort();
            tfim = System.currentTimeMillis();
            ttotalRand = tfim - tini;
            compRand = auxRand.getComp();
            movRand = auxRand.getMov();
            //grava na tabela informacoes os dados extraídos das execucoes do método Shell Sort
            gravaLinhaTabela(compO, 0.0,
                    movO, 0.0, (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalO)),
                    compRev, 0.0,
                    movRev, 0.0, (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalRev)),
                    compRand, 0.0,
                    movRand, 0.0, (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalRand)));
        System.out.println("Passei no shell!");
        
        //QUICK COM PIVO *A TERMINAR
            new Registro().gravaTabelaNoArq(arqTabela.getFile(), "QuickSort      ");
            
            //Arquivo Ordenado 
            arqOrd.initComp();
            arqOrd.initMov();
            tini = System.currentTimeMillis(); //método para pegar a hora atual em milisegundos
            arqOrd.quickCP(0, arqOrd.filesize());
            tfim = System.currentTimeMillis(); //método para pegar a hora atual em milisegundos
            compO = arqOrd.getComp();
            movO = arqOrd.getMov();
            ttotalO = tfim - tini;
            
            //Arquivo Reverso 
            auxRev.copiaArquivo(arqRev); //faz uma cópia do arquivo de arqRev para auxRev para preservar o original
            auxRev.initComp();
            auxRev.initMov();
            tini = System.currentTimeMillis();
            auxRev.quickCP(0, auxRev.filesize());
            tfim = System.currentTimeMillis();
            ttotalRev = tfim - tini;
            compRev = auxRev.getComp();
            movRev = auxRev.getMov();
            
            //Arquivo Randomico 
            auxRand.copiaArquivo(arqRand); //faz uma cópia do arquivo de arqRand para auxRand para preservar o original
            auxRand.initComp();
            auxRand.initMov();
            tini = System.currentTimeMillis();
            auxRand.quickCP(0, auxRand.filesize());
            tfim = System.currentTimeMillis();
            ttotalRand = tfim - tini;
            compRand = auxRand.getComp();
            movRand = auxRand.getMov();
            //grava na tabela informacoes os dados extraídos das execucoes do método QuickSort
            gravaLinhaTabela(compO, 0.0,
                    movO, 0.0, (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalO)),
                    compRev, 0.0,
                    movRev, 0.0, (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalRev)),
                    compRand, 0.0,
                    movRand, 0.0, (int) (TimeUnit.MILLISECONDS.toSeconds(ttotalRand)));
        System.out.println("Passei no quick com pivo!");

            //TODO - gravar na tabela restante dos metodos de busca em arquivo
    }

    public static void main(String[] args) {
        Principal p = new Principal();
        p.geraTabela();
    }

}
