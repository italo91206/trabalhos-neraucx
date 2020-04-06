package trabalhopo;

import java.util.Random;

public class Lista {

    protected No inicio;
    protected int ini, fim;
    
    Lista(){
        inicio=null;
        ini=0;
        fim=0;
    }

    Lista(int ini, int fim) {
        this.ini = ini;
        this.fim = fim;
    }
    
    Lista( No aux ){
        inicio = aux;
        ini = fim = 0;
    }

    public void insereInicio(int info) {
        No nova = new No(null, info);
        if (inicio == null) {
            inicio = nova;
        } else {
            nova.setProx(inicio);
            inicio = nova;
        }
    }
    
    public void insereFim(int info) {
        No nova = new No(null, info);
        No aux;
        if (inicio == null) {
            inicio = nova;
        } else {
            aux = inicio;
            while (aux.getProx() != null) {
                aux=aux.getProx();
            }
            if(aux.getProx() != null)
                aux.setProx(nova);
        }
    }

    public int getIni() {
        return ini;
    }

    public void setIni(int ini) {
        this.ini = ini;
    }

    public int getFim() {
        return fim;
    }

    public void setFim(int fim) {
        this.fim = fim;
    }
    
    public No getInicio(){
        return inicio;
    }
    
    public void SetInicio(No inicio){
        this.inicio=inicio;
    }

    public int maior() {
        No aux;
        int TL = listasize();
        int maior = 0;
        for (int i = 0; i < TL; i++) {
            aux = seekLista(i);
            if (aux.getInfo() > maior) {
                maior = aux.getInfo();
            }
        }
        return maior;
    }
    
    //metodos de lista aqui
    public void selecao_direta() {
        No menor;
        int info;
        No auxI;
        No auxJ;
        for (auxI = inicio; auxI != null; auxI = auxI.getProx()) {
            menor = auxI;
            for (auxJ = auxI.getProx(); auxJ != null; auxJ = auxJ.getProx()) {
                if (auxJ.getInfo() < menor.getInfo()) {
                    menor = auxJ;
                }
            }
            info = menor.getInfo();
            menor.setInfo(auxI.getInfo());
            auxI.setInfo(info);
        }
    }
    
    public int busca_binaria(int chave,int TL){
	No aux=inicio;
	int ini,meio,fim;
	meio=0;
	if(TL>0)
	{
		ini=0;
		fim=TL-1;
		meio=(ini+fim)/2;
		
		aux = seekLista(meio);
		while(ini<fim && chave != aux.getInfo())
		{
			aux = seekLista(meio);
			if(chave > aux.getInfo())
				ini=meio+1;
			else
				fim=meio;
			
			meio=(ini+fim)/2;
		}
		aux = seekLista(meio);
		if(chave == aux.getInfo())
			return meio;
		else if(chave > aux.getInfo())
			return meio+TL+1;
	}
	return meio+TL;
}

    public void insercao_binaria() {
        No aux, aux2, guarda;
        int pos, TL = listasize();

        for (int i = 0; i < TL; i++) {
            guarda = seekLista(i);
            pos = busca_binaria(guarda.getInfo(), i);
            //System.out.println("busca binária com " + guarda.getInfo() + " retornou a posicao: "+pos);
		//se nao achou pela busca, retorna a posicao ideal mais o tl
		if (pos >= 1) {
                pos -= i;
            }

            //remaneja a lista...
            for (int j = i; j > pos; j--) {
                aux = seekLista(j);
                aux2 = seekLista(j - 1);
                aux.setInfo(aux2.getInfo());
            }

            aux = seekLista(pos);
            aux.setInfo(guarda.getInfo());

            //exibir lista
        }
    }

    public void bolha() {
        No tl2 = inicio, pi;
        int aux;
        while (tl2 != null) {
            pi = inicio;
            while (pi.getProx() != null) {
                if (pi.getInfo() > pi.getProx().getInfo()) {
                    aux = pi.getInfo();
                    pi.setInfo(pi.getProx().getInfo());
                    pi.getProx().setInfo(aux);
                }

                pi = pi.getProx();
            }
            tl2 = tl2.getProx();
        }
    }

