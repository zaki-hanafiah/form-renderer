import type { MetricType } from 'web-vitals'

const reportWebVitals = (onPerfEntry?: (metric: MetricType) => void) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
            onCLS(onPerfEntry)
            onINP(onPerfEntry)
            onFCP(onPerfEntry)
            onLCP(onPerfEntry)
            onTTFB(onPerfEntry)
        })
    }
}

export default reportWebVitals
// __afill_20260121_188__
// __afill_20260329_1228__
