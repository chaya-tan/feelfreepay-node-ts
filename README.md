# FeelFreePay Node ts

Unofficial Node.js Library for FeelFreePay with helper included to seamlessly integrate into your backend

Forked from `node-gbprimepay` and changed to the new endpoint

## Note

Still WIP, but contributions are welcome!
I only use QR Cash in my work, so other channel still UNTESTED

if you face any bug, feel free to make a PR!

## Features

- Written in TypeScript
- Does Checksum things for you
- No more HTML forms in frontend, your secret key will never leak again
- Tries to replace bad UX HTML pages with direct link to Payment services or App Deeplink

## What will the `create()` method return?

By default the library will tries to parse data from HTML page returned from GB Prime Pay API and will give you a direct link (vary by channel), but you can revert this by set argument `raw` as `true`

- `LINEPAY` will returns Rabbit LINE Pay Checkout URL Page
- `SHOPEEPAY` will returns ShopeePay Checkout URL Page
- `TRUEWALLET` will returns `ptx_id` for requesting OTP with `truemoney_sendOtp()` or `truemoney_resendOtp()` then submit using `truemoney_submitOtp()`
- `MOBILE_BANKING` vary by Bank Code
  - `014` will returns SCB EASY App Deeplink `scbeasy://`
  - `002` will returns Bualuang mBanking App Deeplink `bualuangmbanking://`

Other channels are <ins>untested</ins> and will return <ins>unparsed HTML/JSON</ins>

## License

This project is MIT licensed (see [LICENSE](LICENSE))

Not affiliated with Global Prime Corporation Co., Ltd. (GB Prime Pay) in any way,

Trademarks belongs to their respective owner.
