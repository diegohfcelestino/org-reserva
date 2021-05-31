package com.orgsystem.orgreserva.entities.enums;

public enum TipoCadastro {

        SALA(1),
        CARRO(2);

        private int cod;
        private String descricao;

        private TipoCadastro(int cod){
            this.cod = cod;
        }

        public int getCod() {
            return cod;
        }


    public static TipoCadastro toEnum(int cod){
        for (TipoCadastro x : TipoCadastro.values()){
            if (x.getCod() == cod){
                return x;
            }
        }
        throw new IllegalArgumentException("Código Invalido");
    }

    }


