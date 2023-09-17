<?php
/**
 * Coin price scanner block template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during backend preview render.
 * @param   int $post_id The post ID the block is rendering content against.
 *          This is either the post ID currently being displayed inside a query loop,
 *          or the post ID of the post hosting this block.
 * @param   array $context The context provided to the block by the post or it's parent block.
 */

// Support custom "anchor" values.
$anchor = '';
if ( ! empty( $block['anchor'] ) ) {
    $anchor = 'id="' . esc_attr( $block['anchor'] ) . '" ';
}

// Create class attribute allowing for custom "className" and "align" values.
$class_name = 'coins';
if ( ! empty( $block['className'] ) ) {
    $class_name .= ' ' . $block['className'];
}
if ( ! empty( $block['align'] ) ) {
    $class_name .= ' align' . $block['align'];
}

if(isset($block['data']['preview_image_help'])) :

    echo '<img src="'. $block['data']['preview_image_help'] .'" style="width:100%; height:auto;">';

else :

$heading = get_field('heading');
$cta = get_field('cta');

$symbols    = array('BTC', 'ETH', 'LTC', 'USDT', 'DASH');
$symbol_names = array(
    'BTC' => array(
        'name' => 'Bitcoin'
    ),
    'ETH' => array(
        'name' => 'Ethereum'
    ),
    'LTC' => array(
        'name' => 'Litecoin'
    ),
    'USDT' => array(
        'name' => 'Tether USDT'
    ),
    'DASH' => array(
        'name' => 'Dash'
    )
);
foreach ($symbols as $symbol) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt_array($curl, array(
        CURLOPT_URL            => 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=' . $symbol . '%2CUSD&sort=market_cap&cryptocurrency_type=all&tag=all',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING       => '',
        CURLOPT_MAXREDIRS      => 10,
        CURLOPT_TIMEOUT        => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST  => 'GET',
        CURLOPT_HTTPHEADER     => array(
            'X-CMC_PRO_API_KEY: cf83b1fb-327f-4948-876a-ec0760b5c56e',
            'Accept: */*'
        ),
    ));
    
    $response = curl_exec($curl);
    curl_close($curl);
    $data = json_decode($response);
    $table_data[$symbol] = array(
        'price' => $data->data[0]->quote->USD->price,
        'percent_change_24h' => $data->data[0]->quote->USD->percent_change_24h,
        'market_cap' => $data->data[0]->quote->USD->market_cap,
    );
}                  

?>

<section class="<?= $class_name ?>">

    <div class="<?= $class_name ?>__container">
        <?php if ($heading): ?>
            <h2 class="<?= $class_name ?>__heading"><?= $heading ?></h2>
        <?php endif; ?>

        <ul class="<?= $class_name ?>__tab-selectors">
            
            <li class="<?= $class_name ?>__tab-selector <?= $class_name ?>__tab-selector--active" data-tab="1">
                Tab item 1
            </li>
            <li class="<?= $class_name ?>__tab-selector" data-tab="2">
                Tab item 2
            </li>
            <li class="<?= $class_name ?>__tab-selector" data-tab="3">
                Tab item 3
            </li>
        </ul>

        <ul class="<?= $class_name ?>__tab-contents">
            
            <li class="<?= $class_name ?>__tab-content <?= $class_name ?>__tab-content--active" data-content="1">
                <table class="<?= $class_name ?>__table">
                    <thead>
                        <tr>
                            <th>Coin details</th>
                            <th>Last Price</th>
                            <th>24h Change</th>
                            <th>Market Cap</th>
                            <th>Markets</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ( $table_data as $symbol => $table_row ) : ?>
                            <tr>
                                <td>
                                    <figure class="<?= $class_name ?>__coin">
                                        <img class="<?= $class_name ?>__icon" src="<?= plugin_dir_url(__FILE__) ?>assets/images/<?= $symbol ?>.svg">
                                        <figcaption>
                                            <span class="<?= $class_name ?>__symbol"><?= $symbol ?></span>
                                            <span class="<?= $class_name ?>__name"><?= $symbol_names[$symbol]['name'] ?></span>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>$<?= $table_row['price'] ?></td>
                                <td><?= $table_row['percent_change_24h'] ?></td>
                                <td>$<?= $table_row['market_cap'] ?></td>
                                <td class="<?= $class_name ?>__graph"></td>
                            </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </li>


            <li class="<?= $class_name ?>__tab-content" data-content="2">
            <table class="<?= $class_name ?>__table">
                    <thead>
                        <tr>
                            <th>Coin details</th>
                            <th>Last Price</th>
                            <th>24h Change</th>
                            <th>Market Cap</th>
                            <th>Markets</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ( $table_data as $symbol => $table_row ) : ?>
                            <tr>
                                <td>
                                    <figure class="<?= $class_name ?>__coin">
                                        <img class="<?= $class_name ?>__icon" src="<?= plugin_dir_url(__FILE__) ?>assets/images/<?= $symbol ?>.svg">
                                        <figcaption>
                                            <span class="<?= $class_name ?>__symbol"><?= $symbol ?></span>
                                            <span class="<?= $class_name ?>__name"><?= $symbol_names[$symbol]['name'] ?> 2</span>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>$<?= $table_row['price'] ?></td>
                                <td><?= $table_row['percent_change_24h'] ?></td>
                                <td>$<?= $table_row['market_cap'] ?></td>
                                <td class="<?= $class_name ?>__graph"></td>
                            </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </li>
            <li class="<?= $class_name ?>__tab-content" data-content="3">
            <table class="<?= $class_name ?>__table">
                    <thead>
                        <tr>
                            <th>Coin details</th>
                            <th>Last Price</th>
                            <th>24h Change</th>
                            <th>Market Cap</th>
                            <th>Markets</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ( $table_data as $symbol => $table_row ) : ?>
                            <tr>
                                <td>
                                    <figure class="<?= $class_name ?>__coin">
                                        <img class="<?= $class_name ?>__icon" src="<?= plugin_dir_url(__FILE__) ?>assets/images/<?= $symbol ?>.svg">
                                        <figcaption>
                                            <span class="<?= $class_name ?>__symbol"><?= $symbol ?></span>
                                            <span class="<?= $class_name ?>__name"><?= $symbol_names[$symbol]['name'] ?> 3</span>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>$<?= $table_row['price'] ?></td>
                                <td><?= $table_row['percent_change_24h'] ?></td>
                                <td>$<?= $table_row['market_cap'] ?></td>
                                <td class="<?= $class_name ?>__graph"></td>
                            </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </li>
        </ul>

        <?php if ($cta) : 
            $cta_url = $cta['url'];
            $cta_title = $cta['title'];
            $cta_target = $cta['target'] ? $cta['target'] : '_self';    
        ?>

            <div class="<?= $class_name ?>__button-wrap button-wrap">
                    <a class="button button--primary" href="<?=$cta_url ?>" target="<?= $cta_target ?>" data-text="<?= $cta_title ?>"><?= $cta_title ?></a>
            </div>
            
        <?php endif; ?>
    </div>

</section>

<?php
    endif;