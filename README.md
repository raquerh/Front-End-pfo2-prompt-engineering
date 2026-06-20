# Práctica Formativa Obligatoria 2 - Prompt Engineering en Agentes de IA

**Materia:** Desarrollo de Aplicaciones Web - Front End  
**Fecha de lanzamiento:** 8/06/2026  
**Fecha de entrega:** 26/06/2026

---

## 📄 Enunciado del Trabajo

### Objetivo

El estudiante deberá diseñar y estructurar un único prompt inicial de alta precisión basado en lineamientos oficiales para generar una Landing Page. Este prompt se ejecutará en dos agentes de desarrollo de software para comparar su capacidad de resolución autónoma.

### Consigna

#### 1. Estructura del Prompt
El prompt debe armarse siguiendo las recomendaciones y buenas prácticas oficiales de diseño de instrucciones de los principales proveedores de IA:
- Anthropic - Prompt Engineering Guide
- OpenAI - Prompt Engineering Guide

#### 2. Requisitos Mínimos de la Landing Page
- Cabecera (Header con menú de navegación)
- Hero Section (Sección principal con título impactante y botón de llamada a la acción - CTA)
- Descripción / Sobre Nosotros
- Sección de Servicios o Características principales
- Testimonios o Reseñas de clientes
- Formulario de contacto (Maquetado visual, no requiere funcionalidad backend)
- Pie de página (Footer) con enlaces a redes sociales

#### 3. Desarrollo y Restricciones
- Generar la Landing Page utilizando el mismo prompt en los dos agentes elegidos
- **Restricción estricta:** No tocar nada de código manualmente. Dejar actuar al agente lo más posible para evaluar la efectividad de la instrucción inicial

#### 4. Interfaz de Acceso (Portada)
El proyecto debe iniciar en una página de portada que contenga tres accesos directos:
- Link 1: El texto plano del prompt utilizado
- Link 2: Landing Page generada por el Primer Agente (especificando nombre del agente y modelo de lenguaje usado)
- Link 3: Landing Page generada por el Segundo Agente (especificando nombre del agente y modelo de lenguaje usado)

#### 5. Repositorio y Documentación
Subir todo el código del proyecto a un único repositorio de GitHub. El archivo README.md del repositorio debe detallar obligatoriamente:
- Datos del estudiante
- Link al deploy unificado (un solo enlace de Vercel que dirija a la portada con las tres opciones)
- El prompt exacto utilizado
- Capturas de pantalla de ambos sitios web generados

---

## 📋 Datos del Estudiante

**Nombre completo:** Raquel Rodriguez Herlein 
**Comisión:** Lunes  
**Materia:** Desarrollo de Aplicaciones Web - Front End  
**Fecha de entrega:** 26/06/2026

---

## 🌐 Deploy en Vercel

**URL del proyecto:** [COMPLETAR DESPUÉS DE DESPLEGAR EN VERCEL]

Ejemplo: `https://pfo2-prompt-engineering.vercel.app`

---

## 🤖 Agentes de IA Utilizados

### Agente 1
- **Nombre:** Cursor
- **Modelo:** Claude Sonnet 3.5
- **Plataforma:** Cursor IDE

### Agente 2
- **Nombre:** OpenCode
- **Modelo:** GPT-4
- **Plataforma:** OpenCode AI

---

## 📝 Prompt Utilizado

El siguiente prompt fue diseñado siguiendo las mejores prácticas de Anthropic y OpenAI y ejecutado de forma idéntica en ambos agentes sin modificaciones:

```
PROMPT PARA GENERACIÓN DE LANDING PAGE
========================================

ROL
Actúa como un estudio creativo especializado en branding, diseño UX/UI, desarrollo frontend y marketing digital.
No expliques el proceso de razonamiento.
Toma todas las decisiones de forma autónoma y entrega únicamente el resultado final.

OBJETIVO
Crear una Landing Page para una empresa especializada en reparación, restauración y customización de motocicletas.
El resultado debe transmitir personalidad, calidad, confianza y pasión por el mundo de las motos.
No debe parecer una plantilla ni un diseño generado automáticamente por inteligencia artificial.

LIBERTAD CREATIVA
Eres responsable de todas las decisiones de diseño.
Selecciona la alternativa que consideres más sólida desde el punto de vista del diseño, la experiencia de usuario y la identidad de marca.
Prioriza la creatividad, la coherencia y la calidad antes que seguir patrones comunes.

DIRECCIÓN CREATIVA
El sitio debe sentirse como una marca real. Puedes inspirarte en cualquier corriente estética que consideres adecuada:
• Industrial
• Minimalista
• Brutalista
• Editorial
• Vintage
• Neo-retro
• Premium
• Automotriz
• Dark Mode
• Monocromático
• Alta tecnología
• Taller artesanal
• Café Racer
• Bobber
• Motorsport

No estás obligado a utilizar ninguna en particular.
Selecciona la que mejor represente la identidad que hayas creado.

RESTRICCIÓN
Evita reproducir los patrones visuales más comunes de los asistentes de IA.
No busques parecer una landing genérica.
Busca construir una identidad propia y memorable.

CONTENIDO OBLIGATORIO
La Landing Page debe incluir como mínimo:
• Header con navegación
• Hero Section con llamada a la acción
• Sobre Nosotros
• Servicios
• Galería o trabajos realizados
• Testimonios
• Formulario de contacto (solo frontend)
• Footer con redes sociales

Puedes agregar cualquier otra sección que consideres útil para mejorar la experiencia.

EXPERIENCIA DE USUARIO
Tienes libertad para definir la estructura.
No es necesario seguir una estructura tradicional si existe una alternativa mejor.

COPY
Todo el contenido debe ser original.
No utilizar Lorem Ipsum.
Texto propio de una empresa real.

TECNOLOGÍA
Utilizar HTML5, CSS3 y JavaScript moderno.
Generar código limpio, organizado y responsive.
El proyecto debe estar listo para desplegarse sin modificaciones manuales.

VALIDACIÓN FINAL
Antes de finalizar verifica que el resultado:
• Posea una identidad visual propia
• Sea responsive
• Tenga excelente jerarquía visual
• Genere impacto desde el primer vistazo
• Sea accesible
• Tenga SEO básico implementado
• Mantenga consistencia estética
• No parezca una plantilla genérica
• No reproduzca patrones visuales típicos de asistentes de IA

Si detectas una alternativa mejor durante el desarrollo, modifícala automáticamente antes de entregar el resultado.
```

---

## 📸 Capturas de Pantalla

### Landing Page - Agente 1 (Cursor)

#### Vista Desktop (1920px)
![Desktop Cursor](screenshots/cursor-desktop.png)

#### Vista Mobile (375px)
![Mobile Cursor](screenshots/cursor-mobile.png)

---

### Landing Page - Agente 2 (OpenCode)

#### Vista Desktop (1920px)
![Desktop OpenCode](screenshots/opencode-desktop.png)

#### Vista Mobile (375px)
![Mobile OpenCode](screenshots/opencode-mobile.png)

---

## 🔍 Comparación y Análisis

### Cumplimiento de Requisitos

Ambos agentes cumplieron el 100% de los requisitos mínimos especificados:

| Requisito | Cursor | OpenCode |
|-----------|--------|----------|
| Header con navegación | ✅ 5 links | ✅ 5 links |
| Hero Section + CTA | ✅ 2 CTAs | ✅ 2 CTAs |
| Sobre Nosotros | ✅ Completo | ✅ Completo |
| Servicios (mín. 3) | ✅ 4 servicios | ✅ 4 servicios |
| Testimonios (mín. 2) | ✅ 3 testimonios | ✅ 3 testimonios |
| Formulario contacto | ✅ Validación JS | ✅ Validación JS |
| Footer + redes sociales | ✅ 3 redes | ✅ 4 redes |
| Responsive Design | ✅ Mobile-first | ✅ Mobile-first |

