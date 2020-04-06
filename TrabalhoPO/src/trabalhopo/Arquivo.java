package trabalhopo;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;

public class Arquivo {

    private String nomearquivo;
    private RandomAccessFile arquivo;
    private int comp, mov;

    public Arquivo() {
    }

    public Arquivo(String nomearquivo) {
        try {
            arquivo = new RandomAccessFile(nomearquivo, "rw");
        }
        catch (IOException e) {
            System.out.println("Erro: "+e);
        }
    }

    public void copiaArquivo(Arquivo arquivoOrigem) {

        Registro reg = new Registro();
        seekArq(0);
        arquivoOrigem.seekArq(0);
        while (!arquivoOrigem.eof()) {
            reg.leDoArq(arquivoOrigem.arquivo);
            reg.gravaNoArq(arquivo);
        }
    }

    public RandomAccessFile getFile() {
        return arquivo;
    }

    public void truncate(long pos) {
        try {
            arquivo.setLength(pos);
        }
        catch (IOException e) {
        }
    }

    public boolean eof() {
        boolean retorno = false;
        try {
            if (arquivo.getFilePointer() == arquivo.length()) {
                retorno = true;
            }
        } catch (IOException e) {
        }
        return (retorno);
    }

    public void seekArq(int pos) {
        try {
            arquivo.seek(pos * Registro.length());
        } catch (IOException e) {
        }
    }

    public int filesize() {
        int size = 0;
        try {
            size = (int) (arquivo.length() / Registro.length());
            return size;
        } catch (IOException e) {
        }
        return size;
    }
    
    public Registro maiorValor() {
        int tl2 = filesize();
        Registro aux = new Registro();
        Registro maior = new Registro();
        seekArq(0);
        maior.leDoArq(arquivo);

        for (int i = 0; i < tl2 - 1; i++) {
            seekArq(i);
            aux.leDoArq(arquivo);

            if (aux.getNumero()> maior.getNumero()) {
                maior = aux;
            }
        }
        return maior;
    } 

    public void initComp() {
        comp = 0;
    }

    public void initMov() {
        mov = 0;
    }

    public int getComp() {
        return comp;
    }

    public int getMov() {
        return mov;
    }

    public void insercaoDireta() {
        int i, pos;
        Registro regi = new Registro();
        Registro regpos = new Registro();
        this.initComp();
        this.initMov();
        int a = filesize();
        for (i = 1; i < filesize(); i++) {
            seekArq(i);
            regi.leDoArq(arquivo);
            pos = i;
            seekArq(pos - 1);
            regpos.leDoArq(arquivo);

            while (pos > 0 && regi.getNumero() < regpos.getNumero()) {
                regpos.gravaNoArq(arquivo);
                mov++;
                pos--;
                if (pos > 0) {
                    seekArq(pos - 1);
                    regpos.leDoArq(arquivo);
                }
                comp++;
            }
            comp++;
            seekArq(pos);
            regi.gravaNoArq(arquivo);
            mov++;
        }
    }

    public void selecaoDireta() {
        Registro regMenor = new Registro();
        Registro regI = new Registro();
        Registro regAux = new Registro();
        int posMenor;
        int posi, posj;
        this.initComp();
        this.initMov();

        for (posi = 0; posi < filesize() - 1; posi++) {

            seekArq(posi);
            regMenor.leDoArq(arquivo);
            regI = regMenor;
            posMenor = posi;

            for (posj = posi + 1; posj < filesize(); posj++) {
                seekArq(posj);
                regAux.leDoArq(arquivo);
                if (regAux.getNumero() < regMenor.getNumero()) {
                    regMenor = new Registro(regAux.getNumero());
                    posMenor = posj;
                }
                comp++;
            }

            seekArq(posMenor);
            regI.gravaNoArq(arquivo);

            seekArq(posi);
            regMenor.gravaNoArq(arquivo);

            mov += 2;
        }
    }
    
    public int busca_binaria(int chave, int TL){
        Registro reg = new Registro();
        int ini, meio = 0, fim;
        
        if (TL > 0){
            ini = 0;
            fim = TL-1;
            meio = (ini+fim)/2;
             
            seekArq(meio);
            reg.leDoArq(arquivo);
            comp++;
            while (ini < fim && chave != reg.getNumero()){
                comp++;
                if (chave > reg.getNumero())
                    ini = meio + 1;
                else
                    fim = meio;
                meio = (ini+fim)/2;
            }
            comp++;
            comp++;
            if (chave == reg.getNumero())
                return meio;
            else if (chave > reg.getNumero())
                return meio+TL+1;
        }
        
        return meio+TL;
    }

