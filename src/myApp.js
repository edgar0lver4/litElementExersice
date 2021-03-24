import {LitElement,html} from 'lit-element';
import './hellowWord';

class MyApp extends LitElement { 

    render(){
        return html`<div>Hola mundo2</div>
                    <hellow-word></hellow-word>
        `;
    }
}
customElements.define('my-app',MyApp);