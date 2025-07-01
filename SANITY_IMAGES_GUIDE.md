# 📸 Guía Completa de Imágenes en Sanity CMS

## 🎯 **Cómo cargar y gestionar imágenes**

### 🚀 **Desde el Studio Online**

1. **Accede al Studio**: https://hacklab-portfolio.sanity.studio/
2. **Navega a "Projects"**
3. **Selecciona un proyecto existente o crea uno nuevo**

### 📸 **Tipos de imágenes que puedes cargar:**

#### **1. Main Image (Imagen Principal)**
- **Dónde aparece**: Como thumbnail en la página Works
- **Tamaño recomendado**: 400x225 px (16:9 ratio)
- **Formatos**: JPG, PNG, WebP, AVIF

**Cómo cargar:**
1. En el proyecto, busca el campo **"Main Image (Thumbnail)"**
2. Haz clic en **"Upload"** o arrastra la imagen
3. Ajusta el **hotspot** (punto focal) si es necesario
4. Agrega **Alt Text** para SEO y accesibilidad

#### **2. Project Screenshots (Galería)**
- **Dónde aparece**: En la página individual del proyecto
- **Tamaño recomendado**: 800px de ancho mínimo
- **Cantidad**: Hasta 10 imágenes

**Cómo cargar:**
1. Busca el campo **"Project Screenshots"**
2. Haz clic en **"Add item"**
3. Arrastra o sube la imagen
4. Agrega **Alt Text** y **Caption** (opcional)
5. Repite para más imágenes

### 🖼️ **Mejores prácticas para imágenes:**

#### **📏 Tamaños recomendados:**
- **Thumbnail**: 400x225px (ratio 16:9)
- **Screenshots**: 1200x675px (ratio 16:9)
- **Máximo**: 2MB por imagen

#### **🎨 Formatos recomendados:**
- **WebP**: Mejor compresión (preferido)
- **JPG**: Para fotos con muchos colores
- **PNG**: Para imágenes con transparencia
- **AVIF**: Máxima compresión (más moderno)

#### **✅ Tips para mejores resultados:**
- **Usa imágenes claras y nítidas**
- **Evita texto pequeño en las imágenes**
- **Mantén un estilo visual consistente**
- **Optimiza el peso antes de subir**

### 🔧 **Campos de imagen explicados:**

#### **Hotspot (Punto focal):**
- Define qué parte de la imagen es más importante
- Útil cuando la imagen se recorta automáticamente
- Arrastra el círculo al punto de interés

#### **Alt Text:**
- Descripción de la imagen para lectores de pantalla
- Importante para SEO y accesibilidad
- Ejemplo: "Dashboard de Unicoin mostrando portfolio de criptomonedas"

#### **Caption:**
- Texto descriptivo opcional que aparece debajo de la imagen
- Ejemplo: "Interfaz principal con gráficos en tiempo real"

### 📱 **Gestión desde móvil:**

✅ **Puedes hacer TODO desde móvil:**
- Subir imágenes desde la galería
- Tomar fotos directamente
- Editar alt text y captions
- Ajustar hotspots

### 🔄 **Cómo reemplazar imágenes:**

1. **Ve al proyecto que quieres editar**
2. **Haz clic en la imagen actual**
3. **Selecciona "Upload" para reemplazar**
4. **O arrastra la nueva imagen encima**

### 🗑️ **Cómo eliminar imágenes:**

1. **Haz clic en la imagen**
2. **Presiona el botón de eliminar (🗑️)**
3. **Confirma la eliminación**

### ⚡ **Sistema de fallback:**

Si no cargas imágenes en Sanity, el sistema automáticamente usa las imágenes estáticas existentes como respaldo. Esto significa:

- **Tu portfolio nunca se rompe**
- **Puedes migrar gradualmente**
- **Siempre hay una imagen visible**

### 🎯 **Workflow recomendado:**

#### **Para nuevos proyectos:**
1. Crea el proyecto con toda la información
2. Sube la imagen principal primero
3. Agrega las screenshots de la galería
4. Revisa cómo se ve en el portfolio

#### **Para proyectos existentes:**
1. Abre el proyecto en Sanity
2. Sube la imagen principal
3. Agrega alt text descriptivo
4. Opcionalmente, agrega más screenshots

### 🚀 **Ventajas del sistema de imágenes:**

✅ **Optimización automática**: Sanity redimensiona y optimiza las imágenes  
✅ **CDN global**: Las imágenes se sirven desde ubicaciones cercanas  
✅ **Responsive**: Se adaptan automáticamente a diferentes pantallas  
✅ **SEO friendly**: Alt text y metadatos incluidos  
✅ **Gestión centralizada**: Todas las imágenes en un solo lugar  

### 🛠️ **URLs de las imágenes:**

Sanity genera URLs automáticas como:
```
https://cdn.sanity.io/images/ebl2wr39/production/abc123...
```

**No necesitas gestionar estas URLs manualmente**, el sistema las maneja automáticamente.

### 💡 **Consejos avanzados:**

#### **Para mejorar la velocidad:**
- Usa WebP cuando sea posible
- Mantén las imágenes bajo 2MB
- Recorta imágenes innecesarias antes de subir

#### **Para mejor SEO:**
- Escribe alt text descriptivo y único
- Usa palabras clave relevantes naturalmente
- Mantén consistencia en el estilo visual

### 📞 **¿Problemas con las imágenes?**

**Imagen no aparece:**
- Verifica que la imagen se subió correctamente
- Revisa que el alt text esté completo
- Espera unos minutos para el caché

**Imagen borrosa:**
- Sube una imagen de mayor resolución
- Verifica que sea mínimo 800px de ancho

**Error al subir:**
- Verifica que sea menor a 10MB
- Usa formatos compatibles (JPG, PNG, WebP)
- Intenta desde una conexión estable

---

## 🎉 **¡Tu sistema de imágenes está listo!**

Ahora puedes gestionar todas las imágenes de tu portfolio desde https://hacklab-portfolio.sanity.studio/ con total flexibilidad y control.

*Guía actualizada - Enero 2025*