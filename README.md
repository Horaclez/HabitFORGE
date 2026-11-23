# HABITFORGE — Constancia Elástica y Progresión RPG

App de hábitos con mecánicas de RPG. Funciona 100 % offline (datos en `localStorage`).
Este repositorio construye el APK de Android y el instalador de Windows con GitHub Actions.

## Cómo obtener los instaladores
1. Crea un repositorio vacío en GitHub y sube **todo el contenido de esta carpeta** (incluida `.github/`).
2. Ve a la pestaña **Actions**. El flujo *Build APK y Instalador* corre solo con cada push (también con *Run workflow*).
3. Al terminar (unos 8–12 min), entra a la ejecución y descarga desde **Artifacts**:
   - `HabitForge-Android-APK` → `app-debug.apk`
   - `HabitForge-Windows-Installer` → `HabitForge-Setup-1.0.0.exe`

### Publicar en Releases (opcional)
```
git tag v1.0.0 && git push origin v1.0.0
```
El flujo adjunta `HabitForge.apk` y el instalador `.exe` a una Release.

## Notas
- **APK:** firmado con la llave de depuración; se instala directo en Android (activa «Instalar apps desconocidas»). Para Google Play necesitarás firmarlo con tu propia llave.
- **Windows:** el instalador no está firmado digitalmente; SmartScreen puede avisar. Pulsa *Más información → Ejecutar de todos modos*.
- **Iconos:** salen de `assets/` (Android, con icono adaptativo) y `build/` (Windows `.ico` multi-tamaño).
- **Offline:** `scripts/prepare.js` copia Lucide y las fuentes a `www/vendor` al compilar; no se usa ningún CDN.
- **Probar en tu PC:** `npm install && npm start`.
- **Editar la app:** todo vive en `www/index.html`.

## Notificaciones
- **Android:** usa `@capacitor/local-notifications`. Al abrir la app, activa los recordatorios en Ajustes y acepta el permiso. Se programan los avisos de los próximos 10 días, así que funcionan con la app cerrada; se reprograman cada vez que abres la app.
- **Windows y navegador:** notificaciones nativas con la app abierta o en segundo plano.
