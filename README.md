# Widget Project

## Available Scripts

In the project directory, you can run the following scripts:

### `yarn dev`

- Starts the app in development mode.  
- Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.  

The page will automatically reload when you edit files.  
Any linting errors will be displayed in the console.

### `yarn build`

- Builds the app for production and outputs the result to the `build` folder.  
- The production build is bundled into a single file: `bundle.js`.  

For additional details, refer to the [deployment documentation](https://facebook.github.io/create-react-app/docs/deployment).

---

## Usage

To use this widget on your webpage:

1. **Include the bundle.js file**  
   Add the following `<script>` tag to your webpage:  
   ```html
   <script src="https://rp-widget.netlify.app/bundle.js" defer></script>

2. **Insert the container element**  
    Add this container element to your webpage:
    ```html
   <div id="rp-widget" data-is-webflow></div>


## Notes
- The data-is-webflow attribute specifies the widget type:
    - Private widget: Omit the attribute.
    - Public widget: Include the attribute.