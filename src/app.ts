import { App, LogLevel } from "@slack/bolt";

const app = new App({
 socketMode: true,
 token: process.env.SLACK_BOT_TOKEN,
 appToken: process.env.SLACK_APP_TOKEN,
 logLevel: LogLevel.DEBUG,
});

app.command("/hello-sandbox", async ({ ack }) => {
 await ack("Hello!");
});

app.event("app_mention", async ({ say }) => {
 await say("あああああああ");
});

; (async () => {
 await app.start();
 console.log("⚡️ Bolt app is running!");
})();