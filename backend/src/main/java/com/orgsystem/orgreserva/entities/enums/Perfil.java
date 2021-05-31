package com.orgsystem.orgreserva.entities.enums;

public enum Perfil {

        ADMIN(1,"PERFIL_ADMIN"),
        CLIENTE(2,"PERFIL_CLIENTE");

        private int cod;
        private String descricao;

        private Perfil(int cod, String descricao){
            this.cod = cod;
            this.descricao = descricao;
        }

        public int getCod() {
            return cod;
        }

        public String getDescricao() {
            return descricao;
        }

        public static Perfil toEnum(int cod){
            for (Perfil x : Perfil.values()){
                if (x.getCod() == cod){
                    return x;
                }
            }
            throw new IllegalArgumentException("Código Invalido");
        }
    }


