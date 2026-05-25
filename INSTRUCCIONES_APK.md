# 📱 Generar APK de SecureChat

## Requisitos previos
- **Node.js 16+** (descarga desde nodejs.org)
- **Java JDK 17+** (descarga desde oracle.com o usa OpenJDK)
- **Android SDK** (descarga Android Studio)

## Pasos rápidos (3 comandos)

### 1. Instala dependencias
```bash
npm install
# o si usas pnpm:
pnpm install
```

### 2. Compila la app web
```bash
npm run build
# o si usas pnpm:
pnpm run build
```

### 3. Genera el APK
```bash
npx cap build android
```

¡Listo! El APK estará en:
```
android/app/build/outputs/apk/release/app-release.apk
```

## Alternativa: Compilar en Android Studio

Si prefieres más control:

```bash
# 1. Abre el proyecto Android
open android/
# (Se abrirá Android Studio automáticamente)

# 2. En Android Studio:
# - Click en "Build" → "Build Bundle(s) / APK(s)" → "Build APK(s)"
# - Espera a que termine
# - El APK estará en: android/app/build/outputs/apk/debug/app-debug.apk
```

## Instalar en tu teléfono

### Opción A: Desde Android Studio
1. Conecta tu teléfono por USB
2. Habilita "Depuración USB" en Configuración → Opciones de desarrollador
3. En Android Studio: Click en "Run" → Selecciona tu dispositivo

### Opción B: Manualmente
1. Descarga el APK en tu teléfono
2. Abre el archivo descargado
3. Toca "Instalar"

## Troubleshooting

**Error: "Java not found"**
- Instala Java JDK 17: https://www.oracle.com/java/technologies/downloads/

**Error: "Android SDK not found"**
- Instala Android Studio: https://developer.android.com/studio
- Abre Android Studio y descarga los SDK necesarios

**Error: "Gradle build failed"**
- Ejecuta: `cd android && ./gradlew clean`
- Luego intenta de nuevo

## Información de la app
- **ID de app**: com.securechat.app
- **Nombre**: SecureChat
- **Versión**: 1.0.0

¡Disfruta tu app segura! 🔒