    //HEAP
    public void heap() {
        int tl = listasize();
        No aux, aux2;
        int f1, f2, maiorF, infoaux;

        while (tl > 1) {
            for (int pai = tl / 2 - 1; pai >= 0; pai--) {
                f1 = pai + pai + 1;
                f2 = f1 + 1;
                maiorF = f1;

                aux = seekLista(f1);
                aux2 = seekLista(f2);

                if (f2 < tl && aux2.getInfo() > aux.getInfo())//vet[f2]>vet[f1]
                {

                    maiorF = f2;
                    aux = seekLista(maiorF);
                    aux2 = seekLista(pai);
                    if (aux.getInfo() > aux2.getInfo())//vet[maiorF]>vet[pai]
                    {
                        infoaux = aux2.getInfo();  //aux=vet[pai];
                        aux2.setInfo(aux.getInfo()); //vet[pai]=vet[maiorF];
                        aux.setInfo(infoaux); //vet[maiorF]=aux;
                    }
                }

            }
            aux = seekLista(0);
            aux2 = seekLista(tl - 1);

            infoaux = aux.getInfo(); //aux = vet[0];
            aux.setInfo(aux2.getInfo()); //vet[0] = vet[tl2-1];
            aux2.setInfo(infoaux); //vet[tl2-1] = aux;
            tl--;
        }
    }
    
    public No seekLista(int pos) {
        No aux = inicio;

        for (int i = 0; i < pos; i++) {
            aux = aux.getProx();
        }

        return aux;
    }

    public int listasize() {
        No aux = inicio;
        int tam = 0;
        while (aux != null) {
            aux = aux.getProx();
            tam++;
        }
        return tam;

    }
    
    //FIM HEAP
    
    //INICIO TIM SORT
    public void timSort(int[] arr) {
        No aux = inicio;
        int n = listasize();
        int RUN = 32;
        
        for (int i = 0; i < n; i += RUN) {
            tim_insertionSort(aux, i, Math.min((i + 31), (n - 1)));
        }

	// Começa a dar merge sempre em n^2 
        for (int size = RUN; size < n; size = 2 * size) {
            // Fusão nos sub-vetores já ordenado
            for (int left = 0; left < n; left += 2 * size) {
                // quase que o mesmo esquema ini/meio/fim do binário
                int mid = left + size - 1;
                int right = Math.min((left + 2 * size - 1), (n - 1));
                // só fazer a fusão
                Lista l1 = new Lista(seekLista(left));
                Lista l2 = new Lista(seekLista(mid));
                fusao(l1, l2, RUN);
            }
        }
    }
    
    public void tim_insertionSort(No aux, int left, int right){ 
        for (int i = left + 1; i <= right; i++)  
        { 
            No temp = seekLista(i); 
            int j = i - 1; 
           
            while (seekLista(j).getInfo() > temp.getInfo() && j >= left) 
            { 
                seekLista(j + 1).setInfo(seekLista(j).getInfo()); 
                j--; 
            } 
            seekLista(j+1).setInfo(temp.getInfo());
        } 
    } 
    // FIM TIM SORT
    public void particao(Lista l1, Lista l2){
        int meio=(listasize()/2);
        No aux = inicio;
        
        for(int i=0;i<meio;i++)
        {
            aux=seekLista(i);
            l1.insereFim(aux.getInfo());
            aux=seekLista(meio+i);
            l2.insereFim(aux.getInfo());
        }
    }
     
    public No seekLista2(int pos,Lista l1){
        No aux = l1.getInicio();
        
        for(int i=0;i<pos;i++)
            aux=aux.getProx();
        
        return aux;
    }
    
    public void fusao(Lista l1, Lista l2,int seq){
        int i,j,k,t_seq=seq, tl=listasize();
        
        i=j=k=0;
        No auxL=inicio;
        No aux,aux2;
        
        while(k < tl)
        {
            while(i<seq && j<seq)
            {
                aux=seekLista2(i, l1);
                aux2=seekLista2(j, l2);
                if(aux.getInfo() < aux2.getInfo())
                {
                    auxL=seekLista(k);
                    auxL.setInfo(aux.getInfo());
                    k++;i++;
                }
                else
                {
                    auxL=seekLista(k);
                    auxL.setInfo(aux2.getInfo());
                    k++;j++;
                }
                    
            }
            while(i<seq)
            {
                    aux=seekLista2(i, l1);
                    auxL=seekLista(k);
                    auxL.setInfo(aux.getInfo());
                    k++;i++;
            }
            while(j<seq)
            {
                    aux2=seekLista2(i, l2);
                    auxL=seekLista(k);
                    auxL.setInfo(aux2.getInfo());
                    k++;j++;
            }
                
            seq+=t_seq;
        }
    }
    
    public void MergeSort(){
        int tl=listasize();
        Lista l1 = new Lista();
        Lista l2 = new Lista();
        int seq = 1;
        
        while(seq < tl)
        {
            particao(l1, l2);
            fusao(l1, l2, seq);
            
            seq*=2;
        }
    }
    