    public void insercao_binaria(){
        Registro aux = new Registro();
        Registro aux2 = new Registro();
        
        int pos;
        int tl = filesize();
        
        for (int i=0; i < tl; i++){
            seekArq(i);
            aux.leDoArq(arquivo);

            pos = busca_binaria(aux.getNumero(), tl);
            
            comp++;
            if (pos >= i)
                pos -= i;

            for (int j = i; j > pos; j--)
            {
                seekArq(j-1);
                aux2.leDoArq(arquivo);

                seekArq(j);
                aux2.gravaNoArq(arquivo);
                mov++;
            }
            seekArq(pos);
            aux.gravaNoArq(arquivo);
            mov++;
        }
    }
    
    public void bubbleSort() {
        int tl2 = filesize();
        Registro regi = new Registro();
        Registro regj = new Registro();
        Registro regAux = new Registro();

        this.initComp();
        this.initMov();

        int i;
        while (tl2 != 1) {
            for (i = 0; i < (tl2 - 1); i++) {
                seekArq(i);
                regi.leDoArq(arquivo);
                seekArq(i + 1);
                regj.leDoArq(arquivo);
                if (regi.getNumero() > regj.getNumero()) {
                    regAux = new Registro(regi.getNumero());
                    seekArq(i);
                    regj.gravaNoArq(arquivo);
                    seekArq(i + 1);
                    regAux.gravaNoArq(arquivo);
                    mov += 2;
                }
                comp++;
            }

            tl2--;
        }
    }

    public void shellSort() {
        int dist, j, i, k;
        int tl = filesize();
        this.initComp();
        this.initMov();
        Registro aux = new Registro();
        Registro regj = new Registro();
        Registro regjdist = new Registro();
        Registro regk = new Registro();
        Registro regkdist = new Registro();

        for (dist = 4; dist > 0; dist /= 2) {
            for (i = 0; i < dist; i++) {
                for (j = i; j + dist < tl; j += dist) {
                    seekArq(j);
                    regj.leDoArq(arquivo);
                    seekArq(j + dist);
                    regjdist.leDoArq(arquivo);

                    if (regj.getNumero() > regjdist.getNumero()) {
                        aux = new Registro(regj.getNumero());
                        seekArq(j);
                        regjdist.gravaNoArq(arquivo);
                        seekArq(j + dist);
                        aux.gravaNoArq(arquivo);

                        k = j;
                        if (k - dist >= i) {
                            seekArq(k);
                            regk.leDoArq(arquivo);
                            seekArq(k - dist);
                            regkdist.leDoArq(arquivo);
                        }

                        for (; k - dist >= i && regk.getNumero() < regkdist.getNumero();) {
                            comp++;
                            aux = new Registro(regk.getNumero());
                            seekArq(k);
                            regkdist.gravaNoArq(arquivo);
                            seekArq(k - dist);
                            aux.gravaNoArq(arquivo);

                            mov += 2;

                            k -= dist;
                            if (k - dist >= i) {
                                seekArq(k);
                                regk.leDoArq(arquivo);
                                seekArq(k - dist);
                                regkdist.leDoArq(arquivo);
                            }
                        }
                        comp++;
                    }
                    comp++;
                }
            }
        }
    }

    public void ordem_Heap() {
        int tl = filesize();
        int pai, fe, fd;
        int maiorf;
        this.initComp();
        this.initMov();
        Registro regfe = new Registro();
        Registro regfd = new Registro();
        Registro regpai = new Registro();
        Registro regMaior = new Registro();
        Registro regaux = new Registro();
        Registro regaux2 = new Registro();
        while (tl > 1) {
            pai = tl / 2 - 1;
            while (pai >= 0) {
                fe = 2 * pai + 1;
                fd = fe + 1;
                maiorf = fe;

                seekArq(fe);
                regfe.leDoArq(arquivo);
                seekArq(fd);
                regfd.leDoArq(arquivo);

                if (fd < tl && regfe.getNumero() < regfd.getNumero()) {
                    maiorf = fd;
                }
                comp++;

                seekArq(pai);
                regpai.leDoArq(arquivo);
                seekArq(maiorf);
                regMaior.leDoArq(arquivo);

                if (regMaior.getNumero() > regpai.getNumero()) {
                    regaux = new Registro(regpai.getNumero());
                    seekArq(pai);
                    regMaior.gravaNoArq(arquivo);
                    seekArq(maiorf);
                    regaux.gravaNoArq(arquivo);
                    mov += 2;
                }
                comp++;
                pai--;
            }
            //pega o primeiro bloco
            seekArq(0);
            regaux.leDoArq(arquivo);
            //pega o ultimo
            seekArq(tl - 1);
            regaux2.leDoArq(arquivo);
            //coloca o ultimo no primeiro
            seekArq(0);
            regaux2.gravaNoArq(arquivo);
            //coloca o primeiro no ultimo
            seekArq(tl - 1);
            regaux.gravaNoArq(arquivo);
            tl--;
            mov += 2;
        }
    }

