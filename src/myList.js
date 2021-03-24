import {LitElement,html} from 'lit-element';
class MyList extends LitElement { 

    constructor(){
        super();
    }
    static get properties(){
        return{
            title:{type:String},
            lista:{type:Array}
        }
    }
    render(){
        return html`<div>
                        <h1>${this.title}</h1>
                        <ul>
                        ${this.lista !== undefined ? this.lista.map(el=>html`<li>${el.name}</li>`) : 'Cargando datos'}
                        </ul>
                    </div>`;
    }
}
customElements.define('my-list',MyList);