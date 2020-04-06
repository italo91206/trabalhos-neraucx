package testar;

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

    /*public void insercao_direta()
    {
        int elem;
        No pi=inicio.getProx();
        No aux,pos;
      
    
        while(pi!=null)
        {
            aux=pi;
            pos=pi;
            pos=pos.getAnt();            
            while(pos!=null &&  aux.getInfo()<pos.getInfo())
            {
                elem=aux.getInfo();
                aux.setInfo(pos.getInfo());
                pos.setInfo(elem);
    
                pos=pos.getAnt();
                aux=aux.getAnt();
                        
             }         
           pi=pi.getProx();
        }
    }*/
    
    public void insercao_binaria()
    {
        Registro aux = new Registro();
        Registro aux2 = new Registro();
        int pos;
        int tl = filesize();
        
        for (int i=0; i < tl; i++)
        {
            seekArq(i);
            aux.leDoArq(arquivo);

            pos = busca_binaria(aux.getCodigo(),i);
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

    //O Heap tem 3 funções
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
    
    public void fusao(Lista l1,Lista l2,int seq){
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
    
    /*public void shake()
    {
        No tl2 = fim,pi,ini=inicio;
        int aux,aux2=0;
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
    }   */
    
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


}
