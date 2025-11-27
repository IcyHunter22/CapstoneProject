// Lightweight Chart.js shim loaded as an external script so CSP 'self' allows execution.
(function(){
    if (typeof window.Chart === 'undefined') {
        console.warn('Chart shim installed: Chart.js not found.');
        function ChartShim(ctx, cfg) {
            console.warn('ChartShim called (no Chart.js):', cfg);
            return {
                destroy: function() {},
                update: function() {},
            };
        }
        ChartShim.defaults = {};
        ChartShim.register = function(){ /* no-op */ };
        window.Chart = ChartShim;
    }
})();