    public void shakeSort() {
        int tl = filesize();
        int inicio = 0;
        int i;
        Registro regi = new Registro();
        Registro regj = new Registro();
        Registro aux = new Registro();
        this.initComp();
        this.initMov();
        while (tl > inicio) {
            for (i = inicio; i < tl - 1; i++) {
                seekArq(i);
                regi.leDoArq(arquivo);
                seekArq(i + 1);
                regj.leDoArq(arquivo);
                if (regi.getNumero() > regj.getNumero()) {
                    aux = new Registro(regi.getNumero());
                    seekArq(i);
                    regj.gravaNoArq(arquivo);
                    seekArq(i + 1);
                    aux.gravaNoArq(arquivo);
                    mov += 2;
                }
                comp++;
            }
            tl--;
            for (i = tl - 1; i > inicio; i--) {
                seekArq(i);
                regi.leDoArq(arquivo);
                seekArq(i - 1);
                regj.leDoArq(arquivo);
                if (regi.getNumero() < regj.getNumero()) {
                    aux = new Registro(regi.getNumero());
                    seekArq(i);
                    regj.gravaNoArq(arquivo);
                    seekArq(i - 1);
                    aux.gravaNoArq(arquivo);
                    mov += 2;
                }
                comp++;
            }
            inicio++;
        }

    }

    public void quickCP(int ini, int fim) {
        Registro aux = new Registro();
        Registro regi = new Registro();
        Registro regj = new Registro();
        Registro pivo = new Registro();
        this.initComp();
        this.initMov();
        int i = ini;
        int j = fim;

        seekArq((ini + fim) / 2);
        pivo.leDoArq(arquivo);
        while (i < j) {
            seekArq(i);
            regi.leDoArq(arquivo);

            while (regi.getNumero() < pivo.getNumero()) {
                comp++;
                i++;
                seekArq(i);
                regi.leDoArq(arquivo);
            }
            comp++;
            seekArq(j);
            regj.leDoArq(arquivo);

            while (regj.getNumero() > pivo.getNumero()) {
                comp++;
                j--;
                seekArq(j);
                regj.leDoArq(arquivo);
            }
            comp++;

            if (i <= j) {
                aux = new Registro(regi.getNumero());
                seekArq(i);
                regj.gravaNoArq(arquivo);
                seekArq(j);
                aux.gravaNoArq(arquivo);
                i++;
                j--;
                mov += 2;
            }
        }
        if (ini < j) {
            quickCP(ini, j);
        }
        if (i < fim) {
            quickCP(i, fim);
        }
    }

    public void quickSP(int ini, int fim) {
        Registro regi = new Registro();
        Registro regj = new Registro();
        Registro aux = new Registro();
        this.initComp();
        this.initMov();
        int i = ini, j = fim;
        boolean flag = true;

        while (i < j) {
            seekArq(i);
            regi.leDoArq(arquivo);
            seekArq(j);
            regj.leDoArq(arquivo);
            if (flag) {
                while (i < j && regi.getNumero() <= regj.getNumero()) {
                    comp++;
                    i++;
                    seekArq(i);
                    regi.leDoArq(arquivo);
                }
                comp++;
            } else {
                while (i < j && regj.getNumero() >= regi.getNumero()) {
                    comp++;
                    j--;
                    seekArq(j);
                    regj.leDoArq(arquivo);
                }
                comp++;
            }
            aux = new Registro(regi.getNumero());
            seekArq(i);
            regj.gravaNoArq(arquivo);
            seekArq(j);
            aux.gravaNoArq(arquivo);
            flag = !flag;
            mov += 2;
        }
        if (ini < i - 1) {
            quickSP(ini, i - 1);
        }
        if (j + 1 < fim) {
            quickSP(j + 1, fim);
        }
    }

