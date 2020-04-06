struct primitivo{
    int codigo_mensagem;
    int codigo_rastreador;
    int codigo_veiculo;
    int codigo_tipo;
    char data_recebida[20];
    int id_rastreador;
    char data_gps[25];
    float latitude;
    float longitude;
    float endereco[100];
    float placa[10];
    float nome_veiculo[100];
    float tipo_veiculo[20];
    int ignicao;
    float tensao;
    float horimetro;
    float hodometro;
    int velocidade;
    char icone[20];
    char cor;
    int sirene;
    int bloqueio;
    int vei_bloqueio;
    int vei_sirene;
    char tipo_alerta[20];
};

struct tratado{
    char data_gps[20];
    char data_recebida[20];
    float tensao;
    float horimetro;
    int velocidade;
    char endereco[100];
    float latitude;
    float longitude;
}