    public void quick2(int ini, int fim){
        int i=ini, j=fim,auxinfo,pivo;
        No auxfinal = inicio;
        No aux1=inicio,aux2=inicio;
        aux1 = seekLista(ini+fim/2);
        pivo = aux1.getInfo();
        
        while(i<j)
        {
            aux1 = seekLista(i);
            aux2 = seekLista(j);
            while(aux1.getInfo() < pivo)
            {
                i++;
                aux1 = seekLista(i);
            }
            while(aux2.getInfo() > pivo)
            {
                j--;
                aux2 = seekLista(j);
            }
            
            if(i<=j)
            {
                auxinfo = aux1.getInfo();
                auxfinal = seekLista(i);
                auxfinal.setInfo(aux2.getInfo());
                auxfinal = seekLista(j);
                auxfinal.setInfo(auxinfo);
                i++;
                j--;
            }
        }
        if (ini < j)
            quick2(ini,j);
        if  (i < fim)
            quick2(i,fim);
    }
    
    public void quickCP(){
        quick2(0,listasize()-1);
    }

    public void quick(int ini, int fim){
        int i=ini, j=fim, auxinfo;
        boolean flag = true;
        No aux1,aux2;
        No auxfinal;
        while(i<j)
        {
            aux1 = seekLista(i);
            aux2 = seekLista(j);
            if (flag)
                while(i<j && aux1.getInfo()<= aux2.getInfo())
                {
                    i++;
                    aux1 = seekLista(i);
                    aux2 = seekLista(j);
                }
            else
                while(i<j && aux2.getInfo() >= aux1.getInfo())
                {
                    j--;
                    aux1 = seekLista(i);
                    aux2 = seekLista(j);
                }
            
            auxinfo = aux1.getInfo();
            auxfinal = seekLista(i);
            auxfinal.setInfo(aux2.getInfo());
            auxfinal = seekLista(j);
            auxfinal.setInfo(auxinfo);
            flag = !flag;
        }
        if(ini <i-1)
            quick(ini,i-1);
        if (j+1 < fim)
            quick(j+1,fim);
        
    }
    
    public void quickSP(){
        quick(0,listasize()-1);
    }
    
    public void shake(){
        No pi, tl2, ini;
        tl2 = seekLista(fim);
        ini = inicio;
        int aux, aux2=0;
        
        while(tl2!=ini && aux2==0)
        {
            pi=ini;
            while(pi.getProx()!=null)
            {
                if(pi.getInfo() > pi.getProx().getInfo())
                {
                    aux=pi.getInfo();
                    pi.setInfo(pi.getProx().getInfo());
                    pi.getProx().setInfo(aux);
                }
                pi=pi.getProx();
            }
            tl2=tl2.getAnt();
            if(tl2 == ini)
                aux2=1;
            else
            {
                pi=tl2;
                while(pi!=ini)
                {
                    if(pi.getInfo() < pi.getAnt().getInfo())
                    {
                        aux=pi.getInfo();
                        pi.setInfo(pi.getAnt().getInfo());
                        pi.getAnt().setInfo(aux);
                    }
                    pi=pi.getAnt();
                }
                ini=ini.getProx();
            }
        }
    }
    
    public void shell(){
        int dist=4,j,k,tl = listasize(),cont;
        No aux2;
        No aux;
        int infoaux;
               
        while(dist > 0)
        {
            for(int i=0;i<dist;i++)
            {
                j=i;
                while(j+dist < tl)
                {
                    aux=seekLista(j);
                    aux2=seekLista(j+dist);
                          
                    if(aux.getInfo()>aux2.getInfo())
                    {
                       //troca
                        infoaux=aux.getInfo();
                        aux.setInfo(aux2.getInfo());
                        aux2.setInfo(infoaux);
                        
                        k=j;
                        
                        aux=seekLista(k);
                        aux2=seekLista(k-dist);
                        
                        while(k-dist>=i && aux.getInfo() < aux2.getInfo())
                        {
                            
                            //troca
                            infoaux=aux2.getInfo();
                            aux2.setInfo(aux.getInfo());
                            aux.setInfo(infoaux);
                            
                            k=k-dist;
                        }
                       
                    }                    
                    j=j+dist;
                }
            }          
            dist=dist/2;
        }
    }

