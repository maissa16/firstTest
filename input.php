<input
    type="range"
    min="10"                    // default 0
    max="1000"                  // default 100
    step="10"                   // default 1
    value="300"                 // default min + (max-min)/2
    data-orientation="horizontal" // default horizontal
>
<script src="jquery.min.js"></script>
<script src="rangeslider.min.js"></script>
<script>
    // Initialize a new plugin instance for all
    // e.g. $('input[type="range"]') elements.
    $('input[type="range"]').rangeslider();

    // Destroy all plugin instances created from the
    // e.g. $('input[type="range"]') elements.
    $('input[type="range"]').rangeslider('destroy');

    // Update all rangeslider instances for all
    // e.g. $('input[type="range"]') elements.
    // Usefull if you changed some attributes e.g. `min` or `max` etc.
    $('input[type="range"]').rangeslider('update', true);
</script>