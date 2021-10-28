import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    Pages({
      pagesDir: [
        { dir: 'src/pages', baseRoute: '' },
        { dir: 'src/features/admin/pages', baseRoute: 'admin' },
      ],
      extensions: ['tsx'],
      react: true,
      extendRoute(route, parent) {
        if (route.routes && route.routes.length > 0) {
          delete route.exact
        }

        if (route.path === "/") {
          // Index is unauthenticated.
          return route;
        }

        // Augment the route with meta that indicates that the route requires authentication.
        return {
          ...route,
          meta: { auth: true },
        };
      },
    }),
  ],
})
