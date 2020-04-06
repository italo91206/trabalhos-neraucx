package testar;

public class No {
    private No prox;
    private int info;
    
    No(No prox,int info)
    {       
        this.prox = prox;
        this.info = info;
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
    
}
