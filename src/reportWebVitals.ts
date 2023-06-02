import type { ReportHandler } from 'web-vitals'

let reportWebVitals: (onPerfEntry?: ReportHandler) => void
// eslint-disable-next-line prefer-const
reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry != null && onPerfEntry instanceof Function) {
    void import('web-vitals').then(
      ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry)
        getFID(onPerfEntry)
        getFCP(onPerfEntry)
        getLCP(onPerfEntry)
        getTTFB(onPerfEntry)
      }
    )
  }
}

export default reportWebVitals
