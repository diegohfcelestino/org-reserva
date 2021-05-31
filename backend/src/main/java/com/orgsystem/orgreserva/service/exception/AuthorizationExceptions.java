package com.orgsystem.orgreserva.service.exception;

public class AuthorizationExceptions extends RuntimeException{

    public AuthorizationExceptions(String msg){
        super(msg);
    }


    public AuthorizationExceptions(String msg,Throwable cause){
        super(msg,cause);
    }
}
