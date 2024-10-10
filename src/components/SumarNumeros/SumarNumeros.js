import './SumarNumeros.css';
import img1 from './../../assets/images/img1.jpg';
function SumarNumeros(){
    const suma = (numero1, numero2) =>{
        var suma = numero1 + numero2;
        console.log(suma);
    }
    return(
        <div className='SumarNumeros'>
            <h1>Botones Sumar</h1>
            <button onClick={() => suma(1 , 3)}>Sumar 1 + 3</button>
            <button onClick={() => suma(5 , 3)}>Sumar 5 + 3</button>
            <br/>
            <img src={img1}></img>
        </div>
    )
}

export default SumarNumeros;