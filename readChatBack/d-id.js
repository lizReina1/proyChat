
  const sdk = require('api')('@d-id/v4.2.0#1f3wxrelm7g7po0');

  sdk.auth('Basic b3NjYXJkZWxyaW84OUBnbWFpbC5jb20:CF8iCJY4nmt5P1KJwTbgK');
  sdk.createTalk({
    script: {
      type: 'text',
      subtitles: 'false',
      provider: {type: 'microsoft', voice_id: 'en-US-JennyNeural'},
      ssml: 'false'
    },
    config: {fluent: 'false', pad_audio: '0.0'}
  })
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err));  