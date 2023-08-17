<?php

namespace Liceo\Bootcamp\Controller;

use Liceo\Bootcamp\Classes\AbstractController;
use Liceo\Bootcamp\Interfaces\Controller;

class FlexController extends AbstractController implements Controller {
    public function display() {
        $this->loadTemplate('components/flex.php', [], [], ['src/assets/css/flex.css']);
    }
}