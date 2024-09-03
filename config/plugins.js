module.exports = ({ env }) => ({
    // ...
    'duplicate-button': true,
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: env('SENDGRID_EMAIL_FROM'),
          defaultReplyTo: env('SENDGRID_EMAIL_TO'),
        },
      },
    },
    // ...
  });