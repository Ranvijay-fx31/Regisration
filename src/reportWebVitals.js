/**
 * Reports web vitals metrics using the web-vitals library
 * 
 * @param {Function} onPerfEntry - Callback function to handle performance metrics
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Dynamically import web-vitals library only when needed
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Core Web Vitals
      getCLS(onPerfEntry); // Cumulative Layout Shift
      getLCP(onPerfEntry); // Largest Contentful Paint
      
      // Other Web Vitals
      getFID(onPerfEntry); // First Input Delay
      getFCP(onPerfEntry); // First Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};

export default reportWebVitals;