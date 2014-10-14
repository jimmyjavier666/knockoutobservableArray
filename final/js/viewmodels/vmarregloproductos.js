/**
 * Created by Jimmy Javier on 13/10/2014.
 */
(function(orfisApp){
    function ProductoViewModel(){
        var self=this;

        self.codigosProducto=[
            {nombre:'Taylor',codigo:'TH1256'},
            {nombre:'Yamaha',codigo:'RG256'},
            {nombre:'Ibanez',codigo:'TO83'},
            {nombre:'ESP',codigo:'ES741'},
            {nombre:'Jackson',codigo:'TY666'},
        ];

        self.producto=new orfisApp.Producto({nombre:'',codigo:'',cantidad:0,precio:0})
        self.productos=ko.observableArray();

        self.agregarProducto=function(){

            if(self.producto){
                var producto= new orfisApp.Producto({nombre:self.producto.nombre(),
                                                    codigo:self.producto.codigo(),
                                                    cantidad:self.producto.cantidad(),
                                                    precio:self.producto.precio()});
                self.productos.push(producto);

                //Limpiamos los valores del producto

                self.producto.nombre('');
                self.producto.codigo('');
                self.producto.cantidad(0);
                self.producto.precio(0);
            }

        };



    }

    ko.applyBindings(new ProductoViewModel());
}(window.orfisApp));