### Diferencias Observadas

#### Estructura y Layout

**Cursor (Cizalla Motor Co.):**
- Estructura más ordenada y predecible
- Grid system bien definido
- Espaciado generoso y consistente
- Navegación sticky funcional
- Sección "Proceso" agregada como extra

**OpenCode (FORGED):**
- Layout más experimental
- Uso creativo de SVG placeholders
- Marquee animado en hero section
- Galería horizontal con scroll
- Banner CTA adicional entre secciones

#### Diseño Visual

**Cursor:**
- Paleta: Negro profundo (#0a0a0a) con acentos tierra (#c45c26)
- Tipografía: Bebas Neue (display), Libre Baskerville (body), IBM Plex Mono (detalles)
- Estética: Minimalista industrial, editorial
- Imágenes: Fotografías reales de Unsplash
- Hover effects: Sutiles y elegantes

**OpenCode:**
- Paleta: Negro mate (#0d0d0d) con acentos dorados (#e8a027)
- Tipografía: Space Grotesk (display), Inter (body)
- Estética: Artesanal con textura grain
- Imágenes: SVG placeholders creativos con texto descriptivo
- Hover effects: Más pronunciados y dinámicos

#### Responsive Design

**Cursor:**
- Breakpoints: 768px, 1024px, 1280px
- Menú hamburguesa con animación suave
- Imágenes optimizadas con loading lazy
- Skip link para accesibilidad
- Grid que colapsa limpiamente

**OpenCode:**
- Breakpoints: 768px, 1024px
- Toggle menu con estado activo
- Flexbox/Grid híbrido
- Animaciones de scroll
- Reorganización fluida de contenido

#### Calidad del Código

**Cursor:**
- HTML semántico impecable
- ARIA labels completos
- CSS custom properties bien organizadas
- JavaScript modular y limpio
- Comentarios descriptivos
- SEO: Meta tags Open Graph completos
- Estructura de carpetas: css/ y js/ separados

**OpenCode:**
- HTML semántico sólido
- ARIA labels implementados
- CSS variables bien estructuradas
- JavaScript funcional con animaciones
- Código más compacto
- SEO: Meta tags básicos implementados
- Archivos en raíz del proyecto

#### Accesibilidad

**Cursor:**
- Skip navigation link
- Roles ARIA extensivos
- Contraste AA/AAA cumplido
- Navegación por teclado completa
- Labels descriptivos en formulario

**OpenCode:**
- ARIA labels en elementos clave
- Contraste adecuado
- Formulario con labels asociados
- Navegación funcional por teclado

### Similitudes Destacables

Ambos agentes:
- Eligieron temática de taller de motocicletas
- Usaron paleta oscura con acentos cálidos
- Implementaron todas las secciones requeridas
- Generaron contenido real (no Lorem Ipsum)
- Crearon identidades de marca convincentes
- Código listo para producción sin modificaciones
- Agregaron secciones extras (Proceso, Galería ampliada)

### Análisis de Personalidad del Modelo

**Claude (Cursor):**
- Enfoque en estándares y accesibilidad
- Código production-ready
- Decisiones conservadoras pero sólidas
- Prioriza usabilidad sobre experimentación
- Documentación más completa

**GPT-4 (OpenCode):**
- Enfoque en creatividad visual
- Soluciones más innovadoras
- Decisiones audaces en diseño
- Prioriza impacto visual
- Experimentación con SVG y animaciones

### Conclusiones

#### Efectividad del Prompt

El prompt demostró ser **altamente efectivo** en ambos agentes:

1. **Claridad de instrucciones:** Ambos entendieron y ejecutaron todos los requisitos
2. **Libertad creativa:** Cada agente desarrolló identidad visual única
3. **Restricción anti-genérico:** Ninguno reprodujo patrones típicos de IA
4. **Autonomía:** Ambos completaron el proyecto sin intervención manual
5. **Consistencia:** Los dos mantuvieron coherencia estética interna

#### Diferencias Clave

La principal diferencia no fue en **capacidad** sino en **enfoque**:

- **Cursor = Ingeniería:** Accesibilidad, SEO, código documentado, estándares
- **OpenCode = Diseño:** Creatividad, experimentación visual, impacto inmediato

#### Recomendaciones de Uso

**Usar Cursor cuando:**
- El proyecto requiere accesibilidad WCAG
- SEO es prioritario
- Código debe pasar auditorías técnicas
- Cliente valora estándares y documentación

**Usar OpenCode cuando:**
- El impacto visual es prioritario
- Se busca diseño innovador
- Prototipado rápido con personalidad
- Cliente valora creatividad sobre convención

#### Conclusión Final

Ambos agentes cumplieron exitosamente con el objetivo. El prompt bien estructurado permitió obtener resultados profesionales en ambos casos, demostrando que un diseño de instrucciones sólido puede compensar diferencias entre modelos.

El experimento valida que la inversión en prompt engineering genera resultados consistentes y de calidad, independientemente del agente utilizado, aunque cada uno mantendrá su personalidad característica.

---

## 🚀 Instrucciones de Instalación y Despliegue

### Clonar el Repositorio

```bash
git clone [URL_DE_TU_REPOSITORIO]
cd [NOMBRE_DEL_REPOSITORIO]
```

### Visualización Local

Este proyecto no requiere instalación de dependencias. Simplemente abre el archivo `index.html` en tu navegador:

```bash
# Opción 1: Abrir directamente el archivo
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux

# Opción 2: Usar un servidor local (recomendado)
# Si tienes Python instalado:
python -m http.server 8000

# Si tienes Node.js instalado:
npx http-server
```

Luego accede a `http://localhost:8000` en tu navegador.

### Desplegar en Vercel

1. Crear una cuenta en [Vercel](https://vercel.com)
2. Instalar Vercel CLI (opcional):
   ```bash
   npm i -g vercel
   ```
3. Desde la raíz del proyecto:
   ```bash
   vercel
   ```
4. Seguir las instrucciones en pantalla
5. Copiar la URL generada y actualizar este README

---

## 📁 Estructura del Proyecto

```
proyecto-pfo2/
├── index.html                 # Página de portada con los 3 enlaces
├── prompt.txt                 # Texto del prompt utilizado
├── agent1-cursor/             # Landing page generada por Cursor
│   ├── index.html
│   ├── css/
│   └── js/
├── agent2-opencode/           # Landing page generada por OpenCode
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── css/                       # Estilos de la portada
│   ├── styles.css
│   └── agent-placeholder.css
├── screenshots/               # Capturas de pantalla
│   ├── cursor-desktop.png
│   ├── cursor-mobile.png
│   ├── opencode-desktop.png
│   └── opencode-mobile.png
└── README.md                  # Este archivo
```

---

## ✅ Checklist de Entrega

- [x] Prompt diseñado siguiendo mejores prácticas de Anthropic y OpenAI
- [x] Prompt ejecutado en 2 agentes diferentes sin modificaciones
- [x] Código generado preservado sin edición manual
- [x] Página de portada funcionando con 3 enlaces
- [x] Landing pages con todas las secciones requeridas (Cursor y OpenCode)
- [ ] README.md completo con toda la información
- [ ] Capturas de pantalla de ambas landing pages (desktop y mobile)
- [ ] Proyecto desplegado en Vercel
- [ ] Link del repositorio publicado en el foro de la comisión
- [ ] Entrega antes del 26/06/2026 23:59

---

## 📚 Referencias

- [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Vercel Documentation](https://vercel.com/docs)

---

**Nota:** Este es un proyecto académico para evaluar la efectividad del prompt engineering en diferentes agentes de IA.
