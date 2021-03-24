import {LitElement,html} from 'lit-element';
import './myMessage';
import './myList';

class HellowWord extends LitElement { 
    static get properties(){
        return{
            message:{type:String},
            count:{type:Number},
            messageOutside:{type:String},
            items:{type:Array}
        }
    }
    constructor(){
        super();
        this.message = 'Hello Word';
        this.count = 0;
        this.items = [
            {
                id:1, 
                name:'Your Name',
                year:2018
            },
            {
                id:2,
                name:"El gigante de hierro",
                year:1995
            },
            {
                id:3,
                name:"Contacto sangriento",
                year:1985
            },
            {
                id:4,
                name:"Spirit",
                year:2001
            },
            {
                id:5,
                name: "101 Dalmatas",
                year:1997
            }
        ];
    }

    render(){
        return html`<div>
            <p>Message:${this.message}</p>
            <p>MessageOutside:${this.messageOutside}</p>     
            <p>Count:${this.count}</p>   
            <my-message message="Mensaje de prueba"></my-message>
            <my-list title="Mis peliculas favoritas" lista=${ JSON.stringify(this.items) }></my-list>
        </div>`;
    }
}
customElements.define('hellow-word',HellowWord);