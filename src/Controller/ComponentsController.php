<?php 

namespace Liceo\Bootcamp\Controller;

use Liceo\Bootcamp\Classes\AbstractController;
use Liceo\Bootcamp\Interfaces\Controller;

class ComponentsController extends AbstractController implements Controller {
    public function display() {
        
    }

    public function modal() {
        $this->loadTemplate('components/modal.php', [], [['type' => 'module', 'path' => '../src/assets/js/components/modal.js']],['../src/assets/css/modal.css']);
    }

    public function tab() {
        $this->loadTemplate('components/tab.php', [], [['type' => 'module', 'path' => '../src/assets/js/components/tab.js']],['../src/assets/css/tab.css']);
    }

    public function toast() {
        $this->loadTemplate('components/toast.php', [], [['type' => 'module', 'path' => '../src/assets/js/components/toast.js']],['../src/assets/css/toast.css']);
    }
}