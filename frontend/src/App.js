import React, {useEffect, useState} from 'react';
const API = 'http://127.0.0.1:8000/api';

function App(){
  const [imagenes, setImagenes] = useState([]);
  const [archivo, setArchivo] = useState(null);
  const [titulo, setTitulo] = useState('');

  useEffect(()=> {
    fetch(`${API}/imagenes/`)
      .then(r=>r.json())
      .then(setImagenes)
      .catch(console.error);
  }, []);

  const subir = async (e) => {
    e.preventDefault();
    if(!archivo) return alert('Selecciona un archivo');
    const fd = new FormData();
    fd.append('titulo', titulo);
    fd.append('imagen', archivo);
    const res = await fetch(`${API}/imagenes/`, {
      method: 'POST',
      body: fd
    });
    if(res.ok){
      const nuevo = await res.json();
      setImagenes([nuevo, ...imagenes]);
      setArchivo(null);
      setTitulo('');
    } else {
      alert('Error subiendo');
    }
  };

  const eliminar = async (id) => {
    if(!window.confirm('Eliminar imagen?')) return;
    const res = await fetch(`${API}/imagenes/${id}/`, { method: 'DELETE' });
    if(res.ok){
      setImagenes(imagenes.filter(i=>i.id!==id));
    } else alert('Error eliminando');
  };

  return (
    <div style={{padding:20}}>
      <h1>Galería</h1>
      <form onSubmit={subir}>
        <input value={titulo} onChange={e=>setTitulo(e.target.value)} placeholder="Título (opcional)" />
        <input type="file" onChange={e=>setArchivo(e.target.files[0])} />
        <button type="submit">Subir imagen</button>
      </form>

      <div style={{display:'flex', flexWrap:'wrap', marginTop:20}}>
        {imagenes.map(img=>(
          <div key={img.id} style={{margin:10, border:'1px solid #ddd', padding:10}}>
            <img src={img.imagen} alt={img.titulo} style={{width:200, height:'auto'}}/>
            <p>{img.titulo}</p>
            <button onClick={()=>eliminar(img.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
