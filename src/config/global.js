export default {
  global: {
    componenteFormativo: 'Parámetros de asignación y soluciones de un sistema',
    descripcionCurso:
      'La gestión del mantenimiento industrial es una disciplina que seenfoca en asegurar el funcionamiento eficiente y continuo de los equipos y sistemas en una planta o instalación industrial. Su objetivo principal es minimizar el tiempo de inactividad, reducir loscostos operativos y extender la vida útil de los activosindustriales. Esto se logra a través de una serie de prácticas yestrategias organizadas para el mantenimiento preventivo,correctivo y predictivo.',
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
        titulo: 'Modelo para el desarrollo de un sistema',
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
        download: 'downloads/CF01_83710214_DU.pdf',
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
      tema: 'Gestión delmantenimiento industrial.',
      referencia: 'Ecosistema recursos SENA [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ErIBKdtvhvo',
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
        'creado bajo la dirección de los ingenieros J. E. Kelly y M. R. Walker, el método CPM <i>(Critical Path Method)</i> o método de la ruta crítica, se refiere a los intercambios entre el costo de un proyecto y su fecha de terminación.',
    },
    {
      termino: 'Mantenimiento correctivo',
      significado: 'mantenimiento basado en la falla.',
    },
    {
      termino: 'Mantenimiento detective',
      significado: 'mantenimiento basado en la inspección.',
    },
    {
      termino: 'Mantenimiento preventivo',
      significado: 'mantenimiento basado en el uso.',
    },
    {
      termino: 'Mantenimiento predictivo',
      significado: 'mantenimiento basado en la detección.',
    },
  ],
  referencias: [
    {
      referencia:
        'Baldín, L. J., Furlanetto, A., Roversi, F., & Turco, G. G. (1982). Manual de mantenimiento de instalaciones industriales. Barcelona: [Editorial].',
      link: '',
    },
    {
      referencia:
        'Cato. Método PERT CPM (red de actividades) EJEMPLO 3: administración de proyectos.  ',
      link: 'https://www.youtube.com/watch?v=eJi5ep85J1o',
    },
    {
      referencia:
        'Herrera, H. (2014). Mantenimiento y lubricación. Notas de clase. Universidad Tecnológica de Pereira, Pereira.',
      link: '',
    },
    {
      referencia:
        'Ruiz, M. Cálculo del área bajo la curva de una distribución normal (Uso de tablas). ',
      link: 'https://www.youtube.com/watch?v=9kRl-Zz-YCY',
    },
    {
      referencia: 'Ruiz, M. Distribución Normal, teoría y ejemplo. ',
      link: 'https://www.youtube.com/watch?v=_zoRQDN4sOM',
    },
    {
      referencia:
        'Ruiz, M. Leer la tabla de distribución normal y ejemplos de aplicación. ',
      link: '',
    },
    {
      referencia:
        'Souris, J. (1992). Mantenimiento: fuente de beneficios. Madrid: Díaz de Santos, S.A.',
      link: '',
    },
    {
      referencia:
        'Universitat Politécnica de Valencia - UPV. Procedimientos de construcción 5. Maquinaria. Redes de flechas. © UPV',
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
          centro: 'Centro para el Desarrollo Agroecológico y Agroindustrial',
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
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
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
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>Full Stack</i>',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y producción audiovisual',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
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
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales ',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
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