    public void bucket(){
        int TL = listasize();
        int novoTLMaximo = TL*TL;
        Lista buckets[] = new Lista[novoTLMaximo];
        
        for(int i=0; i<TL ; i++){
            int novoIndex = TL*seekLista(i).getInfo(); // gera o índice para colocar em seu devido bucket
            buckets[novoIndex].selecao_direta();
        }
        
        // Separei os elementos em seus devidos buckets
        for(int i=0; i< novoTLMaximo; i++){
            
        }
        // o código acima é pra organizar os buckets individualmente ( inserção ordenada )
        int index = 0;
        No aux = inicio;
        
        for(int i=0; i<TL; i++)
            for(int j=0; j < buckets[i].listasize(); j++)
                seekLista(index++).setInfo(buckets[i].seekLista(j).getInfo()); 
        // serve pra concatenar a lista de volta
    }
    
    public void combo_sort(int matriz[], int tamanho) {
        int i, j, intervalo, trocado = 1;
        int aux;
        intervalo = tamanho;
        while (intervalo > 1 || trocado == 1) {
            intervalo = intervalo * 10 / 13;
            if (intervalo == 9 || intervalo == 10) {
                intervalo = 11;
            }
            if (intervalo < 1) {
                intervalo = 1;
            }
            trocado = 0;
            for (i = 0, j = intervalo; j < tamanho; i++, j++) {
                if (matriz[i] > matriz[j]) {
                    aux = matriz[i];
                    matriz[i] = matriz[j];
                    matriz[j] = aux;
                    trocado = 1;
                }
            }
        }
    }
    
    public void gnome() {
        int info, posAnt, posProx;
        No aux, ant, prox, auxAnt, auxProx;
        aux = ant = prox = inicio;
        
        
        int tl = listasize();
        for (int i = 0; i < tl; i++){
            aux = seekLista(i);
            if (aux.getInfo() > aux.getProx().getInfo()) {
                posAnt = i;
                posProx = i + 1;
                auxAnt = seekLista(posAnt);
                auxProx = seekLista(posProx);

                if (auxAnt.getInfo() > auxProx.getInfo()) {
                    info = auxAnt.getInfo();
                    auxAnt.setInfo(auxProx.getInfo());
                    auxProx.setInfo(info);
                    posAnt--;
                    posProx--;
                }
            }
        }
    }
    
    public void counting() {
        int maior = maior();
        int TL = listasize();
        //aux da lista principal, dado que a lista principal se chame L
        No auxprincipal = inicio;

        //duas listas novas auxiliares
        Lista dois = new Lista();
        No aux = dois.getInicio(); //recebe inicio da lista dois
        Lista tres = new Lista();
        No entrada = tres.getInicio();//recebe inicio da listra tres

        for (int i = 0; i < maior + 1; i++) {
            No novo = new No(null, -1);
            aux.setProx(novo);
        }
        for (int i = 0; i < TL; i++) {
            auxprincipal = seekLista(i);

            aux = seekLista(auxprincipal.getInfo());
            aux.setInfo(aux.getInfo()+1);
        }
        for (int i = 1; i < maior + 1; i++) {
            aux = seekLista(i);
            aux.setInfo((aux.getAnt().getInfo()) + aux.getInfo());
        }
        for (int i = 0; i < TL; i++) {
            auxprincipal = seekLista(i);
            aux = seekLista(auxprincipal.getInfo());
			
            entrada = seekLista(aux.getInfo()-1);
            entrada.setInfo(auxprincipal.getInfo());
        }
        inicio = entrada; //lista "L" (principal) recebe a lista "entrada" (criada nesse metodo)
    }
    
    // TRANSFORMAR EM LISTA, VER DEPOIS
    public int indice(int elem, int alg){
        int mod = elem%(alg*10);
        return mod/alg;
    }
    
    public int qtde_passos(int elem){
        int aux=1,cont=0;
        while(elem/aux > 0)
        {
            aux = aux*10;
            cont++;
        }
        return cont;
    }
    
    public void zera_vetor(int vet[], int tl){
        for(int i=0; i<tl; i++)
            vet[i] = 0;
    }
    
    public void radix() {
        No auxa = inicio, auxi = inicio;
        int maior = maior();
        int mod, a;
        int matriz[][] = new int[10][10];
        int vetTL[] = new int[10];
        int passos = qtde_passos(maior);
        zera_vetor(vetTL, 10);
        int tl = listasize();

        for (int cont = 0; cont < passos; cont++) {
            a = 0;
            for (int i = 0; i < tl; i++) {
                auxi = seekLista(i);
                mod = indice(auxi.getInfo(), (int) Math.pow(10, cont));
                //insere_matriz(matriz, auxi.getInfo(), mod, vetTL);
            }
            for (int i = 0; i < 10; i++) {
                for (int j = 0; j < vetTL[i]; j++) {
                    auxa = seekLista(a);
                    auxa.getProx().setInfo(matriz[i][j]);
                }
            }
            zera_vetor(vetTL, 10);
        }
    }
}
