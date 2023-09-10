const sdk = require('api')('@d-id/v4.2.0#1f3wxrelm7g7po0');

sdk.auth('Basic b3NjYXJkZWxyaW84OUBnbWFpbC5jb20:CF8iCJY4nmt5P1KJwTbgK');
sdk.createTalk({
  script: {
    type: 'text',
    subtitles: true,
    provider: {
      type: 'microsoft',
      voice_id: 'en-US-JennyNeural',
      voice_config: {style: 'string', rate: '0.5', pitch: '+2st'}
    },
    ssml: true,
    input: 'This is an example text'
  },
  config: {
    logo: {position: [0, 500], url: 'string'},
    fluent: true,
    pad_audio: 0,
    driver_expressions: {
      expressions: [{start_frame: 0, expression: 'neutral', intensity: 0}],
      transition_frames: 0
    },
    align_driver: true,
    align_expand_factor: 0,
    auto_match: true,
    motion_factor: 0,
    normalization_factor: 0,
    sharpen: true,
    stitch: true,
    result_format: 'mp4'
  },
  face: {top_left: [0, 0], size: 512},
  source_url: 'https://path.to.directory/image.jpg',
  driver_url: 'bank://lively',
  user_data: 'string',
  name: 'string',
  webhook: 'https://host.domain.tld/to/webhook',
  result_url: 'https://path.to.directory/',
  persist: true
})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));