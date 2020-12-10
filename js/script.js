// - creare una lista di cose da fare e mostrarla in pagina con Vue;
// - aggiungere un campo di input e un pulsante per aggiungere nuove cose da fare alla lista;
// - cancellare un item dalla lista, al click sulla relativa icona 'X'.
// Bonus:
// - Oltre al click sul pulsante, consentire l'inserimento del nuovo item anche premendo il tasto Invio della tastiera, dopo aver scritto il testo nel campo di input.

var app = new Vue(
  {
    el: "#container",
    data: {
      todoList: ["Fare colazione", "Lavarsi i denti", "Studiare", "Pranzare"],
      done: "X",
      todo: "",
    },
    // VARIANTE CON JQUERY DENTRO VUE PER HOVER SU SPAN ED EFFETTO SU LI
    
    // mounted: function(){
    //   $(".delete").mouseover(
    //     function(){
    //       var x = $(this).parent();
    //       x.addClass("scaled");
    //     }
    //   );
    //
    //   $(".delete").mouseleave(
    //     function(){
    //       var x = $(this).parent();
    //       x.removeClass('scaled');
    //     }
    //   );
    // },
    // updated: function(){
    //   $(".delete").mouseover(
    //     function(){
    //       var x = $(this).parent();
    //       x.addClass("scaled");
    //     }
    //   );
    //
    //   $(".delete").mouseleave(
    //     function(){
    //       var x = $(this).parent();
    //       x.removeClass('scaled');
    //     }
    //   );
    // },
    methods: {
      addElement: function(){
        this.todoList.push(this.todo);
        this.todo = "";
      },
      removeElement: function(i){
        this.todoList.splice(i, 1);
        console.log(i);
      },
      keywordAddElement: function(){
        if(event.which == 13){
          this.addElement();
        }
      },
    }
  }
);
