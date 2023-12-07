import './Estilo.css'

function Inicio() {
  return (
    <div className="Container max-w-screen-md mx-auto p-5" >
      <h1 className="text-red-700 text-center mb-10 text-4xl font-bold font-serif">
        ADP Vicente Noble
      </h1>
      <p className="text-center text-justify text-base mb-15 leading-6 mb-2">
        Bienvenidos al sitio web oficial de la Asociación Dominicana de Profesores
        de la seccional de Vicente Noble. 
      </p>
      
      <h2 className="text-center mb-4 text-red-700 text-2xl font-bold font-serif">
        Municipio de Vicente Noble
        </h2>

      <img
        src="/images/VicenteNobleParque.jpeg"  
        alt="Historia de la ADP"
        className="mx-auto my-8 rounded-lg shadow-lg max-w-96"
      />

      <p className="text-center text-justify text-base mb-15 leading-6 mb-2">
        Vicente Noble es uno de los once municipios de la provincia Barahona de la República Dominicana. Está ubicada en la planicie del valle de Neiba al norte de esta provincia. Tiene por límites: la provincia Bahoruco al norte, la provincia Azua al este, y el Río Yaque del Sur al oeste y sur.
      </p>
      
      <p className="text-center text-justify text-base mb-15 leading-6 mb-2">
        En el siglo XIX, los primeros pobladores de esta área fueron las familias González y Espejo procedentes de Azua de Compostela quienes llamaron esta comunidad El Alpargatal. En el año 1943, el dictador Rafael Leonidas Trujillo decretó su nombre actual en conmemoración de las acciones del coronel Vicente Noble en la Batalla Fuente del Rodeo, el primer encuentro armado entre la República Dominicana y Haití durante la Guerra de la Independencia. Fue decretada municipio de Barahona el 16 de agosto de 1978.
      </p>

      <p className="text-center text-justify text-base mb-15 leading-6 mb-2">
        La economía de Vicente Noble es principalmente agrícola, cuyos cultivos de mayor productividad son el plátano y la caña de azúcar. También cuenta con plantaciones de coco, yuca, batata, pimiento, berenjena y maíz. Su economía también se sustenta de sus minas de mármol, sal y yeso. También, dado que miles de personas de Vicente Noble residen ahora en España y Estados Unidos, sus remesas constituyen una importante fuente de ingresos para la comunidad.
      </p>
      
      <p className=" text-justify text-base mb-15 leading-6 mb-2">
        Las fiestas patronales de Vicente Noble se celebran del 15 al 24 de junio en honor a San Juan Bautista.
      </p>

      <p className="text-center text-xl font-bold">
        ¡Gracias por visitarnos!
      </p>

    </div>
  );
}

export default Inicio;
