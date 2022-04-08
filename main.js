var app = new Vue(
    {
        el: '#root',

// SECTION DATA

        data: {
          profile: {
            name: 'Angelo',
            avatar: './img/1.jpg'
          },

          contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],

// !SECTION DATA fine

// SECTION Variabili generiche

        guestImg: 0,
        nextMess: " ",
        dropMenuIndex: 0,
        guestsearch: "",

// !SECTION Variabili generiche fine

        dropMenu: [
            {
                classMenu: 'fa-solid fa-angle-down',
                // statusMenu: true
            },
            {
                classMenu: 'fa-solid fa-angle-up',
                // statusMenu: false
            }
        ],

    },

// !SECTION data fine

// SECTION Methods
        methods:{

//   NOTE Funzione per selezionare il contacts
        
       guestRight: function (element){
            this.guestImg = element
        },

//   NOTE Funzione per il inserire il messaggio

        addMess: function (){

            let giorno = dayjs().format('DD/MM/YYYY');
            let ora = dayjs().get('hour');
            let minuti= dayjs().get('minute');

            // FIXME fissare i minuti se inferiore a 10
            
            // if (this.minute <= 10) {
            //     this.minute = " '0' + ${this.minute} ";
            // }

            let newMess = 
                {
                date: `${giorno} ${ora}:${minuti} `,
                message: this.nextMess,
                status: 'sent'
                }
            
            let newMessOk = 
                {
                date: `${giorno} ${ora}:${minuti} `,
                message: 'Ok',
                status: 'received'
                }

            this.nextMess = ' '

            this.contacts[this.guestImg].messages.push(newMess)

            setTimeout(
                () => {
                    this.contacts[this.guestImg].messages.push(newMessOk)  
                }, 2000)
        
          },

//   NOTE Funzione per il dropMenuF

          dropMenuF: function(){
            
            if (this.dropMenuIndex == 1)
            {
                this.dropMenuIndex = 0
            }
            else{
                this.dropMenuIndex =1
            }
            },

//   NOTE Funzione per eliminare il messaggio
        //   FIXME Da sistemare quando e' l'ultimo
        
            removeLista: function(indexLista){
                console.log(indexLista)
                // let guestIndex = this.guestImg
                this.contacts[this.guestImg].messages.splice(indexLista, 1)
            },

// NOTE Funzione per la ricerca dei contatti

            search: function(){
                let h = this.contacts.length - 1
                let controlName = ' '
                console
                console.log('H: ' + h)
                console.log('Stringa' + this.contacts.length)
                console.log('testo: ' + this.guestsearch)

                for (let i = 0; i <= h ; i++)
                { 
                    controlName = this.contacts[i].name.includes(this.guestsearch)
                    console.log('For: ' + i)
                    console.log('Nome: ' + this.contacts[i].name)
                    console.log('Visibilita: ' + controlName);
                    
                    if (controlName == false && ) {
                        this.contacts[i].visible = false
                     }  

                }

//  Case sensitive lowercase
            
            },


        },

    // !SECTION Methods fine
      })