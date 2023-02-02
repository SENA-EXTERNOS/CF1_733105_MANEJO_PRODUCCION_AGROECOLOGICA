export default {
  global: {
    componenteFormativo:
      'Conocimientos de los agroecosistemas y conservación de suelos',
    descripcionCurso:
      'En este componente formativo brinda la información necesaria para comprender la agroecología, su evolución, sus enfoques y sus aportes a los objetivos de desarrollo sostenible mediante la transformación de los sistemas y los métodos de producción convencionales, a sistemas agroalimentarios sostenibles. Además, se abordará la importancia del suelo y de las diferentes prácticas de manejo cultural llevado a cabo en los cultivos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Agroecología',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El Suelo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Manejo ecológico del suelo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Agroecología',
      referencia:
        'Rivera Gómez, L. C. (2021). <i>Documento propuesto de lineamientos de política pública en agroecología para Colombia</i>. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). Colombia. ISBN: 978-628-7522-05-3.',
      tipo: 'Artículo',
      descarga:
        '/downloads/7_Propuesta-de-lineamientos-de-politica-publica-en-agroecologia-para-Colombia-_compressed.pdf',
    },
    {
      tema: 'Agroecología',
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (2018).<i> 10 elementos de la agroecología. Guía para la transición hacia sistemas alimentarios y agrícolas sostenibles</i>.',
      tipo: 'Artículo',
      descarga: '/downloads/i9037es.pdf',
    },
    {
      tema: 'El suelo',
      referencia:
        'Ecosistemas de Recursos Educativos ECORED. (2020). Propiedades físicas del suelo.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=eV-iChL0K6E&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: 'El suelo',
      referencia:
        'Ecosistemas de Recursos Educativos ECORED. (2020). Propiedades químicas del suelo.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=zMBZb9kmiMM&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: 'El suelo',
      referencia:
        'Ecosistemas de Recursos Educativos ECORED. (2020). Propiedades biológicas del suelo.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=xBgGSpUI8eo&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: 'Manejo ecológico del suelo',
      referencia:
        'Brechelt, A. (2004). <i>Manejo ecológico del suelo. Fundación Agricultura y Medio Ambiente. Red de acción de Plaguicidas y sus alternativas para América Latina</i>.',
      tipo: 'Artículo',
      descarga: '/downloads/90_Manejo_Ecologic-with-cover-page-v2.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Adaptabilidad',
      significado:
        'capacidad de ajustarse a un sistema de producción, lo que requiere enfrentarse a procesos de cambio de condiciones',
    },
    {
      termino: 'Agroquímicos',
      significado:
        'productos químicos empleados para prevenir, destruir y controlar plagas y enfermedades (herbicidas, fungicidas, insecticidas, etc).',
    },
    {
      termino: 'Cartografía',
      significado:
        'es la ciencia encargada de representar la tierra sobre un plano o mapa, que trata de las normas y procedimientos dirigidos al estudio y confección de los mapas, cartas y planos, siendo la más científica de las artes y sin dudas la más artística de las ciencias.',
    },
    {
      termino: 'Transición agroecológica',
      significado:
        'sustitución de las técnicas de manejo degradante y tecnologías contaminantes y dependientes por la optimización de prácticas de manejo que permitan el mantenimiento de la diversidad biológica y de la capacidad productiva natural a largo plazo.',
    },
    {
      termino: 'Sistema agroalimentario',
      significado:
        'suma de los diversos elementos, actividades y actores que, mediante sus interrelaciones, hacen posible la producción, transformación, distribución y consumo de alimentos.',
    },
    {
      termino: 'Sistemas de información geográfica (SIG)',
      significado:
        'son herramientas tecnológicas que ayudan a manipular, integrar, analizar y representar de una forma eficiente cualquier tipo de información geográfica asociada a un territorio.',
    },
    {
      termino: 'Sistema de producción',
      significado:
        'conjunto particular de actividades (sistema de manejo) desarrolladas para producir una serie definida de productos o beneficios.',
    },
    {
      termino: 'Manejo Cultural',
      significado:
        'serie de actividades que se llevan a cabo durante la producción (desde la siembra hasta la cosecha) de los cultivos con el fin de proporcionar las condiciones y requerimientos necesarios para un adecuado crecimiento de las plantas.',
    },
    {
      termino: 'Materia orgánica',
      significado:
        'residuos orgánicos de origen vegetal o animal que son incorporados al suelo.',
    },
    {
      termino: 'Uso del suelo',
      significado:
        'manera en que una superficie física del territorio es tomada en función de su capacidad agroecológica y utilidad para el desarrollo humano.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alarcón Trujillo, V. F. (2021). <i>Modelo SIG para la zonificación agroecológica de cultivos: estudio de caso cuenca hidrográfica del río Las Ceibas, Huila, Colombia</i>.',
      link: 'http://ridum.umanizales.edu.co/handle/20.500.12746/5746',
    },

    {
      referencia:
        'García, D. (2017). <i>Metodologías participativas, agroecología y sostenibilidad rural</i>. Centro nacional de educación ambiental.',
      link:
        'https://www.miteco.gob.es/en/ceneam/articulos-de-opinion/2014-07-08-daniel-lopez_tcm38-163552.pdf',
    },

    {
      referencia: 'Gis&Beers. (2019). <i>Cartografías de usos del suelo</i>.',
      link:
        'http://www.gisandbeers.com/descarga-siose-cartografia-usos-del-suelo/',
    },

    {
      referencia:
        'Gliessman, S. (2018). <i>Romper con los sistemas agrarios y alimentarios industriales: siete experiencias de transición agroecológica. Estudio de caso 2</i>. iPES-FOOD. International panel of experts on sustainable food systems.',
      link: 'http://www.ipes-food.org/_img/upload/files/CS2_web_ES.pdf',
    },

    {
      referencia:
        'Gómez, J. & Montes, N. E., compiladores. 2020. Mapa Geológico de Colombia en Relieve 2020. Escala 1:1 000 000. Servicio Geológico Colombiano, 2 hojas. Bogotá.',
      link: 'https://www2.sgc.gov.co/MGC/Paginas/mgc_1M2020.aspx',
    },

    {
      referencia:
        'Hernández, A., Rojas, R. & Sánchez, F. (2013). <i>Mapa de conflictos de uso del suelo</i>.',
      link:
        'https://www.researchgate.net/figure/Figura-5-Mapa-de-conflictos-de-uso-del-suelo-corregimiento-de-Pasquilla-Datos-mapa-de_fig3_327711135',
    },

    {
      referencia:
        'Le Coq, J., Patrouilleau, M. M., Sabourin, E., & Niederle, P. A. (2018, September). Políticas públicas que promueven la agroecología y producción orgánica en América Latina. In in III <i>Conferência Internacional de Agricultura e Alimentação em uma Sociedade Urbanizada</i>.',
      link:
        'https://libros.unlp.edu.ar/index.php/unlp/catalog/view/72/54/181-1',
    },

    {
      referencia:
        'Tittonell, P. (2019). Las transiciones agroecológicas: múltiples escalas, niveles y desafíos. Revista de la Facultad de Ciencias Agrarias. <i>Universidad Nacional de Cuyo</i>, 51(1), 231-246. Recuperado en 18 de agosto de 2022, de',
      link:
        'http://www.scielo.org.ar/scielo.php?script=sci_arttext&pid=S1853-86652019000100017&lng=es&tlng=es.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
