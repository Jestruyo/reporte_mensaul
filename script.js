// CONFIGURACIÓN: ID de la hoja de Google Sheets
const SHEET_ID = '1Z_Ri-OglzByxA1Y9KW_OapUmqdwqL58qu_NtFcAMiQs';
const SHEET_GID = '442652710'; // ID de la pestaña (gid) - más confiable que el nombre
const SHEET_TITLE = 'Respuestas de formulario 4'; // Nombre de la pestaña (alternativa)
const SHEET_RANGE = 'A2:I1000'; // Rango de datos (empezamos en A2 para omitir el encabezado)

// CONFIGURACIÓN: Código de validación (cambia este código por el que desees)
const VALIDATION_CODE = '1914';

// CONFIGURACIÓN: Usar datos locales para testing
// Cambia a true para usar los datos locales en lugar de hacer fetch a Google Sheets
const USE_LOCAL_DATA = false;  // Cambiar a true para testing local

// URL para obtener los datos en formato JSON desde Google Sheets
// Usamos gid en lugar del nombre de la pestaña para mayor confiabilidad
const FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?gid=${SHEET_GID}&range=${SHEET_RANGE}&tqx=out:json`;

// Datos locales para testing (formato de respuesta de Google Sheets)
const LOCAL_TEST_DATA = {
    "version": "0.6",
    "reqId": "0",
    "status": "ok",
    "sig": "698545273",
    "table": {
        "cols": [{
            "id": "A",
            "label": "",
            "type": "datetime",
            "pattern": "d/MM/yyyy H:mm:ss"
        }, {
            "id": "B",
            "label": "",
            "type": "string"
        }, {
            "id": "C",
            "label": "",
            "type": "number",
            "pattern": "General"
        }, {
            "id": "D",
            "label": "",
            "type": "string"
        }, {
            "id": "E",
            "label": "",
            "type": "number",
            "pattern": "General"
        }, {
            "id": "F",
            "label": "",
            "type": "number",
            "pattern": "General"
        }, {
            "id": "G",
            "label": "",
            "type": "number",
            "pattern": "General"
        }, {
            "id": "H",
            "label": "",
            "type": "number",
            "pattern": "General"
        }, {
            "id": "I",
            "label": "",
            "type": "string"
        }],
        "rows": [{
            "c": [{
                "v": "Date(2026,0,2,12,52,31)",
                "f": "2/01/2026 12:52:31"
            }, {
                "v": "Brenda Marquez"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 42.0,
                "f": "42"
            }, {
                "v": 17.0,
                "f": "17"
            }, {
                "v": 7.0,
                "f": "7"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,2,16,28,23)",
                "f": "2/01/2026 16:28:23"
            }, {
                "v": "Boris marquez | Padre"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 15.0,
                "f": "15"
            }, null, {
                "v": 1.0,
                "f": "1"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,2,16,29,46)",
                "f": "2/01/2026 16:29:47"
            }, {
                "v": "Dina Rodelo"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 10.0,
                "f": "10"
            }, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,3,17,2,25)",
                "f": "3/01/2026 17:02:26"
            }, {
                "v": "Jesus Trujillo"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 7.0,
                "f": "7"
            }, {
                "v": 2.0,
                "f": "2"
            }, {
                "v": 2.0,
                "f": "2"
            }, {
                "v": 4.0,
                "f": "4"
            }, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,5,19,13,26)",
                "f": "5/01/2026 19:13:26"
            }, {
                "v": "Yurleydis Navarro"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 30.0,
                "f": "30"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": 1.0,
                "f": "1"
            }, {
                "v": 1.0,
                "f": "1"
            }, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,6,19,1,48)",
                "f": "6/01/2026 19:01:49"
            }, {
                "v": "Jair Saltarin"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, {
                "v": 1.0,
                "f": "1"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,7,10,54,6)",
                "f": "7/01/2026 10:54:06"
            }, {
                "v": "Claudia Noriega"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 23.0,
                "f": "23"
            }, {
                "v": 8.0,
                "f": "8"
            }, {
                "v": 1.0,
                "f": "1"
            }, {
                "v": 18.0,
                "f": "18"
            }, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,7,10,55,59)",
                "f": "7/01/2026 10:56:00"
            }, {
                "v": "Will Herrera"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,7,16,10,56)",
                "f": "7/01/2026 16:10:56"
            }, {
                "v": "Cenith Cabrera"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 48.0,
                "f": "48"
            }, {
                "v": 8.0,
                "f": "8"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": 17.0,
                "f": "17"
            }, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,7,16,20,51)",
                "f": "7/01/2026 16:20:52"
            }, {
                "v": "Antonio Medina"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 16.0,
                "f": "16"
            }, null, null, {
                "v": 10.0,
                "f": "10"
            }, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,8,10,45,34)",
                "f": "8/01/2026 10:45:34"
            }, {
                "v": "Ruby Rodriguez"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 57.0,
                "f": "57"
            }, null, {
                "v": 10.0,
                "f": "10"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,9,9,10,4)",
                "f": "9/01/2026 9:10:04"
            }, {
                "v": "Ana Tapia"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 50.0,
                "f": "50"
            }, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,9,9,35,0)",
                "f": "9/01/2026 9:35:00"
            }, {
                "v": "Angelica Jinete"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 59.0,
                "f": "59"
            }, null, {
                "v": 1.0,
                "f": "1"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,9,9,46,3)",
                "f": "9/01/2026 9:46:03"
            }, {
                "v": "Linda Marquez"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,9,10,19,40)",
                "f": "9/01/2026 10:19:41"
            }, {
                "v": "Maria Herrera"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 29.0,
                "f": "29"
            }, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,9,10,23,57)",
                "f": "9/01/2026 10:23:58"
            }, {
                "v": "Mariana Saltarin"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,9,10,24,36)",
                "f": "9/01/2026 10:24:37"
            }, {
                "v": "Acela Mercado"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,9,11,36,12)",
                "f": "9/01/2026 11:36:12"
            }, {
                "v": "Vanessa Villa"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,9,14,22,50)",
                "f": "9/01/2026 14:22:50"
            }, {
                "v": "Sarah Trujillo"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,9,16,43,29)",
                "f": "9/01/2026 16:43:29"
            }, {
                "v": "Etilvia Teheran"
            }, {
                "v": 2.0,
                "f": "2"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,11,11,14,35)",
                "f": "11/01/2026 11:14:35"
            }, {
                "v": "Daniel Márquez"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, {
                "v": 1.0,
                "f": "1"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,11,11,20,13)",
                "f": "11/01/2026 11:20:13"
            }, {
                "v": "Blaider Gerrero"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,11,11,25,37)",
                "f": "11/01/2026 11:25:38"
            }, {
                "v": "Lizeht Gerrero"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,11,12,55,55)",
                "f": "11/01/2026 12:55:55"
            }, {
                "v": "Yeilis Gerrero"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,11,14,52,39)",
                "f": "11/01/2026 14:52:40"
            }, {
                "v": "Carlos Riveras"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "No prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,11,14,53,0)",
                "f": "11/01/2026 14:53:01"
            }, {
                "v": "Cindy Garcia"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "No prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,0,11,14,53,26)",
                "f": "11/01/2026 14:53:27"
            }, {
                "v": "Juan Rivera"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "No prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,3,13,28,51)",
                "f": "3/02/2026 13:28:52"
            }, {
                "v": "Brenda Marquez"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 47.0,
                "f": "47"
            }, {
                "v": 23.0,
                "f": "23"
            }, {
                "v": 7.0,
                "f": "7"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,3,22,18,4)",
                "f": "3/02/2026 22:18:05"
            }, {
                "v": "Ruby Rodriguez"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 56.0,
                "f": "56"
            }, null, {
                "v": 10.0,
                "f": "10"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,4,8,57,36)",
                "f": "4/02/2026 8:57:37"
            }, {
                "v": "Jesus Trujillo"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, {
                "v": 2.0,
                "f": "2"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,4,19,21,12)",
                "f": "4/02/2026 19:21:12"
            }, {
                "v": "Vanessa Villa"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,4,20,17,22)",
                "f": "4/02/2026 20:17:23"
            }, {
                "v": "Cindy Garcia"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,4,20,18,37)",
                "f": "4/02/2026 20:18:38"
            }, {
                "v": "Carlos Riveras"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,4,20,19,11)",
                "f": "4/02/2026 20:19:11"
            }, {
                "v": "Juan Rivera"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,4,20,21,40)",
                "f": "4/02/2026 20:21:41"
            }, {
                "v": "Angelica Jinete"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 69.0,
                "f": "69"
            }, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,4,20,24,17)",
                "f": "4/02/2026 20:24:18"
            }, {
                "v": "Angelica Jinete"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 69.0,
                "f": "69"
            }, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,4,20,25,31)",
                "f": "4/02/2026 20:25:31"
            }, {
                "v": "Lizeht Gerrero"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,4,20,26,31)",
                "f": "4/02/2026 20:26:32"
            }, {
                "v": "Ana Tapia"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 50.0,
                "f": "50"
            }, {
                "v": 4.0,
                "f": "4"
            }, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,4,20,29,23)",
                "f": "4/02/2026 20:29:23"
            }, {
                "v": "Yurleydis Navarro"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 40.0,
                "f": "40"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": 1.0,
                "f": "1"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,4,20,29,48)",
                "f": "4/02/2026 20:29:49"
            }, {
                "v": "Sarah Trujillo"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,4,20,33,4)",
                "f": "4/02/2026 20:33:05"
            }, {
                "v": "Yeilis Gerrero"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "No prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,4,20,33,42)",
                "f": "4/02/2026 20:33:42"
            }, {
                "v": "Maria Herrera"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 28.0,
                "f": "28"
            }, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,4,20,37,54)",
                "f": "4/02/2026 20:37:55"
            }, {
                "v": "Boris marquez | Padre"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 15.0,
                "f": "15"
            }, {
                "v": 2.0,
                "f": "2"
            }, {
                "v": 1.0,
                "f": "1"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,4,20,38,26)",
                "f": "4/02/2026 20:38:27"
            }, {
                "v": "Dina Rodelo"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 10.0,
                "f": "10"
            }, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,4,20,38,58)",
                "f": "4/02/2026 20:38:58"
            }, {
                "v": "Jair Saltarin"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, {
                "v": 1.0,
                "f": "1"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,4,20,39,1)",
                "f": "4/02/2026 20:39:01"
            }, {
                "v": "Linda Marquez"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,4,20,48,12)",
                "f": "4/02/2026 20:48:12"
            }, {
                "v": "Mariana Saltarin"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,5,7,58,11)",
                "f": "5/02/2026 7:58:11"
            }, {
                "v": "Ana Cabrera"
            }, {
                "v": 4.0,
                "f": "4"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 8.0,
                "f": "8"
            }, null, null, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,5,8,2,14)",
                "f": "5/02/2026 8:02:15"
            }, {
                "v": "Antonio Medina"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 14.0,
                "f": "14"
            }, null, null, {
                "v": 26.0,
                "f": "26"
            }, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,5,8,5,20)",
                "f": "5/02/2026 8:05:21"
            }, {
                "v": "Cenith Cabrera"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 52.0,
                "f": "52"
            }, {
                "v": 10.0,
                "f": "10"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": 30.0,
                "f": "30"
            }, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,5,9,37,58)",
                "f": "5/02/2026 9:37:59"
            }, {
                "v": "Acela Mercado"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,5,9,53,20)",
                "f": "5/02/2026 9:53:20"
            }, {
                "v": "Will Herrera"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,5,15,44,24)",
                "f": "5/02/2026 15:44:25"
            }, {
                "v": "Claudia Noriega"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 31.0,
                "f": "31"
            }, {
                "v": 12.0,
                "f": "12"
            }, {
                "v": 1.0,
                "f": "1"
            }, {
                "v": 21.0,
                "f": "21"
            }, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,6,8,56,58)",
                "f": "6/02/2026 8:56:58"
            }, {
                "v": "Blaider Gerrero"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,6,13,56,27)",
                "f": "6/02/2026 13:56:28"
            }, {
                "v": "Daniel Márquez"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,6,17,45,19)",
                "f": "6/02/2026 17:45:19"
            }, {
                "v": "Elena Salazar"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,1,6,23,11,5)",
                "f": "6/02/2026 23:11:05"
            }, {
                "v": "Daniel Márquez"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,1,6,30,45)",
                "f": "1/03/2026 6:30:45"
            }, {
                "v": "Maria Herrera"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 30.0,
                "f": "30"
            }, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,1,7,37,19)",
                "f": "1/03/2026 7:37:20"
            }, {
                "v": "Angelica Jinete"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 66.0,
                "f": "66"
            }, {
                "v": 1.0,
                "f": "1"
            }, {
                "v": 1.0,
                "f": "1"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,1,8,2,33)",
                "f": "1/03/2026 8:02:34"
            }, {
                "v": "Ruby Rodriguez"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 56.0,
                "f": "56"
            }, null, {
                "v": 10.0,
                "f": "10"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,1,8,14,31)",
                "f": "1/03/2026 8:14:32"
            }, {
                "v": "Lizeht Gerrero"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,1,8,59,45)",
                "f": "1/03/2026 8:59:45"
            }, {
                "v": "Vanessa Villa"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,1,9,24,39)",
                "f": "1/03/2026 9:24:40"
            }, {
                "v": "Brenda Marquez"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 49.0,
                "f": "49"
            }, {
                "v": 22.0,
                "f": "22"
            }, {
                "v": 6.0,
                "f": "6"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,1,18,57,50)",
                "f": "1/03/2026 18:57:50"
            }, {
                "v": "Claudia Noriega"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 28.0,
                "f": "28"
            }, {
                "v": 12.0,
                "f": "12"
            }, {
                "v": 2.0,
                "f": "2"
            }, {
                "v": 8.0,
                "f": "8"
            }, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,2,7,39,52)",
                "f": "2/03/2026 7:39:52"
            }, {
                "v": "Blaider Gerrero"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,2,13,44,17)",
                "f": "2/03/2026 13:44:17"
            }, {
                "v": "Cenith Cabrera"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 51.0,
                "f": "51"
            }, {
                "v": 20.0,
                "f": "20"
            }, null, {
                "v": 24.0,
                "f": "24"
            }, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,2,13,45,32)",
                "f": "2/03/2026 13:45:32"
            }, {
                "v": "Ana Cabrera"
            }, {
                "v": 4.0,
                "f": "4"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 8.0,
                "f": "8"
            }, {
                "v": 10.0,
                "f": "10"
            }, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,2,13,46,40)",
                "f": "2/03/2026 13:46:41"
            }, {
                "v": "Antonio Medina"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 18.0,
                "f": "18"
            }, {
                "v": 4.0,
                "f": "4"
            }, {
                "v": 1.0,
                "f": "1"
            }, {
                "v": 12.0,
                "f": "12"
            }, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,2,15,52,17)",
                "f": "2/03/2026 15:52:17"
            }, {
                "v": "Jesus Trujillo"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, {
                "v": 2.0,
                "f": "2"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,2,15,52,38)",
                "f": "2/03/2026 15:52:39"
            }, {
                "v": "Sarah Trujillo"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,2,16,0,25)",
                "f": "2/03/2026 16:00:26"
            }, {
                "v": "Jair Saltarin"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, {
                "v": 1.0,
                "f": "1"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,2,16,17,55)",
                "f": "2/03/2026 16:17:56"
            }, {
                "v": "Boris marquez | Padre"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, {
                "v": 4.0,
                "f": "4"
            }, {
                "v": 1.0,
                "f": "1"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,2,16,18,28)",
                "f": "2/03/2026 16:18:29"
            }, {
                "v": "Dina Rodelo"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, {
                "v": 2.0,
                "f": "2"
            }, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,2,16,19,0)",
                "f": "2/03/2026 16:19:00"
            }, {
                "v": "Linda Marquez"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,2,18,22,42)",
                "f": "2/03/2026 18:22:43"
            }, {
                "v": "Ana Tapia"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 60.0,
                "f": "60"
            }, {
                "v": 8.0,
                "f": "8"
            }, {
                "v": 0.0,
                "f": "0"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,2,19,24,45)",
                "f": "2/03/2026 19:24:45"
            }, {
                "v": "Daniel Márquez"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, {
                "v": 1.0,
                "f": "1"
            }, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,4,22,8,55)",
                "f": "4/03/2026 22:08:56"
            }, {
                "v": "Mariana Saltarin"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,4,22,9,16)",
                "f": "4/03/2026 22:09:16"
            }, {
                "v": "Acela Mercado"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,4,22,31,41)",
                "f": "4/03/2026 22:31:41"
            }, {
                "v": "Yurleydis Navarro"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, {
                "v": 15.0,
                "f": "15"
            }, {
                "v": 2.0,
                "f": "2"
            }, {
                "v": 2.0,
                "f": "2"
            }, {
                "v": 10.0,
                "f": "10"
            }, {
                "v": null
            }]
        }, {
            "c": [{
                "v": "Date(2026,2,5,8,14,10)",
                "f": "5/03/2026 8:14:11"
            }, {
                "v": "Will Herrera"
            }, {
                "v": 3.0,
                "f": "3"
            }, {
                "v": "Si prediqué"
            }, null, null, null, null, {
                "v": null
            }]
        }],
        "parsedNumHeaders": 0
    }
};

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
        'Boris marquez | Junior',
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
        'Blaider Gerrero',
        'Boris marquez | Padre',
        'Carlos Rivera',
        'Cindy García',
        'Dina Rodelo',
        'Elena Salazar',
        'Jair Saltarín',
        'Juan Rivera',
        'Lizeht Gerrero',
        'Linda Márquez',
        'María Herrera',
        'Mariana Saltarín',
        'Sarah Trujillo',
        'Vanessa Villa',
        'Yeilis Gerrero'
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
    
    // Extraer parte del nombre (antes del |) y rol/sufijo (después del |) si existe
    const getBaseName = (name) => {
        if (name.includes('|')) {
            return name.split('|')[0].trim();
        }
        return name.trim();
    };
    const getSuffix = (name) => {
        if (name.includes('|')) {
            return name.split('|').slice(1).join('|').trim();
        }
        return '';
    };
    
    const base1 = getBaseName(norm1);
    const base2 = getBaseName(norm2);
    const suffix1 = getSuffix(norm1);
    const suffix2 = getSuffix(norm2);
    
    // Si ambos tienen rol/sufijo (ej. "Padre" vs "Junior"), deben coincidir para ser la misma persona
    if (suffix1 && suffix2 && suffix1 !== suffix2) {
        return false; // Mismo nombre base pero distinto rol = personas distintas
    }
    
    // Comparar los nombres base (cuando no hay conflicto de roles)
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

// Función para parsear el formato Date de Google Sheets
// Convierte "Date(2026,0,2,12,52,31)" o timestamp Unix a un objeto Date
function parseGoogleSheetsDate(dateValue) {
    if (!dateValue && dateValue !== 0) return null;
    
    // Si ya es un objeto Date, devolverlo
    if (dateValue instanceof Date) {
        return dateValue;
    }
    
    // Si es un número, puede ser un timestamp de Unix (milliseconds)
    if (typeof dateValue === 'number') {
        try {
            const date = new Date(dateValue);
            if (!isNaN(date.getTime())) {
                return date;
            }
        } catch (e) {
            console.warn('Error al parsear timestamp numérico:', dateValue, e);
        }
    }
    
    // Si es un string con formato "Date(2026,0,2,12,52,31)"
    if (typeof dateValue === 'string' && dateValue.startsWith('Date(')) {
        try {
            // Extraer los parámetros: Date(año, mes, día, hora, minuto, segundo)
            const match = dateValue.match(/Date\((\d+),(\d+),(\d+)(?:,(\d+))?(?:,(\d+))?(?:,(\d+))?\)/);
            if (match) {
                const year = parseInt(match[1]);
                const month = parseInt(match[2]); // 0-11 en JavaScript
                const day = parseInt(match[3]);
                const hour = match[4] ? parseInt(match[4]) : 0;
                const minute = match[5] ? parseInt(match[5]) : 0;
                const second = match[6] ? parseInt(match[6]) : 0;
                
                return new Date(year, month, day, hour, minute, second);
            }
        } catch (e) {
            console.warn('Error al parsear formato Date de Google Sheets:', dateValue, e);
        }
    }
    
    // Intentar parseo estándar como fallback (para strings ISO, etc.)
    if (typeof dateValue === 'string') {
        try {
            const date = new Date(dateValue);
            if (!isNaN(date.getTime())) {
                return date;
            }
        } catch (e) {
            console.warn('Error al parsear fecha:', dateValue, e);
        }
    }
    
    return null;
}

// Función para formatear fecha
function formatDate(dateValue) {
    if (!dateValue) return '';
    try {
        const date = dateValue instanceof Date ? dateValue : parseGoogleSheetsDate(dateValue);
        if (!date || isNaN(date.getTime())) {
            return '';
        }
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch (e) {
        return '';
    }
}

// Función para procesar datos (ya sea de Google Sheets o locales)
function processData(jsonData) {
    const rows = jsonData.table.rows;
    
    // Procesar los datos
    allData = rows.map((row, index) => {
        const cells = row.c;
        const timestampValue = cells[0]?.v || '';
        // Parsear el timestamp correctamente desde el formato de Google Sheets
        const parsedDate = parseGoogleSheetsDate(timestampValue);
        
        return {
            timestamp: parsedDate, // Guardar como objeto Date
            timestampOriginal: timestampValue, // Guardar original para referencia
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
    // Actualizar lista de personas para la pestaña de estadísticas individual
    updatePersonDropdown();
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
        let jsonData;
        
        // Si USE_LOCAL_DATA está activado, usar datos locales
        if (USE_LOCAL_DATA) {
            console.log('📦 Usando datos locales para testing...');
            jsonData = LOCAL_TEST_DATA;
        } else {
            // Hacer fetch a Google Sheets
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
            
            jsonData = JSON.parse(jsonMatch[1]);
        }
        
        // Procesar los datos (común para ambos casos)
        processData(jsonData);
        
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

// Función auxiliar para aplicar filtro de mes a un item
function matchMonthFilter(item, filterMes) {
    if (filterMes === 'all' || !item.timestamp) {
        return true;
    }
    
    try {
        // El timestamp ya debería ser un objeto Date parseado
        let itemDate = item.timestamp;
        
        // Si no es un Date, intentar parsearlo
        if (!(itemDate instanceof Date)) {
            itemDate = parseGoogleSheetsDate(item.timestamp);
        }
        
        if (!itemDate || isNaN(itemDate.getTime())) {
            return false; // Si la fecha no es válida, filtrar (no mostrar)
        }
        
        const mesSeleccionado = parseInt(filterMes);
        const itemMonth = itemDate.getMonth();
        const itemYear = itemDate.getFullYear();
        const currentYear = new Date().getFullYear();
        
        // Siempre comparar año y mes del año actual para evitar mostrar datos de meses incorrectos
        // Esto asegura que si seleccionas febrero, solo muestre datos de febrero del año actual
        return itemMonth === mesSeleccionado && itemYear === currentYear;
    } catch (e) {
        console.warn('Error al parsear fecha:', item.timestamp, e);
        return false; // Si hay error, filtrar (no mostrar)
    }
}

// Función para aplicar filtros
function applyFilters() {
    const filterMes = document.getElementById('filterMes').value;
    const filterGrupo = document.getElementById('filterGrupo').value;
    const filterPredico = document.getElementById('filterPredico').value;
    
    filteredData = allData.filter(item => {
        const matchGrupo = filterGrupo === 'all' || item.grupo == filterGrupo;
        const matchPredico = filterPredico === 'all' || item.predico === filterPredico;
        const matchMes = matchMonthFilter(item, filterMes);
        
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
        
        const predicoClass = item.predico === 'Si prediqué' ? 'yes' : 'no';
        
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
    
    // Calcular OK y Pendientes basado en los filtros aplicados (grupo y mes, pero no predicación)
    // Esto permite ver quién reportó o no en el mes, independientemente de si predicó
    const filterGrupo = document.getElementById('filterGrupo').value;
    const filterMes = document.getElementById('filterMes').value;
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
        
        // Filtrar datos del grupo aplicando solo filtros de grupo y mes (no predicación)
        // Esto es importante para OK/Pendientes: queremos saber quién reportó en el mes,
        // independientemente de si predicó o no
        const datosDelGrupoYMes = allData.filter(item => {
            const matchGrupo = parseInt(item.grupo) === grupoId;
            const matchMes = matchMonthFilter(item, filterMes);
            return matchGrupo && matchMes;
        });
        
        // Crear un mapa para eliminar duplicados y mantener el nombre original
        const mapaPersonas = new Map();
        listaGrupo.forEach(personaLista => {
            const personaNormalizada = normalizeName(personaLista);
            if (!mapaPersonas.has(personaNormalizada)) {
                mapaPersonas.set(personaNormalizada, personaLista);
            }
        });
        
        // Para cada persona en la lista del grupo, verificar si reportó en el mes filtrado
        mapaPersonas.forEach((nombreOriginal, personaNormalizada) => {
            // Buscar si esta persona reportó en el mes filtrado (sin importar si predicó)
            const foundInMonth = datosDelGrupoYMes.some(item => {
                return namesMatch(item.nombre, nombreOriginal);
            });
            
            if (foundInMonth) {
                okCount++;
            } else {
                // Contar como pendiente: personas de la lista que no reportaron en el mes filtrado
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
// PESTAÑAS Y ESTADÍSTICAS INDIVIDUAL
// ============================================

// Actualizar dropdown de personas con nombres únicos (usando nombre mostrado como en los datos)
function updatePersonDropdown() {
    const select = document.getElementById('queryPersona');
    if (!select) return;
    select.innerHTML = '<option value="">-- Selecciona una persona --</option>';
    const seen = new Map(); // normalized -> display name
    allData.forEach(item => {
        const name = (item.nombre || '').trim();
        if (!name) return;
        const norm = normalizeName(name);
        if (!seen.has(norm)) seen.set(norm, name);
    });
    const sorted = [...seen.values()].sort((a, b) => normalizeName(a).localeCompare(normalizeName(b), 'es', { sensitivity: 'base' }));
    sorted.forEach(name => {
        const opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        select.appendChild(opt);
    });
}

// Establecer fechas por defecto (primer día del mes actual hasta hoy)
function setDefaultDateRange() {
    const hoy = new Date();
    const primero = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
    const desde = document.getElementById('queryFechaDesde');
    const hasta = document.getElementById('queryFechaHasta');
    if (desde && !desde.value) desde.value = formatDateInput(primero);
    if (hasta && !hasta.value) hasta.value = formatDateInput(hoy);
}

function formatDateInput(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
}

// Filtrar datos por persona y rango de fechas
function getDataForPersonInRange(nombreSeleccionado, fechaDesde, fechaHasta) {
    const from = new Date(fechaDesde);
    const to = new Date(fechaHasta);
    to.setHours(23, 59, 59, 999);
    return allData.filter(item => {
        if (!namesMatch(item.nombre, nombreSeleccionado)) return false;
        const t = item.timestamp;
        if (!t) return false;
        const d = t instanceof Date ? t : parseGoogleSheetsDate(t);
        if (!d || isNaN(d.getTime())) return false;
        return d >= from && d <= to;
    });
}

// Agregar estadísticas por mes para una persona en un rango (solo meses con reportes)
function getMonthlyStatsForPerson(nombreSeleccionado, fechaDesde, fechaHasta) {
    const from = new Date(fechaDesde);
    const to = new Date(fechaHasta);
    to.setHours(23, 59, 59, 999);
    const data = allData.filter(item => {
        if (!namesMatch(item.nombre, nombreSeleccionado)) return false;
        const t = item.timestamp;
        if (!t) return false;
        const d = t instanceof Date ? t : parseGoogleSheetsDate(t);
        if (!d || isNaN(d.getTime())) return false;
        return d >= from && d <= to;
    });
    const byMonth = {}; // key: "YYYY-MM"
    const add = (year, month, item) => {
        const key = `${year}-${String(month + 1).padStart(2, '0')}`;
        if (!byMonth[key]) {
            byMonth[key] = { label: getMonthName(month) + ' ' + year, reporto: 0, predico: false, horas: 0, revisitas: 0, estudios: 0 };
        }
        byMonth[key].reporto += 1;
        if (item.predico === 'Si prediqué') byMonth[key].predico = true;
        byMonth[key].horas += item.horas || 0;
        byMonth[key].revisitas += item.revisitas || 0;
        byMonth[key].estudios += item.estudios || 0;
    };
    data.forEach(item => {
        const d = item.timestamp instanceof Date ? item.timestamp : parseGoogleSheetsDate(item.timestamp);
        if (d) add(d.getFullYear(), d.getMonth(), item);
    });
    const keys = Object.keys(byMonth).sort();
    return { data, byMonth: keys.map(k => ({ key: k, ...byMonth[k] })) };
}

// Todos los meses del rango con estado de predicación: predicó (al menos un "Si prediqué") o no (sin reporte o solo "No prediqué")
function getAllMonthsWithPredico(nombreSeleccionado, fechaDesde, fechaHasta) {
    const monthsInRange = getMonthsInRange(fechaDesde, fechaHasta);
    const monthly = getMonthlyStatsForPerson(nombreSeleccionado, fechaDesde, fechaHasta);
    const mapByKey = {};
    monthly.byMonth.forEach(m => { mapByKey[m.key] = m; });
    return monthsInRange.map(m => {
        const info = mapByKey[m.key];
        if (!info) {
            return { key: m.key, label: m.label, reporto: false, predico: false, horas: 0, revisitas: 0, estudios: 0 };
        }
        return { key: m.key, label: m.label, reporto: info.reporto > 0, predico: !!info.predico, horas: info.horas || 0, revisitas: info.revisitas || 0, estudios: info.estudios || 0 };
    });
}

// Obtener todos los meses en el rango (para gráfica de cumplimiento: reportó o no)
function getMonthsInRange(fechaDesde, fechaHasta) {
    const from = new Date(fechaDesde);
    const to = new Date(fechaHasta);
    const months = [];
    const cur = new Date(from.getFullYear(), from.getMonth(), 1);
    const end = new Date(to.getFullYear(), to.getMonth(), 1);
    while (cur <= end) {
        months.push({
            key: `${cur.getFullYear()}-${String(cur.getMonth() + 1).padStart(2, '0')}`,
            label: getMonthName(cur.getMonth()) + ' ' + cur.getFullYear()
        });
        cur.setMonth(cur.getMonth() + 1);
    }
    return months;
}

let chartCumplimientoInstance = null;
let chartValoresInstance = null;

function renderIndividualResults(nombreSeleccionado, fechaDesde, fechaHasta) {
    const registros = getDataForPersonInRange(nombreSeleccionado, fechaDesde, fechaHasta);
    const resultsDiv = document.getElementById('individualResults');
    const emptyDiv = document.getElementById('individualEmpty');
    const titleEl = document.getElementById('individualResultsTitle');
    const cardsEl = document.getElementById('individualStatsCards');
    const detailEl = document.getElementById('individualDetail');
    if (!resultsDiv || !emptyDiv) return;
    if (registros.length === 0) {
        resultsDiv.classList.add('hidden');
        emptyDiv.classList.remove('hidden');
        emptyDiv.innerHTML = '<p>No hay registros para <strong>' + escapeHtml(nombreSeleccionado) + '</strong> en el rango seleccionado.</p>';
        return;
    }
    emptyDiv.classList.add('hidden');
    resultsDiv.classList.remove('hidden');
    const totalHoras = registros.reduce((s, r) => s + (r.horas || 0), 0);
    const totalRevisitas = registros.reduce((s, r) => s + (r.revisitas || 0), 0);
    const totalEstudios = registros.reduce((s, r) => s + (r.estudios || 0), 0);
    const totalPublicaciones = registros.reduce((s, r) => s + (extractNumber(r.publicaciones) || 0), 0);
    const vecesReporto = registros.length;
    const vecesPredico = registros.filter(r => r.predico === 'Si prediqué').length;

    // Todos los meses del rango con estado: predicó (al menos un "Si prediqué") o no
    const allMonths = getAllMonthsWithPredico(nombreSeleccionado, fechaDesde, fechaHasta);
    const mesesEnRango = allMonths.length;
    const mesesQuePredico = allMonths.filter(m => m.predico).length;
    const mesesNoPredico = allMonths.filter(m => !m.predico).length;
    const mesesNoPredicoLabels = allMonths.filter(m => !m.predico).map(m => m.label);

    const desdeStr = new Date(fechaDesde).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
    const hastaStr = new Date(fechaHasta).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
    titleEl.textContent = nombreSeleccionado + ' — ' + desdeStr + ' a ' + hastaStr;
    cardsEl.innerHTML = `
        <div class="individual-stat-card"><span class="value">${vecesReporto}</span><span class="label">Reportes</span></div>
        <div class="individual-stat-card"><span class="value">${totalHoras}</span><span class="label">Horas</span></div>
        <div class="individual-stat-card"><span class="value">${totalRevisitas}</span><span class="label">Revisitas</span></div>
        <div class="individual-stat-card"><span class="value">${totalEstudios}</span><span class="label">Estudios</span></div>
        <div class="individual-stat-card"><span class="value">${totalPublicaciones}</span><span class="label">Publicaciones</span></div>
        <div class="individual-stat-card"><span class="value">${vecesPredico}</span><span class="label">Veces que predicó</span></div>
        <div class="individual-stat-card"><span class="value">${mesesEnRango}</span><span class="label">Meses en rango</span></div>
        <div class="individual-stat-card"><span class="value">${mesesQuePredico}</span><span class="label">Meses que predicó</span></div>
        <div class="individual-stat-card individual-stat-card-danger"><span class="value">${mesesNoPredico}</span><span class="label">Meses que no predicó</span></div>
    `;
    // Gráfica de cumplimiento: predicó (verde) vs no predicó (rojo) por mes
    const labelsCumplimiento = allMonths.map(m => m.label);
    const dataCumplimiento = allMonths.map(m => m.predico ? 1 : 0);
    const colorsCumplimiento = allMonths.map(m => m.predico ? 'rgba(34, 197, 94, 0.8)' : 'rgba(239, 68, 68, 0.7)');
    const tooltipsCumplimiento = allMonths.map(m => {
        if (m.predico) return 'Predicó';
        if (m.reporto) return 'No predicó (reportó pero no predicó)';
        return 'No predicó (no reportó)';
    });
    if (chartCumplimientoInstance) chartCumplimientoInstance.destroy();
    const ctxCumpl = document.getElementById('chartCumplimiento');
    if (ctxCumpl) {
        chartCumplimientoInstance = new Chart(ctxCumpl.getContext('2d'), {
            type: 'bar',
            data: {
                labels: labelsCumplimiento,
                datasets: [{
                    label: 'Predicó',
                    data: dataCumplimiento,
                    backgroundColor: colorsCumplimiento,
                    borderColor: allMonths.map(m => m.predico ? '#16a34a' : '#dc2626'),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(ctx) {
                                return tooltipsCumplimiento[ctx.dataIndex] || (ctx.raw === 1 ? 'Predicó' : 'No predicó');
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        min: 0,
                        max: 1,
                        ticks: { stepSize: 1, callback: v => v === 1 ? 'Sí predicó' : 'No predicó' }
                    }
                }
            }
        });
    }
    // Gráfica de valores: todos los meses del rango (0 si no reportó)
    const labelsValores = allMonths.map(m => m.label);
    if (chartValoresInstance) chartValoresInstance.destroy();
    const ctxVal = document.getElementById('chartValores');
    if (ctxVal) {
        chartValoresInstance = new Chart(ctxVal.getContext('2d'), {
            type: 'bar',
            data: {
                labels: labelsValores,
                datasets: [
                    { label: 'Horas', data: allMonths.map(m => m.horas), backgroundColor: 'rgba(59, 130, 246, 0.7)', borderColor: '#2563eb', borderWidth: 1 },
                    { label: 'Revisitas', data: allMonths.map(m => m.revisitas), backgroundColor: 'rgba(168, 85, 247, 0.7)', borderColor: '#7c3aed', borderWidth: 1 },
                    { label: 'Estudios', data: allMonths.map(m => m.estudios), backgroundColor: 'rgba(34, 197, 94, 0.7)', borderColor: '#16a34a', borderWidth: 1 }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    x: { stacked: false },
                    y: { beginAtZero: true, stacked: false }
                }
            }
        });
    }
    let detailHtml = '';
    if (mesesNoPredico > 0) {
        detailHtml += '<p class="individual-meses-no-predico"><strong>Meses que no predicó (' + mesesNoPredico + '):</strong> <span class="meses-lista-roja">' + escapeHtml(mesesNoPredicoLabels.join(', ')) + '</span></p>';
    }
    detailHtml += '<h4>Detalle de reportes</h4><table><thead><tr><th>Fecha</th><th>Predicó</th><th>Horas</th><th>Revisitas</th><th>Estudios</th><th>Publicaciones</th></tr></thead><tbody>';
    let tableHtml = detailHtml;
    registros.sort((a, b) => (a.timestamp && b.timestamp) ? (new Date(a.timestamp) - new Date(b.timestamp)) : 0).forEach(r => {
        const fecha = formatDate(r.timestamp);
        tableHtml += '<tr>';
        tableHtml += '<td>' + escapeHtml(fecha) + '</td>';
        const noPredico = r.predico === 'No prediqué';
        tableHtml += '<td' + (noPredico ? ' class="cell-no-predico"' : '') + '>' + escapeHtml(r.predico || '-') + '</td>';
        tableHtml += '<td>' + (r.horas || 0) + '</td>';
        tableHtml += '<td>' + (r.revisitas || 0) + '</td>';
        tableHtml += '<td>' + (r.estudios || 0) + '</td>';
        tableHtml += '<td>' + (r.publicaciones || '-') + '</td>';
        tableHtml += '</tr>';
    });
    tableHtml += '</tbody></table>';
    detailEl.innerHTML = tableHtml;
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabReporte = document.getElementById('tabReporte');
    const tabIndividual = document.getElementById('tabIndividual');
    if (!tabReporte || !tabIndividual || tabBtns.length === 0) return;

    function showPanel(panelToShow) {
        tabReporte.classList.remove('active');
        tabIndividual.classList.remove('active');
        tabReporte.style.display = 'none';
        tabIndividual.style.display = 'none';
        if (panelToShow === 'reporte') {
            tabReporte.classList.add('active');
            tabReporte.style.display = 'block';
            document.body.classList.remove('tab-individual');
        } else {
            tabIndividual.classList.add('active');
            tabIndividual.style.display = 'block';
            document.body.classList.add('tab-individual');
            setDefaultDateRange();
        }
    }

    // Estado inicial: mostrar Reporte General
    tabIndividual.style.display = 'none';
    tabReporte.style.display = 'block';

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const tab = this.getAttribute('data-tab');
            if (!tab) return;
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            showPanel(tab);
        });
    });
}

// ============================================
// MODAL DE LISTA DE PERSONAS
// ============================================

// Obtener personas OK o pendientes según el grupo filtrado
function getPersonasByStatus(status) {
    const filterGrupo = document.getElementById('filterGrupo').value;
    const filterMes = document.getElementById('filterMes').value;
    const grupoNum = filterGrupo === 'all' ? null : parseInt(filterGrupo);
    
    const personas = [];
    
    // Determinar qué grupos procesar
    const gruposAProcesar = grupoNum && GRUPOS_LISTAS[grupoNum] 
        ? [grupoNum] 
        : Object.keys(GRUPOS_LISTAS).map(k => parseInt(k));
    
    gruposAProcesar.forEach(grupoId => {
        if (!GRUPOS_LISTAS[grupoId]) return;
        
        const listaGrupo = GRUPOS_LISTAS[grupoId];
        
        // Filtrar datos del grupo aplicando el filtro de mes (no filtro de predicación para OK/Pendientes)
        // Esto permite ver quién reportó o no en el mes seleccionado, independientemente de si predicó
        const personasDelGrupoFiltradas = allData.filter(item => {
            return parseInt(item.grupo) === grupoId && matchMonthFilter(item, filterMes);
        });
        
        // Crear un mapa para eliminar duplicados y mantener el nombre original
        const mapaPersonas = new Map();
        listaGrupo.forEach(personaLista => {
            const personaNormalizada = normalizeName(personaLista);
            if (!mapaPersonas.has(personaNormalizada)) {
                mapaPersonas.set(personaNormalizada, personaLista);
            }
        });
        
        mapaPersonas.forEach((nombreOriginal, personaNormalizada) => {
            // Buscar si esta persona reportó en el mes filtrado
            const isReportada = personasDelGrupoFiltradas.some(item => {
                return namesMatch(item.nombre, nombreOriginal);
            });
            
            if (status === 'ok' && isReportada) {
                personas.push({
                    nombre: nombreOriginal,
                    grupo: grupoId,
                    reportada: true
                });
            } else if (status === 'pending' && !isReportada) {
                personas.push({
                    nombre: nombreOriginal,
                    grupo: grupoId,
                    reportada: false
                });
            }
        });
    });
    
    return personas;
}

// Función para obtener el nombre del mes en español
function getMonthName(monthIndex) {
    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    return meses[parseInt(monthIndex)] || '';
}

// Función para obtener estudios agrupados por grupo según los filtros aplicados
function getEstudiosByGrupo() {
    const filterGrupo = document.getElementById('filterGrupo').value;
    const filterMes = document.getElementById('filterMes').value;
    const filterPredico = document.getElementById('filterPredico').value;
    const grupoNum = filterGrupo === 'all' ? null : parseInt(filterGrupo);
    
    // Objeto para almacenar estudios por grupo
    const estudiosPorGrupo = {};
    
    // Determinar qué grupos procesar
    const gruposAProcesar = grupoNum && GRUPOS_LISTAS[grupoNum] 
        ? [grupoNum] 
        : Object.keys(GRUPOS_LISTAS).map(k => parseInt(k));
    
    gruposAProcesar.forEach(grupoId => {
        // Filtrar datos del grupo aplicando todos los filtros
        const datosDelGrupo = allData.filter(item => {
            const matchGrupo = parseInt(item.grupo) === grupoId;
            const matchMes = matchMonthFilter(item, filterMes);
            const matchPredico = filterPredico === 'all' || item.predico === filterPredico;
            
            return matchGrupo && matchMes && matchPredico;
        });
        
        // Sumar estudios del grupo
        const totalEstudiosGrupo = datosDelGrupo.reduce((sum, item) => {
            return sum + (item.estudios || 0);
        }, 0);
        
        // Contar solo las personas que reportaron estudios (estudios > 0)
        const cantidadPersonasConEstudios = datosDelGrupo.filter(item => {
            return (item.estudios || 0) > 0;
        }).length;
        
        // Mostrar grupo si tiene estudios, o si hay un filtro específico de grupo (para mostrar 0)
        if (totalEstudiosGrupo > 0 || (filterGrupo !== 'all' && grupoNum === grupoId)) {
            estudiosPorGrupo[grupoId] = {
                grupo: grupoId,
                total: totalEstudiosGrupo,
                cantidad: cantidadPersonasConEstudios
            };
        }
    });
    
    return estudiosPorGrupo;
}

// Función para obtener revisitas agrupadas por grupo según los filtros aplicados
function getRevisitasByGrupo() {
    const filterGrupo = document.getElementById('filterGrupo').value;
    const filterMes = document.getElementById('filterMes').value;
    const filterPredico = document.getElementById('filterPredico').value;
    const grupoNum = filterGrupo === 'all' ? null : parseInt(filterGrupo);
    
    // Objeto para almacenar revisitas por grupo
    const revisitasPorGrupo = {};
    
    // Determinar qué grupos procesar
    const gruposAProcesar = grupoNum && GRUPOS_LISTAS[grupoNum] 
        ? [grupoNum] 
        : Object.keys(GRUPOS_LISTAS).map(k => parseInt(k));
    
    gruposAProcesar.forEach(grupoId => {
        // Filtrar datos del grupo aplicando todos los filtros
        const datosDelGrupo = allData.filter(item => {
            const matchGrupo = parseInt(item.grupo) === grupoId;
            const matchMes = matchMonthFilter(item, filterMes);
            const matchPredico = filterPredico === 'all' || item.predico === filterPredico;
            
            return matchGrupo && matchMes && matchPredico;
        });
        
        // Sumar revisitas del grupo
        const totalRevisitasGrupo = datosDelGrupo.reduce((sum, item) => {
            return sum + (item.revisitas || 0);
        }, 0);
        
        // Contar solo las personas que reportaron revisitas (revisitas > 0)
        const cantidadPersonasConRevisitas = datosDelGrupo.filter(item => {
            return (item.revisitas || 0) > 0;
        }).length;
        
        // Mostrar grupo si tiene revisitas, o si hay un filtro específico de grupo (para mostrar 0)
        if (totalRevisitasGrupo > 0 || (filterGrupo !== 'all' && grupoNum === grupoId)) {
            revisitasPorGrupo[grupoId] = {
                grupo: grupoId,
                total: totalRevisitasGrupo,
                cantidad: cantidadPersonasConRevisitas
            };
        }
    });
    
    return revisitasPorGrupo;
}

// Función para obtener horas agrupadas por grupo según los filtros aplicados
function getHorasByGrupo() {
    const filterGrupo = document.getElementById('filterGrupo').value;
    const filterMes = document.getElementById('filterMes').value;
    const filterPredico = document.getElementById('filterPredico').value;
    const grupoNum = filterGrupo === 'all' ? null : parseInt(filterGrupo);
    
    // Objeto para almacenar horas por grupo
    const horasPorGrupo = {};
    
    // Determinar qué grupos procesar
    const gruposAProcesar = grupoNum && GRUPOS_LISTAS[grupoNum] 
        ? [grupoNum] 
        : Object.keys(GRUPOS_LISTAS).map(k => parseInt(k));
    
    gruposAProcesar.forEach(grupoId => {
        // Filtrar datos del grupo aplicando todos los filtros
        const datosDelGrupo = allData.filter(item => {
            const matchGrupo = parseInt(item.grupo) === grupoId;
            const matchMes = matchMonthFilter(item, filterMes);
            const matchPredico = filterPredico === 'all' || item.predico === filterPredico;
            
            return matchGrupo && matchMes && matchPredico;
        });
        
        // Sumar horas del grupo
        const totalHorasGrupo = datosDelGrupo.reduce((sum, item) => {
            return sum + (item.horas || 0);
        }, 0);
        
        // Contar solo las personas que reportaron horas (horas > 0)
        const cantidadPersonasConHoras = datosDelGrupo.filter(item => {
            return (item.horas || 0) > 0;
        }).length;
        
        // Mostrar grupo si tiene horas, o si hay un filtro específico de grupo (para mostrar 0)
        if (totalHorasGrupo > 0 || (filterGrupo !== 'all' && grupoNum === grupoId)) {
            horasPorGrupo[grupoId] = {
                grupo: grupoId,
                total: totalHorasGrupo,
                cantidad: cantidadPersonasConHoras
            };
        }
    });
    
    return horasPorGrupo;
}

// Función para mostrar modal con estudios por grupo
function showEstudiosModal() {
    const modal = document.getElementById('listModal');
    const modalTitle = document.getElementById('listModalTitle');
    const modalContent = document.getElementById('listModalContent');
    
    const estudiosPorGrupo = getEstudiosByGrupo();
    const filterGrupo = document.getElementById('filterGrupo').value;
    const filterMes = document.getElementById('filterMes').value;
    const filterPredico = document.getElementById('filterPredico').value;
    
    // Configurar título con información del mes y grupo
    const mesNombre = filterMes !== 'all' ? getMonthName(filterMes) : 'Todos los meses';
    const grupoTexto = filterGrupo === 'all' ? 'todos los grupos' : `Grupo ${filterGrupo}`;
    const predicoTexto = filterPredico === 'all' ? '' : (filterPredico === 'Si prediqué' ? ' que predicaron' : ' que no predicaron');
    
    let titulo = `📚 Estudios  ${grupoTexto}${predicoTexto}`;
    if (filterMes !== 'all') {
        titulo += ` en ${mesNombre}`;
    }
    
    modalTitle.textContent = titulo;
    
    // Generar contenido
    const gruposArray = Object.keys(estudiosPorGrupo).map(k => estudiosPorGrupo[k]);
    
    if (gruposArray.length === 0) {
        modalContent.innerHTML = '<div class="person-list-item empty">No hay estudios registrados con los filtros seleccionados</div>';
    } else {
        // Ordenar por grupo
        gruposArray.sort((a, b) => a.grupo - b.grupo);
        
        let html = '';
        gruposArray.forEach(item => {
            html += `<div class="person-list-group">
                <div class="person-list-group-title">Grupo ${item.grupo}</div>
                <div class="person-list-item" style="display: flex; justify-content: space-between; align-items: center;">
                    <span><strong>Total de Estudios:</strong></span>
                    <span style="font-size: 1.2em; color: #2563eb; font-weight: bold;">${item.total}</span>
                </div>
                <div class="person-list-item" style="font-size: 0.9em; color: #666; padding-top: 5px;">
                    ${item.cantidad} ${item.cantidad === 1 ? 'persona reportó' : 'personas reportaron'}
                </div>
            </div>`;
        });
        
        // Agregar total general si hay múltiples grupos
        if (filterGrupo === 'all' && gruposArray.length > 1) {
            const totalGeneral = gruposArray.reduce((sum, item) => sum + item.total, 0);
            html = `<div class="person-list-group" style="background: #f0f7ff; border-left: 4px solid #2563eb; padding: 15px; margin-bottom: 20px; border-radius: 8px;">
                <div class="person-list-group-title" style="font-size: 1.2em; margin-bottom: 10px;">Total General</div>
                <div style="font-size: 1.5em; color: #2563eb; font-weight: bold; text-align: center;">${totalGeneral} Estudios</div>
            </div>` + html;
        }
        
        modalContent.innerHTML = html;
    }
    
    // Mostrar modal
    modal.classList.remove('hidden');
    // Prevenir scroll del body en móviles
    if (window.innerWidth <= 480) {
        document.body.classList.add('modal-open');
    }
}

// Función para mostrar modal con revisitas por grupo
function showRevisitasModal() {
    const modal = document.getElementById('listModal');
    const modalTitle = document.getElementById('listModalTitle');
    const modalContent = document.getElementById('listModalContent');
    
    const revisitasPorGrupo = getRevisitasByGrupo();
    const filterGrupo = document.getElementById('filterGrupo').value;
    const filterMes = document.getElementById('filterMes').value;
    const filterPredico = document.getElementById('filterPredico').value;
    
    // Configurar título con información del mes y grupo
    const mesNombre = filterMes !== 'all' ? getMonthName(filterMes) : 'Todos los meses';
    const grupoTexto = filterGrupo === 'all' ? 'todos los grupos' : `Grupo ${filterGrupo}`;
    const predicoTexto = filterPredico === 'all' ? '' : (filterPredico === 'Si prediqué' ? ' que predicaron' : ' que no predicaron');
    
    let titulo = `🔄 Revisitas  ${grupoTexto}${predicoTexto}`;
    if (filterMes !== 'all') {
        titulo += ` en ${mesNombre}`;
    }
    
    modalTitle.textContent = titulo;
    
    // Generar contenido
    const gruposArray = Object.keys(revisitasPorGrupo).map(k => revisitasPorGrupo[k]);
    
    if (gruposArray.length === 0) {
        modalContent.innerHTML = '<div class="person-list-item empty">No hay revisitas registradas con los filtros seleccionados</div>';
    } else {
        // Ordenar por grupo
        gruposArray.sort((a, b) => a.grupo - b.grupo);
        
        let html = '';
        gruposArray.forEach(item => {
            html += `<div class="person-list-group">
                <div class="person-list-group-title">Grupo ${item.grupo}</div>
                <div class="person-list-item" style="display: flex; justify-content: space-between; align-items: center;">
                    <span><strong>Total de Revisitas:</strong></span>
                    <span style="font-size: 1.2em; color: #2563eb; font-weight: bold;">${item.total}</span>
                </div>
                <div class="person-list-item" style="font-size: 0.9em; color: #666; padding-top: 5px;">
                    ${item.cantidad} ${item.cantidad === 1 ? 'persona reportó' : 'personas reportaron'}
                </div>
            </div>`;
        });
        
        // Agregar total general si hay múltiples grupos
        if (filterGrupo === 'all' && gruposArray.length > 1) {
            const totalGeneral = gruposArray.reduce((sum, item) => sum + item.total, 0);
            html = `<div class="person-list-group" style="background: #f0f7ff; border-left: 4px solid #2563eb; padding: 15px; margin-bottom: 20px; border-radius: 8px;">
                <div class="person-list-group-title" style="font-size: 1.2em; margin-bottom: 10px;">Total General</div>
                <div style="font-size: 1.5em; color: #2563eb; font-weight: bold; text-align: center;">${totalGeneral} Revisitas</div>
            </div>` + html;
        }
        
        modalContent.innerHTML = html;
    }
    
    // Mostrar modal
    modal.classList.remove('hidden');
    // Prevenir scroll del body en móviles
    if (window.innerWidth <= 480) {
        document.body.classList.add('modal-open');
    }
}

// Función para mostrar modal con horas por grupo
function showHorasModal() {
    const modal = document.getElementById('listModal');
    const modalTitle = document.getElementById('listModalTitle');
    const modalContent = document.getElementById('listModalContent');
    
    const horasPorGrupo = getHorasByGrupo();
    const filterGrupo = document.getElementById('filterGrupo').value;
    const filterMes = document.getElementById('filterMes').value;
    const filterPredico = document.getElementById('filterPredico').value;
    
    // Configurar título con información del mes y grupo
    const mesNombre = filterMes !== 'all' ? getMonthName(filterMes) : 'Todos los meses';
    const grupoTexto = filterGrupo === 'all' ? 'todos los grupos' : `Grupo ${filterGrupo}`;
    const predicoTexto = filterPredico === 'all' ? '' : (filterPredico === 'Si prediqué' ? ' que predicaron' : ' que no predicaron');
    
    let titulo = `⏰ Horas  ${grupoTexto}${predicoTexto}`;
    if (filterMes !== 'all') {
        titulo += ` en ${mesNombre}`;
    }
    
    modalTitle.textContent = titulo;
    
    // Generar contenido
    const gruposArray = Object.keys(horasPorGrupo).map(k => horasPorGrupo[k]);
    
    if (gruposArray.length === 0) {
        modalContent.innerHTML = '<div class="person-list-item empty">No hay horas registradas con los filtros seleccionados</div>';
    } else {
        // Ordenar por grupo
        gruposArray.sort((a, b) => a.grupo - b.grupo);
        
        let html = '';
        gruposArray.forEach(item => {
            html += `<div class="person-list-group">
                <div class="person-list-group-title">Grupo ${item.grupo}</div>
                <div class="person-list-item" style="display: flex; justify-content: space-between; align-items: center;">
                    <span><strong>Total de Horas:</strong></span>
                    <span style="font-size: 1.2em; color: #2563eb; font-weight: bold;">${item.total}</span>
                </div>
                <div class="person-list-item" style="font-size: 0.9em; color: #666; padding-top: 5px;">
                    ${item.cantidad} ${item.cantidad === 1 ? 'persona reportó' : 'personas reportaron'}
                </div>
            </div>`;
        });
        
        // Agregar total general si hay múltiples grupos
        if (filterGrupo === 'all' && gruposArray.length > 1) {
            const totalGeneral = gruposArray.reduce((sum, item) => sum + item.total, 0);
            html = `<div class="person-list-group" style="background: #f0f7ff; border-left: 4px solid #2563eb; padding: 15px; margin-bottom: 20px; border-radius: 8px;">
                <div class="person-list-group-title" style="font-size: 1.2em; margin-bottom: 10px;">Total General</div>
                <div style="font-size: 1.5em; color: #2563eb; font-weight: bold; text-align: center;">${totalGeneral} Horas</div>
            </div>` + html;
        }
        
        modalContent.innerHTML = html;
    }
    
    // Mostrar modal
    modal.classList.remove('hidden');
    // Prevenir scroll del body en móviles
    if (window.innerWidth <= 480) {
        document.body.classList.add('modal-open');
    }
}

// Mostrar modal con lista de personas
function showListModal(status) {
    const modal = document.getElementById('listModal');
    const modalTitle = document.getElementById('listModalTitle');
    const modalContent = document.getElementById('listModalContent');
    
    const personas = getPersonasByStatus(status);
    const filterGrupo = document.getElementById('filterGrupo').value;
    const filterMes = document.getElementById('filterMes').value;
    
    // Configurar título con información del mes y grupo
    let titulo = '';
    const mesNombre = filterMes !== 'all' ? getMonthName(filterMes) : 'Todos los meses';
    const grupoTexto = filterGrupo === 'all' ? 'todos los grupos' : `Grupo ${filterGrupo}`;
    
    if (status === 'ok') {
        titulo = `✓ Personas del ${grupoTexto} que han Reportado`;
        if (filterMes !== 'all') {
            titulo += ` en ${mesNombre}`;
        }
    } else {
        titulo = `⚠ Personas del ${grupoTexto} Pendientes por Reportar`;
        if (filterMes !== 'all') {
            titulo += ` en ${mesNombre}`;
        }
    }
    
    modalTitle.textContent = titulo;
    
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
    // Prevenir scroll del body en móviles
    if (window.innerWidth <= 480) {
        document.body.classList.add('modal-open');
    }
}

// Ocultar modal
function hideListModal() {
    const modal = document.getElementById('listModal');
    modal.classList.add('hidden');
    // Restaurar scroll del body en móviles
    document.body.classList.remove('modal-open');
}

// ============================================
// FUNCIONES DE EXPORTACIÓN
// ============================================

// Saber si la pestaña activa es Estadísticas Individual
function isIndividualTabActive() {
    return document.body.classList.contains('tab-individual');
}

// Variable para que PDF/PNG exporten según la pestaña desde la que se abrió el modal
let currentExportMode = 'general';

// Función para generar el HTML de la plantilla de exportación
function generateExportTemplate() {
    const filterMes = document.getElementById('filterMes').value;
    const filterGrupo = document.getElementById('filterGrupo').value;
    const filterPredico = document.getElementById('filterPredico').value;
    
    // Obtener información de filtros
    const mesNombre = filterMes !== 'all' ? getMonthName(filterMes) : 'Todos los meses';
    const grupoTexto = filterGrupo === 'all' ? 'Todos los grupos' : `Grupo ${filterGrupo}`;
    const predicoTexto = filterPredico === 'all' ? 'Todos' : (filterPredico === 'Si prediqué' ? 'Sí predicó' : 'No predicó');
    
    // Obtener estadísticas actuales
    const totalPersonas = document.getElementById('totalPersonas').textContent;
    const totalHoras = document.getElementById('totalHoras').textContent;
    const totalRevisitas = document.getElementById('totalRevisitas').textContent;
    const totalEstudios = document.getElementById('totalEstudios').textContent;
    const totalOk = document.getElementById('totalOk').textContent;
    const totalPending = document.getElementById('totalPending').textContent;
    
    // Generar tabla de datos
    let tableHTML = '<table class="export-data-table">';
    tableHTML += '<thead><tr>';
    tableHTML += '<th>Nombre</th>';
    tableHTML += '<th>Grupo</th>';
    tableHTML += '<th>Predicó</th>';
    tableHTML += '<th>Horas</th>';
    tableHTML += '<th>Revisitas</th>';
    tableHTML += '<th>Estudios</th>';
    tableHTML += '<th>Publicaciones</th>';
    tableHTML += '</tr></thead><tbody>';
    
    // Ordenar datos alfabéticamente
    const sortedData = [...filteredData].sort((a, b) => {
        const nameA = normalizeName(a.nombre || '');
        const nameB = normalizeName(b.nombre || '');
        return nameA.localeCompare(nameB, 'es', { sensitivity: 'base' });
    });
    
    sortedData.forEach(item => {
        // Marcar en rojo si no predicó
        const noPredico = item.predico === 'No prediqué';
        const rowStyle = noPredico ? 'style="background-color: #fee2e2; color: #991b1b; font-weight: 600;"' : '';
        
        tableHTML += `<tr ${rowStyle}>`;
        tableHTML += `<td>${item.nombre || '-'}</td>`;
        tableHTML += `<td>${item.grupo || '-'}</td>`;
        tableHTML += `<td ${noPredico ? 'style="color: #dc2626; font-weight: bold;"' : ''}>${item.predico || '-'}</td>`;
        tableHTML += `<td>${item.horas || 0}</td>`;
        tableHTML += `<td>${item.revisitas || 0}</td>`;
        tableHTML += `<td>${item.estudios || 0}</td>`;
        tableHTML += `<td>${item.publicaciones || 0}</td>`;
        tableHTML += '</tr>';
    });
    
    tableHTML += '</tbody></table>';
    
    // Generar fecha de exportación
    const fechaExportacion = new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // Construir HTML completo
    const html = `
        <div class="export-header">
            <h1>📊 Reporte Mensual de Servicio</h1>
            <p class="subtitle">Congregación Cordialidad</p>
        </div>
        
        <div class="export-filters">
            <strong>Filtros aplicados:</strong><br>
            <strong>Mes:</strong> ${mesNombre} | 
            <strong>Grupo:</strong> ${grupoTexto} | 
            <strong>Predicación:</strong> ${predicoTexto}
        </div>
        
        <div class="export-stats">
            <div class="export-stat-item">
                <div class="export-stat-value">${totalPersonas}</div>
                <div class="export-stat-label">Total Personas</div>
            </div>
            <div class="export-stat-item">
                <div class="export-stat-value">${totalHoras}</div>
                <div class="export-stat-label">Total Horas</div>
            </div>
            <div class="export-stat-item">
                <div class="export-stat-value">${totalRevisitas}</div>
                <div class="export-stat-label">Total Revisitas</div>
            </div>
            <div class="export-stat-item">
                <div class="export-stat-value">${totalEstudios}</div>
                <div class="export-stat-label">Total Estudios</div>
            </div>
            <div class="export-stat-item">
                <div class="export-stat-value">${totalOk}</div>
                <div class="export-stat-label">Personas OK</div>
            </div>
            <div class="export-stat-item">
                <div class="export-stat-value">${totalPending}</div>
                <div class="export-stat-label">Pendientes</div>
            </div>
        </div>
        
        <h2 style="margin-top: 30px; margin-bottom: 15px; color: #2563eb; font-size: 1.5em;">Detalle de Reportes</h2>
        ${tableHTML}
        
        <div class="export-footer">
            Generado el ${fechaExportacion}<br>
            Total de registros: ${filteredData.length}
        </div>
    `;
    
    return html;
}

// Generar HTML para exportar estadísticas individual (título, tarjetas, gráficas como imagen, tabla)
function generateExportTemplateIndividual() {
    const titleEl = document.getElementById('individualResultsTitle');
    const cardsEl = document.getElementById('individualStatsCards');
    const detailEl = document.getElementById('individualDetail');
    const title = titleEl ? titleEl.textContent : 'Estadísticas individual';
    const cardsHtml = cardsEl ? cardsEl.innerHTML : '';
    const detailHtml = detailEl ? detailEl.innerHTML : '';
    let chartsHtml = '';
    if (typeof chartCumplimientoInstance !== 'undefined' && chartCumplimientoInstance) {
        try {
            chartsHtml += '<p style="margin: 15px 0 5px; font-weight: 600; color: #334155;">Cumplimiento por mes</p><img src="' + chartCumplimientoInstance.toBase64Image() + '" style="max-width: 100%; height: auto; margin-bottom: 20px;" alt="Cumplimiento">';
        } catch (e) { console.warn('Chart cumplimiento export:', e); }
    }
    if (typeof chartValoresInstance !== 'undefined' && chartValoresInstance) {
        try {
            chartsHtml += '<p style="margin: 15px 0 5px; font-weight: 600; color: #334155;">Horas, Revisitas y Estudios por mes</p><img src="' + chartValoresInstance.toBase64Image() + '" style="max-width: 100%; height: auto;" alt="Valores">';
        } catch (e) { console.warn('Chart valores export:', e); }
    }
    const fechaExportacion = new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    return `
        <div class="export-header">
            <h1>👤 Estadísticas Individual</h1>
            <p class="subtitle">Congregación Cordialidad</p>
        </div>
        <h2 style="margin: 20px 0 15px; color: #1e40af; font-size: 1.25em;">${escapeHtml(title)}</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 10px; margin-bottom: 20px;">${cardsHtml}</div>
        ${chartsHtml}
        <div style="margin-top: 20px;">${detailHtml}</div>
        <div class="export-footer" style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e0e0e0; text-align: center; font-size: 0.85em; color: #666;">Generado el ${fechaExportacion}</div>
    `;
}

// Función para exportar a PNG
async function exportToPNG() {
    try {
        const template = document.getElementById('exportTemplate');
        const exportContent = document.getElementById('exportContent');
        const isIndividual = currentExportMode === 'individual';
        exportContent.innerHTML = isIndividual ? generateExportTemplateIndividual() : generateExportTemplate();
        
        // Mostrar temporalmente
        template.style.display = 'block';
        
        // Usar html2canvas para generar la imagen
        const canvas = await html2canvas(template, {
            scale: 2,
            backgroundColor: '#ffffff',
            useCORS: true,
            logging: false
        });
        
        // Ocultar template
        template.style.display = 'none';
        
        // Descargar imagen
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        const fecha = new Date().toISOString().split('T')[0];
        if (currentExportMode === 'individual') {
            const titleEl = document.getElementById('individualResultsTitle');
            const nombre = titleEl ? titleEl.textContent.split('—')[0].trim().replace(/\s+/g, '_') : 'Individual';
            link.download = `Estadisticas_Individual_${nombre}_${fecha}.png`;
        } else {
            const filterMes = document.getElementById('filterMes').value;
            const mesNombre = filterMes !== 'all' ? getMonthName(filterMes) : 'Todos';
            link.download = `Reporte_${mesNombre}_${fecha}.png`;
        }
        link.href = imgData;
        link.click();
    } catch (error) {
        console.error('Error al exportar a PNG:', error);
        alert('Error al exportar a PNG. Por favor, intenta de nuevo.');
    }
}

// Función para exportar a PDF
async function exportToPDF() {
    try {
        const template = document.getElementById('exportTemplate');
        const exportContent = document.getElementById('exportContent');
        const isIndividual = currentExportMode === 'individual';
        exportContent.innerHTML = isIndividual ? generateExportTemplateIndividual() : generateExportTemplate();
        
        // Mostrar temporalmente
        template.style.display = 'block';
        
        // Esperar un poco para que se renderice el contenido
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Usar html2canvas para generar la imagen
        const canvas = await html2canvas(template, {
            scale: 2,
            backgroundColor: '#ffffff',
            useCORS: true,
            logging: false,
            windowWidth: template.scrollWidth,
            windowHeight: template.scrollHeight
        });
        
        // Ocultar template
        template.style.display = 'none';
        
        // Convertir canvas a imagen
        const imgData = canvas.toDataURL('image/png');
        
        // Usar jsPDF para crear PDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        
        // Calcular dimensiones para que quepa en una página A4
        const ratio = (pdfWidth - 20) / imgWidth;
        const imgHeightInMM = imgHeight * ratio;
        
        let position = 10; // Posición inicial en mm
        
        // Si la imagen es más alta que una página, dividirla en múltiples páginas
        if (imgHeightInMM > pdfHeight - 20) {
            const pageHeight = pdfHeight - 20;
            let heightLeft = imgHeightInMM;
            let sourceY = 0;
            
            while (heightLeft > 0) {
                const sourceHeightPx = Math.min((pageHeight / ratio), imgHeight - sourceY);
                
                // Crear un canvas temporal para cada porción de la imagen
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = imgWidth;
                tempCanvas.height = sourceHeightPx;
                const tempCtx = tempCanvas.getContext('2d');
                
                tempCtx.drawImage(canvas, 0, sourceY, imgWidth, sourceHeightPx, 0, 0, imgWidth, sourceHeightPx);
                
                const tempImgData = tempCanvas.toDataURL('image/png');
                
                pdf.addImage(
                    tempImgData,
                    'PNG',
                    10,
                    10,
                    imgWidth * ratio,
                    sourceHeightPx * ratio
                );
                
                sourceY += sourceHeightPx;
                heightLeft -= pageHeight;
                
                if (heightLeft > 0) {
                    pdf.addPage();
                }
            }
        } else {
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth * ratio, imgHeightInMM);
        }
        
        // Descargar PDF
        const fecha = new Date().toISOString().split('T')[0];
        if (currentExportMode === 'individual') {
            const titleEl = document.getElementById('individualResultsTitle');
            const nombre = titleEl ? titleEl.textContent.split('—')[0].trim().replace(/\s+/g, '_') : 'Individual';
            pdf.save(`Estadisticas_Individual_${nombre}_${fecha}.pdf`);
        } else {
            const filterMes = document.getElementById('filterMes').value;
            const mesNombre = filterMes !== 'all' ? getMonthName(filterMes) : 'Todos';
            pdf.save(`Reporte_${mesNombre}_${fecha}.pdf`);
        }
    } catch (error) {
        console.error('Error al exportar a PDF:', error);
        alert('Error al exportar a PDF. Por favor, intenta de nuevo.');
    }
}

// Función para mostrar menú de exportación (según pestaña activa: general o individual)
function showExportMenu() {
    const modal = document.getElementById('exportModal');
    const titleEl = document.getElementById('exportModalTitle');
    if (isIndividualTabActive()) {
        currentExportMode = 'individual';
        if (titleEl) titleEl.textContent = '📥 Exportar Estadísticas Individual';
        const resultsEl = document.getElementById('individualResults');
        if (resultsEl && resultsEl.classList.contains('hidden')) {
            alert('Primero realiza una consulta (selecciona persona, fechas y pulsa Consultar) para poder exportar.');
            return;
        }
    } else {
        currentExportMode = 'general';
        if (titleEl) titleEl.textContent = '📥 Exportar Reporte General';
    }
    modal.classList.remove('hidden');
    if (window.innerWidth <= 480) {
        document.body.classList.add('modal-open');
    }
}

// Actualizar datos: si está en Reporte General recarga todo; si está en Individual recarga y vuelve a consultar
function handleRefresh() {
    if (isIndividualTabActive()) {
        const persona = document.getElementById('queryPersona').value;
        const fechaDesde = document.getElementById('queryFechaDesde').value;
        const fechaHasta = document.getElementById('queryFechaHasta').value;
        fetchData().then(() => {
            if (persona && fechaDesde && fechaHasta && new Date(fechaDesde) <= new Date(fechaHasta)) {
                renderIndividualResults(persona, fechaDesde, fechaHasta);
            }
        }).catch(() => {});
    } else {
        fetchData();
    }
}

// Función para ocultar modal de exportación
function hideExportModal() {
    const modal = document.getElementById('exportModal');
    modal.classList.add('hidden');
    // Restaurar scroll del body en móviles
    document.body.classList.remove('modal-open');
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
    
    // Pestañas y estadísticas individual
    initTabs();
    const btnConsultar = document.getElementById('btnConsultarIndividual');
    if (btnConsultar) {
        btnConsultar.addEventListener('click', () => {
            const persona = document.getElementById('queryPersona').value;
            const fechaDesde = document.getElementById('queryFechaDesde').value;
            const fechaHasta = document.getElementById('queryFechaHasta').value;
            if (!persona) {
                alert('Selecciona una persona.');
                return;
            }
            if (!fechaDesde || !fechaHasta) {
                alert('Selecciona rango de fechas (desde y hasta).');
                return;
            }
            if (new Date(fechaDesde) > new Date(fechaHasta)) {
                alert('La fecha "Desde" debe ser anterior a "Hasta".');
                return;
            }
            renderIndividualResults(persona, fechaDesde, fechaHasta);
        });
    }
    
    // Event listeners principales (Actualizar y Exportar según pestaña activa)
    document.getElementById('btnRefresh').addEventListener('click', handleRefresh);
    document.getElementById('btnExport').addEventListener('click', showExportMenu);
    document.getElementById('filterMes').addEventListener('change', applyFilters);
    document.getElementById('filterGrupo').addEventListener('change', applyFilters);
    document.getElementById('filterPredico').addEventListener('change', applyFilters);
    
    // Event listeners para las tarjetas de estadísticas
    document.getElementById('statOk').addEventListener('click', () => showListModal('ok'));
    document.getElementById('statPending').addEventListener('click', () => showListModal('pending'));
    document.getElementById('statEstudios').addEventListener('click', () => showEstudiosModal());
    document.getElementById('statRevisitas').addEventListener('click', () => showRevisitasModal());
    document.getElementById('statHoras').addEventListener('click', () => showHorasModal());
    
    // Event listener para cerrar el modal
    document.getElementById('listModalClose').addEventListener('click', hideListModal);
    
    // Cerrar modal al hacer clic fuera del contenido
    document.getElementById('listModal').addEventListener('click', (e) => {
        if (e.target.id === 'listModal') {
            hideListModal();
        }
    });
    
    // Event listeners para modal de exportación
    document.getElementById('exportModalClose').addEventListener('click', hideExportModal);
    document.getElementById('exportPDF').addEventListener('click', () => {
        hideExportModal();
        exportToPDF();
    });
    document.getElementById('exportPNG').addEventListener('click', () => {
        hideExportModal();
        exportToPNG();
    });
    
    // Cerrar modal de exportación al hacer clic fuera del contenido
    document.getElementById('exportModal').addEventListener('click', (e) => {
        if (e.target.id === 'exportModal') {
            hideExportModal();
        }
    });
});
