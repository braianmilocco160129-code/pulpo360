# 📋 Guía de Configuración - Pulpo 360

## 🔧 Cómo Actualizar los Datos de Contacto

Todos los datos de contacto están parametrizados en un solo lugar para facilitar su actualización. Simplemente edita el archivo `script.js` y busca el objeto `CONTACT_DATA` al inicio del archivo.

### 📍 Ubicación del archivo
```
landing-test/script.js
```

### 📝 Datos Configurables

```javascript
const CONTACT_DATA = {
  // Email de contacto
  email: 'hola@pulpo360.com',
  
  // Número de teléfono (formato internacional sin espacios)
  phone: '+5491112345678',
  
  // Número de teléfono (formato para mostrar)
  phoneFormatted: '+54 11 1234-5678',
  
  // Ubicación física
  location: 'Buenos Aires, Argentina',
  
  // WhatsApp (número sin el símbolo +)
  whatsappNumber: '5491112345678',
  
  // Mensaje predeterminado de WhatsApp
  whatsappMessage: 'Hola! Me interesa conocer más sobre sus servicios',
  
  // Redes Sociales
  social: {
    instagram: 'https://instagram.com/pulpo360',
    facebook: 'https://facebook.com/pulpo360',
    linkedin: 'https://linkedin.com/company/pulpo360'
  }
};
```

### 🔄 Dónde se Aplican los Cambios

Los datos se actualizan automáticamente en:

✅ **Sección de Contacto:**
- Tarjeta de email con link mailto
- Tarjeta de teléfono con link tel
- Tarjeta de ubicación
- Links de redes sociales (Instagram, Facebook, LinkedIn)

✅ **Footer:**
- Email con link funcional
- Teléfono con link funcional
- Ubicación
- Links de redes sociales

✅ **Botón Flotante de WhatsApp:**
- Link directo a WhatsApp con mensaje predeterminado

### 💡 Ejemplo de Actualización

**Antes (datos de prueba):**
```javascript
email: 'hola@pulpo360.com',
phone: '+5491112345678',
```

**Después (datos reales):**
```javascript
email: 'contacto@tupulpo.com.ar',
phone: '+5491165432109',
```

### 🎯 Navegación del Sitio

La navegación funciona con scroll automático a las diferentes secciones:

**Navbar:**
- Servicios → Scroll a sección #servicios
- Tecnología → Scroll a sección #tecnologia  
- Casos de Éxito → Scroll a sección #casos
- Hablemos → Scroll a sección #contacto

**Footer:**
- Navegación → Links con scroll a las mismas secciones
- Contacto → Links funcionales con mailto: y tel:

### 🛠️ Notas Técnicas

1. **Formato del teléfono:**
   - `phone`: Debe ser el número en formato internacional sin espacios (ej: `+5491165432109`)
   - `phoneFormatted`: Es solo para mostrar, puede tener espacios y guiones (ej: `+54 11 6543-2109`)

2. **WhatsApp:**
   - El número NO debe incluir el símbolo `+`
   - Debe incluir el código de país (ej: `5491165432109`)

3. **Redes Sociales:**
   - Usa las URLs completas
   - Asegúrate de que los perfiles existan antes de publicar

4. **Actualización en Vivo:**
   - Los cambios se aplican automáticamente al recargar la página
   - No es necesario modificar el HTML manualmente

---

## 🚀 Para Desarrolladores

Si necesitas agregar más campos de contacto o modificar el comportamiento:

1. Agrega el campo en el objeto `CONTACT_DATA`
2. Agrega el ID correspondiente en el elemento HTML
3. Actualiza la función `updateContactData()` en `script.js`

**Ejemplo:**
```javascript
// En CONTACT_DATA
twitter: 'https://twitter.com/pulpo360'

// En updateContactData()
const twitterLink = document.getElementById('footer-twitter');
if (twitterLink) twitterLink.href = CONTACT_DATA.social.twitter;
```
