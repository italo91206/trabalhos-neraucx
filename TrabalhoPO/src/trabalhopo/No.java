package trabalhopo;

public class No {
    private No prox, ant;
    private int info;
    
    No(No prox, int info){       
        this.prox = prox;
        this.info = info;
    }
    
    No(){
        prox = null;
        ant = null;
    }

    public No getProx() {
        return prox;
    }

    public void setProx(No prox) {
        this.prox = prox;
    }
    public int getInfo() {        
        return info;
    }

    public void setInfo(int info) {
        this.info = info;
    }
    
    public No getAnt(){
        return ant;
    }
    
    public void setAnt(No ant){
        this.ant = ant;
    }
    
}
