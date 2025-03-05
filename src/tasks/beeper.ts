export default defineTask({
  meta: {
    name: "beeper",
    description: "Check latest beeper v4 version",
  },
  async run() {
    const lastVesrion = await useStorage().getItem('beeper:version');
    const { url } = await fetch('https://api.beeper.com/desktop/download/linux/x64/stable/com.automattic.beeper.desktop');

    console.log('Beeper url:', url);

    const version = url.split('/').pop().split('-').pop().split('.AppImage').shift();

    console.log('Beeper version:', version);

    if (lastVesrion !== version) {
      console.log('New version detected!');

      await useStorage().setItem('beeper:version', version);
      await notifyTelegram(`🆕 New beeper version available: ${version}`);
    }

    return { result: "Success" };
  },
});