export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = "es";
export const showDefaultLang = false;
export const LANGUAGE_STORAGE_KEY = "lang";

export const ui = {
  es: {
    "site.name": "Fer.Dev",
    "nav.toggleLanguage": "Cambiar idioma",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.connect": "Conectar",
    "nav.contact": "Contacto",
    "nav.blog": "Blog",

    "blog.eyebrow": "Ideas en construcción",
    "blog.title": "Blog",
    "blog.description":
      "Notas sobre ingeniería de software, IA aplicada y arquitectura de productos web resilientes, nacidas de construir soluciones Full Stack y agentes LLM para retos reales.",
    "blog.explorer": "Explorador",
    "blog.categories": "Categorías",
    "blog.recentPosts": "Publicaciones recientes",
    "blog.onThisPage": "En esta página",
    "blog.introduction": "Introducción",
    "blog.articles": "Artículos recientes",
    "blog.readMore": "Leer más",
    "blog.categories.nifi": "Nifi",
    "blog.categories.n8n": "n8n",
    "blog.posts.7.title": "n8n: tu primer flujo con trazabilidad de punta a punta",
    "blog.posts.7.description":
      "Qué es n8n, para qué aplicarlo y un tutorial corto: Manual Trigger, datos JSON, Edit Fields y un Switch por edad para seguir cada ejecución nodo por nodo.",
    "blog.posts.6.title": "Apache NiFi: de cero a un flujo resiliente con Kafka",
    "blog.posts.6.description":
      "Una guía práctica para modelar FlowFiles, operar procesadores, integrar Kafka y llevar un dataflow observable a producción.",

    "nifi.backToBlog": "Volver al blog",
    "nifi.readTime": "min de lectura",
    "nifi.title": "Apache NiFi, de cero a un",
    "nifi.titleHighlight": "flujo resiliente con Kafka",
    "nifi.lead":
      "Una guía de campo para entender el modelo mental de NiFi, levantar una instancia segura, construir un dataflow trazable y conectarlo con Kafka sin perder control operativo.",
    "nifi.published": "Publicado el 20 ago 2026",
    "nifi.updated": "Guía práctica · NiFi 2 / Kafka 4",
    "nifi.flowDiagram": "Flujo de datos desde HTTP, a través de NiFi, hasta Kafka",
    "nifi.onThisPage": "En esta guía",
    "nifi.nav.model": "Modelo mental",
    "nifi.nav.start": "Primer arranque",
    "nifi.nav.flow": "Diseñar el flujo",
    "nifi.nav.production": "Producción",
    "nifi.copy": "Copiar",
    "nifi.copied": "Copiado",
    "nifi.stack": "Stack de la guía",
    "nifi.terminal.service": "servicio · nifi",
    "nifi.terminal.security": "seguridad · credenciales",
    "nifi.terminal.topic": "kafka · topic",

    "nifi.model.title": "Primero, el modelo mental correcto",
    "nifi.model.p1":
      "NiFi no es una colección de scripts conectados: es un motor de flujo. Cada pieza de datos viaja como un FlowFile, con contenido y atributos, mientras los procesadores la reciben, transforman, enrutan o entregan.",
    "nifi.model.p2":
      "Las conexiones funcionan como colas explícitas. Esa separación permite ver presión, errores y rendimiento en el lienzo, y desacopla la velocidad de quien produce de la velocidad de quien consume.",
    "nifi.model.flowfile": "Contenido más metadatos que acompañan a una unidad de datos durante todo su recorrido.",
    "nifi.model.processor": "Unidad de trabajo que ingiere, transforma, enruta o publica uno o varios FlowFiles.",
    "nifi.model.connection": "Cola entre procesadores con prioridades, límites y back pressure configurables.",
    "nifi.model.calloutTitle": "Diseña para observar, no solo para mover",
    "nifi.model.callout":
      "Un flujo sano hace visibles sus colas, relaciones de error y puntos de reintento. Si solo modelas el camino feliz, la operación terminará ocurriendo fuera de NiFi.",

    "nifi.start.title": "Levanta NiFi y asegura el acceso",
    "nifi.start.p1":
      "Después de extraer la distribución, usa el script del sistema operativo para iniciar NiFi. Esperar la inicialización evita interpretar un arranque todavía incompleto como una falla.",
    "nifi.start.p2":
      "La instalación genera credenciales iniciales en el log. Para un entorno local controlado, puedes reemplazarlas explícitamente antes de abrir https://localhost:8443/nifi.",
    "nifi.start.securityTitle": "Local no significa sin seguridad",
    "nifi.start.security":
      "Mantén HTTPS, usa una contraseña fuerte y nunca reutilices las credenciales del ejemplo. En producción, configura certificados confiables, autenticación y autorización antes de exponer la interfaz.",

    "nifi.flow.title": "Construye un flujo que explique su intención",
    "nifi.flow.p1":
      "Para un ingreso HTTP que termina en Kafka, mantén cada responsabilidad visible. Este recorrido mínimo separa recepción, validación, normalización y entrega.",
    "nifi.flow.step1Title": "Ingiere",
    "nifi.flow.step1": "Usa ListenHTTP o InvokeHTTP según NiFi reciba una solicitud o consulte una fuente externa.",
    "nifi.flow.step2Title": "Valida",
    "nifi.flow.step2": "Verifica esquema, tamaño y campos obligatorios; enruta lo inválido a una relación dedicada.",
    "nifi.flow.step3Title": "Normaliza",
    "nifi.flow.step3": "Trabaja con Record Readers y Writers para transformar JSON, CSV o Avro sin lógica accidental.",
    "nifi.flow.step4Title": "Entrega",
    "nifi.flow.step4": "Publica con PublishKafka y conserva una ruta de failure observable, limitada y recuperable.",
    "nifi.flow.expression":
      "Expression Language opera sobre atributos del FlowFile. Úsalo para decisiones pequeñas y legibles; para datos estructurados, prefiere RecordPath y procesadores orientados a records.",

    "nifi.kafka.title": "Kafka como columna de eventos, NiFi como orquestador",
    "nifi.kafka.p1":
      "Kafka almacena eventos en topics y desacopla productores de consumidores. NiFi aporta el borde visual: ingesta, transformación, enrutamiento, control de presión y trazabilidad antes o después del broker.",
    "nifi.kafka.p2":
      "Para una prueba local, inicia el broker oficial y crea un topic. Después configura Kafka3ConnectionService y referencia ese servicio desde PublishKafka o ConsumeKafka.",
    "nifi.kafka.property": "Propiedad",
    "nifi.kafka.value": "Valor de ejemplo",
    "nifi.kafka.deliveryTitle": "Define la semántica de entrega",
    "nifi.kafka.delivery":
      "Alinea acks, commits de offsets, reintentos y rutas de failure con el nivel de duplicación o pérdida tolerable. Exactly-once no aparece por conectar dos cajas: exige una estrategia completa.",

    "nifi.production.title": "Antes de llamarlo producción",
    "nifi.production.p1":
      "La confiabilidad de un dataflow depende menos de cuántos procesadores tiene y más de qué ocurre cuando una dependencia se ralentiza, un registro no valida o un nodo se reinicia.",
    "nifi.production.backpressureTitle": "Back pressure consciente",
    "nifi.production.backpressure": "Fija umbrales por objetos y tamaño para que una cola proteja al sistema sin ocultar saturación.",
    "nifi.production.provenanceTitle": "Provenance útil",
    "nifi.production.provenance": "Conserva la trazabilidad el tiempo necesario para diagnosticar, auditar y reconstruir el recorrido de un FlowFile.",
    "nifi.production.parametersTitle": "Configuración por contexto",
    "nifi.production.parameters": "Extrae endpoints y valores operativos a Parameter Contexts; marca secretos como sensibles.",
    "nifi.production.failureTitle": "Fallos con destino",
    "nifi.production.failure": "Enruta, limita y alerta los errores. No auto-termines relaciones que puedan representar pérdida de datos.",
    "nifi.conclusion.title": "El mejor lienzo es el que se puede operar",
    "nifi.conclusion.p1":
      "Empieza con pocos procesadores, nombres que expliquen intención y relaciones de error visibles. Agrega Kafka cuando necesites desacoplamiento y retención de eventos, no para esconder un flujo que todavía no entiendes.",

    "nifi.sources.eyebrow": "Fuentes de verdad",
    "nifi.sources.title": "Profundiza en la documentación oficial",
    "nifi.sources.description":
      "Estas referencias llevan directamente a Apache NiFi y Apache Kafka. Las versiones evolucionan; valida allí propiedades, requisitos y comportamiento antes de operar un entorno real.",
    "nifi.sources.gettingStarted": "NiFi · Primeros pasos",
    "nifi.sources.userGuide": "NiFi · Guía de usuario",
    "nifi.sources.expressionLanguage": "Expression Language",
    "nifi.sources.recordPath": "RecordPath",
    "nifi.sources.publishKafka": "PublishKafka",
    "nifi.sources.consumeKafka": "ConsumeKafka",
    "nifi.sources.kafkaQuickstart": "Kafka · Quickstart",
    "nifi.sources.newTab": "abre en una pestaña nueva",

    "n8n.backToBlog": "Volver al blog",
    "n8n.readTime": "min de lectura",
    "n8n.title": "n8n: tu primer flujo con",
    "n8n.titleHighlight": "trazabilidad de punta a punta",
    "n8n.lead":
      "Una introducción práctica a n8n: qué es, dónde aporta valor y un ejercicio corto para construir un flujo con decisión condicional y leer, nodo por nodo, qué ocurrió en cada ejecución.",
    "n8n.published": "Publicado el 4 oct 2026",
    "n8n.updated": "Tutorial práctico · n8n self-hosted",
    "n8n.flowDiagram": "Flujo de n8n: disparador manual, datos JSON, Edit Fields y un Switch con dos salidas según la edad",
    "n8n.onThisPage": "En esta guía",
    "n8n.nav.what": "Qué es n8n",
    "n8n.nav.useCases": "Casos de uso",
    "n8n.nav.start": "Primer arranque",
    "n8n.nav.tutorial": "Tutorial",
    "n8n.nav.traceability": "Trazabilidad",
    "n8n.copy": "Copiar",
    "n8n.copied": "Copiado",
    "n8n.stack": "Stack de la guía",
    "n8n.terminal.npx": "node · npx",
    "n8n.terminal.docker": "docker · n8n",
    "n8n.terminal.json": "edit fields · modo json",

    "n8n.what.title": "Automatización visual, con código cuando lo necesitas",
    "n8n.what.p1":
      "n8n es una plataforma de automatización de flujos de trabajo. Conectas nodos en un lienzo para mover y transformar datos entre APIs, bases de datos y servicios, y puedes alojarla en tu propia infraestructura o usar su versión cloud.",
    "n8n.what.p2":
      "Su diferencia frente a otras herramientas low-code es que no te encierra: cuando un nodo no alcanza, escribes una expresión o un bloque de JavaScript o Python y sigues en el mismo flujo. Cada ejecución queda registrada con la entrada y la salida de cada nodo.",
    "n8n.what.nodeTitle": "Nodo",
    "n8n.what.executionTitle": "Ejecución",
    "n8n.what.trigger": "El nodo que inicia el flujo: un clic manual, un webhook, un cron o un evento de otra aplicación.",
    "n8n.what.node": "Unidad de trabajo que recibe items, aplica una operación y entrega items al siguiente nodo.",
    "n8n.what.execution": "El registro de una corrida completa: qué datos entraron y salieron de cada nodo, y por qué rama.",
    "n8n.what.calloutTitle": "Los datos viajan como items",
    "n8n.what.callout":
      "Entre nodos se mueve una lista de items, y cada item expone su contenido en la propiedad json. Por eso las expresiones se escriben como $json.campo: leen el item que el nodo está procesando.",

    "n8n.useCases.title": "Para qué vale la pena aplicarlo",
    "n8n.useCases.p1":
      "n8n encaja cuando el problema es de orquestación: varias herramientas que deben hablar entre sí, con reglas claras y la necesidad de saber qué pasó en cada corrida.",
    "n8n.useCases.integrationTitle": "Integración entre sistemas",
    "n8n.useCases.integration": "Sincroniza CRM, hojas de cálculo, bases de datos y APIs internas sin escribir un servicio por cada conexión.",
    "n8n.useCases.opsTitle": "Automatización operativa",
    "n8n.useCases.ops": "Notificaciones, aprobaciones, reportes programados y tareas repetitivas que hoy dependen de una persona.",
    "n8n.useCases.aiTitle": "Agentes y flujos con IA",
    "n8n.useCases.ai": "Encadena modelos LLM, herramientas y memoria para clasificar, resumir o responder con contexto del negocio.",
    "n8n.useCases.dataTitle": "Pipelines de datos ligeros",
    "n8n.useCases.data": "Extrae, valida y enruta registros con reglas condicionales antes de entregarlos a su destino.",

    "n8n.start.title": "Levanta n8n en local",
    "n8n.start.p1":
      "Si ya tienes Node.js instalado, la forma más rápida de probarlo es con npx. El editor queda disponible en http://localhost:5678.",
    "n8n.start.p2":
      "Si prefieres aislar el entorno, usa la imagen oficial de Docker con un volumen para conservar tus flujos y credenciales entre reinicios.",
    "n8n.start.noteTitle": "Tus flujos viven en el volumen",
    "n8n.start.note":
      "n8n guarda flujos, credenciales cifradas y el historial de ejecuciones en su directorio de datos. Si omites el volumen, todo se pierde al eliminar el contenedor.",

    "n8n.tutorial.title": "Un flujo pequeño con una decisión",
    "n8n.tutorial.p1":
      "El ejercicio valida la edad de un usuario y toma un camino distinto según el resultado. Son pocos nodos a propósito: lo importante es poder seguir el dato de principio a fin.",
    "n8n.tutorial.step1Title": "Manual Trigger",
    "n8n.tutorial.step1": "Crea un flujo nuevo y agrega el disparador manual. Te permite ejecutar el flujo desde el editor con un clic, sin depender de eventos externos.",
    "n8n.tutorial.step2Title": "Datos en JSON",
    "n8n.tutorial.step2": "Agrega un nodo Edit Fields (Set), cambia Mode a JSON y pega la estructura del usuario. Este nodo simula el dato que llegaría desde un formulario o una API.",
    "n8n.tutorial.step3Title": "Edit Fields para capturar los valores",
    "n8n.tutorial.step3": "Agrega un segundo Edit Fields en modo Manual Mapping y mapea cada campo con una expresión. Aquí fijas el contrato de datos que usará el resto del flujo.",
    "n8n.tutorial.step4Title": "Switch por edad",
    "n8n.tutorial.step4": "Agrega un nodo Switch en modo Rules con dos reglas sobre la edad y renombra cada salida para que el lienzo explique la decisión.",
    "n8n.tutorial.step5Title": "Un mensaje por rama",
    "n8n.tutorial.step5": "Conecta un Edit Fields a cada salida del Switch y define en ambos un campo de texto con el mensaje correspondiente.",
    "n8n.tutorial.fieldsLabel": "Edit Fields · Manual Mapping",
    "n8n.tutorial.fieldsNote":
      "Arrastra cada campo desde el panel de entrada o escribe la expresión. Activa el tipo Number para la edad: el Switch comparará números, no texto.",
    "n8n.tutorial.property": "Propiedad",
    "n8n.tutorial.value": "Valor",
    "n8n.tutorial.rule1": "Regla 1",
    "n8n.tutorial.rule2": "Regla 2",
    "n8n.tutorial.rule1Value": "Number · is greater than or equal to · 18 → salida \"true\"",
    "n8n.tutorial.rule2Value": "Number · is less than · 18 → salida \"false\"",
    "n8n.tutorial.switchNote":
      "En Colombia la mayoría de edad se alcanza al cumplir 18, por eso la regla usa mayor o igual. Ajusta el umbral a la norma de tu país.",
    "n8n.tutorial.branchTrue": "Salida true · mayor de edad",
    "n8n.tutorial.branchFalse": "Salida false · menor de edad",
    "n8n.tutorial.messageTrue": "tiene la edad suficiente para consumir alcohol.",
    "n8n.tutorial.messageFalse": "aún no tiene la edad permitida para consumir alcohol.",
    "n8n.fields.firstName": "nombre",
    "n8n.fields.lastName": "apellido",
    "n8n.fields.email": "correo",
    "n8n.fields.age": "edad",
    "n8n.fields.message": "mensaje",
    "n8n.sample.firstName": "Laura",
    "n8n.sample.lastName": "Martínez",

    "n8n.trace.title": "Lee la ejecución como una traza",
    "n8n.trace.p1":
      "Ejecuta el flujo con Execute workflow. Lo valioso no es que termine en verde, sino que puedes reconstruir el recorrido exacto del dato sin agregar un solo log.",
    "n8n.trace.canvasTitle": "El lienzo muestra el camino",
    "n8n.trace.canvas": "Cada conexión indica cuántos items pasaron. Con 21 años, solo la salida true del Switch muestra 1 item; la rama false queda sin ejecutar.",
    "n8n.trace.ioTitle": "Entrada y salida por nodo",
    "n8n.trace.io": "Abre cualquier nodo para comparar Input y Output. Así confirmas que la edad llegó como número y qué regla coincidió.",
    "n8n.trace.executionsTitle": "Historial en Executions",
    "n8n.trace.executions": "La pestaña Executions conserva cada corrida con estado, fecha y duración, y permite abrirla para inspeccionar sus datos después.",
    "n8n.trace.experimentTitle": "Cambia el dato y repite",
    "n8n.trace.experiment": "Edita la edad a 16 en el nodo JSON y ejecuta de nuevo. Ahora el item sale por false y tienes dos ejecuciones para comparar.",
    "n8n.trace.calloutTitle": "Verifica que las ejecuciones manuales se guarden",
    "n8n.trace.callout":
      "En Settings del flujo, la opción Save manual executions controla si las corridas lanzadas desde el editor aparecen en el historial. Si no ves tu ejecución, revisa ese ajuste.",
    "n8n.conclusion.title": "La trazabilidad es parte del diseño",
    "n8n.conclusion.p1":
      "Nombra los nodos y las salidas por su intención, valida tipos antes de decidir y mantén cada rama visible. Un flujo que explica por qué tomó un camino es un flujo que se puede operar cuando el dato real no se parezca al del ejemplo.",

    "n8n.sources.eyebrow": "Fuentes de verdad",
    "n8n.sources.title": "Profundiza en la documentación oficial",
    "n8n.sources.description":
      "Estas referencias llevan directamente a la documentación de n8n. Los nombres de nodos y opciones cambian entre versiones; valida allí antes de llevar un flujo a un entorno real.",
    "n8n.sources.docs": "n8n · Documentación",
    "n8n.sources.manualTrigger": "Nodo · Manual Trigger",
    "n8n.sources.editFields": "Nodo · Edit Fields (Set)",
    "n8n.sources.switch": "Nodo · Switch",
    "n8n.sources.expressions": "n8n · Expresiones",
    "n8n.sources.executions": "n8n · Ejecuciones",
    "n8n.sources.docker": "n8n · Instalación con Docker",
    "n8n.sources.newTab": "abre en una pestaña nueva",

    "hero.blog.call.action": "Explorar el blog",

    "hero.title.one": "Construyendo",
    "hero.title.highlight": "Resiliencia Digital",
    "hero.title.three": "y Maestría Técnica.",
    "hero.description":
      "Desarrollador Full Stack e IA que construye productos web y agentes LLM escalables, aplicando arquitectura limpia y microservicios para optimizar procesos e impulsar resultados de negocio.",
    "hero.cta.projects": "Explora mis proyectos",
    "hero.cta.contact": "Contáctame",

    "trust.heading": "Empresas con las que he trabajado",

    "messages.items.0.message":
      "Tuve la oportunidad de trabajar con Fernando en diferentes proyectos exitosos donde fue quien lideró e hizo parte crucial en todo el ciclo de vida, aportando en especial medida como Backend. Es un profesional apasionado y dedicado, con humildad por aprender y vocación por enseñar.",
    "messages.items.0.position": "Software Developer",
    "messages.items.1.message": "Un profesional integral.",
    "messages.items.1.position": "Front Developer",
    "messages.items.2.message":
      "Fernando destaca por su atención al detalle y su comunicación asertiva. Totalmente recomendado.",
    "messages.items.2.position": "Product Manager",
    "messages.items.3.message":
      "Conozco a Fernando desde hace más de 3 años. Estudiamos juntos desarrollo de software y hemos tenido la oportunidad de trabajar a la par, por lo que puedo afirmar que es una persona íntegra, con excelentes capacidades de trabajo y una gran disposición para superar cualquier obstáculo. Ha demostrado un alto rendimiento en cada proyecto en el que participa, impulsado por sus constantes ganas de aprender y de compartir sus experiencias con los demás.",
    "messages.items.3.position": "Software Developer, Arro y DevOps Blackbird",
    "messages.items.4.message":
      "Pocos profesionales logran esa combinación de técnica sólida y una calidad humana genuina. Fernando ha evolucionado para convertirse en un desarrollador de primer nivel, destacando no solo en IA y Full Stack, sino en la integridad con la que asume cada reto. Es un profesional responsable, que aporta soluciones elegantes y que siempre contribuye a un ambiente de trabajo sano y colaborativo. Un talento excepcional con una visión técnica impecable.",
    "messages.items.4.position": "QA Lead",
    "messages.items.5.message":
      "He tenido el gusto de trabajar con Fernando y puedo decir que es un desarrollador excepcional. Su capacidad de aprender tecnologías nuevas con rapidez, combinada con su solidez técnica y adaptabilidad, lo hacen un profesional muy valioso para cualquier equipo.",
    "messages.items.5.position": "Software Engineer - Team Leader",

    "messages.items.action": "cerrar",

    "experience.heading": "Trayectoria Profesional",
    "experience.currentTag": "ACTUALMENTE",
    "experience.items.0.role": "Desarrollador Fullstack",
    "experience.items.0.period": "2024 - Actualidad",
    "experience.items.0.description":
      "Participación y liderazgo en proyectos Full Stack dentro de Blackbird Labs, contribuyendo en soluciones de IA, rebranding de productos, diseño de APIs y desarrollo frontend para mejorar experiencia, escalabilidad y resultados de negocio.",
    "experience.items.0.subItems.0.label": "STAFFING ÉXITO - Actualidad",
    "experience.items.0.subItems.0.content":
      "Software Solutions - Soporte de Infraestructura",
    "experience.items.0.subItems.1.label": "STAFFING ARRO - NG",
    "experience.items.0.subItems.1.content":
      "Software Solutions - Rebranding y Soporte Post Desarrollo",
    "experience.items.1.role": "Desarrollador Backend",
    "experience.items.1.period": "2023 - 2024",
    "experience.items.1.description":
      "Responsable y encargado de la construcción de RiwiTalent tanto en el Backend como en el Frontend, realizando separación de servicios con arquitectura Hexagonal y posteriormente Clean Architecture, gestionando de manera adecuada las peticiones desde el Frontend.",

    "skill.badge.title": "Axus00-Skills",
    "skill.badge.description":
      "Paquete de skills para mejorar la proudctividad en el desarrollo, y tener un mayor control dentro del flujo de trabajo",
    "skill.badge.button": "Descargar repositorio",

    "projects.heading": "Proyectos",
    "projects.description":
      "Implementaciones de alto nivel para resolver problemas complejos.",
    "projects.repository": "Repositorio",
    "projects.demo": "Demo en vivo",
    "projects.visibility.public": "Público",
    "projects.visibility.private": "Privado",
    "projects.early.project": "Inicial",
    "projects.recent.project": "Reciente",
    "projects.comingSoon": "Proximamente",
    "projects.items.0.description":
      "Creado utilizando herramientas como JavaScript, Html, CSS y Sass. Es una página e-commerce dedicada a mejorar los ingresos de los campesinos, pero también ofreciendo productos frescos y de primera mano para los usuarios.",
    "projects.items.1.description":
      "Aplicación enfocada en la gestión operativa y organizacional, orientada a optimizar procesos internos y facilitar la administración de la información.",
    "projects.items.2.description":
      "Aplicación para buscar cualquier Gift que desees.",
    "projects.items.3.description":
      "Asistente inteligente construido con LangGraph y LangChain para automatizar tareas DevOps y Scrum.",
    "projects.items.4.description":
      "Web especializada en acortar links y brindar estadísticas de uso, con un enfoque en la privacidad y seguridad de los usuarios.",

    "presence.openSource.title": "Trabajo Open Source",
    "presence.openSource.description":
      "Explorando nuevas fronteras de ingeniería a través del conocimiento compartido y el código.",
    "presence.openSource.cta": "Explorar mi código",
    "presence.network.title": "Red Profesional",
    "presence.network.description":
      "Construyendo alianzas estratégicas y liderazgo técnico a nivel global.",
    "presence.network.cta": "Conectemos",

    "contact.heading": "¿Listo para diseñar el futuro?",
    "contact.description":
      "Actualmente disponible para roles senior y consultoría en proyectos de alto impacto.",
    "contact.cta": "Iniciar contacto",

    "footer.description": "Fernando Gómez, Software Engineer.",
  },
  en: {
    "site.name": "Fer.Dev",
    "nav.toggleLanguage": "Switch language",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.connect": "Connect",
    "nav.contact": "Contact",
    "nav.blog": "Blog",

    "blog.eyebrow": "Ideas in progress",
    "blog.title": "Blog",
    "blog.description":
      "Notes on software engineering, applied AI, and resilient web product architecture, shaped by building Full Stack solutions and LLM agents for real-world challenges.",
    "blog.explorer": "Explorer",
    "blog.categories": "Categories",
    "blog.recentPosts": "Recent posts",
    "blog.onThisPage": "On this page",
    "blog.introduction": "Introduction",
    "blog.articles": "Recent articles",
    "blog.readMore": "Read more",
    "blog.categories.nifi": "Nifi",
    "blog.categories.n8n": "n8n",
    "blog.posts.7.title": "n8n: your first workflow with end-to-end traceability",
    "blog.posts.7.description":
      "What n8n is, where to apply it, and a short tutorial: Manual Trigger, JSON data, Edit Fields, and a Switch on age to follow every execution node by node.",
    "blog.posts.6.title": "Apache NiFi: from zero to a resilient Kafka flow",
    "blog.posts.6.description":
      "A practical guide to modeling FlowFiles, operating processors, integrating Kafka, and taking an observable dataflow to production.",

    "nifi.backToBlog": "Back to the blog",
    "nifi.readTime": "min read",
    "nifi.title": "Apache NiFi, from zero to a",
    "nifi.titleHighlight": "resilient Kafka flow",
    "nifi.lead":
      "A field guide to understanding NiFi's mental model, starting a secure instance, building a traceable dataflow, and connecting it to Kafka without losing operational control.",
    "nifi.published": "Published Aug 20, 2026",
    "nifi.updated": "Practical guide · NiFi 2 / Kafka 4",
    "nifi.flowDiagram": "Data flow from HTTP, through NiFi, to Kafka",
    "nifi.onThisPage": "In this guide",
    "nifi.nav.model": "Mental model",
    "nifi.nav.start": "First start",
    "nifi.nav.flow": "Design the flow",
    "nifi.nav.production": "Production",
    "nifi.copy": "Copy",
    "nifi.copied": "Copied",
    "nifi.stack": "Guide stack",
    "nifi.terminal.service": "service · nifi",
    "nifi.terminal.security": "security · credentials",
    "nifi.terminal.topic": "kafka · topic",

    "nifi.model.title": "Start with the right mental model",
    "nifi.model.p1":
      "NiFi is not a collection of connected scripts: it is a flow engine. Each piece of data travels as a FlowFile, with content and attributes, while processors receive, transform, route, or deliver it.",
    "nifi.model.p2":
      "Connections behave as explicit queues. This separation makes pressure, errors, and performance visible on the canvas, while decoupling producer speed from consumer speed.",
    "nifi.model.flowfile": "Content plus metadata that follow one unit of data throughout its journey.",
    "nifi.model.processor": "A unit of work that ingests, transforms, routes, or publishes one or more FlowFiles.",
    "nifi.model.connection": "A queue between processors with configurable priorities, limits, and back pressure.",
    "nifi.model.calloutTitle": "Design to observe, not just to move",
    "nifi.model.callout":
      "A healthy flow exposes its queues, error relationships, and retry points. If you only model the happy path, operations will eventually happen outside NiFi.",

    "nifi.start.title": "Start NiFi and secure access",
    "nifi.start.p1":
      "After extracting the distribution, use the operating system script to start NiFi. Waiting for initialization keeps an incomplete startup from looking like a failure.",
    "nifi.start.p2":
      "The installation generates initial credentials in the log. In a controlled local environment, you can replace them explicitly before opening https://localhost:8443/nifi.",
    "nifi.start.securityTitle": "Local does not mean unsecured",
    "nifi.start.security":
      "Keep HTTPS, use a strong password, and never reuse the example credentials. In production, configure trusted certificates, authentication, and authorization before exposing the interface.",

    "nifi.flow.title": "Build a flow that explains its intent",
    "nifi.flow.p1":
      "For HTTP input that ends in Kafka, keep each responsibility visible. This minimal journey separates reception, validation, normalization, and delivery.",
    "nifi.flow.step1Title": "Ingest",
    "nifi.flow.step1": "Use ListenHTTP or InvokeHTTP depending on whether NiFi receives a request or queries an external source.",
    "nifi.flow.step2Title": "Validate",
    "nifi.flow.step2": "Check schema, size, and required fields; route invalid data to a dedicated relationship.",
    "nifi.flow.step3Title": "Normalize",
    "nifi.flow.step3": "Use Record Readers and Writers to transform JSON, CSV, or Avro without accidental logic.",
    "nifi.flow.step4Title": "Deliver",
    "nifi.flow.step4": "Publish with PublishKafka and preserve an observable, bounded, recoverable failure path.",
    "nifi.flow.expression":
      "Expression Language works on FlowFile attributes. Use it for small, readable decisions; for structured data, prefer RecordPath and record-oriented processors.",

    "nifi.kafka.title": "Kafka as the event backbone, NiFi as the orchestrator",
    "nifi.kafka.p1":
      "Kafka stores events in topics and decouples producers from consumers. NiFi provides the visual edge: ingestion, transformation, routing, pressure control, and traceability before or after the broker.",
    "nifi.kafka.p2":
      "For a local test, start the official broker and create a topic. Then configure Kafka3ConnectionService and reference it from PublishKafka or ConsumeKafka.",
    "nifi.kafka.property": "Property",
    "nifi.kafka.value": "Example value",
    "nifi.kafka.deliveryTitle": "Define delivery semantics",
    "nifi.kafka.delivery":
      "Align acknowledgements, offset commits, retries, and failure routes with the acceptable level of duplication or loss. Exactly-once does not emerge from connecting two boxes: it requires an end-to-end strategy.",

    "nifi.production.title": "Before you call it production",
    "nifi.production.p1":
      "Dataflow reliability depends less on processor count and more on what happens when a dependency slows down, a record fails validation, or a node restarts.",
    "nifi.production.backpressureTitle": "Deliberate back pressure",
    "nifi.production.backpressure": "Set object and size thresholds so a queue protects the system without hiding saturation.",
    "nifi.production.provenanceTitle": "Useful provenance",
    "nifi.production.provenance": "Retain traceability long enough to diagnose, audit, and reconstruct a FlowFile's journey.",
    "nifi.production.parametersTitle": "Context-based configuration",
    "nifi.production.parameters": "Move endpoints and operational values into Parameter Contexts; mark secrets as sensitive.",
    "nifi.production.failureTitle": "Failures with a destination",
    "nifi.production.failure": "Route, bound, and alert on errors. Do not auto-terminate relationships that can represent data loss.",
    "nifi.conclusion.title": "The best canvas is one you can operate",
    "nifi.conclusion.p1":
      "Start with few processors, names that explain intent, and visible error relationships. Add Kafka when you need decoupling and event retention—not to hide a flow you do not yet understand.",

    "nifi.sources.eyebrow": "Sources of truth",
    "nifi.sources.title": "Go deeper with the official documentation",
    "nifi.sources.description":
      "These references go directly to Apache NiFi and Apache Kafka. Versions evolve; validate properties, requirements, and behavior there before operating a real environment.",
    "nifi.sources.gettingStarted": "NiFi · Getting started",
    "nifi.sources.userGuide": "NiFi · User guide",
    "nifi.sources.expressionLanguage": "Expression Language",
    "nifi.sources.recordPath": "RecordPath",
    "nifi.sources.publishKafka": "PublishKafka",
    "nifi.sources.consumeKafka": "ConsumeKafka",
    "nifi.sources.kafkaQuickstart": "Kafka · Quickstart",
    "nifi.sources.newTab": "opens in a new tab",

    "n8n.backToBlog": "Back to the blog",
    "n8n.readTime": "min read",
    "n8n.title": "n8n: your first workflow with",
    "n8n.titleHighlight": "end-to-end traceability",
    "n8n.lead":
      "A practical introduction to n8n: what it is, where it adds value, and a short exercise to build a workflow with a conditional decision and read, node by node, what happened in each execution.",
    "n8n.published": "Published Oct 4, 2026",
    "n8n.updated": "Hands-on tutorial · self-hosted n8n",
    "n8n.flowDiagram": "n8n workflow: manual trigger, JSON data, Edit Fields, and a Switch with two outputs based on age",
    "n8n.onThisPage": "In this guide",
    "n8n.nav.what": "What n8n is",
    "n8n.nav.useCases": "Use cases",
    "n8n.nav.start": "First run",
    "n8n.nav.tutorial": "Tutorial",
    "n8n.nav.traceability": "Traceability",
    "n8n.copy": "Copy",
    "n8n.copied": "Copied",
    "n8n.stack": "Guide stack",
    "n8n.terminal.npx": "node · npx",
    "n8n.terminal.docker": "docker · n8n",
    "n8n.terminal.json": "edit fields · json mode",

    "n8n.what.title": "Visual automation, with code when you need it",
    "n8n.what.p1":
      "n8n is a workflow automation platform. You connect nodes on a canvas to move and transform data across APIs, databases, and services, and you can host it on your own infrastructure or use its cloud version.",
    "n8n.what.p2":
      "What sets it apart from other low-code tools is that it does not box you in: when a node is not enough, you write an expression or a JavaScript or Python block and stay in the same workflow. Every execution is recorded with the input and output of each node.",
    "n8n.what.nodeTitle": "Node",
    "n8n.what.executionTitle": "Execution",
    "n8n.what.trigger": "The node that starts the workflow: a manual click, a webhook, a cron schedule, or an event from another app.",
    "n8n.what.node": "A unit of work that receives items, applies an operation, and hands items to the next node.",
    "n8n.what.execution": "The record of a full run: which data entered and left each node, and through which branch.",
    "n8n.what.calloutTitle": "Data travels as items",
    "n8n.what.callout":
      "A list of items moves between nodes, and each item exposes its content in the json property. That is why expressions are written as $json.field: they read the item the node is processing.",

    "n8n.useCases.title": "Where it is worth applying",
    "n8n.useCases.p1":
      "n8n fits when the problem is orchestration: several tools that must talk to each other, with clear rules and the need to know what happened in every run.",
    "n8n.useCases.integrationTitle": "System integration",
    "n8n.useCases.integration": "Sync CRMs, spreadsheets, databases, and internal APIs without writing a service for every connection.",
    "n8n.useCases.opsTitle": "Operational automation",
    "n8n.useCases.ops": "Notifications, approvals, scheduled reports, and repetitive tasks that depend on a person today.",
    "n8n.useCases.aiTitle": "AI agents and workflows",
    "n8n.useCases.ai": "Chain LLMs, tools, and memory to classify, summarize, or answer with business context.",
    "n8n.useCases.dataTitle": "Lightweight data pipelines",
    "n8n.useCases.data": "Extract, validate, and route records with conditional rules before delivering them to their destination.",

    "n8n.start.title": "Run n8n locally",
    "n8n.start.p1":
      "If you already have Node.js installed, the fastest way to try it is npx. The editor becomes available at http://localhost:5678.",
    "n8n.start.p2":
      "If you would rather isolate the environment, use the official Docker image with a volume to keep your workflows and credentials across restarts.",
    "n8n.start.noteTitle": "Your workflows live in the volume",
    "n8n.start.note":
      "n8n stores workflows, encrypted credentials, and execution history in its data directory. Skip the volume and everything is lost when the container is removed.",

    "n8n.tutorial.title": "A small workflow with one decision",
    "n8n.tutorial.p1":
      "The exercise validates a user's age and takes a different path depending on the result. It has few nodes on purpose: what matters is being able to follow the data from start to finish.",
    "n8n.tutorial.step1Title": "Manual Trigger",
    "n8n.tutorial.step1": "Create a new workflow and add the manual trigger. It lets you run the workflow from the editor with one click, with no dependency on external events.",
    "n8n.tutorial.step2Title": "JSON data",
    "n8n.tutorial.step2": "Add an Edit Fields (Set) node, switch Mode to JSON, and paste the user structure. This node simulates the data that would arrive from a form or an API.",
    "n8n.tutorial.step3Title": "Edit Fields to capture the values",
    "n8n.tutorial.step3": "Add a second Edit Fields node in Manual Mapping mode and map each field with an expression. This is where you pin the data contract the rest of the workflow relies on.",
    "n8n.tutorial.step4Title": "Switch on age",
    "n8n.tutorial.step4": "Add a Switch node in Rules mode with two rules on the age and rename each output so the canvas explains the decision.",
    "n8n.tutorial.step5Title": "One message per branch",
    "n8n.tutorial.step5": "Connect an Edit Fields node to each Switch output and define a text field with the matching message in both.",
    "n8n.tutorial.fieldsLabel": "Edit Fields · Manual Mapping",
    "n8n.tutorial.fieldsNote":
      "Drag each field from the input panel or type the expression. Set the Number type for the age: the Switch will compare numbers, not text.",
    "n8n.tutorial.property": "Property",
    "n8n.tutorial.value": "Value",
    "n8n.tutorial.rule1": "Rule 1",
    "n8n.tutorial.rule2": "Rule 2",
    "n8n.tutorial.rule1Value": "Number · is greater than or equal to · 18 → output \"true\"",
    "n8n.tutorial.rule2Value": "Number · is less than · 18 → output \"false\"",
    "n8n.tutorial.switchNote":
      "This example uses 18 as the legal age, so the rule is greater than or equal. Adjust the threshold to the law in your country.",
    "n8n.tutorial.branchTrue": "Output true · of legal age",
    "n8n.tutorial.branchFalse": "Output false · underage",
    "n8n.tutorial.messageTrue": "is old enough to drink alcohol.",
    "n8n.tutorial.messageFalse": "is not yet of legal age to drink alcohol.",
    "n8n.fields.firstName": "firstName",
    "n8n.fields.lastName": "lastName",
    "n8n.fields.email": "email",
    "n8n.fields.age": "age",
    "n8n.fields.message": "message",
    "n8n.sample.firstName": "Laura",
    "n8n.sample.lastName": "Martinez",

    "n8n.trace.title": "Read the execution like a trace",
    "n8n.trace.p1":
      "Run the workflow with Execute workflow. The value is not that it ends in green, but that you can rebuild the exact path of the data without adding a single log.",
    "n8n.trace.canvasTitle": "The canvas shows the path",
    "n8n.trace.canvas": "Each connection shows how many items went through. At age 21, only the Switch's true output shows 1 item; the false branch never runs.",
    "n8n.trace.ioTitle": "Input and output per node",
    "n8n.trace.io": "Open any node to compare Input and Output. That is how you confirm the age arrived as a number and which rule matched.",
    "n8n.trace.executionsTitle": "History in Executions",
    "n8n.trace.executions": "The Executions tab keeps every run with its status, date, and duration, and lets you open it to inspect its data later.",
    "n8n.trace.experimentTitle": "Change the data and repeat",
    "n8n.trace.experiment": "Edit the age to 16 in the JSON node and run again. Now the item leaves through false and you have two executions to compare.",
    "n8n.trace.calloutTitle": "Check that manual executions are saved",
    "n8n.trace.callout":
      "In the workflow Settings, the Save manual executions option controls whether runs launched from the editor show up in the history. If you cannot see your execution, check that setting.",
    "n8n.conclusion.title": "Traceability is part of the design",
    "n8n.conclusion.p1":
      "Name nodes and outputs after their intent, validate types before deciding, and keep every branch visible. A workflow that explains why it took a path is a workflow you can operate when real data looks nothing like the example.",

    "n8n.sources.eyebrow": "Sources of truth",
    "n8n.sources.title": "Go deeper with the official documentation",
    "n8n.sources.description":
      "These references go directly to the n8n documentation. Node and option names change between versions; validate there before taking a workflow to a real environment.",
    "n8n.sources.docs": "n8n · Documentation",
    "n8n.sources.manualTrigger": "Node · Manual Trigger",
    "n8n.sources.editFields": "Node · Edit Fields (Set)",
    "n8n.sources.switch": "Node · Switch",
    "n8n.sources.expressions": "n8n · Expressions",
    "n8n.sources.executions": "n8n · Executions",
    "n8n.sources.docker": "n8n · Docker installation",
    "n8n.sources.newTab": "opens in a new tab",

    "hero.blog.call.action": "Explore the blog",

    "hero.title.one": "Building",
    "hero.title.highlight": "Digital Resilience",
    "hero.title.three": "and Technical Mastery.",
    "hero.description":
      "Full Stack and AI developer building scalable web products and LLM agents, applying clean architecture and microservices to optimize processes and drive business outcomes.",
    "hero.cta.projects": "Explore my projects",
    "hero.cta.contact": "Contact me",

    "trust.heading": "Companies I have worked with",

    "messages.items.0.message":
      "I had the opportunity to work with Fernando on different successful projects where he led and played a crucial role throughout the entire lifecycle, especially contributing as a Backend developer. He is a passionate and dedicated professional, humble about learning and driven to teach.",
    "messages.items.0.position": "Software Developer",
    "messages.items.1.message": "A well-rounded professional.",
    "messages.items.1.position": "Frontend Developer",
    "messages.items.2.message":
      "Fernando stands out for his attention to detail and assertive communication. Highly recommended.",
    "messages.items.2.position": "Product Manager",
    "messages.items.3.message":
      "I have known Fernando for more than 3 years. We studied software development together and have had the opportunity to work side by side, so I can affirm that he is an upright person with excellent work skills and a great willingness to overcome any obstacle. He has consistently delivered high performance in every project he joins, driven by his constant desire to learn and to share his experiences with others.",
    "messages.items.3.position":
      "Software Developer, Arro and DevOps Blackbird",
    "messages.items.4.message":
      "Few professionals achieve that combination of solid technical skill and genuine human quality. Fernando has evolved into a top-level developer, standing out not only in AI and Full Stack, but also in the integrity with which he takes on each challenge. He is a responsible professional who provides elegant solutions and always contributes to a healthy, collaborative work environment. An exceptional talent with impeccable technical vision.",
    "messages.items.4.position": "QA Lead",
    "messages.items.5.message":
      "I have had the pleasure of working with Fernando, and I can say that he is an exceptional developer. His ability to quickly learn new technologies, combined with his technical expertise and adaptability, make him a highly valuable asset to any team.",
    "messages.items.5.position": "Software Engineer - Team Leader",

    "messages.items.action": "close",

    "experience.heading": "Professional Journey",
    "experience.currentTag": "CURRENT",
    "experience.items.0.role": "Fullstack Developer",
    "experience.items.0.period": "2024 - Present",
    "experience.items.0.description":
      "Participation and leadership in Full Stack projects at Blackbird Labs, contributing to AI solutions, product rebranding, API design, and frontend development to improve experience, scalability, and business outcomes.",
    "experience.items.0.subItems.0.label": "STAFFING ÉXITO - Present",
    "experience.items.0.subItems.0.content":
      "Software Solutions - Infrastructure Support",
    "experience.items.0.subItems.1.label": "STAFFING ARRO - NG",
    "experience.items.0.subItems.1.content":
      "Software Solutions - Rebranding and Post-Development Support",
    "experience.items.1.role": "Backend Developer",
    "experience.items.1.period": "2023 - 2024",
    "experience.items.1.description":
      "Responsible for building RiwiTalent on both backend and frontend, implementing service separation with Hexagonal Architecture and later Clean Architecture, while handling frontend requests appropriately.",

    "skill.badge.title": "Axus00-Skills",
    "skill.badge.description":
      "A set of skills to improve development productivity and gain greater control over the workflow",
    "skill.badge.button": "Download repository",

    "projects.heading": "Projects",
    "projects.description":
      "High-level implementations to solve complex problems.",
    "projects.repository": "Repository",
    "projects.demo": "Live Demo",
    "projects.visibility.public": "Public",
    "projects.visibility.private": "Private",
    "projects.early.project": "Early",
    "projects.recent.project": "Latest",
    "projects.comingSoon": "Coming Soon",
    "projects.items.0.description":
      "Built with tools such as JavaScript, HTML, CSS, and Sass. It is an e-commerce site focused on increasing farmers' income while offering fresh products directly to users.",
    "projects.items.1.description":
      "Application focused on operational and organizational management, aimed at optimizing internal processes and making information administration easier.",
    "projects.items.2.description":
      "Application to search for any GIF you want.",
    "projects.items.3.description":
      "Intelligent assistant built with LangGraph and LangChain to automate DevOps and Scrum tasks.",
    "projects.items.4.description":
      "A website specializing in shortening links and providing usage statistics, with a focus on user privacy and security.",

    "presence.openSource.title": "Open Source Work",
    "presence.openSource.description":
      "Exploring new engineering frontiers through shared knowledge and code.",
    "presence.openSource.cta": "Explore my code",
    "presence.network.title": "Professional Network",
    "presence.network.description":
      "Building strategic partnerships and technical leadership globally.",
    "presence.network.cta": "Let's connect",

    "contact.heading": "Ready to design the future?",
    "contact.description":
      "Currently available for senior roles and consulting on high-impact projects.",
    "contact.cta": "Start a conversation",

    "footer.description": "Fernando Gómez, Software Engineer.",
  },
} as const;

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
