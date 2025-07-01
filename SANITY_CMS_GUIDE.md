# 📝 Sanity CMS - Guía de Uso

## 🌐 Acceso al CMS

**URL del Studio**: https://hacklab-portfolio.sanity.studio/

## 🚀 Cómo gestionar tu portfolio

### 1. **Agregar un nuevo proyecto**

1. Ve a https://hacklab-portfolio.sanity.studio/
2. Inicia sesión con tu cuenta de Sanity
3. Haz clic en "Projects" en el menú lateral
4. Haz clic en "Create" (botón +)
5. Completa los campos:

#### **Campos obligatorios:**
- **Title**: Nombre del proyecto (ej: "Mi App Increíble")
- **Slug**: URL amigable (ej: "mi-app-increible")
- **Description**: Descripción breve del proyecto
- **Year**: Año(s) del proyecto (ej: "2024" o "2023-2024")
- **Platform**: Tipo de plataforma (ej: "Web Application", "Mobile App")
- **Type**: Categoría del proyecto:
  - `main`: Proyectos principales (aparecen primero)
  - `collaboration`: Colaboraciones
  - `side`: Proyectos secundarios
- **Order**: Número para ordenar (menor = aparece primero)

#### **Campos opcionales:**
- **Stack**: Tecnologías usadas (ej: ["React", "Node.js", "MongoDB"])
- **Features**: Características principales del proyecto
- **Users**: Número de usuarios (ej: "10,000+")
- **ROI**: Retorno de inversión (ej: "250%")
- **Growth**: Crecimiento (ej: "300%")
- **Website**: URL del proyecto
- **Featured**: Marcar si es un proyecto destacado

#### **Imágenes:**
- **Main Image (Thumbnail)**: Imagen principal que aparece en la grilla
  - Tamaño recomendado: 400x225px (16:9)
  - Incluye Alt Text para SEO
- **Project Screenshots**: Galería de imágenes del proyecto
  - Hasta 10 imágenes
  - Tamaño recomendado: 800px+ de ancho
  - Incluye Alt Text y Caption opcional

### 2. **Editar un proyecto existente**

1. Ve a "Projects" en el menú lateral
2. Busca el proyecto que quieres editar
3. Haz clic en él
4. Modifica los campos necesarios
5. Guarda con Ctrl+S (o Cmd+S en Mac)

### 3. **Eliminar un proyecto**

1. Abre el proyecto que quieres eliminar
2. Haz clic en el menú de opciones (⋮)
3. Selecciona "Delete"
4. Confirma la eliminación

### 4. **Reordenar proyectos**

- Cambia el campo **Order** en cada proyecto
- Menor número = aparece primero
- Ejemplo: Order 1, 2, 3, 4...

## 🎯 Tipos de Proyectos

### **Main Projects** (`type: "main"`)
- Proyectos principales de tu portfolio
- Aparecen en la sección "Works"
- Máximo recomendado: 4-6 proyectos

### **Collaborations** (`type: "collaboration"`)
- Proyectos en colaboración
- Aparecen en la sección "Collaborations"

### **Side Projects** (`type: "side"`)
- Proyectos secundarios o experimentales
- Aparecen en la sección "More Projects"

## 🖼️ Gestión de Imágenes

### **📸 Cómo cargar imágenes:**
1. **Abre un proyecto** en el Studio
2. **Main Image**: Arrastra o sube la imagen principal (thumbnail)
3. **Project Screenshots**: Haz clic en "Add item" y sube múltiples imágenes
4. **Completa Alt Text** para cada imagen (importante para SEO)

### **🎯 Sistema híbrido:**
- **Con imágenes de Sanity**: Usa las que subiste al CMS
- **Sin imágenes**: Automáticamente usa las imágenes estáticas existentes
- **Nunca se rompe**: Siempre hay una imagen visible

### **📖 Guía detallada:**
Ver archivo `SANITY_IMAGES_GUIDE.md` para instrucciones completas sobre gestión de imágenes.

## 🔄 Actualizaciones

- **Los cambios son inmediatos**: Cualquier modificación en Sanity se refleja automáticamente en tu portfolio
- **Sin deploy necesario**: No necesitas hacer deploy para ver los cambios
- **Caché**: En producción, los cambios pueden tardar unos minutos en aparecer por el caché

## 📱 Acceso móvil

- El Studio es completamente responsivo
- Puedes editar desde móvil o tablet
- Todas las funciones están disponibles en dispositivos móviles

## 🛠️ Comandos útiles (para desarrollo)

```bash
# Ejecutar Studio localmente
npm run sanity

# Deploy del Studio
npx sanity deploy

# Importar datos
npx sanity dataset import archivo.ndjson production
```

## 🔗 URLs importantes

- **Studio Online**: https://hacklab-portfolio.sanity.studio/
- **Studio Local**: http://localhost:3333
- **Portfolio**: http://localhost:3001 (development)

## 💡 Tips

1. **Usa slugs descriptivos**: Ayudan con SEO y son más fáciles de recordar
2. **Mantén descriptions breves**: 1-2 líneas máximo para mejor presentación
3. **Ordena estratégicamente**: Pon tus mejores proyectos con order bajo (1, 2, 3)
4. **Marca como featured**: Solo tus mejores 2-3 proyectos
5. **Stack relevante**: Menciona solo las tecnologías más importantes

¡Tu CMS está listo para usar! 🎉