    public void countingSort() {

        Arquivo aux = new Arquivo("arqAuxCounting.txt");
        Arquivo auxFinal = new Arquivo("arqAuxFinal.txt");
        int maior = 0, i;
        Registro reg = new Registro(0);
        Registro regAux = new Registro(0);

        exibeArq();
        seekArq(0);
        System.out.println("----C------------------------");
        //pega o maior
        while (!eof()) {
            reg.leDoArq(arquivo);
            if (reg.getNumero() > maior) {
                maior = reg.getNumero();
            }
        }
        //cria o novo arquivo com o tamanho do maior + 1
        for (i = 0; i < maior + 1; i++) {
            regAux = new Registro(0);
            regAux.gravaNoArq(aux.arquivo);
        }

        seekArq(0);
        //coloca a quantidade no arquivo novo
        while (!eof()) {
            reg.leDoArq(arquivo);
            aux.seekArq(reg.getNumero());
            regAux.leDoArq(aux.arquivo);
            regAux.setNumero(regAux.getNumero() + 1);
            aux.seekArq(reg.getNumero());
            regAux.gravaNoArq(aux.arquivo);
        }

        //soma acumulada
        i = 1;
        aux.seekArq(i);
        while (!aux.eof()) {
            seekArq(i - 1);
            reg.leDoArq(aux.arquivo);
            seekArq(i);
            regAux.leDoArq(aux.arquivo);

            aux.seekArq(i);
            regAux.setNumero(reg.getNumero() + regAux.getNumero());
            regAux.gravaNoArq(aux.arquivo);
            i++;
        }
       //devolve ordenado

        i = 0;
        seekArq(0);
        while (!eof()) {
            reg.leDoArq(arquivo);

            aux.seekArq(reg.getNumero());
            regAux.leDoArq(aux.arquivo);
            regAux.setNumero(regAux.getNumero() - 1);
            regAux.gravaNoArq(aux.arquivo);
            auxFinal.seekArq(regAux.getNumero() - 1);
            reg.gravaNoArq(auxFinal.arquivo);
        }
        seekArq(0);
        auxFinal.seekArq(0);
        while (!eof()) {
            reg.leDoArq(auxFinal.arquivo);
            reg.gravaNoArq(arquivo);
        }

        exibeArq();
    }

    public void bucketSort() {
        int maior = 0, i, j, k;
        Arquivo aux[] = new Arquivo[filesize()];
        Registro reg = new Registro();
        seekArq(0);
        mov++;
        while (!eof()) {
            reg.leDoArq(arquivo);
            if (reg.getNumero() > maior) {
                maior = reg.getNumero();
            }
            comp++;
        }
        int ini, fim;
        int n = filesize();

        //percorre o vetor
        i = 0;
        j = 0;

        seekArq(0);
        mov++;
        while (!eof()) {
            seekArq(j);
            mov++;
            reg.leDoArq(arquivo);
            ini = i * (maior + 1) / n;
            fim = (i + 1) * (maior + 1) / n;
            k = 0;
            while (!eof() && reg.getNumero() > fim) {
                k++;
                i++;
                ini = i * (maior + 1) / n;
                fim = (i + 1) * (maior + 1) / n;
                reg.leDoArq(arquivo);
            }
            seekArq(k);
            mov++;
            reg.gravaNoArq(aux[k].arquivo);
        }
        for (i = 0; i < aux.length; i++) {
            aux[i].selecaoDireta();
        }
        seekArq(0);
        mov++;
        for (i = 0; i < aux.length; i++) {
            aux[i].seekArq(0);
            while (!aux[i].eof()) {
                reg.leDoArq(aux[i].arquivo);
                reg.gravaNoArq(arquivo);
            }
        }
    }

