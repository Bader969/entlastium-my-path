# Project rules

- Keep page titles and descriptions in existing leaf-route heads (including the shared service head builder), not in root defaults, so each page owns its search and social identity.
- Keep the services overview in the index leaf, not a content parent, so service detail pages render independently and do not inherit a second canonical link.- Prerender all static marketing pages via the `pages` list in vite.config.ts (built from NRW_CITIES/SERVICES); add new static routes there, never prerender routes reading cookies/session — fast first paint.
