# 📊 Reporte Mensual de Servicio

Aplicación web para visualizar reportes de servicio desde Google Sheets. Obtiene datos en tiempo real y los muestra de manera organizada y atractiva.

## 🚀 Características

- ✅ Obtiene datos directamente desde Google Sheets
- ✅ Interfaz moderna y responsiva
- ✅ Estadísticas en tiempo real (total de personas, horas, revisitas, estudios)
- ✅ Filtros por grupo y predicación
- ✅ Diseño adaptativo para móviles y tablets
- ✅ Actualización manual de datos

## 📋 Requisitos

- Una hoja de Google Sheets con los datos
- La hoja debe ser **pública** o tener permisos de lectura para "Cualquiera con el enlace"

## 🔧 Configuración

### 1. Hacer pública la hoja de Google Sheets

1. Abre tu hoja de Google Sheets
2. Haz clic en "Compartir" (botón azul en la esquina superior derecha)
3. En "Obtener enlace", selecciona "Cualquiera con el enlace" → "Lector"
4. Copia el enlace

### 2. Configurar el proyecto

El proyecto ya está configurado con tu URL de Google Sheets. Si necesitas cambiarla, edita el archivo `script.js`:

```javascript
const SHEET_ID = 'TU_ID_DE_HOJA_AQUI';
const SHEET_TITLE = 'Nombre de la pestaña';
const SHEET_RANGE = 'A2:I1000'; // Rango de datos
```

**Para obtener el SHEET_ID:**
- De la URL: `https://docs.google.com/spreadsheets/d/[ESTE_ES_EL_ID]/edit`
- Ejemplo: `https://docs.google.com/spreadsheets/d/1Z_Ri-OglzByxA1Y9KW_OapUmqdwqL58qu_NtFcAMiQs/edit`
- El ID es: `1Z_Ri-OglzByxA1Y9KW_OapUmqdwqL58qu_NtFcAMiQs`

**Para obtener el nombre de la pestaña:**
- Mira el nombre de la pestaña en la parte inferior de Google Sheets
- Debe coincidir exactamente (incluyendo mayúsculas y espacios)

## 📁 Estructura del Proyecto

```
reporte_mensual/
├── index.html      # Estructura HTML principal
├── styles.css      # Estilos y diseño
├── script.js       # Lógica para obtener y mostrar datos
└── README.md       # Este archivo
```

## 🎯 Uso

### ⚠️ Importante: Necesitas un servidor HTTP

**NO puedes abrir el archivo HTML directamente** (doble clic) porque Google Sheets bloquea las peticiones desde `file://` por seguridad (CORS).

**Tienes 3 opciones:**

### Opción 1: GitHub Pages (Recomendado para producción) ✅

**GitHub Pages SÍ funciona perfectamente** para este proyecto. Es gratis y fácil de configurar:

1. **Crea un repositorio en GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/reporte_mensual.git
   git push -u origin main
   ```

2. **Activa GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - En "Source", selecciona "Deploy from a branch"
   - Selecciona la rama `main` y la carpeta `/ (root)`
   - Guarda

3. **Tu sitio estará disponible en:**
   - `https://TU_USUARIO.github.io/reporte_mensual/`
   - Los cambios se actualizan automáticamente al hacer `git push`

### Opción 2: Servidor local (Para desarrollo)

**Con Python:**
```bash
# Python 3
python -m http.server 8000

# Luego abre: http://localhost:8000
```

**Con Node.js (http-server):**
```bash
npx http-server -p 8000
```

**Con PHP:**
```bash
php -S localhost:8000
```

### Opción 3: Otros servicios gratuitos

- **Netlify**: Arrastra y suelta la carpeta del proyecto
- **Vercel**: Similar a Netlify
- **Cloudflare Pages**: También funciona bien

## 📊 Estructura de Datos Esperada

La hoja de Google Sheets debe tener las siguientes columnas:

| Columna | Descripción |
|---------|-------------|
| A | Marca temporal |
| B | Nombre |
| C | Grupo |
| D | ¿Predicó? |
| E | Horas de servicio |
| F | Revisitas |
| G | Estudios |
| H | Publicaciones |
| I | Supervisión |

## 🔍 Funcionalidades

### Filtros

- **Por Grupo**: Filtra los reportes por grupo específico
- **Por Predicación**: Filtra por si predicó o no en el mes

### Estadísticas

Muestra en tiempo real:
- Total de personas (según filtros aplicados)
- Total de horas de servicio
- Total de revisitas
- Total de estudios

### Actualización

- Botón "🔄 Actualizar Datos" para recargar la información desde Google Sheets

## 🐛 Solución de Problemas

### Error: "No se pudo parsear la respuesta"
- Verifica que el nombre de la pestaña (`SHEET_TITLE`) sea exacto
- Asegúrate de que la hoja sea pública

### Error: "HTTP error! status: 403"
- La hoja no es pública. Compártela con "Cualquiera con el enlace"

### Error: "HTTP error! status: 404"
- Verifica que el `SHEET_ID` sea correcto
- Verifica que el nombre de la pestaña exista

### Los datos no se muestran
- Abre la consola del navegador (F12) para ver errores
- Verifica que el rango `SHEET_RANGE` incluya tus datos
- Asegúrate de que la primera fila sea el encabezado

## 🎨 Personalización

### Cambiar colores

Edita `styles.css` y modifica los colores del gradiente:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Cambiar el rango de datos

En `script.js`, modifica:

```javascript
const SHEET_RANGE = 'A2:I1000'; // Cambia según tus necesidades
```

## 📝 Notas

- Los datos se actualizan cada vez que haces clic en "Actualizar Datos"
- Los filtros se aplican en tiempo real
- El proyecto no requiere servidor backend, funciona completamente en el cliente
- **GitHub Pages funciona perfectamente** - no necesitas configuración especial
- La hoja de Google Sheets debe ser pública para que funcione desde cualquier servidor

## 📄 Licencia

Este proyecto es de uso personal.

---

Desarrollado con ❤️ para la Congregación Cordialidad
