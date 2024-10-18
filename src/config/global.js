export default {
  global: {
    componenteFormativo: 'Gestión del mantenimiento industrial',
    descripcionCurso:
      'Mantenimiento no sólo deberá mantener las máquinas sino también las instalaciones de: iluminación, redes de computación, sistemas de energía eléctrica, aire comprimido, agua, aire acondicionado, calles internas, pisos, depósitos, etc. Además deberá coordinar con recursos humanos un plan para la capacitación continua del personal.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Desarrollo de contenidos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Elementos del mantenimiento industrial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Actividades de mantenimiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Matrices y Tablas de Tiempos',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'PERT',
      significado:
        'el método PERT fue desarrollado por el Departamento de la Defensa de los Estados Unidos de Norteamérica para dar apoyo a la planeación, programación y control de una gran cantidad de actividades asociados al proyecto.',
    },
    {
      termino: 'CPM',
      significado:
        'creado bajo la dirección de los ingenieros J. E. Kelly y M. R. Walker, el método CPM <i>(Critical Path Method)</i> o Método de la Ruta Crítica, se refiere a los intercambios entre el costo de un proyecto y su fecha de terminación.',
    },
    {
      termino: 'Mantenimiento Correctivo',
      significado: 'mantenimiento basado en la falla.',
    },
    {
      termino: 'Mantenimiento Detective',
      significado: 'mantenimiento basado en la inspección.',
    },
    {
      termino: 'Mantenimiento Preventivo',
      significado: 'mantenimiento basado en el uso.',
    },
    {
      termino: 'Mantenimiento Predictivo',
      significado: 'mantenimiento basado en la detección.',
    },
  ],
  referencias: [
    {
      referencia:
        'Baldín,	L. Furlanetto, A. Roversi, F. Turco. G.G.	(1982) Manual de mantenimiento de instalaciones industriales. Barcelona.',
      link: '',
    },
    {
      referencia:
        'Cato (09/007/2012) método PERT CPM (red de actividades) EJEMPLO 3: administración de proyectos. ',
      link: 'https://www.youtube.com/watch?v=eJi5ep85J1o',
    },
    {
      referencia:
        'Herrera, H.(2014).Mantenimiento y lubricación. Notas de clase. Universidad Tecnológica de Pereira. Pereira.',
      link: '',
    },
    {
      referencia:
        'Ruiz, M. (20/06/2011) Cálculo del área bajo la curva de una distribución normal (Uso de tablas). ',
      link: 'https://www.youtube.com/watch?v=9kRl-Zz-YCY',
    },
    {
      referencia:
        'Ruiz, M. (22/06/2011) Distribución Normal, teoría y ejemplo. ',
      link: 'https://www.youtube.com/watch?v=_zoRQDN4sOM',
    },
    {
      referencia:
        'Ruiz, M.(20/06/2011) Leer la tabla de distribución normal y ejemplos de aplicación. ',
      link: '',
    },
    {
      referencia:
        'Souris, J. (1992) Mantenimiento: Fuente de Beneficios. Díaz de Santos, S.A. Madrid.',
      link: '',
    },
    {
      referencia:
        'Universitat Politécnica de Valencia - UPV (28/11/2011) Procedimientos de Construcción 5. Maquinaria. Redes de flechas. © UPV',
      link: 'https://www.youtube.com/watch?v=3wuBct63HhI',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Felipe Valencia Pimienta.',
          cargo: 'Integrador FAVA.',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial SENA Regional Risaralda.',
        },
        {
          nombre: 'Carlos Andrés Mesa Montoya.',
          cargo: 'Instructor',
          centro:
            'Centro Agroempresarial Cundinamarca - Regional Cundinamarca.',
        },
        {
          nombre: 'Luis Guillermo Alvarez García',
          cargo: 'Evaluador instruccional ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Hernando Junior Strusberg Perez',
          cargo: 'Diseñador web ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>Fullstack</i>',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
