<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true); //Added by WP-Cache Manager
define( 'WPCACHEHOME', '/home/hamkar3/hamiltonk.com/wp/wp-content/plugins/wp-super-cache/' ); //Added by WP-Cache Manager
define('DB_NAME', 'hamiltonk_com_1');

/** MySQL database username */
define('DB_USER', 'hamiltonkcom1');

/** MySQL database password */
define('DB_PASSWORD', 'f9piSaSd');

/** MySQL hostname */
define('DB_HOST', 'mysql.hamiltonk.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'My#|eE75q#;!%(ra84FPpcIWaPC@(ed`tvGG&!4ob9ukZ#i6IyYw!hgIF1V+xKNc');
define('SECURE_AUTH_KEY',  'McUV/i~szD(5OU6xm38hASnh7xRuDar`fdKNA:F)w66:F;NRyd*Y:K`s)x%+cP/:');
define('LOGGED_IN_KEY',    '7US3+&7DWhd#MpF?XcCY0Vwlj_)RrKY`Wv/;X&(P6"+o_2$YxY**T3u*mEF14*Y2');
define('NONCE_KEY',        '/a#*0IDPm^^)T4A?dpAgI^F2z/+du(_&r2oqu&IXS2S##2F&E`0flmtCj1)S!QQe');
define('AUTH_SALT',        'fnZhIh3RfffH(btKJD|HLpt**jFrFpFsbN0!5*vRLKCDi5bK:0%d(Sm^|%fGqU+m');
define('SECURE_AUTH_SALT', '$Qs@p`acYRCDtQ*EMC~"A`)ME@kNcC7vJnu8/5p&N09n03vs23J7Luc@X9z~WNTV');
define('LOGGED_IN_SALT',   'BkqWtST3)l7bocrwsu+DPrJz"*e#cD"1Z;Ih|qere@6i@I~e"`k9ID2mPH4&"yxv');
define('NONCE_SALT',       ';U)jRJmL|6jO0i7:5N_Rx"d88oHJGWDq2j#+|4cl%IZKk(Ccq;o?aQ6Kd*/SU*bj');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_ak3gyf_';

/**
 * Limits total Post Revisions saved per Post/Page.
 * Change or comment this line out if you would like to increase or remove the limit.
 */
define('WP_POST_REVISIONS',  10);

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

