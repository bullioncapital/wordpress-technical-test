<div class="coin-table">
     <table class="crypto-table" data-symbol="<?php echo $atts['coins'];?>" data-range="<?php echo $atts['history'];?>" data-convert="<?php echo $atts['convert'];?>" data-dataid="<?php echo $atts['dataid'];?>" >
            <thead>
                <tr>
                    <th>Coin Details</th>
                    <th>Last Price</th>
                    <th>24h Change</th>
                    <th>Market Cap</th>
                    <th>Markets</th>
                </tr>
            </thead>
            <tbody>
                <!-- Data will be injected here by JavaScript -->
            </tbody>
        </table>
		<div class="overlay">
			<img src="<?php echo ABX_URL.'loader.gif' ;?>" />
		</div>
</div>
