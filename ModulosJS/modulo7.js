export const modulo7 = {
    "titulo": "Módulo 7: Análisis de Circuitos CC - Redes y Potencia",
    "lecciones": [
        {
            "id": "m7-l1",
            "tipo": "multivideo",
            // Se han actualizado los IDs de YouTube con una lista orientada a Ley de Ohm, Kirchhoff, Mallas, Nodos y Thevenin.
            // Puedes ajustar los IDs exactos según tu lista de reproducción curada en la plataforma.
            "recurso": "cgXXfV2qIxc|P_gMmVU1A3Y|b_nBNDkJUJE|6w51PrhXy04|COGjyZI1PS8|A4qBPrfzZMk|LYmdJmTyFGQ|5XdSmm8VWKQ|38lwnRYEGEc|3aWFJdqM_Rw|jJSq8BFJYt4|z-fv_QDESSc|0iU4RWMHqOg|Sw6vtplA_68|enQ8QuUBYNE|a7jaxpYtZAQ|DPCcImv1Xko|SizL_9HP6nY|gJasVOhHbao|7ssuVrxocBQ|X27VqqJ6Dwo|-iIUb9Bma0k|dxOxY0et1rE|9HCXZruI0Lk|TnA2ejc-1es|RmbQiiVV_bc|9t65kr3UVFw|a3VThqncuZQ",
            "titulo": "1. Teoría Fundamental: Ley de Ohm y Leyes de Kirchhoff",
            "descripcion": "Selecciona la lección en el panel derecho. Explora desde los fundamentos resistivos hasta el análisis complejo de mallas y nodos.",
            "llmLink": "https://notebooklm.google.com/notebook/d8eac5d0-34e5-4bdc-949e-fdbef626d764"
        },
        {
            "id": "m7-l2",
            "tipo": "multipresentacion",
            "recurso": "./clase_7.html|https://docs.google.com/presentation/d/e/ID/pub?start=true&loop=true&delayms=3000",
            "titulo": "2. Diapositivas de Apoyo: Teoremas de Redes (2 Partes)",
            "descripcion": "Material visual inmersivo utilizado en la clase magistral. Incluye paso a paso del Teorema de Thévenin, Norton y Superposición."
        },
        {
            "id": "m7-g1",
            "tipo": "grupo",
            "titulo": "3. Laboratorio Virtual: Entorno de Simulación",
            "sublecciones": [
                {
                    "id": "m7-l3-a",
                    "tipo": "simulador",
                    "recurso": "https://www.falstad.com/circuit/circuitjs.html",
                    "titulo": "Falstad: Simulador de Circuitos en Tiempo Real",
                    "descripcion": "Entorno virtual avanzado para construir circuitos con visualización animada del flujo de corriente y osciloscopio integrado."
                },
                {
                    "id": "m7-l3-b",
                    "tipo": "simulador",
                    "recurso": "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc-virtual-lab/latest/circuit-construction-kit-dc-virtual-lab_es.html",
                    "titulo": "PhET: Kit de Construcción de Circuitos CC",
                    "descripcion": "Laboratorio virtual interactivo para armar circuitos con cables, baterías, bombillas y resistencias midiendo voltajes y corrientes."
                },
                {
                    "id": "m7-l3-c",
                    "tipo": "simulador",
                    "recurso": "Simuladores/Electro10_easy_Analisis_Mallas.html",
                    "titulo": "Electro10.easy: Solucionador de Mallas Matrical",
                    "descripcion": "Simulador propio de la plataforma. Ingresa la topología del circuito y visualiza la resolución matricial de corrientes."
                }
            ]
        },
        {
            "id": "m7-l7",
            "tipo": "ejercicio",
            "recurso": "Talleres/Taller_7_Analisis_Nodal_y_Mallas.html",
            "titulo": "4. Taller Práctico No. 7: Resolviendo Redes",
            "descripcion": "Guía interactiva de ejercicios sobre divisor de tensión/corriente, mallas, nodos y transformaciones de fuentes."
        },
        {
            "id": "m7-q1",
            "tipo": "quiz",
            "recurso": "Examen/Cuestionario_7_Circuitos_CC.html",
            "titulo": "5. Evaluación del Módulo 7",
            "descripcion": "Cuestionario de validación de conocimientos con cálculo de resistencias equivalentes y potencias disipadas."
        },
        {
            "id": "m7-e1",
            "tipo": "enlaces",
            "titulo": "6. Enlaces de Interés y Bibliografía",
            "descripcion": "Directorio de recursos externos, solucionarios y herramientas útiles para dominar el análisis de circuitos.",
            "secciones": [
                {
                    "tituloSeccion": "Fundamentos teóricos y Textos Base",
                    "links": [
                        { "url": "https://www.academia.edu/...", "titulo": "Análisis de Circuitos en Ingeniería - Hayt & Kemmerly", "descripcion": "Texto clásico de referencia para análisis de circuitos eléctricos, capítulos de métodos de análisis." },
                        { "url": "https://www.academia.edu/...", "titulo": "Fundamentos de Circuitos Eléctricos - Sadiku", "descripcion": "Material detallado sobre teoremas de redes, superposición y máxima transferencia de potencia." }
                    ]
                },
                {
                    "tituloSeccion": "Problemas Resueltos y Solucionarios",
                    "links": [
                        { "url": "https://www.studocu.com/...", "titulo": "Solucionario de Circuitos Eléctricos - Evirtual", "descripcion": "Resolución de problemas en corriente continua utilizando análisis de nodos, mallas y divisores." },
                        { "url": "https://fisicartes.files.wordpress.com/...", "titulo": "Problemas Resueltos - DeCarlo (Cap. 06 Thévenin)", "descripcion": "Cálculo de equivalentes de Thévenin por métodos de circuito abierto y fuente de prueba." },
                        { "url": "http://www.quimiziencia.es/...", "titulo": "Problemas Resueltos sobre Redes - Reglas de Kirchhoff", "descripcion": "Ejercicios paso a paso formando sistemas de ecuaciones para hallar intensidades." }
                    ]
                },
                {
                    "tituloSeccion": "Herramientas de Cálculo y Software",
                    "links": [
                        { "url": "https://es.symbolab.com/solver/system-of-equations-calculator", "titulo": "Symbolab: Calculadora de Sistemas de Ecuaciones", "descripcion": "Herramienta online esencial para resolver las matrices generadas en el análisis de mallas y nodos." },
                        { "url": "https://infolibros.org/libros-pdf-gratis/fisica/circuitos-electricos/", "titulo": "Colección InfoLibros: Circuitos Eléctricos", "descripcion": "Selección de manuales esenciales para comprender los fundamentos de la electricidad." }
                    ]
                }
            ]
        }
    ]
};
