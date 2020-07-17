
const app= new Vue({

    el:'#app',
    data:{

titulo: 'Tareas Terrabio',
tareas: [],
nuevaTarea:''
    },
    methods:{
agregarTarea: function(){

    this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false
    });
 
    this.nuevaTarea='';
    localStorage.setItem('Tareas-terrabio', JSON.stringify(this.tareas));
},
agregarTiempo: function(){
    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end
    }, cb);

    cb(start, end);
   
 
    this.nuevaTarea =cb;
    localStorage.setItem('Tareas-terrabio', JSON.stringify(this.tareas));
},
editarTarea: function(ind){
this.tareas[ind].estado=true;
localStorage.setItem('Tareas-terrabio', JSON.stringify(this.tareas));
},
eliminar: function(ind){
    this.tareas.splice(ind,1);
    localStorage.setItem('Tareas-terrabio', JSON.stringify(this.tareas)); 
}


    },
created: function(){
let datosDB = JSON.parse(localStorage.getItem('Tareas-terrabio'));
if(datosDB == null){
this.tareas=[];
}
else{
    this.tareas=datosDB;
}
}

});