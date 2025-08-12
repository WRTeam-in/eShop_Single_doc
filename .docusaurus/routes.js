import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my-docs/__docusaurus/debug',
    component: ComponentCreator('/my-docs/__docusaurus/debug', 'c63'),
    exact: true
  },
  {
    path: '/my-docs/__docusaurus/debug/config',
    component: ComponentCreator('/my-docs/__docusaurus/debug/config', '90c'),
    exact: true
  },
  {
    path: '/my-docs/__docusaurus/debug/content',
    component: ComponentCreator('/my-docs/__docusaurus/debug/content', '50e'),
    exact: true
  },
  {
    path: '/my-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/my-docs/__docusaurus/debug/globalData', '9e2'),
    exact: true
  },
  {
    path: '/my-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/my-docs/__docusaurus/debug/metadata', '315'),
    exact: true
  },
  {
    path: '/my-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/my-docs/__docusaurus/debug/registry', '820'),
    exact: true
  },
  {
    path: '/my-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/my-docs/__docusaurus/debug/routes', 'ff5'),
    exact: true
  },
  {
    path: '/my-docs/search',
    component: ComponentCreator('/my-docs/search', '675'),
    exact: true
  },
  {
    path: '/my-docs/docs',
    component: ComponentCreator('/my-docs/docs', '404'),
    routes: [
      {
        path: '/my-docs/docs',
        component: ComponentCreator('/my-docs/docs', '29e'),
        routes: [
          {
            path: '/my-docs/docs',
            component: ComponentCreator('/my-docs/docs', 'e2b'),
            routes: [
              {
                path: '/my-docs/docs/category/customer',
                component: ComponentCreator('/my-docs/docs/category/customer', '7ea'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/category/featured-sections',
                component: ComponentCreator('/my-docs/docs/category/featured-sections', '6c5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/category/location',
                component: ComponentCreator('/my-docs/docs/category/location', '1fc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/category/products',
                component: ComponentCreator('/my-docs/docs/category/products', 'b8b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/category/reports',
                component: ComponentCreator('/my-docs/docs/category/reports', '719'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/category/system',
                component: ComponentCreator('/my-docs/docs/category/system', '05d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/changelog',
                component: ComponentCreator('/my-docs/docs/changelog', '429'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/change-api-parameters',
                component: ComponentCreator('/my-docs/docs/flutter/change-api-parameters', '2ed'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/enable-cloudkit-in-ios-for-multiple-file-upload',
                component: ComponentCreator('/my-docs/docs/flutter/enable-cloudkit-in-ios-for-multiple-file-upload', '81a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/flutter-doctor-output-error',
                component: ComponentCreator('/my-docs/docs/flutter/flutter-doctor-output-error', 'a46'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/flutter-intro',
                component: ComponentCreator('/my-docs/docs/flutter/flutter-intro', 'f3a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/get-privacy-policy-url-for-playstore',
                component: ComponentCreator('/my-docs/docs/flutter/get-privacy-policy-url-for-playstore', '683'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-add-map-api-key-for-address',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-add-map-api-key-for-address', '0c9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-add-remove-language',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-add-remove-language', 'e79'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-change-app-color',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-change-app-color', '433'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-change-app-font',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-change-app-font', 'b73'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-change-app-logo',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-change-app-logo', 'ca8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-change-app-version',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-change-app-version', '2d5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-change-appname',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-change-appname', 'd89'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-change-default-country-code-for-otp',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-change-default-country-code-for-otp', 'c99'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-change-default-language-of-app',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-change-default-language-of-app', '348'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-change-images-in-app',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-change-images-in-app', 'efb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-change-language-string-value',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-change-language-string-value', 'b6a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-change-package-name',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-change-package-name', 'a29'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-change-server-url',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-change-server-url', 'db1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-create-deep-link-for-share-item',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-create-deep-link-for-share-item', 'eb8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-create-firebase-project',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-create-firebase-project', '03a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-enable-firebase-blaze-billing',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-enable-firebase-blaze-billing', '557'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-enable-firebase-phone-authentication-otp',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-enable-firebase-phone-authentication-otp', 'd6e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-first-run-project',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-first-run-project', '53a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-fit-xy-fill-product-image-in-box',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-fit-xy-fill-product-image-in-box', '32c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-generate-release-apks',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-generate-release-apks', '013'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-increase-product-load-limit',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-increase-product-load-limit', 'd0d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-manage-payment-gateway-and-add-credential-in-admin-panel',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-manage-payment-gateway-and-add-credential-in-admin-panel', 'bac'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-manage-preferred-delivery-date-time',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-manage-preferred-delivery-date-time', '9e3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-remove-dark-theme',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-remove-dark-theme', 'ea0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-set-currency-code-for-application',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-set-currency-code-for-application', 'ffd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-set-notification',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-set-notification', '1f3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-setup-flutter',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-setup-flutter', '8ad'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-setup-latest-java-jdk-on-windows',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-setup-latest-java-jdk-on-windows', '16e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/how-to-solve-data-safety-issue-in-play-store',
                component: ComponentCreator('/my-docs/docs/flutter/how-to-solve-data-safety-issue-in-play-store', '5a9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/required-software',
                component: ComponentCreator('/my-docs/docs/flutter/required-software', '8d9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/steps-to-authenticate-firebase-using-apple',
                component: ComponentCreator('/my-docs/docs/flutter/steps-to-authenticate-firebase-using-apple', 'cb9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/steps-to-authenticate-firebase-using-google',
                component: ComponentCreator('/my-docs/docs/flutter/steps-to-authenticate-firebase-using-google', 'ef9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/flutter/steps-to-publish-ios-app-to-app-store',
                component: ComponentCreator('/my-docs/docs/flutter/steps-to-publish-ios-app-to-app-store', '1f1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/intro',
                component: ComponentCreator('/my-docs/docs/intro', '3d0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/support',
                component: ComponentCreator('/my-docs/docs/support', '559'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/auto-update',
                component: ComponentCreator('/my-docs/docs/web/auto-update', '388'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/categories',
                component: ComponentCreator('/my-docs/docs/web/categories', 'ab6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/client-api-keys-config',
                component: ComponentCreator('/my-docs/docs/web/client-api-keys-config', 'b3b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/customer/transaction',
                component: ComponentCreator('/my-docs/docs/web/customer/transaction', '134'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/customer/view-customers',
                component: ComponentCreator('/my-docs/docs/web/customer/view-customers', 'a65'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/customer/wallet-transaction',
                component: ComponentCreator('/my-docs/docs/web/customer/wallet-transaction', '9cb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/faq',
                component: ComponentCreator('/my-docs/docs/web/faq', '81a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/featured-sections/manage-sections',
                component: ComponentCreator('/my-docs/docs/web/featured-sections/manage-sections', '883'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/featured-sections/sections-order',
                component: ComponentCreator('/my-docs/docs/web/featured-sections/sections-order', 'd1c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/home',
                component: ComponentCreator('/my-docs/docs/web/home', '326'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/home-slider-images',
                component: ComponentCreator('/my-docs/docs/web/home-slider-images', 'd0f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/installation',
                component: ComponentCreator('/my-docs/docs/web/installation', '91e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/location/areas',
                component: ComponentCreator('/my-docs/docs/web/location/areas', '486'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/location/city',
                component: ComponentCreator('/my-docs/docs/web/location/city', '263'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/media-management',
                component: ComponentCreator('/my-docs/docs/web/media-management', 'c2b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/new-offers-images',
                component: ComponentCreator('/my-docs/docs/web/new-offers-images', '7bb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/orders',
                component: ComponentCreator('/my-docs/docs/web/orders', '5dc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/overview',
                component: ComponentCreator('/my-docs/docs/web/overview', 'fe1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/products/add-products',
                component: ComponentCreator('/my-docs/docs/web/products/add-products', '0a6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/products/attribute-sets',
                component: ComponentCreator('/my-docs/docs/web/products/attribute-sets', '67e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/products/attribute-values',
                component: ComponentCreator('/my-docs/docs/web/products/attribute-values', '0d0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/products/attributes',
                component: ComponentCreator('/my-docs/docs/web/products/attributes', '565'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/products/manage-products',
                component: ComponentCreator('/my-docs/docs/web/products/manage-products', '13c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/products/products-order',
                component: ComponentCreator('/my-docs/docs/web/products/products-order', 'cca'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/products/tax',
                component: ComponentCreator('/my-docs/docs/web/products/tax', 'cad'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/promo-code',
                component: ComponentCreator('/my-docs/docs/web/promo-code', '8a1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/reports/sales-report',
                component: ComponentCreator('/my-docs/docs/web/reports/sales-report', '05d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/send-notification',
                component: ComponentCreator('/my-docs/docs/web/send-notification', 'e04'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/support',
                component: ComponentCreator('/my-docs/docs/web/support', 'e46'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/system-flow',
                component: ComponentCreator('/my-docs/docs/web/system-flow', '0b1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/system/about-us',
                component: ComponentCreator('/my-docs/docs/web/system/about-us', '3b3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/system/contact-us',
                component: ComponentCreator('/my-docs/docs/web/system/contact-us', '7cf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/system/delivery-boy-privacy-policy',
                component: ComponentCreator('/my-docs/docs/web/system/delivery-boy-privacy-policy', 'db3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/system/email-settings',
                component: ComponentCreator('/my-docs/docs/web/system/email-settings', '689'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/system/notification-settings',
                component: ComponentCreator('/my-docs/docs/web/system/notification-settings', '4fd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/system/payment-methods',
                component: ComponentCreator('/my-docs/docs/web/system/payment-methods', '6f5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/system/privacy-policy',
                component: ComponentCreator('/my-docs/docs/web/system/privacy-policy', 'ec0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/system/shipping-methods',
                component: ComponentCreator('/my-docs/docs/web/system/shipping-methods', 'd99'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/system/store-settings',
                component: ComponentCreator('/my-docs/docs/web/system/store-settings', 'c97'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/system/time-slots',
                component: ComponentCreator('/my-docs/docs/web/system/time-slots', 'fc0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/tabs',
                component: ComponentCreator('/my-docs/docs/web/tabs', 'ad5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs/docs/web/web-version-firebase-config',
                component: ComponentCreator('/my-docs/docs/web/web-version-firebase-config', '929'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/my-docs/',
    component: ComponentCreator('/my-docs/', 'b86'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
