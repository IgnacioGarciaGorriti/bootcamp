<?php
    
use Liceo\Bootcamp\Classes\AbstractController;
$url = array_values(array_filter(explode('/', $_SERVER['REQUEST_URI'])));
$controllers = [];
$controller = '';
$method = '';
$abstractController = new AbstractController();

$files = scandir( __DIR__ . '/../src/Controller' );
if(empty($files)) {
    return;
}
foreach ($files as $file) {
    if(str_contains($file, '.php')) {
        $controllers[] = strtolower(str_replace('Controller.php', '', $file));
    }
}
if(empty($url[1])) {
    $controller = new Liceo\Bootcamp\Controller\DefaultController();
} else if (in_array( strtolower( $url[1] ), $controllers ) ) {
    $controllerPath = "Liceo\Bootcamp\Controller\\" . ucfirst($url[1]) . "Controller";
    $controller = new $controllerPath();
} else {
    $abstrctController->notFound();
    die();
}
if(empty($url[2])) {
    $method = 'display';
}else if ( is_callable( [ $controller, $url[2] ] ) ) {
    $method = $url[2];
} else {
    $abstractController->notFound();
}

return json_encode($controller->$method());