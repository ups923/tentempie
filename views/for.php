<?php
$data = [
    'productos' => array(
        'categorias'=> array(
            'alfajores'=> [
                array(
                    'nombre' => "CLASICOS",
                    'sabor' => "chocolate"
                ),
                array(
                    'nombre' => "CLASICOS",
                    'sabor' => "chocolate"
                ),
                
                
            ],
            'tortas'=> [
                array(
                    'nombre' => "PONQUE",
                    'sabor' => "chocolate"
                ),
                array(
                    'nombre' => "CREMA CLASICA",
                    'sabor' => "chocolate"
                ),
                
                
            ],
            
            
        )
    )
    
];


foreach($data as $producto => $value){
    //echo "<pre>".print_r($value, true);
    
    foreach ($value as $key => $valor){
      echo "<pre>".print_r(array_filter($valor), true);
        
    }
    
    
    
    
    
}
//echo "<pre>".print_r($data, true);

?>