/** @type {import('next').NextConfig} */
const nextConfig = {                     // Añadimos elementos necesarios para la app
  reactStrictMode: true,                 //
  env: {                                 //--> Para trabajar con variables de entorno (puedo tener diferentes valores)
    customKey: 'customValue',            //tener valores designados (me deja tener valor asignado)
  },                                     //en produccion de nube puedo acceder a los elementos
  basePath: '/dist',                     //--> Donde se encuentra nuestro proyecto
  compress: true,                        //--> como se presentara y comprimira el proyecto (activo: protocolo gesip)
  async redirects() {                    //--> Redirecciones (para enviar a otra seccion o cambios temporales)
    return [
      {                                  //trabajaremos con cada elemento
        source: '/hola',                 //Donde nos redirigiremos (todo hola destinara a: destination)
        destination: 'https://github.com/romenter',  //recibe source
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
