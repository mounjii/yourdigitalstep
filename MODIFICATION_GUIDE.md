# Website Content Modification Guide

Welcome! This guide explains how to update content, run the project locally, and deploy it.

---

## How to Run the Project Locally

This project uses Vite as a development server.

1.  **Install Dependencies:** Open a terminal in the project's root directory and run:
    ```bash
    npm install
    ```

2.  **Start the Development Server:** After installation, run:
    ```bash
    npm run dev
    ```
    This will start a local server, and you can view the website in your browser at the address provided (usually `http://localhost:5173`).

---

## How to Deploy to a Web Host

1.  **Build the Project:** In your terminal, run the build command:
    ```bash
    npm run build
    ```
    This command will create a new `dist` folder in your project directory. This folder contains the optimized, static HTML, CSS, and JavaScript files for your website.

2.  **Upload to Hosting:** Connect to your web host (using FTP or their file manager) and upload the **contents** of the `dist` folder to your server's public directory (often named `public_html` or `www`).

---

## How to Modify Website Content

All user-facing text and image references are managed in two central files within the `src` directory:

1.  **`src/i18n.ts`**: Contains all text for all languages (English, French, Polish) and references to images via keys.
2.  **`src/content/imageStore.ts`**: Contains all image URLs, which are mapped to the keys used in `i18n.ts`.

### 1. How to Change Text (e.g., Hero Title)

Let's change the main heading on the homepage.

**Step 1: Open `src/i18n.ts`**
Open the `src/i18n.ts` file in your editor.

**Step 2: Find the `hero` section for English (`en`)**
Scroll to the `en` (English) section and find the `hero` object.

```javascript
// Inside en: { translation: { ... } }
"hero": {
  "title": "<0>Clarity</0> in a Complex<1> Digital World</1>",
  "subtitle": "We don't just build websites...",
},
```

**Step 3: Edit the Text**
- **For `title`**: The `<0>...</0>` tags are for styling. Only change the text around them.
- **For `subtitle`**: Simply change the text inside the double quotes.

**Step 4: Repeat for Other Languages**
Scroll to the `fr` and `pl` sections and make the same changes to their `hero` objects.

---

### 2. How to Add a New Portfolio Project

**Step 1: Add your images to the image store**
- Open `src/content/imageStore.ts`.
- Add your new image URLs to the `imageStore` object with a unique, descriptive key (e.g., `portfolio_myproject_main`).
- Add your new key to the `ImageKey` type list at the top of the file.

**Step 2: Open `src/i18n.ts` and find the portfolio section**
In the `en` (English) section, find the `portfolio.items` array.

**Step 3: Copy an Existing Project Block**
Each project is an object `{ ... }`. Copy an entire project object.

**Step 4: Paste and Edit the New Project**
Paste the copied block into the `items` array. **Important:** Make sure there is a comma `,` after every project block except the last one.

Update all fields for your new project. For `image`, `screenshots`, and `avatar`, use the **key** you created in `src/content/imageStore.ts`, not the full URL.

```javascript
// Inside "portfolio": { "items": [ ... ] }
{
  "image": "portfolio_myproject_main", // Use the key from imageStore.ts
  "category": "My Project Category",
  "title": "My New Project",
  //...
  "details": {
    //...
    "screenshots": [
        "portfolio_myproject_ss1", // Use keys here too
        "portfolio_myproject_ss2"
    ]
  }
}
```

**Step 5: Repeat for Other Languages**
You must add the same project block to the `portfolio.items` array for `fr` (French) and `pl` (Polish) and translate the text content. The image keys will remain the same for all languages.

---

### 3. How to Manage Images

All image URLs are managed in one place: **`src/content/imageStore.ts`**.

**To add a new image:**

1.  **Open `src/content/imageStore.ts`**.
2.  **Add the URL**: Add a new line inside the `imageStore` object. Create a unique key and paste the full image URL.
    ```javascript
    export const imageStore: Record<ImageKey, string> = {
      // ... existing images
      portfolio_myproject_main: "https://.../your-new-image.jpg",
    };
    ```
3.  **Update the `ImageKey` Type**: Add your new key to the `ImageKey` type definition at the top of the file. This ensures type safety.
    ```typescript
    export type ImageKey = 
      | 'portfolio_ambrees_main'
      // ... other keys
      | 'portfolio_myproject_main'; // Add your new key here
    ```
4.  **Use the Key**: You can now use `"portfolio_myproject_main"` as a value for any `image`, `screenshots`, or `avatar` field inside `src/i18n.ts`.