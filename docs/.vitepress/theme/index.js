import DefaultTheme from 'vitepress/theme'
import 'react-chrono/dist/style.css'
import './custom.css'

// Import all Vue wrapper components
import BasicTimelineDemo from '../components/BasicTimelineDemo.vue'
import IconsDemo from '../components/IconsDemo.vue'
import AlternatingTimelineDemo from '../components/AlternatingTimelineDemo.vue'
import DarkModeDemo from '../components/DarkModeDemo.vue'
import EmbedMediaDemo from '../components/EmbedMediaDemo.vue'
import HorizontalTimelineDemo from '../components/HorizontalTimelineDemo.vue'
import SlideshowDemo from '../components/SlideshowDemo.vue'
import VerticalTimelineDemo from '../components/VerticalTimelineDemo.vue'
import NestedTimelineDemo from '../components/NestedTimelineDemo.vue'
import FlipLayoutVerticalDemo from '../components/FlipLayoutVerticalDemo.vue'
import FlipLayoutAlternatingDemo from '../components/FlipLayoutAlternatingDemo.vue'
import TextOverlayDemo from '../components/TextOverlayDemo.vue'
import SearchDemo from '../components/SearchDemo.vue'
import TailwindTimelineDemo from '../components/TailwindTimelineDemo.vue'
import NextJsTimelineDemo from '../components/NextJsTimelineDemo.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register all components globally
    app.component('BasicTimelineDemo', BasicTimelineDemo)
    app.component('IconsDemo', IconsDemo)
    app.component('AlternatingTimelineDemo', AlternatingTimelineDemo)
    app.component('DarkModeDemo', DarkModeDemo)
    app.component('EmbedMediaDemo', EmbedMediaDemo)
    app.component('HorizontalTimelineDemo', HorizontalTimelineDemo)
    app.component('SlideshowDemo', SlideshowDemo)
    app.component('VerticalTimelineDemo', VerticalTimelineDemo)
    app.component('NestedTimelineDemo', NestedTimelineDemo)
    app.component('FlipLayoutVerticalDemo', FlipLayoutVerticalDemo)
    app.component('FlipLayoutAlternatingDemo', FlipLayoutAlternatingDemo)
    app.component('TextOverlayDemo', TextOverlayDemo)
    app.component('SearchDemo', SearchDemo)
    app.component('TailwindTimelineDemo', TailwindTimelineDemo)
    app.component('NextJsTimelineDemo', NextJsTimelineDemo)
  }
}

