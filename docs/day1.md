Perfecto.
Aquí tienes el **.MD súper definido**, listo para usar desde **Día 1**, con definiciones, parámetros, estructura, criterios y lineamientos.
Este archivo es tu **Blueprint Oficial del Hackathon**.
Solo copia/pega en tu repositorio, Notion o donde trabajen.

---

# 🟧 **CRONICARE LOOP — DÍA 1 BLUEPRINT**

### *Especificación oficial para diseño, contenido, arquitectura y pitch*

---

# #️⃣ **1. PROYECTO — DESCRIPCIÓN GENERAL**

**Cronicare Loop** es una PWA que acompaña diariamente a pacientes con diabetes tipo 2 mediante:

* microacciones simples, no clínicas
* audios empáticos
* racha de consistencia
* microeducación
* integración emocional del familiar
* beneficios contextuales de RIMAC

> Objetivo: transformar el cuidado crónico en un **estilo de vida guiado, humano y continuo**, no en una gestión médica.

---

# #️⃣ **2. ALCANCE DÍA 1**

Hoy construiremos:

1. Arquitectura UI/UX completa
2. Wireframes
3. Key screens (High Fidelity)
4. Contenido final (acciones, audios, educación, familiar, beneficios)
5. JSONs iniciales
6. Estructura del pitch v1
7. Setup técnico de la PWA
8. Layout base + navegación

Nada más.
Nada menos.
No se programa lógica aún (eso es mañana).

---

# #️⃣ **3. ARQUITECTURA DE PRODUCTO (3 CAPAS)**

### **Capa 1 — Experiencia diaria (core del usuario)**

* Acción del día
* Audio empático
* Botón completado
* Botón más tarde
* Racha
* Microeducación
* Semáforo emocional (demo)

### **Capa 2 — Entorno familiar (apoyo emocional)**

* Estado del paciente
* Sugerencias de apoyo
* Botón enviar (mock)

### **Capa 3 — Integración RIMAC (beneficios contextuales)**

* Tarjeta de beneficio
* Aparición contextual (racha o educación)

---

# #️⃣ **4. ARQUITECTURA DE EXPERIENCIA (APP MAP)**

```
/onboarding
  - bienvenida
  - define objetivo
  - define ritmo
  - activa modo familiar

/home  (Acción del día)
  - texto
  - audio player
  - botón completado
  - racha
  - beneficio (si aplica)

/learn  (Microeducación)
  - cards de tips diarios

/profile  (Yo)
  - tokens simbólicos
  - racha semanal
  - configuración rápida

/family  (Modo familiar)
  - estado del paciente
  - mensajes sugeridos
  - botón enviar

```

---

# #️⃣ **5. WIREFRAMES OBLIGATORIOS**

### 1. **Onboarding**

* Pantalla 1: bienvenida
* Pantalla 2: objetivo
* Pantalla 3: ritmo
* Pantalla 4: agregar familiar

### 2. **Home – Acción del Día**

* icono
* texto breve
* audio player
* botón completado grande
* racha bajo el botón
* beneficio RIMAC (si aplica)

### 3. **Audio Player**

* botón reproducir
* barra simple
* animación suave

### 4. **Racha**

* número
* barra horizontal
* micro feedback

### 5. **Microeducación**

* cards verticales
* scroll suave

### 6. **Modo Familiar**

* semáforo emocional
* 3 mensajes sugeridos
* botón enviar

### 7. **Beneficio RIMAC**

* card con ícono
* copy simple
* CTA desactivado (mock)

---

# #️⃣ **6. DISEÑO (UI SYSTEM)**

### **Paleta (cálida + accesible)**

* primario: #F65009
* secundario: #F1A57D
* neutro claro: #FFF7F3
* neutro oscuro: #1D1D1D
* acentos: #FFBA76

### **Tipografía**

* Inter (o SF Pro si iOS-like)
* Títulos: semibold
* Texto: regular
* Tamaños accesibles (16–20 px mínimo)

### **Iconografía**

* estilo outline suave
* tamaños grandes
* íconos semánticos (comida, movimiento, calma)

### **Accesibilidad**

* botones grandes (mín 48px)
* contraste AA
* gestos simples
* máximo 2 colores simultáneos
* evitar saturación visual

