<?php

namespace Liceo\Bootcamp\Controller;

use Liceo\Bootcamp\Classes\AbstractController;
use Liceo\Bootcamp\Interfaces\Controller;

class DefaultController extends AbstractController implements Controller {
    public function display() {
        $this->loadTemplate('home.php', ['saludos' => 'Hola mundo']);
    }
}