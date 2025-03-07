export default defineTask({
  meta: {
    name: "beeper",
    description: "Check latest beeper v4 version",
  },
  async run() {
    const storage = useStorage('data')
    const { telegram: { chatId } } = useRuntimeConfig();
    const lastVesrion = await storage.getItem('beeper:version');
    const { url } = await fetch('https://api.beeper.com/desktop/download/linux/x64/stable/com.automattic.beeper.desktop');

    console.log('Beeper url:', url);

    const version = url.split('/').pop().split('-').pop().split('.AppImage').shift();

    console.log('Beeper version:', version);
    console.log('Last version:', lastVesrion);


    if (lastVesrion !== version) {
      console.log('New version detected!');

      await storage.setItem('beeper:version', version);
      await notifyTelegram(`🆕 New beeper version available: ${version}`, chatId);
    }

    return { result: "Success" };
  },
});