---

# #️⃣ **7. CONTENIDO (TODO APROBADO HOY)**

## **7.1 Microacciones (mínimo 5, máximo 7)**

Ejemplo final:

```
[
  {
    "id": 1,
    "title": "Antes del almuerzo toma una porción de proteína.",
    "category": "comida",
    "audioId": "audio1"
  },
  {
    "id": 2,
    "title": "Haz 1 minuto de respiración antes de comer.",
    "category": "estrés",
    "audioId": "audio2"
  },
  {
    "id": 3,
    "title": "Camina 3 minutos después de tu comida principal.",
    "category": "movimiento",
    "audioId": "audio3"
  }
]
```

---

## **7.2 Audios (3 tonos)**

* tono 1: cálido / contención
* tono 2: motivador suave
* tono 3: guía práctica breve

## **7.3 Microeducación**

Ejemplo:

```
[
  {
    "title": "Evita picos bruscos",
    "tip": "Incluye proteína antes del carbohidrato."
  }
]
```

---

## **7.4 Mensajes familiares**

* “Hoy tuvo un día bueno, un mensaje tuyo puede motivarlo.”
* “Envía unas palabras de ánimo, hoy fue un día más pesado.”

---

## **7.5 Beneficios RIMAC**

```
{
  "id": "nutricion",
  "title": "Sesión de nutrición RIMAC",
  "description": "Podría ayudarte esta semana."
}
```

---

# #️⃣ **8. ARQUITECTURA TÉCNICA**

### **Stack**

* React / Next.js PWA
* Typescript
* TailwindCSS
* Zustand o Context API
* LocalStorage
* JSON local
* Audios mp3 locales
* NO backend
* NO autenticación
* NO APIs externas

### **Estructura de carpetas**

```
/src
  /components
    ActionCard.tsx
    AudioPlayer.tsx
    EmotionBadge.tsx
    RachaBar.tsx
    BenefitCard.tsx
    FamilyCard.tsx

  /screens
    Onboarding.tsx
    Home.tsx
    Learn.tsx
    Profile.tsx
    Family.tsx

  /data
    actions.json
    audio.json
    education.json
    benefits.json

  /state
    userProfile.ts
    habitState.ts
    emotionState.ts
```

---

# #️⃣ **9. PITCH DECK (VERSIÓN 1 HOY)**

### Debe contener:

1. **El Problema**
2. **El Insight emocional**
3. **El usuario**
4. **La solución (Cronicare Loop)**
5. **Journey diario (mañana/tarde/noche)**
6. **Modo familiar**
7. **Integración RIMAC**
8. **IA (comportamiento, no clínica)**
9. **Demo simple (screens)**
10. **Impacto**
11. **Roadmap**
12. **Equipo**

---

# #️⃣ **10. DEFINICIÓN DE DONE (DÍA 1)**

Hoy se considera COMPLETO si:

* [ ] El equipo está alineado
* [ ] App Map listo
* [ ] Wireframes listos
* [ ] Moodboard listo
* [ ] 6 pantallas clave terminadas en alta fidelidad
* [ ] JSONs iniciales definidos
* [ ] Pitch Deck versión 1 creado
* [ ] Guion de pitch escrito
* [ ] Proyecto PWA creado
* [ ] Rutas y layout funcionando

Si no pasa esto → el Día 2 se desarma.

---

# #️⃣ **11. METAS DEL DÍA 1 (CLAVE PARA GANAR)**

* Crear una visión ultra clara
* Congelar el alcance
* Crear diseños listos para desarrollo
* Dejar todo el contenido aprobado
* Pitch listo para iterar mañana
* Setup técnico limpio y ordenado

---

# #️⃣ **12. NOTAS AL EQUIPO**

* Nada de features nuevas
* Simplicidad > Complejidad
* Emoción > Tecnología
* Humano > Datos
* Flujo > Funciones
* Demo > Código complejo

---

Si quieres, puedo también generarte:

👉 El archivo `.md` con estructura de subtítulos para GitHub
👉 El mismo documento en versión ultra-minimalista
👉 La versión con emojis para equipo no técnico
👉 O convertir esto en un archivo “/docs/day1.md” listo para tu repositorio

¿Cuál prefieres?
