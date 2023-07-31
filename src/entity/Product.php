<?php

/* Esta es una clase Producto, una entidad que utilizaremos para 
   poder estandrizar la creación de nuestros productos y manejarlos 
   con toda la fuerza de la que nos provee la programación orientada a objetos.
*/
class Product {
    /** @var string $id */
    public string $id;

    /** @var string $description */
    public string $description;

    /** @var int $price */
    public int $price;
}