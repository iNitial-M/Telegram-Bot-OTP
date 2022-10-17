const config = require("dotenv").config();
const axios = require("axios");
const { Telegraf, Context } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

// ACCESS
const cmd_register = `/register`;
const cmd_plan = `/plan`;
const cmd_redeem = `/redeem`;
const cmd_status = `/status`;
// SERVICE
const cmd_service = `/service`;
const cmd_call = `/call (.+) (.+)`;
const cmd_cvv = `/cvv`;
const cmd_pin = `/pin`;
// SETUP BOT
const cmd_caller = `/caller`;
const cmd_lang = `/lang`;
const cmd_spoof = `/spoof`;

bot.hears(new RegExp(cmd_register), async (ctx) => {
  await ctx.reply(
    "You can get License key from here.\nContact me if you got any issue.",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Register Here",
              url: "https://google.com",
            },
          ],
        ],
      },
    }
  );
});

bot.hears(new RegExp(cmd_plan), async (ctx) => {
  await ctx.reply(
    `💰Plan Pricing\n\n▪️15$ - 3 Day | OTP CALLER\n▪️25$ - 7 Day | OTP CALLER\n▪️125$ - 1 Month | OTP CALLER\n\nRegister Here: `
  );
});

bot.hears(new RegExp(cmd_redeem), async (ctx) => {
  await ctx.reply(`Input Your Voucher Code: `);
});

bot.hears(new RegExp(cmd_status), async (ctx) => {
  await ctx.reply(
    `❌Sorry..!!! You don't have any access here\n\n✅Contact me: @callmexhunter or get your license key from /register.`
  );
});

bot.hears(new RegExp(cmd_call), async (ctx) => {
  const admin = 5221955823;
  const otp = Math.floor(100000 + Math.random() * 900000);
  const messageText1 = ctx.match[1];
  const messageText2 = ctx.match[2];
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  if (ctx.message.from.id == admin) {
    if (messageText1.length >= 8) {
      await sleep(1500);
      await ctx.reply(`Please wait for calling ${messageText1}`);
      switch (ctx.match[2]) {
        case "paypal" || "Paypal":
          await ctx.reply(`Mode Paypal`);
          break;
        case "venmo" || "Venmo":
          await ctx.reply(`Mode Venmo`);
          break;
        case "amazon" || "Amazon":
          await ctx.reply(`Mode Amazon`);
          break;
        case "coinbase" || "Coinbase":
          await ctx.reply(`Mode Coinbase`);
          break;
        case "binance" || "Binance":
          await ctx.reply(`Services unavailables`);
          break;
        case "icloud" || "Icloud":
          await ctx.reply(`Mode Icloud`);
          break;
        case "email" || "Email":
          await ctx.reply(`Mode Email`);
          break;
        case "bank" || "Bank":
          await ctx.reply(`Mode Bank`);
          break;
      }
      await sleep(1500);
      await ctx.reply(`🔊 Status: Ringing....`);
      await sleep(6000);
      await ctx.reply(`❌ Status: Victim not answer calls`);
      await sleep(2500);
      await ctx.reply(`🕓 Please wait for call again`);
      await sleep(1500);
      await ctx.reply(`🔊 Status: Ringing....`);
      await sleep(6000);
      await ctx.reply(`📲 Status: Victim answer calls`);
      await sleep(10000);
      await ctx.reply(`🚨 Status: Victim presses the keyboard...`);
      await sleep(8000);
      await ctx.reply(`🔐 Boom, this is your ${messageText2} OTP: ${otp}`);
    } else {
      await ctx.reply(`${messageText1} is not valid number`);
    }
  } else {
    await ctx.reply(`❌Sorry..!!! You don't have access.`);
  }
});

bot.hears(new RegExp(cmd_cvv), async (ctx) => {
  await ctx.reply(`❌Sorry..!!! You don't have access.`);
});

bot.hears(new RegExp(cmd_pin), async (ctx) => {
  await ctx.reply(`❌Sorry..!!! You don't have access.`);
});

bot.hears(new RegExp(cmd_caller), async (ctx) => {
  await ctx.reply(`❌Sorry..!!! You don't have access.`);
});

bot.hears(new RegExp(cmd_lang), async (ctx) => {
  await ctx.reply(`❌Sorry..!!! You don't have access.`);
});

bot.hears(new RegExp(cmd_spoof), async (ctx) => {
  await ctx.reply(`❌Sorry..!!! You don't have access.`);
});

bot.hears(new RegExp(cmd_service), async (ctx) => {
  await ctx.reply(
    `📂Service Available\n\nOTP SERVICE\n🟢Any Bank\n🟢Paypal\n🟢Venmo\n🟢Amazon\n🟢Coinbase\n🔴Binance\n🟢Icloud\n🟢Email OTP, ex: Yahoo, Office\n\n\nIf you have any request chat me: @callmexhunter`
  );
});

bot.help(async (ctx) => {
  await ctx.reply(
    `⚠️How To Use: \n\n▪️Call Command:\n\n/call <phone_victim> paypal\n\n▪️Cvv Command:\n\n/cvv <phone_victim> mastercard chase\n\n▪️Pin Command:\n\n/pin <phone_victim> 6 <= 6 is digit of pin number\n\n▪️Setup BOT\n/caller - Command for setup voice caller ex: male or female\n/lang - Command for setup lang voice caller ex: en, ru, es\n/spoof - Command for setup spoofer ID in call number ex: Paypal, Amazon, Chase, Binance\n\nNote: Please check service available on /service.\n\n`
  );
});

bot.start(async (ctx) => {
  await ctx.reply(
    `☎️OTP CALLER\n\n⚠️How To Use\n▪️/help - Check how to use this bot.\n▪️/service - Check service available.\n\n🔑ACCESS BOT\n▪️/register - Register access for use this bot.\n▪️/plan - Check plan price.\n▪️/redeem - Redeem voucher.\n▪️/status - Check status subscription plan.\n\n📂COMMAND SERVICE\n▪️/call - Call Command\n▪️/cvv - Get CVV from call method\n▪️/pin - Get Pin from call method\n\nMore info check help command.\n\n⚙️SETUP BOT\n▪️/caller - Setup voice caller ex: male or female\n▪️/lang - Setup lang voice caller ex: en, ru, es\n▪️/spoof - Setup spoof caller ex: Amazon, Paypal, Chase, Binance`
  );
});

bot.launch().then((_) => console.log("Bot is running..."));

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
