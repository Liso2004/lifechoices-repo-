<?php
class database { //setup 
    public static function connect(){
        return new mysqli("localhost","root","liso1707","lifechoices_shop");
    }

}