    public void RadixSort(){
        int i;
        Registro maior = maiorValor();
        Registro reg = new Registro();
        int exp = 1; 
        while(maior.getNumero()/exp > 0){
            Arquivo b = new Arquivo("e:\\ArqB.dat");
            Arquivo Count = new Arquivo("e:\\ArqAux.dat");
            for(i=0;i<10;i++){
                reg.setNumero(0);
                reg.gravaNoArq(Count.arquivo);
            }
            seekArq(0);
            mov++;
            for(i=0;!eof();i++){
                int pos;
                //arquivo principal
                reg.leDoArq(arquivo);
                pos=(reg.getNumero()/exp) % 10;
                Count.seekArq(pos);
                //arquivo count
                reg.leDoArq(Count.arquivo);
                Count.seekArq(pos);
                reg.setNumero(reg.getNumero()+1);
                reg.gravaNoArq(Count.arquivo);
            }
            Count.seekArq(0);
            mov++;
            reg.leDoArq(Count.arquivo);
            for(i=1;!Count.eof();i++){
                Registro aux = new Registro();
                aux.leDoArq(Count.arquivo);
                Count.seekArq(i);
                mov++;
                aux.setNumero(aux.getNumero()+reg.getNumero());
                aux.gravaNoArq(Count.arquivo);
                reg=aux;
            }
            b.seekArq(0);
            for(i=0;i < filesize();i++){
                reg.setNumero(0);
                reg.gravaNoArq(b.arquivo);
            }
            for(i=filesize()-1;i>=0;i--){
                Registro aux = new Registro();
                int pos;
                seekArq(i);
                mov++;
                reg.leDoArq(arquivo);
                
                pos= (reg.getNumero()/exp)%10;
                Count.seekArq(pos);
                aux.leDoArq(Count.arquivo);
                aux.setNumero(aux.getNumero()-1);
                Count.seekArq(pos);
                aux.gravaNoArq(Count.arquivo);
                b.seekArq(aux.getNumero());
                mov++;
                reg.gravaNoArq(b.arquivo);
            }
            seekArq(0);
            mov++;
            b.seekArq(0);
            while(!b.eof()){
                reg.leDoArq(b.arquivo);
                reg.gravaNoArq(arquivo);
            }
            exp*=10;            
        }
    }
    
    public void exibeArq() {
        seekArq(0);
        Registro reg = new Registro();
        while (!eof()) {
            reg.leDoArq(arquivo);
            reg.exibe();
        }
    }

    //calcula comparacões e movimentações de cada metodo
    public double calculaMovInsDir(int n, int tipo) {
        double retorno = 0;
        switch (tipo) {
            case 1:
                retorno = 3 * (n - 1);
                break;
            case 2:
                retorno = (n * n + 9 * n - 10) / 4;
                break;
            case 3:
                retorno = (n * n + 3 * n - 4) / 2;
        }
        return retorno;
    }

    public double calculaCompInsDir(int n, int tipo) {
        double retorno = 0;
        switch (tipo) {
            case 1:
                retorno = n - 1;
                break;
            case 2:
                retorno = (n * n + n + 2) / 4;
                break;
            case 3:
                retorno = (n * n + n - 4) / 4;
        }
        return retorno;
    }

    public double calculaCompInsBin(int n, int tipo) {
        double retorno = 0;
        switch (tipo) {
            case 2:
                retorno = (n * (Math.log(n) - Math.log(Math.E)));
                break;
            case 3:
                retorno = Math.E;
        }
        return retorno;
    }

    public double calculaMovInsBin(int n, int tipo) {
        double retorno = 0;
        switch (tipo) {
            case 1:
                retorno = 3 * (n - 1);
                break;
            case 2:
                retorno = (n * n - 9 * n - 10) / 4;
                break;
            case 3:
                retorno = (n * n - 3 * n - 4) / 2;
        }
        return retorno;
    }

    public double calculaCompSelDir(int n) {
        return (n * n - 1) / 2;
    }

    public double calculaMovSelDir(int n, int tipo) {
        double retorno = 0;
        double g = 0.5777216;
        switch (tipo) {
            case 1:
                retorno = 3 * (n - 1);
                break;
            case 2:
                retorno = n * (Math.log(n) + g);
                break;
            case 3:
                retorno = n * n / 4 + 3 * (n - 1);
        }
        return retorno;
    }

    public double calculaCompShakeSort(int n) {
        return (n * n - n) / 2;
    }

    public double calculaMovShakeSort(int n, int tipo) {
        double retorno = 0;
        switch (tipo) {

            case 2:
                retorno = 3 + (n * n - n) / 2;
                break;
            case 3:
                retorno = 3 + (n * n - n) / 4;
        }
        return retorno;
    }

    public void geraArquivoOrdenado() {
        Registro reg;
        for (int i = 1; i < 51; i++) {
            reg = new Registro(i);
            reg.gravaNoArq(arquivo);
        }
    }

    public void geraArquivoReverso() {
        Registro reg;
        for (int i = 256; i > 205; i--) {
            reg = new Registro(i);
            reg.gravaNoArq(arquivo);
        }
    }

