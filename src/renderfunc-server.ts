import createApp from "./main";
import { renderToString } from 'vue/server-renderer';




export default function render(url: string) {
    
    const app = createApp();

    const html = renderToString(app);

    return html;

}