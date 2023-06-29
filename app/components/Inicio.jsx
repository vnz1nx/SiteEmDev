import CompPrincipal from "./CompPrincipal";

export default function Inicio() {
  return(<>
    <div className="inicio">
      <CompPrincipal></CompPrincipal>

      <div>
        <p id="Web">WEB</p>
        <p id="Novidades">NOVIDADES</p>
        <p id="Kids">KIDS</p>
        <p id="Feminino">FEMININO</p>
        <p id="Masculino">MASCULINO</p>
        <p id="Latest">LATEST</p>
        <p id="Sale">SALE</p>
      </div>
    </div>
    </>)  
}