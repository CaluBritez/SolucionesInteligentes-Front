import './Contacto.css'


function Contacto() {
    return(
        <div id="box-Con">
            <h2>Tu consulta no molesta, no esperes más y envíanos tu propuesta</h2>
            <div id='box-input'>
                <input type="text" placeholder="Nombre Completo"/>
                <input type="text" placeholder="Email" />
            </div>
            <div id='box-textarea'>
                <textarea name="" id="input-consulta" cols="30" rows="10"></textarea>
                <button>Enviar</button>
            </div>
        </div>
    )
}

export default Contacto