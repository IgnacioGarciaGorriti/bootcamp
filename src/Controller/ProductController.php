<?php

namespace Liceo\Bootcamp\Controller;

use Liceo\Bootcamp\Classes\AbstractController;

class ProductController extends AbstractController {

    /**
     * Este endpoint nos devuelve una lista de todos los productos de nuestros productos. 
     */
    public function list() {
        echo "list";
    }

    public function display() {
        echo "hey";
    }
}