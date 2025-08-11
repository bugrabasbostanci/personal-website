```
:root {
    /* Light mode colors */
    --background: 0 0% 98%; /* #fafafa */
    --foreground: 0 0% 9%; /* #171717 */

    --card: 0 0% 100%;
    --card-foreground: 0 0% 9%;

    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 9%;

    /* Primary color */
    --primary: 0 0% 9%; /* #171717 */
    --primary-foreground: 0 0% 98%;

    /* Secondary color */
    --secondary: 0 0% 40%; /* #666666 */
    --secondary-foreground: 0 0% 98%;

    --muted: 0 0% 96%;
    --muted-foreground: 0 0% 40%; /* #666666 */

    --accent: 0 0% 96%;
    --accent-foreground: 0 0% 9%;

    /* Geist semantic colors */
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;

    /* Borders */
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 9%;

    --radius: 0.5rem;

    /* Selection colors for light mode */
    --selection-bg: 167.23 85.45% 89.22%;
    --selection-text: 175.34 77.44% 26.08%;

    /* Badge colors for light mode */
    --badge-bg: hsl(0 75% 95%);
    --badge-text: hsl(0 91% 40%);
  }

  .dark {
    /* Dark mode colors */
    --background: 0 0% 4%; /* #0a0a0a */
    --foreground: 0 0% 93%; /* #ededed */

    --card: 0 0% 6%;
    --card-foreground: 0 0% 93%;

    --popover: 0 0% 6%;
    --popover-foreground: 0 0% 93%;

    /* Primary color */
    --primary: 0 0% 93%; /* #ededed */
    --primary-foreground: 0 0% 4%;

    /* Secondary color */
    --secondary: 0 0% 63%; /* #a1a1a1 */
    --secondary-foreground: 0 0% 93%;

    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63%; /* #a1a1a1 */

    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 93%;

    /* Borders */
    --border: 0 0% 20%;
    --input: 0 0% 20%;
    --ring: 0 0% 93%;

    /* Selection colors for dark mode */
    --selection-bg: 178.6 84.31% 10%;
    --selection-text: 172.46 66.01% 50.39%;

    /* Badge colors for dark mode */
    --badge-bg: hsl(0 75% 15%);
    --badge-text: hsl(0 91% 71%);
  }
```

---

```
/* Custom color variables */
:root {
  /* Light mode */
  --color-bg-light: #fafafa;
  --color-primary-light: #171717;
  --color-secondary-light: #666666;

  /* Dark mode */
  --color-bg-dark: #0a0a0a;
  --color-primary-dark: #ededed;
  --color-secondary-dark: #a1a1a1;

  /* Selection colors */
  --color-selection-bg-light: hsl(167.23 85.45% 89.22%);
  --color-selection-text-light: hsl(175.34 77.44% 26.08%);
  --color-selection-bg-dark: hsl(178.6 84.31% 10%);
  --color-selection-text-dark: hsl(172.46 66.01% 50.39%);
}

/* Geist color system */
:root {
  /* Geist Gray */
  --geist-gray-000: #fff;
  --geist-gray-100: #fafafa;
  --geist-gray-200: #eaeaea;
  --geist-gray-300: #999;
  --geist-gray-400: #888;
  --geist-gray-500: #666;
  --geist-gray-600: #444;
  --geist-gray-700: #333;
  --geist-gray-800: #111;
  --geist-gray-900: #000;

  /* Geist Green */
  --geist-green-100: #d3e5ff;
  --geist-green-200: #a7ffeb;
  --geist-green-300: #79ffe1;
  --geist-green-400: #33ce89;
  --geist-green-500: #27ae60;
  --geist-green-600: #1d8349;

  /* Geist Error */
  --geist-error-100: #ffe0e0;
  --geist-error-200: #ffb8b8;
  --geist-error-300: #ff8080;
  --geist-error-400: #ff5549;
  --geist-error-500: #e00;
  --geist-error-600: #c50000;
}
```

---

## Dark mode

Projenin dark mode renkleri şu şekilde olsun:

- background color: #0a0a0a
- primary color: #ededed (titles)
- secondary color: #a1a1a1 (text and icons)

Text selection colors for dark mode:

- selection-bg: 178.6 84.31% 10%;
- selection-text: 172.46 66.01% 50.39%;

Badge colors for dark mode:

- badge-bg: hsl(0 75% 15%);
- badge-text: hsl(0 91% 71%);

## Light mode

Projenin light mode renkleri şu şekilde olsun:

- background color: #fafafa
- primary color: #171717 (titles)
- secondary color: #666666 (text and icons)

Text selection colors for light mode:

- selection-bg: 167.23 85.45% 89.22%;
- selection-text: 175.34 77.44% 26.08%;

Badge colors for light mode:

- badge-bg: hsl(0 75% 95%);
- badge-text: hsl(0 91% 40%);
