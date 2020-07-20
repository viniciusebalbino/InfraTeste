var express = require('express')
const Prometheus = require('prom-client');
var express = require('express');
const port = process.env.PORT || 3000
const metricsInterval = Prometheus.collectDefaultMetrics()
var router = express.Router();
const httpRequestDurationMicroseconds = new Prometheus.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.10, 5, 15, 50, 100, 200, 300, 400, 500]  // buckets for response time from 0.1ms to 500ms
})
router.get('/', (req, res) => {
  res.set('Content-Type', Prometheus.register.contentType)
  res.end(Prometheus.register.metrics())
});

module.exports = router ;