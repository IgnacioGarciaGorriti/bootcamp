<?php

namespace Liceo\Bootcamp\Classes;

class AbstractController {
    public function notFound() {
        echo "404";
        die();
    }

    public function loadTemplate(string $file_path, array $args = [], array $scripts = [], array $styles = []) {
        $script_html = '';
        $styles_html = '';
        foreach ($scripts as $script) {
            $script_html .= '<script type="' . $script['type'] . '" src="' . $script['path'] . '"></script>' . PHP_EOL;
        }

        foreach ($styles as $style) {
            $styles_html .= '<link type="text/css" rel="stylesheet" href="' . $style . '">' . PHP_EOL;
        }

        include_once __DIR__ . '/../templates/page.php';
    }
    
}