// CONFIGURACIÓN: ID de la hoja de Google Sheets
const SHEET_ID = '1Z_Ri-OglzByxA1Y9KW_OapUmqdwqL58qu_NtFcAMiQs';
const SHEET_GID = '442652710'; // ID de la pestaña (gid) - más confiable que el nombre
const SHEET_TITLE = 'Respuestas de formulario 4'; // Nombre de la pestaña (alternativa)
const SHEET_RANGE = 'A2:I1000'; // Rango de datos (empezamos en A2 para omitir el encabezado)

// CONFIGURACIÓN: Código de validación (cambia este código por el que desees)
const VALIDATION_CODE = 'Reino1914';

// URL para obtener los datos en formato JSON desde Google Sheets
// Usamos gid en lugar del nombre de la pestaña para mayor confiabilidad
const FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?gid=${SHEET_GID}&range=${SHEET_RANGE}&tqx=out:json`;

// Variables globales
let allData = [];
let filteredData = [];
let isAuthenticatedFlag = false; // Variable en memoria (se pierde al recargar)

// ============================================
// LISTAS DE PERSONAS POR GRUPO
// ============================================
// Lista de personas esperadas por grupo
const GRUPOS_LISTAS = {
    1: [
        'Carlos Cortez',
        'Juan Lozano',
        'Edwin Gutiérrez',
        'Cristian Serpa',
        'Mariano Jiménez',
        'Alba Sierra',
        'Esther Rua',
        'Jaqueline Tuñon',
        'Maria Ibarra',
        'Olga Lozano',
        'Raquel Escorcia',
        'Alan Jiménez',
        'Ana Ortiz',
        'Aurora Vázquez',
        'Cristian Serpa Orozco',
        'Darlis Serpa',
        'Edinson Palomino',
        'Elizabeth Arena',
        'Erick Jiménez',
        'Ilsia Vázquez',
        'Janeth Mattos',
        'Karina Jiménez',
        'Lina Paez',
        'Matias Cortez',
        'Osiris Jiménez',
        'Patricia Nieto',
        'Samly Jiménez'
    ],
    2: [
        'Emiro Tapia',
        'Luis Robles',
        'Ernesto Echeverry',
        'José Guzmán',
        'Yovani Cervantes',
        'Adriana Valencia',
        'Evelyn Villar',
        'Jennys Isaza',
        'Luz Enith Parodi',
        'Rosalba Martinez',
        'Adriana Alfaro',
        'Deyber Echeverry',
        'Emelda López',
        'Enedys Tapia',
        'Etilvia Teheran',
        'Evelys Tafur',
        'Genys Pérez',
        'Isabella Alfaro',
        'Ivan Alfaro',
        'Kelly Julio',
        'Luz Viloria',
        'Martha Tafur',
        'Noemi Marino',
        'Norelia Flórez',
        'Ramiro Alfaro',
        'Saray Alfaro',
        'Sixta Parody',
        'Yosly Guzman'
    ],
    3: [
        'Boris Márquez | Junior',
        'Jesús Trujillo',
        'Antonio Medina',
        'Daniel Márquez',
        'Will Herrera',
        'Ana Tapia',
        'Angélica Jinete',
        'Brenda Márquez',
        'Cenith Cabrera',
        'Claudia Noriega',
        'Ruby Rodríguez',
        'Yurleidys Navarro',
        'Acela Mercado',
        'Blaider Guerrero',
        'Boris Márquez | Padre',
        'Carlos Rivera',
        'Cindy García',
        'Dina Rodelo',
        'Elena Salazar',
        'Jair Saltarín',
        'Juan Rivera',
        'Liceth Guerrero',
        'Linda Márquez',
        'María Herrera',
        'Mariana Saltarín',
        'Sarah Trujillo',
        'Vanessa Villa',
        'Yeilis Guerrero'
    ],
    4: [
        'Juan Cardenas',
        'Isaac Molina',
        'Isaac Algarin',
        'Leonardo Roa',
        'Naren Herrera',
        'Carmen Deford',
        'Cindy Solano',
        'Regina Cantillo',
        'Rosmery Molina',
        'Ana Cabrera',
        'Briceida Gonzales',
        'David Cervantes',
        'Gleiryn Herrera',
        'Karla Rodelo',
        'Katia Ávila',
        'Leidy de la Torre',
        'Ludys Mendoza',
        'Luz Escobar',
        'Margarita Ríos',
        'María Martinez',
        'María Serpa',
        'Matias Gomez Guerrero',
        'Natalia Tuñon',
        'Sandra Solano',
        'Sara Solano',
        'Sebastián Tuñon'
    ]
    // Puedes agregar más grupos aquí si los necesitas
};

// Función para normalizar nombres (quitar acentos, espacios extra, convertir a mayúsculas)
function normalizeName(name) {
    if (!name) return '';
    let normalized = name
        .trim()
        .toUpperCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Quitar acentos
        .replace(/\s*\|\s*/g, '|') // Normalizar espacios alrededor de |
        .replace(/\s+/g, ' '); // Normalizar espacios múltiples
    
    // Normalizaciones específicas de nombres
    normalized = normalized
        .replace(/SARAH\b/g, 'SARA') // Sarah -> Sara
        .replace(/YURLEYDIS/g, 'YURLEIDYS') // Yurleydis -> Yurleidys
        .replace(/YURLEIDYS/g, 'YURLEIDYS'); // Mantener consistencia
    
    return normalized;
}

// Función para comparar nombres de forma más flexible
function namesMatch(name1, name2) {
    const norm1 = normalizeName(name1);
    const norm2 = normalizeName(name2);
    
    // Coincidencia exacta
    if (norm1 === norm2) return true;
    
    // Extraer solo la parte del nombre (antes del |)
    const getBaseName = (name) => {
        if (name.includes('|')) {
            return name.split('|')[0].trim();
        }
        return name.trim();
    };
    
    const base1 = getBaseName(norm1);
    const base2 = getBaseName(norm2);
    
    // Comparar los nombres base
    if (base1 === base2) return true;
    
    // Si uno contiene al otro (para casos como "Boris Marquez" y "Boris Márquez | Padre")
    if (base1.includes(base2) || base2.includes(base1)) {
        // Asegurar que es una coincidencia real, no solo una palabra
        const parts1 = base1.split(' ').filter(p => p.length > 1);
        const parts2 = base2.split(' ').filter(p => p.length > 1);
        
        if (parts1.length >= 2 && parts2.length >= 2) {
            // Si ambos tienen al menos 2 palabras, comparar primeras palabras
            return parts1[0] === parts2[0] && (parts1[1] === parts2[1] || parts1[1].startsWith(parts2[1]) || parts2[1].startsWith(parts1[1]));
        }
        
        // Si tienen solo una palabra, debe ser exacta
        if (parts1.length === 1 && parts2.length === 1) {
            return parts1[0] === parts2[0];
        }
    }
    
    return false;
}

// Función para verificar si una persona está en la lista del grupo
function isPersonInGroupList(nombre, grupo) {
    if (!grupo || !GRUPOS_LISTAS[grupo]) {
        return null; // No hay lista para este grupo
    }
    
    const listaGrupo = GRUPOS_LISTAS[grupo];
    const nombreNormalizado = normalizeName(nombre);
    
    return listaGrupo.some(personaLista => {
        return normalizeName(personaLista) === nombreNormalizado;
    });
}

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
        
        // Inicializar filtro de mes con el mes actual si no está establecido
        const filterMes = document.getElementById('filterMes');
        if (!filterMes || filterMes.value === 'all' || !filterMes.value) {
            initializeMonthFilter();
        }
        
        // Aplicar filtros y mostrar datos (esto también actualiza las estadísticas)
        applyFilters();
        
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
    console.log(grupos);
    
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
    const filterMes = document.getElementById('filterMes').value;
    const filterGrupo = document.getElementById('filterGrupo').value;
    const filterPredico = document.getElementById('filterPredico').value;
    
    filteredData = allData.filter(item => {
        const matchGrupo = filterGrupo === 'all' || item.grupo == filterGrupo;
        const matchPredico = filterPredico === 'all' || item.predico === filterPredico;
        
        // Filtro de mes
        let matchMes = true;
        if (filterMes !== 'all' && item.timestamp) {
            try {
                const itemDate = new Date(item.timestamp);
                const mesSeleccionado = parseInt(filterMes);
                const itemMonth = itemDate.getMonth();
                const itemYear = itemDate.getFullYear();
                const currentYear = new Date().getFullYear();
                const currentMonth = new Date().getMonth();
                
                // Para el mes actual, verificar año y mes
                // Para meses anteriores, verificar solo el mes (considerando que puede ser del año actual o anterior)
                if (mesSeleccionado === currentMonth) {
                    // Si selecciona el mes actual, mostrar solo del año actual
                    matchMes = itemMonth === mesSeleccionado && itemYear === currentYear;
                } else {
                    // Para otros meses, mostrar de cualquier año que coincida con el mes
                    matchMes = itemMonth === mesSeleccionado;
                }
            } catch (e) {
                // Si hay error al parsear la fecha, no filtrar por mes
                console.warn('Error al parsear fecha:', item.timestamp, e);
                matchMes = true;
            }
        }
        
        return matchGrupo && matchPredico && matchMes;
    });
    
    // Actualizar visualización y estadísticas
    displayData();
    updateStats();
}

// Función para inicializar el filtro de mes con el mes actual
function initializeMonthFilter() {
    const filterMes = document.getElementById('filterMes');
    const currentMonth = new Date().getMonth();
    filterMes.value = currentMonth.toString();
}

// Función para mostrar los datos
function displayData() {
    const contenedor = document.getElementById('contenedor');
    
    if (filteredData.length === 0) {
        contenedor.innerHTML = '<div class="card" style="grid-column: 1 / -1; text-align: center; padding: 40px;"><p>No se encontraron datos con los filtros seleccionados.</p></div>';
        return;
    }
    
    // Ordenar datos alfabéticamente por nombre
    const sortedData = [...filteredData].sort((a, b) => {
        const nameA = normalizeName(a.nombre || '');
        const nameB = normalizeName(b.nombre || '');
        return nameA.localeCompare(nameB, 'es', { sensitivity: 'base' });
    });
    
    contenedor.innerHTML = '';
    
    sortedData.forEach(item => {
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
    const totalOk = document.getElementById('totalOk');
    const totalPending = document.getElementById('totalPending');
    
    // Calcular estadísticas básicas basadas en los datos filtrados
    // filteredData ya contiene los datos filtrados por grupo y predicación
    const stats = filteredData.reduce((acc, item) => {
        acc.horas += item.horas || 0;
        acc.revisitas += item.revisitas || 0;
        acc.estudios += item.estudios || 0;
        return acc;
    }, { horas: 0, revisitas: 0, estudios: 0 });
    
    // Total de personas es simplemente el número de registros filtrados
    const totalPersonasCount = filteredData.length;
    
    // Calcular OK y Pendientes basado en los filtros aplicados
    const filterGrupo = document.getElementById('filterGrupo').value;
    const grupoNum = filterGrupo === 'all' ? null : parseInt(filterGrupo);
    
    let okCount = 0;
    let pendingCount = 0;
    
    // Determinar qué grupos procesar
    const gruposAProcesar = grupoNum && GRUPOS_LISTAS[grupoNum] 
        ? [grupoNum] 
        : Object.keys(GRUPOS_LISTAS).map(k => parseInt(k));
    
    gruposAProcesar.forEach(grupoId => {
        if (!GRUPOS_LISTAS[grupoId]) return;
        
        const listaGrupo = GRUPOS_LISTAS[grupoId];
        // Crear un mapa para eliminar duplicados y mantener el nombre original
        const mapaPersonas = new Map();
        listaGrupo.forEach(personaLista => {
            const personaNormalizada = normalizeName(personaLista);
            if (!mapaPersonas.has(personaNormalizada)) {
                mapaPersonas.set(personaNormalizada, personaLista);
            }
        });
        
        // Para cada persona en la lista del grupo, verificar si está en filteredData
        mapaPersonas.forEach((nombreOriginal, personaNormalizada) => {
            // Buscar si esta persona está en los datos filtrados actuales
            const foundInFiltered = filteredData.some(item => {
                return parseInt(item.grupo) === grupoId && namesMatch(item.nombre, nombreOriginal);
            });
            
            if (foundInFiltered) {
                okCount++;
            } else {
                // Contar como pendiente: todas las personas de la lista que no están en filteredData
                pendingCount++;
            }
        });
    });
    
    // Actualizar todas las estadísticas
    totalPersonas.textContent = totalPersonasCount;
    totalHoras.textContent = stats.horas;
    totalRevisitas.textContent = stats.revisitas;
    totalEstudios.textContent = stats.estudios;
    totalOk.textContent = okCount;
    totalPending.textContent = pendingCount;
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

// ============================================
// MODAL DE LISTA DE PERSONAS
// ============================================

// Obtener personas OK o pendientes según el grupo filtrado
function getPersonasByStatus(status) {
    const filterGrupo = document.getElementById('filterGrupo').value;
    const grupoNum = filterGrupo === 'all' ? null : parseInt(filterGrupo);
    
    const personas = [];
    
    // Si hay un grupo específico filtrado, usar ese grupo
    if (grupoNum && GRUPOS_LISTAS[grupoNum]) {
        const listaGrupo = GRUPOS_LISTAS[grupoNum];
        const personasDelGrupoReportadas = allData.filter(item => parseInt(item.grupo) === grupoNum);
        
        // Crear un mapa para eliminar duplicados y mantener el nombre original
        const mapaPersonas = new Map();
        listaGrupo.forEach(personaLista => {
            const personaNormalizada = normalizeName(personaLista);
            if (!mapaPersonas.has(personaNormalizada)) {
                mapaPersonas.set(personaNormalizada, personaLista);
            }
        });
        
        mapaPersonas.forEach((nombreOriginal, personaNormalizada) => {
            // Buscar coincidencia usando la función flexible con los nombres originales
            const isReportada = personasDelGrupoReportadas.some(item => {
                return namesMatch(item.nombre, nombreOriginal);
            });
            
            if (status === 'ok' && isReportada) {
                personas.push({
                    nombre: nombreOriginal,
                    grupo: grupoNum,
                    reportada: true
                });
            } else if (status === 'pending' && !isReportada) {
                personas.push({
                    nombre: nombreOriginal,
                    grupo: grupoNum,
                    reportada: false
                });
            }
        });
    } else {
        // Si no hay filtro de grupo, mostrar todos los grupos
        Object.keys(GRUPOS_LISTAS).forEach(grupoKey => {
            const grupoNum = parseInt(grupoKey);
            const listaGrupo = GRUPOS_LISTAS[grupoNum];
            const personasDelGrupoReportadas = allData.filter(item => parseInt(item.grupo) === grupoNum);
            
            // Crear un mapa para eliminar duplicados y mantener el nombre original
            const mapaPersonas = new Map();
            listaGrupo.forEach(personaLista => {
                const personaNormalizada = normalizeName(personaLista);
                if (!mapaPersonas.has(personaNormalizada)) {
                    mapaPersonas.set(personaNormalizada, personaLista);
                }
            });
            
            mapaPersonas.forEach((nombreOriginal, personaNormalizada) => {
                // Buscar coincidencia usando la función flexible con los nombres originales
                const isReportada = personasDelGrupoReportadas.some(item => {
                    return namesMatch(item.nombre, nombreOriginal);
                });
                
                if (status === 'ok' && isReportada) {
                    personas.push({
                        nombre: nombreOriginal,
                        grupo: grupoNum,
                        reportada: true
                    });
                } else if (status === 'pending' && !isReportada) {
                    personas.push({
                        nombre: nombreOriginal,
                        grupo: grupoNum,
                        reportada: false
                    });
                }
            });
        });
    }
    
    return personas;
}

// Mostrar modal con lista de personas
function showListModal(status) {
    const modal = document.getElementById('listModal');
    const modalTitle = document.getElementById('listModalTitle');
    const modalContent = document.getElementById('listModalContent');
    
    const personas = getPersonasByStatus(status);
    const filterGrupo = document.getElementById('filterGrupo').value;
    
    // Configurar título
    if (status === 'ok') {
        modalTitle.textContent = filterGrupo === 'all' 
            ? '✓ Personas que han Reportado' 
            : `✓ Personas del Grupo ${filterGrupo} que han Reportado`;
    } else {
        modalTitle.textContent = filterGrupo === 'all' 
            ? '⚠ Personas Pendientes por Reportar' 
            : `⚠ Personas del Grupo ${filterGrupo} Pendientes por Reportar`;
    }
    
    // Generar contenido
    if (personas.length === 0) {
        modalContent.innerHTML = '<div class="person-list-item empty">No hay personas en esta categoría</div>';
    } else {
        // Agrupar por grupo si no hay filtro
        if (filterGrupo === 'all') {
            const grouped = {};
            personas.forEach(persona => {
                if (!grouped[persona.grupo]) {
                    grouped[persona.grupo] = [];
                }
                grouped[persona.grupo].push(persona);
            });
            
            let html = '';
            Object.keys(grouped).sort().forEach(grupo => {
                html += `<div class="person-list-group">
                    <div class="person-list-group-title">Grupo ${grupo}</div>`;
                grouped[grupo].forEach(persona => {
                    html += `<div class="person-list-item">${persona.nombre}</div>`;
                });
                html += '</div>';
            });
            modalContent.innerHTML = html;
        } else {
            // Lista simple si hay filtro de grupo
            let html = '';
            personas.forEach(persona => {
                html += `<div class="person-list-item">${persona.nombre}</div>`;
            });
            modalContent.innerHTML = html;
        }
    }
    
    // Mostrar modal
    modal.classList.remove('hidden');
}

// Ocultar modal
function hideListModal() {
    const modal = document.getElementById('listModal');
    modal.classList.add('hidden');
}

// ============================================
// EVENT LISTENERS PRINCIPALES
// ============================================

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar autenticación
    initAuth();
    
    // Inicializar filtro de mes con el mes actual por defecto
    initializeMonthFilter();
    
    // Event listeners principales
    document.getElementById('btnRefresh').addEventListener('click', fetchData);
    document.getElementById('filterMes').addEventListener('change', applyFilters);
    document.getElementById('filterGrupo').addEventListener('change', applyFilters);
    document.getElementById('filterPredico').addEventListener('change', applyFilters);
    
    // Event listeners para las tarjetas de estadísticas
    document.getElementById('statOk').addEventListener('click', () => showListModal('ok'));
    document.getElementById('statPending').addEventListener('click', () => showListModal('pending'));
    
    // Event listener para cerrar el modal
    document.getElementById('listModalClose').addEventListener('click', hideListModal);
    
    // Cerrar modal al hacer clic fuera del contenido
    document.getElementById('listModal').addEventListener('click', (e) => {
        if (e.target.id === 'listModal') {
            hideListModal();
        }
    });
});
