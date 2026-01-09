// CONFIGURACIÓN: ID de la hoja de Google Sheets
const SHEET_ID = '1Z_Ri-OglzByxA1Y9KW_OapUmqdwqL58qu_NtFcAMiQs';
const SHEET_GID = '442652710'; // ID de la pestaña (gid) - más confiable que el nombre
const SHEET_TITLE = 'Respuestas de formulario 4'; // Nombre de la pestaña (alternativa)
const SHEET_RANGE = 'A2:I1000'; // Rango de datos (empezamos en A2 para omitir el encabezado)

// CONFIGURACIÓN: Código de validación (cambia este código por el que desees)
const VALIDATION_CODE = 'CORDIALIDAD2025';

// URL para obtener los datos en formato JSON desde Google Sheets
// Usamos gid en lugar del nombre de la pestaña para mayor confiabilidad
const FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?gid=${SHEET_GID}&range=${SHEET_RANGE}&tqx=out:json`;

// Variables globales
let allData = [];
let filteredData = [];
let isAuthenticatedFlag = false; // Variable en memoria (se pierde al recargar)

// Función para extraer números de texto (ej: "48 h" -> 48)
function extractNumber(text) {
    if (!text) return 0;
    const match = text.toString().match(/\d+/);
    return match ? parseInt(match[0]) : 0;
}

// Función para formatear fecha
function formatDate(dateString) {
    if (!dateString) return '';
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch (e) {
        return dateString;
    }
}

// Función para obtener datos de Google Sheets
async function fetchData() {
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const contenedor = document.getElementById('contenedor');
    
    loading.style.display = 'block';
    error.style.display = 'none';
    contenedor.innerHTML = '';

    try {
        const response = await fetch(FULL_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const text = await response.text();
        
        // Limpiar la respuesta de Google para obtener JSON válido
        const jsonMatch = text.match(/google\.visualization\.Query\.setResponse\((.*)\);/);
        if (!jsonMatch) {
            throw new Error('No se pudo parsear la respuesta de Google Sheets');
        }
        
        const jsonData = JSON.parse(jsonMatch[1]);
        const rows = jsonData.table.rows;
        
        // Procesar los datos
        allData = rows.map((row, index) => {
            const cells = row.c;
            return {
                timestamp: cells[0]?.v || '',
                nombre: cells[1]?.v || '',
                grupo: cells[2]?.v || '',
                predico: cells[3]?.v || '',
                horas: extractNumber(cells[4]?.v || ''),
                revisitas: extractNumber(cells[5]?.v || ''),
                estudios: extractNumber(cells[6]?.v || ''),
                publicaciones: cells[7]?.v || '',
                supervision: cells[8]?.v || ''
            };
        }).filter(item => item.nombre); // Filtrar filas vacías

        // Actualizar filtros de grupo
        updateGroupFilter();
        
        // Aplicar filtros y mostrar datos
        applyFilters();
        
        // Actualizar estadísticas
        updateStats();
        
        loading.style.display = 'none';
        
    } catch (err) {
        console.error('Error al cargar datos:', err);
        loading.style.display = 'none';
        error.style.display = 'block';
        error.innerHTML = `<p>❌ Error al cargar los datos: ${err.message}</p><p>Verifica que la hoja sea pública o que tengas los permisos necesarios.</p>`;
    }
}

// Función para actualizar el selector de grupos
function updateGroupFilter() {
    const filterGrupo = document.getElementById('filterGrupo');
    const grupos = [...new Set(allData.map(item => item.grupo).filter(g => g))].sort();
    
    // Limpiar opciones existentes (excepto "Todos")
    filterGrupo.innerHTML = '<option value="all">Todos los grupos</option>';
    
    grupos.forEach(grupo => {
        const option = document.createElement('option');
        option.value = grupo;
        option.textContent = `Grupo ${grupo}`;
        filterGrupo.appendChild(option);
    });
}

// Función para aplicar filtros
function applyFilters() {
    const filterGrupo = document.getElementById('filterGrupo').value;
    const filterPredico = document.getElementById('filterPredico').value;
    
    filteredData = allData.filter(item => {
        const matchGrupo = filterGrupo === 'all' || item.grupo == filterGrupo;
        const matchPredico = filterPredico === 'all' || item.predico === filterPredico;
        return matchGrupo && matchPredico;
    });
    
    displayData();
}

// Función para mostrar los datos
function displayData() {
    const contenedor = document.getElementById('contenedor');
    
    if (filteredData.length === 0) {
        contenedor.innerHTML = '<div class="card" style="grid-column: 1 / -1; text-align: center; padding: 40px;"><p>No se encontraron datos con los filtros seleccionados.</p></div>';
        return;
    }
    
    contenedor.innerHTML = '';
    
    filteredData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const predicoClass = item.predico === 'Si - Predique' ? 'yes' : 'no';
        
        card.innerHTML = `
            <div class="card-header">
                <div>
                    <div class="card-name">${item.nombre}</div>
                    <div class="card-predico ${predicoClass}">${item.predico || 'No especificado'}</div>
                </div>
                <span class="card-grupo">Grupo ${item.grupo || 'N/A'}</span>
            </div>
            <div class="card-details">
                <div class="detail-item">
                    <span class="detail-label">Horas</span>
                    <span class="detail-value ${item.horas ? '' : 'empty'}">${item.horas || '0'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Revisitas</span>
                    <span class="detail-value ${item.revisitas ? '' : 'empty'}">${item.revisitas || '0'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Estudios</span>
                    <span class="detail-value ${item.estudios ? '' : 'empty'}">${item.estudios || '0'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Publicaciones</span>
                    <span class="detail-value ${item.publicaciones ? '' : 'empty'}">${item.publicaciones || '0'}</span>
                </div>
            </div>
            ${item.supervision ? `<div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #f0f0f0;"><strong>Supervisión:</strong> ${item.supervision}</div>` : ''}
            <div class="card-timestamp">${formatDate(item.timestamp)}</div>
        `;
        
        contenedor.appendChild(card);
    });
}

// Función para actualizar estadísticas
function updateStats() {
    const totalPersonas = document.getElementById('totalPersonas');
    const totalHoras = document.getElementById('totalHoras');
    const totalRevisitas = document.getElementById('totalRevisitas');
    const totalEstudios = document.getElementById('totalEstudios');
    
    const stats = filteredData.reduce((acc, item) => {
        acc.horas += item.horas || 0;
        acc.revisitas += item.revisitas || 0;
        acc.estudios += item.estudios || 0;
        return acc;
    }, { horas: 0, revisitas: 0, estudios: 0 });
    
    totalPersonas.textContent = filteredData.length;
    totalHoras.textContent = stats.horas;
    totalRevisitas.textContent = stats.revisitas;
    totalEstudios.textContent = stats.estudios;
}

// ============================================
// SISTEMA DE AUTENTICACIÓN
// ============================================

// Verificar si el usuario está autenticado
function isAuthenticated() {
    return isAuthenticatedFlag;
}

// Marcar como autenticado
function setAuthenticated() {
    isAuthenticatedFlag = true;
}

// Validar código de acceso
function validateCode(code) {
    return code.trim().toUpperCase() === VALIDATION_CODE.toUpperCase();
}

// Mostrar modal de autenticación
function showAuthModal() {
    const modal = document.getElementById('authModal');
    const mainContent = document.getElementById('mainContent');
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
    }
    if (mainContent) {
        mainContent.style.display = 'none';
    }
}

// Ocultar modal y mostrar contenido
function hideAuthModal() {
    const modal = document.getElementById('authModal');
    const mainContent = document.getElementById('mainContent');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
    if (mainContent) {
        mainContent.style.display = 'block';
    }
}

// Manejar el envío del formulario de autenticación
function handleAuthSubmit() {
    const codeInput = document.getElementById('authCode');
    const errorDiv = document.getElementById('authError');
    const submitBtn = document.getElementById('authSubmit');
    const code = codeInput.value;

    // Limpiar error anterior
    errorDiv.style.display = 'none';
    submitBtn.disabled = true;

    // Validar código
    if (validateCode(code)) {
        setAuthenticated();
        hideAuthModal();
        // Cargar datos después de autenticarse
        fetchData();
    } else {
        // Mostrar error
        errorDiv.style.display = 'block';
        codeInput.value = '';
        codeInput.focus();
        // Agregar animación de error
        codeInput.style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            codeInput.style.animation = '';
        }, 500);
    }

    submitBtn.disabled = false;
}

// Inicializar sistema de autenticación
function initAuth() {
    const authModal = document.getElementById('authModal');
    const authCode = document.getElementById('authCode');
    const authSubmit = document.getElementById('authSubmit');
    const mainContent = document.getElementById('mainContent');

    // Asegurar que el modal esté visible inicialmente si no está autenticado
    if (!authModal || !authCode || !authSubmit || !mainContent) {
        console.error('Elementos de autenticación no encontrados');
        return;
    }

    // Siempre mostrar el modal al iniciar (la variable se reinicia al recargar)
    // Asegurar que el modal se muestre correctamente
    authModal.style.display = 'flex';
    authModal.classList.remove('hidden');
    mainContent.style.display = 'none';
    
    // Limpiar cualquier código previo en el input
    authCode.value = '';

    // Event listeners para autenticación
    authSubmit.addEventListener('click', handleAuthSubmit);
    
    // Permitir envío con Enter
    authCode.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleAuthSubmit();
        }
    });

    // Enfocar el input al cargar
    setTimeout(() => {
        authCode.focus();
    }, 100);
}

// ============================================
// EVENT LISTENERS PRINCIPALES
// ============================================

// Event listeners
document.getElementById('btnRefresh').addEventListener('click', fetchData);
document.getElementById('filterGrupo').addEventListener('change', applyFilters);
document.getElementById('filterPredico').addEventListener('change', applyFilters);

// Inicializar autenticación al cargar la página
document.addEventListener('DOMContentLoaded', initAuth);
