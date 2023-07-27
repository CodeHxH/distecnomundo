const db = {};

db.igPost = [
    {
        img: './images/ig01.png',
        url: 'https://www.instagram.com/distecnomundo/?hl=e',
    },
    {
        img: './images/ig02.png',
        url: 'https://www.instagram.com/distecnomundo/?hl=e',
    },
    {
        img: './images/ig03.png',
        url: 'https://www.instagram.com/distecnomundo/?hl=e',
    },
    {
        img: './images/ig04.png',
        url: 'https://www.instagram.com/distecnomundo/?hl=e',
    },
];

db.products = [
    {
        code: 3,
        active: true,
        title: 'Aire de ventana - 12000 BTU Omega',
        front: '/images/aires/0003-1.png',
        imgs: ['/images/aires/0003-2.png', '/images/aires/0003-3.png'],
        tags: ['linea blanca', 'aires'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-732114800-aire-acondicionado-de-ventana-de-12-mil-btu-omega-_JM',
        price: 335.0,
        description:
            'Nuestro aire acondicionado OMEGA OAW-12M de alto rendimiento, te permite dar la temperatura deseada a los espacios que mas deseas',
        features: {
            Fabricante: ['Fabricante', 'Omega'],
            Modelo: ['Modelo', 'OAW - 12M'],
            Capacidad: ['Capacidad', '12000 BTU'],
            Voltaje: ['Voltaje', 'AC 220-230V / 60 HZ'],
            Dimensiones: ['Dimensiones', '58.5x45x34.6cm'],
            Color: ['Color', 'Blanco'],
            Diseño: ['Diseño', 'Compacto'],
        },
    },
    {
        code: 4,
        active: true,
        title: 'Aire Acondicionado Split - 12000 BTU Omega',
        front: '/images/aires/0004-1.png',
        imgs: ['/images/aires/0004-2.png', '/images/aires/0004-3.png'],
        tags: ['linea blanca', 'aires'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-732112533-aire-acondicionado-split-12000-btu-omega-_JM',
        price: 350.0,
        description:
            'Nuestro aire acondicionado OMEGA OAS-12W de alto rendimiento, te permite dar la temperatura deseada a los espacios que mas atesoras.',
        features: {
            Fabricante: ['Fabricante', 'Omega'],
            Voltaje: ['Voltaje', 'AC 220-230V / 60 HZ'],
            Capacidad: ['Capacidad', '12000 BTU'],
            Modelo: ['Modelo', 'OAS - 12W'],
            Dimensiones: ['Dimensiones', '870x270x360mm'],
            Color: ['Color', 'Blanco'],
            Diseño: ['Diseño', 'Compacto'],
        },
    },
    {
        code: 5,
        active: true,
        title: 'Aire Acondicionado Split - 18000 BTU Decorativo Tipo Espejo',
        front: '/images/aires/0005-1.png',
        imgs: [],
        tags: ['linea blanca', 'aires'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-716187626-aire-acondicionado-split-de-18000-btu-decorativo-rania-_JM',
        price: 565.0,
        description:
            'Nuestro aire acondicionado RANIA RA-18C21 de alto rendimiento, te permite dar la temperatura deseada a los espacios que mas atesoras.',
        features: {
            Fabricante: ['Fabricante', 'RANIA'],
            Voltaje: ['Voltaje', '220V 60 HZ '],
            Capacidad: ['Capacidad', '18000 BTU'],
            Modelo: ['Modelo', 'RA-18C21'],
            Dimensiones: ['Dimensiones', '865x265x350mm'],
            Color: ['Color', 'Negro'],
            Diseño: ['Diseño', 'Compacto'],
        },
    },
    {
        code: 6,
        active: true,
        title: 'Aire Acondicionado Split - 12000 BTU FRIGILUX',
        front: '/images/aires/0006-1.png',
        imgs: [],
        tags: ['linea blanca', 'aires'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-563633746-aire-acondicionado-split-12000-btu-frigilux-_JM',
        price: 310.0,
        description:
            'Nuestro aire acondicionado FRIGILUX ASFR-12FB de alto rendimiento, te permite dar la temperatura deseada a los espacios que mas atesoras.',
        features: {
            Fabricante: ['Fabricante', 'FRIGILUX'],
            Voltaje: ['Voltaje', 'AC 220-230V / 60 HZ'],
            Capacidad: ['Capacidad', '12000 BTU'],
            Modelo: ['Modelo', 'ASFR-12FB'],
            Dimensiones: ['Dimensiones', '805X194X285mm'],
            Color: ['Color', 'Blanco'],
            Diseño: ['Diseño', 'Compacto'],
            Refrigerante: ['Refrigerante', 'R410A'],
        },
    },
    {
        code: 8,
        active: true,
        title: 'Horno de Empotrar Eléctrico - DRIJA',
        front: '/images/hornos/0008-1.png',
        imgs: ['/images/hornos/0008-2.png', '/images/hornos/0008-3.png'],
        tags: ['linea blanca', 'hornos'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-578873948-horno-electrico-de-60-cm-latino-drija-_JM',
        price: 400.0,
        description:
            'Diseño clásico pero elegante, fabricado con una Puerta Doble de Cristal te ofrece lujo y elegancia a tu cocina. Posee 6 Métodos de Calentamiento y un cronómetro mecánico, a eso le agregamos Iluminación Interna que te permitirá mejor visibilidad.',
        features: {
            Fabricante: ['Fabricante', 'DRIJA'],
            Voltaje: ['Voltaje', '220V - 240V / 50 - 60 HZ'],
            Capacidad: ['Capacidad', '72 LTS'],
            Modelo: ['Modelo', 'LATINO60'],
            Dimensiones: [
                'Dimensiones',
                '59,50cm de ancho x 59,50cm de alto x 54,50cm de profundidad',
            ],
            Color: ['Color', 'Negro y Acero'],
        },
    },
    {
        code: 9,
        active: true,
        title: 'Horno de Empotrar Eléctrico 6 funciones - ARANCI',
        front: '/images/hornos/0009-1.png',
        imgs: [],
        tags: ['linea blanca', 'hornos'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-701021709-horno-electrico-empotrable-6-funciones-220v-aranci-_JM',
        price: 330.0,
        description:
            'Diseño clásico pero elegante, fabricado con una Puerta de Cristal te ofrece lujo y elegancia a tu cocina. Posee 6 Métodos de Calentamiento, a eso le agregamos Iluminación Interna que te permitirá mejor visibilidad.',
        features: {
            Fabricante: ['Fabricante', 'ARANCI'],
            Voltaje: ['Voltaje', '220 - 240V 50 - 60 HZ'],
            Modelo: ['Modelo', 'CLIO 60cm'],
            MedidasHorno: [
                'Med. horno',
                '59,50cm de ancho x 59,50cm de alto x 57,50cm de profundidad',
            ],
            MedidasInternas: [
                'Med. internas',
                '49cm de ancho x 34cm de alto x 55,5cm de profundidad',
            ],
            MedidasEmpotrar: [
                'Med. empotrar',
                '55,5cm de ancho x 58cm de alto x 55,5cm de profundidad',
            ],
            Color: ['Color', 'Negro'],
        },
    },
    {
        code: 10,
        active: true,
        title: 'Horno de Empotrar Eléctrico 9 funciones con rostizador - ARANCI',
        front: '/images/hornos/0010-1.png',
        imgs: [],
        tags: ['linea blanca', 'hornos'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-701021709-horno-electrico-empotrable-6-funciones-220v-aranci-_JM',
        price: 390.0,
        description:
            'Diseño clásico pero elegante, fabricado con una Puerta de Cristal te ofrece lujo y elegancia a tu cocina. Posee 6 Métodos de Calentamiento, a eso le agregamos Iluminación Interna que te permitirá mejor visibilidad.',
        features: {
            Fabricante: ['Fabricante', 'ARANCI'],
            Voltaje: ['Voltaje', '220 - 240V 50 - 60 HZ'],
            Modelo: ['Modelo', 'ATTIS'],
            MedidasHorno: [
                'Med. horno',
                '59,50cm de ancho x 59,50cm de alto x 57,50cm de profundidad',
            ],
            MedidasInternas: [
                'Med. internas',
                '49cm de ancho x 34cm de alto x 40cm de profundidad',
            ],
            MedidasEmpotrar: [
                'Med. empotrar',
                '55,5cm de ancho x 58,5cm de alto x 55,5cm de profundidad',
            ],
            Color: ['Color', 'Negro'],
        },
    },
    {
        code: 12,
        active: true,
        title: 'Horno con freidora de aire Oster - 42 litros de puertas estilo francés',
        front: '/images/horno tostador/0012-1.png',
        imgs: [
            '/images/horno tostador/0012-2.png',
            '/images/horno tostador/0012-3.png',
            '/images/horno tostador/0012-4.png',
            '/images/horno tostador/0012-5.png',
        ],
        tags: ['linea blanca', 'horno tostador'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-722696073-horno-con-freidora-de-aire-42-lts-estilo-frances-oster-_JM',
        price: 325.0,
        description:
            'Toma el control de tu salud, preparando alimentos más sanos. Eleva tu cocina al próximo nivel con el horno tostador de puertas estilo francés Oster que viene con freidora de aire. Esta nueva función de freír con aire te permite crear más variedades de comidas deliciosas y saludables que siempre te brindan resultados perfectamente crujientes.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Potencia: ['Potencia', '1700 watts'],
            Modelo: ['Modelo', 'TSSTTVFDMAF-013'],
            Diseño: ['Diseño', 'Acero'],
            Capacidad: ['Capacidad', '42L'],
        },
    },
    {
        code: 13,
        active: true,
        title: 'Horno tostador Oster - 10 litros',
        front: '/images/horno tostador/0013-1.png',
        imgs: [
            '/images/horno tostador/0013-2.png',
            '/images/horno tostador/0013-3.png',
        ],
        tags: ['linea blanca', 'horno tostador'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-730278078-horno-tostador-10-lts-oster-_JM',
        price: 67.0,
        description:
            'El horno tostador de tamaño compacto que te permite preparar una amplia variedad de deliciosas comidas y bocadillos. Control de temperatura completamente ajustable de 90°C a 230°C (194°F a 450°F) para una amplia variedad de usos.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Potencia: ['Potencia', '1050 watts'],
            Modelo: ['Modelo', 'TSSTTV10LTB'],
            Diseño: ['Diseño', 'Acero'],
            Capacidad: ['Capacidad', '10L'],
        },
    },
    {
        code: 14,
        active: true,
        title: 'Horno eléctrico con convección y rostizador - 30 litros',
        front: '/images/horno tostador/0014-1.png',
        imgs: [],
        tags: ['linea blanca', 'horno tostador'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-576621059-horno-electrico-con-rostizador-30-lts-negro-gtronic-_JM',
        price: 110.0,
        description:
            'El horno tostador de tamaño compacto que te permite preparar una amplia variedad de deliciosas comidas y bocadillos. Control de temperatura completamente ajustable hasta 250°C (482°F) para una amplia variedad de usos.',
        features: {
            Fabricante: ['Fabricante', 'GTRONIC'],
            Potencia: ['Potencia', '1600 watts'],
            Modelo: ['Modelo', ' GT-30A01'],
            Color: ['Color', 'Negro'],
            Capacidad: ['Capacidad', '30L'],
        },
    },
    {
        code: 16,
        active: true,
        title: 'Freidora de aire Oster - 3.2 litros ',
        front: '/images/airfryers/0016-1.png',
        imgs: ['/images/airfryers/0016-2.png'],
        tags: ['linea blanca', 'airfryers'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-558005596-freidora-de-aire-air-fryer-32-lts-oster-_JM',
        price: 115.0,
        description:
            'Esta freidora de aire Oster de 3.2L cuenta con un moderno panel táctil digital con 8 funciones pre-programadas que le permiten cocinar una variedad de alimentos, tales como carne, pollo, vegetales, papas fritas, pasta, postres y más, todo con un toque.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Voltaje: ['Voltaje', '127V / 60 HZ'],
            Potencia: ['Potencia', '1500 watts'],
            Modelo: ['Modelo', 'CKSTAF7601'],
            Color: ['Color', 'Negro'],
            Capacidad: ['Capacidad', '3,2L'],
        },
    },
    {
        code: 17,
        active: true,
        title: 'Freidora de aire manual Oster - 4 litros',
        front: '/images/airfryers/0017-1.png',
        imgs: [
            '/images/airfryers/0017-2.png',
            '/images/airfryers/0017-3.png',
            '/images/airfryers/0017-4.png',
        ],
        tags: ['linea blanca', 'airfryers'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-730238954-freidora-de-aire-4lts-analogica-oster-_JM',
        price: 125.0,
        description:
            'La nueva freidora de aire compacta manual ofrece una variedad de diferentes beneficios, empezando con su bandeja de cocción de 4 litros, que te permite cocinar recetas diversas para toda la familia. La freidora incluye una perilla de control de temperatura y un temporizador ajustable de hasta 60 minutos, para cocinar pollos, carnes, vegetales, pescado y hasta postres a tu gusto. Su recubrimiento natural de cerámica Bioceramic es bien fácil de limpiar y 4 veces más duradero, para que cada uno se sienta como el primero.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Voltaje: ['Voltaje', '120V'],
            Modelo: ['Modelo', 'CKSTAF40M'],
            Color: ['Color', 'Negro'],
            Capacidad: ['Capacidad', '4L'],
        },
    },
    {
        code: 18,
        active: true,
        title: 'Freidora De Aire - 4 Litros Oster Digital',
        front: '/images/airfryers/0018-1.png',
        imgs: [
            '/images/airfryers/0018-2.png',
            '/images/airfryers/0018-3.png',
            '/images/airfryers/0018-4.png',
            '/images/airfryers/0018-5.png',
        ],
        tags: ['linea blanca', 'airfryers'],
        mercadoLibre: 'https://articulo.mercadolibre.com.ve/MLV-722907932-',
        price: 130.0,
        description:
            'La nueva y versátil Freidora de aire digital ofrece infinidad de beneficios, empezando con su amplia canasta con recubrimiento antiadherente Bioceramic™ con 4 litros de capacidad, que permite cocinar una variedad de comidas para la familia. Cuenta con 7 funciones digitales preestablecidas con la opción de cocinar carne, pollo, pescado, mariscos, papas, vegetales y postres. ¡Su recubrimiento Bioceramic es 4 veces más duradero y fácil de limpiar para que pases menos tiempo en la cocina y más tiempo disfrutando con la familia!',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Voltaje: ['Voltaje', '110V'],
            Modelo: ['Modelo', 'CKSTAF40D'],
            Color: ['Color', 'Negro'],
            Capacidad: ['Capacidad', '4L'],
            Dimensiones: ['Dimensiones', '33.7cm x 26cm x 31.3cm'],
        },
    },
    {
        code: 19,
        active: true,
        title: 'Freidora De Aire - 5,5 Lts Analógica Gtronic',
        front: '/images/airfryers/0019-1.png',
        imgs: [
            '/images/airfryers/0019-2.png',
            '/images/airfryers/0019-3.png',
            '/images/airfryers/0019-4.png',
        ],
        tags: ['linea blanca', 'airfryers'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-579094791-freidora-de-aire-air-fryer-de-55-lts-analogica-gtronic-_JM',
        price: 110.0,
        description:
            'La nueva y versátil Freidora de aire analógica ofrece infinidad de beneficios, empezando con su amplia canasta con con 5,5 litros de capacidad, que permite cocinar una variedad de comidas para la familia.',
        features: {
            Fabricante: ['Fabricante', 'GTRONIC'],
            Voltaje: ['Voltaje', '120V - 60 HZ'],
            Potencia: ['Potencia', '1800 WATTS'],
            Modelo: ['Modelo', 'GT-715'],
            Color: ['Color', 'Negro'],
            Capacidad: ['Capacidad', '5,5L'],
            Dimensiones: ['Dimensiones', '34cm x 34cm x 36cm'],
        },
    },
    {
        code: 20,
        active: true,
        title: 'Freidora De Aire - 6,8 Lts Oster',
        front: '/images/airfryers/0020-1.png',
        imgs: [
            '/images/airfryers/0020-2.png',
            '/images/airfryers/0020-3.png',
            '/images/airfryers/0020-4.png',
        ],
        tags: ['linea blanca', 'airfryers'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-728326443-freidora-de-aire-air-fryer-de-68-lts-oster-_JM',
        price: 175.0,
        description:
            'La freidora de aire Oster® con capacidad de 6,8L ahora tiene revestimiento antiadherente Diamond Forcé infundido con partículas de diamante que la hace 12 veces más duradero y resistente a ralladuras y hasta 15 veces más fácil de limpiar.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Voltaje: ['Voltaje', '110V'],
            Potencia: ['Potencia', '1700 WATTS'],
            Modelo: ['Modelo', 'CKSTAF68T'],
            Color: ['Color', 'Negro y Metal'],
            Capacidad: ['Capacidad', '6,8L'],
            Dimensiones: ['Dimensiones', '34,5cm x 35cm x 29cm'],
        },
    },
    {
        code: 21,
        active: true,
        title: 'Freidora De Aire - 9 Lts Oster',
        front: '/images/airfryers/0021-1.png',
        imgs: [
            '/images/airfryers/0021-2.png',
            '/images/airfryers/0021-3.png',
            '/images/airfryers/0021-4.png',
        ],
        tags: ['linea blanca', 'airfryers'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-722721889-freidora-de-aire-air-fryer-9-lts-oster-_JM',
        price: 190.0,
        description:
            'La freidora de aire Oster® con recubrimiento DiamondForce tiene una capacidad extra grande de 9L capacidad cuenta con un panel digital y 6 funciones pre programadas, para cocinar papas fritas, pollo, pescado, carne, pizza y hornear. Incluye una bandeja de freír con aire extraible con revestimiento antiadherente El revestimiento DiamondForce está infundido con partículas de diamante que la hace 12 veces más duradero y resistente a rayaduras y hasta 15 veces más fácil de limpiar',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Voltaje: ['Voltaje', '110V'],
            Potencia: ['Potencia', '1700 WATTS'],
            Modelo: ['Modelo', 'CKSTAF90D-013'],
            Color: ['Color', 'Negro y Metal'],
            Capacidad: ['Capacidad', '9L'],
            Dimensiones: ['Dimensiones', '34,5cm x 30cm x 30cm'],
        },
    },
    {
        code: 23,
        active: true,
        title: 'Licuadora Oster 2 Velocidades Vaso De Vidrio Color Kiwi',
        front: '/images/licuadoras/0023-1.png',
        imgs: ['/images/licuadoras/0023-2.png'],
        tags: ['linea blanca', 'licuadoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-728147872-licuadora-oster-2-velocidades-vaso-de-vidrio-color-kiwi-_JM',
        price: 53.0,
        description:
            'El poderoso motor con alta fuerza de torsión y vaso de vidrio refractario Boroclass® de la licuadora Oster® son ideales para preparar una amplia variedad de recetas frías y calientes, jugos, batidos y mucho más. La jarra de vidrio es resistente a un choque térmico de 90°C, que te permite procesar ingredientes hirviendo sin necesidad de esperar a que estos se enfríen',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Voltaje: ['Voltaje', '110V'],
            Potencia: ['Potencia', '550 WATTS'],
            Modelo: ['Modelo', 'BLSTKAG-KPB'],
            Color: ['Color', 'Verde Kiwi'],
            Capacidad: ['Capacidad', '1,50L'],
            Peso: ['Peso', ' 2.96 kg'],
        },
    },
    {
        code: 24,
        active: true,
        title: 'Licuadora Clásica Blanca Oster Vaso Plástico',
        front: '/images/licuadoras/0024-1.png',
        imgs: [
            '/images/licuadoras/0024-2.png',
            '/images/licuadoras/0024-3.png',
        ],
        tags: ['linea blanca', 'licuadoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-731145500-licuadora-clasica-blanca-oster-vaso-plastico-_JM',
        price: 45.0,
        description:
            'El poderoso motor con alta fuerza de torsión y jarra de plastico refractario Boroclass® de la licuadora Oster® con control de velocidad tipo perilla son ideales para preparar una amplia variedad de recetas frías y jugos, batidos y mucho más.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Voltaje: ['Voltaje', '110V'],
            Potencia: ['Potencia', '550 WATTS'],
            Modelo: ['Modelo', 'BLSTKAP-WPB'],
            Color: ['Color', 'Blanco'],
            Capacidad: ['Capacidad', '1,25L'],
        },
    },
    {
        code: 25,
        active: true,
        title: 'Licuadora Oster 2 Velocidades Vaso De Vidrio Blanca',
        front: '/images/licuadoras/0025-1.png',
        imgs: ['/images/licuadoras/0025-2.png'],
        tags: ['linea blanca', 'licuadoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-739616433-licuadora-oster-2-velocidades-vaso-de-vidrio-blanca-_JM',
        price: 53.0,
        description:
            'El poderoso motor con alta fuerza de torsión y jarra de plastico refractario Boroclass® de la licuadora Oster® con control de velocidad tipo perilla son ideales para preparar una amplia variedad de recetas frías y jugos, batidos y mucho más.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Voltaje: ['Voltaje', '110V'],
            Potencia: ['Potencia', '550 WATTS'],
            Modelo: ['Modelo', 'BLSTKAGWPG'],
            Color: ['Color', 'Blanco'],
            Capacidad: ['Capacidad', '1,5L'],
        },
    },
    {
        code: 26,
        active: true,
        title: 'Licuadora Oster 2 Velocidades Jarra De Vidrio',
        front: '/images/licuadoras/0026-1.png',
        imgs: [
            '/images/licuadoras/0026-2.png',
            '/images/licuadoras/0026-3.png',
            '/images/licuadoras/0026-4.png',
        ],
        tags: ['linea blanca', 'licuadoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-722722105-licuadora-oster-2-velocidades-jarra-de-vidrio-_JM',
        price: 53.0,
        description:
            'El poderoso motor con alta fuerza de torsión y jarra de vidrio refractario Boroclass® de la licuadora Oster® con control de velocidad tipo perilla son ideales para preparar una amplia variedad de recetas frías y calientes, jugos, batidos y mucho más.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Voltaje: ['Voltaje', '110V'],
            Potencia: ['Potencia', '550 WATTS'],
            Modelo: ['Modelo', 'BLSTKAG-WRD'],
            Color: ['Color', 'Blanco'],
            Capacidad: ['Capacidad', '1,5L'],
        },
    },
    {
        code: 27,
        active: true,
        title: 'Licuadora Clasica Negra Oster Vaso Plastico',
        front: '/images/licuadoras/0027-1.png',
        imgs: ['/images/licuadoras/0027-2.png'],
        tags: ['linea blanca', 'licuadoras'],
        mercadoLibre:
            '//https://articulo.mercadolibre.com.ve/MLV-731188321-licuadora-clasica-negra-oster-vaso-plastico-_JM',
        price: 45.0,
        description:
            'El poderoso motor con alta fuerza de torsión y jarra de plastico refractario Boroclass® de la licuadora Oster® con control de velocidad tipo perilla son ideales para preparar una amplia variedad de recetas frías y jugos, batidos y mucho más.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Voltaje: ['Voltaje', '110V'],
            Potencia: ['Potencia', '550 WATTS'],
            Modelo: ['Modelo', 'BLSTKAG-RPB'],
            Color: ['Color', 'Negro'],
            Capacidad: ['Capacidad', '1,25L'],
        },
    },
    {
        code: 28,
        active: true,
        title: 'Licuadora Oster 2 Velocidades Vaso De Vidrio Roja',
        front: '/images/licuadoras/0028-1.png',
        imgs: ['/images/licuadoras/0028-2.png'],
        tags: ['linea blanca', 'licuadoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-732358727-licuadora-oster-2-velocidades-vaso-de-vidrio-roja-_JM',
        price: 53.0,
        description:
            'El poderoso motor con alta fuerza de torsión y vaso de vidrio refractario Boroclass® de la licuadora Oster® con control de velocidad tipo botones son ideales para preparar una amplia variedad de recetas frías y calientes, jugos, batidos y mucho más.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Voltaje: ['Voltaje', '110V'],
            Potencia: ['Potencia', '550 WATTS'],
            Modelo: ['Modelo', 'BLSTKAG-RPB'],
            Color: ['Color', 'Rojo'],
            Capacidad: ['Capacidad', '1,5L'],
        },
    },
    {
        code: 29,
        active: true,
        title: 'Licuadora 6 velocidades negro reversible Oster',
        front: '/images/licuadoras/0029-1.png',
        imgs: ['/images/licuadoras/0029-2.png'],
        tags: ['linea blanca', 'licuadoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-720595163-licuadora-reversible-oster-_JM',
        price: 115.0,
        description:
            'Tecnología de motor reversible vaso de vidrio capacidad 1,5l resistente a ingredientes hirviendo cuchillas dos veces mas grandes de 6 hojillas, son ideales para preparar una amplia variedad de recetas frías y calientes, jugos, batidos y mucho más.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Voltaje: ['Voltaje', '110V'],
            Potencia: ['Potencia', '600 WATTS'],
            Modelo: ['Modelo', 'BLSTPYG12098'],
            Color: ['Color', 'Negro'],
            Capacidad: ['Capacidad', '1,5L'],
        },
    },
    {
        code: 30,
        active: true,
        title: 'Licuadora Oster 3 Velocidades Cromada Vaso Plástico.',
        front: '/images/licuadoras/0030-1.png',
        imgs: [
            '/images/licuadoras/0030-2.png',
            '/images/licuadoras/0030-3.png',
        ],
        tags: ['linea blanca', 'licuadoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-505111468-licuadora-oster-3-velocidades-cromada-vaso-plastico-_JM',
        price: 110.0,
        description:
            'Vaso plástico resistente capacidad para 5 tazas. (1.25 lts) revolucionaria cuchilla de acero inoxidable. exclusivo sistema de acople metal contra metal drive para mayor durabilidad. control giratorio de 3 velocidades. ideales para preparar una amplia variedad de recetas frías y calientes, jugos, batidos y mucho más.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Voltaje: ['Voltaje', '110V'],
            Potencia: ['Potencia', '550 WATTS'],
            Modelo: ['Modelo', 'BLST4655'],
            Color: ['Color', 'Cromado'],
            Capacidad: ['Capacidad', '1,25L'],
        },
    },
    {
        code: 31,
        active: true,
        title: 'Licuadora De 8 Velocidades Vaso De Vidrio Omega',
        front: '/images/licuadoras/0031-1.png',
        imgs: [],
        tags: ['linea blanca', 'licuadoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-732294681-licuadora-de-8-velocidades-vaso-de-vidrio-omega-_JM',
        price: 40.0,
        description:
            'Licuadora con potente motor de 500 watts, jarra de vidrio, con interruptores de 8 velocidades, la cuchilla tiene 6 hojas de acero inoxidable. ideales para preparar una amplia variedad de recetas frías y calientes, jugos, batidos y mucho más.',
        features: {
            Fabricante: ['Fabricante', 'OMEGA'],
            Voltaje: ['Voltaje', '110V - 60HZ'],
            Potencia: ['Potencia', '500 WATTS'],
            Modelo: ['Modelo', 'OMl-002b'],
            Color: ['Color', 'Negra'],
            Capacidad: ['Capacidad', '1,25L'],
        },
    },
    {
        code: 33,
        active: true,
        title: 'Vaporizador De Tela Portatil Oster',
        front: '/images/otros/0033-1.png',
        imgs: [
            '/images/otros/0033-2.png',
            '/images/otros/0033-3.png',
            '/images/otros/0033-4.png',
        ],
        tags: ['linea blanca', 'otros'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-722907904-vaporizador-de-tela-portatil-oster-_JM',
        price: 60.0,
        description:
            'El nuevo vaporizador de tela portátil Oster® GCTES100 refresca la ropa y ayuda a remover arrugas de forma fácil y rápida. Úsalo en diferentes espacios alrededor de la casa o llévalo de viaje para alisar las arrugas producidas por la maleta. Desinfecta y quita los malos olores de cortinas, muebles de tela, ropa de cama y colchones. Con 15 minutos de vapor continuo puedes quitar las arrugas de múltiples prendas sin necesidad de parar y rellenar el tanque de agua.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', 'GCSTES100'],
            Color: ['Color', 'Negro'],
            Cable: ['Cable', '2,4 Metros'],
        },
    },
    {
        code: 35,
        active: true,
        title: 'Tope De Cocina Eléctrico De 30 Cm Vitroceramico Gtronic',
        front: '/images/topes/0035-1.png',
        imgs: ['/images/topes/0035-2.png'],
        tags: ['linea blanca', 'topes'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-579409366-tope-de-cocina-electrico-de-30-cm-vitroceramico-gtronic-_JM',
        price: 110.0,
        description:
            'Dale un toque moderno a tu cocina con este maravilloso tope eléctrica marca Gtronic, reconocida por su calidad y eficiencia, que te proporciona una gran capacidad de cocción, más rápida que otros modelos, incluso de platos grandes. Esta fantástica cocina cuenta con quemadores muy rápidos y de control fácil a través de un panel táctil, con el que podrás ajustar la potencia de la llama a tu gusto y necesidad, pasa de temperatura baja para cocinar a fuego lento, a temperatura muy alta para hervir agua y cocinar alimentos con increíble velocidad.',
        features: {
            Fabricante: ['Fabricante', 'GTRONIC'],
            Voltaje: ['Voltaje', '220V'],
            Potencia: ['Potencia', '2700-3300 WATTS.'],
            Modelo: ['Modelo', 'GT-HD303'],
            Color: ['Color', 'Negro'],
            Dimensiones: ['Dimensiones', '29cm x 52cm x 5,5cm'],
        },
    },
    {
        code: 36,
        active: true,
        title: 'Tope Electrico De 60cm Vitroceramica Gtronic',
        front: '/images/topes/0036-1.png',
        imgs: ['/images/topes/0036-2.png'],
        tags: ['linea blanca', 'topes'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-574343289-tope-electrico-de-60-cm-vitroceramica-gtronic-_JM',
        price: 200.0,
        description:
            'Dale un toque moderno a tu cocina con este maravilloso tope eléctrico marca Gtronic, reconocida por su calidad y eficiencia, que te proporciona una gran capacidad de cocción, más rápida que otros modelos, incluso de platos grandes. Esta fantástica cocina cuenta con quemadores muy rápidos y de control fácil a través de un panel táctil, con el que podrás ajustar la potencia de la llama a tu gusto y necesidad, pasa de temperatura baja para cocinar a fuego lento, a temperatura muy alta para hervir agua y cocinar alimentos con increíble velocidad.',
        features: {
            Fabricante: ['Fabricante', 'GTRONIC'],
            Voltaje: ['Voltaje', '220V'],
            Potencia: ['Potencia', ' 5500-6600 WATTS.'],
            Modelo: ['Modelo', 'GT-HF604'],
            Color: ['Color', 'Negro'],
            Dimensiones: ['Dimensiones', '58cm x 51cm x 5cm'],
        },
    },
    {
        code: 37,
        active: true,
        title: 'Tope De Cocina De Induccion De 77cm Frigilux',
        front: '/images/topes/0037-1.png',
        imgs: ['/images/topes/0037-2.png'],
        tags: ['linea blanca', 'topes'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-731039839-tope-de-cocina-de-induccion-de-77cm-frigilux-_JM',
        price: 515.0,
        description:
            'Vitroceramica, color, negro, control tactil, temporizador programable, apagado automatico, multinfuncional, bloqueo infantil. Esta fantástica cocina cuenta con quemadores muy rápidos y de control fácil a través de un panel táctil, con el que podrás ajustar la potencia de la llama a tu gusto y necesidad, pasa de temperatura baja para cocinar a fuego lento, a temperatura muy alta para hervir agua y cocinar alimentos con increíble velocidad.',
        features: {
            Fabricante: ['Fabricante', 'FRIGILUX'],
            Voltaje: ['Voltaje', 'AC 220V - 60HZ'],
            Modelo: ['Modelo', 'TEFR-77'],
            Color: ['Color', 'Negro'],
            Dimensiones: ['Dimensiones', '770mm x 520mm x 60mm'],
        },
    },
    {
        code: 38,
        active: true,
        title: 'Tope De Cocina De Induccion De 90 cm Frigilux',
        front: '/images/topes/0038-1.png',
        imgs: [],
        tags: ['linea blanca', 'topes'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-731039705-tope-de-cocina-de-induccion-de-90-cm-frigilux-_JM',
        price: 625.0,
        description:
            'Vitroceramica, color, negro, control tactil, temporizador programable, apagado automatico, multinfuncional, bloqueo infantil, voltaje de frecuencia: ac 220v/60hz, producto totalmente nuevo. Esta fantástica cocina cuenta con quemadores muy rápidos y de control fácil a través de un panel táctil, con el que podrás ajustar la potencia de la llama a tu gusto y necesidad, pasa de temperatura baja para cocinar a fuego lento, a temperatura muy alta para hervir agua y cocinar alimentos con increíble velocidad.',
        features: {
            Fabricante: ['Fabricante', 'FRIGILUX'],
            Voltaje: ['Voltaje', 'AC 220V - 60HZ'],
            Modelo: ['Modelo', 'TEFR-95'],
            Color: ['Color', 'Negro'],
            Dimensiones: ['Dimensiones', '900mm x 520mm x 60mm'],
        },
    },
    {
        code: 39,
        active: true,
        title: 'Tope Electrico De 30 Cm Vitrocerámica Aranci',
        front: '/images/topes/0039-1.png',
        imgs: [],
        tags: ['linea blanca', 'topes'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-700966967-tope-electrico-de-30-cm-vitroceramica-aranci-_JM',
        price: 120.0,
        description:
            'Tope eléctrico vitroceramica de 30 cm Aranci. Diseño y tecnología italiana cuenta con 12 meses de garantía. Esta fantástica cocina cuenta con quemadores muy rápidos y de control fácil a través de un panel táctil, con el que podrás ajustar la potencia de la llama a tu gusto y necesidad, pasa de temperatura baja para cocinar a fuego lento, a temperatura muy alta para hervir agua y cocinar alimentos con increíble velocidad.',
        features: {
            Fabricante: ['Fabricante', 'ARANCI'],
            Voltaje: ['Voltaje', 'AC 220V - 60HZ'],
            Potencia: ['Potencia', '2745-3267 WATTS.'],
            Modelo: ['Modelo', 'GIALET30'],
            Color: ['Color', 'Negro'],
            Dimensiones: ['Dimensiones', '28,8cm x 52cm x 5cm'],
        },
    },
    {
        code: 40,
        active: true,
        title: 'Tope De Cocina Electrico De 60 cm Vitroceramico Aranci',
        front: '/images/topes/0040-1.png',
        imgs: [],
        tags: ['linea blanca', 'topes'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-700954026-tope-de-cocina-electrico-de-60-vitroceramico-aranci-_JM',
        price: 180.0,
        description:
            'Tope eléctrico vitroceramica de 60 cm Aranci. Diseño y tecnología italiana cuenta con 12 meses de garantía. Esta fantástica cocina cuenta con quemadores muy rápidos y de control fácil a través de un panel táctil, con el que podrás ajustar la potencia de la llama a tu gusto y necesidad, pasa de temperatura baja para cocinar a fuego lento, a temperatura muy alta para hervir agua y cocinar alimentos con increíble velocidad.',
        features: {
            Fabricante: ['Fabricante', 'ARANCI'],
            Voltaje: ['Voltaje', 'AC 220V - 60HZ'],
            Potencia: ['Potencia', '2300 WATTS.'],
            Modelo: ['Modelo', 'GIALET60'],
            Color: ['Color', 'Negro'],
            Dimensiones: ['Dimensiones', '59cm x 52cm x 5cm'],
        },
    },
    {
        code: 41,
        active: true,
        title: 'Tope De Cocina Electrico De 77cm Vitroceramico Aranci',
        front: '/images/topes/0041-1.png',
        imgs: [],
        tags: ['linea blanca', 'topes'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-700889539-tope-de-cocina-electrico-de-77cm-vitroceramico-aranci-_JM',
        price: 270.0,
        description:
            'Tope eléctrico vitroceramica de 77 cm Aranci. Diseño y tecnología italiana cuenta con 12 meses de garantía. Esta fantástica cocina cuenta con quemadores muy rápidos y de control fácil a través de un panel táctil, con el que podrás ajustar la potencia de la llama a tu gusto y necesidad, pasa de temperatura baja para cocinar a fuego lento, a temperatura muy alta para hervir agua y cocinar alimentos con increíble velocidad.',
        features: {
            Fabricante: ['Fabricante', 'ARANCI'],
            Voltaje: ['Voltaje', 'AC 220V - 60HZ'],
            Potencia: ['Potencia', '7502-8929 WATTS.'],
            Modelo: ['Modelo', 'GIALET77'],
            Color: ['Color', 'Negro'],
            Dimensiones: ['Dimensiones', '77cm x 52cm x 5cm'],
        },
    },
    {
        code: 42,
        active: true,
        title: 'Tope De Cocina Electrico 90cm Vitroceramico Aranci',
        front: '/images/topes/0042-1.png',
        imgs: [],
        tags: ['linea blanca', 'topes'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-700954029-tope-de-cocina-electrico-90cm-vitroceramico-aranci-_JM',
        price: 280.0,
        description:
            'Tope eléctrico vitroceramica de 90 cm Aranci. Diseño y tecnología italiana cuenta con 12 meses de garantía. Esta fantástica cocina cuenta con quemadores muy rápidos y de control fácil a través de un panel táctil, con el que podrás ajustar la potencia de la llama a tu gusto y necesidad, pasa de temperatura baja para cocinar a fuego lento, a temperatura muy alta para hervir agua y cocinar alimentos con increíble velocidad.',
        features: {
            Fabricante: ['Fabricante', 'ARANCI'],
            Voltaje: ['Voltaje', 'AC 220V - 60HZ'],
            Potencia: ['Potencia', '7502-8929 WATTS.'],
            Modelo: ['Modelo', 'GIALET90'],
            Color: ['Color', 'Negro'],
            Dimensiones: ['Dimensiones', '90cm x 52cm x 5cm'],
        },
    },
    {
        code: 43,
        active: true,
        title: 'Kit De Limpieza De Vitrocerámica Weiman',
        front: '/images/otros/0043-1.png',
        imgs: ['/images/otros/0043-2.png'],
        tags: ['linea blanca', 'otros'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-711987071-kit-de-limpieza-de-vitroceramica-weiman-_JM',
        price: 18.0,
        description:
            'El kit de limpieza Weiman ofrece todas las herramientas esenciales y necesarias para limpiar dar brillo y proteger su vitroceramica, liquido limpiador y pulido de cocina: elimina fácilmente los alimentos quemados, formula no abrasiva que no daña, ayuda a evitar que los alimentos se peguen, esponja de cocina: aumenta el poder de fregado final, almohadilla reemplazable, no raya, cuchilla para superficie de cocina: elimina la suciedad y los residuos más rebeldes.',
        features: {
            Fabricante: ['Fabricante', 'WEIMAN'],
        },
    },
    {
        code: 45,
        active: true,
        title: 'Campana Extractora De Cocina De 90 cm Frigilux',
        front: '/images/campanas/0045-1.png',
        imgs: [],
        tags: ['linea blanca', 'campanas'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-545979748-campana-extractora-de-cocina-de-90-frigilux-_JM',
        price: 420.0,
        description:
            'Campana de cocina extractora de 90 cm Frigilux, diseño de acero inoxidable, control táctil enchufe ul, filtro de aluminio, auto limpieza, luces led: 2 x 1,5w, permite una buena iluminación al cocinar.',
        features: {
            Fabricante: ['Fabricante', 'FRIGILUX'],
            Voltaje: ['Voltaje', ' 110V - 60 HZ'],
            Modelo: ['Modelo', 'CACFR8S-90X'],
            Color: ['Color', 'Negro'],
            Dimensiones: ['Dimensiones', '896mm x 430mm x 415mm'],
        },
    },
    {
        code: 46,
        active: true,
        title: 'Campana De Pared De 90 Cm Euro Dial Tecnolam',
        front: '/images/campanas/0046-1.png',
        imgs: [],
        tags: ['linea blanca', 'campanas'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-580652903-campana-de-pared-de-90-cm-euro-dial-tecnolam-_JM',
        price: 330.0,
        description:
            'Campana decorativa pared 90 cm. Iluminación LED. Controles Digitales. Acero inoxidable AISI 304. Filtros de aluminio lavables. Filtros de Carbón Activo. Motor doble turbina. Capacidad de extracción 550 m3/hr. Funcionamiento: 127V/60Hz.',
        features: {
            Fabricante: ['Fabricante', 'TECNOLAM'],
            Voltaje: ['Voltaje', '110-120V 50-60 HZ'],
            Consumo: ['Consumo', '234W'],
            Modelo: ['Modelo', 'EURODIAL.AC90'],
            Color: ['Color', 'Negro y Acero'],
            Dimensiones: ['Dimensiones', '90cm x 50cm x 46cm'],
        },
    },
    {
        code: 48,
        active: true,
        title: 'Dispensador Enfriador De Botellón Con Nevera Rania',
        front: '/images/otros/0048-1.png',
        imgs: ['/images/otros/0048-2.png', '/images/otros/0048-3.png'],
        tags: ['linea blanca', 'otros'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-716148559-dispensador-enfriador-de-botellon-con-nevera-rania-_JM',
        price: 225.0,
        description:
            '3 temperaturas: agua caliente, normal y fría, refrigeración por compresor de alta eficiencia, cerradura de seguridad para niños para el grifo de agua caliente, vidrio templado, tanque de agua de acero inoxidable (sus304), ahorro de energía super silencioso.',
        features: {
            Fabricante: ['Fabricante', 'RANIA'],
            Voltaje: ['Voltaje', '110V-120V/60HZ'],
            PotenciaCaliente: ['Potencia Caliente', '420W'],
            PotenciaFrio: ['Potencia Frio', '100W'],
            Modelo: ['Modelo', 'RA856-SBC'],
            Color: ['Color', 'Negro y Dorado'],
            Dimensiones: ['Dimensiones', '100cm x 31cm x 31cm'],
        },
    },
    {
        code: 50,
        active: true,
        title: 'Cafetera De 5 Tazas Oster',
        front: '/images/cafeteras/0050-1.png',
        imgs: ['/images/cafeteras/0050-2.png', '/images/cafeteras/0050-3.png'],
        tags: ['linea blanca', 'cafeteras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-731201202-cafetera-de-5-tazas-oster-_JM',
        price: 31.0,
        description:
            'La cafetera Oster® de 5 tazas permite disfrutar de una taza de café recién hecha al momento que desees. Con su función de Pausa y Servir, puedes servir una taza de café durante el proceso de colado para disfrutar de su rico sabor. ¡Contiene el tamaño adecuado para ahorrar espacio en tu cocina!',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Voltaje: ['Voltaje', '120V'],
            Potencia: ['Potencia', '672 WATTS'],
            Modelo: ['Modelo', 'BVSTDC05'],
            Color: ['Color', 'Negro'],
        },
    },
    {
        code: 51,
        active: true,
        title: 'Cafetera De 12 Tazas Negra Oster',
        front: '/images/cafeteras/0051-1.png',
        imgs: ['/images/cafeteras/0051-2.png', '/images/cafeteras/0051-3.png'],
        tags: ['linea blanca', 'cafeteras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-580740921-cafetera-de-12-tazas-negra-oster-_JM',
        price: 50.0,
        description:
            'La cafetera Oster® de 12 tazas permite disfrutar de una taza de café recién hecha al momento que desees. Con su función de Pausa y Servir, puedes servir una taza de café durante el proceso de colado para disfrutar de su rico sabor. ¡Contiene el tamaño adecuado para ahorrar espacio en tu cocina!',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Voltaje: ['Voltaje', '110V'],
            Modelo: ['Modelo', 'BVSTDCS12B'],
            Color: ['Color', 'Negro'],
            Dimensiones: ['Dimensiones', '33cm x 22cm x 35cm'],
        },
    },
    {
        code: 52,
        active: true,
        title: 'Cafetera De 12 Tazas Negra Oster',
        front: '/images/cafeteras/0052-1.png',
        imgs: [
            '/images/cafeteras/0052-2.png',
            '/images/cafeteras/0052-3.png',
            '/images/cafeteras/0052-4.png',
        ],
        tags: ['linea blanca', 'cafeteras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-569957988-cafetera-electrica-12-tazas-programable-oster-_JM',
        price: 63.0,
        description:
            'La cafetera programable Oster® de 12 tazas permite configurar la hora del colado automático con hasta 24 horas de anticipación, para que disfrutes de una taza de café recién hecha cuando lo desees. Con su función de pausa y servir, también puedes servir una taza de café durante el proceso de colado, para disfrutar del rico sabor al momento que desees. ¡Cuenta con un nuevo diseño ideal para tu cocina!',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Voltaje: ['Voltaje', '110V'],
            Potencia: ['Potencia', '900 WATTS'],
            Modelo: ['Modelo', 'BVSTDSP12B '],
            Color: ['Color', 'Negro'],
        },
    },
    {
        code: 54,
        active: true,
        title: 'Cafetera Espresso Cappuccino Oster',
        front: '/images/cafeteras/0054-1.png',
        imgs: [
            '/images/cafeteras/0054-2.png',
            '/images/cafeteras/0054-3.png',
            '/images/cafeteras/0054-4.png',
        ],
        tags: ['linea blanca', 'cafeteras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-728115925-cafetera-espresso-cappuccino-oster-_JM',
        price: 170.0,
        description:
            'El placer de un café delicioso es una sensación que deberías poder disfrutar a cualquier hora. La cafetera de espresso Oster® ofrece una forma fácil de personalizar tus bebidas favoritas de espresso. La bomba de 15 bares y el sistema espumador de leche son ideales para crear deliciosos espressos, cappuccinos, lattes y más desde la comodidad de tu hogar. Incluye portafiltro con filtros para shot sencillo y doble.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Voltaje: ['Voltaje', '110V'],
            Modelo: ['Modelo', 'BVSTEM5501B'],
            Color: ['Color', 'Negro'],
        },
    },
    {
        code: 55,
        active: true,
        title: 'Cafetera Programable 12 Tazas Roja Mr Coffee',
        front: '/images/cafeteras/0055-1.png',
        imgs: [],
        tags: ['linea blanca', 'cafeteras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-704214882-cafetera-programable-12-tazas-roja-mr-coffee-_JM',
        price: 75.0,
        description:
            'Con función de apagado de 2 horas la cesta del filtro es fácil de quitar y limpiar. (no posee filtro permanente) Retrasar la preparación para configurar con anticipación selector de fuerza de preparación la ventana de agua permite un llenado preciso, varias funciones programables. se elimina hasta un 97% de cloro para un café de mejor sabor el indicador de tiempo de frescura ayuda a determinar la frescura del café desde su preparación. tiene suficiente agua para hasta 12 tazas. aspecto elegante y atractivo para una cocina moderna',
        features: {
            Fabricante: ['Fabricante', 'MR COFFE'],
            Voltaje: ['Voltaje', '110V'],
            Potencia: ['Potencia', '1100 WATTS'],
            Modelo: ['Modelo', 'BVNC-EHX33R-NP'],
            Color: ['Color', 'Rojo'],
            Dimensiones: ['Dimensiónes', '37cm x 27cm x 24cm'],
        },
    },
    {
        code: 56,
        active: true,
        title: 'Molino De Café Y Especias Negro Hamilton Beach',
        front: '/images/cafeteras/0056-1.png',
        imgs: ['/images/cafeteras/0056-2.png', '/images/cafeteras/0056-3.png'],
        tags: ['linea blanca', 'cafeteras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-707464338-molino-de-cafe-y-especias-negro-hamilton-beach-_JM',
        price: 25.0,
        description:
            'Cámara moledora desmontable, muele café y especias, almacenamiento para cable, cuchilla de acero inoxidable, más silencioso, botón de encendido y apagado.',
        features: {
            Fabricante: ['Fabricante', 'HAMILTON BEACH'],
            Modelo: ['Modelo', '80335RV'],
            Color: ['Color', 'Negro'],
        },
    },
    {
        code: 57,
        active: true,
        title: 'Cafetera Greca Magefesa 3 Tazas',
        front: '/images/cafeteras/0057-1.png',
        imgs: ['/images/cafeteras/0057-2.png'],
        tags: ['linea blanca', 'cafeteras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-743019138-cafetera-greca-magefesa-3-tazas-_JM',
        price: 23.0,
        description:
            'Uniendo la tradición con las modernas tecnologías de fabricación y la mejora de materiales, MAGEFESA ofrece su gama de cafeteras Greca . En sus diferentes modelos, con capacidad para 3 tazas, fabricadas en aluminio. Una sólida Greca apta para cocinas eléctricas, a gas y vitrocerámicas con asa y pomo de baquelita de fácil limpieza.',
        features: {
            Fabricante: ['Fabricante', 'MAGEFESA '],
            Modelo: ['Modelo', 'KENIA 3'],
            Color: ['Color', 'Acero'],
            Capacidad: ['Capacidad', '3 tazas'],
        },
    },
    {
        code: 58,
        active: true,
        title: 'Cafetera Greca Magefesa 6 Tazas',
        front: '/images/cafeteras/0058-1.png',
        imgs: ['/images/cafeteras/0058-2.png'],
        tags: ['linea blanca', 'cafeteras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-743068618-cafetera-greca-magefesa-6-tazas-_JM',
        price: 28.0,
        description:
            'Uniendo la tradición con las modernas tecnologías de fabricación y la mejora de materiales, MAGEFESA ofrece su gama de cafeteras Greca . En sus diferentes modelos, con capacidad para 6 tazas, fabricadas en aluminio. Una sólida Greca apta para cocinas eléctricas, a gas y vitrocerámicas con asa y pomo de baquelita de fácil limpieza.',
        features: {
            Fabricante: ['Fabricante', 'MAGEFESA '],
            Modelo: ['Modelo', 'KENIA 6'],
            Color: ['Color', 'Acero'],
            Capacidad: ['Capacidad', '6 tazas'],
        },
    },
    {
        code: 59,
        active: true,
        title: 'Cafetera Greca Magefesa 9 Tazas',
        front: '/images/cafeteras/0059-1.png',
        imgs: ['/images/cafeteras/0059-2.png'],
        tags: ['linea blanca', 'cafeteras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-743032040-cafetera-greca-magefesa-9-tazas-_JM',
        price: 34.0,
        description:
            'Uniendo la tradición con las modernas tecnologías de fabricación y la mejora de materiales, MAGEFESA ofrece su gama de cafeteras Greca . En sus diferentes modelos, con capacidad para 3, 6 y 9 tazas, fabricadas en aluminio. Una sólida Greca apta para cocinas eléctricas, a gas y vitrocerámicas con asa y pomo de baquelita de fácil limpieza.',
        features: {
            Fabricante: ['Fabricante', 'MAGEFESA '],
            Modelo: ['Modelo', 'KENIA 9'],
            Color: ['Color', 'Acero'],
            Capacidad: ['Capacidad', '9 tazas'],
        },
    },
    {
        code: 60,
        active: true,
        title: 'Cafetera 12 Tazas Brentwood',
        front: '/images/cafeteras/0060-1.png',
        imgs: ['/images/cafeteras/0060-2.png'],
        tags: ['linea blanca', 'cafeteras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-757066932-cafetera-12-tazas-brentwood-_JM',
        price: 32.0,
        description:
            'Cafetera de 12 tazas con función de pausa y servicio, jarra apta para lavavajillas, filtro de café reutilizable, plato calentador, ventana de nivel de agua, pala de café molido, sin "BPA", luz indicadora de poder.',
        features: {
            Fabricante: ['Fabricante', 'BRENTWOOD'],
            Modelo: ['Modelo', 'TS-215BK'],
            Potencia: ['Potencia', '800 WATTS'],
            Color: ['Color', 'Negro'],
            Capacidad: ['Capacidad', '12 tazas'],
        },
    },
    {
        code: 62,
        active: true,
        title: 'Ventilador De Pedestal 10 Pulgadas Salcar',
        front: '/images/otros/0062-1.png',
        imgs: ['/images/otros/0062-2.png', '/images/otros/0062-3.png'],
        tags: ['linea blanca', 'otros'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-718328060-ventilador-de-pedestal-10-pulgadas-salcar-_JM',
        price: 23.0,
        description:
            'Desempeño de alta velocidad, potente flujo de aire, regulación de 3 velocidades, amplio rango de regulación, patas antideslizantes, protección anti recalentamiento del motor, altura ajustable.',
        features: {
            Fabricante: ['Fabricante', 'SALCAR'],
            Modelo: ['Modelo', 'SAL-VENTP10'],
            Color: ['Color', 'Varios'],
        },
    },
    {
        code: 63,
        active: true,
        title: 'Ventilador De Pedestal Negro Omega',
        front: '/images/otros/0063-1.png',
        imgs: [],
        tags: ['linea blanca', 'otros'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-732346995-ventilador-de-pedestal-negro-omega-_JM',
        price: 35.0,
        description:
            'Motor de cobre 75 w, 3 velocidades, regulador rotativo, parrilla plástica negra, 5 piezas de hoja de plástico, tubo cromado, base circular cuatro agujeros.',
        features: {
            Fabricante: ['Fabricante', 'OMEGA'],
            Modelo: ['Modelo', 'OVP-18P'],
            Color: ['Color', 'Negro'],
        },
    },
    {
        code: 65,
        active: true,
        title: 'Extractor De Jugos Oster 500ml',
        front: '/images/extractores/0065-1.png',
        imgs: [
            '/images/extractores/0065-2.png',
            '/images/extractores/0065-3.png',
        ],
        tags: ['linea blanca', 'extractores'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-720318921-extractor-de-jugos-oster-500ml-_JM',
        price: 90.0,
        description:
            'Extractor de jugos OSTER, Jugos llenos de vitaminas y nutrientes para ti y tu familia. Una manera fácil para llenar tu vida de energía y estar más saludable. Envase para la pulpa con capacidad de 1,5 litros para mayor productividad, jarra con capacidad para extraer hasta 500 ml de jugo, las superficies en contacto directo con los alimentos son libres de BPA (bisfenol-A)',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', 'FPSTJE316W'],
            Potencia: ['Potencia', '400 WATTS'],
            Color: ['Color', 'Rojo y Gris'],
            Capacidad: ['Capacidad', '1,5L'],
        },
    },
    {
        code: 66,
        active: true,
        title: 'Extractor De Jugos Oster',
        front: '/images/extractores/0066-1.png',
        imgs: ['/images/extractores/0066-2.png'],
        tags: ['linea blanca', 'extractores'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-720356438-extractor-de-jugos-oster-_JM',
        price: 160.0,
        description:
            'El extractor de jugos Oster® extrae lo mejor de la innovación. Cuenta con prácticamente todos los beneficios que te gustaría tener en un solo extractor, e inclusive más. Su boca de alimentación es dos veces más grande, cuenta con accesorios re movibles y sus dos velocidades + pulso permiten extraer el jugo tanto de ingredientes blandos como duros. Y ahí no queda todo, porque un estilo de vida saludable es tan importante como lo que tienes a tu alcance.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', 'FPSTJE320S'],
            Potencia: ['Potencia', '600 WATTS'],
            Color: ['Color', 'Metal'],
            Capacidad: ['Capacidad', '1,5L'],
        },
    },
    {
        code: 67,
        active: true,
        title: 'Extractor De Jugo 400 Watts Premium',
        front: '/images/extractores/0067-1.png',
        imgs: ['/images/extractores/0067-2.png'],
        tags: ['linea blanca', 'extractores'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-750555820-extractor-de-jugo-400-watts-premium-_JM',
        price: 70.0,
        description:
            'El extractor de jugos PREMIUM® extrae lo mejor de la innovación. Cuenta con prácticamente todos los beneficios que te gustaría tener en un solo extractor, e inclusive más. Su boca de alimentación es dos veces más grande, cuenta con accesorios re movibles y sus dos velocidades + pulso permiten extraer el jugo tanto de ingredientes blandos como duros. Y ahí no queda todo, porque un estilo de vida saludable es tan importante como lo que tienes a tu alcance.',
        features: {
            Fabricante: ['Fabricante', 'PREMIUM'],
            Modelo: ['Modelo', 'PJE647'],
            Potencia: ['Potencia', '400 WATTS'],
            Color: ['Color', 'Acero'],
            Capacidad: ['Capacidad', '1,2L'],
            Jarra: ['Jarra', '350ml'],
        },
    },
    {
        code: 68,
        active: true,
        title: 'Extractor De Jugo 400 Watts Brentwood',
        front: '/images/extractores/0068-1.png',
        imgs: [
            '/images/extractores/0068-2.png',
            '/images/extractores/0068-3.png',
        ],
        tags: ['linea blanca', 'extractores'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-757011082-extractor-de-jugo-400-watts-brentwood-_JM',
        price: 60.0,
        description:
            'El extractor de jugos BRENTWOOD® extrae lo mejor de la innovación. Cuenta con prácticamente todos los beneficios que te gustaría tener en un solo extractor, e inclusive más. Su boca de alimentación es dos veces más grande, cuenta con accesorios re movibles y sus dos velocidades + pulso permiten extraer el jugo tanto de ingredientes blandos como duros. Y ahí no queda todo, porque un estilo de vida saludable es tan importante como lo que tienes a tu alcance.',
        features: {
            Fabricante: ['Fabricante', 'BRENTWOOD'],
            Modelo: ['Modelo', 'JC-452B'],
            Potencia: ['Potencia', '400 WATTS'],
            Color: ['Color', 'Negro'],
            Jarra: ['Jarra', '450ml'],
        },
    },
    {
        code: 69,
        active: true,
        title: 'Extractor De Jugo 800 Watts Brentwood',
        front: '/images/extractores/0069-1.png',
        imgs: [
            '/images/extractores/0069-2.png',
            '/images/extractores/0069-3.png',
        ],
        tags: ['linea blanca', 'extractores'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-743509637-extractor-de-jugo-800-watts-brentwood-_JM',
        price: 100.0,
        description:
            'El extractor de jugos BRENTWOOD® extrae lo mejor de la innovación. Cuenta con prácticamente todos los beneficios que te gustaría tener en un solo extractor, e inclusive más. Su boca de alimentación es dos veces más grande, cuenta con accesorios re movibles y sus dos velocidades + pulso permiten extraer el jugo tanto de ingredientes blandos como duros. Y ahí no queda todo, porque un estilo de vida saludable es tan importante como lo que tienes a tu alcance.',
        features: {
            Fabricante: ['Fabricante', 'BRENTWOOD'],
            Modelo: ['Modelo', 'JC-500'],
            Potencia: ['Potencia', '800 WATTS'],
            Color: ['Color', 'Acero'],
            Jarra: ['Jarra', '1000ml'],
        },
    },
    {
        code: 70,
        active: true,
        title: 'Extractor De Jugo 1000 Watts Brentwood',
        front: '/images/extractores/0070-1.png',
        imgs: ['/images/extractores/0070-2.png'],
        tags: ['linea blanca', 'extractores'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-757043890-extractor-de-jugo-1000-watts-brentwood-_JM',
        price: 115.0,
        description:
            'El extractor de jugos BRENTWOOD® extrae lo mejor de la innovación. Cuenta con prácticamente todos los beneficios que te gustaría tener en un solo extractor, e inclusive más. Su boca de alimentación es dos veces más grande, cuenta con accesorios re movibles y sus dos velocidades + pulso permiten extraer el jugo tanto de ingredientes blandos como duros. Y ahí no queda todo, porque un estilo de vida saludable es tan importante como lo que tienes a tu alcance.',
        features: {
            Fabricante: ['Fabricante', 'BRENTWOOD'],
            Modelo: ['Modelo', 'JC-1000'],
            Potencia: ['Potencia', '1000 WATTS'],
            Color: ['Color', 'Negro'],
            Jarra: ['Jarra', '1500ml'],
        },
    },
    {
        code: 72,
        active: true,
        title: 'Congelador Dual 200lts Semi dual',
        front: '/images/otros/0072-1.png',
        imgs: ['/images/otros/0072-2.png'],
        tags: ['linea blanca', 'otros'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-720675529-congelador-dual-200lts-chiq-_JM',
        price: 395.0,
        description:
            'Descongelación manual, control mecánico de temperatura con termostato ajustable, revestimiento de aluminio en relieve, rodillos para fácil movimiento, tecla de bloqueo, superior, incluye protector de voltaje.',
        features: {
            Fabricante: ['Fabricante', 'CHIQ'],
            Modelo: ['Modelo', 'MF-201'],
            Voltaje: ['Voltaje', '110V'],
            Color: ['Color', 'Blanco'],
            Capacidad: ['Capacidad', '200L'],
        },
    },
    {
        code: 74,
        active: true,
        title: 'Tv 20 Pulgadas - Syon',
        front: '/images/otros/0074-1.png',
        imgs: ['/images/otros/0074-2.png'],
        tags: ['linea marron', 'otros'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-731114179-tv-20-syon-_JM',
        price: 80.0,
        description:
            'Televisor led de 20" marca syon televisor led, panel de resolución de 780p /1080p. Tiene entrada de hdmi, usb , vga, y entrada de audio',
        features: {
            Fabricante: ['Fabricante', 'SYON'],
            Modelo: ['Modelo', 'SYBHB20'],
            Voltaje: ['Voltaje', '110V'],
            Color: ['Color', 'Negro'],
            Pulgadas: ['Pulgadas', '20'],
        },
    },
    {
        code: 76,
        active: true,
        title: 'Batidora Planetaria De 7 Vel Hamilton Beach Negra',
        front: '/images/batidoras/0076-1.png',
        imgs: ['/images/batidoras/0076-2.png'],
        tags: ['linea blanca', 'batidoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-570960259-batidora-planetaria-de-7-vel-hamilton-beach-negra-_JM',
        price: 140.0,
        description:
            'Facilita cualquier trabajo de batido, 7 velocidades. Acción de batido abarca adentro de todo el tazón, incluye 3 accesorios: el batidor plano, gancho para masa y batidor de alambre. Que ofrecen versatilidad de batido. Se pueden lavar en lavavajillas, acción de batido de manos libres: la cabeza de la batidora gira a medida que rota adentro del tazón, cabeza inclinable se levanta para fácil acceso al tazón, 6 velocidades y función de envolver: para máxima velocidad, pies antideslizantes, incluye blindaje de las salpicaduras: impide que salpiquen los ingredientes cuando está en uso.',
        features: {
            Fabricante: ['Fabricante', 'HAMILTON BEACH'],
            Modelo: ['Modelo', '63390'],
            Potencia: ['Potencia', '300 WATTS.'],
            Color: ['Color', 'Negro'],
            Tazon: ['Tazón', '3,8L'],
        },
    },
    {
        code: 77,
        active: true,
        title: 'Batidora De Pedestal Hamilton Beach Tipo Kitchinaid',
        front: '/images/batidoras/0077-1.png',
        imgs: ['/images/batidoras/0077-2.png'],
        tags: ['linea blanca', 'batidoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-568403630-batidora-de-pedestal-hamilton-beach-tipo-kitchinaid-_JM',
        price: 150.0,
        description:
            '7 velocidades. Incluye 3 accesorios: el batidor plano, gancho para masa y batidor de alambre. Manija: facilita mover y guardar la batidora es antideslizante. Escudo contra salpicaduras: impide que salpiquen los ingredientes cuando está en uso. Acción de batido de manos libres: la cabeza de la batidora gira a medida que rota adentro del tazón. ',
        features: {
            Fabricante: ['Fabricante', 'HAMILTON BEACH'],
            Modelo: ['Modelo', '63392'],
            Potencia: ['Potencia', '300 WATTS.'],
            Color: ['Color', 'Plateado'],
            Tazon: ['Tazón', '3,8L'],
        },
    },
    {
        code: 78,
        active: true,
        title: 'Batidora Planetaria 350 Watts Gtronic',
        front: '/images/batidoras/0078-1.png',
        imgs: [],
        tags: ['linea blanca', 'batidoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-579409280-batidora-planetaria-350-watts-gtronic-_JM',
        price: 110.0,
        description:
            'Tazón extraíble para fácil operación, accesorios desmontables para facilitar limpieza, 4 accesorios para mezclar y hacer masa, pies antideslizantes, voltaje: 110v-60 hz, accesorios: batidor, batidor de huevos, gancho de masas, tapa del tazón, capacidad de 5 lts, potencia de 350 watts, alta eficiencia,6 velocidades',
        features: {
            Fabricante: ['Fabricante', 'GTRONIC'],
            Modelo: ['Modelo', 'HX-125'],
            Potencia: ['Potencia', '350 WATTS.'],
            Voltaje: ['Voltaje', '110V-60 HZ'],
            Color: ['Color', 'Negro'],
            Tazon: ['Tazón', '5L'],
        },
    },
    {
        code: 79,
        active: true,
        title: 'Batidora De Pedestal De 6 Velocidades Oster',
        front: '/images/batidoras/0079-1.png',
        imgs: ['/images/batidoras/0079-2.png'],
        tags: ['linea blanca', 'batidoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-569495791-batidora-de-pedestal-de-6-velocidades-oster-_JM',
        price: 75.0,
        description:
            'La marca Oster se compromete a desarrollar productos confiables de calidad superior y desempeño duradero la batidora de mano y pedestal oster le permite preparar toda una variedad de tortas, panes y mucho más 6 velocidades para mezclar, batir amasar y mucho más la cabeza de la batidora se separa de la base para usarse como batidora de mano practico botón de un solo toque que expulsa fácilmente los batidores mango ergonómico para un mejor equilibrio y control de su batidora excelente rendimiento y potencia gracias a su motor de 250 watts función de potencia adicional que aumenta automáticamente la velocidad para lograr una mezcla mas homogénea tazón giratorio de plástico con capacidad para 2,5 litros incluye batidores resistentes de tamaño normal y ganchos para masa, para una mayor versatilidad',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', '2610'],
            Potencia: ['Potencia', '250 WATTS.'],
            Voltaje: ['Voltaje', '120V - 60 HZ'],
            Color: ['Color', 'Blanco'],
            Tazon: ['Tazón', '2,5L'],
        },
    },
    {
        code: 80,
        active: true,
        title: 'Batidora De Pedestal De 660 Watts 6 Vel Plateada Aranci',
        front: '/images/batidoras/0080-1.png',
        imgs: ['/images/batidoras/0080-2.png'],
        tags: ['linea blanca', 'batidoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-700973281-batidora-de-pedestal-de-660-watts-6-vel-plateada-aranci-_JM',
        price: 130.0,
        description:
            'Tazón de acero inoxidable de 5,5 litros motor 100% de cobre potencia 660 watts de potencia 6 velocidades engranajes metálicos acción de mezcla planetario incluye 3 batidores para: mezclar, amasar y batir cubierta perfect cover: para evitar salpicaduras',
        features: {
            Fabricante: ['Fabricante', 'ARANCI'],
            Modelo: ['Modelo', 'SM-1518 ARANCI'],
            Potencia: ['Potencia', '660 WATTS.'],
            Voltaje: ['Voltaje', '120V - 60 HZ'],
            Color: ['Color', 'Acero'],
            Tazon: ['Tazón', '5,5L'],
        },
    },
    {
        code: 81,
        active: true,
        title: 'Batidora De Pedestal Blanca Black & Decker',
        front: '/images/batidoras/0081-1.png',
        imgs: ['/images/batidoras/0081-2.png', '/images/batidoras/0081-2.png'],
        tags: ['linea blanca', 'batidoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-569822063-batidora-de-pedestal-blanca-black-decker-_JM',
        price: 60.0,
        description:
            'Facil de convertir de batidora de pedestal a batidora de mano, incluye dos batidores de alambre y dos ganchos para masas, dos recipientes: uno de vidrio (3,7 lts) y uno plástico (4,2 lts) 5 velocidades piezas lavables en maquina lavaplatos solamente para uso domestico.',
        features: {
            Fabricante: ['Fabricante', 'BLACK&DECKER'],
            Modelo: ['Modelo', 'MX-900'],
            Potencia: ['Potencia', '250 WATTS.'],
            Voltaje: ['Voltaje', '120V - 60 HZ'],
            Color: ['Color', 'Blanco'],
            Tazon: ['Tazón', '3,7 lts y 4,2 lts'],
        },
    },
    {
        code: 82,
        active: true,
        title: 'Batidora De Mano Oster 5 Velocidades',
        front: '/images/batidoras/0082-1.png',
        imgs: [],
        tags: ['linea blanca', 'batidoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-553315686-batidora-de-mano-oster-5-velocidades-_JM',
        price: 35.0,
        description:
            '5 velocidades para mayor control exclusiva función doble burst of power mango ergonómico para un mejor equilibrio y control de su batidora conveniente base inclinada para mayor estabilidad su diseño moderno y elegante le brinda un toque especial a su cocina incluye batidores resistentes de tamaño normal y ganchos para masa, para una mayor versatilidad.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', '2499'],
            Potencia: ['Potencia', '250 WATTS.'],
            Color: ['Color', 'Blanco'],
            Tazon: ['Tazón', '3,7 lts y 4,2 lts'],
        },
    },
    {
        code: 83,
        active: true,
        title: 'Batidor De Inmersion 3 En 1 Con Procesador Y Batidor Oster',
        front: '/images/batidoras/0083-1.png',
        imgs: ['/images/batidoras/0083-2.png'],
        tags: ['linea blanca', 'batidoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-722883763-batidor-de-inmersion-3-en-1-con-procesador-y-batidor-oster-_JM',
        price: 65.0,
        description:
            'Las batidoras de inmersión Oster® permiten preparar una variedad de bebidas y recetas deliciosas, tales como sopas, puré de tomate, malteadas y mucho más. Además, es ideal para mezclar pequeñas cantidades de ingredientes, en la preparación de papillas para los niños, aderezos para ensaladas, o un simple smoothie. Mango ergonómico para seguir el contorno de la mano, de manera que sea más fácil su uso Control de velocidad variable para mayor versatilidad al momento de batir. Diseño exclusivo e Innovadora cuchilla con hoja y eje de acero inoxidable capaz de triturar hielo y licuar ingredientes más duros Incluye prácticos accesorios con tapas de doble función, batidores y picatodo, que permiten preparar y almacenar una gran variedad de recetas Función de turbo para lograr una mezcla más homogénea.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', 'FPSTHB2615W'],
            Potencia: ['Potencia', '250 WATTS.'],
            Color: ['Color', 'Blanco'],
        },
    },
    {
        code: 84,
        active: true,
        title: 'Batidora De Inmersión 200 Watts Brentwood',
        front: '/images/batidoras/0084-1.png',
        imgs: ['/images/batidoras/0084-2.png'],
        tags: ['linea blanca', 'batidoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-757025406-batidora-de-inmersion-200-watts-brentwood-_JM',
        price: 20.0,
        description:
            'Triture, mezcle, haga puré y mezcle, Úselo desde la preparación de alimentos hasta la fabricación de jabón, Cuchillas duraderas de acero inoxidable, Agarre ergonómico con botones suaves al tacto, Llegue a jarras, ollas y tazones, Cable extra largo de 5 pies, Eje mezclador apto para lavavajillas, Soporte vertical, Diseño compacto de 2 partes.',
        features: {
            Fabricante: ['Fabricante', 'BRENTWOOD'],
            Modelo: ['Modelo', 'HB-32BK'],
            Potencia: ['Potencia', '200 WATTS.'],
            Color: ['Color', 'Negro'],
        },
    },
    {
        code: 85,
        active: true,
        title: 'Batidora De Inmersión 3 En 1 Brentwood',
        front: '/images/batidoras/0085-1.png',
        imgs: ['/images/batidoras/0085-2.png', '/images/batidoras/0085-3.png'],
        tags: ['linea blanca', 'batidoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-743501577-batidora-de-inmersion-3-en-1-brentwood-_JM',
        price: 32.0,
        description:
            'Batidora de mano y procesador de alimentos Incluye accesorio para batidor de globo Cuchillas duraderas de acero inoxidable Mango ergonómico Longitud del cable: 5 pies • Piezas y accesorios removibles aptos para lavavajillas Apilamiento de piezas para un fácil almacenamiento.',
        features: {
            Fabricante: ['Fabricante', 'BRENTWOOD'],
            Modelo: ['Modelo', 'HB-38BK'],
            Potencia: ['Potencia', '260 WATTS.'],
            Color: ['Color', 'Negro'],
        },
    },
    {
        code: 86,
        active: true,
        title: 'Batidora De Inmersión Con Picatodo Hamilton Beach',
        front: '/images/batidoras/0086-1.png',
        imgs: ['/images/batidoras/0086-2.png', '/images/batidoras/0086-3.png'],
        tags: ['linea blanca', 'batidoras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-562446114-batidora-de-inmersion-con-picatodo-hamilton-beach-_JM',
        price: 48.0,
        description:
            '2 velocidades y múltiples usos, un producto para múltiples tareas: licuar, mezclar, batir, hacer puré y picar incluye varilla para mezclar, batidor y tazón para picar accesorios seguros para el lavavajillas motor de 225 watts varillas para mezclar y accesorios para batir de acero inoxidable tazón para picar de 3 tazas con cuchilla de acero inoxidable.',
        features: {
            Fabricante: ['Fabricante', 'HAMILTON BEACH'],
            Modelo: ['Modelo', '59765'],
            Potencia: ['Potencia', '225 WATTS.'],
            Color: ['Color', 'Negro'],
        },
    },
    {
        code: 88,
        active: true,
        title: 'Mini Picatodo Oster 1.5 Tazas',
        front: '/images/procesadores/0088-1.png',
        imgs: ['/images/procesadores/0088-2.png'],
        tags: ['linea blanca', 'procesadores'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-724279035-mini-picatodo-oster-15-tazas-_JM',
        price: 28.0,
        description:
            'Pica, muele y mezcla diferentes alimentos e ingredientes, permitiéndote preparar una gran variedad de recetas en tan solo segundos. Su potente motor y diseño compacto lo convierten en el aliado perfecto de tu cocina.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', 'FPSTFP3322'],
            Potencia: ['Potencia', '70 WATTS.'],
            Color: ['Color', 'Negro'],
            Capacidad: ['Capacidad', '1.5 tazas'],
        },
    },
    {
        code: 89,
        active: true,
        title: 'Picatodo Oster 3 Tazas',
        front: '/images/procesadores/0089-1.png',
        imgs: ['/images/procesadores/0089-2.png'],
        tags: ['linea blanca', 'procesadores'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-728103554-picatodo-oster-3-tazas-_JM',
        price: 45.0,
        description:
            'Pica, muele y mezcla diferentes alimentos e ingredientes, permitiéndote preparar una gran variedad de recetas en tan solo segundos. Su potente motor y diseño compacto lo convierten en el aliado perfecto de tu cocina. 2 convenientes velocidades, alta y baja, con opción de pulso para mayor versatilidad y control Amplio recipiente de 3 tazas/0,7 litros para que procese una mayor cantidad de alimentos a la vez Potente motor de 125 vatios Base en negro con modernos detalles cromados y diseño estilizado que le brindan un toque contemporáneo a su cocina Accesorios fáciles de remover y lavar, inclusive en el lavaplatos automático.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', '3320'],
            Potencia: ['Potencia', '125 WATTS.'],
            Color: ['Color', 'Negro'],
            Capacidad: ['Capacidad', '3 tazas'],
        },
    },
    {
        code: 90,
        active: true,
        title: 'Mini Picatodo 1.5 Tazas Brentwood',
        front: '/images/procesadores/0090-1.png',
        imgs: ['/images/procesadores/0090-2.png'],
        tags: ['linea blanca', 'procesadores'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-743524815-mini-picatodo-15-tazas-brentwood-_JM',
        price: 18.0,
        description:
            'Pica, muele y mezcla diferentes alimentos e ingredientes, permitiéndote preparar una gran variedad de recetas en tan solo segundos. Su potente motor y diseño compacto lo convierten en el aliado perfecto de tu cocina. 2 convenientes velocidades, alta y baja, con opción de pulso para mayor versatilidad y control.',
        features: {
            Fabricante: ['Fabricante', 'BRENTWOOD'],
            Modelo: ['Modelo', 'MC-109W'],
            Potencia: ['Potencia', '100 WATTS.'],
            Color: ['Color', 'Blanco'],
            Capacidad: ['Capacidad', '1,5 tazas'],
        },
    },
    {
        code: 91,
        active: true,
        title: 'Procesador De Alimentos De 10 Tazas Oster',
        front: '/images/procesadores/0091-1.png',
        imgs: [
            '/images/procesadores/0091-2.png',
            '/images/procesadores/0091-3.png',
        ],
        tags: ['linea blanca', 'procesadores'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-720582362-procesador-de-alimentos-de-10-tazas-oster-_JM',
        price: 99.0,
        description:
            'Motor potente y duradero que permite el total procesamiento de los alimentos tubo de alimentación extra ancho de 12 cm para agregar frutas y verduras grandes pica, muele y mezcla diferentes alimentos e ingredientes no tóxico - libre de bisfenol-a en superficies en contacto directo con los alimentos apila y guarda cómodamente los accesorios dentro del tazón de 10 tazas dos velocidades y función de pulso para obtener resultados homogéneos con ingredientes duros o blandos el compartimiento para el cable ayuda a mantener todo organizado y facilita el almacenamiento en gabinetes incluye una cuchilla en forma de s, aspas para amasar y un disco de acero inoxidable para rebanar y rallar.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', 'FTSTFP1355'],
            Potencia: ['Potencia', '500 WATTS.'],
            Color: ['Color', 'Negro'],
            Capacidad: ['Capacidad', '10 tazas'],
        },
    },
    {
        code: 92,
        active: true,
        title: 'Procesador De Alimentos 8 Tazas Brentwood',
        front: '/images/procesadores/0092-1.png',
        imgs: [
            '/images/procesadores/0092-2.png',
            '/images/procesadores/0092-3.png',
            '/images/procesadores/0092-4.png',
        ],
        tags: ['linea blanca', 'procesadores'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-720325348-procesador-de-alimentos-8-tazas-brentwood-_JM',
        price: 65.0,
        description:
            'Pica, muele y mezcla diferentes alimentos e ingredientes, permitiéndote preparar una gran variedad de recetas en tan solo segundos. Su potente motor y diseño compacto lo convierten en el aliado perfecto de tu cocina. 2 convenientes velocidades, alta y baja, con opción de pulso para mayor versatilidad y control, Voltaje: 350 watts 2 velocidades más pulso capacidad 8 tazas tapa de cierre de seguridad tazón de trabajo extraíble pies con ventosa antideslizante picar, rebanar, triturar, mezclar y hacer puré.',
        features: {
            Fabricante: ['Fabricante', 'BRENTWOOD'],
            Modelo: ['Modelo', 'FP585BK'],
            Potencia: ['Potencia', '350 WATTS.'],
            Color: ['Color', 'Negro'],
            Capacidad: ['Capacidad', '8 tazas'],
        },
    },
    {
        code: 94,
        active: true,
        title: 'Plancha Eléctrica Con Bandeja 0ster',
        front: '/images/planchas/0094-1.png',
        imgs: ['/images/planchas/0094-2.png'],
        tags: ['linea blanca', 'planchas'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-720866640-plancha-electrica-con-bandeja-0ster-_JM',
        price: 88.0,
        description:
            'Esta versátil plancha eléctrica cuenta con antiadherente diamond force de oster, una duradera superficie de cocción con partículas de diamante que crea un revestimiento más resistente para facilitar el desprendimiento de los alimentos y un rendimiento antiadherente superior a lo largo del tiempo, se mantiene caliente y es resistente a rayones.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', 'CKSTGR20WT'],
            Voltaje: ['Voltaje', '110V'],
            Potencia: ['Potencia', '1500 WATTS.'],
            Color: ['Color', 'Negro'],
            Dimensiones: ['Dimensiones', '65cm x 30cm x 6cm'],
        },
    },
    {
        code: 95,
        active: true,
        title: 'Sanduchera Parrilla Oster',
        front: '/images/planchas/0095-1.png',
        imgs: ['/images/planchas/0095-2.png'],
        tags: ['linea blanca', 'planchas'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-720632165-sanduchera-parrilla-oster-_JM',
        price: 70.0,
        description:
            'Sistema de altura ajustable que se adapta a diversos tipos de panes almacenamiento vertical con cierre de seguridad para ahorrar espacio práctica área para enrollar el cable y mantener organizada la cocina planchas anti adherentes que facilitan la limpieza exterior estilo contemporáneo en acero inoxidable resistente.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', 'CKSTPA2880013'],
            Voltaje: ['Voltaje', '120V'],
            Potencia: ['Potencia', '1400 WATTS.'],
            Color: ['Color', 'Acero'],
        },
    },
    {
        code: 96,
        active: true,
        title: 'Plancha Sandwichera Oster',
        front: '/images/planchas/0096-1.png',
        imgs: ['/images/planchas/0096-2.png'],
        tags: ['linea blanca', 'planchas'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-718051160-plancha-sandwichera-oster-_JM',
        price: 115.0,
        description:
            'Exterior estilo contemporáneo en acero inoxidable resistente con luces indicadoras que facilitan su supervisión. Almacenamiento vertical para ahorrar espacio y cierre de seguridad. Práctica área para enrollar el cable y mantener organizada su cocina. Sistema de altura ajustable que se adapta a diversos tipos de panes. Almacenamiento vertical y área para enrollar el cable. Planchas antiadherentes que facilitan la limpieza.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', 'CKSTAM3884-013'],
            Voltaje: ['Voltaje', '120V'],
            Potencia: ['Potencia', '1680 WATTS.'],
            Color: ['Color', 'Acero'],
            Dimensiones: ['Dimensiones', '30cm x 24cm'],
        },
    },
    {
        code: 97,
        active: true,
        title: 'Sanduchera Wafflera Oster',
        front: '/images/planchas/0097-1.png',
        imgs: ['/images/planchas/0097-2.png'],
        tags: ['linea blanca', 'planchas'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-737976561-sanduchera-wafflera-oster-_JM',
        price: 80.0,
        description:
            'Una sandwichera más que completa con la que podrás preparar no sólo sándwiches sino también waffles, o cocinar alimentos como carnes y vegetales, pudiendo abrirse completamente para usar como parrilla. La altura es regulable, de acuerdo al grosor de lo que quieras elaborar. Además, las superficies de cocción son removibles para que la limpieza sea más fácil, Tres-en-uno: placas reversibles para preparar waffles, dorar sándwiches o cocinar alimentos Control variable que te permite seleccionar la temperatura adecuada para cocinar Superficies de cocción con recubrimiento antiadherente Altura regulable para preparar comidas de cualquier grosor Se abre completamente para cocinar a la parrilla Superficies de cocción removibles Asas y base frías al tacto.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', 'CG120W-012-000'],
            Color: ['Color', 'Acero'],
        },
    },
    {
        code: 98,
        active: true,
        title: 'Sarten Electrico Oster',
        front: '/images/planchas/0098-1.png',
        imgs: ['/images/planchas/0098-2.png'],
        tags: ['linea blanca', 'planchas'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-566222353-sarten-electrico-oster-_JM',
        price: 58.0,
        description:
            'SARTEN ELÉCTRICO OSTER ® permite preparar una amplia variedad de alimentos saludables y recetas variadas. Cocción más rápida y uniforme Interior anti adherente que no necesita aceite para la preparación de los alimentos, y facilita la limpieza del producto Tapa de cristal templado y transparente con borde de acero inoxidable, tiene una mayor durabilidad y permite visualizar la preparación de los alimentos Termostato desmontable con selector de temperatura con diferentes posiciones Tapa con orificio para la salida de vapor.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', 'CKSTSK1712-013'],
            Voltaje: ['Voltaje', '1500 WATTS'],
            Color: ['Color', 'Negro'],
        },
    },
    {
        code: 99,
        active: true,
        title: 'Tosty Arepas De 6 Porciones Oster',
        front: '/images/planchas/0099-1.png',
        imgs: ['/images/planchas/0099-2.png'],
        tags: ['linea blanca', 'planchas'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-569623093-tosty-arepas-de-6-porciones-oster-_JM',
        price: 60.0,
        description:
            'Listo en 7 minutos recubrimiento antiadherente: para cocinar y limpiar fácilmente 6 porciones cocina un 30% mas rápido: que los métodos de cocción tradicionales cierre de seguridad: mantiene cerrada la unidad mientras cocina diseño compacto: para ahorrar espacio medidas del producto: 29 cm de ancho x 34 cm de prof x 11 cm de alto medidas de la caja: 31,5 cm de ancho x 15,5 cm de prof x 38 cm de alto.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', 'CKSTAM0513'],
            Voltaje: ['Voltaje', '110V'],
            Color: ['Color', 'Negro'],
        },
    },
    {
        code: 100,
        active: true,
        title: 'Tosty Arepa Brentwood',
        front: '/images/planchas/0100-1.png',
        imgs: ['/images/planchas/0100-2.png'],
        tags: ['linea blanca', 'planchas'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-743559409-tosty-arepa-brentwood-_JM',
        price: 48.0,
        description:
            '6 arepas redondas y tostadas Calor ajustable para arepas suaves o crujientes Recubrimiento antiadherente Cubierta exterior de plástico fría al tacto Luz indicadora de encendido y precalentamiento Almacenamiento vertical compacto Potencia: 1200w Código de aprobación: cETL Cocine mini panqueques, pan de maíz, galletas, huevos y más.',
        features: {
            Fabricante: ['Fabricante', 'BRENTWOOD'],
            Modelo: ['Modelo', 'AR-136'],
            Voltaje: ['Voltaje', '110V'],
            Potencia: ['Potencia', '1200 WATTS'],
            Color: ['Color', 'Plateado'],
        },
    },
    {
        code: 101,
        active: true,
        title: 'Arrocera Multiusos Oster 10 Tazas',
        front: '/images/planchas/0101-1.png',
        imgs: ['/images/planchas/0101-2.png', '/images/planchas/0101-3.png'],
        tags: ['linea blanca', 'planchas'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-737957838-arrocera-multiusos-oster-10-tazas-_JM',
        price: 50.0,
        description:
            'Cocina arroz y todo lo que puedas imaginar de la manera más fácil, rápida y rendidora, ya que tiene una capacidad de 1,8 litros. ¿No quieres comer arroz hoy? Puedes volverte creativa a la hora de crear preparaciones saludables gracias a su bandeja para cocer al vapor. Usa la función automática para mantener tus comidas perfectas hasta la hora de servirlas. Además podrás limpiarla fácilmente gracias a su tazón interno removible de aluminio con recubrimiento antiadherente.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', 'CKSTRC1700B'],
            Voltaje: ['Voltaje', '110V'],
            Color: ['Color', 'Negro'],
            Capacidad: ['Capacidad', '10 tazas'],
        },
    },
    {
        code: 102,
        active: true,
        title: 'Sanduchera Premium',
        front: '/images/planchas/0102-1.png',
        imgs: ['/images/planchas/0102-2.png', '/images/planchas/0102-3.png'],
        tags: ['linea blanca', 'planchas'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-740300644-sanduchera-premium-_JM',
        price: 28.0,
        description:
            'Capacidad para dos rebanadas. Superficie exterior fría al tacto. Platos con recubrimiento antiadherente. Luces indicadoras. Diseño compacto.',
        features: {
            Fabricante: ['Fabricante', 'PREMIUM'],
            Modelo: ['Modelo', 'PSM269'],
            Voltaje: ['Voltaje', '110V'],
            Potencia: ['Potencia', '750 WATTS'],
            Color: ['Color', 'Blanco'],
        },
    },
    {
        code: 103,
        active: true,
        title: 'Wafflera Brentwood',
        front: '/images/planchas/0103-1.png',
        imgs: ['/images/planchas/0103-2.png'],
        tags: ['linea blanca', 'planchas'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-739640414-wafflera-brentwood-_JM',
        price: 28.0,
        description:
            'La potente wafflera doble antiadherente Brentwood TS-243 de 750 vatios cocina dos waffles perfectos en 6 a 10 minutos. Los gofres se deslizan directamente de las placas antiadherentes fáciles de limpiar. Prácticas luces indicadoras de encendido/calentamiento. Se almacena en posición vertical para un almacenamiento compacto. Cuenta con apagado de seguridad contra sobrecalentamiento.',
        features: {
            Fabricante: ['Fabricante', 'BRENTWOOD'],
            Modelo: ['Modelo', 'TS-243'],
            Voltaje: ['Voltaje', '110V'],
            Potencia: ['Potencia', '750 WATTS'],
            Color: ['Color', 'Plateado'],
        },
    },
    {
        code: 104,
        active: true,
        title: 'Maquina Para Hacer Mini Cupcakes',
        front: '/images/planchas/0104-1.png',
        imgs: ['/images/planchas/0104-2.png'],
        tags: ['linea blanca', 'planchas'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-739613360-maquina-para-hacer-mini-cupcakes-_JM',
        price: 35.0,
        description:
            'La potente wafflera doble antiadherente Brentwood TS-243 de 750 vatios cocina dos waffles perfectos en 6 a 10 minutos. Los gofres se deslizan directamente de las placas antiadherentes fáciles de limpiar. Prácticas luces indicadoras de encendido/calentamiento. Se almacena en posición vertical para un almacenamiento compacto. Cuenta con apagado de seguridad contra sobrecalentamiento.',
        features: {
            Fabricante: ['Fabricante', 'BRENTWOOD'],
            Modelo: ['Modelo', 'TS-243'],
            Voltaje: ['Voltaje', '110V'],
            Color: ['Color', 'Lavanda'],
        },
    },
    {
        code: 105,
        active: true,
        title: 'Maquina Para Hacer Waffles De Animales',
        front: '/images/planchas/0105-1.png',
        imgs: ['/images/planchas/0105-2.png'],
        tags: ['linea blanca', 'planchas'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-739686764-maquina-para-hacer-waffles-de-animales-_JM',
        price: 35.0,
        description:
            'La poderosa máquina para hacer waffles con forma de animal antiadherente Brentwood TS-253 de 1000 vatios hornea 3 mini waffles de animales perfectos en solo minutos. Los gofres se deslizan directamente de las placas antiadherentes fáciles de limpiar. Prácticas luces indicadoras de encendido/calentamiento. Se almacena en posición vertical para un almacenamiento compacto. Cuenta con apagado de seguridad contra sobrecalentamiento.',
        features: {
            Fabricante: ['Fabricante', 'BRENTWOOD'],
            Modelo: ['Modelo', 'TS-253'],
            Voltaje: ['Voltaje', '110V'],
            Potencia: ['Potencia', '1000 WATTS'],
            Color: ['Color', 'Azul'],
        },
    },
    {
        code: 106,
        active: true,
        title: 'Maquina Para Hacer Cake Pop',
        front: '/images/planchas/0106-1.png',
        imgs: ['/images/planchas/0106-2.png'],
        tags: ['linea blanca', 'planchas'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-739675210-maquina-para-hacer-cake-pop-_JM',
        price: 35.0,
        description:
            'La potente máquina para hacer cake pops antiadherente Brentwood TS-254 de 1000 vatios hornea 12 cake pops perfectos en solo 4 minutos. Cake pops se deslizan directamente fuera de las placas antiadherentes fáciles de limpiar. Prácticas luces indicadoras de encendido/calentamiento. Se almacena en posición vertical para un almacenamiento compacto. Cuenta con apagado de seguridad contra sobrecalentamiento.',
        features: {
            Fabricante: ['Fabricante', 'BRENTWOOD'],
            Modelo: ['Modelo', 'TS-254'],
            Voltaje: ['Voltaje', '110V'],
            Color: ['Color', 'Púrpura'],
        },
    },
    {
        code: 107,
        active: true,
        title: 'Olla De Presión Oster 7 Litros',
        front: '/images/planchas/0107-1.png',
        imgs: ['/images/planchas/0107-2.png', '/images/planchas/0107-3.png'],
        tags: ['linea blanca', 'planchas'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-737932111-olla-de-presion-oster-7-litros-_JM',
        price: 80.0,
        description:
            'La Olla de Presión Oster® de 7 litros, cuenta con 5 sistemas de seguridad para mayor confiabilidad del consumidor. Su fabricación es de aluminio durable y ligero para una cocción eficiente. Incluye una tapa hermética con sello grueso y reforzado! Disfruta mientras cocinas con seguridad en nuestra olla de presión! Capacidad de 7 litros Agarradera doble para un manejo más cómodo y seguro Sistema 2 en 1 permite liberar presión mediante la salida de vapor y cierre interno de seguridad Válvula que controla la presión liberándola automáticamente e indicando la condición de operación Incluye: 2 válvulas de seguridad adicionales Asa auxiliar permite un manejo cómodo y seguro Fabricada en aluminio durable y ligero para una cocción eficiente Incluye una tapa hermética con sello grueso y reforzado.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', 'CKSTPC4692'],
            Capacidad: ['Capacidad', '7 litros'],
            Color: ['Color', 'Acero'],
        },
    },
    {
        code: 108,
        active: true,
        title: 'Cotufera Brentwood',
        front: '/images/otros/0108-1.png',
        imgs: [],
        tags: ['linea blanca', 'otros'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-739761678-cotufera-brentwood-_JM',
        price: 35.0,
        description:
            'La máquina para hacer palomitas de maíz con aire caliente Brentwood PC-486R de 8 tazas hace estallar hasta 8 tazas de palomitas de maíz saludables y sin aceite en solo 2-3 minutos. Disfrute de ahorros 4 veces mayores usando granos sueltos en lugar de bolsas para microondas. Las palomitas de maíz se colocan directamente en su tazón. Siga las recetas incluidas para crear sus propias palomitas de maíz gourmet. Las piezas extraíbles facilitan la limpieza.',
        features: {
            Fabricante: ['Fabricante', 'BRENTWOOD'],
            Modelo: ['Modelo', 'PC-486W'],
            Potencia: ['Potencia', '1200w'],
            Capacidad: ['Capacidad', '8 tazas'],
            Color: ['Color', 'Rojo y Blanco'],
        },
    },
    {
        code: 110,
        active: true,
        title: 'Maquina De Coser Singer Promise',
        front: '/images/otros/0110-1.png',
        imgs: ['/images/otros/0110-2.png'],
        tags: ['linea blanca', 'otros'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-739761678-cotufera-brentwood-_JM',
        price: 235.0,
        description:
            'Tipo de puntadas: recta/zig zag/decorativas ofrece un movimiento de cosido uniforme y lineal viene provista de guía de fácil enhebrado en pocos pasos posee una potente luz de costura para ganar en visibilidad incluye hasta 9 tipos de puntadas diferentes cuentas con pedal para regular la velocidad de forma muy sencilla el ajuste de presión del prénsatelas es automático posee un práctico y útil ojalador automático en 4 pasos dispone de un practico compartimiento para guardar sus accesorios.',
        features: {
            Fabricante: ['Fabricante', 'SINGER'],
            Modelo: ['Modelo', '1409'],
            Voltaje: ['Voltaje', '110~120V/60 Hz/0.6 A'],
            Velocidad: ['Capacidad', '750 ppm'],
            Color: ['Color', 'Blanco'],
        },
    },
    {
        code: 112,
        active: true,
        title: 'Vaso Plástico Para Licuadora Oster',
        front: '/images/repuestos/0112-1.png',
        imgs: [],
        tags: ['linea blanca', 'repuestos'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-491689736-vaso-plastico-para-licuadora-oster-_JM',
        price: 5.0,
        description:
            'Vaso plástico para licuadora oster clásica, medidas del producto: 21 cm de alto x 11,7 cm de ancho x 11,7 cm de profundidad.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', '294'],
            Material: ['Material', 'Plastico'],
        },
    },
    {
        code: 113,
        active: true,
        title: 'Vaso De Repuesto De Vidrio Para  Licuadora Oster',
        front: '/images/repuestos/0113-1.png',
        imgs: [],
        tags: ['linea blanca', 'repuestos'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-726898003-vaso-de-repuesto-de-vidrio-para-licuadora-oster-_JM',
        price: 15.0,
        description:
            'Vaso de vidrio para licuadora oster clásica, medidas del producto: 21 cm de alto x 11,7 cm de ancho x 11,7 cm de profundidad.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', '293'],
            Material: ['Material', 'Vidrio'],
        },
    },
    {
        code: 114,
        active: true,
        title: 'Vaso De Vidrio De Licuadora Oster 1.25',
        front: '/images/repuestos/0114-1.png',
        imgs: [],
        tags: ['linea blanca', 'repuestos'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-726794768-vaso-de-vidrio-de-licuadora-oster-125-_JM',
        price: 17.0,
        description:
            'Vaso de vidrio redondo para licuadora oster clásica, medidas del producto: 20,5 cm de alto x 13,5 cm de ancho x 15,5 cm de profundidad.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', '124461'],
            Material: ['Material', 'Vidrio'],
        },
    },
    {
        code: 115,
        active: true,
        title: 'Jarra Repuesto Para Cafetera Oster 12 Tazas',
        front: '/images/repuestos/0115-1.png',
        imgs: [],
        tags: ['linea blanca', 'repuestos'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-722715495-jarra-repuesto-para-cafetera-oster-12-tazas-mod-bvstrc12-_JM',
        price: 20.0,
        description:
            'Si necesitas un reemplazo para la jarra de tu cafetera BVSTDC12, esta es la opción que buscas con la seguridad de que se trata de un producto original Oster®.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', 'BVSTRC12'],
            Material: ['Material', 'Vidrio'],
        },
    },
    {
        code: 116,
        active: true,
        title: 'Cuchilla 4 picos Oster',
        front: '/images/repuestos/0116-1.png',
        imgs: [],
        tags: ['linea blanca', 'repuestos'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-536509340-cuchilla-oster-_JM',
        price: 8.0,
        description:
            'Cuchilla de acero inoxidable de repuesto para licuadora clásica OSTER. Medidas del producto: 6,5 cm de ancho x 6,5 de prof x 6,3 de alto, medidas de la caja: 7 cm de ancho x 7 cm de prof x 7 cm de alto.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', 'BLSTAA4961'],
        },
    },
    {
        code: 117,
        active: true,
        title: 'Cuchilla Para Licuadora Oster 6 Hojillas',
        front: '/images/repuestos/0117-1.png',
        imgs: [],
        tags: ['linea blanca', 'repuestos'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-582820561-cuchilla-para-licuadora-oster-6-hojillas-_JM',
        price: 10.0,
        description:
            'Cuchilla de acero inoxidable de repuesto para licuadora clásica OSTER. Medidas del producto: 6,5 cm de ancho x 6,5 de prof x 6,3 de alto, medidas de la caja: 7 cm de ancho x 7 cm de prof x 7 cm de alto, no gotea, no se oxida.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', '4980'],
        },
    },
    {
        code: 118,
        active: true,
        title: 'Anillos Selladores De Licuadora Oster',
        front: '/images/repuestos/0118-1.png',
        imgs: ['/images/repuestos/0118-2.png'],
        tags: ['linea blanca', 'repuestos'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-570748289-anillos-selladores-de-licuadora-oster-_JM',
        price: 5.0,
        description:
            'Anillos de gomo selladores para licuadora OSTER, incluye dos anillos.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', '4900'],
            Material: ['Material', 'Goma'],
        },
    },
    {
        code: 119,
        active: true,
        title: 'Up Regulador De Voltaje De 8 Tomas',
        front: '/images/otros/0119-1.png',
        imgs: ['/images/otros/0119-2.png'],
        tags: ['linea blanca', 'otros'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-732971622-up-regulador-de-voltaje-de-8-tomas-_JM',
        price: 25.0,
        description:
            'Interruptor automático, contra cortos circuitos, indicadores visuales fácil de usar, capaz de restablecer cortacircuitos de protección contra sobre carga de entrada, regulación automática de alta y baja tensión, 8 tomas corrientes que protegen a los periféricos y dispositivo. entradas o input: voltaje 110/115/120 vac rango permitido 96 vac 148 vac frecuencia rango 50 o 60 hz. peso: 1 kg dimensiones: 145-114-75.5 indicador led de encendido y apagado color verde y regulación de voltaje color amarillo interruptor automático para cortos circuitos. producto totalmente nuevo.',
        features: {
            Fabricante: ['Fabricante', 'U PRODUCT'],
            Modelo: ['Modelo', 'U-AVR 1000'],
            Rango: ['Rango', '96 VAC 148 VAC'],
        },
    },
    {
        code: 120,
        active: true,
        title: 'Cepillo Secador Tipo Revlon Aranci',
        front: '/images/otros/0120-1.png',
        imgs: ['/images/otros/0120-2.png'],
        tags: ['linea blanca', 'otros'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-701475283-cepillo-secador-tipo-revlon-aranci-_JM',
        price: 35.0,
        description:
            'Mas rápido y menos daño: el cepillo ayuda a reducir la humedad en el cabello para un secado más rápido y menos daño. también reduce el frizz y la estática, que hacen que el cabello sea suave y brillante diseño ligero: cerámica de alta calidad reparte el calor por todos las superficies de la placa, los iones negativos rodean cada mechón de cabello que eliminan la estática y el encrespamiento, proporcionando más brillo cable giratorio 360º: permite la flexibilidad necesaria para que los estilistas se muevan libremente sin que el cable se enrede o se dañe, es perfecto para las técnicas de peinado avanzado de la actualidad tecnología de turmalina: es un proceso cristalino único que produce un gran volumen de iones negativos cuando se combina con calor infrarrojo. esta tecnología probada en el salon proporciona menos daño a las cutículas del cabello, creando un acabado final más suave y sedoso para tu cabello cerdas flexibles: sin enredos y con puntas de bolas de masajes, ayudan a secar, suavizar y peinar el cabello en la mitad del tiempo, mientras que las puntas de bolas de masajes son suaves par el cuero cabelludo.',
        features: {
            Fabricante: ['Fabricante', 'ARANCI'],
            Modelo: ['Modelo', 'COHB-208'],
            Voltaje: ['Voltaje', '220V'],
            Potencia: ['Potencia', '1200W'],
        },
    },
    {
        code: 121,
        active: true,
        title: 'Plancha De Ropa A Vapor Blanca Brentwood',
        front: '/images/otros/0121-1.png',
        imgs: [],
        tags: ['linea blanca', 'otros'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-744297687-plancha-de-ropa-a-vapor-blanca-brentwood-_JM',
        price: 25.0,
        description:
            'Recubrimiento antiadherente Control de calor ajustable Ajustes de secado, vapor y rociado Vapor vertical para cortinas, cortinajes y ropa de cama Fácil de llenar Compartimiento de agua transparente Indicador de luz de encendido.',
        features: {
            Fabricante: ['Fabricante', 'BRENTWOOD'],
            Modelo: ['Modelo', 'MPI-52'],
            Potencia: ['Potencia', '1000W'],
            Color: ['Color', 'Blanco'],
        },
    },
    {
        code: 122,
        active: true,
        title: 'Plancha De Ropa A Vapor Gris Brentwood',
        front: '/images/otros/0122-1.png',
        imgs: [],
        tags: ['linea blanca', 'otros'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-759703030-plancha-de-ropa-a-vapor-gris-brentwood-_JM',
        price: 25.0,
        description:
            'Recubrimiento antiadherente Control de calor ajustable Ajustes de secado, vapor y rociado Vapor vertical para cortinas, cortinajes y ropa de cama Fácil de llenar Compartimiento de agua transparente Indicador de luz de encendido.',
        features: {
            Fabricante: ['Fabricante', 'BRENTWOOD'],
            Modelo: ['Modelo', 'MPI-53'],
            Potencia: ['Potencia', '1000W'],
            Color: ['Color', 'Negro'],
        },
    },
    {
        code: 123,
        active: true,
        title: 'Plancha De Ropa A Vapor Roja Brentwood',
        front: '/images/otros/0123-1.png',
        imgs: [],
        tags: ['linea blanca', 'otros'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-744314819-plancha-de-ropa-a-vapor-roja-brentwood-_JM',
        price: 25.0,
        description:
            'Recubrimiento antiadherente Control de calor ajustable Ajustes de secado, vapor y rociado Vapor vertical para cortinas, cortinajes y ropa de cama Fácil de llenar Compartimiento de agua transparente Indicador de luz de encendido.',
        features: {
            Fabricante: ['Fabricante', 'BRENTWOOD'],
            Modelo: ['Modelo', 'MPI-54'],
            Potencia: ['Potencia', '1000W'],
            Color: ['Color', 'Rojo'],
        },
    },
    {
        code: 124,
        active: true,
        title: 'Plancha De Ropa A Vapor Oster',
        front: '/images/otros/0124-1.png',
        imgs: [],
        tags: ['linea blanca', 'otros'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-730265763-plancha-de-ropa-a-vapor-oster-_JM',
        price: 25.0,
        description:
            'Este modelo de planchas, por su tamaño, ofrece una solución innovadora que ayuda a reducir el esfuerzo que se realiza al planchar y obtener un terminado perfecto. Es una plancha compacta con suela antiadherente y fácil de almacenar que te encantará. Su vapor continuo y la posibilidad de seleccionar el tipo de tela a planchar, te ofrece la mejor protección para todo tipo de prendas. Además, los modelos de esta serie ofrecen un 20% más cobertura de vapor, lo que facilita remover mejor las arrugas profundas con menor esfuerzo. Tamaño eficiente y compacto para un mejor manejo de planchado y fácil almacenamiento Te brinda un 20% mayor cobertura al planchar* (*vs GCSTBS3800 de Oster®) Suela antiadherente, para un mejor deslizamiento sobre la tela Botón de rociado fino para combatir arrugas difíciles Luz de encendido Tecnología Anti calcificación Control de temperatura que te permite ajustar el calor según el tipo de tejido: seda, sintético, lana, algodón, etc. Cable giratorio/ Cordón que gira 360° grados, para evitar enredos al planchar.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', 'GCSTBS5004 '],
            Voltaje: ['Voltaje', '120V'],
            Color: ['Color', 'Bronce'],
        },
    },
    {
        code: 126,
        active: true,
        title: 'Plancha A Vapor Azul Oster',
        front: '/images/otros/0126-1.png',
        imgs: [],
        tags: ['linea blanca', 'otros'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-730238983-plancha-de-ropa-a-vapor-oster-_JM',
        price: 25.0,
        description:
            'Una plancha compacta con suela antiadherente y fácil de almacenar que te encantará,sobre todo si eres de las personas que plancha una o dos veces por semana y valoras guardarla en espacios pequeños. Su vapor continuo y la posibilidad de seleccionar el tipo de tela a planchar, te ofrece la mejor protección para todo tipo de prendas. Además, los modelos de esta serie ofrecen un 20% más cobertura de vapor, lo que facilita remover mejor las arrugas profundas con menor esfuerzo.',
        features: {
            Fabricante: ['Fabricante', 'OSTER'],
            Modelo: ['Modelo', 'GCSTBS5001'],
            Voltaje: ['Voltaje', '120V'],
            Color: ['Color', 'Lavanda'],
        },
    },
    {
        code: 127,
        active: true,
        title: 'Cafetera 4 Tazas Brentwood',
        front: '/images/cafeteras/0127-1.png',
        imgs: ['/images/cafeteras/0127-2.png', '/images/cafeteras/0127-3.png'],
        tags: ['linea blanca', 'cafeteras'],
        mercadoLibre:
            'https://articulo.mercadolibre.com.ve/MLV-759873554-cafetera-4-tazas-brentwood-_JM',
        price: 25.0,
        description:
            'Use la cafetera Brentwood TS-213BK de 4 tazas para hacer la taza de café perfecta. Simplemente coloque sus terrenos, agregue agua y presione el botón de encendido. La placa calentadora mantiene el café caliente. Ahorre dinero con la canasta de filtro reutilizable. La unidad es fácil de limpiar. Prepara 4 tazas de café, Incluye jarra de vidrio y filtro reutilizable, Placa calentadora, Ventana de nivel de agua, Cuchara para café molido reutilizable, Fácil de limpiar, Carcasa fría al tacto y asa de la jarra, Luz indicadora de encendido.',
        features: {
            Fabricante: ['Fabricante', 'BRENTWOOD'],
            Modelo: ['Modelo', 'TS-213BK'],
            Voltaje: ['Voltaje', '110V'],
            Potencia: ['Potencia', '650w'],
            Color: ['Color', 'Negro'],
        },
    },
];

module.exports = db;
