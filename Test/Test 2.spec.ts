import { test, expect } from '@playwright/test';

test('Ir a Porvenir y hacer clic en Iniciar Sesión', async ({ page }) => {
  // Navegar a la página principal
  await page.goto('https://www.porvenir.com.co/home');

  // Esperar a que la página cargue completamente
  await page.waitForLoadState('load');

  // Hacer clic en el botón "Iniciar Sesión"
  const iniciarSesionButton = await page.locator('text=Iniciar sesión'); // Cambiar el selector si es necesario
  await expect(iniciarSesionButton).toBeVisible();
  await iniciarSesionButton.click();

  // Validar que se redirige correctamente (opcional)
  // await expect(page).toHaveURL(/.*iniciar-sesion/); // Ajustar según la URL esperada
});