let id=1;
function crearAlumno(nombreAlumno, semestreAlumno)
{
  let idAlumno=id;
  id+=1;
  const encript=function()
  {
    //funcion que encripta el nombre
    let h = 0, l = nombreAlumno.length, i = 0;
    if ( l > 0 )
      while (i < l)
        h = (h << 5) - h + nombreAlumno.charCodeAt(i++) | 0;
    return h;
  }; 
  const getId=function()
  {
    return idAlumno;
  };
  const getEncryptedValue=function()
  {
    return encript();
  };
  return{
    nombre: nombreAlumno,
    semestre: semestreAlumno,
    getId: getId,
    codigo: getEncryptedValue
  };
}
const Bernardo=crearAlumno("Bernardo", 6);
console.log(`${Bernardo.nombre} cursa el semestre #${Bernardo.semestre}, su id es ${Bernardo.getId()} y su código privado es ${Bernardo.codigo()}`);
const Mauricio=crearAlumno("Mauricio", 6);
console.log(`${Mauricio.nombre} cursa el semestre #${Mauricio.semestre}, su id es ${Mauricio.getId()} y su código privado es ${Mauricio.codigo()}`);