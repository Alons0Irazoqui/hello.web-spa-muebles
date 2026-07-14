# Spa Muebles Oaxaca — Brief para Landing Page

> Este documento es el informe de referencia para el desarrollo de la landing page de **Spa Muebles Oaxaca**. Contiene toda la información del negocio, branding y lineamientos de diseño necesarios para trabajar sobre la plantilla base. Úsalo como contexto fijo al iterar con Claude durante el desarrollo.

---

## 1. Resumen del proyecto

- Se va a construir una **landing page de una sola página (one-page)** para un negocio local de limpieza y desinfección de muebles tapizados en Oaxaca, México.
- El punto de partida es una **plantilla base en HTML** ya existente, la cual se debe adaptar (contenido, branding, estilo visual y componentes) a las necesidades de este negocio específico.
- El desarrollo se realiza **iterando con Claude**: se le puede dar instrucciones sucesivas, corregir resultados y pedir ajustes las veces que sea necesario hasta alcanzar el resultado deseado. No es necesario lograrlo en una sola pasada — itera, revisa en el navegador y refina.
- Toda la información y los recursos visuales del negocio están en la carpeta [`imagenes/`](imagenes/) de este repositorio.

---

## 2. Información del negocio

| Campo | Dato |
|---|---|
| **Nombre del negocio** | Spa Muebles Oaxaca |
| **Rubro** | Lavado, limpieza profunda y desinfección de muebles tapizados, colchones y asientos de auto |
| **Ubicación / cobertura** | Ciudad de Oaxaca de Juárez, Oaxaca, México |
| **Teléfono / WhatsApp** | 951 228 5968 |
| **TikTok** | [@spa.muebles.oaxac](https://www.tiktok.com/@spa.muebles.oaxac) |
| **Facebook** | [Página de Facebook](https://www.facebook.com/share/18u2eb523a/) *(es un link de "compartir"; verificar/solicitar la URL canónica de la página antes de publicarla en el sitio)* |

**Concepto del negocio:** el nombre "Spa Muebles" comunica la idea de darle a los muebles del cliente un tratamiento tipo spa: limpieza profunda, desinfección y renovación, no solo una limpieza superficial. Ese concepto (cuidado, salud, renovación, profesionalismo) debería sentirse en el tono de los textos y en la estética general del sitio.

### Servicios (inferidos de las imágenes del negocio)

- Lavado y desinfección profunda de **colchones** (individuales, matrimoniales e infantiles)
- Limpieza de **sofás y salas**
- Limpieza de **asientos y tapicería de autos**
- Limpieza de **sillas de oficina**
- Limpieza de **sillas de comedor** y tapicería en general

### Mensajes clave / datos de valor (extraídos del material del negocio)

Estos datos aparecen en el material gráfico que el negocio ya usa para redes sociales y son ideales para una sección de "¿Sabías que...?" o "Por qué es importante limpiar tus muebles":

- Un colchón usado acumula ácaros del polvo, heces de ácaro, sudor, bacterias, esporas de hongos, polvo y alérgenos.
- Los ácaros del polvo son la causa principal de alergias dentro del hogar.
- Dormir en un colchón sucio empeora las alergias.
- Limpiar el colchón de forma profunda puede prolongar su vida útil hasta un **40%**.
- Se recomienda una limpieza profunda del colchón **al menos cada 6 meses**.

### Diferenciador principal: fotos de antes y después

El negocio cuenta con **múltiples fotos reales de "antes y después"** (colchones, sofás, sillas de oficina, sillas de comedor, asientos de auto). Este es el activo más fuerte de prueba social/calidad que tiene el negocio y debería ser un componente central de la landing page (galería o, idealmente, un **slider comparador interactivo antes/después**).

---

## 3. Recursos disponibles — carpeta `imagenes/`

Todas las imágenes reales del negocio están en [`imagenes/`](imagenes/). Referencia rápida de cada archivo:

| Archivo | Contenido |
|---|---|
| `logo.jpeg` | Logo oficial del negocio (⚠️ ver nota de fondo abajo) |
| `WhatsApp Image ... 7.45.00 PM.jpeg` | Silla de oficina limpia (resultado final) |
| `WhatsApp Image ... 7.45.00 PM (1).jpeg` | Asiento de auto — antes/después |
| `WhatsApp Image ... 7.45.00 PM (2).jpeg` | Silla de oficina sucia (antes) |
| `WhatsApp Image ... 7.45.00 PM (3).jpeg` | Colchón infantil — antes/después |
| `WhatsApp Image ... 7.45.00 PM (4).jpeg` | Colchón — antes/después (mancha) |
| `WhatsApp Image ... 7.45.01 PM.jpeg` | Colchón matrimonial — antes/después |
| `WhatsApp Image ... 7.45.01 PM (1).jpeg` | Sofá azul — antes/después |
| `WhatsApp Image ... 7.45.01 PM (2).jpeg` | Sillas de comedor — antes/después |
| `WhatsApp Image ... 7.45.01 PM (3).jpeg` | Infografía: qué vive en un colchón sucio |
| `WhatsApp Image ... 7.45.01 PM (4).jpeg` | Infografía: concientización sobre ácaros |
| `WhatsApp Image ... 7.45.01 PM (5).jpeg` | Infografía: "¿Qué hay en su colchón?" |
| `WhatsApp Image ... 7.45.02 PM.jpeg` | Infografía: "Datos curiosos" (estadísticas) |
| `WhatsApp Image ... 7.45.02 PM (1).jpeg` | Infografía: cada cuánto lavar el colchón |

**Uso sugerido:** las fotos de antes/después van en la galería o comparador de la landing. Las infografías no deben usarse tal cual (son gráficos de redes sociales, no assets de sitio web), pero sus datos/estadísticas sí deben reutilizarse como **copy** en la sección de "por qué elegirnos" o "datos que debes saber", diseñados de forma nativa dentro del estilo del sitio.

### ⚠️ Importante: logo con fondo a remover

El archivo `logo.jpeg` tiene **fondo blanco sólido**. Antes de usarlo en el sitio (header, favicon, pantalla de carga, footer, etc.), **hay que quitarle el fondo** y dejarlo transparente. Entregar como `logo.png` (fondo transparente) y, si es posible, también una versión `.svg`. Esto es indispensable para que el logo se vea bien sobre fondos de color, en la pantalla de carga y en modo oscuro/claro.

---

## 4. Branding y paleta de colores

Colores extraídos directamente del logo oficial y del material gráfico del negocio (valores hex reales, sampleados del logo):

| Color | Hex aproximado | Uso sugerido |
|---|---|---|
| **Azul marino corporativo** (color principal del logo) | `#0F3F63` | Color primario de marca: header, botones principales, títulos, fondos oscuros |
| **Azul marino profundo** (variante oscura) | `#0A2C47` | Gradientes, hover states, secciones oscuras, footer |
| **Teal / turquesa spa** (color de acento presente en el material del negocio) | `#2F9098` | Color secundario/acento — refuerza el concepto "spa": detalles, íconos, links, badges |
| **Blanco / hueso** | `#FFFFFF` / `#F8F8F8` | Fondos, espacios en blanco, look premium/minimal |
| **Gris carbón** (texto, no negro puro) | `#12181F` | Texto principal — más elegante que negro puro |

Opcional para reforzar el look "premium/high-tech": un acento metálico sutil (dorado `#C9A227` o plata `#B8C4CE`) usado con moderación en detalles, badges o líneas decorativas — queda a criterio de la iteración de diseño, no es obligatorio.

### Tipografía sugerida

Buscar una combinación sans-serif moderna, limpia y de aire corporativo/tech (evitar fuentes genéricas tipo Arial/Times):

- **Opción A:** `Sora` o `Space Grotesk` para títulos (carácter tech/premium) + `Inter` para textos de cuerpo.
- **Opción B:** `Poppins` o `Manrope` para todo el sitio (look minimal y corporativo).

Se puede probar ambas opciones al iterar con Claude y quedarse con la que mejor se vea aplicada.

---

## 5. Estilo y dirección de diseño

El estilo visual de todo el sitio debe sentirse:

- **Premium / enterprise / corporativo de marca** — no un sitio genérico de servicios locales, sino algo con nivel de marca establecida.
- **High-tech y elegante**, combinado con un enfoque **minimalista** (mucho espacio en blanco, jerarquía visual clara, sin saturar de elementos).
- Consistente con la paleta de azul marino + acentos, tipografía moderna, y componentes con bordes suaves, sombras sutiles y transiciones cuidadas.

Este estilo debe mantenerse consistente en **todas** las secciones (hero, servicios, galería, contacto, footer), no solo en la primera pantalla.

---

## 6. Efectos visuales y animaciones requeridas

La landing page debe incluir los siguientes efectos (el desarrollador/Claude tiene libertad de elegir la implementación técnica — CSS puro, librerías tipo AOS/GSAP/Framer Motion, Intersection Observer, etc. — mientras el resultado visual cumpla lo pedido):

1. **Pantalla de carga (loading screen)**: al entrar al sitio, mostrar una pantalla de carga con el **logo del negocio (con fondo transparente)** centrado junto con un **spinner/loader animado**, que desaparece con una transición suave (fade-out) cuando el sitio termina de cargar.
2. **Animaciones al hacer scroll**: los elementos y secciones deben aparecer con animaciones de entrada (fade-in, slide-up, etc.) conforme el usuario baja por la página — no todo debe cargar estático de golpe.
3. **Efectos en el título del Hero**:
   - Efecto tipo **"máquina de escribir"** (typewriter) en el título o parte de él.
   - Letras del título con **efecto de cambio de color** (animación de color, gradiente animado o "color cycling") para darle dinamismo a la primera impresión.
4. **Micro-interacciones**: hover effects en botones, tarjetas de servicios e íconos.
5. **Sugerido (valor agregado):** dado que el negocio tiene múltiples fotos reales de antes/después, considerar un **slider comparador interactivo** (arrastrar para revelar antes/después) en la galería — es el activo más fuerte de prueba de calidad que tiene el negocio.
6. **Botón flotante de WhatsApp** con el número de contacto, siempre visible, para conversión directa.

---

## 7. Estructura sugerida de secciones

Como referencia (ajustar según cómo evolucione la plantilla base):

1. **Hero** — nombre del negocio, propuesta de valor, CTA principal (WhatsApp), efectos de título descritos arriba.
2. **Servicios** — colchones, sofás/salas, asientos de auto, sillas de oficina, sillas de comedor.
3. **Por qué elegirnos / Datos que debes saber** — usar las estadísticas de la sección 2 (ácaros, alergias, vida útil, frecuencia recomendada).
4. **Galería antes y después** — usando las fotos reales de la carpeta `imagenes/`.
5. **Zona de cobertura** — Oaxaca de Juárez y alrededores.
6. **Contacto / CTA final** — teléfono, WhatsApp, redes sociales (TikTok, Facebook).
7. **Footer** — logo, redes sociales, datos de contacto.

*Nota: no se proporcionaron testimonios de clientes. Si no se consiguen antes del desarrollo, usar un placeholder claro o considerar omitir esa sección hasta tener contenido real — no inventar testimonios ni reseñas falsas.*

---

## 8. Flujo de trabajo con Claude

- El desarrollador construye sobre la **plantilla base HTML** ya entregada, iterando con Claude a partir del prompt inicial ya compartido.
- Se puede seguir dando instrucciones a Claude las veces que sea necesario — corregir, refinar, pedir variantes de una sección, ajustar animaciones, etc. — hasta lograr el resultado deseado. No hay que conformarse con el primer resultado.
- Usa este README como contexto de negocio/branding durante toda la iteración, para que cada ajuste se mantenga consistente con la información, tono y estilo aquí definidos.
- Antes de dar por terminada una sección, revisar el resultado en navegador (no solo el código) — especialmente las animaciones, el loading screen y el comportamiento responsive en móvil (la mayoría del tráfico de un negocio local como este llega desde celular).

---

## 9. Checklist de entrega

- [ ] Logo con fondo removido (`logo.png` transparente + `.svg` si es posible)
- [ ] Paleta de colores de marca aplicada consistentemente
- [ ] Tipografía definida y aplicada en todo el sitio
- [ ] Pantalla de carga con logo + spinner
- [ ] Animaciones de scroll en todas las secciones
- [ ] Efecto typewriter + cambio de color en el título del hero
- [ ] Galería/comparador de fotos antes y después
- [ ] Sección con los datos/estadísticas de valor
- [ ] Botón de WhatsApp flotante y funcional (`https://wa.me/529512285968`)
- [ ] Enlaces a TikTok y Facebook
- [ ] Sitio responsive (mobile-first, dado que es un negocio local)
- [ ] Estilo premium/corporativo/minimal consistente en todo el sitio
