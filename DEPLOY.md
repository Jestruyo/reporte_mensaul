# 🚀 Guía Rápida: Desplegar en GitHub Pages

## ✅ Respuesta Rápida

**SÍ, GitHub Pages funciona perfectamente** para este proyecto. No necesitas configuración especial.

## 📋 Pasos para Desplegar

### 1. Crear el repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** → **"New repository"**
3. Nombre del repositorio: `reporte_mensual` (o el que prefieras)
4. Selecciona **"Public"** (necesario para GitHub Pages gratuito)
5. **NO** marques "Add a README" (ya tienes uno)
6. Haz clic en **"Create repository"**

### 2. Subir tus archivos

**Opción A: Desde la terminal (recomendado)**

```bash
# Navega a tu carpeta del proyecto
cd /Users/conbjtrujillo/Projects/Personal/reporte_mensual

# Inicializa git (si no lo has hecho)
git init

# Agrega todos los archivos
git add .

# Haz tu primer commit
git commit -m "Initial commit: Reporte mensual de servicio"

# Conecta con GitHub (reemplaza TU_USUARIO con tu usuario)
git remote add origin https://github.com/TU_USUARIO/reporte_mensual.git

# Sube los archivos
git branch -M main
git push -u origin main
```

**Opción B: Desde la interfaz de GitHub**

1. En la página de tu nuevo repositorio, verás instrucciones
2. Haz clic en **"uploading an existing file"**
3. Arrastra y suelta estos archivos:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
4. Escribe un mensaje de commit: "Initial commit"
5. Haz clic en **"Commit changes"**

### 3. Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** (Configuración)
3. En el menú lateral izquierdo, busca **"Pages"**
4. En **"Source"**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Haz clic en **"Save"**

### 4. ¡Listo! 🎉

Tu sitio estará disponible en:
```
https://TU_USUARIO.github.io/reporte_mensual/
```

**Nota:** Puede tardar 1-2 minutos en estar disponible la primera vez.

## 🔄 Actualizar el sitio

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

Los cambios se reflejarán automáticamente en GitHub Pages en 1-2 minutos.

## ✅ Verificar que funciona

1. Abre tu URL de GitHub Pages
2. Deberías ver la página cargando datos
3. Si ves un error, verifica:
   - Que la hoja de Google Sheets sea **pública**
   - Abre la consola del navegador (F12) para ver errores específicos

## 🎯 Ventajas de GitHub Pages

- ✅ **Gratis** para repositorios públicos
- ✅ **HTTPS** automático (seguro)
- ✅ **Actualización automática** al hacer push
- ✅ **URL personalizada** (puedes usar dominio propio si quieres)
- ✅ **Sin límites** de ancho de banda para proyectos personales

## 📝 Nota Importante

**Asegúrate de que tu hoja de Google Sheets sea pública:**
1. Abre tu hoja de Google Sheets
2. Clic en **"Compartir"**
3. Selecciona **"Cualquiera con el enlace"** → **"Lector"**
4. Guarda

Sin esto, GitHub Pages no podrá acceder a los datos.

---

¿Problemas? Revisa la sección "Solución de Problemas" en el README.md
