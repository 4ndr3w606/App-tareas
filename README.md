# Gestor de Tareas y Hábitos - Ionic & Angular
Aplicación móvil nativa para Android desarrollada con Ionic Framework, Angular y TypeScript, empaquetada mediante Capacitor. Este proyecto permite la creación, gestión, filtrado y almacenamiento local de tareas y hábitos diarios.

 ### Tecnologías Utilizadas
 - `Funcionalidad 1`: descripción de la funcionalidad 1-
- `Framework`: Ionic Framework (v7+)-
- `Core`: Angular (Componentes Standalone)-
- `Lenguaje`: TypeScript-
- `Runtime Nativo`: Capacitor-
- `Plataforma Objetivo`: Android (SDK Debug)-
- `Estilos`: SCSS & Ionic Components-

 ### Requisitos Previos
1)	 Verificar el entorno
Asegúrate de contar con las siguientes Node.js, dependencias npm, Ionic CLI y el entorno de desarrollo Android Studio:
```
node -v      // Recomendado: v18.x o v20.x
npm -v        // Recomendado: v9.x o superior 
ionic -version
```
Si no tienes Ionic CLI instalado globalmente:
```
npm install -g @ionic/cli
```

## Comandos de Instalación y Ejecución Local

### 1. Clonar el repositorio e instalar dependencias
```
 //Clonar el repositorio
git clone https://github.com/4ndr3w606/App-tareas.git
```

Entrar al directorio del proyecto
```
cd gestor-tareas
```

Instalar las dependencias de Node
```
npm install
```

2. Ejecutar la aplicación en el navegador
Para probar la interfaz web y la lógica de componentes en un servidor de desarrollo local:
```
ionic serve
```

## Compilación Nativa para Android

Sigue esta secuencia de comandos para compilar la parte web y sincronizar la carpeta nativa android/:

### 1. Construir el paquete web y copiar a la plataforma nativa

Compilar los recursos web de producción
```
ionic build
```
Sincronizar el código compilado y plugins con el proyecto Android
```
npx cap copy
#(Tip: Puedes ejecutar ambos procesos en un solo comando con ionic build && npx cap copy)
```
### 2. Abrir el proyecto en Android Studio
```
npx cap open android
```
## Generación del APK Debug e Instalación

-1.	En Android Studio, espera a que Gradle finalice la indexación del proyecto.-
-2.	En la barra de menú superior, selecciona:-
-Build $\rightarrow$ Build Bundle(s) / APK(s) $\rightarrow$ Build APK(s).-
-3.	Al finalizar la compilación, la notificación te indicará la ruta donde se generó el archivo:-

Plaintext
android/app/build/outputs/apk/debug/app-debug.apk

4.	Instalación: Transfiere el archivo app-debug.apk a tu dispositivo Android propio u 
homologado, habilita los permisos de instalación desde fuentes desconocidas si el sistema
lo solicita y ejecuta la aplicación.

## Estructura del Proyecto
Plaintext
gestor-tareas/
├── android/                   # Proyecto nativo Android (conservado en control de versiones)
├── src/
│   ├── app/
│   │   ├── components/        # Componentes reutilizables (ej. modal de agregar tarea)
│   │   ├── models/            # Interfaces de TypeScript (Task, Priority, Category)
│   │   ├── services/          # Servicios para almacenamiento local y lógica de negocio
│   │   └── tab1/              # Vista principal de la aplicación
├── capacitor.config.ts        # Configuración principal de Capacitor
├── ionic.config.json          # Configuración del CLI de Ionic
└── README.md                  # Documento del proyecto







