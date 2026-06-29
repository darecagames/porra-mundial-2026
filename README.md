# Porra Mundial 2026

Web estática para una porra familiar del Mundial 2026. Permite rellenar el cuadro eliminatorio desde dieciseisavos hasta la final, guardar la predicción, bloquearla y compartirla por enlace, WhatsApp o email.

No usa backend, login, base de datos, Firebase, servidor ni dependencias externas. Funciona abriendo `index.html` directamente y también publicada en GitHub Pages.

## Archivos

- `index.html`: estructura de la aplicación.
- `style.css`: estilos responsive.
- `script.js`: datos, lógica del cuadro, localStorage y compartir.
- `README.md`: documentación del proyecto.

## Cómo Usarlo

1. Abre `index.html` en el navegador.
2. Escribe el nombre del participante.
3. Rellena los resultados desde dieciseisavos.
4. Si un partido acaba empatado, elige quién pasa por penaltis.
5. Los ganadores avanzan automáticamente a la siguiente ronda.
6. Cuando el cuadro esté completo, pulsa `Finalizar y enviar porra`.
7. La porra queda bloqueada en modo solo lectura.
8. Copia el enlace final o envíalo por WhatsApp/email.

## Editar Equipos Iniciales

Los equipos están en `script.js`, en la sección:

```js
// 1. Datos iniciales: edita aqui equipos y cruces iniciales
const teams = { ... };
const initialMatches = [ ... ];
```

Cada equipo tiene esta estructura:

```js
esp: { id: "esp", name: "España", code: "ESP", flag: "🇪🇸" }
```

Para cambiar los cruces de dieciseisavos, edita `teamA` y `teamB` en los partidos `r32-1` a `r32-16`.

## Compartir Una Porra

El botón `Copiar enlace final` genera una URL con `readonly=1` y un parámetro `data` con la porra codificada. Ese enlace incluye:

- Nombre del participante.
- Resultados.
- Ganadores.
- Ganadores por penaltis.
- Campeón.
- Estado finalizado.
- Modo solo lectura.

Al abrir el enlace, la porra se carga automáticamente en modo solo lectura y no sobrescribe `localStorage` salvo que se pulse guardar.

## Modo Solo Lectura

Cuando una porra se finaliza o se abre desde un enlace compartido:

- Los inputs quedan desactivados.
- Los botones de penaltis no permiten cambios.
- No aparece el botón de finalizar.
- Sí aparecen copiar enlace, WhatsApp, email y crear nueva porra.

Este bloqueo es solo de interfaz y `localStorage`. Está pensado para uso familiar y evita cambios accidentales o normales, pero no es seguridad real de servidor.

## Publicar En GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube `index.html`, `style.css`, `script.js` y `README.md`.
3. Ve a `Settings`.
4. Entra en `Pages`.
5. Elige `Deploy from branch`.
6. Elige la rama `main` y la carpeta `/root`.
7. Guarda.
8. GitHub generará un enlace tipo:

```text
https://usuario.github.io/nombre-del-repositorio/
```

## Notas

- La aplicación es un MVP robusto y sencillo.
- El recálculo del cuadro limpia rondas posteriores cuando cambia un resultado anterior.
- Los datos se guardan en `localStorage` del navegador.
- No hay seguridad de servidor porque no hay servidor.
