/**
 * Created by Jimmy Javier on 11/10/2014.
 */
(function(orfisApp){

    function Producto(data){
        var self=this;
        self.nombre=ko.observable(data.nombre);
        self.codigo=ko.observable(data.codigo);
        self.precio=ko.observable(data.precio);
        self.cantidad=ko.observable(data.cantidad);
    };

    orfisApp.Producto=Producto;

}(window.orfisApp));
