<?php   
    // A seção está sendo inicializada no guarda de rota ou no index de rotas
    session_start();

    #if(empty($_SESSION['login'])){
    #    header('Location: ./');
    #    exit();
    #}
?>