    public void geraArquivoRandomico() {
        Registro reg;
        for (int i = 0; i < 50; i++) {
            reg = new Registro((int) ((Math.random() * 7) + 1));
            reg.gravaNoArq(arquivo);
        }
    }
     
    public void fusao(RandomAccessFile arq1, RandomAccessFile arq2, int seq){
        int i,j,k,t_seq=seq;
        int tl = filesize();
        Registro regI = new Registro();
        Registro regJ = new Registro();
        
        i=j=k=0;
        
        while(k < tl){
            
            while(i<seq && j<seq){
                regI.leDoArq(arq1);
                regJ.leDoArq(arq2);
                comp++;
                if(regI.getNumero() < regJ.getNumero()){
                    seekArq(k++);
                    regI.gravaNoArq(arquivo);
                    i++;
                    mov++;
                }
                else{
                    seekArq(k++);
                    regJ.gravaNoArq(arquivo);
                    j++;
                    mov++;
                }
            }
            while(i<seq){
                regI.leDoArq(arq1);               
                seekArq(k++);
                regI.gravaNoArq(arquivo);
                mov++;
            }
            while(j<seq){
                regJ.leDoArq(arq2);
                seekArq(k++);
                regJ.gravaNoArq(arquivo);
                mov++;
            }
            seq+=t_seq;
        }
    }    
    
    public void particao(RandomAccessFile arq1, RandomAccessFile arq2){
        int meio=filesize()/2;
        Registro reg = new Registro(0);
        
        for(int i=0;i<meio;i++)
        {
            seekArq(i);
            reg.leDoArq(arquivo);
            reg.gravaNoArq(arq1);
            
            seekArq(meio+i);
            reg.leDoArq(arquivo);
            reg.gravaNoArq(arq2);
            mov+=2;
        }
    }    
    
    public void MergeSort() throws FileNotFoundException{
        RandomAccessFile arq1 = new RandomAccessFile("c:\\arq1.txt", "rw");
        RandomAccessFile arq2 = new RandomAccessFile("c:\\arq2.txt", "rw");
        int seq = 1;
        int tl = filesize();
               
        while(seq < tl){
            particao(arq1, arq2);
            fusao(arq1, arq2, seq);
            
            seq*=2;
        }
    }

    public void combo_sort() {
        
        int i, j, intervalo, trocado = 1;
        Registro auxi = new Registro();
        Registro auxj = new Registro();
        Registro aux = new Registro();

        intervalo = filesize();
        
        while (intervalo > 1 || trocado == 1) {
            intervalo = intervalo * 10 / 13;
            if (intervalo == 9 || intervalo == 10) {
                intervalo = 11;
            }
            comp+=2;
            if (intervalo < 1) {
                intervalo = 1;
            }
            comp++;
            trocado = 0;
            
            for (i = 0, j = intervalo; j < filesize(); i++, j++) {
                seekArq(i);
                mov++;
                auxi.leDoArq(arquivo);

                seekArq(j);
                mov++;
                auxj.leDoArq(arquivo);
                if (auxi.getNumero() > auxj.getNumero()) {
                    
                    seekArq(i);
                    mov++;
                    auxi.leDoArq(arquivo);
                    
                    seekArq(i);
                    mov++;
                    aux.leDoArq(arquivo);
                    
                    auxi = auxj;
                    auxj = aux;
                    
                    auxi.gravaNoArq(arquivo);
                    auxj.gravaNoArq(arquivo);
                    
                    trocado = 1;
                }
                comp++;
            }
        }
    }
    
    public void gnome() {
        int info, posAnt, posProx;
        
        Registro aux = new Registro();
        Registro auxProx = new Registro();
        Registro auxAnt = new Registro();
        
        int tl = filesize();
        
        for (int i = 0; i < tl; i++){
            seekArq(i);
            mov++;
            aux.leDoArq(arquivo);
            auxProx.leDoArq(arquivo);
            
            if (aux.getNumero() > auxProx.getNumero()) {
                comp++;
                posAnt = i;
                posProx = i + 1;
                seekArq(i);
                mov++;
                auxAnt.leDoArq(arquivo);
                auxProx.leDoArq(arquivo);
                
                if (auxAnt.getNumero()> auxProx.getNumero()) {
                    
                    info = auxAnt.getNumero();
                    auxAnt.setNumero(auxProx.getNumero());
                    auxProx.setNumero(info);
                    
                    posAnt--;
                    posProx--;
                }
                comp++;
            }
        }
    }
}
