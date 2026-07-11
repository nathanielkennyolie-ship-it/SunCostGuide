// Stub — extracts colors from an image or outputs palette
if (process.argv.includes('--palette')) {
  console.log(JSON.stringify({ palette: ['#ffffff', '#0f0f14', '#5e6ad2'] }));
} else {
  console.log(JSON.stringify({ status: 'stub', image: process.argv[2] }));
}
