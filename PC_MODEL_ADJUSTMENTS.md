# 🖥️ Ajustes del Modelo PC

## 📐 **Configuraciones aplicadas:**

### **1. Posición de cámara más cercana:**
```javascript
// Antes: distancia 20
const initialCameraPosition = new THREE.Vector3(
  12 * Math.sin(0.2 * Math.PI),  // Reducido de 20 a 12
  6,                             // Reducido de 8 a 6  
  12 * Math.cos(0.2 * Math.PI)   // Reducido de 20 a 12
)
```

### **2. Escala de cámara ajustada:**
```javascript
// Antes: scH * 0.005 + 4.8
const scale = scH * 0.003 + 3.2  // Más pequeño = modelo más grande
```

### **3. Modelo escalado:**
```javascript
obj.scale.setScalar(1.5)  // 50% más grande que el original
```

### **4. Altura de animación:**
```javascript
camera.position.y = 6  // Reducido de 10 a 6
```

## 🎛️ **Si quieres ajustar más:**

### **Para modelo AÚN más cerca:**
```javascript
// En voxel-pc.js línea ~54
const scale = scH * 0.002 + 2.5

// En lib/model.js línea ~30  
obj.scale.setScalar(2.0)  // Doble tamaño

// En voxel-pc.js líneas ~47-51
const initialCameraPosition = new THREE.Vector3(
  8 * Math.sin(0.2 * Math.PI),   // Aún más cerca
  4,
  8 * Math.cos(0.2 * Math.PI)
)
```

### **Para modelo más alejado:**
```javascript
// En voxel-pc.js línea ~54
const scale = scH * 0.004 + 4.0

// En lib/model.js línea ~30
obj.scale.setScalar(1.2)  // Más pequeño

// En voxel-pc.js líneas ~47-51  
const initialCameraPosition = new THREE.Vector3(
  15 * Math.sin(0.2 * Math.PI),  // Más lejos
  8,
  15 * Math.cos(0.2 * Math.PI)
)
```

## 🎯 **Parámetros de referencia:**

| Parámetro | Valor Actual | Efecto |
|-----------|--------------|--------|
| **Distancia cámara** | 12 | Más bajo = más cerca |
| **Escala cámara** | `scH * 0.003 + 3.2` | Más bajo = modelo más grande |
| **Escala modelo** | 1.5 | Más alto = modelo más grande |
| **Altura Y** | 6 | Ángulo de vista |

## 💡 **Tips:**

- **Cambios graduales**: Ajusta de 0.1 en 0.1 para efectos sutiles
- **Test rápido**: Usa `test-pc-model.html` para probar cambios
- **Responsive**: Los cambios se adaptan automáticamente a diferentes pantallas
- **Refresca**: Refresca el navegador para ver los cambios

---
*Configuración optimizada para modelo PC - Enero 2025*